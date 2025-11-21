function About() {
  return (
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>En reconversion depuis 2 ans</span>
                </div>
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
                  Après <span className="text-white font-semibold">12 ans dans le secteur social</span>, j'ai décidé de me reconvertir dans le développement web, une passion qui m'animait depuis longtemps.
                </p>
                <p>
                  Depuis <span className="text-white font-semibold">2 ans</span>, je construis ma reconversion professionnelle à travers des formations intensives et une expérience concrète avec un <span className="text-white font-semibold">stage de 8 mois chez AKKODIS France</span>.
                </p>
                <p>
                  Cette reconversion m'a permis de développer une rigueur et une capacité d'adaptation qui enrichissent aujourd'hui mon approche du développement. Je continue d'apprendre chaque jour pour créer des solutions web performantes et élégantes.
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
            <div className="text-5xl font-bold text-cyan-400 mb-2">12</div>
            <div className="text-gray-400">Ans dans le social</div>
          </div>
          <div className="bg-[#0a1628] border border-cyan-500/20 rounded-2xl p-6 text-center hover:border-cyan-500/50 hover:scale-105 transition-all">
            <div className="text-5xl font-bold text-cyan-400 mb-2">2</div>
            <div className="text-gray-400">Ans de reconversion</div>
          </div>
          <div className="bg-[#0a1628] border border-cyan-500/20 rounded-2xl p-6 text-center hover:border-cyan-500/50 hover:scale-105 transition-all">
            <div className="text-5xl font-bold text-cyan-400 mb-2">2</div>
            <div className="text-gray-400">Diplômes obtenus</div>
          </div>
          <div className="bg-[#0a1628] border border-cyan-500/20 rounded-2xl p-6 text-center hover:border-cyan-500/50 hover:scale-105 transition-all">
            <div className="text-5xl font-bold text-cyan-400 mb-2">8</div>
            <div className="text-gray-400">Mois de stage</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About