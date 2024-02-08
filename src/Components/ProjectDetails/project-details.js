import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import projects_data from "./../../projects.json";
import "./project-details.css";
import { MdArrowForwardIos } from "react-icons/md";

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
      <NavLink exact to="/projects">Projects Page</NavLink>
    </div>

    <div className="not-found container">
      <h2>There is no such project!</h2>
      <NavLink exact to="/projects">Back To Projects Page</NavLink>
    </div>

    <div className="project-details-area container">
      <h2 className="sub-pages-heading">Fresco Restaurant</h2>
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
          <SwiperSlide>
            <img src="../projects-imgs/fresco-1.png"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="../projects-imgs/fresco-2.png"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="../projects-imgs/fresco-3.png"></img>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="project-info">
        <div className="description">
          <h3>Fresco Restaurant</h3>
          <h4>An Italian food restaurant website</h4>
          <p>In this website I show my ability to work on WordPress projects using Elementor plugin. The content of Portfolio page is fetched from an external API using XMLHttpRequest. The Contact Us page form works properly using WPForms and WP Mail SMTP plugins. This website's design is cloned from another site (link provided in the footer).</p>
        </div>
        <div className="skills-links">
          <ul className="project-skills">Skills: 
            <li><i><MdArrowForwardIos /></i><span>WordPress</span></li>
            <li><i><MdArrowForwardIos /></i><span>Elementor</span></li>
            <li><i><MdArrowForwardIos /></i><span>Starter Templates</span></li>
          </ul>
          <div className="project-links">
            <span className="live-preview">Live Preview: 
              <a href="https://fresco-foods.000webhostapp.com" target="_blank">Fresco Restaurant</a>
            </span>
            <span className="code">Code: 
              <a href="https://github.com/mohamedfiky/weather-react" target="_blank">GitHub</a>
            </span>
          </div>
        </div>
      </div>
    </div>
    
    

  </div>
)
}

export default ProjectDetails ;