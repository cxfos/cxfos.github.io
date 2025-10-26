import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelection = ({ onLanguageSelect }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('welcome')}</h2>
      <p>{t('select_language')}</p>
      <button onClick={() => onLanguageSelect('en')}>{t('english')}</button>
      <button onClick={() => onLanguageSelect('pt')}>{t('portuguese')}</button>
    </div>
  );
};

export default LanguageSelection;
