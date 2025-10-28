import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

const Portfolio = ({ theme, toggleTheme, language, changeLanguage }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        language={language}
        changeLanguage={changeLanguage}
      />
      <main className="flex-1 bg-slate-50 dark:bg-slate-950">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
