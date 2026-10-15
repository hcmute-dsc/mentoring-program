import type { Diagram } from '../types';

interface Props {
  diagrams: Diagram[];
  activeId: string;
  onSelect: (id: string) => void;
}

/**
 * Dropdown at the top of the top bar that picks the map to show. It also works as the map's title.
 * The visible part is a plain title with a chevron, so it is as wide as the picked name.
 * An invisible native <select> lies on top of it and takes the clicks and keys,
 * so keyboards, screen readers and phone pickers work without extra code.
 */
export function DiagramPicker({ diagrams, activeId, onSelect }: Props) {
  const name = diagrams.find((d) => d.id === activeId)?.name;
  return (
    <div className="picker">
      <span className="picker-name" aria-hidden="true">
        {name}
      </span>
      <svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
        <path d="M2.5 4.5 6 8l3.5-3.5" />
      </svg>
      <label className="sr-only" htmlFor="diagram">
        Map
      </label>
      <select id="diagram" value={activeId} onChange={(e) => onSelect(e.target.value)}>
        {diagrams.map((d) => (
          <option key={d.id} value={d.id}>
            {d.name}
          </option>
        ))}
      </select>
    </div>
  );
}
