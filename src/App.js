import React from "react";
import "./App.css";
import "./component/header.css";
import Header from "./component/Header.jsx";
import Home from "./component/home/Home.jsx";
import About from "./component/about/About.jsx";
import Skills from "./component/skills.js/Skills.jsx";
import Qualification from "./component/qualification/Qualification.jsx";
import Projects from "./component/projects/Projects.jsx";
import Contact from "./component/contact/Contact.jsx";
import ScrollUp from "./component/scrollup/ScrollUp.jsx";



const App = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Projects />
        < Contact />
        <ScrollUp />
      </main>
    </>
  );
};

export default App;
