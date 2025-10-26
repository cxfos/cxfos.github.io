import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiMail, FiLinkedin, FiInstagram, FiGithub } from 'react-icons/fi';

const contactMethods = [
  {
    category: 'contact_professional',
    items: [
      {
        icon: <FiMail />,
        label: 'Email',
        value: 'cxfosfelipe@gmail.com',
        href: 'mailto:cxfosfelipe@gmail.com',
      },
      {
        icon: <FiLinkedin />,
        label: 'LinkedIn',
        value: 'linkedin.com/in/felipefos',
        href: 'https://www.linkedin.com/in/felipefos',
      },
    ],
  },
  {
    category: 'contact_personal',
    items: [
      {
        icon: <FiInstagram />,
        label: 'Instagram',
        value: '@cxfos',
        href: 'https://www.instagram.com/cxfos',
      },
    ],
  },
  {
    category: 'contact_other',
    items: [
      {
        icon: <FiGithub />,
        label: 'GitHub',
        value: 'github.com/cxfos',
        href: 'https://github.com/cxfos',
      },
    ],
  },
];

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          {t('contact')}
        </h2>
        <div className="max-w-4xl mx-auto">
          {contactMethods.map(({ category, items }) => (
            <div key={category} className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
                {t(category)}
              </h3>
              <div className="grid gap-6">
                {items.map(({ icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="text-2xl text-blue-500 mr-4">{icon}</div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">
                        {label}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
