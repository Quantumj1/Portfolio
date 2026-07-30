import { useState } from 'react'
import './App.css'
import photo from './assets/OB.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import Resume from './components/resume'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <Router>
      <div className="App">
        <nav className="bg-white shadow-lg relative z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-15">
              {/* Logo left */}
              <Link to="/" className="flex items-center space-x-1" onClick={closeMenu}>
                <img src={photo} alt="logo" className="h-8 w-8 rounded-full" />
                <span className="font-semibold text-gray-500 text-lg">Osafo Builds</span>
              </Link>
              {/* Desktop links right */}
              <div className="hidden md:flex items-center space-x-8 text-sm">
                <Link to="/" className="text-gray-500 font-semibold hover:text-indigo-500 transition duration-300" onClick={closeMenu}>Home</Link>
                <Link to="/about" className="text-gray-500 font-semibold hover:text-indigo-500 transition duration-300" onClick={closeMenu}>About</Link>
                <Link to="/projects" className="text-gray-500 font-semibold hover:text-indigo-500 transition duration-300" onClick={closeMenu}>Projects</Link>
                <Link to="/resume" className="text-gray-500 font-semibold hover:text-indigo-500 transition duration-300" onClick={closeMenu}>Resume</Link>
                <Link to="/contact" className="text-gray-500 font-semibold hover:text-indigo-500 transition duration-300" onClick={closeMenu}>Contact</Link>
              </div>
              {/* Mobile hamburger button */}
              <button
                className="md:hidden flex flex-col space-y-1.5 p-2 focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              >
                <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </div>
          {/* Mobile dropdown menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-4 pb-4 pt-2 space-y-2 bg-white border-t border-gray-100">
              <Link to="/" className="block text-gray-500 font-semibold hover:text-indigo-500 py-2 transition duration-300" onClick={closeMenu}>Home</Link>
              <Link to="/about" className="block text-gray-500 font-semibold hover:text-indigo-500 py-2 transition duration-300" onClick={closeMenu}>About</Link>
              <Link to="/projects" className="block text-gray-500 font-semibold hover:text-indigo-500 py-2 transition duration-300" onClick={closeMenu}>Projects</Link>
              <Link to="/resume" className="block text-gray-500 font-semibold hover:text-indigo-500 py-2 transition duration-300" onClick={closeMenu}>Resume</Link>
              <Link to="/contact" className="block text-gray-500 font-semibold hover:text-indigo-500 py-2 transition duration-300" onClick={closeMenu}>Contact</Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
