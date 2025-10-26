import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about">
      <h2>{t('about')}</h2>
      <p>{t('about_me_p1')}</p>
      <p>{t('about_me_p2')}</p>
      <p>{t('about_me_p3')}</p>
    </section>
  );
};

export default About;
