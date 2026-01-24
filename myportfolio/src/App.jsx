
import './App.css'
import logo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
            <div className="flex justify-between">
              <div className="flex space-x-7">
                <div>
                  <a href="/" className="flex items-center py-4 px-2">
                    <img src={logo} alt="logo" className="h-8 w-8 mr-2" />
                    <span className="font-semibold text-gray-500 text-lg">Portfolio</span>
                  </a>
                </div>
                <div className="hidden md:flex items-center space-x-1">
                  <a href="/" className="py-4 px-2 text-gray-500 font-semibold hover:text-indigo-500 transition duration-300">Home</a>
                  <a href="/about" className="py-4 px-2 text-gray-500 font-semibold hover:text-indigo-500 transition duration-300">About</a>
                  <a href="/projects" className="py-4 px-2 text-gray-500 font-semibold hover:text-indigo-500 transition duration-300">Projects</a>
                  <a href="/resume" className="py-4 px-2 text-gray-500 font-semibold hover:text-indigo-500 transition duration-300">Resume</a>
                  <a href="/contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-indigo-500 transition duration-300">Contact</a>
                </div>
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
