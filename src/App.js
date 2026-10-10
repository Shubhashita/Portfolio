import React from 'react';
import './App.css';
import 'lenis/dist/lenis.css';
import './component/header.css';
import Header from './component/Header.jsx';
import Home from './component/home/Home.jsx';
import About from './component/about/About.jsx';
import Skills from './component/skills.js/Skills.jsx';
import Qualification from './component/qualification/Qualification.jsx';
import Certifications from './component/certifications/Certifications.jsx';
import Projects from './component/projects/Projects.jsx';
import Contact from './component/contact/Contact.jsx';
import ScrollUp from './component/scrollup/ScrollUp.jsx';
import ScrollProgress from './component/motion/ScrollProgress.jsx';
import useLenis from './hooks/useLenis';
import { motion } from 'framer-motion';

const App = () => {
  useLenis();

  return (
    <>
      <ScrollProgress />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <Header />

        <main className="main">
          <Home />
          <About />
          <Skills />
          <Qualification />
          <Certifications />
          <Projects />
          <Contact />
          <ScrollUp />
        </main>
      </motion.div>
    </>
  );
};

export default App;
