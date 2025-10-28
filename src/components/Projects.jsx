import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projectsData = [
  {
    name: "Checkout Experience Templates",
    description: "checkout_templates_desc",
    techStack: ["React", "TypeScript", "Redux", "Webpack", "SCSS"],
    githubLink: "https://github.com/bold-commerce/checkout-experience-templates",
    image: "checkout-templates"
  },
  {
    name: "Bold Payment Booster",
    description: "payment_booster_desc",
    techStack: ["PHP", "Magento 2", "JavaScript", "MySQL"],
    githubLink: "https://github.com/bold-commerce/adobe-commerce-bold-checkout-payment-booster",
    image: "payment-booster"
  },
  {
    name: "Project Galapagos",
    description: "galapagos_desc",
    techStack: ["SQL", "ETL", "Data Migration", "TOTVS"],
    image: "galapagos"
  },
  {
    name: "Bold Enhanced Payment Service (EPS)",
    description: "eps_desc",
    techStack: ["PayPal", "Braintree", "Stripe", "React", "TypeScript"],
    image: "eps"
  },
  {
    name: "Bold Checkout",
    description: "bold_checkout_desc",
    techStack: ["React", "TypeScript", "Node.js", "REST APIs"],
    liveLink: "https://boldcommerce.com/checkout-home",
    image: "bold-checkout"
  },
  {
    name: "Agentic Checkout",
    description: "agentic_checkout_desc",
    techStack: ["AI/ML", "React", "TypeScript", "Next.js"],
    liveLink: "https://boldcommerce.com/agentic-checkout",
    image: "agentic-checkout"
  }
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
            {t('projects_title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('projects.subtitle', '')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {projectsData.map((project, index) => (
            <div key={index} className="group relative bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
              {/* Project image placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center overflow-hidden">
                {/* Placeholder content */}
                <div className="text-center text-gray-600 dark:text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-xs">Project Screenshot</p>
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                {/* Uncomment when you have actual images */}
                {/* <img
                  src={`/src/assets/images/projects/${project.image}.jpg`}
                  alt={project.name}
                  className="w-full h-full object-cover"
                /> */}
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {project.name}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                  {t(project.description)}
                </p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project links */}
                <div className="flex gap-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors"
                    >
                      <FiGithub className="mr-2" size={18} />
                      {t('projects_github_link')}
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors"
                    >
                      <FiExternalLink className="mr-2" size={18} />
                      {t('projects_live_demo')}
                    </a>
                  )}
                  {!project.githubLink && !project.liveLink && (
                    <span className="text-gray-600 dark:text-gray-500 text-sm">
                      Internal Project
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;