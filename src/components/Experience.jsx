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
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('experience')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
          
          <div className="space-y-12">
            {experiencesData.map((exp, index) => (
              <div key={`exp-${index}`} className={`relative ${index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2'}`}>
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>
                
                <div className={`bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.company}
                  </h3>
                  {exp.duration && (
                    <p className="text-gray-600 dark:text-gray-400 mb-6 italic font-medium">
                      {t(exp.duration)}
                    </p>
                  )}
                  <div className="space-y-6">
                    {exp.roles.map((role, roleIndex) => (
                      <div key={`role-${roleIndex}`} className="border-l-4 border-blue-500 dark:border-purple-500 pl-6 py-2">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {role.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm font-medium">
                          {t(role.period)} | {t(role.location)}
                        </p>
                        {role.description.length > 0 && (
                          <ul className="space-y-2">
                            {role.description.map((item, itemIndex) => (
                              <li key={`item-${itemIndex}`} className="text-gray-700 dark:text-gray-300 flex items-start">
                                <span className="text-blue-500 dark:text-purple-400 mr-3 mt-1 text-lg">▸</span>
                                <span>{t(item)}</span>
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
