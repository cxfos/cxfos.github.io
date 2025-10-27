import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center transition-colors duration-300">
          {t('contact')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('contact_professional')}
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p className="break-words">
                <span className="font-medium">Email:</span><br />
                <a href="mailto:cxfosfelipe@gmail.com" className="text-primary-light dark:text-primary-dark hover:underline">
                  cxfosfelipe@gmail.com
                </a>
              </p>
              <p>
                <span className="font-medium">LinkedIn:</span><br />
                <a
                  href="https://www.linkedin.com/in/felipefos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-light dark:text-primary-dark hover:underline"
                >
                  linkedin.com/in/felipefos
                </a>
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('contact_personal')}
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                <span className="font-medium">Instagram:</span><br />
                <a
                  href="https://www.instagram.com/cxfos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-light dark:text-primary-dark hover:underline"
                >
                  @cxfos
                </a>
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('contact_other')}
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                <span className="font-medium">GitHub:</span><br />
                <a
                  href="https://github.com/cxfos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-light dark:text-primary-dark hover:underline"
                >
                  github.com/cxfos
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
