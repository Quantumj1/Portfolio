import './App.css'
import photo from './assets/Joe.png'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import Resume from './components/resume'

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-15">
              {/* Logo left */}
              <Link to="/" className="flex items-center space-x-1">
                <img src={photo} alt="logo" className="h-8 w-8" />
                <span className="font-semibold text-gray-500 text-lg">Osafo Builds</span>
              </Link>
              {/* Links right */}
              <div className="hidden md:flex items-center space-x-8 text-sm ">
                <Link to="/" className="text-gray-500 font-semibold hover:text-indigo-500 transition duration-300">Home</Link>
                <Link to="/about" className="text-gray-500 font-semibold hover:text-indigo-500 transition duration-300">About</Link>
                <Link to="/projects" className="text-gray-500 font-semibold hover:text-indigo-500 transition duration-300">Projects</Link>
                <Link to="/resume" className="text-gray-500 font-semibold hover:text-indigo-500 transition duration-300">Resume</Link>
                <Link to="/contact" className="text-gray-500 font-semibold hover:text-indigo-500 transition duration-300">Contact</Link>
              </div>
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
