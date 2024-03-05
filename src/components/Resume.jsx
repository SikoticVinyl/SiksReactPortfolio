import React from 'react';
import PanelsBlank from '../assets/Panels_Blank.png'

function Resume() {
  const proficiencies = [
    "HTML/CSS",
    "JavaScript (ES6+)",
    "React.js",
    "Node.js",
    "Discord.js",
    "Express.js",
    "MongoDB",
    "SQL (MySQL/noSQL)",
    "Git and GitHub",
    "Responsive Design",
    "jQuery",
    "Tailwind CSS",
    "Bootstrap",
    "APIs",
    "GraphQL",
    "Apollo Client/Server",
    "RESTful APIs",
    "JWT Authentication",
    "Deployment (Heroku, Netlify, Render, GitHub Pages)",
  ];

  return (
    <section className="flex flex-col items-center py-8 px-4">
    <div className="w-full max-w-2xl flex flex-col items-center space-y-4">
      <div className="w-full flex flex-col justify-center items-center relative mb-8">
        <img src={PanelsBlank} alt="Background" className="w-1/2 h-auto object-cover" />
        <h2 className="text-dark-purple text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center absolute">Resume</h2>
      </div>
      <div className="bg-dark-purple bg-opacity-40 p-4 rounded-lg w-full text-center space-y-6">
        <p className="text-light-pink text-sm sm:text-base md:text-lg lg:text-xl">You can download my full resume below.</p>
        <div className="flex justify-center">
          <a href="/DanaFulmerTechResume.pdf" download="DanaFulmerTechResume.pdf" className="relative inline-block">
            <img src={PanelsBlank} alt="Download Resume" className="w-3/5 md:w-2/5 lg:w-4/5 h-auto object-cover mx-auto" />
            <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold py-2 px-4">
              Download Resume
            </span>
          </a>
        </div>
        <div>
          <div className="relative">
            <h3 className="text-darkgrey text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center shadow-glow">Proficiencies</h3>
            <div className="absolute top-0 -inset-1 rounded-lg bg-light-pink bg-opacity-20 blur"></div>
          </div>
          <ul className="list-none space-y-2 pl-0 text-left md:text-center">
            {proficiencies.map((skill, index) => (
              <li key={index} className="text-light-pink text-md sm:text-lg md:text-xl lg:text-2xl">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
};

export default Resume;