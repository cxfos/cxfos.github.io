import React, { useState, useEffect } from 'react';
import LanguageSelection from './components/LanguageSelection';
import Portfolio from './components/Portfolio';
import './App.css';
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
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);

  // Apply theme to body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleLanguageSelect = (selectedLanguage) => {
    localStorage.setItem('language', selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
    setLanguage(selectedLanguage);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  const changeLanguage = (lang) => {
      localStorage.setItem('language', lang);
      i18n.changeLanguage(lang);
      setLanguage(lang);
  }

  return (
    <div className={`App ${theme}`}>
      {language ? (
        <Portfolio
          theme={theme}
          toggleTheme={toggleTheme}
          language={language}
          changeLanguage={changeLanguage}
        />
      ) : (
        <LanguageSelection onLanguageSelect={handleLanguageSelect} />
      )}
    </div>
  );
}

export default App;
