import React from 'react';
import "./about.css";
import svg from "../../assets/images/programmer.svg";
import { MdArrowForwardIos } from "react-icons/md";


function About() {

  let date = new Date();
  let current_year = date.getFullYear();
  let my_birth_year = 1990 ;
  let myAge = current_year - my_birth_year ;

  return (
    <div className="about container">
      <h2 className="special-heading">About Me</h2>
      <p className="special-p">I'm a self-learning front-end developer, I used to be a dentist, but I decided to do a career shift to become a front-end developer.</p>
      <p className="special-p">I started my ongoing learning journey more than three years ago, a journey that witnessed many doubts and some successes, but it actually made me a stronger person.</p>
      <div className="about-row">
        <img className="programmer-img" src={svg} alt="programmer vector illustration"/>
        <div className="personal-info">
          <h3>Personal Information</h3>
          <ul>
            <li><i><MdArrowForwardIos /></i><span className="key">Name: </span><span className="value">Mohamed El-Fiky</span></li>
            <li><i><MdArrowForwardIos /></i><span className="key">Age: </span><span className="value">{myAge}</span></li>
            <li><i><MdArrowForwardIos /></i><span className="key">Country: </span><span className="value">Egypt</span></li>
            <li><i><MdArrowForwardIos /></i><span className="key">Languages: </span><span className="value">Arabic, English</span></li>
            <li><i><MdArrowForwardIos /></i><span className="key">Phone: </span><span className="value">+201558065883</span></li>
            <li><i><MdArrowForwardIos /></i><span className="key">E-mail: </span><span className="value">fiky4work@gmail.com</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About;