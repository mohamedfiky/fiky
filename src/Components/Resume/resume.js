import React from 'react';
import "./resume.css";
import { Document, Page} from "react-pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
//import resumePDF from "./fiky-resume-3.pdf";

function Resume() {
  const pdf = 'fiky-resume-3.pdf';
  return (
    <div>
      <h2>My Resume !!!</h2>
      <Document file={pdf} onError={console.error}>
        <Page pageNumber={1} />
      </Document>

    </div>
  )
}

export default Resume;