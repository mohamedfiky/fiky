import React from 'react';
import "./footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";

function Footer() {
  return (
    <footer className="footer special-container">
        <div className="social-links">
            <a href="https://www.linkedin.com/in/mohamedfiky" target="_blank"><FaLinkedinIn /></a>
            <a href="https://github.com/mohamedfiky" target="_blank"><FiGithub /></a>
            <a href="https://wa.me/201558065883" target="_blank"><SiWhatsapp /></a>
            <a href="mailto:fiky4work@gmail.com" target="_blank"><MdOutlineEmail /></a>
          </div>
        <div className="made-by">Made with <span><IoMdHeart /></span>
         by <a href="https://www.linkedin.com/in/mohamedfiky" target="_blank">M-Fiky</a>
        </div>
    </footer>
  )
}

export default Footer