import React from 'react';
import { useTranslation } from 'react-i18next';

const skillCategories = {
  "industry_knowledge": ["Front-End Development", "Object-Oriented Programming (OOP)", "Agile Project Management", "Scrum", "Business Intelligence"],
  "tools_technologies": ["React.js", "React Native", "JavaScript", "REST APIs", "Node.js", "Git", "JavaScript eXtension (JSX)", "React Hooks", "Redux.js", "Babel.js", "Webpack", "Jest", "JSON", "TypeScript", "PHP", "Laravel", "SQL", "jQuery", "MySQL", "HTML5", "CSS", "XML Schema", "Linux", "Java", "Android Development", "Microsoft SQL Server"],
  "interpersonal_skills": ["Leadership", "Public Speaking", "Communication"],
  "languages": ["English", "Portuguese (Native or Bilingual)"]
};

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 transition-colors duration-300">
          {t('skills')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t(category)}
              </h3>
              <ul className="space-y-2">
                {skills.map((skill, index) => (
                  <li key={`skill-${index}`} className="text-gray-700 dark:text-gray-300 flex items-start">
                    <span className="text-primary-light dark:text-primary-dark mr-2">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
