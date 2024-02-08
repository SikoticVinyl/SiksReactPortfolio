import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import AboutMe from './components/AboutMe'; 
import PortfolioPage from './components/PortfolioPage'; 
import Resume from './components/Resume'; 
import Contact from './components/Contact';

// Future Setup
//import PersonalProjects from './components/PersonalProjects';
//import SchoolProjects from './components/SchoolProjects';
// import FreelanceProjects from './components/FreelanceProjects'; 

function App() {
  return (
    <BrowserRouter>
      <Header /> {Header}
      <Navigation /> {Navigation}
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        {/* Future Routes
        <Route path="/portfolio/personal" element={<PersonalProjects />} />
        <Route path="/portfolio/school" element={<SchoolProjects />} /> 
        */}
      </Routes>
      <Footer /> {Footer}
    </BrowserRouter>
  );
}

export default App;


