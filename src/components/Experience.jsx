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
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 transition-colors duration-300">
          {t('experience')}
        </h2>
        <div className="space-y-12">
          {experiencesData.map((exp, index) => (
            <div key={`exp-${index}`} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {exp.company}
              </h3>
              {exp.duration && (
                <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                  {t(exp.duration)}
                </p>
              )}
              <div className="space-y-6">
                {exp.roles.map((role, roleIndex) => (
                  <div key={`role-${roleIndex}`} className="border-l-4 border-primary-light dark:border-primary-dark pl-4">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {role.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
                      {t(role.period)} | {t(role.location)}
                    </p>
                    {role.description.length > 0 && (
                      <ul className="space-y-2">
                        {role.description.map((item, itemIndex) => (
                          <li key={`item-${itemIndex}`} className="text-gray-700 dark:text-gray-300 flex items-start">
                            <span className="text-primary-light dark:text-primary-dark mr-2 mt-1">•</span>
                            <span>{t(item)}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
