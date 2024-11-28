import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

function Navigation() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsPortfolioOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const togglePortfolio = () => {
    setIsPortfolioOpen(!isPortfolioOpen);
  };

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
          <li ref={dropdownRef} className="relative">
            <button 
              onClick={togglePortfolio}
              className="text-lg text-white hover:text-purple-400 transition-colors duration-200 flex items-center"
            >
              Portfolio
              <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isPortfolioOpen ? 'rotate-180' : ''}`} />
            </button>
            {isPortfolioOpen && (
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 py-1">
                <NavLink 
                  to="/portfolio/bootcamp" 
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-700" 
                  onClick={() => setIsPortfolioOpen(false)}
                >
                  Bootcamp Projects
                </NavLink>
                <NavLink 
                  to="/portfolio/personal" 
                  className="block px-4 py-2 text-sm text-white hover:bg-gray-700" 
                  onClick={() => setIsPortfolioOpen(false)}
                >
                  Personal Projects
                </NavLink>
              </div>
            )}
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