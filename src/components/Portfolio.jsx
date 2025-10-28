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
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-br from-slate-100 via-sky-100/50 to-slate-200 text-slate-900 transition-colors duration-500 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_-10%_-10%,rgba(14,116,144,0.25),transparent)] opacity-70 transition-opacity duration-500 dark:bg-[radial-gradient(90%_70%_at_-10%_-10%,rgba(129,140,248,0.25),transparent)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-[-25%] bottom-[-30%] h-[60vh] rounded-full bg-gradient-to-t from-sky-200/50 via-transparent to-transparent blur-3xl dark:from-indigo-500/30" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[-15%] top-[-10%] h-96 w-96 rounded-full border border-white/40 bg-white/20 blur-3xl dark:border-white/10 dark:bg-slate-900/40" aria-hidden="true" />
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        language={language}
        changeLanguage={changeLanguage}
      />
      <main className="relative flex-1 px-4 pb-24 pt-14 sm:px-6 lg:px-10">
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
