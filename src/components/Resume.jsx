import React from 'react';
import { Download, Code, Brain } from 'lucide-react';

function Resume() {
  const webDevelopmentSkills = [
    "HTML/CSS", "JavaScript (ES6+)", "React.js", "Node.js", "Express.js",
    "MongoDB", "SQL (MySQL/PostgreSQL)", "Git and GitHub", "Responsive Design",
    "Tailwind CSS", "Bootstrap", "RESTful APIs", "GraphQL", "Apollo Client/Server",
    "JWT Authentication", "Deployment (Heroku, Netlify, Render, GitHub Pages)",
  ];

  const aiSkills = [
    "Python programming with AI focus", "TensorFlow", "PyTorch", "Pandas",
    "NumPy", "Scikit-learn", "Data processing and manipulation",
    "Machine learning (supervised and unsupervised)", "Neural networks and deep learning",
    "Natural Language Processing (NLP)", "Transformers", "Data visualization",
    "API interaction for AI services", "AI ethics and emerging technologies",
  ];

  return (
    <div className="py-8 sm:py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Resume & Skills</h1>
        <p className="text-lg text-purple-300 mb-6">Full-Stack Web Developer & AI Engineer</p>

        {/* Download Resume Button */}
        <a
          href="/DanaFulmerTechResume.pdf"
          download="DanaFulmerTechResume.pdf"
          className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out shadow-lg hover:shadow-xl"
        >
          <Download className="w-6 h-6 mr-2" />
          Download Full Resume
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Web Development Skills */}
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 sm:p-8 h-full">
          <div className="flex items-center mb-6">
            <Code className="w-8 h-8 text-purple-400 mr-4" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">Web Development Skills</h2>
          </div>
          <ul className="space-y-2 text-purple-200">
            {webDevelopmentSkills.map((skill, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* AI Skills */}
        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 sm:p-8 h-full">
          <div className="flex items-center mb-6">
            <Brain className="w-8 h-8 text-purple-400 mr-4" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">AI & Machine Learning Skills</h2>
          </div>
          <ul className="space-y-2 text-purple-200">
            {aiSkills.map((skill, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;