import React from 'react';
import './Footer.css';
import TOP from '../assets/images/footer/top.png'
import LINKEDIN from '../assets/images/footer/linkedin.png'
import GITHUB from '../assets/images/footer/github.png'
import INSTA from '../assets/images/footer/insta.png'
import GMAIL from '../assets/images/footer/gmail.png'


const Footer = () => {
  return (
    <div className='footer'>
      <a href="#home" className="back-to-top">
        <img src={TOP} alt="" />
      </a>
      <ul>
        <li>
          <a href='https://www.linkedin.com/in/ankit-s-m/'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fa fa-facebook">
              <img src={LINKEDIN} alt="" />
            </span>
          </a> 
        </li>
        <li>
          <a href="https://github.com/Ankitsm04">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fa fa-twitter">
              <img src={GITHUB} alt="" />
            </span>
          </a> 
        </li>
        <li>
          <a href="https://www.instagram.com/ankit.s.m/">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fa fa-instagram">
              <img src={INSTA} alt="" />
            </span>
          </a> 
        </li>
        <li>
          <a href="mailto:ankitsm38@gmail.com">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fa fa-linkedin">
              <img src={GMAIL} alt="" />
            </span>
          </a> 
        </li>
      </ul>
      <p>&copy; {new Date().getFullYear()} Ankit Mathapati. All rights reserved.</p>
    </div>
  );
}

export default Footer;
