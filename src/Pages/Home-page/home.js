import React from 'react';
import Hero from '../../Components/Hero/hero';
import About from '../../Components/About/about';
import Skills from '../../Components/Skills/skills';
import Services from '../../Components/Services/services';
import ContactHome from '../../Components/ContactHome/contact-home';


function Home() {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Skills />
      <Services />
      <ContactHome />
    </div>
  )
}

export default Home ;