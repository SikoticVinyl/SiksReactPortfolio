import React from 'react';
import linkedinIcon from '../assets/Linkedin.png';
import githubIcon from '../assets/Github.png';
import venmoIcon from '../assets/Venmo.png';

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-50 backdrop-blur-sm py-4">
      <div className="container mx-auto flex justify-center items-center space-x-6">
        <a 
          href="https://www.linkedin.com/in/danafulmerdev" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
        >
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className="w-6 h-6"
          />
        </a>
        <a 
          href="https://github.com/SikoticVinyl" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
        >
          <img
            src={githubIcon}
            alt="GitHub"
            className="w-6 h-6"
          />
        </a>
        <a 
          href="https://venmo.com/u/DanaFulmer" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
        >
          <img
            src={venmoIcon}
            alt="Venmo"
            className="w-6 h-6"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;