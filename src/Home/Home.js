import './Home.css';

import About from '../About/About';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Contact from '../Contact/Contact';

import { useState, useEffect } from 'react';

const Home = () => {
  const [activeSection, setActiveSection] = useState('about');

  // Handle scrolling and set active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home">
      <div className="navBar">
        <span className="imgName">SAKHYATA JASTHI</span>

        <div className="navLinks">
          <div
            className={`about ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => scrollToSection('about')}
          >
            ABOUT
          </div>
          <div
            className={`experience ${activeSection === 'exp' ? 'active' : ''}`}
            onClick={() => scrollToSection('exp')}
          >
            EXPERIENCE
          </div>
          <div
            className={`education ${activeSection === 'edu' ? 'active' : ''}`}
            onClick={() => scrollToSection('edu')}
          >
            EDUCATION
          </div>
          <div
            className={`contact ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => scrollToSection('contact')}
          >
            CONTACT
          </div>
        </div>
      </div>

      <div className="navPages">
        <section id="about">
          <About />
        </section>
        <section id="exp">
          <Experience />
        </section>
        <section id="edu">
          <Education />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Home;
