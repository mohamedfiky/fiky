import React from 'react';
import "./services.css";
import { PiFileHtml } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { IoLogoWordpress } from "react-icons/io";

function Services() {
  return (
    <div className="services">
        <h2 className="special-heading">Services</h2>
        <p className="special-p">I can work efficiently on various types of projects,
             such as HTML, CSS & JavaScript projects, React JS projects,
              as well as WordPress projects.
        </p>
        <div className="services-row">

          <div className="service-box">
            <i><PiFileHtml /></i>
            <div className="service-info">
              <h3>HTML Projects</h3>
              <p>I have several HTML, CSS & JavaScript projects that show my ability to work on such projects.</p>
            </div>
          </div>
          <div className="service-box">
            <i><FaReact /></i>
            <div className="service-info">
              <h3>React JS Projects</h3>
              <p>With a couple of React JS projects, I showcase my ability to manage these types of projects.</p>
            </div>
          </div>
          <div className="service-box">
            <i><IoLogoWordpress /></i>
            <div className="service-info">
              <h3>WordPress Projects</h3>
              <p>I have some WordPress projects that highlight my capability to manage these types of tasks.</p>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Services