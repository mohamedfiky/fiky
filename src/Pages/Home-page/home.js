import React from 'react';
import "./home.css";
import Header from '../../Components/Header/header';
import About from '../../Components/About/about';
import Skills from '../../Components/Skills/skills';
import Services from '../../Components/Services/services';


function Home() {
  return (
    <div className="home-page">
      <Header />
      <About />
      <Skills />
      <Services />
    </div>
  )
}

export default Home ;