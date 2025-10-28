import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeSwitcher = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:border-green-500 dark:hover:border-green-500 transition-all duration-200 border border-gray-200 dark:border-gray-600"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? (
        <FiMoon size={20} className="text-gray-700 hover:text-green-600" />
      ) : (
        <FiSun size={20} className="text-yellow-400 hover:text-yellow-300" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
