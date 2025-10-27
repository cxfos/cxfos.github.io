import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeSwitcher = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? <FiMoon size={24} /> : <FiSun size={24} />}
    </button>
  );
};

export default ThemeSwitcher;
