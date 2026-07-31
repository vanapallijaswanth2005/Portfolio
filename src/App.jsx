import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Stats from './components/Stats'
import Timeline from './components/Timeline'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-white relative">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Stats />
          <Timeline />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
