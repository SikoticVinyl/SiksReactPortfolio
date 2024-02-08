import React from 'react';

function Resume() {
  const proficiencies = [
    "HTML/CSS",
    "JavaScript (ES6+)",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL (MySQL/PostgreSQL)",
    "Git and GitHub",
    "Responsive Design",
  ];

  return (
    <section className="resume py-8 px-4">
      <h2 className="text-3xl font-bold mb-4 text-center sm:text-left">Resume</h2>
      <div className="text-center sm:text-left">
        <p className="mb-4">You can download my full resume below. Here's a quick overview of my technical skills:</p>
        <a href={`${PROPER PATH NEEDED}/DanaFulmerTechResume.pdf`} download="DanaFulmerTechResume.pdf" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer mb-8">
          Download Resume
        </a>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Proficiencies</h3>
        <ul className="list-disc pl-8 text-left">
          {proficiencies.map((skill, index) => (
            <li key={index} className="text-lg mb-2">{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Resume;
