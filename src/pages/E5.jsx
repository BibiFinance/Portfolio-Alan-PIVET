import './E5.css'

const E5 = () => {
  const competencesE5 = [
    {
      code: 'C1.1.1',
      libelle: 'Maquetter une application',
      niveau: 'Maîtrisé',
      projets: ['SimplifiedAction', 'Demosec'],
      justification: 'Création de maquettes pour l\'interface utilisateur et les parcours utilisateurs'
    },
    {
      code: 'C1.1.2',
      libelle: 'Concevoir une base de données',
      niveau: 'Maîtrisé',
      projets: ['SimplifiedAction', 'Demosec', 'CRUD API'],
      justification: 'Conception de schémas de base de données (MCD, MLD) pour PostgreSQL et MongoDB'
    },
    {
      code: 'C1.1.3',
      libelle: 'Mettre en place une base de données',
      niveau: 'Maîtrisé',
      projets: ['SimplifiedAction', 'Demosec'],
      justification: 'Implémentation et administration de bases de données PostgreSQL'
    },
    {
      code: 'C1.1.4',
      libelle: 'Développer une interface utilisateur',
      niveau: 'Maîtrisé',
      projets: ['SimplifiedAction', 'Demosec'],
      justification: 'Développement d\'interfaces web responsive avec HTML/CSS/JavaScript'
    },
    {
      code: 'C1.1.5',
      libelle: 'Développer des composants d\'accès aux données',
      niveau: 'Maîtrisé',
      projets: ['SimplifiedAction', 'Demosec', 'CRUD API'],
      justification: 'Développement de modèles et contrôleurs pour l\'accès aux données'
    },
    {
      code: 'C1.1.6',
      libelle: 'Développer la partie back-end d\'une application web',
      niveau: 'Maîtrisé',
      projets: ['SimplifiedAction', 'Demosec', 'Agent IA CV'],
      justification: 'Développement d\'APIs REST avec Node.js et Express.js'
    },
    {
      code: 'C1.1.7',
      libelle: 'Élaborer et mettre en œuvre des composants dans une application de gestion de contenu',
      niveau: 'En cours',
      projets: ['SimplifiedAction'],
      justification: 'Développement de composants réutilisables et modulaires'
    },
    {
      code: 'C1.2.1',
      libelle: 'Collaborer à la gestion d\'un projet informatique',
      niveau: 'Maîtrisé',
      projets: ['Demosec'],
      justification: 'Participation active au projet Demosec en équipe (3 associés + 1 actionnaire)'
    },
    {
      code: 'C1.2.2',
      libelle: 'Concevoir une application',
      niveau: 'Maîtrisé',
      projets: ['SimplifiedAction', 'Demosec'],
      justification: 'Conception complète d\'applications avec architecture et diagrammes'
    },
    {
      code: 'C1.2.3',
      libelle: 'Développer des applications communicantes',
      niveau: 'Maîtrisé',
      projets: ['SimplifiedAction', 'Agent IA CV'],
      justification: 'Intégration d\'APIs externes (Stripe, Finnhub, Mailersend, OpenAI)'
    },
    {
      code: 'C1.2.4',
      libelle: 'Développer une application mobile',
      niveau: 'Non traité',
      projets: [],
      justification: 'Non applicable dans le cadre des projets réalisés'
    },
    {
      code: 'C1.3.1',
      libelle: 'Mettre en place son environnement d\'apprentissage personnel',
      niveau: 'Maîtrisé',
      projets: ['Tous'],
      justification: 'Configuration d\'environnements de développement, utilisation de Git, documentation'
    },
    {
      code: 'C1.3.2',
      libelle: 'Mettre en œuvre des outils et stratégies de veille informationnelle',
      niveau: 'Maîtrisé',
      projets: ['Tous'],
      justification: 'Veille technologique, documentation, utilisation de ressources en ligne'
    },
    {
      code: 'C1.3.3',
      libelle: 'Gérer son identité professionnelle',
      niveau: 'Maîtrisé',
      projets: ['Portfolio'],
      justification: 'Création et mise à jour du portfolio, présence professionnelle'
    },
    {
      code: 'C1.3.4',
      libelle: 'Développer son projet professionnel',
      niveau: 'Maîtrisé',
      projets: ['Portfolio', 'Tous'],
      justification: 'Définition d\'objectifs professionnels, développement de compétences'
    },
    {
      code: 'C2.1.1',
      libelle: 'Installer un poste de développement',
      niveau: 'Maîtrisé',
      projets: ['Tous'],
      justification: 'Configuration d\'environnements Windows et Debian, outils de développement'
    },
    {
      code: 'C2.1.2',
      libelle: 'Développer des applications informatiques simples',
      niveau: 'Maîtrisé',
      projets: ['CRUD API', 'SimplifiedAction'],
      justification: 'Développement d\'applications complètes avec frontend et backend'
    },
    {
      code: 'C2.2.1',
      libelle: 'Analyser un besoin exprimé',
      niveau: 'Maîtrisé',
      projets: ['SimplifiedAction', 'Demosec'],
      justification: 'Analyse des besoins utilisateurs, rédaction de cahiers des charges'
    },
    {
      code: 'C2.2.2',
      libelle: 'Élaborer un dossier de choix de solution technique',
      niveau: 'Maîtrisé',
      projets: ['SimplifiedAction', 'Demosec'],
      justification: 'Comparaison de solutions techniques, choix argumentés'
    },
    {
      code: 'C2.2.3',
      libelle: 'Développer des composants métier',
      niveau: 'Maîtrisé',
      projets: ['SimplifiedAction', 'Demosec'],
      justification: 'Développement de logique métier, algorithmes, traitements'
    },
    {
      code: 'C2.2.4',
      libelle: 'Construire une application organisée en couches',
      niveau: 'Maîtrisé',
      projets: ['SimplifiedAction', 'Demosec'],
      justification: 'Architecture en couches (présentation, logique métier, données)'
    },
    {
      code: 'C2.3.1',
      libelle: 'Mettre en œuvre des mécanismes de sécurité',
      niveau: 'Maîtrisé',
      projets: ['SimplifiedAction', 'Demosec'],
      justification: 'Sécurisation des applications, protection des clés API, authentification'
    },
    {
      code: 'C2.3.2',
      libelle: 'Mettre en œuvre des mécanismes d\'authentification',
      niveau: 'Maîtrisé',
      projets: ['SimplifiedAction', 'Demosec'],
      justification: 'Implémentation de systèmes d\'authentification et d\'autorisation'
    },
    {
      code: 'C2.3.3',
      libelle: 'Gérer les droits d\'accès',
      niveau: 'Maîtrisé',
      projets: ['SimplifiedAction', 'Demosec'],
      justification: 'Gestion des rôles et permissions utilisateurs'
    },
    {
      code: 'C2.4.1',
      libelle: 'Concevoir et mettre en place une base de données',
      niveau: 'Maîtrisé',
      projets: ['SimplifiedAction', 'Demosec'],
      justification: 'Conception et implémentation de bases de données relationnelles'
    },
    {
      code: 'C2.4.2',
      libelle: 'Mettre en œuvre des mécanismes de stockage de données',
      niveau: 'Maîtrisé',
      projets: ['SimplifiedAction', 'Demosec'],
      justification: 'Gestion du stockage, requêtes SQL, optimisation'
    },
    {
      code: 'C2.4.3',
      libelle: 'Mettre en œuvre des mécanismes de gestion de données',
      niveau: 'Maîtrisé',
      projets: ['SimplifiedAction', 'Demosec'],
      justification: 'CRUD complet, gestion des transactions, intégrité des données'
    },
    {
      code: 'C2.5.1',
      libelle: 'Recenser et identifier les ressources numériques',
      niveau: 'Maîtrisé',
      projets: ['Tous'],
      justification: 'Identification et utilisation de ressources numériques pertinentes'
    },
    {
      code: 'C2.5.2',
      libelle: 'Traiter des demandes concernant les applications',
      niveau: 'Maîtrisé',
      projets: ['SimplifiedAction', 'Demosec'],
      justification: 'Support utilisateur, résolution de problèmes, maintenance'
    },
    {
      code: 'C2.5.3',
      libelle: 'Développer la présence en ligne de l\'organisation',
      niveau: 'Maîtrisé',
      projets: ['SimplifiedAction', 'Demosec'],
      justification: 'Déploiement d\'applications web, hébergement, SEO'
    },
    {
      code: 'C2.5.4',
      libelle: 'Référencer les services en ligne de l\'organisation',
      niveau: 'En cours',
      projets: ['SimplifiedAction'],
      justification: 'Optimisation SEO, référencement des services'
    },
    {
      code: 'C2.5.5',
      libelle: 'Mettre en œuvre une solution de veille informationnelle',
      niveau: 'Maîtrisé',
      projets: ['SimplifiedAction'],
      justification: 'Mise en place de systèmes de veille et d\'alertes'
    }
  ]

  const projetsEvaluables = [
    {
      nom: 'SimplifiedAction',
      description: 'Plateforme d\'indicateurs financiers',
      competences: ['C1.1.1', 'C1.1.2', 'C1.1.3', 'C1.1.4', 'C1.1.5', 'C1.1.6', 'C2.2.1', 'C2.2.2', 'C2.2.3', 'C2.2.4', 'C2.3.1', 'C2.3.2', 'C2.4.1', 'C2.4.2', 'C2.4.3'],
      livrables: ['Code source', 'Documentation', 'Diagrammes', 'Base de données', 'Déploiement']
    },
    {
      nom: 'Demosec',
      description: 'Plateforme cybersécurité',
      competences: ['C1.1.1', 'C1.1.2', 'C1.1.3', 'C1.1.4', 'C1.1.5', 'C1.1.6', 'C1.2.1', 'C2.2.1', 'C2.2.2', 'C2.2.3', 'C2.2.4', 'C2.3.1', 'C2.3.2', 'C2.3.3'],
      livrables: ['Code source', 'Documentation', 'Rapports de sécurité', 'Architecture', 'Tests']
    },
    {
      nom: 'Agent IA de génération de CV',
      description: 'Workflow automatisé',
      competences: ['C1.1.6', 'C1.2.3', 'C2.2.1', 'C2.2.2'],
      livrables: ['Workflow Make', 'Documentation', 'Intégrations APIs']
    }
  ]

  return (
    <div className="e5">
      <section className="section hero-e5">
        <div className="container">
          <h1 className="section-title">Dossier E5</h1>
          <p className="section-subtitle">
            Conception et maintenance de solutions informatiques - Référentiel BTS SIO SLAM
          </p>
        </div>
      </section>

      {/* Tableau des compétences */}
      <section className="section competences-table">
        <div className="container">
          <h2 className="section-title">Tableau des compétences</h2>
          <p className="section-subtitle">
            Compétences du référentiel BTS SIO et leur niveau de maîtrise
          </p>
          
          <div className="table-wrapper">
            <table className="competences-table-content">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Libellé</th>
                  <th>Niveau</th>
                  <th>Projets</th>
                  <th>Justification</th>
                </tr>
              </thead>
              <tbody>
                {competencesE5.map((comp, index) => (
                  <tr key={index}>
                    <td className="code-cell">{comp.code}</td>
                    <td className="libelle-cell">{comp.libelle}</td>
                    <td>
                      <span className={`niveau-badge niveau-${comp.niveau.toLowerCase().replace(' ', '-')}`}>
                        {comp.niveau}
                      </span>
                    </td>
                    <td className="projets-cell">
                      {comp.projets.length > 0 ? comp.projets.join(', ') : '-'}
                    </td>
                    <td className="justification-cell">{comp.justification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Projets évaluables */}
      <section className="section projets-evaluables">
        <div className="container">
          <h2 className="section-title">Projets évaluables</h2>
          <p className="section-subtitle">
            Projets présentés pour l'épreuve E5
          </p>
          
          <div className="projets-evaluables-grid">
            {projetsEvaluables.map((projet, index) => (
              <div key={index} className="projet-evaluable-card">
                <h3>{projet.nom}</h3>
                <p className="projet-evaluable-description">{projet.description}</p>
                
                <div className="projet-evaluable-section">
                  <h4>Compétences mobilisées :</h4>
                  <div className="competences-codes">
                    {projet.competences.map((code, i) => (
                      <span key={i} className="competence-code">{code}</span>
                    ))}
                  </div>
                </div>

                <div className="projet-evaluable-section">
                  <h4>Livrables :</h4>
                  <ul className="livrables-list">
                    {projet.livrables.map((livrable, i) => (
                      <li key={i}>{livrable}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annexes */}
      <section className="section annexes">
        <div className="container">
          <h2 className="section-title">Annexes</h2>
          <p className="section-subtitle">
            Documents complémentaires et ressources
          </p>
          
          <div className="annexes-grid">
            <div className="annexe-card">
              <div className="annexe-icon">📄</div>
              <h3>Documentation technique</h3>
              <p>Cahiers des charges, spécifications fonctionnelles</p>
              <div className="annexe-placeholder">[Fichiers PDF]</div>
            </div>
            
            <div className="annexe-card">
              <div className="annexe-icon">📊</div>
              <h3>Diagrammes</h3>
              <p>MCD, MLD, diagrammes de séquence, architecture</p>
              <div className="annexe-placeholder">[Images PNG/JPG]</div>
            </div>
            
            <div className="annexe-card">
              <div className="annexe-icon">💻</div>
              <h3>Code source</h3>
              <p>Repositories GitHub des projets</p>
              <div className="annexe-placeholder">[Liens GitHub]</div>
            </div>
            
            <div className="annexe-card">
              <div className="annexe-icon">🧪</div>
              <h3>Tests</h3>
              <p>Rapports de tests, validation fonctionnelle</p>
              <div className="annexe-placeholder">[Documents]</div>
            </div>
            
            <div className="annexe-card">
              <div className="annexe-icon">🔒</div>
              <h3>Sécurité</h3>
              <p>Rapports de sécurité, analyses de vulnérabilités</p>
              <div className="annexe-placeholder">[Rapports]</div>
            </div>
            
            <div className="annexe-card">
              <div className="annexe-icon">📸</div>
              <h3>Captures d'écran</h3>
              <p>Interfaces utilisateur, fonctionnalités</p>
              <div className="annexe-placeholder">[Images]</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default E5

