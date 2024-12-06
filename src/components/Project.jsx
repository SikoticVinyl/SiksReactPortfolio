import React, { useState, useRef, useLayoutEffect } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';

const Project = ({ title, description, image, deployedUrl, repoUrl, technologies }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const descriptionRef = useRef(null);

  const MIN_CHARS_FOR_OVERFLOW = 200;
  const shouldShowReadMore = description.length > MIN_CHARS_FOR_OVERFLOW && hasOverflow;

  const toggleExpanded = () => {
    setIsExpanded(prev => !prev);
  };

  useLayoutEffect(() => {
    const checkOverflow = () => {
      if (descriptionRef.current) {
        const isOverflowing = descriptionRef.current.scrollHeight > descriptionRef.current.clientHeight;
        setHasOverflow(isOverflowing);
      }
    };

    checkOverflow();

    // Set up ResizeObserver to check for overflow on content changes
    const resizeObserver = new ResizeObserver(checkOverflow);
    if (descriptionRef.current) {
      resizeObserver.observe(descriptionRef.current);
    }

    return () => {
      if (descriptionRef.current) {
        resizeObserver.unobserve(descriptionRef.current);
      }
    };
  }, [description]);

  return (
    <div className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-center p-4">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <div className="flex justify-center space-x-4">
              {deployedUrl && (
                <a
                  href={deployedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded flex items-center text-sm"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </a>
              )}
              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center text-sm"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Repository
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-white">{title}</h3>
        <div className="relative">
          <div
            ref={descriptionRef}
            className={`text-gray-300 text-sm mb-4 overflow-hidden transition-all duration-300 ease-in-out ${
              isExpanded ? 'max-h-[500px]' : 'max-h-24'
            }`}
          >
            <p className="pr-2">{description}</p>
          </div>
          {shouldShowReadMore && (
            <button
              onClick={toggleExpanded}
              className="w-full text-center py-1 text-purple-400 hover:text-purple-300 transition-colors duration-200 flex items-center justify-center gap-1 group"
            >
              <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200" />
              ) : (
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" />
              )}
            </button>
          )}
          {!isExpanded && shouldShowReadMore && (
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-800 to-transparent pointer-events-none" />
          )}
        </div>
        {technologies && (
          <div className="mb-4">
            <h4 className="font-semibold text-purple-300 mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span key={index} className="bg-purple-600 text-white text-xs px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;