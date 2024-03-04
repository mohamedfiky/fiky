import React from 'react';
import "./footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiWhatsapp, SiUpwork  } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";

function Footer() {
  return (
    <footer className="footer special-container">
        <div className="social-links">
            <a href="https://www.linkedin.com/in/mohamedfiky"
               aria-label="my linkedin profile" target="_blank" rel="noopener"><FaLinkedinIn /></a>
            <a href="https://github.com/mohamedfiky"
               aria-label="my github account" target="_blank" rel="noopener"><FiGithub /></a>
            <a href="https://wa.me/201558065883"
               aria-label="my whatsapp" target="_blank" rel="noopener"><SiWhatsapp /></a>
            <a href="https://www.upwork.com/freelancers/~0156ea85e28f600bc8"
               aria-label="my upwork account" target="_blank" rel="noopener"><SiUpwork /></a>
            <a href="mailto:fiky4work@gmail.com"
               aria-label="send me an email" target="_blank" rel="noopener"><MdOutlineEmail /></a>
          </div>
        <div className="made-by">Made with <span><IoMdHeart /></span>
         by <a href="https://www.linkedin.com/in/mohamedfiky" 
               aria-label="my linkedin profile" target="_blank" rel="noopener">M-Fiky</a>
        </div>
    </footer>
  )
}

export default Footer;