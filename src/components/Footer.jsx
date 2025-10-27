import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-gray-600 dark:text-gray-400">
          {t('footer_text')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
