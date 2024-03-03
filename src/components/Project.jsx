import React from 'react';

const Project = ({ title, description, image, deployedUrl, repoUrl }) => {
  return (
    <div className="max-w-sm mx-auto my-5">
      <div className="relative group">
        {/* Image container */}
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
          <img
            src={image}
            alt={title}
            className="object-cover object-center group-hover:opacity-75"
          />
        </div>

        {/* Overlay content */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-600 via-purple-500 opacity-60 rounded-lg flex flex-col justify-between p-4">
          {/* Project title */}
          <h3 className="text-xl md:text-3xl font-bold text-white">{title}</h3>
          
          {/* Buttons */}
          <div className="flex justify-center space-x-4">
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-purple-700 hover:bg-purple-800 rounded py-2 px-4 text-sm"
              >
                Repository
              </a>
            )}
            {deployedUrl && (
              <a
                href={deployedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-purple-700 hover:bg-purple-800 rounded py-2 px-4 text-sm"
              >
                Deployed
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Transparent card for Description */}
      <div className="mt-4 bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg p-4">
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Project;