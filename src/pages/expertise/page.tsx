import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/feature/Header';
import { Footer } from '../../components/feature/Footer';
import { JsonLd, generateWebPageSchema, generateBreadcrumbSchema, generateOrganizationSchema } from '../../components/seo/JsonLd';

export default function Expertise() {
  const [activeTab, setActiveTab] = useState('expertise');
  const navigate = useNavigate();

  useEffect(() => {
    // Update page title and meta description
    document.title = "Notre Expertise en Gestion de Projet et Transformation | SICA CONSEIL";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expertise éprouvée en gestion de projets, gouvernance, PMO/DPMO, transformation organisationnelle. 15+ années d\'expérience, 25+ experts certifiés.');
    }
  }, []);

  const domainesCles = [
    {
      id: 1,
      title: 'Gouvernance & méthodologies',
      description: 'Cadrage, choix des approches (PMP®, PRINCE2®, Agile, Lean Six Sigma), kits de gouvernance et standards.',
      icon: 'ri-settings-3-line',
      color: 'bg-blue-500',
      image: 'https://readdy.ai/api/search-image?query=business%20governance%20methodology%20frameworks%20meeting%20room%20professionals%20discussing%20project%20management%20standards%20agile%20scrum%20prince2%20whiteboard%20charts%20modern%20office%20environment%20collaborative%20workspace%20strategic%20planning&width=400&height=250&seq=governance1&orientation=landscape'
    },
    {
      id: 2,
      title: 'Mise en place et accompagnement de PMO/DPMO',
      description: 'Diagnostic de maturité, conception de la cible, processus et modèles, outillage PPM, tableaux de bord et reporting.',
      icon: 'ri-building-line',
      color: 'bg-purple-500',
      image: 'https://readdy.ai/api/search-image?query=PMO%20office%20setup%20project%20management%20office%20professionals%20working%20with%20dashboards%20monitors%20data%20analytics%20reporting%20tools%20modern%20business%20environment%20team%20collaboration%20strategic%20oversight%20digital%20displays&width=400&height=250&seq=pmo1&orientation=landscape'
    },
    {
      id: 3,
      title: 'Gestion de portefeuille & programmes (PPM)',
      description: 'Priorisation, arbitrage budgétaire, capacity planning, feuille de route, suivi des bénéfices.',
      icon: 'ri-briefcase-line',
      color: 'bg-green-500',
      image: 'https://readdy.ai/api/search-image?query=portfolio%20management%20executives%20reviewing%20project%20portfolios%20financial%20planning%20budget%20allocation%20capacity%20planning%20strategic%20roadmap%20business%20meeting%20conference%20room%20professional%20analysis%20charts%20graphs&width=400&height=250&seq=portfolio1&orientation=landscape'
    },
    {
      id: 4,
      title: 'Pilotage de projets',
      description: 'PMO opérationnel, gestion des risques, qualité, coûts et délais, animation des comités.',
      icon: 'ri-dashboard-line',
      color: 'bg-orange-500',
      image: 'https://readdy.ai/api/search-image?query=project%20management%20steering%20committee%20meeting%20professionals%20discussing%20risks%20quality%20costs%20timeline%20operational%20pmo%20dashboard%20monitoring%20tools%20business%20meeting%20room%20strategic%20oversight&width=400&height=250&seq=pilotage1&orientation=landscape'
    },
    {
      id: 5,
      title: 'Conduite du changement',
      description: 'Communication, formation, coaching et adoption des nouvelles pratiques.',
      icon: 'ri-arrow-right-up-line',
      color: 'bg-indigo-500',
      image: 'https://readdy.ai/api/search-image?query=change%20management%20workshop%20diverse%20team%20transformation%20coaching%20communication%20training%20session%20facilitator%20leading%20organizational%20change%20adoption%20new%20practices%20collaborative%20environment%20professional%20development&width=400&height=250&seq=change1&orientation=landscape'
    },
    {
      id: 6,
      title: 'Suivi-évaluation & performance',
      description: 'Cadres logiques, KPI/OKR, data & insights pour la décision.',
      icon: 'ri-line-chart-line',
      color: 'bg-red-500',
      image: 'https://readdy.ai/api/search-image?query=performance%20monitoring%20analytics%20dashboard%20KPI%20OKR%20data%20insights%20business%20intelligence%20reporting%20tools%20executives%20analyzing%20metrics%20decision%20making%20modern%20office%20environment%20professional%20analysis&width=400&height=250&seq=performance1&orientation=landscape'
    },
    {
      id: 7,
      title: 'Formations certifiantes',
      description: 'PMP®, PRINCE2®, PSM, Lean Six Sigma (Green/Black Belt).',
      icon: 'ri-graduation-cap-line',
      color: 'bg-teal-500',
      image: 'https://readdy.ai/api/search-image?query=professional%20certification%20training%20classroom%20instructor%20teaching%20PMP%20PRINCE2%20PSM%20Lean%20Six%20Sigma%20students%20learning%20project%20management%20certification%20course%20modern%20training%20facility%20educational%20environment&width=400&height=250&seq=formation1&orientation=landscape'
    }
  ];

  const secteurs = [
    { name: 'Industrie', projects: 45, icon: 'ri-factory-line' },
    { name: 'Énergie', projects: 32, icon: 'ri-flashlight-line' },
    { name: 'Finance', projects: 28, icon: 'ri-bank-line' },
    { name: 'IT & Digital', projects: 52, icon: 'ri-computer-line' },
    { name: 'Secteur Public', projects: 38, icon: 'ri-government-line' }
  ];

  const certifications = [
    { name: 'PMP®', count: 15, color: 'bg-orange-500' },
    { name: 'PRINCE2®', count: 12, color: 'bg-purple-500' },
    { name: 'PSM', count: 10, color: 'bg-blue-500' },
    { name: 'Lean Six Sigma', count: 8, color: 'bg-green-500' }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* JSON-LD Schema */}
      <JsonLd data={generateWebPageSchema(
        "Notre Expertise en Gestion de Projet et Transformation",
        "Expertise éprouvée en gestion de projets, gouvernance, PMO/DPMO, transformation organisationnelle. 15+ années d'expérience, 25+ experts certifiés.",
        "/expertise"
      )} />
      <JsonLd data={generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Notre Expertise", url: "/expertise" }
      ])} />

      <Header currentPage="/expertise" />

      {/* Hero Section */}
      <section 
        className="relative py-24 px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://readdy.ai/api/search-image?query=SICA%20CONSEIL%20International%20expertise%20consulting%20team%20diverse%20professionals%20strategic%20projects%20transformation%20organizational%20excellence%20modern%20office%20environment%20collaborative%20workspace%20innovation%20leadership%20success&width=1920&height=700&seq=expertise-hero&orientation=landscape')`
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Notre Expertise
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Chez SICA CONSEIL International, nous transformons vos ambitions en réussites concrètes dans vos projets stratégiques. Notre valeur ajoutée repose sur une expertise éprouvée en gestion de projets, gouvernance et transformation organisationnelle.
            </p>
            <p className="text-lg text-gray-300 mb-10">
              De la mise en place de PMO/DPMO, à la gestion de portefeuille, en passant par l'accompagnement aux appels à projets et l'auto-génération de projets en ligne, nous vous offrons des solutions innovantes et adaptées.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 cursor-pointer whitespace-nowrap font-semibold transition-colors"
            >
              <i className="ri-phone-line mr-2"></i>
              Discuter de votre projet
            </button>
            <button 
              onClick={() => navigate('/missions')}
              className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 cursor-pointer whitespace-nowrap font-semibold transition-colors"
            >
              <i className="ri-eye-line mr-2"></i>
              Voir nos réalisations
            </button>
          </div>
        </div>
      </section>

      {/* Présentation de l'expertise */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 transition-colors">
            Excellence & Innovation
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto transition-colors">
            Nos experts certifiés en PMP®, PRINCE2®, PSM et Lean Six Sigma vous accompagnent pour piloter vos projets, optimiser vos performances et accélérer votre transformation. Nous combinons rigueur méthodologique, excellence opérationnelle et intelligence humaine pour transformer vos projets en résultats durables.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">200+</div>
              <div className="text-gray-600 dark:text-gray-300 transition-colors">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-300 transition-colors">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">25+</div>
              <div className="text-gray-600 dark:text-gray-300 transition-colors">Experts certifiés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">95%</div>
              <div className="text-gray-600 dark:text-gray-300 transition-colors">Taux de réussite</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 px-4 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-10 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: 'expertise', label: 'Domaines clés', icon: 'ri-star-line' },
              { id: 'secteurs', label: 'Secteurs', icon: 'ri-building-line' },
              { id: 'equipe', label: 'Notre équipe', icon: 'ri-team-line' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium cursor-pointer whitespace-nowrap transition-colors flex items-center ${
                  activeTab === tab.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <i className={`${tab.icon} mr-2`}></i>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto">
          
          {/* Domaines clés */}
          {activeTab === 'expertise' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 transition-colors">
                  Nos Domaines Clés
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors">
                  Une expertise complète pour accompagner tous vos projets stratégiques
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {domainesCles.map((domaine) => (
                  <div key={domaine.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-xl dark:hover:shadow-2xl transition-all">
                    <div className="relative">
                      <img 
                        src={domaine.image}
                        alt={domaine.title}
                        className="w-full h-48 object-cover object-top"
                      />
                      <div className={`absolute top-4 right-4 w-12 h-12 ${domaine.color} rounded-lg flex items-center justify-center`}>
                        <i className={`${domaine.icon} text-xl text-white`}></i>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3 transition-colors">
                        {domaine.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors">
                        {domaine.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Secteurs */}
          {activeTab === 'secteurs' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 transition-colors">
                  Expérience Multisectorielle
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors">
                  Une expertise éprouvée dans tous les secteurs d'activité
                </p>
              </div>

              {/* Pyramide visuelle */}
              <div className="max-w-4xl mx-auto mb-12">
                <div className="relative">
                  <img 
                    src="https://readdy.ai/api/search-image?query=business%20sectors%20pyramid%20infographic%20industry%20energy%20finance%20IT%20public%20sector%20multisectorial%20expertise%20professional%20consulting%20visual%20representation%20modern%20design%20clean%20background%20corporate%20style&width=800&height=500&seq=secteurs-pyramid&orientation=landscape"
                    alt="Expérience multisectorielle"
                    className="w-full rounded-xl shadow-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {secteurs.map((secteur, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition-all">
                    <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`${secteur.icon} text-2xl text-orange-500`}></i>
                    </div>
                    <h3 className="font-bold text-gray-800 dark:text-white mb-2 transition-colors">
                      {secteur.name}
                    </h3>
                    <div className="text-2xl font-bold text-orange-500 mb-1">
                      {secteur.projects}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors">
                      projets réalisés
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-xl p-8 transition-colors">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center transition-colors">
                  Experts Certifiés
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {certifications.map((cert, index) => (
                    <div key={index} className="text-center">
                      <div className={`w-16 h-16 ${cert.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                        <i className="ri-medal-line text-2xl text-white"></i>
                      </div>
                      <div className="font-bold text-gray-800 dark:text-white transition-colors">{cert.name}</div>
                      <div className="text-2xl font-bold text-orange-500 mt-1">{cert.count}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors">experts</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Équipe */}
          {activeTab === 'equipe' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 transition-colors">
                  Notre Équipe
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors">
                  Savoir-faire et excellence au service de vos projets
                </p>
              </div>

              {/* Présentation en attente */}
              <div className="bg-orange-50 dark:bg-orange-900/30 rounded-xl p-12 text-center transition-colors">
                <div className="w-24 h-24 bg-orange-100 dark:bg-orange-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="ri-user-star-line text-4xl text-orange-500"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 transition-colors">
                  Présentation de l'équipe en cours
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto transition-colors">
                  Nous préparons une présentation détaillée de notre équipe d'experts certifiés et de leur savoir-faire multisectoriel. Cette section sera bientôt enrichie avec les profils LinkedIn et l'expertise de chaque membre.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => navigate('/contact')}
                    className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 cursor-pointer whitespace-nowrap font-semibold transition-colors"
                  >
                    <i className="ri-phone-line mr-2"></i>
                    Nous contacter
                  </button>
                  <button 
                    onClick={() => navigate('/formations')}
                    className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/30 cursor-pointer whitespace-nowrap font-semibold transition-colors"
                  >
                    <i className="ri-graduation-cap-line mr-2"></i>
                    Voir nos formations
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-orange-500 dark:bg-orange-600 transition-colors">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Transformons ensemble vos projets en succès
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Bénéficiez de notre expertise éprouvée et de nos solutions innovantes pour accélérer votre transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white text-orange-500 px-8 py-3 rounded-lg hover:bg-orange-50 cursor-pointer whitespace-nowrap font-semibold transition-colors"
            >
              <i className="ri-phone-line mr-2"></i>
              Planifier un échange
            </button>
            <button 
              onClick={() => navigate('/project-generator')}
              className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 cursor-pointer whitespace-nowrap font-semibold transition-colors"
            >
              <i className="ri-rocket-line mr-2"></i>
              Auto-génération de projets
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
