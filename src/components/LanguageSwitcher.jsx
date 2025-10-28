import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiGlobe } from 'react-icons/fi';
import BrazilFlag from '../assets/icons/brazil.svg';
import CanadaFlag from '../assets/icons/canada.svg';

const LanguageSwitcher = ({ language, onChangeLanguage }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = {
    en: { name: 'English', flag: CanadaFlag },
    pt: { name: 'Português', flag: BrazilFlag },
  };

  const activeLanguage = language || i18n.language || 'en';

  const changeLanguage = (lng) => {
    if (lng === activeLanguage) {
      setIsOpen(false);
      return;
    }

    if (onChangeLanguage) {
      onChangeLanguage(lng);
    } else {
      i18n.changeLanguage(lng);
    }

    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/70 px-3 py-2 text-sm font-medium text-slate-600 shadow-sm transition-colors duration-300 hover:border-slate-300 hover:text-slate-900 focus:outline-none dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:text-white"
      >
        <FiGlobe size={18} />
        <span className="hidden sm:inline">{languages[activeLanguage]?.name ?? languages.en.name}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-2xl border border-white/50 bg-white/80 p-2 shadow-2xl ring-1 ring-white/60 transition-colors duration-300 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80 dark:ring-white/10">
          {Object.keys(languages).map((lng) => (
            <button
              key={lng}
              type="button"
              onClick={() => changeLanguage(lng)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-200/70 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/70 dark:hover:text-white ${
                activeLanguage === lng
                  ? 'bg-slate-200/70 text-slate-900 dark:bg-slate-800/80 dark:text-white'
                  : ''
              }`}
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
