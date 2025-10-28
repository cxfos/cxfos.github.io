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

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Default to dark theme when no preference is saved
      // This matches our dark-themed design aesthetic
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  // Apply theme to body
  useEffect(() => {
    document.body.className = theme;
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
    <div className={`App ${theme}`}>
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
