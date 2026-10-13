import { nodes } from './nodes';
import type { Edge, MapNode, Side, Track } from './types';

export { nodes };

export const byId: Record<string, MapNode> = Object.fromEntries(nodes.map((n) => [n.id, n]));

/* Collapsible timeline rows: head id -> member node ids */
export const rowMembers: Record<string, string[]> = {};
/* Timeline head id -> its track, for the frame color */
const rowTrack: Record<string, Track> = {};

function row(group: string, head: string, phases: string[], c: Track): Edge[] {
  rowMembers[head] = phases;
  rowTrack[head] = c;
  const list: Edge[] = [
    { a: group, b: head, line: true, c },
    { a: head, b: phases[0], line: true, c, row: head },
  ];
  for (let i = 0; i < phases.length - 1; i++) {
    list.push({ a: phases[i], b: phases[i + 1], line: true, c: i === phases.length - 2 ? c : undefined, row: head });
  }
  return list;
}

/* Points for the hand-drawn connectors, taken from the blocks they join. */
const { trackA, trackB, moveup, joinA, w1, w4 } = byId;
const midX = (n: MapNode) => n.x + n.w / 2;
const bottomY = (n: MapNode) => n.y + n.h;
/** Space between an arrowhead and the block it points at. */
const ARROW_GAP = 2;

const baseEdges: Edge[] = [
  { a: 'root', b: 's-groups' }, { a: 'root', b: 's-week' },

  { a: 's-groups', b: 'trackA', c: 'a' }, { a: 's-groups', b: 'trackB', c: 'b' },
  { a: 'trackA', b: 'a1', c: 'a' }, { a: 'trackA', b: 'a2', c: 'a' }, { a: 'trackB', b: 'b1', c: 'b', line: true },
  // Track A -> "Move up" -> Track B, and Track B -> "Join A" -> Track A.
  { p: [[midX(moveup), bottomY(trackA)], [midX(moveup), moveup.y]], c: 'b', noArrow: true },
  { p: [[midX(moveup), bottomY(moveup)], [midX(moveup), trackB.y - ARROW_GAP]], c: 'b' },
  { p: [[midX(joinA), trackB.y], [midX(joinA), bottomY(joinA)]], c: 'a', noArrow: true },
  { p: [[midX(joinA), joinA.y], [midX(joinA), bottomY(trackA) + ARROW_GAP]], c: 'a' },

  { a: 's-week', b: 'w1' },
  { a: 'w1', b: 'w2', line: true }, { a: 'w2', b: 'w3', line: true }, { a: 'w3', b: 'w4', line: true },
  // Loop back from the last weekly step to Monday, 30 units above the row.
  { d: `M${midX(w4)} ${w4.y} V${w4.y - 30} H${midX(w1)} V${w1.y - ARROW_GAP}`, dash: true, label: 'next Monday' },
];

export const edges: Edge[] = baseEdges
  .concat(row('a1', 'a1t', ['a1p1', 'a1p2', 'a1p3', 'a1p4', 'a1p5', 'a1p6'], 'a'))
  .concat(row('a2', 'a2t', ['a2p1', 'a2p2', 'a2p3', 'a2p4', 'a2p5', 'a2p6', 'a2p7', 'a2p8'], 'a'))
  .concat(row('b1', 's-time', ['p1', 'p2', 'p3', 'p4', 'p5'], 'b'));

export const rowHeads = Object.keys(rowMembers);

/** Which timeline head a node belongs to, if any. */
export const rowOf: Record<string, string> = {};
rowHeads.forEach((head) => rowMembers[head].forEach((id) => { rowOf[id] = head; }));

/** Space between a timeline's frame and the phases inside it. */
const FRAME_PAD = 16;

/** One rounded frame per timeline, drawn around all of its phases. */
export const rowFrames = rowHeads.map((head) => {
  const ns = rowMembers[head].map((id) => byId[id]);
  const x = Math.min(...ns.map((n) => n.x)) - FRAME_PAD;
  const y = Math.min(...ns.map((n) => n.y)) - FRAME_PAD;
  return {
    head,
    c: rowTrack[head],
    x, y,
    w: Math.max(...ns.map((n) => n.x + n.w)) + FRAME_PAD - x,
    h: Math.max(...ns.map((n) => n.y + n.h)) + FRAME_PAD - y,
  };
});

function anchor(n: MapNode, side: Side): [number, number, number, number] {
  if (side === 'l') return [n.x, n.y + n.h / 2, -1, 0];
  if (side === 't') return [n.x + n.w / 2, n.y, 0, -1];
  if (side === 'b') return [n.x + n.w / 2, n.y + n.h, 0, 1];
  return [n.x + n.w, n.y + n.h / 2, 1, 0];
}

/** SVG path data for an edge. */
export function edgePath(e: Edge): string {
  if (e.d) return e.d;
  if (e.p) return 'M' + e.p[0].join(' ') + ' L' + e.p[1].join(' ');
  const A = anchor(byId[e.a!], e.as || 'r');
  const B = anchor(byId[e.b!], e.bs || 'l');
  if (e.line) return 'M' + A[0] + ' ' + A[1] + ' L' + B[0] + ' ' + B[1];
  const dist = Math.max(40, Math.abs(B[0] - A[0]) * 0.5);
  return 'M' + A[0] + ' ' + A[1] + ' C' + (A[0] + A[2] * dist) + ' ' + (A[1] + A[3] * dist) + ', ' +
    (B[0] + B[2] * dist) + ' ' + (B[1] + B[3] * dist) + ', ' + B[0] + ' ' + B[1];
}

/** Edges with their path data, computed once because the layout never changes. */
export const drawnEdges = edges.map((e) => ({ ...e, path: edgePath(e) }));
