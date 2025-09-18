
import React, { useState } from 'react';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Badge from '../../components/base/Badge';

const mockFormations = [
  {
    id: 1,
    titre: 'Formation de base CAPE',
    description: 'Introduction au système de gestion des centres d\'accueil préscolaire',
    duree: '2 jours',
    niveau: 'Débutant',
    statut: 'Disponible',
    participants: 24,
    prochaineSSession: '2024-02-05',
    formateur: 'Dr. Marie Kouadio'
  },
  {
    id: 2,
    titre: 'Inspection et évaluation des centres',
    description: 'Techniques d\'inspection et critères d\'évaluation des CAPE',
    duree: '3 jours',
    niveau: 'Intermédiaire',
    statut: 'En cours',
    participants: 15,
    prochaineSSession: '2024-01-25',
    formateur: 'Jean-Claude Brou'
  },
  {
    id: 3,
    titre: 'Gestion administrative avancée',
    description: 'Processus administratifs complexes et gestion des dossiers',
    duree: '1 jour',
    niveau: 'Avancé',
    statut: 'Complet',
    participants: 12,
    prochaineSSession: '2024-02-15',
    formateur: 'Fatou Diallo'
  }
];

const mockCertifications = [
  {
    id: 1,
    nom: 'Marie Kouadio',
    formation: 'Formation de base CAPE',
    dateObtention: '2024-01-15',
    score: 95,
    validite: '2025-01-15'
  },
  {
    id: 2,
    nom: 'Seydou Traoré',
    formation: 'Inspection et évaluation',
    dateObtention: '2024-01-10',
    score: 88,
    validite: '2025-01-10'
  }
];

export default function Formation() {
  const [activeTab, setActiveTab] = useState('formations');
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);

  const tabs = [
    { id: 'formations', label: 'Formations disponibles', icon: 'ri-book-line' },
    { id: 'sessions', label: 'Mes sessions', icon: 'ri-calendar-line' },
    { id: 'certifications', label: 'Certifications', icon: 'ri-award-line' },
    { id: 'ressources', label: 'Ressources', icon: 'ri-folder-line' }
  ];

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <span className="text-gray-700 hover:text-blue-600 font-medium">Aide</span>
          </li>
          <li>
            <div className="flex items-center">
              <i className="ri-arrow-right-s-line text-gray-400"></i>
              <span className="ml-1 text-gray-500 font-medium">Formation</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="space-y-6">
        {/* En-tête */}
        <Card>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-graduation-cap-line text-2xl text-blue-600"></i>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Centre de Formation</h1>
            <p className="text-gray-600 mb-6">
              Développez vos compétences avec nos formations spécialisées dans la gestion des CAPE
            </p>
            <div className="flex justify-center gap-3">
              <Button variant="primary">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-add-line"></i>
                </div>
                Demander une formation
              </Button>
              <Button variant="outline">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-calendar-line"></i>
                </div>
                Planning des sessions
              </Button>
            </div>
          </div>
        </Card>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-book-line text-blue-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">12</div>
            <div className="text-sm text-gray-600">Formations disponibles</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-user-line text-green-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">156</div>
            <div className="text-sm text-gray-600">Participants formés</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-calendar-line text-orange-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">8</div>
            <div className="text-sm text-gray-600">Sessions ce mois</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-award-line text-purple-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">89%</div>
            <div className="text-sm text-gray-600">Taux de réussite</div>
          </Card>
        </div>

        {/* Navigation par onglets */}
        <Card>
          <div className="border-b border-gray-200 mb-6">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className={tab.icon}></i>
                  </div>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Formations disponibles */}
          {activeTab === 'formations' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Catalogue de formations</h3>
                <div className="w-64">
                  <Input
                    placeholder="Rechercher une formation..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    icon="ri-search-line"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {mockFormations.map((formation) => (
                  <div key={formation.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{formation.titre}</h4>
                        <p className="text-sm text-gray-600 mb-3">{formation.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>📅 {formation.duree}</span>
                          <span>👤 {formation.participants} participants</span>
                        </div>
                      </div>
                      <Badge 
                        variant={
                          formation.statut === 'Disponible' ? 'success' :
                          formation.statut === 'En cours' ? 'warning' : 'default'
                        }
                      >
                        {formation.statut}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm">
                        <div className="text-gray-600">Formateur</div>
                        <div className="font-medium text-gray-900">{formation.formateur}</div>
                      </div>
                      <div className="text-sm text-right">
                        <div className="text-gray-600">Prochaine session</div>
                        <div className="font-medium text-gray-900">{formation.prochaineSSession}</div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="primary" size="sm" className="flex-1">
                        S'inscrire
                      </Button>
                      <Button variant="outline" size="sm">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-eye-line"></i>
                        </div>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mes sessions */}
          {activeTab === 'sessions' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Mes sessions de formation</h3>
              
              <div className="space-y-4">
                <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">Formation de base CAPE</h4>
                    <Badge variant="primary">En cours</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Session du 15-17 Janvier 2024</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">Progression: 75% (3/4 modules)</div>
                    <Button variant="primary" size="sm">
                      Continuer
                    </Button>
                  </div>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">Inspection et évaluation</h4>
                    <Badge variant="success">Terminé</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Session du 10-12 Janvier 2024</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">Score final: 88/100</div>
                    <Button variant="outline" size="sm">
                      Certificat
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Certifications */}
          {activeTab === 'certifications' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Mes certifications</h3>
              
              <div className="space-y-4">
                {mockCertifications.map((cert) => (
                  <div key={cert.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <div className="w-5 h-5 flex items-center justify-center">
                            <i className="ri-award-line text-green-600"></i>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{cert.formation}</h4>
                          <p className="text-sm text-gray-600">Obtenu le {cert.dateObtention}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{cert.score}/100</div>
                        <div className="text-sm text-gray-600">Valide jusqu'au {cert.validite}</div>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button variant="outline" size="sm">
                        <div className="w-4 h-4 flex items-center justify-center mr-2">
                          <i className="ri-download-line"></i>
                        </div>
                        Télécharger
                      </Button>
                      <Button variant="outline" size="sm">
                        <div className="w-4 h-4 flex items-center justify-center mr-2">
                          <i className="ri-share-line"></i>
                        </div>
                        Partager
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Ressources */}
          {activeTab === 'ressources' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Ressources pédagogiques</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-file-pdf-line text-red-600"></i>
                    </div>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">Guide des normes CAPE</h4>
                  <p className="text-sm text-gray-600 mb-3">Document officiel des standards</p>
                  <Badge variant="secondary">PDF - 2.3 MB</Badge>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-video-line text-blue-600"></i>
                    </div>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">Tutoriels vidéo</h4>
                  <p className="text-sm text-gray-600 mb-3">Série de 8 vidéos explicatives</p>
                  <Badge variant="secondary">Vidéo - 45 min</Badge>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-file-excel-line text-green-600"></i>
                    </div>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">Modèles de rapports</h4>
                  <p className="text-sm text-gray-600 mb-3">Templates Excel standardisés</p>
                  <Badge variant="secondary">Excel - 856 KB</Badge>
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
