import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import projects_data from "./../../projects.json";
import "./project-details.css";




function ProjectDetails() {

  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    
    setProjects(projects_data);
    
  }, []);

  const {projectParam} = useParams();

  const portfolio_item = projects.map(project =>{

    if(projectParam == project.param){
      document.querySelector(".not-found").style.display = "none";
      return(
        <div key={project.id} className={`project all ${project.filter}`}>
            <div className="project-info">
              <img src={`../${project.imgUrl}`}  alt={project.name} />
              <div className="project-links">
                <a target="_blank" href={project.link}>Link</a>
              </div>
            </div>
          </div>
      );
    }

  });

return (
  <div className="project-details">
    <div className="title-area special-container">
      <h2>Project Details</h2>
      <NavLink exact to="/projects">Back To Projects</NavLink>
    </div>
    <div className="not-found">
      <h2>There is no such project!</h2>
    </div>
    
    <h1>project-details {projectParam}</h1>
    
    {portfolio_item}

  </div>
)
}

export default ProjectDetails ;