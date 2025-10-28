import React from 'react';
import { useTranslation } from 'react-i18next';

const experiencesData = [
  {
    company: "Bold Commerce",
    duration: "bold_commerce_duration",
    roles: [
      {
        title: "Senior Software Developer",
        period: "senior_software_developer_period",
        location: "winnipeg_mb_ca",
        description: [
          "sdd_desc_1",
          "sdd_desc_2",
          "sdd_desc_3",
          "sdd_desc_4",
          "sdd_desc_5",
        ]
      },
      {
        title: "Javascript Subject Matter Expert",
        period: "js_sme_period",
        location: "winnipeg_mb_ca",
        description: [
          "js_sme_desc_1",
          "js_sme_desc_2",
          "js_sme_desc_3",
        ]
      },
      {
        title: "Toastmaster Club President",
        period: "toastmaster_period",
        location: "winnipeg_mb_ca",
        description: []
      },
      {
        title: "Intermediate Software Developer",
        period: "intermediate_dev_period",
        location: "winnipeg_mb_ca",
        description: [
          "intermediate_dev_desc_1",
          "intermediate_dev_desc_2",
          "intermediate_dev_desc_3",
          "intermediate_dev_desc_4",
        ]
      }
    ]
  },
  {
    company: "Freelance, self-employed",
    roles: [
        {
            title: "Web Software Developer",
            period: "freelance_web_dev_period",
            location: "curitiba_br",
            description: [
                "freelance_web_dev_desc_1",
                "freelance_web_dev_desc_2",
            ]
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
            description: [
                "greca_desc_1",
                "greca_desc_2",
                "greca_desc_3",
                "greca_desc_4",
                "greca_desc_5",
                "greca_desc_6",
            ]
        }
    ]
  },
    {
    company: "Freelance, self-employed",
    roles: [
        {
            title: "Android Developer",
            period: "freelance_android_dev_period",
            location: "curitiba_br",
            description: [
                "freelance_android_dev_desc_1",
            ]
        }
    ]
  },
  {
    company: "Xtreme Informática e Lan House",
    roles: [
        {
            title: "Manager and Computer Technician",
            period: "xtreme_period",
            location: "santa_rosa_rs_br",
            description: [
                "xtreme_desc_1",
                "xtreme_desc_2",
            ]
        }
    ]
  },
  {
      company: "Escola Estadual Pedro Meinerz",
      roles: [
          {
              title: "Elementary and High School IT Teacher",
              period: "teacher_period",
              location: "santa_rosa_rs_br",
              description: [
                  "teacher_desc_1",
              ]
          }
      ]
  },
  {
      company: "Hipernet Computadores e Periféricos",
      roles: [
          {
              title: "Computer Technician",
              period: "hipernet_period",
              location: "santa_rosa_rs_br",
              description: [
                  "hipernet_desc_1",
              ]
          }
      ]
  }
];

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
            {t('experience_title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('experience_timeline_label')}
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 md:-translate-x-1/2"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiencesData.map((exp, index) => (
              <div key={`exp-${index}`} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 top-6 w-4 h-4 bg-green-500 dark:bg-green-500 rounded-full border-4 border-white dark:border-gray-800 -translate-x-1/2 shadow-lg shadow-green-500/50 z-10"></div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'} md:w-[calc(50%-2rem)]`}>
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 transition-all duration-300 group">
                    {/* Company header */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {exp.company}
                    </h3>
                    {exp.duration && (
                      <div className="inline-flex items-center px-3 py-1 bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 text-sm font-medium rounded-full border border-green-200 dark:border-green-500/30 mb-4">
                        {t(exp.duration)}
                      </div>
                    )}

                    {/* Roles */}
                    {exp.roles.map((role, roleIndex) => (
                      <div key={`role-${roleIndex}`} className={`${roleIndex > 0 ? 'mt-6 pt-6 border-t border-gray-200 dark:border-gray-700' : ''}`}>
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          {role.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 mb-3">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {t(role.period)}
                          <span className="text-gray-400 dark:text-gray-600">|</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {t(role.location)}
                        </p>
                        {role.description.length > 0 && (
                          <ul className="space-y-2">
                            {role.description.map((item, itemIndex) => (
                              <li key={`item-${itemIndex}`} className="flex items-start text-gray-700 dark:text-gray-300">
                                <span className="text-green-600 dark:text-green-400 mr-3 mt-1">▸</span>
                                <span className="leading-relaxed">{t(item)}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
