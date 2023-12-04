import React from 'react';
import "./sidebar.css";
import profileImg from "../../assets/images/profile.jpg";
import { FaLinkedinIn, FaLaptopCode } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { BiHome, BiEnvelope } from "react-icons/bi";
import { LiaFileDownloadSolid } from "react-icons/lia";


function Sidebar() {
  return (
    <aside>

      <div className="sidebar-content">
  
        <div className="profile">
          <img src={profileImg} alt="My Profile Picture" />
          <h1><a href="index.html">Mohamed El-Fiky</a></h1>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/mohamedfiky" target="_blank"><FaLinkedinIn /></a>
            <a href="https://github.com/mohamedfiky" target="_blank"><FiGithub /></a>
            <a href="https://wa.me/201558065883" target="_blank"><SiWhatsapp /></a>
            <a href="mailto:fiky.link@gmail.com" target="_blank"><MdOutlineEmail /></a>
          </div>
        </div>
  
        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li><a href="#home" className="nav-link scrollto active"><i><BiHome /></i> <span>Home</span></a></li>
            <li><a href="#projects" className="nav-link scrollto"><i><FaLaptopCode /></i> <span>Projects</span></a></li>
            <li><a href="#resume" className="nav-link scrollto"><i><LiaFileDownloadSolid /></i> <span>Resume</span></a></li>
            <li><a href="#contact" className="nav-link scrollto"><i><BiEnvelope /></i> <span>Contact</span></a></li>
          </ul>
        </nav>

      </div>

    </aside>
  )
}

export default Sidebar