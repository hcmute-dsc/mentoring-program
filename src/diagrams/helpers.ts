import type { MapNode } from '../types';

export const indexById = (nodes: MapNode[]): Record<string, MapNode> => Object.fromEntries(nodes.map((n) => [n.id, n]));

/* Points for the hand-drawn connectors, taken from the blocks they join. */
export const midX = (n: MapNode) => n.x + n.w / 2;
export const bottomY = (n: MapNode) => n.y + n.h;
/** Space between an arrowhead and the block it points at. */
export const ARROW_GAP = 2;
