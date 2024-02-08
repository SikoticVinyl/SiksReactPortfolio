import React from 'react';

function Resume() {
  const proficiencies = [
    "HTML/CSS",
    "JavaScript (ES6+)",
    "React",
    "Node.js",
    "Discord.js",
    "Express",
    "MongoDB",
    "SQL (MySQL/noSQL)",
    "Git and GitHub",
    "Responsive Design",
  ];

  return (
    <section className="flex flex-col justify-between items-center min-h-screen py-8 px-4">
      <div className="w-full max-w-2xl flex flex-col items-center space-y-4">
        <div className="w-full">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-center">Resume</h2>
        </div>
        <div className="text-center">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4">You can download my full resume below.</p>
          <a href="/DanaFulmerTechResume.pdf" download="DanaFulmerTechResume.pdf" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer mb-8">
            Download Resume
          </a>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4">Here's a quick overview of my technical skills:</p>
        </div>
        <div className="mt-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Proficiencies</h3>
          <ul className="list-disc pl-8 text-left">
            {proficiencies.map((skill, index) => (
              <li key={index} className="text-md sm:text-lg md:text-xl lg:text-2xl mb-2">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;