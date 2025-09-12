
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '../../components/base/ThemeToggle';
import { JsonLd, generateServiceSchema, generateWebPageSchema, generateBreadcrumbSchema } from '../../components/seo/JsonLd';

export default function Missions() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Update page title and meta description
    document.title = "Nos Missions - Services de Conseil en Gestion de Projet | SICA CONSEIL";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Découvrez nos services d\'accompagnement en gestion de projet : conseil stratégique, PMO, formations certifiantes PMP, PRINCE2, transformation organisationnelle.');
    }
  }, []);

  const missions = [
    {
      id: 1,
      title: 'Conseil stratégique et cadrage de projet',
      description: 'Accompagnement pour définir votre vision projet et clarifier vos objectifs stratégiques',
      icon: 'ri-compass-3-line',
      color: 'bg-blue-500',
      image: 'https://readdy.ai/api/search-image?query=professional%20business%20executives%20meeting%20strategic%20planning%20corporate%20boardroom%20modern%20office%20environment%20charts%20graphs%20wall%20collaborative%20discussion%20project%20management%20consulting%20whiteboard%20presentation&width=400&height=250&seq=mission1-strategy&orientation=landscape',
      features: [
        'Définition de la vision projet',
        'Clarification des objectifs et KPI',
        'Études de faisabilité complètes',
        'Alignement stratégique'
      ],
      duration: '2-4 semaines',
      price: 'Sur devis'
    },
    {
      id: 2,
      title: 'Mise en place de méthodologies de gestion de projet',
      description: "Déploiement des référentiels reconnus adaptés à votre culture d'entreprise",
      icon: 'ri-settings-4-line',
      color: 'bg-orange-500',
      image: 'https://readdy.ai/api/search-image?query=project%20management%20methodology%20training%20session%20professional%20instructor%20teaching%20Agile%20Scrum%20PMBOK%20frameworks%20whiteboard%20diagrams%20corporate%20training%20room%20modern%20office%20business%20education&width=400&height=250&seq=mission2-methodology&orientation=landscape',
      features: [
        'PMBOK, Prince2, Agile, Lean Six Sigma',
        'Adaptation à votre contexte',
        'Formation des équipes',
        'Support méthodologique'
      ],
      duration: '1-3 mois',
      price: 'À partir de 2500€'
    },
    {
      id: 3,
      title: 'Pilotage opérationnel de projets et programmes',
      description: "Gestion complète du suivi de vos projets avec mise en place d'outils adaptés",
      icon: 'ri-dashboard-3-line',
      color: 'bg-purple-500',
      image: 'https://readdy.ai/api/search-image?query=PMO%20project%20management%20office%20multiple%20screens%20dashboards%20monitoring%20tools%20modern%20workspace%20professionals%20tracking%20project%20progress%20analytics%20charts%20data%20visualization%20control%20center%20technology&width=400&height=250&seq=mission3-operations&orientation=landscape',
      features: [
        'Rôle de PMO (Project Management Office)',
        'Suivi délais, budgets, livrables',
        'Outils MS Project, Jira, Trello, Asana',
        'Animation comités de pilotage'
      ],
      duration: '3-12 mois',
      price: 'Sur devis'
    },
    {
      id: 4,
      title: 'Accompagnement du changement',
      description: "Stratégies pour favoriser l'adhésion et développer une culture projet",
      icon: 'ri-team-line',
      color: 'bg-green-500',
      image: 'https://readdy.ai/api/search-image?query=change%20management%20workshop%20diverse%20team%20collaboration%20facilitator%20leading%20organizational%20transformation%20session%20modern%20conference%20room%20teamwork%20business%20culture%20development%20professional%20training&width=400&height=250&seq=mission4-change&orientation=landscape',
      features: [
        'Plans de conduite du changement',
        'Communication interne ciblée',
        'Formation et coaching équipes',
        'Développement culture projet'
      ],
      duration: '2-6 mois',
      price: 'À partir de 3000€'
    },
    {
      id: 5,
      title: 'Capitalisation et amélioration continue',
      description: 'Mise en place de systèmes pour améliorer votre maturité en gestion de projet',
      icon: 'ri-line-chart-line',
      color: 'bg-indigo-500',
      image: 'https://readdy.ai/api/search-image?query=knowledge%20management%20system%20continuous%20improvement%20business%20analytics%20team%20reviewing%20project%20lessons%20learned%20metrics%20performance%20data%20modern%20office%20environment%20professional%20documentation%20process%20optimization&width=400&height=250&seq=mission5-improvement&orientation=landscape',
      features: [
        "Organisation des retours d'expérience",
        'Gestion des connaissances',
        'Amélioration maturité projet',
        'Optimisation continue'
      ],
      duration: '1-4 mois',
      price: 'À partir de 2000€'
    },
    {
      id: 6,
      title: 'Services spécialisés selon les besoins',
      description: "Expertise sectorielle et thématique adaptée à vos enjeux spécifiques",
      icon: 'ri-tools-line',
      color: 'bg-pink-500',
      image: 'https://readdy.ai/api/search-image?query=digital%20transformation%20specialized%20services%20high-tech%20innovation%20laboratory%20advanced%20technology%20solutions%20modern%20business%20environment%20artificial%20intelligence%20cloud%20computing%20cybersecurity%20futuristic%20workspace%20professional%20consulting&width=400&height=250&seq=mission6-specialized&orientation=landscape',
      features: [
        'Digital & innovation (IA, cloud, cybersécurité)',
        'Organisation & gouvernance',
        'RSE & conformité (RGPD)',
        'Industrie & lean management'
      ],
      duration: 'Variable',
      price: 'Sur devis'
    }
  ];

  const testimonials = [
    {
      name: 'Marie Dubois',
      position: 'Chef de Projet IT',
      company: 'TechCorp',
      text: "Grâce à SICA CONSEIL, j'ai obtenu ma certification PMP en 3 mois. L'accompagnement était parfait !",
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=professional%20business%20woman%20smiling%20portrait%20headshot%20corporate%20attire%20confident%20friendly%20modern%20office%20background%20clean%20lighting&width=80&height=80&seq=testimonial1&orientation=squarish'
    },
    {
      name: 'Jean Martin',
      position: 'Directeur Technique',
      company: 'InnovSoft',
      text: "L'audit de nos processus a révolutionné notre façon de gérer les projets. ROI exceptionnel.",
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=professional%20business%20man%20smiling%20portrait%20headshot%20suit%20tie%20confident%20experienced%20mature%20modern%20office%20background%20clean%20lighting&width=80&height=80&seq=testimonial2&orientation=squarish'
    },
    {
      name: 'Sophie Laurent',
      position: 'PMO Manager',
      company: 'GlobalTech',
      text: "Formation sur mesure exceptionnelle. Nos équipes ont gagné en efficacité de 40%.",
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=professional%20business%20woman%20confident%20smile%20portrait%20headshot%20blazer%20corporate%20attire%20leadership%20modern%20office%20background%20clean%20lighting&width=80&height=80&seq=testimonial3&orientation=squarish'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* JSON-LD Schema */}
      <JsonLd data={generateWebPageSchema(
        "Nos Missions - Services de Conseil en Gestion de Projet",
        "Découvrez nos services d'accompagnement en gestion de projet : conseil stratégique, PMO, formations certifiantes PMP, PRINCE2, transformation organisationnelle.",
        "/missions"
      )} />
      <JsonLd data={generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Nos Missions", url: "/missions" }
      ])} />
      <JsonLd data={generateServiceSchema(
        "Conseil en Gestion de Projet",
        "Services complets d'accompagnement en gestion de projet, PMO, formations certifiantes et transformation organisationnelle",
        "2500"
      )} />

      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 px-4 py-3 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://static.readdy.ai/image/2ce43ce334b232046883f79f4f3df46a/b61b027bf4d42918b4ae2ae5a241e2c2.jfif" 
              alt="SICA CONSEIL" 
              className="h-10 w-auto cursor-pointer"
              onClick={() => navigate('/')}
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => navigate('/')} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors">Accueil</button>
            <button className="text-orange-500 font-medium cursor-pointer">Nos missions</button>
            <button onClick={() => navigate('/formations')} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors">Formations</button>
            <button onClick={() => navigate('/project-generator')} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors">Auto-génération de projets</button>
            <button onClick={() => navigate('/expertise')} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors">Notre expertise</button>
            <button onClick={() => navigate('/contact')} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors">Contact</button>
            <ThemeToggle />
            <button
              onClick={() => navigate('/login')}
              className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors"
            >
              Connexion
            </button>
            <button 
              onClick={() => navigate('/dashboard')}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 cursor-pointer whitespace-nowrap transition-colors"
            >
              Accès gratuit
            </button>
          </div>

          <button 
            className="md:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-2xl text-gray-600 dark:text-gray-300"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 dark:border-gray-800">
            <div className="flex flex-col space-y-3 pt-4">
              <button onClick={() => navigate('/')} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer text-left transition-colors">Accueil</button>
              <button className="text-orange-500 font-medium cursor-pointer text-left">Nos missions</button>
              <button onClick={() => navigate('/formations')} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer text-left transition-colors">Formations</button>
              <button onClick={() => navigate('/project-generator')} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer text-left transition-colors">Auto-génération de projets</button>
              <button onClick={() => navigate('/expertise')} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer text-left transition-colors">Notre expertise</button>
              <button onClick={() => navigate('/contact')} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer text-left transition-colors">Contact</button>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-300">Mode sombre</span>
                <ThemeToggle />
              </div>
              <button
                onClick={() => navigate('/login')}
                className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer text-left transition-colors"
              >
                Connexion
              </button>
              <button 
                onClick={() => navigate('/dashboard')}
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 cursor-pointer whitespace-nowrap w-fit transition-colors"
              >
                Accès gratuit
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        className="relative py-20 px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=modern%20business%20consulting%20team%20working%20together%20collaborative%20office%20environment%20project%20management%20charts%20graphs%20on%20wall%20professional%20atmosphere%20bright%20lighting%20corporate%20setting%20strategic%20planning&width=1920&height=600&seq=missions-hero&orientation=landscape')`
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nos Missions
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Découvrez nos services d'accompagnement personnalisés pour transformer votre approche de la gestion de projet
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 cursor-pointer whitespace-nowrap font-semibold transition-colors"
          >
            <i className="ri-mail-line mr-2"></i>
            Demander un devis gratuit
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">250+</div>
              <div className="text-gray-600 dark:text-gray-300 transition-colors">Missions réalisées</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">98%</div>
              <div className="text-gray-600 dark:text-gray-300 transition-colors">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-300 transition-colors">Années d'expérience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-300 transition-colors">Professionnels formés</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 transition-colors">Nos Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
              Des solutions sur mesure pour répondre à tous vos besoins en gestion de projet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missions.map((mission) => (
              <div key={mission.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-lg dark:hover:shadow-2xl transition-all">
                {/* Mission Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={mission.image} 
                    alt={mission.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 ${mission.color} rounded-lg flex items-center justify-center`}>
                      <i className={`${mission.icon} text-xl text-white`}></i>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 transition-colors">{mission.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors">{mission.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {mission.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700 dark:text-gray-300 text-sm transition-colors">
                        <i className="ri-check-line text-green-500 mr-3 text-base"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-6 transition-colors">
                    <span><i className="ri-time-line mr-1"></i>{mission.duration}</span>
                    <span className="font-semibold text-orange-500">{mission.price}</span>
                  </div>

                  <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 cursor-pointer whitespace-nowrap transition-colors">
                    <i className="ri-arrow-right-line mr-2"></i>
                    En savoir plus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 transition-colors">Notre Processus</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
              Une méthodologie éprouvée pour garantir le succès de vos projets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-orange-500">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 transition-colors">Analyse</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors">
                Audit complet de vos processus et identification des opportunités d'amélioration
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-orange-500">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 transition-colors">Stratégie</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors">
                Élaboration d'un plan d'action personnalisé adapté à vos besoins spécifiques
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-orange-500">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 transition-colors">Mise en œuvre</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors">
                Accompagnement dans l'implémentation des solutions avec formation des équipes
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-orange-500">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 transition-colors">Suivi</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors">
                Mesure de l'impact et optimisation continue pour maximiser les résultats
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 transition-colors">Témoignages Clients</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors">
              Découvrez ce que nos clients disent de nos services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 transition-colors">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className={`ri-star-fill text-yellow-500 ${i < testimonial.rating ? '' : 'text-gray-300'}`}></i>
                  ))}
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic transition-colors">"{testimonial.text}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-white transition-colors">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors">{testimonial.position} - {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formations Certifiantes Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6 transition-colors">
              Formations Certifiantes
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
              Développez vos compétences avec nos formations certifiantes reconnues mondialement
            </p>
          </div>

          {/* PMP Formation */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 mb-8 transition-colors">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📘</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white transition-colors">PMP (Project Management Professional)</h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors">Certification internationale de référence en gestion de projet</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors">E-learning</h4>
                  <i className="ri-computer-line text-blue-500 text-xl"></i>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors">Formation autonome avec accès 24/7 aux contenus</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600">1 490€</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors">35h de formation</span>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 cursor-pointer whitespace-nowrap transition-colors">
                  S'inscrire - E-learning
                </button>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors">Formation Assistée</h4>
                  <i className="ri-user-line text-blue-500 text-xl"></i>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors">Formation programmée avec instructeur expert</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600">2 490€</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors">5 jours intensifs</span>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 cursor-pointer whitespace-nowrap transition-colors">
                  S'inscrire - Avec Instructeur
                </button>
              </div>
            </div>
          </div>

          {/* CAPM Formation */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 mb-8 transition-colors">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📘</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white transition-colors">CAPM (Certified Associate in Project Management)</h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors">Certification d'entrée en gestion de projet du PMI</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors">E-learning</h4>
                  <i className="ri-computer-line text-blue-500 text-xl"></i>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors">Formation autonome avec accès 24/7 aux contenus</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600">890€</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors">23h de formation</span>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 cursor-pointer whitespace-nowrap transition-colors">
                  S'inscrire - E-learning
                </button>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors">Formation Assistée</h4>
                  <i className="ri-user-line text-blue-500 text-xl"></i>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors">Formation programmée avec instructeur expert</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600">1 490€</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors">3 jours intensifs</span>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 cursor-pointer whitespace-nowrap transition-colors">
                  S'inscrire - Avec Instructeur
                </button>
              </div>
            </div>
          </div>

          {/* PRINCE2 Formation */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 mb-8 transition-colors">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📗</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white transition-colors">PRINCE2</h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors">Méthode structurée de gestion de projet</p>
              </div>
            </div>
            
            {/* PRINCE2 Foundation */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">PRINCE2 Foundation</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors">E-learning</h5>
                    <i className="ri-computer-line text-green-500 text-xl"></i>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors">Formation autonome avec accès 24/7 aux contenus</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">990€</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors">21h de formation</span>
                  </div>
                  <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 cursor-pointer whitespace-nowrap transition-colors">
                    S'inscrire - E-learning
                  </button>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors">Formation Assistée</h5>
                    <i className="ri-user-line text-green-500 text-xl"></i>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors">Formation programmée avec instructeur expert</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">1 690€</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors">3 jours intensifs</span>
                  </div>
                  <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 cursor-pointer whitespace-nowrap transition-colors">
                    S'inscrire - Avec Instructeur
                  </button>
                </div>
              </div>
            </div>

            {/* PRINCE2 Practitioner */}
            <div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">PRINCE2 Practitioner</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors">E-learning</h5>
                    <i className="ri-computer-line text-green-500 text-xl"></i>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors">Formation autonome avec accès 24/7 aux contenus</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">1 290€</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors">28h de formation</span>
                  </div>
                  <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 cursor-pointer whitespace-nowrap transition-colors">
                    S'inscrire - E-learning
                  </button>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors">Formation Assistée</h5>
                    <i className="ri-user-line text-green-500 text-xl"></i>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors">Formation programmée avec instructeur expert</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">1 990€</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors">4 jours intensifs</span>
                  </div>
                  <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 cursor-pointer whitespace-nowrap transition-colors">
                    S'inscrire - Avec Instructeur
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* PSPO Formation */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 mb-8 transition-colors">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📙</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white transition-colors">PSPO (Professional Scrum Product Owner)</h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors">Certification Product Owner selon Scrum.org</p>
              </div>
            </div>
            
            {/* PSPO I */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">PSPO I</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors">E-learning</h5>
                    <i className="ri-computer-line text-yellow-600 text-xl"></i>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors">Formation autonome avec accès 24/7 aux contenus</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-yellow-600">790€</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors">16h de formation</span>
                  </div>
                  <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 cursor-pointer whitespace-nowrap transition-colors">
                    S'inscrire - E-learning
                  </button>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors">Formation Assistée</h5>
                    <i className="ri-user-line text-yellow-600 text-xl"></i>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors">Formation programmée avec instructeur expert</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-yellow-600">1 290€</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors">2 jours intensifs</span>
                  </div>
                  <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 cursor-pointer whitespace-nowrap transition-colors">
                    S'inscrire - Avec Instructeur
                  </button>
                </div>
              </div>
            </div>

            {/* PSPO II */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">PSPO II</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors">E-learning</h5>
                    <i className="ri-computer-line text-yellow-600 text-xl"></i>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors">Formation autonome avec accès 24/7 aux contenus</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-yellow-600">1 190€</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors">24h de formation</span>
                  </div>
                  <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 cursor-pointer whitespace-nowrap transition-colors">
                    S'inscrire - E-learning
                  </button>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors">Formation Assistée</h5>
                    <i className="ri-user-line text-yellow-600 text-xl"></i>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors">Formation programmée avec instructeur expert</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-yellow-600">1 790€</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors">3 jours intensifs</span>
                  </div>
                  <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 cursor-pointer whitespace-nowrap transition-colors">
                    S'inscrire - Avec Instructeur
                  </button>
                </div>
              </div>
            </div>

            {/* PSPO III */}
            <div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">PSPO III</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors">E-learning</h5>
                    <i className="ri-computer-line text-yellow-600 text-xl"></i>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors">Formation autonome avec accès 24/7 aux contenus</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-yellow-600">1 590€</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors">32h de formation</span>
                  </div>
                  <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 cursor-pointer whitespace-nowrap transition-colors">
                    S'inscrire - E-learning
                  </button>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors">Formation Assistée</h5>
                    <i className="ri-user-line text-yellow-600 text-xl"></i>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors">Formation programmée avec instructeur expert</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-yellow-600">2 290€</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors">4 jours intensifs</span>
                  </div>
                  <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 cursor-pointer whitespace-nowrap transition-colors">
                    S'inscrire - Avec Instructeur
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* PSM Formation */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 mb-8 transition-colors">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📙</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white transition-colors">PSM (Professional Scrum Master)</h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors">Certification Scrum Master selon Scrum.org</p>
              </div>
            </div>
            
            {/* PSM I */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">PSM I</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors">E-learning</h5>
                    <i className="ri-computer-line text-yellow-600 text-xl"></i>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors">Formation autonome avec accès 24/7 aux contenus</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-yellow-600">690€</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors">16h de formation</span>
                  </div>
                  <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 cursor-pointer whitespace-nowrap transition-colors">
                    S'inscrire - E-learning
                  </button>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors">Formation Assistée</h5>
                    <i className="ri-user-line text-yellow-600 text-xl"></i>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors">Formation programmée avec instructeur expert</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-yellow-600">1 190€</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors">2 jours intensifs</span>
                  </div>
                  <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 cursor-pointer whitespace-nowrap transition-colors">
                    S'inscrire - Avec Instructeur
                  </button>
                </div>
              </div>
            </div>

            {/* PSM II */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">PSM II</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors">E-learning</h5>
                    <i className="ri-computer-line text-yellow-600 text-xl"></i>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors">Formation autonome avec accès 24/7 aux contenus</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-yellow-600">1 090€</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors">24h de formation</span>
                  </div>
                  <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 cursor-pointer whitespace-nowrap transition-colors">
                    S'inscrire - E-learning
                  </button>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors">Formation Assistée</h5>
                    <i className="ri-user-line text-yellow-600 text-xl"></i>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors">Formation programmée avec instructeur expert</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-yellow-600">1 690€</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors">3 jours intensifs</span>
                  </div>
                  <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 cursor-pointer whitespace-nowrap transition-colors">
                    S'inscrire - Avec Instructeur
                  </button>
                </div>
              </div>
            </div>

            {/* PSM III */}
            <div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">PSM III</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors">E-learning</h5>
                    <i className="ri-computer-line text-yellow-600 text-xl"></i>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors">Formation autonome avec accès 24/7 aux contenus</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-yellow-600">1 490€</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors">32h de formation</span>
                  </div>
                  <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 cursor-pointer whitespace-nowrap transition-colors">
                    S'inscrire - E-learning
                  </button>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors">Formation Assistée</h5>
                    <i className="ri-user-line text-yellow-600 text-xl"></i>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors">Formation programmée avec instructeur expert</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-yellow-600">2 190€</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors">4 jours intensifs</span>
                  </div>
                  <button className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 cursor-pointer whitespace-nowrap transition-colors">
                    S'inscrire - Avec Instructeur
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Lean Six Sigma Formation */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 mb-8 transition-colors">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📕</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white transition-colors">Lean Six Sigma</h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors">Méthodologie d'amélioration continue et d'excellence opérationnelle</p>
              </div>
            </div>
            
            {/* LSSWB Gratuit */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">LSSWB (Lean Six Sigma White Belt)</h4>
              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors">Formation Gratuite</h5>
                  <i className="ri-gift-line text-red-500 text-xl"></i>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors">Introduction gratuite aux concepts fondamentaux du Lean Six Sigma</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-red-600">Gratuit</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors">8h de formation</span>
                </div>
                <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 cursor-pointer whitespace-nowrap transition-colors">
                  S'inscrire - Gratuit
                </button>
              </div>
            </div>

            {/* LSSYB */}
            <div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors">LSSYB (Lean Six Sigma Yellow Belt)</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors">E-learning</h5>
                    <i className="ri-computer-line text-red-500 text-xl"></i>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors">Formation autonome avec accès 24/7 aux contenus</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-red-600">590€</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors">16h de formation</span>
                  </div>
                  <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 cursor-pointer whitespace-nowrap transition-colors">
                    S'inscrire - E-learning
                  </button>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h5 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors">Formation Assistée</h5>
                    <i className="ri-user-line text-red-500 text-xl"></i>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors">Formation programmée avec instructeur expert</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-red-600">990€</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors">2 jours intensifs</span>
                  </div>
                  <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 cursor-pointer whitespace-nowrap transition-colors">
                    S'inscrire - Avec Instructeur
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-8 text-center transition-colors">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 transition-colors">
              Besoin d'aide pour choisir votre formation ?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors">
              Nos conseillers sont là pour vous accompagner dans le choix de la certification qui correspond à vos objectifs professionnels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 cursor-pointer whitespace-nowrap transition-colors"
              >
                <i className="ri-phone-line mr-2"></i>
                Nous contacter
              </button>
              <button className="border border-orange-500 text-orange-500 px-8 py-3 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 cursor-pointer whitespace-nowrap transition-colors">
                <i className="ri-calendar-line mr-2"></i>
                Planning des sessions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-black text-white py-16 px-4 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="https://static.readdy.ai/image/2ce43ce334b232046883f79f4f3df46a/b61b027bf4d42918b4ae2ae5a241e2c2.jfif" 
                  alt="SICA CONSEIL" 
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-300 dark:text-gray-400 transition-colors">
                Votre partenaire pour la maîtrise de la gestion de projet et la certification PMP.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300 dark:text-gray-400 transition-colors">
                <li><button className="hover:text-orange-400 cursor-pointer text-left">Conseil en management</button></li>
                <li><button className="hover:text-orange-400 cursor-pointer text-left">Formation PMP</button></li>
                <li><button className="hover:text-orange-400 cursor-pointer text-left">Transformation digitale</button></li>
                <li><button className="hover:text-orange-400 cursor-pointer text-left">Audit et optimisation</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300 dark:text-gray-400 transition-colors">
                <li><button className="hover:text-orange-400 cursor-pointer text-left">FAQ</button></li>
                <li><button onClick={() => navigate('/contact')} className="hover:text-orange-400 cursor-pointer text-left">Contact</button></li>
                <li><button className="hover:text-orange-400 cursor-pointer text-left">Assistance</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Légal</h4>
              <ul className="space-y-2 text-gray-300 dark:text-gray-400 transition-colors">
                <li><button className="hover:text-orange-400 cursor-pointer text-left">Confidentialité</button></li>
                <li><button className="hover:text-orange-400 cursor-pointer text-left">Conditions d'utilisation</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 dark:border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center transition-colors">
            <p className="text-gray-400 dark:text-gray-500 mb-4 md:mb-0 transition-colors">© 2024 SICA CONSEIL. Tous droits réservés.</p>
            <div className="flex items-center space-x-4">
              <a href="https://readdy.ai/?origin=logo" className="text-gray-400 dark:text-gray-500 hover:text-orange-400 cursor-pointer transition-colors">Made with Readdy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
