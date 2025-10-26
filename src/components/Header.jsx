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
    <header className="sticky top-0 z-50 bg-gray-100 dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Felipe Dos Santos
        </h1>
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy
                smooth
                duration={500}
                className="text-lg text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer transition-colors"
                activeClass="text-blue-500 dark:text-blue-400 font-semibold"
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
            className="text-gray-800 dark:text-white focus:outline-none"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-900 px-6 pt-2 pb-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy
              smooth
              duration={500}
              className="block text-lg text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer transition-colors"
              activeClass="text-blue-500 dark:text-blue-400 font-semibold"
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center justify-start space-x-4 pt-4">
            <LanguageSwitcher />
            <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
