import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-6 text-center text-sm text-slate-500 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-400">
      <p>{t('footer_text')}</p>
    </footer>
  );
};

export default Footer;
