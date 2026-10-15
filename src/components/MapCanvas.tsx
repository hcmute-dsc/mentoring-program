import {
  Fragment,
  memo,
  useEffect,
  useRef,
  type FocusEvent,
  type KeyboardEvent,
  type PointerEvent,
  type RefObject,
} from 'react';
import logo from '../assets/logo.jpg';
import type { Graph } from '../graph';
import type { MapNode } from '../types';
import { clamp, type Box, type Viewport } from '../useViewport';
import { EdgeLabel } from './EdgeLabel';

interface Props {
  /** The diagram to draw. */
  graph: Graph;
  svgRef: RefObject<SVGSVGElement>;
  worldRef: RefObject<SVGGElement>;
  vp: Viewport;
  rowOpen: Record<string, boolean>;
  selectedId: string | null;
  onOpenNode: (id: string) => void;
  onToggleRow: (head: string) => void;
  onBackgroundClick: () => void;
  /** Called when a block or toggle gets keyboard focus, with its box in map units. */
  onFocusBox: (b: Box) => void;
}

interface Point {
  x: number;
  y: number;
}
interface DragState {
  sx: number;
  sy: number;
  vx: number;
  vy: number;
  moved: boolean;
  node: string | null;
  toggle: string | null;
}
interface PinchState {
  d: number;
  k: number;
  wx: number;
  wy: number;
}

const isActivateKey = (e: KeyboardEvent) => e.key === 'Enter' || e.key === ' ';

/** Radius of the +/- timeline toggle. */
const TOGGLE_R = 14;

/**
 * Zoom speed per pixel of wheel movement. A pinch (Ctrl + wheel) sends small steps, so it needs a higher speed.
 * A two-finger trackpad swipe also sends small steps, but many of them, so the plain wheel speed suits it too.
 */
const PINCH_SPEED = 0.01;
const WHEEL_SPEED = 0.0015;
/** Largest zoom change from one wheel event (as a log factor): about 18%, like one plain mouse-wheel step. */
const MAX_WHEEL_ZOOM = 0.2;

/** Safari's pinch event (GestureEvent). TypeScript has no type for it. */
type SafariGesture = UIEvent & { scale: number; clientX: number; clientY: number };

/** :focus-visible, or true in older browsers (such as Safari before 15.4) that throw on it. */
function isFocusVisible(el: Element) {
  try {
    return el.matches(':focus-visible');
  } catch {
    return true;
  }
}

export function MapCanvas({
  graph,
  svgRef,
  worldRef,
  vp,
  rowOpen,
  selectedId,
  onOpenNode,
  onToggleRow,
  onBackgroundClick,
  onFocusBox,
}: Props) {
  const stageRef = useRef<HTMLDivElement>(null);
  const pointers = useRef(new Map<number, Point>());
  const drag = useRef<DragState | null>(null);
  const pinch = useRef<PinchState | null>(null);
  const { view, viewRef, moveTo, stopAnim, zoomAt } = vp;

  /*
   * Wheel and trackpad. Attached by hand because React wheel listeners are passive and cannot preventDefault.
   * Every wheel event zooms: a mouse wheel, a two-finger trackpad swipe (up and down only),
   * and a trackpad pinch (Ctrl + wheel in most browsers, gesture events in Safari). Dragging moves the map.
   */
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    // Scale of the running Safari pinch at the last event, or null when no Safari pinch is running.
    let safariScale: number | null = null;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      // A Safari pinch is handled by the gesture events below. Do not zoom twice.
      if (e.ctrlKey && safariScale !== null) return;
      // Read deltaMode before deltaY. Firefox then reports a mouse wheel in lines (deltaMode 1), not pixels.
      const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 400 : 1;
      const dy = e.deltaY * unit;
      if (!dy) return;
      const r = svg.getBoundingClientRect();
      // Ctrl + mouse wheel also arrives here, with large steps. The limit keeps it to one normal wheel step.
      const z = dy * (e.ctrlKey ? PINCH_SPEED : WHEEL_SPEED);
      const f = Math.exp(-Math.max(-MAX_WHEEL_ZOOM, Math.min(MAX_WHEEL_ZOOM, z)));
      zoomAt(e.clientX - r.left, e.clientY - r.top, f, false);
    };
    // Safari on macOS sends a trackpad pinch as gesture events. Without preventDefault it zooms the whole page.
    const onGesture = (e: Event) => {
      e.preventDefault();
      const g = e as SafariGesture;
      if (e.type === 'gestureend') {
        safariScale = null;
        return;
      }
      if (e.type === 'gesturestart' || safariScale === null) {
        safariScale = g.scale;
        return;
      }
      const last = safariScale;
      safariScale = g.scale;
      // On iPhone and iPad, a two-finger pinch also sends pointer events, and those already zoom.
      if (pointers.current.size > 0 || !last) return;
      const r = svg.getBoundingClientRect();
      zoomAt(g.clientX - r.left, g.clientY - r.top, g.scale / last, false);
    };
    const gestureTypes = ['gesturestart', 'gesturechange', 'gestureend'];
    svg.addEventListener('wheel', onWheel, { passive: false });
    gestureTypes.forEach((t) => svg.addEventListener(t, onGesture, { passive: false }));
    return () => {
      svg.removeEventListener('wheel', onWheel);
      gestureTypes.forEach((t) => svg.removeEventListener(t, onGesture));
    };
  }, [svgRef, zoomAt]);

  /* Drag, click and pinch */
  const localPoint = (e: PointerEvent): Point => {
    const r = svgRef.current!.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };

  /** Start (or restart) a pinch from the first two pointers and the current view. */
  const startPinch = () => {
    const [a, b] = [...pointers.current.values()];
    const mx = (a.x + b.x) / 2,
      my = (a.y + b.y) / 2;
    const v = viewRef.current;
    pinch.current = { d: Math.hypot(a.x - b.x, a.y - b.y), k: v.k, wx: (mx - v.x) / v.k, wy: (my - v.y) / v.k };
  };

  const onPointerDown = (e: PointerEvent<SVGSVGElement>) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    stopAnim();
    pointers.current.set(e.pointerId, localPoint(e));
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
    const count = pointers.current.size;
    if (count === 1) {
      const target = e.target as Element;
      const togEl = target.closest('.toggle');
      const nodeEl = !togEl ? target.closest('.node') : null;
      const v = viewRef.current;
      drag.current = {
        sx: e.clientX,
        sy: e.clientY,
        vx: v.x,
        vy: v.y,
        moved: false,
        node: nodeEl?.getAttribute('data-id') ?? null,
        toggle: togEl?.getAttribute('data-toggle') ?? null,
      };
      pinch.current = null;
    } else if (count === 2) {
      startPinch();
      if (drag.current) drag.current.moved = true;
    }
  };

  const onPointerMove = (e: PointerEvent<SVGSVGElement>) => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, localPoint(e));
    const pz = pinch.current;
    const dr = drag.current;
    if (pz && pointers.current.size >= 2) {
      // Both fingers started on the same point: there is no distance to compare with yet.
      if (pz.d < 1) {
        startPinch();
        return;
      }
      const [a, b] = [...pointers.current.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      const mx = (a.x + b.x) / 2,
        my = (a.y + b.y) / 2;
      const k = clamp((pz.k * d) / pz.d);
      moveTo({ k, x: mx - pz.wx * k, y: my - pz.wy * k });
    } else if (dr) {
      const dx = e.clientX - dr.sx,
        dy = e.clientY - dr.sy;
      if (!dr.moved && Math.hypot(dx, dy) > 4) {
        dr.moved = true;
        stageRef.current?.classList.add('dragging');
      }
      if (dr.moved) moveTo({ k: viewRef.current.k, x: dr.vx + dx, y: dr.vy + dy });
    }
  };

  const endPointer = (e: PointerEvent<SVGSVGElement>) => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.delete(e.pointerId);
    const count = pointers.current.size;
    if (count === 0) {
      const dr = drag.current;
      if (dr && !dr.moved && e.type === 'pointerup') {
        if (dr.toggle) onToggleRow(dr.toggle);
        else if (dr.node) onOpenNode(dr.node);
        else onBackgroundClick();
      }
      drag.current = null;
      pinch.current = null;
      stageRef.current?.classList.remove('dragging');
    } else if (count === 1) {
      // One finger left after a pinch: keep panning from where it is.
      pinch.current = null;
      const p = [...pointers.current.values()][0];
      const r = svgRef.current!.getBoundingClientRect();
      const v = viewRef.current;
      drag.current = { sx: p.x + r.left, sy: p.y + r.top, vx: v.x, vy: v.y, moved: true, node: null, toggle: null };
    } else if (pinch.current) {
      // Three or more fingers and one lifted: the pinch pair may have changed, so restart from here.
      startPinch();
    }
  };

  /* Keyboard focus: move the map so the focused block or toggle is on screen. */
  const onFocus = (e: FocusEvent<SVGSVGElement>) => {
    const el = e.target as Element;
    // Keyboard focus only. A mouse press also focuses a block, and a pan then would fight the drag.
    if (!isFocusVisible(el)) return;
    const id = el.getAttribute('data-id');
    const head = el.getAttribute('data-toggle');
    if (id) onFocusBox(graph.byId[id]);
    else if (head) {
      const n = graph.byId[head];
      onFocusBox({ x: n.x + n.w - TOGGLE_R, y: n.y + n.h / 2 - TOGGLE_R, w: TOGGLE_R * 2, h: TOGGLE_R * 2 });
    }
  };

  const size = 24 * view.k;

  return (
    <div
      id="stage"
      ref={stageRef}
      style={{ backgroundSize: `${size}px ${size}px`, backgroundPosition: `${view.x}px ${view.y}px` }}
    >
      <svg
        id="svg"
        ref={svgRef}
        role="group"
        aria-label={`Map of the ${graph.diagram.name}. Select a block to read its details.`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endPointer}
        onPointerCancel={endPointer}
        // The browser can take capture away without a pointerup (an OS gesture, a window switch).
        onLostPointerCapture={endPointer}
        onFocus={onFocus}
      >
        <defs>
          <marker
            id="arr"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" className="mk" />
          </marker>
          <marker
            id="arr-a"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" className="mk a" />
          </marker>
          <marker
            id="arr-b"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" className="mk b" />
          </marker>
        </defs>
        <g id="world" ref={worldRef} transform={`translate(${view.x} ${view.y}) scale(${view.k})`}>
          <MapLayers
            graph={graph}
            rowOpen={rowOpen}
            selectedId={selectedId}
            onOpenNode={onOpenNode}
            onToggleRow={onToggleRow}
          />
        </g>
      </svg>
    </div>
  );
}

interface MapLayersProps {
  graph: Graph;
  rowOpen: Record<string, boolean>;
  selectedId: string | null;
  onOpenNode: (id: string) => void;
  onToggleRow: (head: string) => void;
}

/**
 * Edges, labels, blocks and timeline toggles.
 * Memoized: they only change when a timeline or the selection changes, not on every pan or zoom frame.
 */
const MapLayers = memo(function MapLayers({ graph, rowOpen, selectedId, onOpenNode, onToggleRow }: MapLayersProps) {
  const { nodes, drawnEdges, rowFrames, rowOf, rowHeadSet } = graph;
  const hidden = (id: string) => !!rowOf[id] && !rowOpen[rowOf[id]];

  return (
    <>
      {/* Timeline frames: a rounded box behind each row of phases */}
      <g>
        {rowFrames.map((f) => (
          <rect
            key={f.head}
            x={f.x}
            y={f.y}
            width={f.w}
            height={f.h}
            rx={16}
            className={'frame ' + f.c + (rowOpen[f.head] ? '' : ' hid')}
          />
        ))}
      </g>
      <g>
        {drawnEdges.map((e, i) => {
          const cls =
            'edge' + (e.c ? ' ' + e.c : '') + (e.dash ? ' dash' : '') + (e.row && !rowOpen[e.row] ? ' hid' : '');
          return (
            <path
              key={i}
              d={e.path}
              className={cls}
              markerEnd={e.noArrow ? undefined : `url(#arr${e.c ? '-' + e.c : ''})`}
            />
          );
        })}
      </g>
      <g>
        {/* A label of a closed timeline is not rendered at all, because a hidden label cannot measure its text. */}
        {drawnEdges.map(
          (e, i) => e.label && !(e.row && !rowOpen[e.row]) && <EdgeLabel key={i} d={e.path} label={e.label} />,
        )}
      </g>
      <g>
        {/* Each timeline toggle comes right after its block, so the Tab order is: block, toggle, phases. */}
        {nodes.map((n) => (
          <Fragment key={n.id}>
            <NodeBlock
              n={n}
              hidden={hidden(n.id)}
              selected={n.id === selectedId}
              onKeyDown={(e) => {
                if (isActivateKey(e)) {
                  e.preventDefault();
                  if (!e.repeat) onOpenNode(n.id);
                }
              }}
            />
            {rowHeadSet.has(n.id) && <RowToggle n={n} open={!!rowOpen[n.id]} onToggle={onToggleRow} />}
          </Fragment>
        ))}
      </g>
    </>
  );
});

interface RowToggleProps {
  n: MapNode;
  open: boolean;
  onToggle: (head: string) => void;
}

/** The +/- button on the right edge of a timeline block. */
function RowToggle({ n, open, onToggle }: RowToggleProps) {
  const cx = n.x + n.w,
    cy = n.y + n.h / 2;
  return (
    <g
      className="toggle"
      tabIndex={0}
      role="button"
      data-toggle={n.id}
      aria-label={'Show or hide ' + n.t}
      aria-expanded={open}
      // A held key repeats. Act once, so the timeline does not flicker open and closed.
      onKeyDown={(e) => {
        if (isActivateKey(e)) {
          e.preventDefault();
          if (!e.repeat) onToggle(n.id);
        }
      }}
    >
      <circle cx={cx} cy={cy} r={TOGGLE_R} />
      <text x={cx} y={cy + 5} textAnchor="middle">
        {open ? '−' : '+'}
      </text>
    </g>
  );
}

interface NodeBlockProps {
  n: MapNode;
  hidden: boolean;
  selected: boolean;
  onKeyDown: (e: KeyboardEvent<SVGGElement>) => void;
}

function NodeBlock({ n, hidden, selected, onKeyDown }: NodeBlockProps) {
  const rx = n.k === 'chip' ? Math.min(14, n.h / 2) : 10;
  const cx = n.x + n.w / 2,
    cy = n.y + n.h / 2;
  const cls = 'node k-' + n.k + (selected ? ' sel' : '') + (hidden ? ' hid' : '');

  let content;
  if (n.img) {
    content = (
      <>
        <image
          href={logo}
          x={n.x + 20}
          y={n.y + 16}
          width={n.w - 40}
          height={(n.w - 40) * 0.4}
          preserveAspectRatio="xMidYMid meet"
        />
        <text x={cx} y={n.y + n.h - 34} textAnchor="middle" className="t">
          {n.t}
        </text>
        <text x={cx} y={n.y + n.h - 15} textAnchor="middle" className="s">
          {n.s}
        </text>
      </>
    );
  } else if (n.s) {
    content = (
      <>
        <text x={cx} y={cy - 3} textAnchor="middle" className={'t' + (n.code ? ' code' : '')}>
          {n.t}
        </text>
        <text x={cx} y={cy + 15} textAnchor="middle" className="s">
          {n.s}
        </text>
      </>
    );
  } else {
    content = (
      <text x={cx} y={cy + 5} textAnchor="middle" className="t">
        {n.t}
      </text>
    );
  }

  return (
    <g
      className={cls}
      tabIndex={0}
      role="button"
      data-id={n.id}
      aria-label={n.t + (n.s ? ', ' + n.s : '')}
      onKeyDown={onKeyDown}
    >
      <rect x={n.x} y={n.y} width={n.w} height={n.h} rx={rx} />
      {content}
    </g>
  );
}
