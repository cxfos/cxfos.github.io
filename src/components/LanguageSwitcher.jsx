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
        className="p-2 rounded-full focus:outline-none"
      >
        <FiGlobe size={24} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg">
          {Object.keys(languages).map((lng) => (
            <button
              key={lng}
              onClick={() => changeLanguage(lng)}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <img src={languages[lng].flag} alt={`${languages[lng].name} flag`} className="w-5 h-5 mr-2" />
              {languages[lng].name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
