import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-300">
          {t('about')}
        </h2>
        <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>{t('about_me_p1')}</p>
          <p>{t('about_me_p2')}</p>
          <p>{t('about_me_p3')}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
