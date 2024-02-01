import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';

//Components
import Navigation from './components/Navigation'; 
import AboutMe from './components/AboutMe'; 
import Projects from './components/Projects'; 
import PersonalProjects from './components/PersonalProjects';
import SchoolProjects from './components/SchoolProjects';
// import FreelanceProjects from './components/FreelanceProjects'; 
import Contact from './components/Contact';
import Resume from './components/Resume'; 
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navigation /> {/*Navigation component */}
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/portfolio/personal" element={<PersonalProjects />} />
        <Route path="/portfolio/school" element={<SchoolProjects />} />
        {/*Route for Freelance - Uncomment when ready to use: <Route path="/portfolio/freelance" element={<FreelanceProjects />} />*/}
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} /> 
        {/* Space for more routes as needed */}
      </Routes>
      <Footer /> {/*Footer component */}
    </BrowserRouter>
  );
}

export default App;


