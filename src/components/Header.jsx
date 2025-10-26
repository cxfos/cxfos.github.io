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
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Felipe Dos Santos</h1>
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy
                smooth
                duration={500}
                className="cursor-pointer"
                activeClass="text-blue-500"
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
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy
              smooth
              duration={500}
              className="block cursor-pointer"
              activeClass="text-blue-500"
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
