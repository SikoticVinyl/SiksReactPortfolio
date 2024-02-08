// PortfolioPage.jsx
import React from 'react';
import Project from './Project';
import projectData from '../data/projects.json';
const PortfolioPage = () => {
  return (
    <section className="portfolio">
      <h2>My Projects</h2>
      <div className="project-list">
        {projectData.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioPage;
