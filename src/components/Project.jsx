import React from 'react';

const Project = ({ title, description, image, deployedUrl, repoUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-4">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <a href={deployedUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Live Demo
          </a>
          <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
