import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeSwitcher = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      className="rounded-lg border border-slate-300 bg-slate-100 p-2 text-slate-600 transition-colors duration-200 hover:border-slate-400 hover:bg-slate-200 hover:text-slate-900 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:bg-slate-700 dark:hover:text-white"
    >
      {theme === 'light' ? <FiMoon size={24} /> : <FiSun size={24} />}
    </button>
  );
};

export default ThemeSwitcher;
