import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Project from './Project';
import projectData from '../data/projects.json';
import { ChevronRight, FolderIcon, Code, Brain, Users, User } from 'lucide-react';

const PortfolioPage = () => {
  const { category } = useParams();
  const [openCategories, setOpenCategories] = useState({});

  const filteredProjects = useMemo(() => {
    if (!Array.isArray(projectData)) return [];
    
    return projectData.filter(project => {
      if (category === 'personal') return project.type === 'personal';
      if (category === 'bootcamp') return project.type === 'school';
      return false;
    });
  }, [category]);

  const categories = useMemo(() => {
    if (!Array.isArray(filteredProjects)) return [];
    return [...new Set(filteredProjects.map(project => project.category))].filter(Boolean);
  }, [filteredProjects]);

  const toggleCategory = (categoryName) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  const getCategoryIcon = (categoryName) => {
    switch (categoryName) {
      case 'Full-Stack Web Development':
        return <Code className="w-5 h-5" />;
      case 'AI and Machine Learning':
        return <Brain className="w-5 h-5" />;
      default:
        return <FolderIcon className="w-5 h-5" />;
    }
  };

  const getProjectsByType = (projectCategory, isGroup) => {
    if (!Array.isArray(filteredProjects)) return [];
    return filteredProjects.filter(project => 
      project.category === projectCategory && 
      Boolean(project.isGroupProject) === isGroup
    );
  };

  if (!Array.isArray(filteredProjects) || filteredProjects.length === 0) {
    return (
      <div className="py-8 sm:py-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {category.charAt(0).toUpperCase() + category.slice(1)} Projects
        </h1>
        <p className="text-gray-300">No projects found in this category.</p>
      </div>
    );
  }

  return (
    <div className="py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
        {category.charAt(0).toUpperCase() + category.slice(1)} Projects
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Enhanced Category sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg overflow-hidden">
            <div className="bg-purple-900 bg-opacity-50 p-4 border-b border-purple-700">
              <h2 className="text-xl sm:text-2xl font-semibold text-white">Categories</h2>
            </div>
            <div className="p-2">
              {categories.map((projectCategory) => (
                <button
                  key={projectCategory}
                  onClick={() => toggleCategory(projectCategory)}
                  className={`
                    w-full text-left flex items-center p-3 rounded-lg
                    transition-all duration-200 ease-in-out
                    ${openCategories[projectCategory] 
                      ? 'bg-purple-900 bg-opacity-50 shadow-lg shadow-purple-900/50' 
                      : 'hover:bg-gray-700'
                    }
                    group
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`
                      p-2 rounded-lg
                      ${openCategories[projectCategory]
                        ? 'bg-purple-800 text-purple-200'
                        : 'bg-gray-700 text-gray-300 group-hover:bg-gray-600'
                      }
                      transition-colors duration-200
                    `}>
                      {getCategoryIcon(projectCategory)}
                    </div>
                    <div className="flex-1">
                      <span className={`
                        text-base font-medium
                        ${openCategories[projectCategory]
                          ? 'text-purple-200'
                          : 'text-gray-200 group-hover:text-purple-300'
                        }
                        transition-colors duration-200
                      `}>
                        {projectCategory}
                      </span>
                    </div>
                    <div className={`
                      transition-transform duration-200
                      ${openCategories[projectCategory] ? 'rotate-90' : ''}
                    `}>
                      <ChevronRight className={`
                        w-5 h-5
                        ${openCategories[projectCategory]
                          ? 'text-purple-200'
                          : 'text-gray-400 group-hover:text-purple-300'
                        }
                      `} />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects grid */}
        <div className="lg:col-span-3">
          {categories.map((projectCategory) => {
            const groupProjects = getProjectsByType(projectCategory, true);
            const individualProjects = getProjectsByType(projectCategory, false);

            return (
              <div key={projectCategory} className={`mb-12 ${openCategories[projectCategory] ? '' : 'hidden'}`}>
                <h2 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-6">{projectCategory}</h2>
                
                {/* Group Projects */}
                {groupProjects.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Group Projects
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {groupProjects.map(project => (
                        <Project key={project.id} {...project} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Individual Projects */}
                {individualProjects.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <User className="w-5 h-5 mr-2" />
                      Individual Projects
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {individualProjects.map(project => (
                        <Project key={project.id} {...project} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;