export type Track = 'a' | 'b';
/** 'm' = mentor role (its own color, not a track). */
export type Kind = 'root' | 'sec' | 'a' | 'b' | 'm' | 'n' | 'chip';
export type Side = 'l' | 'r' | 't' | 'b';

export interface DetailGroup {
  h: string;
  items: string[];
}

/** Content shown in the side panel when a block is selected. */
export interface Detail {
  tag?: string;
  c?: Track | 'm';
  title?: string;
  sub?: string;
  text?: string;
  groups?: DetailGroup[];
  pre?: string;
  /** A required action, shown in a highlighted box under the text. */
  note?: string;
}

/** One block on the map. */
export interface MapNode {
  id: string;
  k: Kind;
  x: number;
  y: number;
  w: number;
  h: number;
  t: string;
  s?: string;
  img?: boolean;
  code?: boolean;
  d?: Detail;
}

/**
 * A connector. It is either drawn between two nodes (a, b),
 * a straight line between two points (p), or a raw SVG path (d).
 */
export interface Edge {
  a?: string;
  b?: string;
  as?: Side;
  bs?: Side;
  p?: [[number, number], [number, number]];
  d?: string;
  line?: boolean;
  c?: Track;
  dash?: boolean;
  noArrow?: boolean;
  label?: string;
  /** Timeline head id. The edge hides when that timeline is collapsed. */
  row?: string;
}

/** A collapsible timeline: a head block and the row of phases after it. */
export interface Row {
  /** The block that leads to the head. Without it, the diagram draws that connector itself. */
  group?: string;
  head: string;
  phases: string[];
  c: Track;
}

/** One map. The dropdown in the top bar picks which one is shown. */
export interface Diagram {
  id: string;
  /** Name in the map dropdown. */
  name: string;
  /** What the rows are called on the "Show …" button. Defaults to "timelines". */
  rowsName?: string;
  nodes: MapNode[];
  /** Connectors other than the timeline rows. The rows add their own. */
  edges: Edge[];
  rows: Row[];
}
