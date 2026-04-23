import React, { useEffect, useState } from 'react';

const ThemeSwitcher: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark') return true;
      if (saved === 'light') return false;
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') setIsDark(true);
    if (saved === 'light') setIsDark(false);
  }, []);

  return (
    <button
      onClick={() => setIsDark((v) => !v)}
      className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 border border-gray-300 dark:border-gray-600 transition-colors shadow"
      aria-label="Перемкнути тему"
      type="button"
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeSwitcher;
