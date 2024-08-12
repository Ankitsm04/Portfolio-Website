import React, { useState } from 'react';
import './Projects.css';
import AMZN from '../assets/images/projects/amazonclone.png';
import CONVERT from '../assets/images/projects/currencyconverter.png';
import TRACK from '../assets/images/projects/expensetracker.png';
import QTEXT from '../assets/images/projects/Qtext.png';
import MOVIE from '../assets/images/projects/movierecommedation.png';
import PORTFOLIO from '../assets/images/projects/portfolio.png';
import NIKE from '../assets/images/projects/nikesoul.png';
import DONEX from '../assets/images/projects/donex.png';
import Section from './Section';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const projects = [
    {
      title: 'Movie Recommendation System',
      description: 'Python',
      category: 'AI/ML',
      image: MOVIE,
      link: 'https://ml-movie-recommendation-system.streamlit.app/',
      github: '',
    },
    {
      title: 'Portfolio',
      description: 'HTML/CSS/JS',
      category: 'Web Dev',
      image: PORTFOLIO,
      link: 'https://ankit-mathapati.vercel.app/',
      github: '',
    },
    {
      title: 'Currency Converter',
      description: 'HTML/CSS/JS',
      category: 'Web Dev',
      image: CONVERT,
      link: 'https://currency-convert-by-ankit.netlify.app/',
      github: '',
    },
    {
      title: 'Company Portfolio',
      description: 'HTML/CSS/JS',
      category: 'Web Dev',
      image: DONEX,
      link: 'https://donexinfotech.azurewebsites.net/',
      github: '',
    },
    {
      title: 'Amazon Clone',
      description: 'HTML/CSS/JS',
      category: 'Web Dev',
      image: AMZN,
      link: 'https://amazon-clone-38.netlify.app/',
      github: '',
    },
    {
      title: 'Expense Tracker',
      description: 'HTML/CSS/JS',
      category: 'Web Dev',
      image: TRACK,
      link: 'https://expensetrackerfromankit.netlify.app/',
      github: '',
    },
    {
      title: 'Text Formatting App',
      description: 'React',
      category: 'Web Dev',
      image: QTEXT,
      link: 'https://qtext-react.vercel.app/',
      github: '',
    },
    
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'ALL' || project.category === activeCategory
  );

  return (
    <div className='projects' id='projects'>
      <Section id="head">
        <div className='head'>
          <p>Projects</p>
          <div className='line'></div>
        </div>
      </Section>
      <Section>
        <div className='projects-nav'>
          <ul>
            {['ALL', 'Web Dev', 'AI/ML'].map((category) => (
              <li
                key={category}
                className={activeCategory === category ? 'active' : ''}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <div className='projects-cards'>
        {filteredProjects.map((project, index) => (
          <Section key={index} id={`project-${index}`}>
            <div
              className={`project-card ${activeCategory === project.category || activeCategory === 'ALL' ? 'show' : ''}`}
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className='overlay'>
                <h3>{project.title}</h3>
                <a href={project.link} class="menu__button">
                <span>🔗View Project</span>                 
                </a>
              </div>
            </div>
          </Section>
        ))}
      </div>
    </div>
  );
};

export default Projects;
