import React from 'react'
import Navbar from './components/Navbar'
import { Hero, About, Experience, Skills, Projects, Contact, Footer } from './components/Portfolio'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
