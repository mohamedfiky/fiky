import React from 'react';
import "./contacts.css";
import { SiUpwork } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";


function Contacts() {
  return (
    <div className="contacts container">
        <h2 className="pages-heading">Contacts</h2>
        <p className="pages-p">Feel free to get in touch anytime, whether for work inquiries or 
            to just say hello. I'm available and eager to connect with you through whichever
            platform is most convenient for you. You can find me on: 
        </p>
        <div className="contacts-items">

            <div className="contact-box upwork">
                <i><SiUpwork /></i>
                <div className="contact-info">
                    <h3>Upwork</h3>
                    <p>If you have a freelancing project you can reach me through 
                        <a href="https://www.upwork.com/freelancers/~0156ea85e28f600bc8" 
                           aria-label="my upwork account" target="_blank" rel="noopener">My Upwork Account</a>
                    </p>
                </div>
            </div>
            <div className="contact-box linked-in">
                <i><FaLinkedinIn /></i>
                <div className="contact-info">
                    <h3>Linked In</h3>
                    <p>You're welcome to add me to your connections on
                        <a href="https://www.linkedin.com/in/mohamedfiky" 
                           aria-label="my linkedin profile" target="_blank" rel="noopener">LinkedIn</a>
                    </p>
                </div>
            </div>
            <div className="contact-box whatsapp">
                <i><SiWhatsapp /></i>
                <div className="contact-info">
                    <h3>WhatsApp</h3>
                    <p>Feel free to reach out to me through
                        <a href="https://wa.me/201558065883" 
                           aria-label="my watsapp" target="_blank" rel="noopener">WhatsApp</a>
                    </p>
                </div>
            </div>
            <div className="contact-box e-mail">
                <i><MdOutlineEmail /></i>
                <div className="contact-info">
                    <h3>E-Mail</h3>
                    <p>You can send me direct messages via  
                        <a href="mailto:fiky4work@gmail.com" 
                           aria-label="send me an email" target="_blank" rel="noopener">Email</a>
                    </p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Contacts ;