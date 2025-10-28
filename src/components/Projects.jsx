import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight } from 'react-icons/fi';
import {
  sectionBaseClasses,
  sectionBodyTextClass,
  sectionHeadingClass,
  sectionSubheadingClass,
} from './sectionStyles';
import projectAurora from '../assets/projects/project-aurora.svg';
import projectHorizon from '../assets/projects/project-horizon.svg';
import projectOrbit from '../assets/projects/project-orbit.svg';

const projectsData = [
  {
    name: 'Checkout Experience Templates',
    description: 'checkout_templates_desc',
    link: 'https://github.com/bold-commerce/checkout-experience-templates',
    image: projectAurora,
    alt: 'Gradient illustration inspired by modular checkout templates',
  },
  {
    name: 'Bold Payment Booster',
    description: 'payment_booster_desc',
    link: 'https://github.com/bold-commerce/adobe-commerce-bold-checkout-payment-booster',
    image: projectHorizon,
    alt: 'Futuristic payment booster visualization with layered horizon',
  },
  {
    name: 'Project Galapagos',
    description: 'galapagos_desc',
    image: projectOrbit,
    alt: 'Abstract landscape representing Project Galapagos migration',
  },
  {
    name: 'Bold Enhanced Payment Service (EPS)',
    description: 'eps_desc',
    image: projectHorizon,
    alt: 'Neon orbit artwork symbolizing enhanced payment services',
  },
  {
    name: 'Bold Checkout',
    description: 'bold_checkout_desc',
    link: 'https://boldcommerce.com/checkout-home',
    image: projectAurora,
    alt: 'Aurora style gradient illustration for Bold Checkout',
  },
  {
    name: 'Agentic Checkout',
    description: 'agentic_checkout_desc',
    link: 'https://boldcommerce.com/agentic-checkout',
    image: projectOrbit,
    alt: 'Cosmic themed artwork representing agentic checkout journeys',
  },
];

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className={`${sectionBaseClasses} space-y-8 text-left`}>
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">{t('projects')}</p>
        <h2 className={sectionHeadingClass}>{t('projects_heading')}</h2>
        <p className={`${sectionBodyTextClass} max-w-3xl`}>{t('projects_intro')}</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        {projectsData.map((project) => (
          <article
            key={project.name}
            className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/80 shadow-lg shadow-slate-900/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/20 dark:border-white/10 dark:bg-slate-900/60"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.alt}
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-slate-950/40" />
            </div>
            <div className="flex flex-1 flex-col justify-between space-y-4 px-6 pb-8 pt-6">
              <div className="space-y-3">
                <h3 className={`${sectionSubheadingClass} text-2xl`}>{project.name}</h3>
                <p className={sectionBodyTextClass}>{t(project.description)}</p>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition-colors duration-300 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
                >
                  {t('learn_more')}
                  <FiArrowUpRight />
                </a>
              )}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition duration-500 group-hover:border-white/60 dark:group-hover:border-white/10" />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
