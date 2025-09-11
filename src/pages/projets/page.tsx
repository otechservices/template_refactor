
import { useState, useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ProjectDetail from './components/ProjectDetail';
import { updateSEO, addJSONLD } from '../../utils/seo';

export default function Projets() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('Tous');

  useEffect(() => {
    // Update SEO
    updateSEO({
      title: 'Projets de Développement - Mairie de Dangbo | Infrastructure et Aménagement',
      description: 'Découvrez les projets de développement de la commune de Dangbo : infrastructure, éducation, santé, économie locale. Suivi des réalisations municipales.',
      keywords: 'projets Dangbo, développement local, infrastructure, éducation, santé, économie, aménagement urbain',
      ogTitle: 'Projets de Développement - Mairie de Dangbo',
      ogDescription: 'Projets de développement et d\'infrastructure de la commune de Dangbo.',
      ogImage: 'https://mairiedangbo.exploitsweb.com/assets/logo.png',
      canonicalUrl: `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/projets`
    });

    // Add JSON-LD structured data
    addJSONLD({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Projets de Développement - Mairie de Dangbo",
      "description": "Page des projets de développement et d'infrastructure de la commune de Dangbo",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/projets`,
      "mainEntity": {
        "@type": "ItemList",
        "name": "Projets municipaux",
        "description": "Liste des projets de développement de la commune"
      },
      "publisher": {
        "@type": "GovernmentOrganization",
        "name": "Mairie de Dangbo"
      }
    });
  }, []);

  const categories = ['Tous', 'Infrastructure', 'Éducation', 'Santé', 'Agriculture', 'Environnement'];

  const projects = [
    {
      id: 1,
      title: "Construction du Centre de Santé Moderne",
      description: "Édification d'un centre de santé équipé pour améliorer l'accès aux soins de qualité.",
      fullDescription: "Le projet de construction du Centre de Santé Moderne de Dangbo représente un investissement majeur dans le système de santé communal. Ce centre ultramoderne sera équipé des dernières technologies médicales et offrira des services de consultation, d'hospitalisation, de maternité et de pharmacie. L'objectif est de réduire les évacuations sanitaires vers les grandes villes et d'améliorer significativement la prise en charge des patients au niveau local.",
      status: "En cours",
      progress: 65,
      budget: "850 millions FCFA",
      startDate: "Mars 2024",
      endDate: "Décembre 2025",
      category: "Santé",
      image: "https://readdy.ai/api/search-image?query=modern%20african%20health%20center%20construction%20site%20medical%20building%20dangbo%20benin%20healthcare%20infrastructure%20development%20clean%20professional%20background%20workers%20equipment&width=600&height=400&seq=health1&orientation=landscape",
      gallery: [
        "https://readdy.ai/api/search-image?query=modern%20african%20health%20center%20construction%20site%20medical%20building%20dangbo%20benin%20healthcare%20infrastructure%20development%20clean%20professional%20background%20workers%20equipment&width=600&height=400&seq=health1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=medical%20equipment%20installation%20african%20hospital%20modern%20healthcare%20technology%20dangbo%20benin%20clean%20background%20professional%20medical%20setting&width=600&height=400&seq=health2&orientation=landscape",
        "https://readdy.ai/api/search-image?query=african%20medical%20staff%20training%20modern%20hospital%20equipment%20healthcare%20professionals%20dangbo%20benin%20clean%20professional%20background&width=600&height=400&seq=health3&orientation=landscape",
        "https://readdy.ai/api/search-image?query=completed%20african%20health%20center%20modern%20medical%20building%20exterior%20dangbo%20benin%20healthcare%20infrastructure%20clean%20professional%20background&width=600&height=400&seq=health4&orientation=landscape"
      ],
      objectives: [
        "Améliorer l'accès aux soins de santé primaires",
        "Réduire le taux de mortalité infantile et maternelle",
        "Équiper le centre des technologies médicales modernes",
        "Former le personnel médical aux nouvelles procédures",
        "Créer 25 emplois directs dans le secteur de la santé"
      ],
      beneficiaries: "45 000 habitants",
      partners: ["Ministère de la Santé", "OMS", "Coopération Française", "Fondation Bill & Melinda Gates"]
    },
    {
      id: 2,
      title: "Réhabilitation du Réseau Routier",
      description: "Modernisation et bitumage des principales voies de communication de la commune.",
      fullDescription: "Le projet de réhabilitation du réseau routier vise à moderniser l'infrastructure routière de la commune de Dangbo. Il comprend le bitumage de 25 kilomètres de routes principales, la construction de ponts et caniveaux, ainsi que l'installation d'un système d'éclairage public moderne. Ce projet facilitera les échanges commerciaux, améliorera l'accès aux services publics et renforcera la connectivité entre les différents quartiers de la commune.",
      status: "Planifié",
      progress: 25,
      budget: "1.2 milliards FCFA",
      startDate: "Juin 2025",
      endDate: "Avril 2026",
      category: "Infrastructure",
      image: "https://readdy.ai/api/search-image?query=road%20construction%20african%20workers%20paving%20asphalt%20modern%20equipment%20dangbo%20benin%20infrastructure%20development%20clean%20professional%20background&width=600&height=400&seq=road1&orientation=landscape",
      gallery: [
        "https://readdy.ai/api/search-image?query=road%20construction%20african%20workers%20paving%20asphalt%20modern%20equipment%20dangbo%20benin%20infrastructure%20development%20clean%20professional%20background&width=600&height=400&seq=road1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=modern%20road%20infrastructure%20african%20town%20street%20lighting%20dangbo%20benin%20urban%20development%20clean%20professional%20background&width=600&height=400&seq=road2&orientation=landscape",
        "https://readdy.ai/api/search-image?query=bridge%20construction%20african%20workers%20modern%20infrastructure%20dangbo%20benin%20engineering%20project%20clean%20professional%20background&width=600&height=400&seq=road3&orientation=landscape"
      ],
      objectives: [
        "Améliorer la mobilité des personnes et des biens",
        "Faciliter l'accès aux marchés et services",
        "Réduire les coûts de transport",
        "Renforcer la sécurité routière",
        "Stimuler le développement économique local"
      ],
      beneficiaries: "Toute la population communale",
      partners: ["Ministère des Infrastructures", "Banque Mondiale", "UEMOA", "Entreprises locales"]
    },
    {
      id: 3,
      title: "Programme d'Électrification Rurale",
      description: "Extension du réseau électrique vers les zones rurales non encore desservies.",
      fullDescription: "Le Programme d'Électrification Rurale de Dangbo vise à étendre l'accès à l'électricité dans les zones rurales de la commune. Ce projet ambitieux prévoit l'installation de 50 kilomètres de lignes électriques, la construction de 3 postes de transformation et l'électrification de 15 villages. L'énergie sera principalement fournie par des sources renouvelables, notamment l'énergie solaire, en conformité avec les objectifs de développement durable.",
      status: "En cours",
      progress: 40,
      budget: "750 millions FCFA",
      startDate: "Janvier 2024",
      endDate: "Août 2025",
      category: "Infrastructure",
      image: "https://readdy.ai/api/search-image?query=rural%20electrification%20african%20village%20solar%20panels%20power%20lines%20dangbo%20benin%20renewable%20energy%20infrastructure%20clean%20professional%20background&width=600&height=400&seq=power1&orientation=landscape",
      gallery: [
        "https://readdy.ai/api/search-image?query=rural%20electrification%20african%20village%20solar%20panels%20power%20lines%20dangbo%20benin%20renewable%20energy%20infrastructure%20clean%20professional%20background&width=600&height=400&seq=power1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=electrical%20workers%20installing%20power%20lines%20african%20village%20dangbo%20benin%20infrastructure%20development%20clean%20professional%20background&width=600&height=400&seq=power2&orientation=landscape",
        "https://readdy.ai/api/search-image?query=solar%20panel%20installation%20african%20rural%20community%20dangbo%20benin%20renewable%20energy%20project%20clean%20professional%20background&width=600&height=400&seq=power3&orientation=landscape"
      ],
      objectives: [
        "Étendre l'accès à l'électricité en zone rurale",
        "Promouvoir l'utilisation d'énergies renouvelables",
        "Améliorer les conditions de vie des populations rurales",
        "Favoriser le développement des activités économiques",
        "Réduire l'exode rural"
      ],
      beneficiaries: "15 000 habitants des zones rurales",
      partners: ["SBEE", "Ministère de l'Énergie", "Union Européenne", "Agence Française de Développement"]
    },
    {
      id: 4,
      title: "Construction de l'École Moderne",
      description: "Édification d'un complexe scolaire moderne pour améliorer l'éducation primaire.",
      fullDescription: "Le projet de construction de l'École Moderne de Dangbo vise à créer un environnement d'apprentissage optimal pour les enfants de la commune. Ce complexe scolaire comprendra 12 salles de classe, une bibliothèque moderne, un laboratoire informatique, une cantine scolaire et des espaces récréatifs. L'école sera équipée de technologies éducatives modernes et disposera d'un système d'énergie solaire pour assurer son autonomie énergétique.",
      status: "Terminé",
      progress: 100,
      budget: "650 millions FCFA",
      startDate: "Septembre 2023",
      endDate: "Juillet 2024",
      category: "Éducation",
      image: "https://readdy.ai/api/search-image?query=modern%20african%20school%20building%20students%20playground%20dangbo%20benin%20educational%20infrastructure%20clean%20professional%20background%20children%20learning&width=600&height=400&seq=school1&orientation=landscape",
      gallery: [
        "https://readdy.ai/api/search-image?query=modern%20african%20school%20building%20students%20playground%20dangbo%20benin%20educational%20infrastructure%20clean%20professional%20background%20children%20learning&width=600&height=400&seq=school1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=african%20children%20modern%20classroom%20computers%20library%20dangbo%20benin%20educational%20technology%20clean%20professional%20background&width=600&height=400&seq=school2&orientation=landscape",
        "https://readdy.ai/api/search-image?query=african%20teachers%20modern%20school%20facilities%20dangbo%20benin%20educational%20infrastructure%20clean%20professional%20background%20learning%20environment&width=600&height=400&seq=school3&orientation=landscape"
      ],
      objectives: [
        "Améliorer la qualité de l'enseignement primaire",
        "Augmenter le taux de scolarisation",
        "Intégrer les technologies dans l'éducation",
        "Créer un environnement d'apprentissage stimulant",
        "Former les enseignants aux méthodes pédagogiques modernes"
      ],
      beneficiaries: "600 élèves",
      partners: ["Ministère de l'Enseignement", "UNICEF", "Fondation Orange", "Communauté locale"]
    },
    {
      id: 5,
      title: "Projet Agro-Pastoral Intégré",
      description: "Développement de l'agriculture et de l'élevage par des techniques modernes.",
      fullDescription: "Le Projet Agro-Pastoral Intégré de Dangbo vise à moderniser les pratiques agricoles et d'élevage dans la commune. Il comprend la formation des agriculteurs aux techniques modernes, la fourniture d'équipements agricoles, la création de coopératives, et l'installation de systèmes d'irrigation moderne. Le projet inclut également la construction d'un marché aux bestiaux moderne et la mise en place d'un système de traçabilité des produits agricoles.",
      status: "En cours",
      progress: 55,
      budget: "900 millions FCFA",
      startDate: "Février 2024",
      endDate: "Janvier 2026",
      category: "Agriculture",
      image: "https://readdy.ai/api/search-image?query=modern%20african%20agriculture%20farmers%20using%20modern%20equipment%20irrigation%20system%20dangbo%20benin%20agricultural%20development%20clean%20professional%20background&width=600&height=400&seq=agri1&orientation=landscape",
      gallery: [
        "https://readdy.ai/api/search-image?query=modern%20african%20agriculture%20farmers%20using%20modern%20equipment%20irrigation%20system%20dangbo%20benin%20agricultural%20development%20clean%20professional%20background&width=600&height=400&seq=agri1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=african%20livestock%20market%20modern%20cattle%20farming%20dangbo%20benin%20agricultural%20development%20clean%20professional%20background&width=600&height=400&seq=agri2&orientation=landscape",
        "https://readdy.ai/api/search-image?query=african%20farmers%20training%20modern%20agricultural%20techniques%20dangbo%20benin%20rural%20development%20clean%20professional%20background&width=600&height=400&seq=agri3&orientation=landscape"
      ],
      objectives: [
        "Moderniser les techniques agricoles et d'élevage",
        "Augmenter la productivité agricole de 40%",
        "Créer des coopératives agricoles fonctionnelles",
        "Améliorer les revenus des producteurs",
        "Assurer la sécurité alimentaire locale"
      ],
      beneficiaries: "2 500 producteurs",
      partners: ["FAO", "Ministère de l'Agriculture", "Banque Agricole", "ONG locales"]
    },
    {
      id: 6,
      title: "Initiative Environnementale Verte",
      description: "Programme de reboisement et de protection de l'environnement communal.",
      fullDescription: "L'Initiative Environnementale Verte de Dangbo est un programme ambitieux de protection et de restauration de l'environnement communal. Il comprend la plantation de 50 000 arbres, la création de 3 parcs urbains, la mise en place d'un système de gestion des déchets moderne, et la sensibilisation de la population aux enjeux environnementaux. Le projet inclut également la création d'une réserve naturelle communale et la promotion de l'écotourisme.",
      status: "Planifié",
      progress: 15,
      budget: "400 millions FCFA",
      startDate: "Septembre 2025",
      endDate: "Septembre 2027",
      category: "Environnement",
      image: "https://readdy.ai/api/search-image?query=african%20community%20tree%20planting%20environmental%20conservation%20dangbo%20benin%20green%20initiative%20clean%20professional%20background%20reforestation&width=600&height=400&seq=env1&orientation=landscape",
      gallery: [
        "https://readdy.ai/api/search-image?query=african%20community%20tree%20planting%20environmental%20conservation%20dangbo%20benin%20green%20initiative%20clean%20professional%20background%20reforestation&width=600&height=400&seq=env1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=modern%20waste%20management%20african%20town%20recycling%20center%20dangbo%20benin%20environmental%20protection%20clean%20professional%20background&width=600&height=400&seq=env2&orientation=landscape",
        "https://readdy.ai/api/search-image?query=african%20urban%20park%20green%20spaces%20community%20dangbo%20benin%20environmental%20development%20clean%20professional%20background%20nature%20conservation&width=600&height=400&seq=env3&orientation=landscape"
      ],
      objectives: [
        "Restaurer la couverture forestière communale",
        "Créer des espaces verts urbains",
        "Améliorer la gestion des déchets",
        "Sensibiliser à la protection environnementale",
        "Promouvoir l'écotourisme local"
      ],
      beneficiaries: "Toute la communauté",
      partners: ["Ministère de l'Environnement", "PNUD", "WWF", "GIZ"]
    }
  ];

  const filteredProjects = selectedFilter === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En cours': return 'bg-blue-100 text-blue-800';
      case 'Planifié': return 'bg-yellow-100 text-yellow-800';
      case 'Terminé': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (selectedProject) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <ProjectDetail 
          project={selectedProject} 
          onBack={() => setSelectedProject(null)} 
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Projets</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Découvrez les projets de développement qui transforment notre commune
            </p>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 -mt-20 relative z-10">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-tools-line text-2xl text-blue-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">6</h3>
            <p className="text-gray-600">Projets Actifs</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-check-line text-2xl text-green-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">1</h3>
            <p className="text-gray-600">Projets Terminés</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-time-line text-2xl text-yellow-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">2</h3>
            <p className="text-gray-600">Projets Planifiés</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-money-dollar-circle-line text-2xl text-purple-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">4.75B</h3>
            <p className="text-gray-600">Budget Total (FCFA)</p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                selectedFilter === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span>Avancement</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        project.status === 'Terminé' ? 'bg-green-500' :
                        project.status === 'En cours' ? 'bg-blue-500' :
                        'bg-yellow-500'
                      }`}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <i className="ri-money-dollar-circle-line mr-2"></i>
                    <span>{project.budget}</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-calendar-line mr-2"></i>
                    <span>{project.endDate}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer"
                >
                  Voir les détails
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
