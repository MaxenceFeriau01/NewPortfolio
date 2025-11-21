import { useState } from 'react'

// Import des composants
import Navigation from './components/Navigation'
import BackgroundEffects from './components/BackgroundEffects'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Terminal from './components/Terminal'

function App() {
  const [terminalMode, setTerminalMode] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#0a1628] text-white relative">
      {/* Toggle Button - Fixed Position Center */}
      <button
        onClick={() => setTerminalMode(!terminalMode)}
        className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 px-6 py-3 rounded-full text-white font-semibold shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all hover:scale-105 border-2 border-cyan-400/30"
      >
        {terminalMode ? (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>Mode Classique</span>
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Mode Terminal</span>
          </>
        )}
      </button>

      {/* Terminal Mode */}
      {terminalMode ? (
        <Terminal />
      ) : (
        <>
          {/* Classic Mode Content */}
          <BackgroundEffects />
          <Navigation scrollToSection={scrollToSection} />
          <Hero scrollToSection={scrollToSection} />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
