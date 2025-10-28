import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiLaravel,
  SiRedux,
  SiMysql,
  SiJest,
  SiWebpack,
  SiVite,
  SiLinux,
  SiAndroid,
  SiJquery
} from 'react-icons/si';
import { FiPackage } from 'react-icons/fi';

// Technology data with icons and colors
const technologiesData = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Jest", icon: SiJest, color: "#C21325" },
  { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "Android", icon: SiAndroid, color: "#3DDC84" },
  { name: "jQuery", icon: SiJquery, color: "#0769AD" },
  { name: "NPM", icon: FiPackage, color: "#CB3837" },
  { name: "REST APIs", icon: FiPackage, color: "#6BA539" },
];

// Keep the original skill categories for a secondary section
const skillCategories = {
  "industry_knowledge": ["Front-End Development", "Object-Oriented Programming (OOP)", "Agile Project Management", "Scrum", "Business Intelligence"],
  "interpersonal_skills": ["Leadership", "Public Speaking", "Communication"],
  "languages": ["English", "Portuguese (Native or Bilingual)"]
};

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Main technologies grid */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
            {t('skills_title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('skills_subtitle')}
          </p>
        </div>

        {/* Technologies icon grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-6 max-w-7xl mx-auto mb-16">
          {technologiesData.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 md:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 group cursor-pointer"
              >
                <Icon
                  size={40}
                  className="mb-3 text-gray-400 dark:text-gray-400 group-hover:text-green-400 dark:group-hover:text-green-400 transition-colors duration-300"
                  style={{
                    color: tech.color,
                    filter: "grayscale(0.5)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = "grayscale(0)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = "grayscale(0.5)";
                  }}
                />
                <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Additional skills section */}
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-50">
                {t(category)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={`skill-${index}`}
                    className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
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