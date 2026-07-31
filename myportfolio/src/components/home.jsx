import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/bg.jpg';
import profileImage from '../assets/OB.png';

const Home = () => {
  const scrollToFooter = () => {
    const footer = document.getElementById('home-footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen w-full overflow-x-hidden relative z-0"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <main className="relative flex flex-col md:flex-row h-[calc(100vh-60px)]">
        {/* Left: Profile Image (fills entire section) */}
        <section className="relative md:w-1/2 h-full overflow-hidden bg-black/30">
          <img
            src={profileImage}
            alt="Profile photo"
            loading="eager"
            className="w-full h-full object-cover"
          />
        </section>

        {/* Right: Text and Buttons */}
        <section className="flex flex-col items-center justify-center p-6 sm:p-8 lg:p-16 bg-black/40 backdrop-blur-sm sm:rounded-tr-3xl md:w-1/2 h-full">
          <div className="text-center max-w-lg">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-8 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl leading-tight sm:px-4 md:px-8">
              Welcome to My Portfolio
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-12 text-white/90 drop-shadow-xl leading-relaxed font-light px-2 sm:px-0">
              Passionate frontend engineer crafting amazing web experiences with JavaScript, React, Tailwind CSS, and more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0">
              <Link
                to="/about"
                className="bg-gradient-to-r from-indigo-500 via-blue-600 to-purple-600 hover:from-indigo-600 hover:via-blue-700 hover:to-purple-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-full text-base sm:text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 active:translate-y-1"
              >
                Learn More →
              </Link>
              <Link
                to="/projects"
                className="bg-white/20 backdrop-blur-md border-2 border-white/60 hover:bg-white/40 hover:border-white text-white font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-full text-base sm:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:translate-y-1"
              >
                View Projects →
              </Link>
            </div>
          </div>
        </section>

        {/* Scroll-down button */}
        <button
          onClick={scrollToFooter}
          aria-label="Scroll to footer"
          className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/80 hover:text-white transition-colors duration-300 focus:outline-none z-10"
        >
          <span className="text-xs sm:text-sm font-medium tracking-widest uppercase">Scroll</span>
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </main>

      {/* Footer */}
      <footer id="home-footer" className="bg-black/70 backdrop-blur-md border-t border-white/10 text-center px-4 py-8 sm:py-10 w-full">
        <div className="max-w-4xl mx-auto">
          <p className="text-white font-semibold text-lg sm:text-xl mb-2">Let's Build Something Great Together</p>
          <p className="text-white/70 text-sm sm:text-base mb-4">
            Feel free to reach out for collaborations, opportunities, or just to say hello.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-5 text-sm sm:text-base">
            <a
              href="mailto:osafoparrypatrickjoseph@gmail.com"
              className="text-white/80 hover:text-white transition-colors duration-300"
            >
              osafoparrypatrickjoseph@gmail.com
            </a>
            <span className="hidden sm:inline text-white/40">•</span>
            <span className="text-white/80">Tema, Ghana</span>
          </div>
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/about"
              className="text-white/80 hover:text-indigo-400 transition-colors duration-300 text-sm sm:text-base"
            >
              About
            </Link>
            <span className="text-white/40">|</span>
            <Link
              to="/projects"
              className="text-white/80 hover:text-indigo-400 transition-colors duration-300 text-sm sm:text-base"
            >
              Projects
            </Link>
            <span className="text-white/40">|</span>
            <Link
              to="/resume"
              className="text-white/80 hover:text-indigo-400 transition-colors duration-300 text-sm sm:text-base"
            >
              Resume
            </Link>
            <span className="text-white/40">|</span>
            <Link
              to="/contact"
              className="text-white/80 hover:text-indigo-400 transition-colors duration-300 text-sm sm:text-base"
            >
              Contact
            </Link>
          </div>
          <div className="mt-5 pt-5 border-t border-white/10">
            <p className="text-white/50 text-xs sm:text-sm">© {new Date().getFullYear()} Osafo Builds. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

