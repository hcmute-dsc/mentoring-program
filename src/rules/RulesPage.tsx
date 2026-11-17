import { Fragment, useEffect, useRef, useState, type ReactNode } from 'react';
import { LangToggle } from '../components/LangToggle';
import { ThemeToggle } from '../components/ThemeToggle';
import { useLang } from '../useLang';
import { useTheme } from '../useTheme';
import { REGISTER_URL, rules, type Block } from './gitGithubRules';

/** Shows **text** in bold. Everything else is plain text, so no HTML from the content reaches the page. */
function rich(s: string): ReactNode {
  return s
    .split('**')
    .map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>));
}

function BlockView({ b }: { b: Block }) {
  switch (b.kind) {
    case 'p':
      return <p>{rich(b.text)}</p>;
    case 'list':
      return (
        <ul className={'doc-list ' + (b.mark ?? 'dot')}>
          {b.items.map((it, i) => (
            <li key={i}>{rich(it)}</li>
          ))}
        </ul>
      );
    case 'steps':
      return (
        <ol className="doc-steps">
          {b.items.map((st, i) => (
            <li key={i}>
              <span className="doc-step-n" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <p>{rich(st.text)}</p>
                {st.items && (
                  <ul className="doc-list dot">
                    {st.items.map((it, j) => (
                      <li key={j}>{rich(it)}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      );
    case 'warn':
      return (
        <div className="doc-warn" role="note">
          <p className="doc-warn-h">{b.title}</p>
          {b.blocks.map((inner, i) => (
            <BlockView b={inner} key={i} />
          ))}
        </div>
      );
    case 'ranking':
      return (
        <table className="doc-rank">
          <thead>
            <tr>
              <th scope="col">{b.head[0]}</th>
              <th scope="col">{b.head[1]}</th>
            </tr>
          </thead>
          <tbody>
            {b.rows.map(([rank, pts], i) => (
              <tr key={i}>
                <td>
                  <span className="doc-medal" aria-hidden="true">
                    {i + 1}
                  </span>
                  {rank}
                </td>
                <td className="doc-pts">{pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    case 'cards':
      return (
        <div className="doc-cards">
          {b.items.map((c, i) => (
            <div className="doc-card" key={i}>
              <h4>{c.title}</h4>
              <p>{rich(c.text)}</p>
            </div>
          ))}
        </div>
      );
  }
}

/** The Git & GitHub Study Jam rules, as one page that people can link to. */
export function RulesPage() {
  const { lang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const t = rules[lang];
  const [copied, setCopied] = useState(false);
  const copiedTimer = useRef<number>();

  useEffect(() => {
    document.title = t.docTitle;
  }, [t.docTitle]);

  useEffect(() => () => window.clearTimeout(copiedTimer.current), []);

  const copyLink = async () => {
    // The link without a section, so it opens at the top of the page.
    const url = location.origin + location.pathname;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.clearTimeout(copiedTimer.current);
      copiedTimer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // The clipboard is blocked. Show the link, so the user can copy it by hand.
      window.prompt(t.copyLink, url);
    }
  };

  return (
    <div className="doc-page">
      <header className="doc-bar">
        <a className="doc-back" href="../">
          <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
            <path d="M10 3.5 5.5 8l4.5 4.5" />
          </svg>
          {t.back}
        </a>
        <div className="doc-bar-tools">
          <LangToggle />
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </header>

      <main className="doc">
        <div className="doc-hero">
          <span className="tag a">{t.eyebrow}</span>
          <h1>{t.title}</h1>
          <p className="doc-lead">{t.lead}</p>
          <div className="doc-actions">
            <a className="doc-register" href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
              {t.register}
              <span className="sr-only"> {t.newTab}</span>
              <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
                <path d="M6 3.5h6.5V10M12.5 3.5 4 12" />
              </svg>
            </a>
            <button type="button" className="doc-copy" onClick={copyLink} aria-live="polite">
              {copied ? t.copied : t.copyLink}
            </button>
          </div>
        </div>

        <dl className="doc-facts">
          {t.facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>

        <div className="doc-alert" role="note">
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path d="M12 3 2.5 20h19L12 3z" />
            <path d="M12 10v4.5M12 17.5v.01" />
          </svg>
          <div>
            <p className="doc-alert-h">{t.alert.title}</p>
            <p>{rich(t.alert.text)}</p>
            <a href={t.alert.href}>{t.alert.more}</a>
          </div>
        </div>

        <nav className="doc-toc" aria-label={t.contents}>
          <span>{t.contents}</span>
          <ol>
            {t.sections.map((s) => (
              <li key={s.id}>
                <a href={'#' + s.id}>
                  <span className="doc-n">{s.n}</span>
                  {s.h}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {t.sections.map((s) => (
          <section className="doc-sec" id={s.id} key={s.id} aria-labelledby={s.id + '-h'}>
            <h2 id={s.id + '-h'}>
              <span className="doc-n">{s.n.padStart(2, '0')}</span>
              {s.h}
            </h2>
            {s.subs.map((sub, i) => (
              <div className="doc-sub" id={sub.id} key={i}>
                {sub.h && (
                  <h3>
                    <span className="doc-n">{sub.n}</span>
                    {sub.h}
                  </h3>
                )}
                {sub.blocks.map((b, j) => (
                  <BlockView b={b} key={j} />
                ))}
              </div>
            ))}
          </section>
        ))}
      </main>

      <footer className="doc-foot">
        <span>HCMUTE DSC</span>
        <a href="../">{t.back}</a>
      </footer>
    </div>
  );
}
