import { useEffect, useState } from 'react';

function readTheme() {
  if (typeof document === 'undefined') return 'light';
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      /* localStorage unavailable; the choice simply is not persisted */
    }
  }, [theme]);

  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to the ${next} theme`}
      className="text-sm text-ink-muted underline decoration-rule underline-offset-4 transition-colors duration-150 hover:text-accent hover:decoration-accent"
    >
      {theme === 'dark' ? 'Light theme' : 'Dark theme'}
    </button>
  );
}
