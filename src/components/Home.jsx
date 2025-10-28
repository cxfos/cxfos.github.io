import React from 'react';
import { useTranslation } from 'react-i18next';
import { sectionBaseClasses } from './sectionStyles';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className={`${sectionBaseClasses} flex flex-col gap-6 text-left`}
    >
      <h2 className="text-4xl font-bold tracking-tight text-slate-900 transition-colors duration-300 dark:text-slate-100 sm:text-5xl">
        {t('home_subtitle')}
      </h2>
    </section>
  );
};

export default Home;
