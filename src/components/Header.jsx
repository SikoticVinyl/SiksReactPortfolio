import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoImage from '../assets/GalaxyVinylIcon800x800.png';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={LogoImage} alt="Logo" />
      </div>
      <h1 className="header-title">Dana Fulmer</h1>
      <nav>
        <ul className="nav-links">
          {/* Using NavLink for active styling */}
          <li><NavLink to="/about">About Me</NavLink></li>
          {/*<li><NavLink to="/resume">Resume</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/contact">Contact Me</NavLink></li>*/}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
