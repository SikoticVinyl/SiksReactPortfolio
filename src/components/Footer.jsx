import React from 'react';
import linkedinIcon from '../assets/Linkedin.png';
import githubIcon from '../assets/Github.png';
import venmoIcon from '../assets/Venmo.png';

function Footer() {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-center items-center">
        <a href="https://www.linkedin.com/in/danafulmerdev" className="mx-2">
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className="w-8 h-8 text-white hover:text-blue-500"
          />
        </a>
        <a href="https://github.com/SikoticVinyl" className="mx-2">
          <img
            src={githubIcon}
            alt="GitHub"
            className="w-8 h-8 text-white hover:text-blue-500"
          />
        </a>
        <a href="https://venmo.com/u/DanaFulmer" className="mx-2">
          <img
            src={venmoIcon}
            alt="Venmo"
            className="w-8 h-8 text-white hover:text-blue-500"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
