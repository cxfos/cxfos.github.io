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
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 border border-gray-200 dark:border-gray-600"
        aria-label="Change language"
      >
        <FiGlobe size={20} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          {Object.keys(languages).map((lng, index) => (
            <button
              key={lng}
              onClick={() => changeLanguage(lng)}
              className={`flex items-center w-full px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150 ${index > 0 ? 'border-t border-gray-100 dark:border-gray-700' : ''}`}
            >
              <img src={languages[lng].flag} alt={`${languages[lng].name} flag`} className="w-5 h-4 mr-3 object-cover" />
              <span>{languages[lng].name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
