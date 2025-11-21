function Skills() {
  return (
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
  )
}

export default Skills
