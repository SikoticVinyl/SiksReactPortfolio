import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav>
      <ul className="nav-links">
        <li><NavLink to="/">About Me</NavLink></li>
        <li><NavLink to="/resume">Resume</NavLink></li>
        <li>
          <button onClick={toggleDropdown}>Projects</button>
          {isDropdownOpen && (
            <ul className="dropdown">
              <li><NavLink to="/projects/personal">Personal Projects</NavLink></li>
              <li><NavLink to="/projects/school">School Projects</NavLink></li>
              {/*<li><NavLink to="/projects/freelance">Freelance Projects</NavLink></li>*/}
            </ul>
          )}
        </li>
        <li><NavLink to="/contact">Contact Me</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
