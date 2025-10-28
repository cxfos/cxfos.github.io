import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { FiArrowUp } from 'react-icons/fi';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-8 bg-gray-900 dark:bg-gray-900 border-t border-gray-700 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social links */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-sm text-gray-400 dark:text-gray-400 mb-2">{t('footer_social_links')}</p>
            <SocialLinks size={20} variant="footer" />
          </div>

          {/* Copyright text */}
          <div className="text-center">
            <p className="text-gray-400 dark:text-gray-400 text-sm">
              {t('footer_text')}
            </p>
          </div>

          {/* Back to top link */}
          <div className="flex items-center">
            <Link
              to="home"
              spy
              smooth
              duration={500}
              className="inline-flex items-center text-gray-400 dark:text-gray-400 hover:text-green-400 dark:hover:text-green-400 transition-colors duration-200 cursor-pointer text-sm"
            >
              <FiArrowUp className="mr-2" size={16} />
              {t('footer_back_to_top')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;