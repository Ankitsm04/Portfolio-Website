import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';

const scrollToSection = (id, event, setActiveSection) => {
  event.preventDefault();
  setActiveSection(id);
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.offsetTop;
    window.scrollTo({
      top: elementPosition - 70,
      behavior: 'smooth',
    });
  }
};

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 75;

    // Define your sections here
    const sections = [
      { id: 'hero', offset: 0 },
      { id: 'about', offset: 0 },
      { id: 'projects', offset: 0 },
      { id: 'contact', offset: 0 },
    ];

    // Find which section is active based on scroll position
    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={navbarRef} className='sticky-top'>
      <button className="toggle-button" onClick={toggleNavbar}>
        ☰
      </button>
      <div className={`main ${isNavVisible ? 'visible' : ''}`}>
        <ul>
          <li>
            <a
              href="#home"
              className={activeSection === 'home' ? 'active' : ''}
              onClick={(e) => scrollToSection('home', e, setActiveSection)}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={(e) => scrollToSection('about', e, setActiveSection)}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={(e) => scrollToSection('projects', e, setActiveSection)}
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => scrollToSection('contact', e, setActiveSection)}
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
