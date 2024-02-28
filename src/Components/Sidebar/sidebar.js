import React from 'react';
import "./sidebar.css";
import { NavLink } from 'react-router-dom';
import profileImg from "../../assets/images/profile.jpg";
import { FaLinkedinIn, FaLaptopCode } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiWhatsapp, SiUpwork  } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { BiHome, BiEnvelope } from "react-icons/bi";
import { LiaFileDownloadSolid } from "react-icons/lia";


function Sidebar() {

  let close_sidebar = () =>{
    
    // from MenuIcons component
    let menu_icons = document.querySelector(".menu-icons");
    
    menu_icons.click();
    
  };

  

  return (
    <aside className="sidebar">

      <div className="sidebar-content">
  
        <div className="profile">
          <img src={profileImg} alt="My Picture" />
          <h1><NavLink exact to="/" onClick={close_sidebar} aria-label="home page">
            Mohamed El-Fiky</NavLink>
          </h1>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/mohamedfiky"
               aria-label="my linkedin profile" target="_blank"><FaLinkedinIn /></a>
            <a href="https://github.com/mohamedfiky"
               aria-label="my github account" target="_blank"><FiGithub /></a>
            <a href="https://wa.me/201558065883"
               aria-label="my whatsapp" target="_blank"><SiWhatsapp /></a>
            <a href="https://www.upwork.com/freelancers/~0156ea85e28f600bc8"
               aria-label="my upwork account" target="_blank"><SiUpwork /></a>
            <a href="mailto:fiky4work@gmail.com"
               aria-label="send me an email" target="_blank"><MdOutlineEmail /></a>
          </div>
        </div>
  
        <nav className="nav-menu">
          <ul>
            <li><NavLink activeClassName="active" exact to="/" onClick={close_sidebar}><i><BiHome /></i> <span>Home</span></NavLink></li>
            <li><NavLink activeClassName="active" exact to="/projects" onClick={close_sidebar}><i><FaLaptopCode /></i> <span>Projects</span></NavLink></li>
            <li><NavLink activeClassName="active" exact to="/resume" onClick={close_sidebar}><i><LiaFileDownloadSolid /></i> <span>Resume</span></NavLink></li>
            <li><NavLink activeClassName="active" exact to="/contacts" onClick={close_sidebar}><i><BiEnvelope /></i> <span>Contacts</span></NavLink></li>
          </ul>
        </nav>

      </div>

      <div className="credits">
        Design inspired by 
        <a href="https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/"
           aria-label="design credits" target="_blank">bootstrapmade</a>
      </div>

    </aside>
  )
}

export default Sidebar ;