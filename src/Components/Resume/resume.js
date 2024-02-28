import React from 'react';
import "./resume.css";

function Resume() {

  return (
    <div className="resume container">
      <h2 className="pages-heading">Resume</h2>
      <p className="pages-p">
        Feel free to browse through my resume, or if you prefer, you can download it for later review.
      </p>
      <div className="btns">
        <a 
          className="view"
          href="https://drive.google.com/file/d/1tSRX1lHEnmEsNQ53E-XNy_2U43cRwzD9/view"
          target="_blank"
          aria-label="view resume"
          >
          View
          </a>
          <a 
          className="download"
          href="M-Fiky_Frontend.pdf" // directly in public folder
          download="M-Fiky_Frontend.pdf"
          aria-label="download resume"
          >
          Download
          </a>
      </div>
    </div>
  )
}

export default Resume ;