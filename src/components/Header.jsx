import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';

const Header = ({ theme, toggleTheme, language, changeLanguage }) => {
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
    <header className="sticky top-0 z-50 w-full border-b border-white/40 bg-white/70 backdrop-blur-xl transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/60">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <h1 className="text-lg font-semibold tracking-tight text-slate-900 drop-shadow-sm dark:text-slate-100 sm:text-xl">Felipe Dos Santos</h1>
        <div className="hidden items-center space-x-6 md:flex">
          <nav className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy
                smooth
                duration={500}
                className="cursor-pointer text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                activeClass="text-blue-600 dark:text-blue-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-3">
            <LanguageSwitcher language={language} onChangeLanguage={changeLanguage} />
            <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md border border-transparent p-2 text-slate-600 transition-colors duration-200 hover:border-slate-300 hover:text-slate-900 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="space-y-3 border-t border-white/40 bg-white/70 px-4 py-4 text-sm transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/60 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy
              smooth
              duration={500}
              className="block cursor-pointer font-medium text-slate-600 transition-colors duration-200 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              activeClass="text-blue-600 dark:text-blue-400"
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center space-x-3">
            <LanguageSwitcher language={language} onChangeLanguage={changeLanguage} />
            <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
