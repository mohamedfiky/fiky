import React, {useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import projects_data from "./../../projects.json";
import "./projects.css";

function Projects() {

  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    
    setProjects(projects_data);
    
  }, []);


  ////////////////////////////

  setTimeout(()=>{
    let filters_lis = document.querySelectorAll(".filters li");
    let all_projects = document.querySelectorAll(".projects-row .project");
    let projects_row = document.querySelector(".projects-row");

    filters_lis.forEach(li =>{

      li.addEventListener("click", ()=>{

        filters_lis.forEach(l =>{
          l.classList.remove("active");
        });

        li.classList.add("active");

        projects_row.style.animation = "gallery_animation 1s";

        setTimeout(()=>{
          projects_row.style.animation = "none";
        },1000);

        all_projects.forEach(project =>{

          if(!project.classList.contains(li.dataset.filter)){
            setTimeout(()=>{
              project.style.display = "none";
            },500);
          }

          else{
            setTimeout(()=>{
              project.style.display = "block";
            },500);
          }

        });

      });
      
    });
  },100)

  const portfolio_items = projects.map(project =>{
    return(
      <div key={project.id} className={`project all ${project.filter}`}>
          <div className="project-info">
            <img src={project.imgUrl}  alt={project.name} />
            <div className="project-links">
              <Link to={`/project-details/${project.param}`}
                    aria-label="project details page" className="details">Details</Link>
              <a href={project.link} aria-label="project link" target="_blank" rel="noopener">Link</a>
            </div>
          </div>
        </div>
    );
  });

  return (
    <div className="projects container">
        <h2 className="pages-heading">Projects</h2>
        <p className="pages-p">Explore some of my projects, feel free to hover over them for details (or click on a project if you're on a touch screen).
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

          {portfolio_items}

        </div>
    </div>
  )
}

export default Projects ;