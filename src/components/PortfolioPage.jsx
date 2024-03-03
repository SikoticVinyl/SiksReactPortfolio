import React, { useState } from 'react';
import Project from './Project';
import projectData from '../data/projects.json';

const PortfolioPage = () => {
  const [visibleType, setVisibleType] = useState('');

  const toggleVisibility = (type) => {
    setVisibleType(visibleType === type ? '' : type);
  };

  return (
    <section className="portfolio">
      <h2 className="text-3xl font-bold mb-4">My Projects</h2>
      <div className="dropdowns">
        {/* Dropdown Titles */}
        <div className="dropdown" onClick={() => toggleVisibility('personal')}>Personal Projects</div>
        <div className="dropdown" onClick={() => toggleVisibility('school')}>School Projects</div>
        <div className="dropdown" onClick={() => toggleVisibility('freelance')}>Freelance Projects</div>
      </div>
      
      {/* Projects Grid */}
      <div className="projects-grid">
        {projectData.filter(project => visibleType === '' || project.type === visibleType).map(project => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioPage;
