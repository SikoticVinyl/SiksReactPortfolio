import React from 'react';
import LogoImage from '../assets/GalaxyVinylIcon800x800.png';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="bg-purple-400 flex items-center justify-center py-4 sm:py-6 md:py-8 w-full px-4 relative">
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 h-full flex items-center md:inline-flex hidden">
        <img src={LogoImage} alt="Logo" className="h-3/4 w-auto object-contain" />
      </div>
      <div className="flex flex-col items-center text-center z-10">
        <h1 className="text-dark-purple text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Dana R Fulmer</h1>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
