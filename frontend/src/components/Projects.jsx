// Données des projets
const projectsData = [
  {
    id: 1,
    title: "CV Dynamique",
    description: "Application web permettant de créer des CV dynamiques via un formulaire interactif. Développée pour l'association Entreprendre Ensemble lors de mon stage chez AKKODIS.",
    technologies: ["React", "Java", "Spring Boot", "PostgreSQL"],
    image: "/entreprendreensemble.png", // Image du projet
    isImage: true,
    github: null, // Projet privé (entreprise)
    isPrivate: true,
    context: "Stage AKKODIS"
  },
  {
    id: 2,
    title: "Materlait",
    description: "Application de gestion pour une entreprise laitière. Interface moderne avec tableau de bord et gestion des données métier.",
    technologies: ["React", "Java", "Spring Boot", "MySQL"],
    image: "/materlait.png", // Image du projet
    isImage: true,
    github: "https://github.com/MaxenceFeriau01",
    isPrivate: false,
    context: "Projet professionnel"
  },
  {
    id: 3,
    title: "Cuisine Partagée",
    description: "Application mobile de partage de recettes de cuisine. Les utilisateurs peuvent publier, découvrir et sauvegarder des recettes.",
    technologies: ["React Native", "Express", "Node.js", "MongoDB"],
    image: "🍳",
    github: "https://github.com/MaxenceFeriau01",
    isPrivate: false,
    context: "Projet personnel"
  },
  {
    id: 4,
    title: "MOTORHEAD",
    description: "Site vitrine pour une entreprise automobile. Design moderne et responsive avec présentation des services et véhicules.",
    technologies: ["React", "PHP", "MySQL", "Tailwind CSS"],
    image: "🏍️",
    github: "https://github.com/MaxenceFeriau01",
    isPrivate: false,
    context: "Projet formation"
  },
  {
    id: 5,
    title: "GameZone",
    description: "Site vitrine dédié aux jeux vidéo. Présentation de jeux, actualités et système de notation avec interface dynamique.",
    technologies: ["Angular", "PHP", "MySQL", "Bootstrap"],
    image: "🎮",
    github: "https://github.com/MaxenceFeriau01",
    isPrivate: false,
    context: "Projet formation"
  },
  {
    id: 6,
    title: "Portfolio",
    description: "Ce portfolio que vous consultez actuellement ! Développé avec React et Node.js, avec un mode terminal interactif PowerShell.",
    technologies: ["React", "Node.js", "Tailwind CSS", "Express"],
    image: "💼",
    github: "https://github.com/MaxenceFeriau01/NewPortfolio",
    isPrivate: false,
    context: "Projet personnel"
  }
]

// Composant carte de projet
function ProjectCard({ project }) {
  return (
    <div className="group bg-[#0a1628] border border-cyan-500/10 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10">
      {/* Project Image / Icon */}
      <div className="relative h-56 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 group-hover:from-cyan-500/20 group-hover:to-teal-500/20 transition-all duration-500"></div>

        {/* Image ou Icon */}
        {project.isImage ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 z-10"
          />
        ) : (
          <div className="text-8xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 z-10">
            {project.image}
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent opacity-80"></div>

        {/* Context badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            project.context === "Stage AKKODIS"
              ? "bg-teal-500/20 text-teal-400 border border-teal-500/30"
              : project.context === "Projet professionnel"
              ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
              : project.context === "Projet personnel"
              ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
              : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
          }`}>
            {project.context}
          </span>
        </div>

        {/* Private badge */}
        {project.isPrivate && (
          <div className="absolute top-4 right-4 z-20">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-500/20 text-red-400 border border-red-500/30 flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Privé
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-5 leading-relaxed text-sm">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400 font-medium hover:bg-cyan-500/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.github && !project.isPrivate ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition font-medium group/link"
            >
              <svg className="w-5 h-5 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>Voir le code</span>
            </a>
          ) : project.isPrivate ? (
            <span className="flex items-center gap-2 text-gray-500 font-medium cursor-not-allowed">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>Code privé</span>
            </span>
          ) : null}
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="work" className="min-h-screen flex items-center justify-center py-20 bg-[#081221]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-20 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Portfolio
          </p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Mes Projets
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Une sélection de mes réalisations professionnelles et personnelles
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/MaxenceFeriau01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Voir tous mes projets sur GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
