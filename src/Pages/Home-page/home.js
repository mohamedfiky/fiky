import React from 'react';
import "./home.css";
import Header from '../../Components/Header/header';
import About from '../../Components/About/about';
import Skills from '../../Components/Skills/skills';


function Home() {
  return (
    <div className="home-page">
      <Header />
      <About />
      <Skills />
    </div>
  )
}

export default Home ;