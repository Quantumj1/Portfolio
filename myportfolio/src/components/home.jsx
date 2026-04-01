import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../images/photo.jpg';
import bgImage from '../assets/Joe.png';

const Home = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed relative flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50 z-10" aria-hidden="true" />

      <div className="relative z-20 max-w-4xl text-center px-5">
        <img src={photo} alt="Profile" className="h-48 w-48 mx-auto rounded-full shadow-2xl mb-8" />
        <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-2xl">Patrick Joseph Osafo - Parry</h1>
        <p className="text-2xl text-gray-100 mb-8 leading-relaxed drop-shadow-lg">
          Passionate frontend engineer crafting amazing web experiences with JavaScript, React, and Tailwind CSS.
        </p>
        <p className="text-xl text-gray-200 mb-12 leading-relaxed drop-shadow-lg max-w-2xl mx-auto">
          Specializing in responsive, user-centric interfaces with strong UI/UX focus.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#about" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl">Learn More</a>
          <Link to="/projects" className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl">View Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
