import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav>
      <ul className="nav-links flex flex-wrap md:flex-row justify-center md:justify-start">
        <li className="mb-2 md:mb-0">
          <NavLink
            to="/"
            className={`${
              location.pathname === '/'
                ? 'font-bold text-xl md:text-lg text-blue-500'
                : 'text-lg md:text-base text-gray-500'
            }`}
          >
            About Me
          </NavLink>
        </li>
        <li className="mb-2 md:mb-0">
          <NavLink
            to="/resume"
            className={`${
              location.pathname === '/resume'
                ? 'font-bold text-xl md:text-lg text-blue-500'
                : 'text-lg md:text-base text-gray-500'
            }`}
          >
            Resume
          </NavLink>
        </li>
        <li className="mb-2 md:mb-0 relative group">
          <button onClick={toggleDropdown} className="text-lg md:text-base text-gray-500">
            Projects
          </button>
          {isDropdownOpen && (
            <ul className="dropdown absolute mt-2 md:mt-0 md:absolute hidden md:flex flex-col space-y-1 bg-white border border-gray-200">
              <li>
                <NavLink
                  to="/projects/personal"
                  className={`${
                    location.pathname === '/projects/personal'
                      ? 'font-bold text-xl md:text-lg text-blue-500'
                      : 'text-lg md:text-base text-gray-500'
                  }`}
                >
                  Personal Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects/school"
                  className={`${
                    location.pathname === '/projects/school'
                      ? 'font-bold text-xl md:text-lg text-blue-500'
                      : 'text-lg md:text-base text-gray-500'
                  }`}
                >
                  School Projects
                </NavLink>
              </li>
              {/*Space for Freelance Porjects Logic in future */}
            </ul>
          )}
        </li>
        <li className="mb-2 md:mb-0">
          <NavLink
            to="/contact"
            className={`${
              location.pathname === '/contact'
                ? 'font-bold text-xl md:text-lg text-blue-500'
                : 'text-lg md:text-base text-gray-500'
            }`}
          >
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;