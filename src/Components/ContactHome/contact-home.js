import React from 'react';
import { NavLink } from 'react-router-dom';
import "./contact-home.css";

function ContactHome() {
  return (
    <div className="contact-home container">
        <h2>Have an idea? let's talk</h2>
        <NavLink className="btn" exact to="/contacts">Contact Me</NavLink>
    </div>
  )
}

export default ContactHome