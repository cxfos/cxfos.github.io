import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = ({ theme, toggleTheme, language, changeLanguage }) => {
  const { t } = useTranslation();

  return (
    <header>
      <nav>
        <button onClick={() => changeLanguage('en')}>{t('english')}</button>
        <button onClick={() => changeLanguage('pt')}>{t('portuguese')}</button>
      </nav>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
};

export default Header;
