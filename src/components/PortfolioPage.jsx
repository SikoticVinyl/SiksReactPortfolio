import React from 'react';
import Project from './Project';
import projectData from '../data/projects.json';

const PortfolioPage = () => {
  return (
    <section className="portfolio">
      <h2 className="text-3xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projectData.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioPage;
