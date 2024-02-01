import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoImage from '../assets/GalaxyVinylIcon800x800.png';

function Header() {
  return (
    <header className="header bg-purple-400 py-4 text-center">
      <div className="flex items-center justify-center">
        <div className="logo">
          <img src={LogoImage} alt="Logo" className="w-12 h-12" />
        </div>
        <h1 className="header-title text-white text-3xl font-bold">Dana R Fulmer</h1>
      </div>
    </header>
  );
}

export default Header;
