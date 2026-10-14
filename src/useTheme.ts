import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

/** localStorage key. public/theme.js reads the same key before the page paints. */
const KEY = 'theme';
const DARK_QUERY = '(prefers-color-scheme: dark)';

/** The theme the user picked, or null if they never picked one (then the system theme is used). */
const savedTheme = (): Theme | null => {
  try {
    const t = localStorage.getItem(KEY);
    return t === 'light' || t === 'dark' ? t : null;
  } catch {
    return null;
  }
};

const systemTheme = (): Theme => (window.matchMedia?.(DARK_QUERY).matches ? 'dark' : 'light');

/**
 * Light or dark theme, set as `data-theme` on <html>; styles.css picks the colors from it.
 * Follows the system theme until the user toggles it. After that, the choice is saved.
 */
export function useTheme() {
  // public/theme.js already set the attribute, so start from it and the page does not change on load.
  const [theme, setTheme] = useState<Theme>(() => {
    const t = document.documentElement.dataset.theme;
    return t === 'light' || t === 'dark' ? t : (savedTheme() ?? systemTheme());
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  /* If the user never picked a theme, follow changes to the system theme. */
  useEffect(() => {
    const mq = window.matchMedia?.(DARK_QUERY);
    if (!mq) return;
    const onChange = () => {
      if (!savedTheme()) setTheme(mq.matches ? 'dark' : 'light');
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem(KEY, next);
    } catch {
      // Storage is blocked (such as in some private windows). The theme still changes for this visit.
    }
    setTheme(next);
  }, [theme]);

  return { theme, toggleTheme };
}
