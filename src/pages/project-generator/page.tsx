
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function ProjectGenerator() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const templates = [
    {
      id: 'web-app',
      title: 'Application Web',
      category: 'Développement',
      description: 'Développement d\'une application web moderne',
      duration: '4-8 mois',
      complexity: 'Moyenne',
      complexityColor: 'text-yellow-600',
      icon: 'ri-window-line',
      color: 'bg-blue-500'
    },
    {
      id: 'mobile-app',
      title: 'Application Mobile',
      category: 'Développement',
      description: 'Création d\'une app mobile native ou hybride',
      duration: '3-6 mois',
      complexity: 'Élevée',
      complexityColor: 'text-red-600',
      icon: 'ri-smartphone-line',
      color: 'bg-purple-500'
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure IT',
      category: 'Infrastructure',
      description: 'Mise en place ou migration d\'infrastructure',
      duration: '2-4 mois',
      complexity: 'Élevée',
      complexityColor: 'text-red-600',
      icon: 'ri-server-line',
      color: 'bg-green-500'
    },
    {
      id: 'marketing-campaign',
      title: 'Campagne Marketing',
      category: 'Marketing',
      description: 'Lancement d\'une campagne marketing digitale',
      duration: '1-3 mois',
      complexity: 'Faible',
      complexityColor: 'text-green-600',
      icon: 'ri-megaphone-line',
      color: 'bg-pink-500'
    },
    {
      id: 'training-program',
      title: 'Programme de Formation',
      category: 'Formation',
      description: 'Développement et déploiement de formation',
      duration: '2-4 mois',
      complexity: 'Moyenne',
      complexityColor: 'text-yellow-600',
      icon: 'ri-graduation-cap-line',
      color: 'bg-indigo-500'
    },
    {
      id: 'ecommerce-site',
      title: 'Site E-commerce',
      category: 'Développement',
      description: 'Création d\'une plateforme de vente en ligne',
      duration: '3-5 mois',
      complexity: 'Moyenne',
      complexityColor: 'text-yellow-600',
      icon: 'ri-shopping-cart-line',
      color: 'bg-orange-500'
    }
  ];

  const recentProjects = [
    {
      id: 1,
      title: 'Application Mobile E-commerce',
      category: 'Développement',
      date: '2024-01-15',
      budget: '50 000€',
      duration: '6 mois',
      status: 'Complété',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: 2,
      title: 'Migration Cloud Infrastructure',
      category: 'Infrastructure',
      date: '2024-01-12',
      budget: '75 000€',
      duration: '4 mois',
      status: 'En cours',
      statusColor: 'bg-orange-100 text-orange-800'
    },
    {
      id: 3,
      title: 'Formation Équipe Marketing',
      category: 'Formation',
      date: '2024-01-10',
      budget: '15 000€',
      duration: '2 mois',
      status: 'Planifié',
      statusColor: 'bg-blue-100 text-blue-800'
    }
  ];

  const categories = ['Tous', 'Développement', 'Infrastructure', 'Marketing', 'Formation'];
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = activeCategory === 'Tous' || template.category === activeCategory;
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-white text-sm font-bold">SC</span>
            </div>
            <span className="font-bold text-gray-800">SICA CONSEIL</span>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => navigate('/dashboard')}
              className="w-full flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
            >
              <i className="ri-dashboard-line w-5 h-5 flex items-center justify-center"></i>
              <span>Tableau de bord</span>
            </button>
            
            <button className="w-full flex items-center space-x-3 px-3 py-2 bg-orange-100 text-orange-600 rounded-lg cursor-pointer">
              <i className="ri-file-text-line w-5 h-5 flex items-center justify-center"></i>
              <span>Générateur de projets</span>
            </button>
            
            <Link to="/pmp-simulator" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">
              <i className="ri-graduation-cap-line w-5 h-5 flex items-center justify-center"></i>
              <span>Formation PMP</span>
            </Link>
            <Link to="/pmp-history" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">
              <i className="ri-line-chart-line w-5 h-5 flex items-center justify-center"></i>
              <span>Simulateur PMP</span>
            </Link>
            
            <button className="w-full flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
              <i className="ri-bar-chart-line w-5 h-5 flex items-center justify-center"></i>
              <span>Progression</span>
            </button>
            
            <button className="w-full flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
              <i className="ri-settings-line w-5 h-5 flex items-center justify-center"></i>
              <span>Paramètres</span>
            </button>
          </nav>
        </div>

        <div className="absolute bottom-6 left-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <i className="ri-logout-box-line w-4 h-4 flex items-center justify-center"></i>
            <span className="text-sm">Déconnexion</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">Générateur de Projets</h1>
              <p className="text-gray-600">Créez des projets structurés et professionnels en quelques clics</p>
            </div>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 cursor-pointer whitespace-nowrap">
              Nouveau Projet
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Projets générés</span>
                <i className="ri-file-text-line text-orange-500 w-5 h-5 flex items-center justify-center"></i>
              </div>
              <div className="text-2xl font-bold text-gray-800">12</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">En cours</span>
                <i className="ri-time-line text-orange-500 w-5 h-5 flex items-center justify-center"></i>
              </div>
              <div className="text-2xl font-bold text-gray-800">3</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Complétés</span>
                <i className="ri-check-line text-green-500 w-5 h-5 flex items-center justify-center"></i>
              </div>
              <div className="text-2xl font-bold text-gray-800">8</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Taux de réussite</span>
                <i className="ri-trophy-line text-purple-500 w-5 h-5 flex items-center justify-center"></i>
              </div>
              <div className="text-2xl font-bold text-gray-800">89%</div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 flex items-center justify-center"></i>
                <input
                  type="text"
                  placeholder="Rechercher un template..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm cursor-pointer whitespace-nowrap ${
                    activeCategory === category
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Templates Grid */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Choisir un template</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemplates.map((template) => (
                <div key={template.id} className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 ${template.color} rounded-lg flex items-center justify-center`}>
                        <i className={`${template.icon} text-white text-xl`}></i>
                      </div>
                      <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                        {template.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{template.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{template.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Durée estimée:</span>
                        <span className="text-gray-800">{template.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Complexité:</span>
                        <span className={template.complexityColor}>{template.complexity}</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 cursor-pointer whitespace-nowrap">
                      <i className="ri-add-line mr-2"></i>
                      Utiliser ce template
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Projects */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Projets récents</h2>
              <span className="text-sm text-gray-500">Vos derniers projets générés</span>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200">
              {recentProjects.map((project, index) => (
                <div key={project.id} className={`p-6 flex items-center justify-between ${index !== recentProjects.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <i className="ri-file-text-line text-orange-500"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{project.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{project.category}</span>
                        <span>•</span>
                        <span>{project.date}</span>
                        <span>•</span>
                        <span>{project.budget}</span>
                        <span>•</span>
                        <span>{project.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${project.statusColor}`}>
                      {project.status}
                    </span>
                    <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                      <i className="ri-eye-line w-4 h-4 flex items-center justify-center"></i>
                    </button>
                    <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                      <i className="ri-download-line w-4 h-4 flex items-center justify-center"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How it works */}
          <div className="mt-12 bg-orange-50 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <i className="ri-lightbulb-line text-2xl text-orange-500 mr-3"></i>
              <h2 className="text-xl font-bold text-gray-800">Comment ça marche ?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  1
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Choisissez un template</h3>
                <p className="text-gray-600 text-sm">Sélectionnez le type de projet qui correspond à vos besoins</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  2
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Remplissez le formulaire</h3>
                <p className="text-gray-600 text-sm">Complétez les informations spécifiques à votre projet</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  3
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Générez et exportez</h3>
                <p className="text-gray-600 text-sm">Obtenez votre charte de projet complète en PDF/DOCX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
