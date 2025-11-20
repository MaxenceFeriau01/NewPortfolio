import { useState, useEffect } from 'react'
import axios from 'axios'
import BackgroundEffects from './components/BackgroundEffects'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(response => {
        setProjects(response.data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Erreur:', error)
        setLoading(false)
      })
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <BackgroundEffects />
      <Navigation scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Work projects={projects} loading={loading} />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
