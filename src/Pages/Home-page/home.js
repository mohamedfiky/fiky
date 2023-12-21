import React from 'react';
import "./home.css";
import Header from '../../Components/Header/header';
import About from '../../Components/About/about';


function Home() {
  return (
    <div className="home-page">
      <Header />
      <About />
    </div>
  )
}

export default Home