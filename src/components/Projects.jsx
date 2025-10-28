import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  sectionBaseClasses,
  sectionBodyTextClass,
  sectionHeadingClass,
  sectionSubheadingClass,
} from './sectionStyles';

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
    <section id="projects" className={`${sectionBaseClasses} space-y-8 text-left`}>
      <h2 className={sectionHeadingClass}>{t('projects')}</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900"
          >
            <div className="space-y-3">
              <h3 className={sectionSubheadingClass}>{project.name}</h3>
              <p className={sectionBodyTextClass}>{t(project.description)}</p>
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
              >
                {t('learn_more')}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
