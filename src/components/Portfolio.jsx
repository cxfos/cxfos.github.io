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
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-br from-slate-100 via-sky-100/60 to-slate-200 text-slate-900 transition-colors duration-500 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_10%_20%,rgba(56,189,248,0.25),transparent)] dark:bg-[radial-gradient(80%_60%_at_10%_20%,rgba(79,70,229,0.25),transparent)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-[-20%] h-full w-[60%] rounded-full bg-gradient-to-b from-cyan-200/30 via-transparent to-transparent blur-3xl dark:from-indigo-500/20" aria-hidden="true" />
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        language={language}
        changeLanguage={changeLanguage}
      />
      <main className="relative flex-1 px-4 pb-24 pt-10 sm:px-6 lg:px-10">
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
