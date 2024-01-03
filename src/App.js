import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar/sidebar.js';
import MenuIcons from './Components/MenuIcons/menu-icons.js'; 
import HomePage from "./Pages/Home-page/home.js";
import ProjectsPage from "./Pages/Projects-page/projects-page.js";
import ResumePage from "./Pages/Resume-page/resume.js";
import ContactPage from "./Pages/Contact-page/contact.js";
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
              <Route path="/contacts" element={<ContactPage />} />
              {/* <Route element={<Error404 />} /> */}
            </Routes>

            <Footer />
            
          </div>

    
       </BrowserRouter>
  );
}

export default App;
