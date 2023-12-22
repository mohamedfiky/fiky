import React from 'react';
import "./about.css";
import svg from "../../assets/images/programmer.svg";
import { IoIosArrowForward } from "react-icons/io";


function About() {
  return (
    <div className="about">
      <h2 className="special-heading">About Me</h2>
      <p>I'm a self-learning front-end developer, I used to be a dentist, but I decided to do a career shift to become a front-end developer.</p>
      <p>I started my ongoing learning journey more than three years ago, a journey that witnessed many doubts and some successes, but it actually made me a stronger person.</p>
      <div className="about-row">
        <img className="programmer-img" src={svg} />
        <div className="personal-info">
          <h3>Personal Information</h3>
          <ul>
            <li><i><IoIosArrowForward /></i> Name: <span>Mohamed El-Fiky</span></li>
            <li><i><IoIosArrowForward /></i> Age: <span></span></li>
            <li><i><IoIosArrowForward /></i> Country: <span></span></li>
            <li><i><IoIosArrowForward /></i> Languages: <span></span></li>
            <li><i><IoIosArrowForward /></i> Phone: <span></span></li>
            <li><i><IoIosArrowForward /></i> E-mail: <span></span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About