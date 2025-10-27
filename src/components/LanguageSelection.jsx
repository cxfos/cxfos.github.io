import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelection = ({ onLanguageSelect }) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 text-center transition-colors duration-300">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {t('welcome')}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          {t('select_language')}
        </p>
        <div className="space-y-4">
          <button
            onClick={() => onLanguageSelect('en')}
            className="w-full py-3 px-6 bg-primary-light dark:bg-primary-dark text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
          >
            {t('english')}
          </button>
          <button
            onClick={() => onLanguageSelect('pt')}
            className="w-full py-3 px-6 bg-primary-light dark:bg-primary-dark text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
          >
            {t('portuguese')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelection;
