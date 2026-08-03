import React from 'react'
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
    <div className="min-h-screen relative">
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
  )
}

export default App
