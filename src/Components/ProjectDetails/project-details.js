import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import projects_data from "./../../projects.json";
import "./project-details.css";
import { MdArrowForwardIos } from "react-icons/md";

/***** Swiper *****/
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';





function ProjectDetails() {

  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    
    setProjects(projects_data);

    //let footer = document.querySelector("footer");
    //let footer_height = window.getComputedStyle(footer).getPropertyValue("height");
    // let titleArea = document.querySelector(".title-area");
    // let unwanted_height = footer_height + titleArea_height ;
    //let titleArea_height = window.getComputedStyle(titleArea_Ref.current).getPropertyValue("height");
    //document.querySelector(".not-found").style.height = `calc(100vh - ${titleArea_height}px)`
    
  }, []);


  const {projectParam} = useParams();

  const portfolio_item = projects.map(project =>{

    if(projectParam == project.param){
      document.querySelector(".not-found").style.display = "none";
      
      return(
        <div className="project-details-area container" key={project.id}>
          <h2 className="sub-pages-heading">{project.name}</h2>
          <div className="carousel">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              {project.imgs.map((img, index)=>{
                return(
                  <SwiperSlide key={index}>
                    <img src={`../${img}`} alt={project.name}></img>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
          <div className="project-info">
            <div className="description">
              <h3>{project.name}</h3>
              <h4>{project.info}</h4>
              <p>{project.details}</p>
            </div>
            <div className="skills-links">
              <ul className="project-skills">Skills: 
                {project.skills.map((skill, index) => (
                  <li key={index}><i><MdArrowForwardIos /></i><span>{skill}</span></li>
                ))}
              </ul>
              <div className="project-links">
                <span className="live-preview">Live Preview: 
                  <a href={project.link} target="_blank" aria-label="project link">{project.name}</a>
                </span>
                {project.github && (
                <span className="code">Code: 
                  <a href={project.github} target="_blank" aria-label="project code">GitHub</a>
                </span>
              )}
              </div>
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
      <NavLink exact to="/projects">Projects Page</NavLink>
    </div>

    <div className="not-found container">
      <h2>There is no such project!</h2>
      <NavLink exact to="/projects">Back To Projects Page</NavLink>
    </div>

    {portfolio_item}
    
  </div>
)
}

export default ProjectDetails ;