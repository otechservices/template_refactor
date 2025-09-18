
import React, { useState } from 'react';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Badge from '../../components/base/Badge';

const mockParcours = [
  {
    id: 1,
    reference: 'CAPE-001',
    denomination: 'Centre Éducatif Les Roses',
    type: 'CAPE',
    etapeActuelle: 3,
    etapes: [
      { nom: 'Dépôt dossier', statut: 'terminee', date: '2024-01-10', responsable: 'Système' },
      { nom: 'Vérification documents', statut: 'terminee', date: '2024-01-12', responsable: 'Marie Kone' },
      { nom: 'Validation technique', statut: 'en-cours', date: '2024-01-15', responsable: 'Jean Kouassi' },
      { nom: 'Visite terrain', statut: 'en-attente', date: '', responsable: 'Équipe terrain' },
      { nom: 'Décision finale', statut: 'en-attente', date: '', responsable: 'Commission' }
    ]
  },
  {
    id: 2,
    reference: 'GARD-002',
    denomination: 'Garderie Petit Monde',
    type: 'Garderie',
    etapeActuelle: 4,
    etapes: [
      { nom: 'Dépôt dossier', statut: 'terminee', date: '2024-01-08', responsable: 'Système' },
      { nom: 'Vérification documents', statut: 'terminee', date: '2024-01-10', responsable: 'Fatou Ba' },
      { nom: 'Validation technique', statut: 'terminee', date: '2024-01-13', responsable: 'Alain Koffi' },
      { nom: 'Visite terrain', statut: 'en-cours', date: '2024-01-16', responsable: 'Équipe terrain' },
      { nom: 'Décision finale', statut: 'en-attente', date: '', responsable: 'Commission' }
    ]
  }
];

export default function ParcoursTraitement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDossier, setSelectedDossier] = useState(mockParcours[0]);

  const getStatutColor = (statut: string) => {
    switch (statut) {
      case 'terminee':
        return 'text-green-600 bg-green-100';
      case 'en-cours':
        return 'text-blue-600 bg-blue-100';
      case 'en-attente':
        return 'text-gray-600 bg-gray-100';
      case 'bloquee':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatutIcon = (statut: string) => {
    switch (statut) {
      case 'terminee':
        return 'ri-check-line';
      case 'en-cours':
        return 'ri-play-circle-line';
      case 'en-attente':
        return 'ri-pause-circle-line';
      case 'bloquee':
        return 'ri-close-circle-line';
      default:
        return 'ri-question-line';
    }
  };

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <span className="text-gray-700 hover:text-blue-600 font-medium">Traitement des demandes</span>
          </li>
          <li>
            <div className="flex items-center">
              <i className="ri-arrow-right-s-line text-gray-400"></i>
              <span className="ml-1 text-gray-500 font-medium">Parcours traitement</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Liste des dossiers */}
        <div className="lg:col-span-1">
          <Card title="Dossiers en cours">
            <div className="space-y-3">
              <Input
                placeholder="Rechercher un dossier..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon="ri-search-line"
              />
              
              <div className="space-y-2">
                {mockParcours.map((dossier) => (
                  <div
                    key={dossier.id}
                    onClick={() => setSelectedDossier(dossier)}
                    className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                      selectedDossier.id === dossier.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">{dossier.reference}</span>
                      <Badge variant={dossier.type === 'CAPE' ? 'primary' : 'secondary'}>
                        {dossier.type}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">{dossier.denomination}</div>
                    <div className="flex items-center gap-2">
                      <div className="text-xs text-gray-500">
                        Étape {dossier.etapeActuelle}/5
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-1">
                        <div 
                          className="bg-blue-600 h-1 rounded-full" 
                          style={{ width: `${(dossier.etapeActuelle / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Détail du parcours */}
        <div className="lg:col-span-2">
          <Card>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold">{selectedDossier.reference}</h2>
                <Badge variant={selectedDossier.type === 'CAPE' ? 'primary' : 'secondary'}>
                  {selectedDossier.type}
                </Badge>
              </div>
              <p className="text-gray-600">{selectedDossier.denomination}</p>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-medium">Parcours de traitement</h3>
              
              <div className="relative">
                {selectedDossier.etapes.map((etape, index) => (
                  <div key={index} className="flex items-start gap-4 pb-8 last:pb-0">
                    {/* Ligne de connexion */}
                    {index < selectedDossier.etapes.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-300"></div>
                    )}
                    
                    {/* Icône d'étape */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center relative z-10 ${getStatutColor(etape.statut)}`}>
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className={getStatutIcon(etape.statut)}></i>
                      </div>
                    </div>
                    
                    {/* Contenu de l'étape */}
                    <div className="flex-1 pt-2">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{etape.nom}</h4>
                        {etape.date && (
                          <span className="text-sm text-gray-500">{etape.date}</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Responsable: {etape.responsable}</p>
                      
                      {etape.statut === 'en-cours' && (
                        <div className="flex gap-2 mt-3">
                          <Button variant="primary" size="sm">
                            <div className="w-4 h-4 flex items-center justify-center mr-2">
                              <i className="ri-check-line"></i>
                            </div>
                            Valider l'étape
                          </Button>
                          <Button variant="outline" size="sm">
                            <div className="w-4 h-4 flex items-center justify-center mr-2">
                              <i className="ri-pause-line"></i>
                            </div>
                            Mettre en pause
                          </Button>
                        </div>
                      )}
                      
                      {etape.statut === 'en-attente' && index === selectedDossier.etapeActuelle && (
                        <div className="flex gap-2 mt-3">
                          <Button variant="primary" size="sm">
                            <div className="w-4 h-4 flex items-center justify-center mr-2">
                              <i className="ri-play-line"></i>
                            </div>
                            Démarrer l'étape
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-eye-line"></i>
                    </div>
                    Voir le dossier
                  </Button>
                  <Button variant="outline" size="sm">
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-message-line"></i>
                    </div>
                    Ajouter un commentaire
                  </Button>
                </div>
                <Button variant="primary" size="sm">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-history-line"></i>
                  </div>
                  Voir l'historique
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
