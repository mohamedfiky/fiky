import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import projects_data from "./../../projects.json";
import "./project-details.css";

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
      <h2 className="sub-pages-heading">Project Details</h2>
      <div className="carousel">
        <Swiper
          spaceBetween={70}
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
    </div>
    
    

  </div>
)
}

export default ProjectDetails ;