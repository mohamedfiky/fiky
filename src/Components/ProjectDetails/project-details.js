import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



function ProjectDetails() {

  const {projectParam} = useParams();

  return (
    <h1>project-details {projectParam}</h1>
  )
}

export default ProjectDetails ;