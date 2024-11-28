import React from 'react';
import { useParams } from 'react-router-dom';
import Project from './Project';
import projectData from '../data/projects.json';
import { Sparkles } from './Sparkles';
import { Meteors } from './Meteors';

const PortfolioPage = () => {
  const { category } = useParams();

  const filteredProjects = projectData.filter(project => {
    if (category === 'personal') return project.type === 'personal';
    if (category === 'bootcamp') return project.type === 'school';
    // if (category === 'freelance') return project.type === 'freelance';
    return false;
  });

  const groupProjects = filteredProjects.filter(project => project.isGroupProject);
  const individualProjects = filteredProjects.filter(project => !project.isGroupProject);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      <Sparkles particleColor="#FFFFFF" particleCount={200} minSize={1} maxSize={3} />
      <Meteors meteorColor="#8B5CF6" meteorCount={15} />

      <div className="relative z-10 flex flex-col items-center mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">{category.charAt(0).toUpperCase() + category.slice(1)} Projects</h1>

        {category === 'bootcamp' && (
          <>
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">Group Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {groupProjects.map(project => (
                <Project key={project.id} {...project} />
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-purple-300 mb-4">Individual Projects</h2>
          </>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {individualProjects.map(project => (
            <Project key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;