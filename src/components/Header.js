import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Make sure to create this CSS file

function Header() {
  return (
    <header className="header">
      <div className="logo">
        {/* Insert your logo here, e.g., an <img> tag or <div> with background-image */}
      </div>
      <h1 className="header-title">Your Name</h1>
      <nav>
        <ul className="nav-links">
          {/* Using NavLink for active styling */}
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/about">About Me</NavLink></li>
          <li><NavLink to="/contact">Contact Me</NavLink></li>
          <li><NavLink to="/resume">Resume</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
