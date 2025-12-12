import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content fade-in">
            <div className="hero-image">
              <div className="image-placeholder">
                <span>Photo</span>
              </div>
            </div>
            <div className="hero-text">
              <h1 className="hero-title">
                Bonjour, je suis <span className="highlight">PIVET Alan</span>
              </h1>
              <p className="hero-subtitle">
                Étudiant en <strong>BTS SIO - Option SLAM</strong>
              </p>
              <p className="hero-description">
                Passionné par le développement web, les bases de données et la cybersécurité.
                Je conçois et développe des solutions informatiques modernes et sécurisées.
              </p>
              <div className="hero-cta">
                <Link to="/projects" className="btn btn-primary">
                  Voir mes projets
                </Link>
                <Link to="/e5" className="btn btn-secondary">
                  Dossier E5
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences clés */}
      <section className="section skills-preview">
        <div className="container">
          <h2 className="section-title">Compétences principales</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">💻</div>
              <h3>Développement Web</h3>
              <p>Node.js, JavaScript, Express, APIs REST</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🐍</div>
              <h3>Python</h3>
              <p>Scripts, automatisation, calcul matriciel</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🗄️</div>
              <h3>Bases de données</h3>
              <p>PostgreSQL, MongoDB, SQL</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🔒</div>
              <h3>Cybersécurité</h3>
              <p>Pentest, sécurisation d'applications</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">⚙️</div>
              <h3>Automatisation</h3>
              <p>Make, n8n, workflows</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">☁️</div>
              <h3>Administration</h3>
              <p>Windows, Debian, déploiement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projets en vedette */}
      <section className="section featured-projects">
        <div className="container">
          <h2 className="section-title">Projets en vedette</h2>
          <p className="section-subtitle">
            Découvrez mes principaux projets développés dans le cadre du BTS SIO
          </p>
          <div className="projects-preview">
            <div className="project-card">
              <div className="project-image-placeholder">
                <span>SimplifiedAction</span>
              </div>
              <div className="project-info">
                <h3>SimplifiedAction</h3>
                <p>Plateforme d'indicateurs financiers avec mode PRO, newsletter et paiement Stripe</p>
                <Link to="/projects#simplifiedaction" className="btn btn-outline">
                  En savoir plus →
                </Link>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image-placeholder">
                <span>Demosec</span>
              </div>
              <div className="project-info">
                <h3>Demosec</h3>
                <p>Plateforme cybersécurité avec pentest, portail client et commandes en ligne</p>
                <Link to="/projects#demosec" className="btn btn-outline">
                  En savoir plus →
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/projects" className="btn btn-primary">
              Voir tous les projets
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

