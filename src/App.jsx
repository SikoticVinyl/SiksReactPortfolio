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
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Header />
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            {/* Future Routes
              <Route path="/portfolio/personal" element={<PersonalProjects />} />
              <Route path="/portfolio/school" element={<SchoolProjects />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;