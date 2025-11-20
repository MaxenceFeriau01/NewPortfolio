import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

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
      setMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* ========== ARRIÈRE-PLANS ANIMÉS ========== */}
      
      {/* Grille animée */}
      <div className="animated-grid"></div>

      {/* Formes flottantes */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>

      {/* Points lumineux (étoiles) */}
      <div className="stars">
        <div className="star" style={{top: '10%', left: '15%', animation: 'twinkle 3s infinite'}}></div>
        <div className="star" style={{top: '20%', left: '80%', animation: 'twinkle 4s infinite'}}></div>
        <div className="star" style={{top: '40%', left: '25%', animation: 'twinkle 2.5s infinite'}}></div>
        <div className="star" style={{top: '60%', left: '70%', animation: 'twinkle 3.5s infinite'}}></div>
        <div className="star" style={{top: '80%', left: '40%', animation: 'twinkle 2s infinite'}}></div>
        <div className="star" style={{top: '15%', left: '60%', animation: 'twinkle 4.5s infinite'}}></div>
        <div className="star" style={{top: '50%', left: '10%', animation: 'twinkle 3s infinite'}}></div>
        <div className="star" style={{top: '70%', left: '85%', animation: 'twinkle 2.5s infinite'}}></div>
        <div className="star" style={{top: '30%', left: '50%', animation: 'twinkle 4s infinite'}}></div>
        <div className="star" style={{top: '90%', left: '30%', animation: 'twinkle 3.5s infinite'}}></div>
      </div>

      {/* ========== NAVIGATION ========== */}
      <nav className="fixed top-0 w-full bg-[#0a1628]/95 backdrop-blur-md border-b border-cyan-500/10 z-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-20 py-5">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button onClick={() => scrollToSection('home')} className="group font-mono">
              <div className="flex items-center gap-2">
                {/* Prompt terminal */}
                <span className="text-cyan-400 text-xl">$</span>
                {/* Commande */}
                <span className="text-white text-lg">
                  <span className="text-cyan-400">npm run dev</span>
                  <span className="text-gray-500 mx-2">:</span>
                  <span className="font-bold">Maxence Feriau</span>
                </span>
                {/* Curseur clignotant */}
                <span className="inline-block w-2 h-5 bg-cyan-400 animate-pulse"></span>
              </div>
            </button>

            {/* Desktop Menu - AVEC EFFET D'AGRANDISSEMENT */}
            <div className="hidden md:flex items-center gap-10">
              <button 
                onClick={() => scrollToSection('home')} 
                className="relative text-gray-300 hover:text-cyan-400 hover:scale-110 transition-all duration-300 text-sm uppercase tracking-wider font-medium group"
              >
                <span className="relative z-10">Accueil</span>
                <span className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 blur-xl transition-all duration-300 rounded-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="relative text-gray-300 hover:text-cyan-400 hover:scale-110 transition-all duration-300 text-sm uppercase tracking-wider font-medium group"
              >
                <span className="relative z-10">À Propos</span>
                <span className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 blur-xl transition-all duration-300 rounded-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="relative text-gray-300 hover:text-cyan-400 hover:scale-110 transition-all duration-300 text-sm uppercase tracking-wider font-medium group"
              >
                <span className="relative z-10">Compétences</span>
                <span className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 blur-xl transition-all duration-300 rounded-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('work')} 
                className="relative text-gray-300 hover:text-cyan-400 hover:scale-110 transition-all duration-300 text-sm uppercase tracking-wider font-medium group"
              >
                <span className="relative z-10">Projets</span>
                <span className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 blur-xl transition-all duration-300 rounded-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
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

          {/* Mobile Menu - AVEC EFFET DE GLISSEMENT */}
          {menuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-cyan-500/10 pt-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="block text-gray-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 w-full text-left"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="block text-gray-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 w-full text-left"
              >
                À Propos
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="block text-gray-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 w-full text-left"
              >
                Compétences
              </button>
              <button 
                onClick={() => scrollToSection('work')} 
                className="block text-gray-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 w-full text-left"
              >
                Projets
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block text-gray-300 hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 w-full text-left"
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* ========== HERO SECTION ========== */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left - Profile Image */}
            <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative">
                {/* Profile Circle with REAL IMAGE */}
                <div className="w-80 h-80 md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center overflow-hidden border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                  <img 
                    src="/maxence.png" 
                    alt="Maxence Feriau" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Rotating Badge */}
                <div className="absolute bottom-8 -left-8 w-36 h-36 md:w-44 md:h-44 bg-[#0a1628] border-3 border-cyan-400 rounded-full flex flex-col items-center justify-center shadow-lg shadow-cyan-500/30 animate-spin-slow">
                  <div className="animate-spin-reverse">
                    <svg className="w-14 h-14 text-cyan-400 mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                    </svg>
                    <p className="text-[11px] text-center text-cyan-400 uppercase tracking-widest font-bold leading-tight">
                      Full Stack<br/>Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.3em] mb-6">
                Développeur & Concepteur
              </p>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-8">
                Création d'applications web{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                  modernes
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-10 max-w-2xl">
                Je suis <span className="text-white font-semibold">Maxence Feriau</span>, développeur full-stack et concepteur d'applications. Passionné par les technologies web et en constante évolution vers le DevOps.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('work')}
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 px-10 py-5 rounded-full text-white text-lg font-semibold transition-all duration-300 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
                >
                  <span>Voir mes projets</span>
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                <button 
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center gap-3 border-2 border-cyan-500 hover:bg-cyan-500/10 px-10 py-5 rounded-full text-cyan-400 text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  <span>Me contacter</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-[#081221]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-20 w-full">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.3em] mb-4">
              À Propos
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Mon Parcours
            </h2>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Left - Profile Card */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-3xl p-8 text-center sticky top-24">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-teal-500/20 overflow-hidden border-2 border-cyan-500/30">
                  <img 
                    src="/maxence.png" 
                    alt="Maxence Feriau" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl font-bold mb-2">Maxence Feriau</h3>
                <p className="text-cyan-400 text-lg mb-6">Développeur Full-Stack</p>
                
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>8 mois chez AKKODIS</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <span>2 Diplômes obtenus</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Future formation DevOps</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Story */}
              <div className="bg-[#0a1628] border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-cyan-400">📖</span>
                  Mon Histoire
                </h3>
                <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
                  <p>
                    Passionné par le développement web depuis toujours, j'ai construit mon expertise à travers une formation complète et une expérience professionnelle enrichissante.
                  </p>
                  <p>
                    J'ai débuté ma carrière avec un <span className="text-white font-semibold">stage de 8 mois chez AKKODIS France</span> en tant que développeur web, où j'ai pu mettre en pratique mes compétences sur des projets concrets en équipe.
                  </p>
                  <p>
                    Aujourd'hui, je maîtrise l'ensemble de la stack technique moderne et je continue d'apprendre chaque jour pour créer des solutions web performantes et élégantes.
                  </p>
                </div>
              </div>

              {/* Diplomas */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/30 rounded-2xl p-6 hover:scale-105 transition-all">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">Diplôme Obtenu ✓</h4>
                  <p className="text-cyan-400 font-semibold">Développeur Web et Web Mobile</p>
                </div>

                <div className="bg-gradient-to-br from-teal-500/10 to-teal-500/5 border border-teal-500/30 rounded-2xl p-6 hover:scale-105 transition-all">
                  <div className="w-16 h-16 bg-teal-500/20 rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">Diplôme Obtenu ✓</h4>
                  <p className="text-teal-400 font-semibold">Concepteur Développeur d'Applications</p>
                </div>
              </div>

              {/* Experience Card */}
              <div className="bg-[#0a1628] border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">AKKODIS France</h4>
                    <p className="text-cyan-400 font-semibold mb-3">Développeur Web • Stage de 8 mois</p>
                    <p className="text-gray-400 leading-relaxed">
                      Développement d'applications web complètes en environnement professionnel. Travail en équipe avec méthodologies agiles, participation au cycle complet de développement et mise en production de fonctionnalités.
                    </p>
                  </div>
                </div>
              </div>

              {/* DevOps Goal */}
              <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-cyan-400">🎯</span>
                  Prochaine Étape : DevOps
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg mb-4">
                  Après avoir exploré les bases du DevOps avec Docker, la gestion de serveurs Proxmox et les outils d'automatisation, je me prépare à suivre une <span className="text-white font-semibold">formation DevOps complète</span>.
                </p>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Mon objectif : maîtriser l'automatisation CI/CD, l'orchestration avec Kubernetes, l'infrastructure as code et devenir un professionnel polyvalent capable de gérer l'ensemble du cycle de vie des applications modernes.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-[#0a1628] border border-cyan-500/20 rounded-2xl p-6 text-center hover:border-cyan-500/50 hover:scale-105 transition-all">
              <div className="text-5xl font-bold text-cyan-400 mb-2">8</div>
              <div className="text-gray-400">Mois d'expérience</div>
            </div>
            <div className="bg-[#0a1628] border border-cyan-500/20 rounded-2xl p-6 text-center hover:border-cyan-500/50 hover:scale-105 transition-all">
              <div className="text-5xl font-bold text-cyan-400 mb-2">2</div>
              <div className="text-gray-400">Diplômes</div>
            </div>
            <div className="bg-[#0a1628] border border-cyan-500/20 rounded-2xl p-6 text-center hover:border-cyan-500/50 hover:scale-105 transition-all">
              <div className="text-5xl font-bold text-cyan-400 mb-2">20+</div>
              <div className="text-gray-400">Technologies</div>
            </div>
            <div className="bg-[#0a1628] border border-cyan-500/20 rounded-2xl p-6 text-center hover:border-cyan-500/50 hover:scale-105 transition-all">
              <div className="text-5xl font-bold text-cyan-400 mb-2">∞</div>
              <div className="text-gray-400">Passion</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SKILLS SECTION ========== */}
      <section id="skills" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-20 w-full">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.3em] mb-4">
              Compétences
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Stack Technique Complète
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Toutes les technologies et outils que je maîtrise pour créer des applications performantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend */}
            <div className="bg-[#081221] border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-500/50 transition-all hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">Frontend</h3>
              <ul className="space-y-3">
                {['React', 'Vue.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5/CSS3', 'Tailwind CSS', 'Bootstrap'].map((skill, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-[#081221] border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-500/50 transition-all hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500/20 to-teal-500/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">Backend</h3>
              <ul className="space-y-3">
                {['Node.js', 'Express', 'Java', 'Spring Boot', 'Maven', 'REST API', 'GraphQL'].map((skill, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-teal-400 rounded-full flex-shrink-0"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Database */}
            <div className="bg-[#081221] border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-500/50 transition-all hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">Database</h3>
              <ul className="space-y-3">
                {['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'].map((skill, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* DevOps & Tools */}
            <div className="bg-[#081221] border border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-500/50 transition-all hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500/20 to-teal-500/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">DevOps & Tools</h3>
              <ul className="space-y-3">
                {['Docker', 'Proxmox', 'Git/GitHub', 'Postman', 'VS Code', 'IntelliJ IDEA', 'CI/CD'].map((skill, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-teal-400 rounded-full flex-shrink-0"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WORK SECTION ========== */}
      <section id="work" className="min-h-screen flex items-center justify-center py-20 bg-[#081221]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-20 w-full">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.3em] mb-4">
              Portfolio
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Mes Projets
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Découvrez une sélection de mes réalisations
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map(project => (
                <div 
                  key={project.id}
                  className="group bg-[#0a1628] border border-cyan-500/10 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  {/* Project Image */}
                  <div className="relative h-72 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 flex items-center justify-center overflow-hidden">
                    <div className="text-9xl group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent opacity-60"></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-5 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a 
                        href={project.github}
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition font-medium"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>Code</span>
                      </a>
                      <a 
                        href={project.demo}
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition font-medium"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span>Démo</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ========== CONTACT SECTION ========== */}
      <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-20 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.3em] mb-4">
              Contact
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Restons en Contact
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
              Intéressé par mon profil ? Une question sur mes projets ? N'hésitez pas à me contacter !
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <a 
                href="mailto:maxence.feriau@example.com"
                className="flex items-center gap-3 bg-cyan-500/10 border-2 border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/20 px-8 py-5 rounded-full text-cyan-400 font-semibold transition-all text-lg hover:scale-105"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>

              <a 
                href="https://github.com/maxenceferiau"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-cyan-500/10 border-2 border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/20 px-8 py-5 rounded-full text-cyan-400 font-semibold transition-all text-lg hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>

              <a 
                href="https://linkedin.com/in/maxenceferiau"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 px-8 py-5 rounded-full text-white font-semibold transition-all text-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
            </div>

            {/* Download CV */}
            <div className="pt-8 border-t border-cyan-500/10">
              <a 
                href="/cv-maxence-feriau.pdf"
                download
                className="inline-flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Télécharger mon CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="border-t border-cyan-500/10 py-10 bg-[#081221]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Maxence Feriau - Développeur Full-Stack
            </p>
            <p className="text-gray-500 text-sm">
              Fait avec ❤️ avec React, Node.js & Docker
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App