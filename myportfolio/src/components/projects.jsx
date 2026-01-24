import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A responsive web application built with React and Tailwind CSS.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Project 2',
      description: 'An interactive dashboard for data visualization.',
      technologies: ['React', 'Chart.js', 'CSS'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Project 3',
      description: 'A mobile-first e-commerce website.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4">
                <a href={project.github} className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">GitHub</a>
                <a href={project.demo} className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
