import React from 'react';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const socialData = [
  {
    name: 'GitHub',
    icon: FiGithub,
    url: 'https://github.com/cxfos',
    ariaLabel: 'GitHub Profile',
    hoverColor: 'hover:text-gray-300 dark:hover:text-gray-100'
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    url: 'https://www.linkedin.com/in/felipefos/',
    ariaLabel: 'LinkedIn Profile',
    hoverColor: 'hover:text-blue-400 dark:hover:text-blue-400'
  },
  {
    name: 'Instagram',
    icon: FiInstagram,
    url: 'https://www.instagram.com/cxfos/',
    ariaLabel: 'Instagram Profile',
    hoverColor: 'hover:text-pink-400 dark:hover:text-pink-400'
  }
];

const SocialLinks = ({ className = '', size = 24, variant = 'default', showLabels = false }) => {
  // Base classes for different variants
  const variantClasses = {
    default: 'text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-200',
    hero: 'text-gray-600 dark:text-gray-300 transition-all duration-200',
    footer: 'text-gray-500 dark:text-gray-400 transition-colors duration-200',
    contact: 'text-gray-600 dark:text-gray-300 transition-all duration-200 p-3 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-green-500 dark:hover:border-green-500'
  };

  const baseClasses = variantClasses[variant] || variantClasses.default;

  return (
    <div className={`flex gap-4 md:gap-6 ${className}`}>
      {socialData.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseClasses} ${variant === 'hero' ? social.hoverColor : ''} transform hover:scale-110`}
            aria-label={social.ariaLabel}
          >
            <Icon size={size} />
            {showLabels && (
              <span className="ml-2 text-sm font-medium">{social.name}</span>
            )}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;