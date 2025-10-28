import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import ScrollToTop from './ScrollToTop';

const Portfolio = ({ theme, toggleTheme, language, changeLanguage }) => {
  return (
    <div>
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        language={language}
        changeLanguage={changeLanguage}
      />
      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Portfolio;
