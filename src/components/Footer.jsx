import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-6 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
        <p>{t('footer_text')}</p>
      </div>
    </footer>
  );
};

export default Footer;
