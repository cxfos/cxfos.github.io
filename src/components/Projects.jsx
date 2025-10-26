import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiExternalLink } from 'react-icons/fi';

const projectsData = [
  {
    name: "Checkout Experience Templates",
    description: "checkout_templates_desc",
    link: "https://github.com/bold-commerce/checkout-experience-templates",
    imageUrl: "https://via.placeholder.com/400x250"
  },
  {
    name: "Bold Payment Booster",
    description: "payment_booster_desc",
    link: "https://github.com/bold-commerce/adobe-commerce-bold-checkout-payment-booster",
    imageUrl: "https://via.placeholder.com/400x250"
  },
  {
    name: "Project Galapagos",
    description: "galapagos_desc",
    imageUrl: "https://via.placeholder.com/400x250"
  },
  {
    name: "Bold Enhanced Payment Service (EPS)",
    description: "eps_desc",
    imageUrl: "https://via.placeholder.com/400x250"
  },
  {
    name: "Bold Checkout",
    description: "bold_checkout_desc",
    link: "https://boldcommerce.com/checkout-home",
    imageUrl: "https://via.placeholder.com/400x250"
  },
  {
    name: "Agentic Checkout",
    description: "agentic_checkout_desc",
    link: "https://boldcommerce.com/agentic-checkout",
    imageUrl: "https://via.placeholder.com/400x250"
  }
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          {t('projects')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src={project.imageUrl} alt={project.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{project.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{t(project.description)}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-500 dark:text-blue-400 hover:underline"
                  >
                    {t('learn_more')} <FiExternalLink className="ml-2" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
