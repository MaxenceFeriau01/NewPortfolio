function Hero({ scrollToSection }) {
  return (
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
              Concepteur Développeur{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                d'applications web & mobile
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-10 max-w-2xl">
              Je suis <span className="text-white font-semibold">Maxence Feriau</span>, développeur concepteur d'applications web et mobile. Passionné par les nouvelles technologies et en constante évolution vers le DevOps.
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
  )
}

export default Hero