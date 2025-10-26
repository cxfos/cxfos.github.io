import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact">
      <h2>{t('contact')}</h2>
      <div>
        <h3>{t('contact_professional')}</h3>
        <p>Email: cxfosfelipe@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/felipefos/" target="_blank" rel="noopener noreferrer">linkedin.com/in/felipefos</a></p>
      </div>
      <div>
        <h3>{t('contact_personal')}</h3>
        <p>Instagram: <a href="https://www.instagram.com/cxfos/" target="_blank" rel="noopener noreferrer">@cxfos</a></p>
      </div>
      <div>
        <h3>{t('contact_other')}</h3>
        <p>GitHub: <a href="https://github.com/cxfos" target="_blank" rel="noopener noreferrer">github.com/cxfos</a></p>
      </div>
    </section>
  );
};

export default Contact;
