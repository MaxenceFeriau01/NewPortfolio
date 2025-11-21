import { useState } from 'react'

function Navigation({ scrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
    setMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-[#0a1628]/95 backdrop-blur-md border-b border-cyan-500/10 z-50">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-20 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button onClick={() => handleNavClick('home')} className="group font-mono">
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 text-xl">$</span>
              <span className="text-white text-lg">
                <span className="text-cyan-400">npm run dev</span>
                <span className="text-gray-500 mx-2">:</span>
                <span className="font-bold">Maxence Feriau</span>
              </span>
              <span className="inline-block w-2 h-5 bg-cyan-400 animate-pulse"></span>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <button 
              onClick={() => handleNavClick('home')} 
              className="relative text-gray-300 hover:text-cyan-400 hover:scale-110 transition-all duration-300 text-sm uppercase tracking-wider font-medium group"
            >
              <span className="relative z-10">Accueil</span>
              <span className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 blur-xl transition-all duration-300 rounded-full"></span>
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              className="relative text-gray-300 hover:text-cyan-400 hover:scale-110 transition-all duration-300 text-sm uppercase tracking-wider font-medium group"
            >
              <span className="relative z-10">À Propos</span>
              <span className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 blur-xl transition-all duration-300 rounded-full"></span>
            </button>
            <button 
              onClick={() => handleNavClick('skills')} 
              className="relative text-gray-300 hover:text-cyan-400 hover:scale-110 transition-all duration-300 text-sm uppercase tracking-wider font-medium group"
            >
              <span className="relative z-10">Compétences</span>
              <span className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 blur-xl transition-all duration-300 rounded-full"></span>
            </button>
            <button 
              onClick={() => handleNavClick('work')} 
              className="relative text-gray-300 hover:text-cyan-400 hover:scale-110 transition-all duration-300 text-sm uppercase tracking-wider font-medium group"
            >
              <span className="relative z-10">Projets</span>
              <span className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 blur-xl transition-all duration-300 rounded-full"></span>
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="relative text-gray-300 hover:text-cyan-400 hover:scale-110 transition-all duration-300 text-sm uppercase tracking-wider font-medium group"
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 blur-xl transition-all duration-300 rounded-full"></span>
            </button>
          </div>

          {/* Status Badge */}
          <div className="hidden lg:flex items-center gap-3 px-5 py-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/5">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300 font-medium">En formation</span>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-cyan-400 p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-cyan-500/10 pt-4">
            <button 
              onClick={() => handleNavClick('home')} 
              className="block text-gray-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 w-full text-left"
            >
              Accueil
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              className="block text-gray-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 w-full text-left"
            >
              À Propos
            </button>
            <button 
              onClick={() => handleNavClick('skills')} 
              className="block text-gray-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 w-full text-left"
            >
              Compétences
            </button>
            <button 
              onClick={() => handleNavClick('work')} 
              className="block text-gray-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 w-full text-left"
            >
              Projets
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="block text-gray-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 w-full text-left"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation