import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t('contact')}
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              {t('contact_professional')}
            </h3>
            <div className="space-y-3">
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-medium">Email:</span><br />
                <a href="mailto:cxfosfelipe@gmail.com" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                  cxfosfelipe@gmail.com
                </a>
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-medium">LinkedIn:</span><br />
                <a href="https://www.linkedin.com/in/felipefos/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                  linkedin.com/in/felipefos
                </a>
              </p>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              {t('contact_personal')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-medium">Instagram:</span><br />
              <a href="https://www.instagram.com/cxfos/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                @cxfos
              </a>
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              {t('contact_other')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              <span className="font-medium">GitHub:</span><br />
              <a href="https://github.com/cxfos" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                github.com/cxfos
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
