import React, { useEffect, useRef } from 'react';
import Typed from "typed.js";
import { NavLink } from 'react-router-dom';
import "./hero.css";

function Hero() {

    // Create Ref element.
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: [
          "HTML, CSS, JavaScript projects.",
          "React JS projects.",
          "WordPress projects."
        ], 

        // Speed settings, try diffrent values untill you get good results
        startDelay: 300,
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 4000,
        loop: true
      });
  
      // Destropying
      return () => {
        typed.destroy();
      };
    }, []);

  return (
    <div className="hero special-container">
      <h1>Mohamed El-Fiky</h1>
      <h2>Front-end Developer</h2>
      <div className="typed">
        <p>I can work on :</p>
        <span ref={el}></span>
      </div>
      <div className="btns">
        <NavLink className="btn" exact to="/projects">Projects</NavLink>
        <NavLink className="btn" exact to="/resume">Resume</NavLink>
      </div>
    </div>
  )
}

export default Hero ;