import React from 'react';

const Project = ({ title, description, image, deployedUrl, repoUrl, grade, feedback, technologies }) => {
  return (
    <div className="max-w-sm mx-auto my-5 bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-lg">
      <div className="relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-center">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <div className="flex justify-center space-x-4">
              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                >
                  Repository
                </a>
              )}
              {deployedUrl && (
                <a
                  href={deployedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                >
                  Deployed
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-white">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        {technologies && (
          <div className="mb-4">
            <h4 className="font-semibold text-purple-300 mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span key={index} className="bg-purple-600 text-white text-xs px-2 py-1 rounded">{tech}</span>
              ))}
            </div>
          </div>
        )}
        {grade && (
          <div className="mb-2">
            <span className="font-semibold text-purple-300">Grade:</span> <span className="text-white">{grade}</span>
          </div>
        )}
        {feedback && (
          <div>
            <h4 className="font-semibold text-purple-300 mb-2">Feedback:</h4>
            <p className="text-gray-300 text-sm italic">{feedback}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;