import { useEffect, useState } from 'react';
import { useLang } from '../useLang';

interface Props {
  zoom: number;
  /** True when the last zoom change came from the user, not from the automatic fit. */
  zoomByUser: { readonly current: boolean };
  anyRowOpen: boolean;
  /** What the rows are called, such as "timelines". Not set when the map has no rows, and then the button is not shown. */
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
  const { text } = useLang();

  // The zoom changes on every animation, wheel and pinch frame, so speak it only once it stops.
  // The automatic fit (page load, font load, resize) is skipped: the user did not ask for it.
  const [spoken, setSpoken] = useState('');
  useEffect(() => {
    if (!zoomByUser.current) return;
    const t = setTimeout(() => setSpoken(pct + '%'), ANNOUNCE_DELAY);
    return () => clearTimeout(t);
  }, [pct, zoomByUser]);

  return (
    <div className="controls" role="group" aria-label={text.zoomControls}>
      <button type="button" id="zout" aria-label={text.zoomOut} onClick={onZoomOut}>
        −
      </button>
      <span className="pct" id="pct">
        {pct}%
      </span>
      <span className="sr-only" role="status">
        {spoken && text.zoom + ' ' + spoken}
      </span>
      <button type="button" id="zin" aria-label={text.zoomIn} onClick={onZoomIn}>
        +
      </button>
      <button type="button" id="zfit" className="rows" onClick={onFit}>
        {text.fit}
      </button>
      {rowsName && (
        <button type="button" id="zrows" className="rows" onClick={onToggleRows}>
          {(anyRowOpen ? text.hideRows : text.showRows)(text.rowNames[rowsName] ?? rowsName)}
        </button>
      )}
    </div>
  );
}
