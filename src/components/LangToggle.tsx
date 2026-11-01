import { useLang } from '../useLang';

/** Button next to the theme toggle. It shows both languages and highlights the one in use. */
export function LangToggle() {
  const { lang, text, toggleLang } = useLang();
  return (
    <button
      type="button"
      className="theme-toggle lang-toggle"
      aria-label={text.langTo}
      title={text.langTo}
      onClick={toggleLang}
    >
      <span className={lang === 'en' ? 'on' : undefined}>EN</span>
      <span className={lang === 'vi' ? 'on' : undefined}>VI</span>
    </button>
  );
}
