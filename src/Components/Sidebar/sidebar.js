import React from 'react';
import "./sidebar.css";
import { NavLink } from 'react-router-dom';
import profileImg from "../../assets/images/profile.jpg";
import { FaLinkedinIn, FaLaptopCode } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
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
          <img src={profileImg} alt="My Profile Picture" />
          <h1><NavLink exact to="/" onClick={close_sidebar}>Mohamed El-Fiky</NavLink></h1>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/mohamedfiky" target="_blank"><FaLinkedinIn /></a>
            <a href="https://github.com/mohamedfiky" target="_blank"><FiGithub /></a>
            <a href="https://wa.me/201558065883" target="_blank"><SiWhatsapp /></a>
            <a href="mailto:fiky4work@gmail.com" target="_blank"><MdOutlineEmail /></a>
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

    </aside>
  )
}

export default Sidebar