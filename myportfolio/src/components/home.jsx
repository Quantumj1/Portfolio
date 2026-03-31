import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

// Eagerly import all image assets from src/assets (Vite)
const modules = import.meta.glob('../assets/*.{jpg,jpeg,png,svg}', { eager: true });
const assetImages = Object.values(modules)
  .map((m) => (m && m.default) || null)
  .filter(Boolean);

const Home = () => {
  const [index, setIndex] = useState(0);
  const images = useMemo(() => (assetImages.length ? assetImages : []), [assetImages]);

  useEffect(() => {
    if (!images.length) return;

    // preload images
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const interval = setInterval(() => {
      setIndex((i) => (images.length ? (i + 1) % images.length : 0));
    }, 60000); // change every 60 seconds

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {images.length ? (
        images.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 z-0 ${i === index ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${src})` }}
            aria-hidden="true"
          />
        ))
      ) : (
        // fallback solid background if no images found
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 z-0" aria-hidden="true" />
      )}

      {/* overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40 z-10" aria-hidden="true" />

      <div className="relative z-20 max-w-2xl text-center px-5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg">
        <h1 className="text-5xl font-bold text-white mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl text-gray-100 mb-8">I'm a passionate frontend engineer ready to create amazing web experiences</p>
        <p className="text-xl text-gray-100 mb-8">
          I specialize in building responsive, user-centric interfaces using JavaScript, <br /> React, and Tailwind CSS, 
          while maintaining a strong interest in UI/UX design.
        </p>
        <div className="space-x-4">
          <a href="#about" className="bg-gradient-to-tr from-indigo-400 via-pink-400 to-yellow-300 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300">Learn More</a>
          <Link to="/projects" className="bg-gradient-to-tr from-indigo-400 via-pink-400 to-red-300 text-indigo-100 px-6 py-3 rounded-lg hover:bg-indigo-50 hover:text-indigo-800 transition duration-300">View Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
