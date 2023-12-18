import React, { useEffect, useRef } from 'react';
import Typed from "typed.js";
import "./header.css";

function Header() {

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
        backDelay: 3000,
        loop: true
      });
  
      // Destropying
      return () => {
        typed.destroy();
      };
    }, []);

  return (
    <div className="header">
        <h1>Mohamed El-Fiky</h1>
        <h2>Front-end Developer</h2>
        <p>I can work on <span ref={el}></span></p>
    </div>
  )
}

export default Header