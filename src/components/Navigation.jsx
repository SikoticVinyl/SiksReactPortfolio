import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul className="nav-links flex flex-wrap justify-center gap-2 text-lg sm:text-xl md:text-2xl">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? 'text-white font-bold' : 'text-light-pink'
            }
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/portfolio" 
            className={({ isActive }) => 
              isActive ? 'text-white font-bold' : 'text-light-pink'
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive ? 'text-white font-bold' : 'text-light-pink'
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/resume" 
            className={({ isActive }) => 
              isActive ? 'text-white font-bold' : 'text-light-pink'
            }
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;



