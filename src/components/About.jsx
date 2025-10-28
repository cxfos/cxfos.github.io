import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-6">
              {t('about_title')}
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about_me_p1').split(/(\bPASSIONATE\b|\bNERD\b)/).map((part, index) => {
                if (part === 'PASSIONATE' || part === 'NERD') {
                  return <span key={index} className="text-green-600 dark:text-green-400 font-semibold">{part}</span>;
                }
                return part;
              })}
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about_me_p2').split(/(\bKITCHEN\b)/).map((part, index) => {
                if (part === 'KITCHEN') {
                  return <span key={index} className="text-green-600 dark:text-green-400 font-semibold">{part}</span>;
                }
                return part;
              })}
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about_me_p3')}
            </p>

            {/* Skills keywords */}
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">JavaScript</span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">Tailwind CSS</span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">Node.js</span>
            </div>
          </div>

          {/* Profile image container */}
          <div className="relative order-1 md:order-2">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl ring-4 ring-green-500/20 max-w-md mx-auto">
              {/* Placeholder image - gradient background */}
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                <div className="text-center text-gray-600 dark:text-gray-400 px-4">
                  <svg className="w-32 h-32 mx-auto mb-4 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm">Profile Image</p>
                  <p className="text-xs mt-2">800x800px recommended</p>
                </div>
              </div>
              {/* Uncomment and update src when you have the actual image */}
              {/* <img
                src="/src/assets/images/profile.jpg"
                alt={t('about_image_alt')}
                className="w-full h-full object-cover"
              /> */}
            </div>

            {/* Decorative background element */}
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-green-500/10 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;