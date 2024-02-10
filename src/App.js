import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar/sidebar.js';
import MenuIcons from './Components/MenuIcons/menu-icons.js'; 
import HomePage from "./Pages/Home-page/home.js";
import ProjectsPage from "./Pages/Projects-page/projects-page.js";
import ResumePage from "./Pages/Resume-page/resume.js";
import ContactsPage from "./Pages/Contacts-page/contacts-page.js";
import ProjectDetailsPage from "./Pages/Project-Details-page/project-details-page.js";
import Footer from './Components/Footer/footer.js';
// import Error404 from './Pages/Error404-page/error404.js';


function App() {
  return (
       <BrowserRouter>

          <Sidebar />
          <MenuIcons />
    
          <div className="main">

            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/project-details/:projectParam" element={<ProjectDetailsPage />} />
              {/* <Route element={<Error404 />} /> */}
            </Routes>

            <Footer />
            
          </div>

    
       </BrowserRouter>
  );
}

export default App;
