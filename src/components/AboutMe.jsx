import React from 'react';
import Dana from '../assets/Dana.jpg';
import Github from '../assets/Github.png';
import Linkedin from '../assets/Linkedin.png';

const AboutMe = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/SikoticVinyl',
      hoverText: 'Visit my GitHub'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/danafulmerdev',
      hoverText: 'Connect on LinkedIn'
    }
  ];

  return (
    <div className="py-8 sm:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {/* Profile section */}
        <div className="md:col-span-1 flex flex-col items-center mb-8 md:mb-0">
          <div className="relative w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden mb-4 border-4 border-purple-500 shadow-lg shadow-purple-500/50">
            <img
              src={Dana}
              alt="Dana Fulmer"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-center text-white">Dana Fulmer</h1>
          <p className="text-lg sm:text-xl text-purple-300 mb-4 text-center">AI Software Engineer</p>
          
          {/* Enhanced Social Links */}
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-gray-800 hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
                title={link.hoverText}
              >
                <img 
                  src={link.icon} 
                  alt={link.name} 
                  className="w-6 h-6 group-hover:brightness-125"
                />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-purple-300 whitespace-nowrap">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* About Me section */}
        <div className="md:col-span-1 lg:col-span-2 bg-gray-800 bg-opacity-50 rounded-lg p-4 sm:p-6 backdrop-blur-sm">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">About Me</h2>
          <div className="space-y-4 text-sm sm:text-base text-gray-300">
            <p>
              Welcome to the digital playground of Vinyl Development, where code meets artificial intelligence, and every day brings new opportunities for innovation in the stunning backdrop of St. George, Utah. Here, amidst the red rocks and desert skies, I've evolved from a web developer into an AI Software Engineer, bridging the gap between traditional development and the exciting frontiers of artificial intelligence.
            </p>
            <p>
              My journey into the tech universe has been an ever-expanding adventure. From that first PC build in 2019 to becoming a full-stack web developer through bootcamp training, each step has been driven by curiosity and a desire to push boundaries. Now, armed with comprehensive AI and machine learning certification, I've added powerful new tools to my developer toolkit – from Python-based machine learning models to natural language processing and deep learning techniques.
            </p>
            <p>
              Picture this: a developer who speaks both the language of web applications and artificial intelligence, finding harmony in the intersection of frontend finesse and AI innovation. I've mastered the art of creating Python scripts for data manipulation, building neural networks for predictions, and implementing NLP transformers, all while maintaining my passion for crafting engaging user experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;