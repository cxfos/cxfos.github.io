import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  sectionBodyTextClass,
  sectionHeadingClass,
} from './sectionStyles';

const LanguageSelection = ({ onLanguageSelect }) => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 text-center transition-colors duration-300 dark:bg-slate-950">
      <div className="w-full max-w-md space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">
        <h2 className={sectionHeadingClass}>{t('welcome')}</h2>
        <p className={sectionBodyTextClass}>{t('select_language')}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <button
            onClick={() => onLanguageSelect('en')}
            className="rounded-lg border border-slate-300 bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-800 transition-colors duration-200 hover:border-slate-400 hover:bg-slate-200 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-700"
          >
            {t('english')}
          </button>
          <button
            onClick={() => onLanguageSelect('pt')}
            className="rounded-lg border border-slate-300 bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-800 transition-colors duration-200 hover:border-slate-400 hover:bg-slate-200 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-700"
          >
            {t('portuguese')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelection;
