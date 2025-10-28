import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  sectionBodyTextClass,
  sectionHeadingClass,
} from './sectionStyles';

const LanguageSelection = ({ onLanguageSelect }) => {
  const { t } = useTranslation();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-sky-100/50 to-slate-200 px-4 text-center text-slate-900 transition-colors duration-500 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_-10%_-20%,rgba(14,116,144,0.25),transparent)] opacity-80 transition-opacity duration-500 dark:bg-[radial-gradient(80%_60%_at_-10%_-20%,rgba(129,140,248,0.25),transparent)]" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-1/3 left-1/2 h-[55vh] w-[55vh] -translate-x-1/2 rounded-full bg-gradient-to-tr from-sky-200/60 via-transparent to-transparent blur-3xl dark:from-indigo-500/30" aria-hidden="true" />
      <div className="relative w-full max-w-xl overflow-hidden rounded-[2.5rem] border border-white/50 bg-white/80 p-10 shadow-[0_25px_60px_-30px_rgba(15,23,42,0.4)] backdrop-blur-2xl transition-colors duration-500 dark:border-white/10 dark:bg-slate-900/70">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/60 bg-white/70 text-lg font-semibold uppercase tracking-[0.3em] text-slate-600 shadow-sm dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300">
          i18n
        </div>
        <h2 className={`${sectionHeadingClass} mt-6`}>{t('welcome')}</h2>
        <p className={`${sectionBodyTextClass} mx-auto mt-2 max-w-sm`}>{t('select_language')}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => onLanguageSelect('en')}
            className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 px-5 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:bg-slate-900/70"
          >
            <span className="relative z-10">{t('english')}</span>
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-200/60 via-transparent to-transparent dark:from-indigo-500/40" />
            </div>
          </button>
          <button
            type="button"
            onClick={() => onLanguageSelect('pt')}
            className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 px-5 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:bg-slate-900/70"
          >
            <span className="relative z-10">{t('portuguese')}</span>
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-200/60 via-transparent to-transparent dark:from-indigo-500/40" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelection;
