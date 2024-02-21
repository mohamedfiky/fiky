import React from 'react';
import "./resume.css";
// import resumePDF from "./fiky-resume-3.pdf";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";


function Resume() {

  const docs = [
    // { uri: "https://url-to-my-pdf.pdf" }, // Remote file
    { 
      uri: require("./fiky-resume-3.pdf"),
      fileType: "pdf",
      fileName: "sss"
    } // Local File
  ];

  return (
    <div>
      <h2>My Resume !!!</h2>
      <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />

    </div>
  )
}

export default Resume;