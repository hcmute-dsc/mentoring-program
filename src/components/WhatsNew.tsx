import { useRef, type MouseEvent } from 'react';
import { releases } from '../changelog';
import { useLang } from '../useLang';

const current = releases.find((r) => r.version === __APP_VERSION__);
const earlier = releases.filter((r) => r !== current);

/**
 * The version tag in the bottom-right corner. A click opens a popup with the release notes of this version.
 * The popup is a modal <dialog>: the browser keeps focus inside it, closes it on Escape, and gives focus back to the tag.
 */
export function WhatsNew() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { lang, text } = useLang();
  const itemsOf = (r: (typeof releases)[number]) => (lang === 'vi' && r.vi) || r.items;

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();
  // The content fills the dialog, so a click on the dialog itself is a click on the backdrop around it.
  const onDialogClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) close();
  };

  return (
    <>
      <button
        type="button"
        className="version"
        aria-haspopup="dialog"
        aria-label={text.version(__APP_VERSION__)}
        title={text.whatsNew}
        onClick={open}
      >
        v{__APP_VERSION__}
      </button>

      <dialog ref={dialogRef} className="news" aria-labelledby="news-title" onClick={onDialogClick}>
        <div className="news-body">
          <div className="panel-top">
            <span className="tag">
              v{__APP_VERSION__}
              {current && ' · ' + current.date}
            </span>
            <button type="button" className="close" onClick={close}>
              {text.close}
            </button>
          </div>
          <h2 id="news-title">{text.whatsNew}</h2>
          {current ? (
            <ul>
              {itemsOf(current).map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          ) : (
            <p className="news-none">{text.noNotes}</p>
          )}
          {earlier.length > 0 && (
            // One short row per old version, so a long history stays short until the user opens a row.
            <details className="news-earlier">
              <summary>
                {text.earlier} ({earlier.length})
              </summary>
              {earlier.map((r) => (
                <details className="news-old" key={r.version}>
                  <summary>
                    v{r.version} · {r.date}
                  </summary>
                  <ul>
                    {itemsOf(r).map((it, i) => (
                      <li key={i}>{it}</li>
                    ))}
                  </ul>
                </details>
              ))}
            </details>
          )}
        </div>
      </dialog>
    </>
  );
}
