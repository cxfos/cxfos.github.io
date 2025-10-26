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
    <section>
      <h2>{t('skills')}</h2>
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category}>
          <h3>{t(category)}</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={`skill-${index}`}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;
