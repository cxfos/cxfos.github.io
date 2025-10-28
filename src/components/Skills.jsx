import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  sectionBaseClasses,
  sectionBodyTextClass,
  sectionHeadingClass,
  sectionSubheadingClass,
} from './sectionStyles';

const skillCategories = {
  "industry_knowledge": ["Front-End Development", "Object-Oriented Programming (OOP)", "Agile Project Management", "Scrum", "Business Intelligence"],
  "tools_technologies": ["React.js", "React Native", "JavaScript", "REST APIs", "Node.js", "Git", "JavaScript eXtension (JSX)", "React Hooks", "Redux.js", "Babel.js", "Webpack", "Jest", "JSON", "TypeScript", "PHP", "Laravel", "SQL", "jQuery", "MySQL", "HTML5", "CSS", "XML Schema", "Linux", "Java", "Android Development", "Microsoft SQL Server"],
  "interpersonal_skills": ["Leadership", "Public Speaking", "Communication"],
  "languages": ["English", "Portuguese (Native or Bilingual)"]
};

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className={`${sectionBaseClasses} space-y-8 text-left`}>
      <h2 className={sectionHeadingClass}>{t('skills')}</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div
            key={category}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900"
          >
            <h3 className={`${sectionSubheadingClass} mb-4`}>{t(category)}</h3>
            <ul className="space-y-2">
              {skills.map((skill, index) => (
                <li key={`skill-${index}`} className={sectionBodyTextClass}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
