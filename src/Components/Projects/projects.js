import React from 'react';
import "./projects.css";
import Jaee from "./jaee.png";
import Active from "./active.png";
import Jackson from "./jackson.png";

function Projects() {
  return (
    <div className="projects container">
        <h2 className="pages-heading">Projects</h2>
        <p className="pages-p">I can work efficiently on various types of projects,
         such as HTML, CSS & JavaScript projects, React JS projects,
          as well as WordPress projects.
        </p>
        <div className="projects-types">
          <ul className="filters">
            <li data-filter="all" className="active-filter">All</li>
            <li data-filter=".html">HTML</li>
            <li data-filter=".react">React</li>
            <li data-filter=".wordpress">WordPress</li>
          </ul>
        </div>
        <div className="projects-row">

          <div className="project html">
            <div className="project-info">
              <img src={Jaee} />
              <div className="project-links">
                <a href="#1">Details</a>
                <a href="#2">Link</a>
              </div>
            </div>
          </div>
          <div className="project react">
            <div className="project-info">
              <img src={Active} />
              <div className="project-links">
                <a href="#1"></a>
                <a href="#2"></a>
              </div>
            </div>
          </div>
          <div className="project wordpress">
            <div className="project-info">
              <img src={Jackson} />
              <div className="project-links">
                <a href="#1"></a>
                <a href="#2"></a>
              </div>
            </div>
          </div>
          <div className="project react">
            <div className="project-info">
              <img src={Active} />
              <div className="project-links">
                <a href="#1"></a>
                <a href="#2"></a>
              </div>
            </div>
          </div>
          <div className="project wordpress">
            <div className="project-info">
              <img src={Jackson} />
              <div className="project-links">
                <a href="#1"></a>
                <a href="#2"></a>
              </div>
            </div>
          </div>
          <div className="project html">
            <div className="project-info">
              <img src={Jaee} />
              <div className="project-links">
                <a href="#1"></a>
                <a href="#2"></a>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Projects