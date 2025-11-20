const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Route principale
app.get('/', (req, res) => {
  res.json({ 
    message: '🚀 API Backend Portfolio',
    version: '1.0.0',
    status: 'Running'
  });
});

// Routes API
app.get('/api/projects', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Plateforme e-commerce complète avec React, Node.js et MongoDB',
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker', 'Stripe'],
      image: '🛒',
      github: 'https://github.com/username/ecommerce',
      demo: 'https://demo.com'
    },
    {
      id: 2,
      title: 'Social Media App',
      description: 'Application de réseau social avec messagerie en temps réel',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      image: '💬',
      github: 'https://github.com/username/social',
      demo: 'https://demo.com'
    },
    {
      id: 3,
      title: 'Dashboard Analytics',
      description: 'Tableau de bord analytique avec visualisation de données',
      technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
      image: '📊',
      github: 'https://github.com/username/dashboard',
      demo: 'https://demo.com'
    }
  ]);
});

app.get('/api/skills', (req, res) => {
  res.json({
    frontend: ['React', 'Vue.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    backend: ['Node.js', 'Express', 'Python', 'Django', 'Java', 'Spring Boot'],
    database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
    devops: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Git']
  });
});

app.get('/api/contact', (req, res) => {
  res.json({
    email: 'contact@example.com',
    github: 'https://github.com/username',
    linkedin: 'https://linkedin.com/in/username',
    twitter: 'https://twitter.com/username'
  });
});

// Route santé
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Une erreur est survenue!' });
});

// Démarrage du serveur
app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n🚀 Backend démarré avec succès!`);
  console.log(`📡 API disponible sur: http://localhost:${PORT}`);
  console.log(`🏥 Health check: http://localhost:${PORT}/api/health\n`);
});