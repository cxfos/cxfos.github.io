import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';

const Header = ({ theme, toggleTheme }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: 'home', label: t('home') },
    { to: 'about', label: t('about') },
    { to: 'skills', label: t('skills') },
    { to: 'experience', label: t('experience') },
    { to: 'projects', label: t('projects') },
    { to: 'contact', label: t('contact') },
  ];

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-50/95 dark:bg-gray-900/95 border-b border-gray-200 dark:border-gray-700 backdrop-blur-lg shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 cursor-pointer">
          Felipe Dos Santos
        </h1>
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy
                smooth
                duration={500}
                className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 font-medium"
                activeClass="text-green-600 dark:text-green-400 font-semibold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-gray-50/95 dark:bg-gray-900/95 border-t border-gray-200 dark:border-gray-700 backdrop-blur-lg">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy
              smooth
              duration={500}
              className="block cursor-pointer py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
              activeClass="text-green-600 dark:text-green-400 font-semibold"
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center space-x-4 pt-3 mt-2 border-t border-gray-200 dark:border-gray-700">
            <LanguageSwitcher />
            <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
