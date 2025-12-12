import './About.css'

const About = () => {
  const competences = [
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'JavaScript', level: 90, category: 'Frontend' },
    { name: 'Python', level: 80, category: 'Backend' },
    { name: 'PostgreSQL', level: 75, category: 'Base de données' },
    { name: 'MongoDB', level: 70, category: 'Base de données' },
    { name: 'Express.js', level: 85, category: 'Backend' },
    { name: 'HTML/CSS', level: 90, category: 'Frontend' },
    { name: 'React', level: 75, category: 'Frontend' },
    { name: 'Cybersécurité', level: 70, category: 'Sécurité' },
    { name: 'Make (Integromat)', level: 80, category: 'Automatisation' },
    { name: 'n8n', level: 75, category: 'Automatisation' },
    { name: 'Debian/Windows', level: 75, category: 'Administration' }
  ]

  const competencesParCategorie = competences.reduce((acc, comp) => {
    if (!acc[comp.category]) {
      acc[comp.category] = []
    }
    acc[comp.category].push(comp)
    return acc
  }, {})

  return (
    <div className="about">
      <section className="section hero-about">
        <div className="container">
          <h1 className="section-title">À propos de moi</h1>
          <p className="section-subtitle">
            Découvrez mon parcours, mes compétences et mon expérience
          </p>
        </div>
      </section>

      {/* Parcours */}
      <section className="section parcours">
        <div className="container">
          <h2 className="section-title">Parcours scolaire</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2024 - 2026</div>
              <div className="timeline-content">
                <h3>BTS SIO - Option SLAM</h3>
                <p className="timeline-location">[Nom de l'établissement]</p>
                <p>
                  Formation en Services Informatiques aux Organisations, spécialité Solutions Logicielles 
                  et Applications Métier. Acquisition de compétences en développement, bases de données, 
                  cybersécurité et gestion de projet.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2022 - 2024</div>
              <div className="timeline-content">
                <h3>Baccalauréat</h3>
                <p className="timeline-location">[Spécialité]</p>
                <p>
                  Obtention du baccalauréat avec mention [mention si applicable]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences techniques */}
      <section className="section competences">
        <div className="container">
          <h2 className="section-title">Compétences techniques</h2>
          <p className="section-subtitle">
            Technologies et outils que je maîtrise
          </p>
          
          {Object.entries(competencesParCategorie).map(([category, comps]) => (
            <div key={category} className="competence-category">
              <h3 className="category-title">{category}</h3>
              <div className="competences-grid">
                {comps.map((comp) => (
                  <div key={comp.name} className="competence-card">
                    <div className="competence-header">
                      <span className="competence-name">{comp.name}</span>
                      <span className="competence-level">{comp.level}%</span>
                    </div>
                    <div className="competence-bar">
                      <div 
                        className="competence-bar-fill" 
                        style={{ width: `${comp.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Travail en équipe */}
      <section className="section team-work">
        <div className="container">
          <h2 className="section-title">Expérience en équipe</h2>
          <div className="team-project">
            <div className="team-project-content">
              <h3>Projet Demosec</h3>
              <p className="team-project-role">
                <strong>Rôle :</strong> Développeur & Responsable sécurité
              </p>
              <p>
                Participation active au développement d'une plateforme de cybersécurité en collaboration 
                avec <strong>3 associés et 1 actionnaire</strong>. Ce projet m'a permis de développer 
                mes compétences en :
              </p>
              <ul className="team-skills">
                <li>Gestion de projet en équipe</li>
                <li>Architecture et structuration d'applications</li>
                <li>Cybersécurité et tests de pénétration</li>
                <li>Communication et coordination</li>
                <li>Développement collaboratif (Git, workflows)</li>
              </ul>
              <p>
                Cette expérience a renforcé ma capacité à travailler en équipe, à gérer les délais 
                et à prendre des décisions techniques en concertation avec les autres membres du projet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Soft skills */}
      <section className="section soft-skills">
        <div className="container">
          <h2 className="section-title">Compétences transversales</h2>
          <div className="soft-skills-grid">
            <div className="soft-skill-card">
              <div className="soft-skill-icon">🤝</div>
              <h3>Travail en équipe</h3>
              <p>Expérience sur projet collaboratif (Demosec)</p>
            </div>
            <div className="soft-skill-card">
              <div className="soft-skill-icon">📋</div>
              <h3>Gestion de projet</h3>
              <p>Planification, organisation, respect des délais</p>
            </div>
            <div className="soft-skill-card">
              <div className="soft-skill-icon">💡</div>
              <h3>Résolution de problèmes</h3>
              <p>Analyse, conception, implémentation de solutions</p>
            </div>
            <div className="soft-skill-card">
              <div className="soft-skill-icon">📚</div>
              <h3>Veille technologique</h3>
              <p>Autoformation continue, documentation</p>
            </div>
            <div className="soft-skill-card">
              <div className="soft-skill-icon">🔒</div>
              <h3>Sécurité</h3>
              <p>Sensibilisation aux bonnes pratiques</p>
            </div>
            <div className="soft-skill-card">
              <div className="soft-skill-icon">⚡</div>
              <h3>Automatisation</h3>
              <p>Optimisation des processus avec Make, n8n</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

