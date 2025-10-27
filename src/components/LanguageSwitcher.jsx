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
        className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
        aria-label="Change language"
      >
        <FiGlobe size={24} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden animate-fade-in z-50">
          {Object.keys(languages).map((lng) => (
            <button
              key={lng}
              onClick={() => changeLanguage(lng)}
              className={`flex items-center w-full px-4 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
                i18n.language === lng ? 'bg-gray-50 dark:bg-gray-900' : ''
              }`}
            >
              <img src={languages[lng].flag} alt={`${languages[lng].name} flag`} className="w-6 h-6 mr-3 rounded" />
              <span className="font-medium">{languages[lng].name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
