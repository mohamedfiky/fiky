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
          href="https://drive.google.com/file/d/1jnj3BNzV8SQs9MVx32gZwqujmAQN3mBj/view"
          target="_blank"
          >
          View
          </a>
          <a 
          className="download"
          href="fiky-resume-3.pdf" // directly in public folder
          download="fiky-resume-3.pdf"
          >
          Download
          </a>
      </div>
    </div>
  )
}

export default Resume;