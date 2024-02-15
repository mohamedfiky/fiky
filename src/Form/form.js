import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import "./form.css";
import { IoIosSend } from "react-icons/io";


function Form() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_vjwt0kr", "template_3fp47mz", form.current, {
        publicKey: "ZozqOgfZ1_PiAHDdL",
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          document.querySelector(".error").style.display = "none";
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact-form container">
        <h2 className="sub-pages-heading">
            Send me a message
        </h2>
        <form className="form" ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required></input>
            <input type="email" name="email" placeholder="Your E-mail" required></input>
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn">Send Message <i><IoIosSend /></i></button>
        </form>
        <div className="success">
            Message sent successfully
        </div>
        <div className="error">
            Something went wrong
        </div>
    </div>
  )
}

export default Form;