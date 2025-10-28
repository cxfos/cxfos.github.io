import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  sectionBaseClasses,
  sectionBodyTextClass,
  sectionHeadingClass,
} from './sectionStyles';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className={`${sectionBaseClasses} space-y-4 text-left`}>
      <h2 className={sectionHeadingClass}>{t('about')}</h2>
      <p className={sectionBodyTextClass}>{t('about_me_p1')}</p>
      <p className={sectionBodyTextClass}>{t('about_me_p2')}</p>
      <p className={sectionBodyTextClass}>{t('about_me_p3')}</p>
    </section>
  );
};

export default About;
