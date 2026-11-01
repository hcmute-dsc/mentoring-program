import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { ui, type Lang, type Ui } from './i18n';

/** localStorage key of the language the user picked. */
const KEY = 'lang';

/** The language the user picked, or null if they never picked one. */
const savedLang = (): Lang | null => {
  try {
    const l = localStorage.getItem(KEY);
    return l === 'en' || l === 'vi' ? l : null;
  } catch {
    return null;
  }
};

/** Without a saved choice, follow the browser language. */
const browserLang = (): Lang => (navigator.language?.toLowerCase().startsWith('vi') ? 'vi' : 'en');

interface LangValue {
  lang: Lang;
  text: Ui;
  toggleLang: () => void;
}

const LangContext = createContext<LangValue | null>(null);

/** English or Vietnamese, set as `lang` on <html>. The choice is saved in this browser. */
export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => savedLang() ?? browserLang());

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = useCallback(() => {
    const next: Lang = lang === 'en' ? 'vi' : 'en';
    try {
      localStorage.setItem(KEY, next);
    } catch {
      // Storage is blocked. The language still changes for this visit.
    }
    setLang(next);
  }, [lang]);

  const value = useMemo(() => ({ lang, text: ui[lang], toggleLang }), [lang, toggleLang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangValue {
  const v = useContext(LangContext);
  if (!v) throw new Error('useLang needs a LangProvider');
  return v;
}
