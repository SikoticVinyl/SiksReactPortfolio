import React from 'react';
import linkedinIcon from '../assets/Linkedin.png';
import githubIcon from '../assets/Github.png';
import venmoIcon from '../assets/Venmo.png';

function Footer() {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-center items-center">
        <a href="https://www.linkedin.com/in/danafulmerdev">
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            className="w-6 h-6 text-white hover:text-blue-500 mx-2"
          />
        </a>
        <a href="https://github.com/SikoticVinyl">
          <img
            src={githubIcon}
            alt="GitHub"
            className="w-6 h-6 text-white hover:text-blue-500 mx-2"
          />
        </a>
        <a href="https://venmo.com/u/DanaFulmer">
          <img
            src={venmoIcon}
            alt="Venmo"
            className="w-6 h-6 text-white hover:text-blue-500 mx-2"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
