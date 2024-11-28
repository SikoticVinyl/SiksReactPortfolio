import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <ul className="flex items-center justify-center space-x-8 py-4">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-lg transition-colors duration-200 hover:text-purple-400 ${
                  isActive ? 'text-purple-400 font-bold' : 'text-white'
                }`
              }
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => 
                `text-lg transition-colors duration-200 hover:text-purple-400 ${
                  isActive ? 'text-purple-400 font-bold' : 'text-white'
                }`
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `text-lg transition-colors duration-200 hover:text-purple-400 ${
                  isActive ? 'text-purple-400 font-bold' : 'text-white'
                }`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/resume" 
              className={({ isActive }) => 
                `text-lg transition-colors duration-200 hover:text-purple-400 ${
                  isActive ? 'text-purple-400 font-bold' : 'text-white'
                }`
              }
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;