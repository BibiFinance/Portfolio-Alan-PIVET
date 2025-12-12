import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 'simplifiedaction',
      title: 'SimplifiedAction',
      category: 'Application Web Full-Stack',
      description: 'Plateforme d\'indicateurs financiers destinée aux débutants et aux professionnels, avec mode PRO, newsletter automatisée et paiement intégré.',
      objectives: [
        'Créer une plateforme accessible pour l\'analyse financière',
        'Implémenter un système de paiement sécurisé',
        'Développer un mode PRO avec fonctionnalités avancées',
        'Automatiser l\'envoi de newsletters',
        'Sécuriser les clés API (Finnhub)'
      ],
      competences: [
        'Développement web (Node.js, Express)',
        'Bases de données (PostgreSQL)',
        'APIs REST',
        'Intégration de paiement (Stripe)',
        'Sécurité des applications',
        'Automatisation (Make)',
        'Déploiement (Oracle Free Tier)'
      ],
      stack: [
        'Node.js', 'Express.js', 'JavaScript', 'PostgreSQL', 
        'Stripe API', 'Finnhub API', 'Mailersend', 'Make', 
        'HTML/CSS', 'Oracle Cloud'
      ],
      features: [
        'Interface utilisateur intuitive',
        'Mode PRO avec scores financiers avancés',
        'Système de paiement Stripe intégré',
        'Newsletter automatisée',
        'Base de données obligatoire pour les utilisateurs',
        'Protection des clés API côté serveur',
        'Hébergement sur Oracle Free Tier'
      ],
      github: 'https://github.com/[votre-repo]/SimplifiedAction',
      demo: 'https://simplifiedaction.example.com'
    },
    {
      id: 'agent-ia-cv',
      title: 'Agent IA de génération de CV',
      category: 'Automatisation & IA',
      description: 'Workflow automatisé de génération et d\'envoi de CV via IA, intégrant Tally, Make, GPT, pdflayer et Mailersend.',
      objectives: [
        'Automatiser la génération de CV personnalisés',
        'Intégrer l\'IA pour la création de contenu',
        'Automatiser l\'envoi par email',
        'Gérer les paiements via Stripe'
      ],
      competences: [
        'Automatisation (Make, n8n)',
        'Intégration d\'APIs (OpenAI GPT, pdflayer, Mailersend)',
        'Gestion de formulaires (Tally)',
        'Intégration de paiement (Stripe)',
        'Workflows automatisés'
      ],
      stack: [
        'Make (ex-Integromat)', 'OpenAI GPT', 'pdflayer API', 
        'Mailersend', 'Tally', 'Stripe API'
      ],
      features: [
        'Formulaire Tally pour collecte d\'informations',
        'Génération de CV via GPT',
        'Conversion en PDF via pdflayer',
        'Envoi automatisé par email',
        'Paiement intégré via Stripe',
        'Workflow entièrement automatisé'
      ],
      github: 'https://github.com/[votre-repo]/agent-ia-cv',
      demo: '#'
    },
    {
      id: 'demosec',
      title: 'Demosec',
      category: 'Cybersécurité & Équipe',
      description: 'Plateforme de cybersécurité développée en équipe (3 associés + 1 actionnaire) avec pentest, portail client et commandes en ligne.',
      objectives: [
        'Développer une plateforme de services cybersécurité',
        'Implémenter des tests de pénétration',
        'Créer un portail client sécurisé',
        'Gérer les commandes en ligne',
        'Structurer une architecture sécurisée'
      ],
      competences: [
        'Cybersécurité (pentest)',
        'Développement web sécurisé',
        'Travail en équipe',
        'Gestion de projet',
        'Architecture d\'applications',
        'Bases de données',
        'Sécurisation des applications'
      ],
      stack: [
        'Node.js', 'Express.js', 'PostgreSQL', 'JavaScript',
        'Outils de pentest', 'HTML/CSS', 'Git'
      ],
      features: [
        'Portail client sécurisé',
        'Système de commandes en ligne',
        'Tests de pénétration',
        'Rapports de sécurité',
        'Gestion des utilisateurs',
        'Architecture modulaire et sécurisée'
      ],
      github: 'https://github.com/[votre-repo]/Demosec',
      demo: 'https://demosec.example.com',
      team: true,
      teamSize: '4 personnes (3 associés + 1 actionnaire)'
    },
    {
      id: 'crud-api',
      title: 'Application CRUD avec API REST',
      category: 'Développement Backend',
      description: 'Application de gestion avec opérations CRUD complètes et API REST documentée.',
      objectives: [
        'Implémenter les opérations CRUD',
        'Créer une API REST complète',
        'Gérer les relations entre entités',
        'Documenter l\'API'
      ],
      competences: [
        'Développement backend',
        'APIs REST',
        'Bases de données',
        'Documentation technique'
      ],
      stack: [
        'Node.js', 'Express.js', 'PostgreSQL', 'JavaScript'
      ],
      features: [
        'CRUD complet',
        'API REST documentée',
        'Gestion des erreurs',
        'Validation des données',
        'Relations entre entités'
      ],
      github: 'https://github.com/[votre-repo]/crud-api',
      demo: '#'
    }
  ]

  return (
    <div className="projects">
      <section className="section hero-projects">
        <div className="container">
          <h1 className="section-title">Mes Projets</h1>
          <p className="section-subtitle">
            Découvrez les projets que j'ai développés dans le cadre du BTS SIO SLAM
          </p>
        </div>
      </section>

      <section className="section projects-list">
        <div className="container">
          {projects.map((project, index) => (
            <article key={project.id} id={project.id} className="project-detail">
              <div className="project-header">
                <div className="project-image-placeholder">
                  <span>{project.title}</span>
                </div>
                <div className="project-header-content">
                  <div className="project-badge">{project.category}</div>
                  <h2>{project.title}</h2>
                  <p className="project-description">{project.description}</p>
                  {project.team && (
                    <div className="project-team-badge">
                      👥 Projet en équipe - {project.teamSize}
                    </div>
                  )}
                </div>
              </div>

              <div className="project-content">
                <div className="project-section">
                  <h3>🎯 Objectifs</h3>
                  <ul className="project-list">
                    {project.objectives.map((obj, i) => (
                      <li key={i}>{obj}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-section">
                  <h3>💼 Compétences mobilisées (Référentiel E5)</h3>
                  <div className="competences-badges">
                    {project.competences.map((comp, i) => (
                      <span key={i} className="competence-badge">{comp}</span>
                    ))}
                  </div>
                </div>

                <div className="project-section">
                  <h3>🛠️ Stack technique</h3>
                  <div className="stack-badges">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="stack-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-section">
                  <h3>✨ Fonctionnalités</h3>
                  <ul className="project-list">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-section">
                  <h3>📸 Captures d'écran</h3>
                  <div className="screenshots-grid">
                    <div className="screenshot-placeholder">
                      <span>Capture 1</span>
                    </div>
                    <div className="screenshot-placeholder">
                      <span>Capture 2</span>
                    </div>
                    <div className="screenshot-placeholder">
                      <span>Capture 3</span>
                    </div>
                  </div>
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    📦 Code GitHub
                  </a>
                  {project.demo !== '#' && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                      🌐 Voir la démo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Projects

