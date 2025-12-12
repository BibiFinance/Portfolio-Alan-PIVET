import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici, vous pouvez ajouter la logique d'envoi du formulaire
    // Pour l'instant, on simule juste l'envoi
    setFormStatus({ submitted: true, error: false })
    
    // Réinitialiser après 3 secondes
    setTimeout(() => {
      setFormStatus({ submitted: false, error: false })
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <div className="contact">
      <section className="section hero-contact">
        <div className="container">
          <h1 className="section-title">Contact</h1>
          <p className="section-subtitle">
            N'hésitez pas à me contacter pour toute question ou opportunité
          </p>
        </div>
      </section>

      <section className="section contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Formulaire de contact */}
            <div className="contact-form-wrapper">
              <h2>Envoyez-moi un message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nom complet *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Sujet *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Objet de votre message"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                {formStatus.submitted && (
                  <div className="form-success">
                    ✓ Message envoyé avec succès !
                  </div>
                )}

                {formStatus.error && (
                  <div className="form-error">
                    ✗ Une erreur est survenue. Veuillez réessayer.
                  </div>
                )}

                <button type="submit" className="btn btn-primary btn-submit">
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Informations de contact */}
            <div className="contact-info">
              <h2>Informations de contact</h2>
              
              <div className="contact-info-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:votre.email@example.com">votre.email@example.com</a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">💼</div>
                <div>
                  <h3>LinkedIn</h3>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/votre-profil
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">💻</div>
                <div>
                  <h3>GitHub</h3>
                  <a 
                    href="https://github.com/BibiFinance/Portfolio-Alan-PIVET" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    github.com/BibiFinance/Portfolio-Alan-PIVET
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">🎓</div>
                <div>
                  <h3>Formation</h3>
                  <p>BTS SIO - Option SLAM</p>
                  <p className="contact-subtext">[Nom de l'établissement]</p>
                </div>
              </div>

              <div className="contact-availability">
                <h3>Disponibilité</h3>
                <p>
                  Actuellement étudiant en BTS SIO, je suis disponible pour des 
                  projets, stages ou opportunités professionnelles dans le domaine 
                  du développement web et de la cybersécurité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

