import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/react.svg';

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl font-bold text-white mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl text-gray-100 mb-8">I'm a passionate frontend engineer ready to create amazing web experiences</p>
        <div className="space-x-4">
          <a href="#about" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300">Learn More</a>
          <Link to="/projects" className="border border-indigo-600 text-indigo-100 px-6 py-3 rounded-lg hover:bg-indigo-50 hover:text-indigo-800 transition duration-300">View Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
