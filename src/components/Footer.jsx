import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-white/40 bg-white/70 py-6 text-center text-sm text-slate-600 shadow-inner shadow-white/40 backdrop-blur-xl transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300">
      <p>{t('footer_text')}</p>
    </footer>
  );
};

export default Footer;
