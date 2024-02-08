import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import AboutMe from './components/AboutMe'; 
import PortfolioPage from './components/PortfolioPage'; 
import Contact from './components/Contact';
//import PersonalProjects from './components/PersonalProjects';
//import SchoolProjects from './components/SchoolProjects';
// import FreelanceProjects from './components/FreelanceProjects'; 
//import Resume from './components/Resume'; 

function App() {
  return (
    <BrowserRouter>
      <Header /> {Header}
      <Navigation /> {Navigation}
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<Contact />} />
        {/*
        <Route path="/portfolio/personal" element={<PersonalProjects />} />
        <Route path="/portfolio/school" element={<SchoolProjects />} />
        <Route path="/resume" element={<Resume />} /> 
        {/* Space for more routes as needed 
        */}
      </Routes>
      <Footer /> {Footer}
    </BrowserRouter>
  );
}

export default App;


