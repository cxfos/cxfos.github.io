import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t('about')}
        </h2>
        <div className="space-y-6">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {t('about_me_p1')}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {t('about_me_p2')}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {t('about_me_p3')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
