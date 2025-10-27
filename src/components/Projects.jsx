import React from 'react';
import { useTranslation } from 'react-i18next';

const projectsData = [
  {
    name: "Checkout Experience Templates",
    description: "checkout_templates_desc",
    link: "https://github.com/bold-commerce/checkout-experience-templates"
  },
  {
    name: "Bold Payment Booster",
    description: "payment_booster_desc",
    link: "https://github.com/bold-commerce/adobe-commerce-bold-checkout-payment-booster"
  },
  {
    name: "Project Galapagos",
    description: "galapagos_desc",
  },
  {
    name: "Bold Enhanced Payment Service (EPS)",
    description: "eps_desc",
  },
  {
    name: "Bold Checkout",
    description: "bold_checkout_desc",
    link: "https://boldcommerce.com/checkout-home"
  },
  {
    name: "Agentic Checkout",
    description: "agentic_checkout_desc",
    link: "https://boldcommerce.com/agentic-checkout"
  }
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 transition-colors duration-300">
          {t('projects')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {project.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                {t(project.description)}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-light dark:text-primary-dark hover:underline font-medium transition-colors duration-200 inline-flex items-center"
                >
                  {t('learn_more')}
                  <span className="ml-1">→</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
