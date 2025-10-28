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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t('skills')}
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {t(category)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={`skill-${index}`}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
