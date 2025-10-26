import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelection = ({ onLanguageSelect }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('select_language')}</h1>
      <button onClick={() => onLanguageSelect('en')}>{t('english')}</button>
      <button onClick={() => onLanguageSelect('pt')}>{t('portuguese')}</button>
    </div>
  );
};

export default LanguageSelection;
