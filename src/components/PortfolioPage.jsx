import React, { useState } from 'react';
import Project from './Project';
import projectData from '../data/projects.json';

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const toggleCategory = (category) => {
    setSelectedCategory(selectedCategory === category ? '' : category);
  };

  return (
    // Added mb-16 to the outer div for margin bottom. Adjust the value as needed (e.g., mb-10, mb-20) to get the desired space
    <div className="flex flex-col items-center mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      {/* Category toggles */}
      <div className="flex flex-wrap justify-center gap-4 my-4">
        <div
          onClick={() => toggleCategory('Personal')}
          className="cursor-pointer p-2 rounded bg-purple-600 text-white"
        >
          {selectedCategory === 'Personal' ? '▼ Personal Passion Projects' : '▶ Personal Passion Projects'}
        </div>
        <div
          onClick={() => toggleCategory('Bootcamp')}
          className="cursor-pointer p-2 rounded bg-purple-600 text-white"
        >
          {selectedCategory === 'Bootcamp' ? '▼ Boot Camp Projects' : '▶ Boot Camp Projects'}
        </div>
        <div
          onClick={() => toggleCategory('Freelance')}
          className="cursor-pointer p-2 rounded bg-purple-600 text-white"
        >
          {selectedCategory === 'Freelance' ? '▼ Freelance Work' : '▶ Freelance Work'}
        </div>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        {projectData.filter(project => {
          if (selectedCategory === 'Personal') return project.type === 'personal';
          if (selectedCategory === 'Bootcamp') return project.type === 'school';
          if (selectedCategory === 'Freelance') return project.type === 'freelance';
          return false;
        }).map(project => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;