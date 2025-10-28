import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  sectionBaseClasses,
  sectionBodyTextClass,
  sectionHeadingClass,
  sectionSubheadingClass,
} from './sectionStyles';

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
    <section id="experience" className={`${sectionBaseClasses} space-y-10 text-left`}>
      <h2 className={sectionHeadingClass}>{t('experience')}</h2>
      <div className="space-y-8">
        {experiencesData.map((exp, index) => (
          <div
            key={`exp-${index}`}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900"
          >
            <h3 className={`${sectionSubheadingClass} mb-2`}>{exp.company}</h3>
            {exp.duration && (
              <p className={`${sectionBodyTextClass} mb-4 font-medium text-slate-700 dark:text-slate-200`}>
                {t(exp.duration)}
              </p>
            )}
            <div className="space-y-6">
              {exp.roles.map((role, roleIndex) => (
                <div key={`role-${roleIndex}`} className="space-y-2">
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100">{role.title}</h4>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {t(role.period)} • {t(role.location)}
                  </p>
                  {role.description.length > 0 && (
                    <ul className="list-disc space-y-2 pl-5">
                      {role.description.map((item, itemIndex) => (
                        <li key={`item-${itemIndex}`} className={sectionBodyTextClass}>
                          {t(item)}
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
    </section>
  );
};

export default Experience;
