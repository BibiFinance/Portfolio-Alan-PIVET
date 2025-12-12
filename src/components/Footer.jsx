import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Portfolio BTS SIO SLAM</h3>
            <p>Épreuve E5 - Conception et maintenance de solutions informatiques</p>
          </div>
          
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><a href="/">Accueil</a></li>
              <li><a href="/about">À propos</a></li>
              <li><a href="/projects">Projets</a></li>
              <li><a href="/e5">Dossier E5</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Liens</h4>
            <ul>
              <li><a href="https://github.com/BibiFinance/Portfolio-Alan-PIVET" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} PIVET Alan - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

