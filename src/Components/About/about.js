import React from 'react';
import "./about.css";
import svg from "../../assets/images/programmer.svg";


function About() {
  return (
    <div>
        <img className="programmer-img" src={svg} />
    </div>
  )
}

export default About