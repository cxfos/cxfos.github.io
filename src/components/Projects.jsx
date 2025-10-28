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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t('projects')}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 flex flex-col">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {project.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                {t(project.description)}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 font-medium"
                >
                  {t('learn_more')}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
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
