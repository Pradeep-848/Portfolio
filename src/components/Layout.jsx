import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/NavBar.css";
import About from "../pages/About";
import Tools from "../pages/Tools";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import Contacts from "../pages/Contacts";

function Layout() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const toolsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactsRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const showNavbar = () => {
    setIsOpen(!isOpen); // Toggle navbar visibility
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close navbar after clicking a link
  };

  return (
    <>
      <header>
        <h3>PRADEEP 😉</h3>
        <nav className={isOpen ? "responsive_nav" : ""}>
          <a href="#about" onClick={() => scrollToSection(aboutRef)}>About</a>
          <a href="#skills" onClick={() => scrollToSection(skillsRef)}>Skills</a>
          <a href="#tools" onClick={() => scrollToSection(toolsRef)}>Tools</a>
          <a href="#projects" onClick={() => scrollToSection(projectsRef)}>Projects</a>
          <a href="#experience" onClick={() => scrollToSection(experienceRef)}>Experience</a>
          <a href="#contacts" onClick={() => scrollToSection(contactsRef)}>Contacts</a>
          <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}
            style={{ display: isOpen ? "block" : "none" }}
          >
            <FaTimes />
          </button>
        </nav>
        <button
          className="nav-btn"
          onClick={showNavbar}
          style={{ display: isOpen ? "none" : "block" }}
        >
          <FaBars />
        </button>
      </header>

      <div className={`portfolio-content ${isOpen ? "hidden" : ""}`}>
        <section id="about" ref={aboutRef}>
          <About />
        </section>
        <section id="skills" ref={skillsRef}>
          <Skills />
        </section>
        <section id="tools" ref={toolsRef}>
          <Tools />
        </section>
        <section id="projects" ref={projectsRef}>
          <Projects />
        </section>
        <section id="experience" ref={experienceRef}>
          <Experience />
        </section>
        <section id="contacts" ref={contactsRef}>
          <Contacts />
        </section>
      </div>
    </>
  );
}

export default Layout;
