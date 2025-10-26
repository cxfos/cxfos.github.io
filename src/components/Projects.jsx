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
    <section>
      <h2>{t('projects')}</h2>
      {projectsData.map((project, index) => (
        <div key={index}>
          <h3>{project.name}</h3>
          <p>{t(project.description)}</p>
          {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">Learn More</a>}
        </div>
      ))}
    </section>
  );
};

export default Projects;
