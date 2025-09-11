
import { useState } from 'react';

interface ProjectDetailProps {
  project: {
    id: number;
    title: string;
    description: string;
    fullDescription: string;
    status: string;
    progress: number;
    budget: string;
    startDate: string;
    endDate: string;
    category: string;
    image: string;
    gallery: string[];
    objectives: string[];
    beneficiaries: string;
    partners: string[];
  };
  onBack: () => void;
}

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const tabs = [
    { id: 'overview', name: 'Vue d\'ensemble', icon: 'ri-eye-line' },
    { id: 'progress', name: 'Avancement', icon: 'ri-line-chart-line' },
    { id: 'gallery', name: 'Galerie', icon: 'ri-image-line' },
    { id: 'details', name: 'Détails', icon: 'ri-file-text-line' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En cours': return 'bg-blue-100 text-blue-800';
      case 'Planifié': return 'bg-yellow-100 text-yellow-800';
      case 'Terminé': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center text-blue-200 hover:text-white mb-6 cursor-pointer"
          >
            <i className="ri-arrow-left-line mr-2"></i>
            Retour aux projets
          </button>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium ml-3">
                  {project.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-blue-100 max-w-3xl">{project.description}</p>
            </div>
            <div className="hidden md:block ml-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-64 h-40 object-cover object-top rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-blue-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-blue-900 font-medium">Progression du projet</span>
            <span className="text-blue-600 font-bold">{project.progress}%</span>
          </div>
          <div className="w-full bg-blue-200 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <i className={`${tab.icon} text-lg`}></i>
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Description complète</h3>
                <div className="prose max-w-none text-gray-600 leading-relaxed">
                  <p className="mb-4">{project.fullDescription}</p>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Objectifs du projet</h4>
                  <ul className="space-y-2 mb-6">
                    {project.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start">
                        <i className="ri-check-line text-green-600 mr-3 mt-1"></i>
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Informations clés</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <i className="ri-calendar-line text-blue-600 mr-3"></i>
                      <div>
                        <p className="text-sm text-gray-500">Début</p>
                        <p className="font-medium">{project.startDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-calendar-check-line text-blue-600 mr-3"></i>
                      <div>
                        <p className="text-sm text-gray-500">Fin prévue</p>
                        <p className="font-medium">{project.endDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-money-dollar-circle-line text-blue-600 mr-3"></i>
                      <div>
                        <p className="text-sm text-gray-500">Budget</p>
                        <p className="font-medium">{project.budget}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <i className="ri-group-line text-blue-600 mr-3"></i>
                      <div>
                        <p className="text-sm text-gray-500">Bénéficiaires</p>
                        <p className="font-medium">{project.beneficiaries}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Partenaires</h4>
                  <div className="space-y-2">
                    {project.partners.map((partner, index) => (
                      <div key={index} className="flex items-center">
                        <i className="ri-building-line text-blue-600 mr-3"></i>
                        <span className="text-gray-700">{partner}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'progress' && (
            <div className="space-y-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-blue-100 rounded-full mb-6">
                  <span className="text-3xl font-bold text-blue-600">{project.progress}%</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Avancement du projet</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Le projet progresse selon les prévisions. Voici un aperçu détaillé des différentes phases.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-green-50 rounded-xl p-6 text-center">
                  <i className="ri-check-line text-3xl text-green-600 mb-4"></i>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Planification</h4>
                  <p className="text-green-600 font-medium">Terminée</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-6 text-center">
                  <i className="ri-tools-line text-3xl text-blue-600 mb-4"></i>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Préparation</h4>
                  <p className="text-blue-600 font-medium">En cours</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <i className="ri-hammer-line text-3xl text-gray-400 mb-4"></i>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Réalisation</h4>
                  <p className="text-gray-500 font-medium">À venir</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <i className="ri-flag-line text-3xl text-gray-400 mb-4"></i>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Finalisation</h4>
                  <p className="text-gray-500 font-medium">À venir</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="space-y-8">
              <div className="relative">
                <img
                  src={project.gallery[currentImageIndex]}
                  alt={`Image ${currentImageIndex + 1}`}
                  className="w-full h-96 object-cover object-top rounded-xl"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors cursor-pointer"
                >
                  <i className="ri-arrow-left-line text-xl"></i>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors cursor-pointer"
                >
                  <i className="ri-arrow-right-line text-xl"></i>
                </button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
                  {currentImageIndex + 1} / {project.gallery.length}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative overflow-hidden rounded-lg cursor-pointer ${
                      currentImageIndex === index ? 'ring-4 ring-blue-500' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Miniature ${index + 1}`}
                      className="w-full h-24 object-cover object-top hover:scale-110 transition-transform duration-300"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'details' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Informations techniques</h4>
                    <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Durée estimée</span>
                        <span className="font-medium">18 mois</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Phase actuelle</span>
                        <span className="font-medium">Préparation</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Équipes mobilisées</span>
                        <span className="font-medium">3 équipes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Zone d'intervention</span>
                        <span className="font-medium">Ensemble de la commune</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Impact attendu</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <i className="ri-user-line text-blue-600 mr-3"></i>
                        <span className="text-gray-700">Amélioration de la qualité de vie</span>
                      </div>
                      <div className="flex items-center">
                        <i className="ri-leaf-line text-green-600 mr-3"></i>
                        <span className="text-gray-700">Respect de l'environnement</span>
                      </div>
                      <div className="flex items-center">
                        <i className="ri-community-line text-purple-600 mr-3"></i>
                        <span className="text-gray-700">Développement communautaire</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Documents associés</h4>
                    <div className="space-y-3">
                      <a href="#" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                        <i className="ri-file-pdf-line text-red-600 mr-4 text-xl"></i>
                        <div>
                          <p className="font-medium text-gray-900">Cahier des charges</p>
                          <p className="text-sm text-gray-500">PDF - 2.4 MB</p>
                        </div>
                      </a>
                      <a href="#" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                        <i className="ri-file-text-line text-blue-600 mr-4 text-xl"></i>
                        <div>
                          <p className="font-medium text-gray-900">Étude d'impact</p>
                          <p className="text-sm text-gray-500">DOCX - 1.8 MB</p>
                        </div>
                      </a>
                      <a href="#" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                        <i className="ri-image-line text-green-600 mr-4 text-xl"></i>
                        <div>
                          <p className="font-medium text-gray-900">Plans architecturaux</p>
                          <p className="text-sm text-gray-500">ZIP - 15.2 MB</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Contact projet</h4>
                    <div className="bg-blue-50 rounded-xl p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                          <i className="ri-user-line text-white text-xl"></i>
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">Jean KODJO</p>
                          <p className="text-blue-600">Chef de projet</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="flex items-center text-gray-700">
                          <i className="ri-phone-line mr-3 text-blue-600"></i>
                          +229 XX XX XX XX
                        </p>
                        <p className="flex items-center text-gray-700">
                          <i className="ri-mail-line mr-3 text-blue-600"></i>
                          j.kodjo@mairiedangbo.bj
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
