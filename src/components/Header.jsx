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
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            Felipe Dos Santos
          </h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy
                  smooth
                  duration={500}
                  offset={-80}
                  className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-200 font-medium"
                  activeClass="!text-primary-light dark:!text-primary-dark"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-3">
              <LanguageSwitcher />
              <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy
                smooth
                duration={500}
                offset={-80}
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark transition-colors duration-200 font-medium cursor-pointer"
                activeClass="!text-primary-light dark:!text-primary-dark"
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pt-3 border-t border-gray-200 dark:border-gray-700">
              <LanguageSwitcher />
              <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
