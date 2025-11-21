import { useState, useEffect, useRef } from 'react'

const portfolioData = {
  root: {
    name: 'MaxenceFeriau',
    type: 'directory',
    description: 'Portfolio de Maxence Feriau - Développeur Concepteur Web & Mobile',
    children: {
      'Accueil': {
        name: 'Accueil',
        type: 'directory',
        description: 'Page d\'accueil et présentation',
        content: `
╔════════════════════════════════════════════════════════════╗
║                    MAXENCE FERIAU                          ║
║        Développeur Concepteur Web & Mobile                 ║
╚════════════════════════════════════════════════════════════╝

"Transformer les idées en applications performantes,
 une ligne de code à la fois."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💼 8 mois d'expérience chez AKKODIS France
🎓 2 Diplômes : DWWM + CDA
🚀 En évolution vers le DevOps
🤖 Passionné par l'IA et l'automatisation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tapez 'ls' pour explorer mon portfolio
ou 'Get-Help' pour voir toutes les commandes.
        `
      },
      'APropos': {
        name: 'APropos',
        type: 'directory',
        description: 'Mon parcours et mes diplômes',
        content: `
╔════════════════════════════════════════════════════════════╗
║                    À PROPOS DE MOI                         ║
╚════════════════════════════════════════════════════════════╝

📖 MON HISTOIRE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Passionné par le développement depuis toujours, j'ai
construit mon expertise à travers une formation complète et
une expérience professionnelle enrichissante.

💼 EXPÉRIENCE PROFESSIONNELLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AKKODIS France - Développeur Web (Stage de 8 mois)
• Développement d'applications web complètes
• Travail en équipe avec méthodologies agiles
• Projets : CV Dynamique, Materlait

🎓 DIPLÔMES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Développeur Web et Web Mobile (DWWM)
✓ Concepteur Développeur d'Applications (CDA)

🎯 OBJECTIF : Formation DevOps
• CI/CD & Automatisation
• Kubernetes & Orchestration
• Infrastructure as Code
        `
      },
      'Competences': {
        name: 'Competences',
        type: 'directory',
        description: 'Stack technique complète',
        children: {
          'Frontend': {
            name: 'Frontend',
            type: 'directory',
            description: 'Technologies frontend',
            content: `
╔════════════════════════════════════════════════════════════╗
║                  COMPÉTENCES FRONTEND                      ║
╚════════════════════════════════════════════════════════════╝

✓ React          Framework principal
✓ Vue.js         Applications réactives
✓ Next.js        SSR & SSG
✓ JavaScript     ES6+
✓ TypeScript     Typage statique
✓ HTML5/CSS3     Standards web
✓ Tailwind CSS   Utility-first CSS
✓ Bootstrap      Framework CSS
            `
          },
          'Backend': {
            name: 'Backend',
            type: 'directory',
            description: 'Technologies backend',
            content: `
╔════════════════════════════════════════════════════════════╗
║                  COMPÉTENCES BACKEND                       ║
╚════════════════════════════════════════════════════════════╝

✓ Node.js        Runtime JavaScript
✓ Express        Framework Node.js
✓ Java           Langage robuste
✓ Spring Boot    Framework Java
✓ PHP            Scripting serveur
✓ Symfony        Framework PHP
✓ Maven          Gestion de projet Java
            `
          },
          'Database': {
            name: 'Database',
            type: 'directory',
            description: 'Bases de données',
            content: `
╔════════════════════════════════════════════════════════════╗
║                  BASES DE DONNÉES                          ║
╚════════════════════════════════════════════════════════════╝

✓ MongoDB        NoSQL Document
✓ PostgreSQL     SQL avancé
✓ MySQL          SQL classique
✓ DBeaver        Client universel
            `
          },
          'DevOps': {
            name: 'DevOps',
            type: 'directory',
            description: 'DevOps & Outils',
            content: `
╔════════════════════════════════════════════════════════════╗
║                  DEVOPS & OUTILS                           ║
╚════════════════════════════════════════════════════════════╝

CONTAINERISATION & VIRTUALISATION
✓ Docker         Containers
✓ Portainer      Gestion Docker
✓ Proxmox        Virtualisation

VERSIONING & CI/CD
✓ Git            Versioning
✓ GitHub         Collaboration
✓ Azure DevOps   CI/CD pipelines

OUTILS DE DÉVELOPPEMENT
✓ VS Code        IDE principal
✓ IntelliJ IDEA  IDE Java
✓ Postman        Tests API
✓ Linux          Administration système

INTELLIGENCE ARTIFICIELLE
✓ Claude AI      Assistant IA
            `
          }
        }
      },
      'Projets': {
        name: 'Projets',
        type: 'directory',
        description: 'Mes réalisations',
        content: `
╔════════════════════════════════════════════════════════════╗
║                    MES PROJETS                             ║
╚════════════════════════════════════════════════════════════╝

🔒 CV DYNAMIQUE                          [Stage AKKODIS]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Application de création de CV dynamiques via formulaire
pour l'association Entreprendre Ensemble.
Stack : React • Java • Spring Boot • PostgreSQL

🔒 MATERLAIT                             [Stage AKKODIS]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Application de gestion pour entreprise laitière.
Interface moderne avec tableau de bord.
Stack : React • Java • Spring Boot • MySQL

🍳 CUISINE PARTAGÉE                      [Projet Personnel]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Application mobile de partage de recettes.
Stack : React Native • Express • Node.js • MongoDB

🏍️ MOTORHEAD                            [Projet Formation]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Site vitrine pour entreprise automobile.
Stack : React • PHP • MySQL • Tailwind CSS

🎮 GAMEZONE                              [Projet Formation]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Site vitrine jeux vidéo avec système de notation.
Stack : Angular • PHP • MySQL • Bootstrap

💼 PORTFOLIO                             [Projet Personnel]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Ce portfolio avec terminal interactif PowerShell !
Stack : React • Node.js • Tailwind CSS • Express
        `
      },
      'Contact': {
        name: 'Contact',
        type: 'directory',
        description: 'Me contacter',
        content: `
╔════════════════════════════════════════════════════════════╗
║                    CONTACT                                 ║
╚════════════════════════════════════════════════════════════╝

📧 EMAIL
   maxence.feriau@gmail.com

💻 GITHUB
   github.com/MaxenceFeriau01

💼 LINKEDIN
   linkedin.com/in/maxence-feriau-a7090a336

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Intéressé par mon profil ? N'hésitez pas à me contacter !

💡 Astuce : Utilisez le bouton "Mode Classique" en haut
   pour voir le portfolio avec interface graphique.
        `
      }
    }
  }
}

function Terminal() {
  const [history, setHistory] = useState([])
  const [currentPath, setCurrentPath] = useState(['MaxenceFeriau'])
  const [input, setInput] = useState('')
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef(null)
  const terminalRef = useRef(null)
  const bottomRef = useRef(null)

  useEffect(() => {
    // Message de bienvenue
    setHistory([
      { type: 'system', content: '╔════════════════════════════════════════════════════════════╗' },
      { type: 'system', content: '║   PowerShell Portfolio - Maxence Feriau v2.0              ║' },
      { type: 'system', content: '║   Développeur Concepteur Web & Mobile                     ║' },
      { type: 'system', content: '╚════════════════════════════════════════════════════════════╝' },
      { type: 'system', content: '' },
      { type: 'info', content: '"Transformer les idées en applications performantes."' },
      { type: 'system', content: '' },
      { type: 'output', content: 'Bienvenue dans mon portfolio interactif !' },
      { type: 'output', content: '' },
      { type: 'output', content: 'Commandes rapides :' },
      { type: 'output', content: '  ls           → Voir les sections disponibles' },
      { type: 'output', content: '  cd Projets   → Voir mes projets' },
      { type: 'output', content: '  whoami       → En savoir plus sur moi' },
      { type: 'output', content: '  Get-Help     → Toutes les commandes' },
      { type: 'system', content: '' }
    ])
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    // Auto-scroll vers le bas
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [history])

  const getCurrentDirectory = () => {
    let current = portfolioData.root
    for (let i = 1; i < currentPath.length; i++) {
      if (current.children && current.children[currentPath[i]]) {
        current = current.children[currentPath[i]]
      }
    }
    return current
  }

  const getPrompt = () => {
    return `PS C:\\Portfolio\\${currentPath.join('\\')}>`
  }

  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim()
    if (!trimmedCmd) return

    // Ajouter à l'historique
    setHistory(prev => [...prev, { type: 'command', content: `${getPrompt()} ${trimmedCmd}` }])
    setCommandHistory(prev => [...prev, trimmedCmd])
    setHistoryIndex(-1)

    const [command, ...args] = trimmedCmd.split(' ')
    const arg = args.join(' ')

    switch (command.toLowerCase()) {
      case 'ls':
      case 'dir':
        handleLs()
        break
      case 'cd':
        handleCd(arg)
        break
      case 'clear':
      case 'cls':
        handleClear()
        break
      case 'get-help':
      case 'help':
      case '?':
        handleHelp()
        break
      case 'whoami':
        handleWhoami()
        break
      case 'cat':
      case 'type':
        handleCat(arg)
        break
      case 'pwd':
        handlePwd()
        break
      default:
        setHistory(prev => [...prev, {
          type: 'error',
          content: `'${command}' n'est pas reconnu en tant que commande. Tapez 'Get-Help' pour voir les commandes disponibles.`
        }])
    }

    setInput('')
  }

  const handleLs = () => {
    const current = getCurrentDirectory()

    if (current.content && !current.children) {
      setHistory(prev => [...prev, { type: 'output', content: current.content }])
      return
    }

    if (current.children) {
      const output = [
        '',
        `    Directory: C:\\Portfolio\\${currentPath.join('\\')}`,
        '',
        'Mode         Name                   Description',
        '----         ----                   -----------'
      ]

      Object.values(current.children).forEach(item => {
        const mode = item.type === 'directory' ? 'd----' : '-a---'
        const name = item.name.padEnd(22)
        output.push(`${mode}        ${name} ${item.description || ''}`)
      })

      output.push('')
      setHistory(prev => [...prev, ...output.map(line => ({ type: 'output', content: line }))])
    }
  }

  const handleCd = (target) => {
    if (!target) {
      setHistory(prev => [...prev, { type: 'output', content: `C:\\Portfolio\\${currentPath.join('\\')}` }])
      return
    }

    if (target === '..' || target === '../') {
      if (currentPath.length > 1) {
        setCurrentPath(prev => prev.slice(0, -1))
      }
      return
    }

    if (target === '~' || target === '\\' || target === '/') {
      setCurrentPath(['MaxenceFeriau'])
      return
    }

    const current = getCurrentDirectory()
    if (current.children && current.children[target]) {
      setCurrentPath(prev => [...prev, target])
    } else {
      setHistory(prev => [...prev, {
        type: 'error',
        content: `cd : Impossible de trouver le chemin 'C:\\Portfolio\\${currentPath.join('\\')}\\${target}'.`
      }])
    }
  }

  const handleClear = () => {
    setHistory([])
  }

  const handleHelp = () => {
    const helpText = `
╔════════════════════════════════════════════════════════════╗
║                  COMMANDES DISPONIBLES                     ║
╚════════════════════════════════════════════════════════════╝

NAVIGATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ls, dir          Liste le contenu du répertoire actuel
  cd [nom]         Entre dans un dossier
  cd ..            Remonte d'un niveau
  cd ~ ou cd \\     Retour à la racine
  pwd              Affiche le chemin actuel

AFFICHAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  cat [nom]        Affiche le contenu d'un élément
  clear, cls       Efface l'écran

INFORMATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  whoami           Affiche des informations sur moi
  Get-Help, help   Affiche cette aide

ASTUCES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ↑ ↓              Parcourir l'historique des commandes

Commencez par 'ls' pour voir les sections disponibles !
    `
    setHistory(prev => [...prev, { type: 'info', content: helpText }])
  }

  const handleWhoami = () => {
    const whoamiText = `
╔════════════════════════════════════════════════════════════╗
║                    MAXENCE FERIAU                          ║
║          Développeur Concepteur Web & Mobile               ║
╚════════════════════════════════════════════════════════════╝

📍 Localisation   France
💼 Expérience     8 mois chez AKKODIS France
🎓 Diplômes       DWWM + Concepteur Développeur d'Applications
🚀 Objectif       Formation DevOps

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STACK TECHNIQUE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Frontend   React • Vue.js • Next.js • TypeScript • Tailwind
Backend    Node.js • Java • Spring Boot • PHP • Symfony
Database   MongoDB • PostgreSQL • MySQL
DevOps     Docker • Portainer • Proxmox • Git • Azure DevOps
Tools      VS Code • IntelliJ • Postman • Claude AI

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"Passionné par la création d'applications web et mobile,
 et l'utilisation de l'IA pour booster la productivité."

📧 maxence.feriau@gmail.com
💻 github.com/MaxenceFeriau01
💼 linkedin.com/in/maxence-feriau-a7090a336
    `
    setHistory(prev => [...prev, { type: 'info', content: whoamiText }])
  }

  const handleCat = (target) => {
    if (!target) {
      setHistory(prev => [...prev, { type: 'error', content: 'cat : Spécifiez un élément à afficher' }])
      return
    }

    const current = getCurrentDirectory()
    if (current.children && current.children[target]) {
      const item = current.children[target]
      if (item.content) {
        setHistory(prev => [...prev, { type: 'output', content: item.content }])
      } else {
        setHistory(prev => [...prev, { type: 'error', content: `'${target}' est un répertoire. Utilisez 'cd ${target}' puis 'ls'.` }])
      }
    } else {
      setHistory(prev => [...prev, { type: 'error', content: `cat : Impossible de trouver '${target}'.` }])
    }
  }

  const handlePwd = () => {
    setHistory(prev => [...prev, { type: 'output', content: `C:\\Portfolio\\${currentPath.join('\\')}` }])
  }

  const handleKeyDown = (e) => {
    // Historique des commandes
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1)
          setInput('')
        } else {
          setHistoryIndex(newIndex)
          setInput(commandHistory[newIndex])
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      // TODO: Autocomplétion
    } else if (e.key === 'Enter') {
      executeCommand(input)
    }
  }

  const getLineColor = (type) => {
    switch (type) {
      case 'command': return 'text-white'
      case 'output': return 'text-gray-300'
      case 'error': return 'text-red-400'
      case 'info': return 'text-cyan-400'
      case 'system': return 'text-teal-400'
      default: return 'text-gray-300'
    }
  }

  return (
    <div className="min-h-screen bg-[#012456] flex flex-col font-mono">
      {/* Terminal Output */}
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto p-6 space-y-1"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((line, index) => (
          <div key={index} className={`${getLineColor(line.type)} whitespace-pre-wrap break-words`}>
            {line.content}
          </div>
        ))}

        {/* Current Input Line */}
        <div className="flex items-center gap-2">
          <span className="text-yellow-300">{getPrompt()}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-white caret-white"
            autoFocus
            spellCheck={false}
          />
        </div>
        {/* Ref pour auto-scroll */}
        <div ref={bottomRef} />
      </div>

      {/* Bottom Help Bar */}
      <div className="bg-[#001a3d] border-t border-cyan-500/30 px-6 py-2 text-xs text-gray-400 flex justify-between">
        <span>PowerShell Portfolio v2.0 - Maxence Feriau</span>
        <span>Tapez "Get-Help" pour l'aide • ↑↓ Historique</span>
      </div>
    </div>
  )
}

export default Terminal
