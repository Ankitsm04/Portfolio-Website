import React from 'react';
import {ReactTyped as Typed} from 'react-typed';
import './Hero.css';
import Section from './Section';

const Hero = () => {
  const sentence = "Hello, I'm ";

  return (
    <div className="hero" id="home">
      <Section id="hero-inner">
        <div className='hero-inner'>
          <p className='hero-head'>
            {sentence.split("").map((char, index) => (
              <span key={index} className={char === ' ' ? 'space' : ''}>
                {char}
              </span>
            ))}
            <span className="name">
              <Typed
                strings={["Ankit Mathapati"]}
                typeSpeed={50} 
                backSpeed={60} 
                backDelay={5000} 
                startDelay={400} 
                loop
              />
            </span>
          </p>
          <div className='hero-txt'>
            <p>
              <Typed
               strings={["As a Full Stack Developer, I create beautiful UI effects and smooth animations with user-friendly designs, supported by a strong and scalable backend."]}
               typeSpeed={30} />
            </p>
          </div>
          <a href="#projects" className='button-like'>Check out my Work
            <span>➔</span>
          </a>
        </div>
      </Section>
      <div className="shooting-stars">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Hero;
