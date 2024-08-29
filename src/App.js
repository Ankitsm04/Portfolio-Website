import React from 'react';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import './App.css';
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from './components/Scrollprogress';

export default function Home() {
  return (
    <>
    <div>
      <ScrollProgress/>
      <Navbar />
      <Hero/>
      <About/>
      <Projects/>
      <Contact />
      <Footer />
    </div>
    </>
  );
}
