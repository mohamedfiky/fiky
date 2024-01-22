import React, {useEffect} from 'react';
import "./projects.css";
import Active from "./active.png";
import Jackson from "./jackson.png";

function Projects() {

  useEffect(() => {

    let filters_lis = document.querySelectorAll(".filters li");
    let all_projects = document.querySelectorAll(".projects-row .project");
    let projects_row = document.querySelector(".projects-row");

    filters_lis.forEach(li =>{

      li.addEventListener("click", ()=>{

        filters_lis.forEach(l =>{
          l.classList.remove("active");
        });

        li.classList.add("active");

        projects_row.style.animation = "scale_animation 1.4s";

        setTimeout(()=>{
          projects_row.style.animation = "none";
        },1400);

        all_projects.forEach(project =>{

          if(!project.classList.contains(li.dataset.filter)){
            setTimeout(()=>{
              project.style.display = "none";
            },700);
          }

          else{
            setTimeout(()=>{
              project.style.display = "block";
            },700);
          }

        });

      });
      
    });

  }, []);

  return (
    <div className="projects container">
        <h2 className="pages-heading">Projects</h2>
        <p className="pages-p">I can work efficiently on various types of projects,
         such as HTML, CSS & JavaScript projects, React JS projects,
          as well as WordPress projects.
        </p>
        <div className="projects-types">
          <ul className="filters">
            <li data-filter="all" className="active">All</li>
            <li data-filter="html">HTML</li>
            <li data-filter="react">React</li>
            <li data-filter="wordpress">WordPress</li>
          </ul>
        </div>
        <div className="projects-row">

          <div className="project all html">
            <div className="project-info">
              <img src="projects-imgs/halla-w-tasa.png" />
              <div className="project-links">
                <a href="#1">Details</a>
                <a href="#2">Link</a>
              </div>
            </div>
          </div>
          <div className="project all react">
            <div className="project-info">
              <img src={Active} />
              <div className="project-links">
                <a href="#1"></a>
                <a href="#2"></a>
              </div>
            </div>
          </div>
          <div className="project all wordpress">
            <div className="project-info">
              <img src={Jackson} />
              <div className="project-links">
                <a href="#1"></a>
                <a href="#2"></a>
              </div>
            </div>
          </div>
          <div className="project all react">
            <div className="project-info">
              <img src={Active} />
              <div className="project-links">
                <a href="#1"></a>
                <a href="#2"></a>
              </div>
            </div>
          </div>
          <div className="project all wordpress">
            <div className="project-info">
              <img src={Jackson} />
              <div className="project-links">
                <a href="#1"></a>
                <a href="#2"></a>
              </div>
            </div>
          </div>
          <div className="project all html">
            <div className="project-info">
              <img src="projects-imgs/halla-w-tasa.png" />
              <div className="project-links">
                <a href="#1"></a>
                <a href="#2"></a>
              </div>
            </div>
          </div>
          <div className="project all react">
            <div className="project-info">
              <img src={Active} />
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