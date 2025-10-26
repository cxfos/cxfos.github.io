import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <img
            src="https://via.placeholder.com/150"
            alt="Felipe Dos Santos"
            className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-gray-200 dark:border-gray-700"
          />
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-4">
            {t('welcome')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            {t('home_subtitle')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
          >
            {t('contact')} <FiArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
