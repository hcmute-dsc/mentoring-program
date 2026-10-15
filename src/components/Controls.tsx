import { useEffect, useState } from 'react';

interface Props {
  zoom: number;
  /** True when the last zoom change came from the user, not from the automatic fit. */
  zoomByUser: { readonly current: boolean };
  anyRowOpen: boolean;
  /** What the rows are called, such as "timelines". Without it, the map has no rows and the button is not shown. */
  rowsName?: string;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onFit: () => void;
  onToggleRows: () => void;
}

/** How long the zoom must stay still before screen readers hear it. */
const ANNOUNCE_DELAY = 500;

export function Controls({ zoom, zoomByUser, anyRowOpen, rowsName, onZoomIn, onZoomOut, onFit, onToggleRows }: Props) {
  const pct = Math.round(zoom * 100);

  // The zoom changes on every animation, wheel and pinch frame, so speak it only once it stops.
  // The automatic fit (page load, font load, resize) is skipped: the user did not ask for it.
  const [spoken, setSpoken] = useState('');
  useEffect(() => {
    if (!zoomByUser.current) return;
    const t = setTimeout(() => setSpoken(pct + '%'), ANNOUNCE_DELAY);
    return () => clearTimeout(t);
  }, [pct, zoomByUser]);

  return (
    <div className="controls" role="group" aria-label="Zoom controls">
      <button type="button" id="zout" aria-label="Zoom out" onClick={onZoomOut}>
        −
      </button>
      <span className="pct" id="pct">
        {pct}%
      </span>
      <span className="sr-only" role="status">
        {spoken && 'Zoom ' + spoken}
      </span>
      <button type="button" id="zin" aria-label="Zoom in" onClick={onZoomIn}>
        +
      </button>
      <button type="button" id="zfit" className="rows" onClick={onFit}>
        Fit
      </button>
      {rowsName && (
        <button type="button" id="zrows" className="rows" onClick={onToggleRows}>
          {(anyRowOpen ? 'Hide ' : 'Show ') + rowsName}
        </button>
      )}
    </div>
  );
}
