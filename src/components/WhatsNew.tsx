import { useRef, type MouseEvent } from 'react';
import { releases } from '../changelog';

const current = releases.find((r) => r.version === __APP_VERSION__);
const earlier = releases.filter((r) => r !== current);

/**
 * The version tag in the bottom-right corner. A click opens a popup with the release notes of this version.
 * The popup is a modal <dialog>: the browser keeps focus inside it, closes it on Escape, and gives focus back to the tag.
 */
export function WhatsNew() {
  const dialogRef = useRef<HTMLDialogElement>(null);

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
        aria-label={`Version ${__APP_VERSION__}. What's new`}
        title="What's new"
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
              Close
            </button>
          </div>
          <h2 id="news-title">What's new</h2>
          {current ? (
            <ul>
              {current.items.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          ) : (
            <p className="news-none">No notes for this version yet.</p>
          )}
          {earlier.length > 0 && (
            // One short row per old version, so a long history stays short until the user opens a row.
            <details className="news-earlier">
              <summary>Earlier versions ({earlier.length})</summary>
              {earlier.map((r) => (
                <details className="news-old" key={r.version}>
                  <summary>
                    v{r.version} · {r.date}
                  </summary>
                  <ul>
                    {r.items.map((it, i) => (
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
