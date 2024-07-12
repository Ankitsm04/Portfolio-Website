import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className='hero-inner'>
        <p className='hero-head'>
          <span className="hello">Hello, I'm </span>
          <span className="name">Ankit Mathapati</span>
        </p>
        <div className='hero-txt'>
        <p>
          As a Full Stack Developer, I create beautiful UI effects and smooth animations with
          user-friendly designs, supported by a strong and scalable backend.
        </p>
        </div>
        <a href="#projects" className='button-like'>Check out my Work
          <span>➔</span>
        </a>
      </div>
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
