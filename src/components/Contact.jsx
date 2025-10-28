import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  sectionBaseClasses,
  sectionBodyTextClass,
  sectionHeadingClass,
  sectionSubheadingClass,
} from './sectionStyles';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className={`${sectionBaseClasses} space-y-8 text-left`}>
      <h2 className={sectionHeadingClass}>{t('contact')}</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">
          <h3 className={`${sectionSubheadingClass} mb-4`}>{t('contact_professional')}</h3>
          <p className={sectionBodyTextClass}>Email: cxfosfelipe@gmail.com</p>
          <p className={sectionBodyTextClass}>
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/felipefos/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >
              linkedin.com/in/felipefos
            </a>
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">
          <h3 className={`${sectionSubheadingClass} mb-4`}>{t('contact_personal')}</h3>
          <p className={sectionBodyTextClass}>
            Instagram:{' '}
            <a
              href="https://www.instagram.com/cxfos/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >
              @cxfos
            </a>
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900 md:col-span-2">
          <h3 className={`${sectionSubheadingClass} mb-4`}>{t('contact_other')}</h3>
          <p className={sectionBodyTextClass}>
            GitHub:{' '}
            <a
              href="https://github.com/cxfos"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >
              github.com/cxfos
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
