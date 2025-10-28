import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiGlobe } from 'react-icons/fi';
import BrazilFlag from '../assets/icons/brazil.svg';
import CanadaFlag from '../assets/icons/canada.svg';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = {
    en: { name: 'English', flag: CanadaFlag },
    pt: { name: 'Português', flag: BrazilFlag },
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-lg border border-slate-300 bg-slate-100 p-2 text-slate-600 transition-colors duration-200 hover:border-slate-400 hover:bg-slate-200 hover:text-slate-900 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:bg-slate-700 dark:hover:text-white"
      >
        <FiGlobe size={24} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl border border-slate-200 bg-white p-2 shadow-lg transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">
          {Object.keys(languages).map((lng) => (
            <button
              key={lng}
              onClick={() => changeLanguage(lng)}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <img src={languages[lng].flag} alt={`${languages[lng].name} flag`} className="h-5 w-5" />
              {languages[lng].name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
