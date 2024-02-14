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
            <input type="text" name="name" placeholder="Your Name" required></input>
            <input type="email" name="email" placeholder="Your E-mail" required></input>
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn">Send Message <i><IoIosSend /></i></button>
        </form>
    </div>
  )
}

export default Form;