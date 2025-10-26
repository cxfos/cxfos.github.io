import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home">
      <h2>{t('home_subtitle')}</h2>
    </section>
  );
};

export default Home;
