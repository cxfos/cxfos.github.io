import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight } from 'react-icons/fi';

const experiencesData = [
  {
    company: "Bold Commerce",
    duration: "bold_commerce_duration",
    roles: [
      {
        title: "Senior Software Developer",
        period: "senior_software_developer_period",
        location: "winnipeg_mb_ca",
        description: ["sdd_desc_5"],
        skills: ["React", "TypeScript", "JavaScript", "PHP", "Laravel", "NPM", "REST APIs"]
      },
      {
        title: "Javascript Subject Matter Expert",
        period: "js_sme_period",
        location: "winnipeg_mb_ca",
        description: ["js_sme_desc_1", "js_sme_desc_2"],
        skills: ["JavaScript", "TypeScript", "React", "Documentation"]
      },
      {
        title: "Intermediate Software Developer",
        period: "intermediate_dev_period",
        location: "winnipeg_mb_ca",
        description: ["intermediate_dev_desc_3", "intermediate_dev_desc_4"],
        skills: ["React", "JavaScript", "TypeScript", "PHP", "Laravel", "Stripe", "PayPal"]
      }
    ]
  },
  {
    company: "GRECA Asfaltos",
    roles: [
        {
            title: "Business System Analyst",
            period: "greca_period",
            location: "curitiba_br",
            description: ["greca_desc_1", "greca_desc_2", "greca_desc_3", "greca_desc_4"],
            skills: ["VB.Net", "Clipper", "JavaScript", "PHP", "SQL", "Joomla"]
        }
    ]
  },
];

const ExperienceCard = ({ role, company }) => {
    const { t } = useTranslation();
    return (
        <div className="group grid sm:grid-cols-8 gap-4 mb-12 transition-all">
            <div className="sm:col-span-2 mt-1">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {t(role.period)}
                </p>
            </div>
            <div className="sm:col-span-6">
                <div
                    className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-gray-200/50 dark:lg:group-hover:bg-gray-800/50"></div>
                <div className="relative">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {role.title} @ {company}
                    </h3>
                    <div className="mt-2">
                        {role.description.map((item, itemIndex) => (
                            <p key={itemIndex} className="text-base text-gray-600 dark:text-gray-300 mb-2">{t(item)}</p>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {role.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-200">
                                {skill}
                            </span>
                        ))}
                    </div>
                    <a href="#" className="inline-flex items-center gap-2 mt-4 text-blue-500 dark:text-blue-400 hover:underline">
                        {t('learn_more')} <FiArrowUpRight />
                    </a>
                </div>
            </div>
        </div>
    );
};

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          {t('experience')}
        </h2>
        <div>
          {experiencesData.map((exp, index) => (
            <div key={`exp-${index}`} className="mb-12">
              {exp.roles.map((role, roleIndex) => (
                <ExperienceCard key={roleIndex} role={role} company={exp.company} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
