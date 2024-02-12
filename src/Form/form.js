import React from 'react';
import "./form.css";
import { IoIosSend } from "react-icons/io";


function Form() {
  return (
    <div className="contact-form container">
        <h2 className="sub-pages-heading">
            Send me a message
        </h2>
        <form className="form">
            <input type="text" placeholder="Your Name"></input>
            <input type="email" placeholder="Your E-mail"></input>
            <textarea placeholder="Your Message"></textarea>
            <button type="submit" className="btn">Send Message <i><IoIosSend /></i></button>
        </form>
    </div>
  )
}

export default Form;