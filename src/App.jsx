import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import './index.css';

// import Header from './components/Header';
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

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      <Navigation />
      <div className="pt-16 pb-16">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio/:category" element={<PortfolioPage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          {/* Future Routes
          <Route path="/portfolio/personal" element={<PersonalProjects />} />
          <Route path="/portfolio/school" element={<SchoolProjects />} /> */}
        </Routes>
      </div>
      {location.pathname !== '/' && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;