import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul className="nav-links flex flex-wrap justify-center">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'font-bold text-blue-500' : 'text-gray-500'}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'font-bold text-blue-500' : 'text-gray-500'}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'font-bold text-blue-500' : 'text-gray-500'}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" className={({ isActive }) => isActive ? 'font-bold text-blue-500' : 'text-gray-500'}>
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

