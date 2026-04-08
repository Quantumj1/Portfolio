import React from 'react';
import bg from '../assets/bg.jpg';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Store',
      description: 'Full-stack e-commerce platform with shopping cart, user authentication, and payment integration. Features responsive design and admin dashboard for product management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Stripe'],
      github: 'https://github.com/yourusername/ecommerce-store',
      demo: 'https://ecommerce-store.vercel.app'
    },
    {
      title: 'Data Dashboard',
      description: 'Interactive analytics dashboard with real-time charts and data filtering. Built with modern React hooks and responsive grid layout.',
      technologies: ['React', 'Chart.js', 'Tailwind CSS', 'Zustand'],
      github: 'https://github.com/yourusername/data-dashboard',
      demo: 'https://data-dashboard.netlify.app'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task tracker with drag-and-drop, categories, and real-time updates via WebSockets. Mobile-first design.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Socket.io'],
      github: 'https://github.com/yourusername/task-manager',
      demo: 'https://task-manager.vercel.app'
    },
    {
      title: 'Portfolio Website',
      description: 'This very site! Modern personal portfolio built with React, Tailwind CSS, and Vite. Includes smooth animations and responsive navigation.',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'React Router'],
      github: 'https://github.com/cleme/Portfolio',
      demo: 'http://localhost:5173'
    },
    {
      title: 'Chat Application',
      description: 'Real-time messaging app with user rooms, typing indicators, and file sharing. Secure authentication and end-to-end encryption simulation.',
      technologies: ['React', 'Node.js', 'Socket.io', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/chat-app',
      demo: 'https://chat-app-demo.vercel.app'
    }
  ];

  return (
    <div className="bg-cover bg-center bg-fixed min-h-screen w-screen overflow-hidden relative z-0" style={{ backgroundImage: `url(${bg})` }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 mt-12 text-center bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 
        bg-clip-text text-transparent drop-shadow-2xl leading-tight">My Projects</h2>
        <div className='flex justify-between mb-8'>
          <Link to="/home" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium border rounded px-2 py-1">Back</Link>
          <Link to="/skills" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium border rounded px-2 py-1">Skills</Link>
        </div>
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
