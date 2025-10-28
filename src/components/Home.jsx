import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { FiArrowDown } from 'react-icons/fi';
import SocialLinks from './SocialLinks';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden transition-all duration-300">
      {/* Background accent circle - decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>

      {/* Main content container */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl z-10">
        <div className="text-left">
          {/* Greeting */}
          <p className="text-lg md:text-xl text-green-600 dark:text-green-400 font-medium mb-2 animate-fade-in">
            {t('hero_greeting')}
          </p>

          {/* Main title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-50 mb-4 leading-tight">
            {t('hero_title')}
          </h1>

          {/* Subtitle with green accent */}
          <p className="text-2xl md:text-3xl font-semibold text-green-600 dark:text-green-400 mb-6">
            {t('hero_subtitle')}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
            {t('hero_description')}
          </p>

          {/* CTA button */}
          <div className="mb-8">
            <Link
              to="projects"
              spy
              smooth
              duration={500}
            >
              <button className="inline-flex items-center px-8 py-3 bg-green-500 dark:bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 dark:hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/30 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                {t('hero_cta')}
                <FiArrowDown className="ml-2" size={18} />
              </button>
            </Link>
          </div>

          {/* Social links */}
          <SocialLinks
            variant="hero"
            size={24}
            className="mt-8"
          />
        </div>
      </div>

      {/* Scroll hint at bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">{t('hero_scroll_hint')}</span>
          <FiArrowDown size={20} />
        </div>
      </div>
    </section>
  );
};

export default Home;