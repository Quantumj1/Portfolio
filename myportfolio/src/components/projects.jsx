import React from 'react';
import bg from '../assets/bg.jpg';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'This very site! Modern personal portfolio built with React, Tailwind CSS, and Vite. Includes smooth animations and responsive navigation.',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'React Router'],
      github: 'https://github.com/Quantumj1/Portfolio.git',
      demo: 'https://osafobuild.vercel.app/'
    },
    {
      title: 'Currency Converter',
      description: 'Real-time currency converter app with live exchange rates and historical data charts.',
      technologies: ['React', 'Node.js', 'Express', 'Tailwind CSS'],
      github: 'https://github.com/Quantumj1/Currency_Converter-capstone-.git',
      demo: 'https://currency-converter-demo.vercel.app'
    },
  ];

  return (
    <div className="bg-cover bg-center bg-fixed min-h-screen w-full overflow-hidden relative z-0" style={{ backgroundImage: `url(${bg})` }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 mt-8 sm:mt-12 text-center bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 
        bg-clip-text text-transparent drop-shadow-2xl leading-tight">My Projects</h2>
        <div className='flex justify-center sm:justify-between mb-6 sm:mb-8'>
          <Link 
              to="/home" 
              className="bg-white/20 backdrop-blur-md border-2 border-white/60 hover:bg-white/40 hover:border-white text-white font-bold
              py-3 sm:py-4 px-6 sm:px-10 rounded-full text-sm sm:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:translate-y-1"
            >
              Home →
            </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition duration-300 flex flex-col 
            justify-between bg-gradient-to-t from-indigo-300 to-pink-600">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{project.description}</p>
              <div className="mb-3 sm:mb-4">
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
