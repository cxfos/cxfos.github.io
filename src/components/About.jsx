import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          {t('about')}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://via.placeholder.com/500x500"
              alt="About me"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="text-lg text-gray-600 dark:text-gray-300 space-y-6">
            <p>{t('about_me_p1')}</p>
            <p>{t('about_me_p2')}</p>
            <p>{t('about_me_p3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
