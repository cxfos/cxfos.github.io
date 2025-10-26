import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeSwitcher = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full focus:outline-none"
    >
      {theme === 'light' ? <FiMoon size={24} /> : <FiSun size={24} />}
    </button>
  );
};

export default ThemeSwitcher;
