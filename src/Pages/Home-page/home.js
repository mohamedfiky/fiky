import React from 'react';
import "./home.css";
import Hero from '../../Components/Hero/hero';
import About from '../../Components/About/about';
import Skills from '../../Components/Skills/skills';
import Services from '../../Components/Services/services';


function Home() {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Skills />
      <Services />
    </div>
  )
}

export default Home ;