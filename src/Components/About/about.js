import React from 'react';
import "./about.css";
import svg from "../../assets/images/programmer.svg";


function About() {
  return (
    <div className="about">
      <h2 className="special-heading">About Me</h2>
      <p>I'm a self-learning front-end developer, I used to be a dentist, but I chose to leave it and follow my passion to become a front-end developer.</p>
      <p>I started my ongoing learning journey more than three years ago, a journey that witnessed many doubts and some successes, but it actually made me a stronger person.</p>
      <div className="about-row">
        <img className="programmer-img" src={svg} />
        <div className="personal-info">
          <ul>
            <li>sss</li>
            <li>ddd</li>
            <li>www</li>
            <li>qqq</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About