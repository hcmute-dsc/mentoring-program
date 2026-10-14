import type { Theme } from '../useTheme';

interface Props {
  theme: Theme;
  onToggle: () => void;
}

/** Button in the top-right corner. It shows the theme it switches to: a moon in light theme, a sun in dark theme. */
export function ThemeToggle({ theme, onToggle }: Props) {
  const next = theme === 'dark' ? 'light' : 'dark';
  return (
    <button
      type="button"
      className="theme-toggle"
      id="theme"
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      onClick={onToggle}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        {next === 'dark' ? (
          <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
        ) : (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </>
        )}
      </svg>
    </button>
  );
}
