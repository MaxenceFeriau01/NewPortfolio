// Données des technologies avec leurs logos SVG
const skillsData = {
  frontend: {
    title: "Frontend",
    color: "cyan",
    skills: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ]
  },
  backend: {
    title: "Backend",
    color: "teal",
    skills: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Spring", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Symfony", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg" },
      { name: "Maven", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" },
    ]
  },
  database: {
    title: "Database",
    color: "cyan",
    skills: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "phpMyAdmin", logo: "https://www.phpmyadmin.net/static/images/logo-og.png" },
      { name: "DBeaver", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dbeaver/dbeaver-original.svg" },
    ]
  },
  devops: {
    title: "DevOps & Tools",
    color: "teal",
    skills: [
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Portainer", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/portainer/portainer-original.svg" },
      { name: "Proxmox", logo: "https://www.proxmox.com/images/proxmox/Proxmox_symbol_standard_hex.png" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Azure DevOps", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg" },
      { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "IntelliJ", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
      { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "Claude AI", logo: "/claude-ai.svg" },
    ]
  }
}

// Composant pour une carte de skill individuelle - Version Cyan
function SkillCardCyan({ skill }) {
  return (
    <div className="group relative">
      <div className="relative p-4 rounded-2xl bg-[#0a1628] border border-cyan-500/20 hover:border-cyan-400/60 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer">
        {/* Logo */}
        <div className="w-12 h-12 mx-auto mb-3 relative">
          <img
            src={skill.logo}
            alt={skill.name}
            className="w-full h-full object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
          />
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/20 rounded-full blur-xl transition-all duration-300"></div>
        </div>

        {/* Name */}
        <p className="text-center text-sm font-medium text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
          {skill.name}
        </p>
      </div>

      {/* Tooltip */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-cyan-500 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10">
        {skill.name}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-cyan-500"></div>
      </div>
    </div>
  )
}

// Composant pour une carte de skill individuelle - Version Teal
function SkillCardTeal({ skill }) {
  return (
    <div className="group relative">
      <div className="relative p-4 rounded-2xl bg-[#0a1628] border border-teal-500/20 hover:border-teal-400/60 hover:bg-teal-500/10 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-lg hover:shadow-teal-500/20 cursor-pointer">
        {/* Logo */}
        <div className="w-12 h-12 mx-auto mb-3 relative">
          <img
            src={skill.logo}
            alt={skill.name}
            className="w-full h-full object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
          />
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-teal-400/0 group-hover:bg-teal-400/20 rounded-full blur-xl transition-all duration-300"></div>
        </div>

        {/* Name */}
        <p className="text-center text-sm font-medium text-gray-400 group-hover:text-teal-400 transition-colors duration-300">
          {skill.name}
        </p>
      </div>

      {/* Tooltip */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-teal-500 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10">
        {skill.name}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-teal-500"></div>
      </div>
    </div>
  )
}

// Composant pour une catégorie de skills
function SkillCategory({ category, data }) {
  const isCyan = data.color === "cyan"

  const icons = {
    frontend: (
      <svg className={`w-8 h-8 ${isCyan ? 'text-cyan-400' : 'text-teal-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    backend: (
      <svg className={`w-8 h-8 ${isCyan ? 'text-cyan-400' : 'text-teal-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    database: (
      <svg className={`w-8 h-8 ${isCyan ? 'text-cyan-400' : 'text-teal-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    devops: (
      <svg className={`w-8 h-8 ${isCyan ? 'text-cyan-400' : 'text-teal-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  }

  return (
    <div className={`bg-[#081221] border rounded-3xl p-8 transition-all duration-300 ${
      isCyan
        ? 'border-cyan-500/20 hover:border-cyan-500/50'
        : 'border-teal-500/20 hover:border-teal-500/50'
    }`}>
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className={`w-14 h-14 bg-gradient-to-br rounded-2xl flex items-center justify-center ${
          isCyan ? 'from-cyan-500/20 to-cyan-500/10' : 'from-teal-500/20 to-teal-500/10'
        }`}>
          {icons[category]}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">{data.title}</h3>
          <p className="text-gray-500 text-sm">{data.skills.length} technologies</p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
        {data.skills.map((skill, index) => (
          isCyan
            ? <SkillCardCyan key={index} skill={skill} />
            : <SkillCardTeal key={index} skill={skill} />
        ))}
      </div>
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-20 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Compétences
          </p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Stack Technique
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Les technologies et outils avec lesquels je travaille au quotidien
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([key, data]) => (
            <SkillCategory key={key} category={key} data={data} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
