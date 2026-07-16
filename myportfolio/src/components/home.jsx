import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/bg.jpg';
import profileImage from '../assets/OB.png';

const Home = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen w-screen overflow-hidden relative z-0"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <main className="flex flex-col md:flex-row">
        {/* Left: Profile Image (stacks on small screens) */}
        <section className="flex items-center justify-center p-8 bg-black/30 backdrop-blur-sm md:w-1/2">
          <div className="text-center w-full max-w-md">
            <img
              src={profileImage}
              alt="Profile photo"
              loading="eager"
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/50 mx-auto mb-6 hover:scale-110 transition-transform duration-500 hover:rotate-3"
            />
          </div>
        </section>

        {/* Right: Text and Buttons */}
        <section className="flex flex-col items-center justify-center p-12 lg:p-16 bg-black/40 backdrop-blur-sm sm:rounded-tr-3xl md:w-1/2">
          <div className="text-center max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl leading-tight sm:px-12">
              Welcome to My Portfolio
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-12 text-white/90 drop-shadow-xl leading-relaxed font-light">
              Passionate frontend engineer crafting amazing web experiences with JavaScript, React, Tailwind CSS, and more.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/about"
                className="bg-gradient-to-r from-indigo-500 via-blue-600 to-purple-600 hover:from-indigo-600 hover:via-blue-700 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 active:translate-y-1"
              >
                Learn More →
              </Link>
              <Link
                to="/projects"
                className="bg-white/20 backdrop-blur-md border-2 border-white/60 hover:bg-white/40 hover:border-white text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:translate-y-1"
              >
                View Projects →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

