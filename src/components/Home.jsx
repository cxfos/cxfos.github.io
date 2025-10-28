import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { FiArrowUpRight, FiPlay } from 'react-icons/fi';
import { sectionBaseClasses, sectionBodyTextClass } from './sectionStyles';
import heroPlaceholder from '../assets/hero-placeholder.svg';

const Home = () => {
  const { t } = useTranslation();

  const metrics = [
    { value: '12+', label: t('home_metric_years_label') },
    { value: '40+', label: t('home_metric_projects_label') },
    { value: '5', label: t('home_metric_mentoring_label') },
  ];

  return (
    <section
      id="home"
      className={`${sectionBaseClasses} grid gap-12 lg:grid-cols-[1.1fr_minmax(0,0.9fr)]`}
    >
      <div className="flex flex-col justify-center gap-10">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-700 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)]" aria-hidden="true" />
          {t('home_status_badge')}
        </div>
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
            {t('home_subtitle')}
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 drop-shadow-sm transition-colors duration-300 sm:text-5xl lg:text-6xl dark:text-white">
            {t('home_title')}
          </h1>
          <p className={`${sectionBodyTextClass} text-lg text-slate-600 dark:text-slate-300`}>
            {t('home_description')}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="projects"
            smooth
            duration={500}
            className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/25 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
          >
            {t('home_primary_cta')}
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            className="group inline-flex items-center gap-2 rounded-full border border-slate-900/20 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-900/40 hover:shadow-lg dark:border-white/20 dark:bg-slate-900/30 dark:text-slate-100 dark:hover:border-white/40 dark:hover:bg-slate-900/50"
          >
            <FiPlay className="text-base" />
            {t('home_secondary_cta')}
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/60 bg-white/80 p-5 text-left shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-slate-900/50"
            >
              <span className="text-3xl font-semibold text-slate-900 dark:text-white">{metric.value}</span>
              <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-4 rounded-[3rem] bg-gradient-to-br from-sky-200/60 via-transparent to-indigo-200/60 blur-3xl dark:from-indigo-500/30 dark:to-violet-500/30" aria-hidden="true" />
        <div className="relative overflow-hidden rounded-[3rem] border border-white/70 bg-white/70 shadow-2xl ring-1 ring-white/70 transition-transform duration-500 hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900/60 dark:ring-white/10">
          <img
            src={heroPlaceholder}
            alt={t('home_hero_alt')}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
