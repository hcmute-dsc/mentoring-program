import { forwardRef, memo } from 'react';
import type { MapNode } from '../types';
import { useLang } from '../useLang';

interface Props {
  /** The last opened node. It stays set while the panel slides out, so the content does not vanish early. */
  node: MapNode | null;
  open: boolean;
  onClose: () => void;
}

/** Memoized, so it does not re-render on every pan or zoom frame. */
export const DetailPanel = memo(
  forwardRef<HTMLElement, Props>(function DetailPanel({ node, open, onClose }, ref) {
    const { text } = useLang();
    const d = node?.d;
    const title = d ? d.title || node.t : '';
    const sub = d ? (d.sub !== undefined ? d.sub : d.title ? '' : node.s || '') : '';

    return (
      <aside ref={ref} className={'panel' + (open ? ' open' : '')} id="panel" tabIndex={-1} aria-labelledby="p-title">
        <div className="panel-top">
          <span className={'tag' + (d?.c ? ' ' + d.c : '')} id="p-tag">
            {d?.tag || ''}
          </span>
          <button type="button" className="close" id="p-close" onClick={onClose}>
            {text.close}
          </button>
        </div>
        <h2 id="p-title">{title}</h2>
        <p className="sub" id="p-sub" hidden={!sub}>
          {sub}
        </p>
        <p className="text" id="p-text">
          {d?.text || ''}
        </p>
        {d?.note && (
          <div className="note" role="note">
            <span className="note-h">{text.required}</span>
            {d.note}
          </div>
        )}
        <div id="p-extra" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {d?.groups?.map((g, i) => (
            <div className="grp" key={i}>
              <h3>{g.h}</h3>
              <ul>
                {g.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
          {d?.link && (
            <a className="panel-link" href={d.link.href}>
              {d.link.label}
              <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
                <path d="M6 3.5 10.5 8 6 12.5" />
              </svg>
            </a>
          )}
          {d?.pre && (
            <div className="grp">
              <h3>{text.example}</h3>
              <pre>{d.pre}</pre>
            </div>
          )}
        </div>
      </aside>
    );
  }),
);
