import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

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
          <li 
            className="relative group"
            onMouseEnter={() => setIsPortfolioOpen(true)}
            onMouseLeave={() => setIsPortfolioOpen(false)}
          >
            <button 
              className="text-lg text-white hover:text-purple-400 transition-colors duration-200"
            >
              Portfolio
            </button>
            <div 
              className={`
                absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5
                transition-opacity duration-150 ease-in-out
                ${isPortfolioOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
              `}
            >
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <NavLink 
                  to="/portfolio/bootcamp" 
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-700" 
                  role="menuitem"
                  onClick={() => setIsPortfolioOpen(false)}
                >
                  Bootcamp Projects
                </NavLink>
                <NavLink 
                  to="/portfolio/personal" 
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-700" 
                  role="menuitem"
                  onClick={() => setIsPortfolioOpen(false)}
                >
                  Personal Projects
                </NavLink>
              </div>
            </div>
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