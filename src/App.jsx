import React, { useState, useEffect } from 'react';
import LanguageSelection from './components/LanguageSelection';
import Portfolio from './components/Portfolio';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(null);
  const [theme, setTheme] = useState('dark'); // Default to dark

  // Initialize language
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    } else if (prefersLight) {
      setTheme('light');
    }
  }, []);

  // Apply theme to root element for Tailwind CSS
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const handleLanguageChange = (lang) => {
    localStorage.setItem('language', lang);
    i18n.changeLanguage(lang);
    setLanguage(lang);
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      {language ? (
        <Portfolio
          theme={theme}
          toggleTheme={toggleTheme}
          language={language}
          changeLanguage={handleLanguageChange}
        />
      ) : (
        <LanguageSelection onLanguageSelect={handleLanguageChange} />
      )}
    </div>
  );
}

export default App;
