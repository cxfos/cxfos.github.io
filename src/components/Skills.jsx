import React from 'react';
import { useTranslation } from 'react-i18next';

const skillCategories = {
  "industry_knowledge": ["Front-End Development", "Object-Oriented Programming (OOP)", "Agile Project Management", "Scrum", "Business Intelligence"],
  "tools_technologies": ["React.js", "React Native", "JavaScript", "REST APIs", "Node.js", "Git", "JSX", "React Hooks", "Redux.js", "Babel.js", "Webpack", "Jest", "JSON", "TypeScript", "PHP", "Laravel", "SQL", "jQuery", "MySQL", "HTML5", "CSS", "XML", "Linux", "Java", "Android Development", "Microsoft SQL Server"],
  "interpersonal_skills": ["Leadership", "Public Speaking", "Communication"],
  "languages": ["English", "Portuguese (Native or Bilingual)"]
};

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          {t('skills')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">{t(category)}</h3>
              <ul className="space-y-2">
                {skills.map((skill, index) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    {skill}
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
