import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setIsNavVisible(!isNavVisible);
  };

  const scrollToSection = (id, event) => {
    event.preventDefault();
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 75; 

    const sections = [
      { id: 'home', offset: 0 },
      { id: 'about', offset: 0 },
      { id: 'projects', offset: 0 },
      { id: 'contact', offset: 0 },
    ];

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
              onClick={(e) => scrollToSection('home', e)}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={(e) => scrollToSection('about', e)}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={(e) => scrollToSection('projects', e)}
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => scrollToSection('contact', e)}
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
