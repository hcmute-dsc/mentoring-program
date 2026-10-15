import { diagrams } from './diagrams';
import { indexById } from './diagrams/helpers';
import type { Diagram, Edge, MapNode, Row, Side, Track } from './types';

/** Space between a timeline's frame and the phases inside it. */
const FRAME_PAD = 16;

/** The connectors of one timeline row: group -> head -> first phase -> ... -> last phase. */
function rowEdges({ group, head, phases, c }: Row): Edge[] {
  const list: Edge[] = [];
  if (group) list.push({ a: group, b: head, line: true, c });
  list.push({ a: head, b: phases[0], line: true, c, row: head });
  for (let i = 0; i < phases.length - 1; i++) {
    list.push({ a: phases[i], b: phases[i + 1], line: true, c: i === phases.length - 2 ? c : undefined, row: head });
  }
  return list;
}

function anchor(n: MapNode, side: Side): [number, number, number, number] {
  if (side === 'l') return [n.x, n.y + n.h / 2, -1, 0];
  if (side === 't') return [n.x + n.w / 2, n.y, 0, -1];
  if (side === 'b') return [n.x + n.w / 2, n.y + n.h, 0, 1];
  return [n.x + n.w, n.y + n.h / 2, 1, 0];
}

/** SVG path data for an edge. */
function edgePath(e: Edge, byId: Record<string, MapNode>): string {
  if (e.d) return e.d;
  if (e.p) return 'M' + e.p[0].join(' ') + ' L' + e.p[1].join(' ');
  const A = anchor(byId[e.a!], e.as || 'r');
  const B = anchor(byId[e.b!], e.bs || 'l');
  if (e.line) return 'M' + A[0] + ' ' + A[1] + ' L' + B[0] + ' ' + B[1];
  const dist = Math.max(40, Math.abs(B[0] - A[0]) * 0.5);
  return (
    'M' +
    A[0] +
    ' ' +
    A[1] +
    ' C' +
    (A[0] + A[2] * dist) +
    ' ' +
    (A[1] + A[3] * dist) +
    ', ' +
    (B[0] + B[2] * dist) +
    ' ' +
    (B[1] + B[3] * dist) +
    ', ' +
    B[0] +
    ' ' +
    B[1]
  );
}

/** One diagram, ready to draw. */
export interface Graph {
  diagram: Diagram;
  nodes: MapNode[];
  byId: Record<string, MapNode>;
  /** Edges with their path data, computed once because the layout never changes. */
  drawnEdges: (Edge & { path: string })[];
  /** Timeline head ids. */
  rowHeads: string[];
  /** The same ids as a set, for a fast check per node. */
  rowHeadSet: Set<string>;
  /** Which timeline head a node belongs to, if any. */
  rowOf: Record<string, string>;
  /** One rounded frame per timeline, drawn around all of its phases. */
  rowFrames: { head: string; c: Track; x: number; y: number; w: number; h: number }[];
}

function buildGraph(diagram: Diagram): Graph {
  const { nodes, rows } = diagram;
  const byId = indexById(nodes);
  const edges = diagram.edges.concat(...rows.map(rowEdges));

  const rowOf: Record<string, string> = {};
  rows.forEach((r) =>
    r.phases.forEach((id) => {
      rowOf[id] = r.head;
    }),
  );

  const rowFrames = rows.map((r) => {
    const ns = r.phases.map((id) => byId[id]);
    const x = Math.min(...ns.map((n) => n.x)) - FRAME_PAD;
    const y = Math.min(...ns.map((n) => n.y)) - FRAME_PAD;
    return {
      head: r.head,
      c: r.c,
      x,
      y,
      w: Math.max(...ns.map((n) => n.x + n.w)) + FRAME_PAD - x,
      h: Math.max(...ns.map((n) => n.y + n.h)) + FRAME_PAD - y,
    };
  });

  return {
    diagram,
    nodes,
    byId,
    drawnEdges: edges.map((e) => ({ ...e, path: edgePath(e, byId) })),
    rowHeads: rows.map((r) => r.head),
    rowHeadSet: new Set(rows.map((r) => r.head)),
    rowOf,
    rowFrames,
  };
}

/** All diagrams, ready to draw, in dropdown order. */
export const graphs: Graph[] = diagrams.map(buildGraph);
