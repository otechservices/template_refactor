import React, { useState } from 'react';
import Card from '../../components/base/Card';
import Table from '../../components/base/Table';
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Badge from '../../components/base/Badge';

const mockGarderies = [
  {
    id: 1,
    nom: 'Garderie Les Bambins',
    adresse: 'Cocody, Abidjan',
    statut: 'Actif',
    recommendations: 3,
    derniereVisite: '2024-01-15'
  },
  {
    id: 2,
    nom: 'Crèche Bébé Bonheur',
    adresse: 'Plateau, Abidjan',
    statut: 'En suivi',
    recommendations: 5,
    derniereVisite: '2024-01-10'
  },
  {
    id: 3,
    nom: 'Garderie Petit Monde',
    adresse: 'Yopougon, Abidjan',
    statut: 'Actif',
    recommendations: 1,
    derniereVisite: '2024-01-20'
  }
];

const mockRecommendations = [
  {
    id: 1,
    garderieId: 1,
    categorie: 'Sécurité',
    description: 'Installer des barrières de sécurité supplémentaires dans la cour de récréation',
    priorite: 'Haute',
    statut: 'En cours',
    dateEmission: '2024-01-15',
    echeance: '2024-02-15',
    responsable: 'Direction'
  },
  {
    id: 2,
    garderieId: 1,
    categorie: 'Hygiène',
    description: 'Améliorer le système de ventilation dans les dortoirs',
    priorite: 'Moyenne',
    statut: 'Planifiée',
    dateEmission: '2024-01-15',
    echeance: '2024-03-01',
    responsable: 'Service technique'
  },
  {
    id: 3,
    garderieId: 2,
    categorie: 'Personnel',
    description: 'Formation du personnel sur les premiers secours',
    priorite: 'Haute',
    statut: 'Terminée',
    dateEmission: '2024-01-10',
    echeance: '2024-01-31',
    responsable: 'RH'
  },
  {
    id: 4,
    garderieId: 2,
    categorie: 'Équipement',
    description: 'Renouveler le matériel pédagogique pour les tout-petits',
    priorite: 'Moyenne',
    statut: 'En attente',
    dateEmission: '2024-01-10',
    echeance: '2024-02-28',
    responsable: 'Direction pédagogique'
  }
];

export default function GarderieRecommendations() {
  const [selectedGarderie, setSelectedGarderie] = useState<number | null>(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('toutes');

  const garderieColumns = [
    {
      key: 'nom',
      title: 'Nom de la garderie',
      width: '250px'
    },
    {
      key: 'adresse',
      title: 'Adresse',
      width: '200px'
    },
    {
      key: 'statut',
      title: 'Statut',
      width: '120px',
      render: (value: string) => (
        <Badge variant={value === 'Actif' ? 'success' : 'warning'}>
          {value}
        </Badge>
      )
    },
    {
      key: 'recommendations',
      title: 'Recommandations',
      width: '140px',
      render: (value: number) => (
        <span className={`font-semibold ${value === 0 ? 'text-green-600' : value <= 3 ? 'text-orange-600' : 'text-red-600'}`}>
          {value} active{value !== 1 ? 's' : ''}
        </span>
      )
    },
    {
      key: 'actions',
      title: 'Actions',
      width: '120px',
      render: (value: any, row: any) => (
        <div className="flex gap-1">
          <Button 
            variant={selectedGarderie === row.id ? 'primary' : 'ghost'} 
            size="sm"
            onClick={() => setSelectedGarderie(row.id)}
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-eye-line"></i>
            </div>
          </Button>
          <Button variant="ghost" size="sm">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-edit-line"></i>
            </div>
          </Button>
        </div>
      )
    }
  ];

  const recommendationColumns = [
    {
      key: 'categorie',
      title: 'Catégorie',
      width: '120px',
      render: (value: string) => (
        <Badge variant="outline">{value}</Badge>
      )
    },
    {
      key: 'description',
      title: 'Description',
      width: '300px'
    },
    {
      key: 'priorite',
      title: 'Priorité',
      width: '100px',
      render: (value: string) => (
        <Badge variant={value === 'Haute' ? 'danger' : value === 'Moyenne' ? 'warning' : 'default'}>
          {value}
        </Badge>
      )
    },
    {
      key: 'statut',
      title: 'Statut',
      width: '120px',
      render: (value: string) => (
        <Badge variant={
          value === 'Terminée' ? 'success' : 
          value === 'En cours' ? 'warning' : 
          value === 'Planifiée' ? 'primary' : 'default'
        }>
          {value}
        </Badge>
      )
    },
    {
      key: 'echeance',
      title: 'Échéance',
      width: '120px'
    },
    {
      key: 'actions',
      title: 'Actions',
      width: '120px',
      render: () => (
        <div className="flex gap-1">
          <Button variant="ghost" size="sm">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-eye-line"></i>
            </div>
          </Button>
          <Button variant="ghost" size="sm">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-edit-line"></i>
            </div>
          </Button>
          <Button variant="ghost" size="sm">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-check-line"></i>
            </div>
          </Button>
        </div>
      )
    }
  ];

  const filteredRecommendations = selectedGarderie 
    ? mockRecommendations.filter(r => r.garderieId === selectedGarderie)
    : mockRecommendations;

  const tabs = [
    { id: 'toutes', label: 'Toutes', count: filteredRecommendations.length },
    { id: 'haute', label: 'Haute priorité', count: filteredRecommendations.filter(r => r.priorite === 'Haute').length },
    { id: 'en-cours', label: 'En cours', count: filteredRecommendations.filter(r => r.statut === 'En cours').length },
    { id: 'en-retard', label: 'En retard', count: 2 }
  ];

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <span className="text-gray-700 hover:text-blue-600 font-medium">Recommandations</span>
          </li>
          <li>
            <div className="flex items-center">
              <i className="ri-arrow-right-s-line text-gray-400"></i>
              <span className="ml-1 text-gray-500 font-medium">Garderie</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="space-y-6">
        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-group-line text-blue-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">24</div>
            <div className="text-sm text-gray-600">Garderies suivies</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-alert-line text-orange-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">42</div>
            <div className="text-sm text-gray-600">Recommandations actives</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-error-warning-line text-red-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">8</div>
            <div className="text-sm text-gray-600">Haute priorité</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-check-line text-green-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">156</div>
            <div className="text-sm text-gray-600">Terminées ce mois</div>
          </Card>
        </div>

        {/* Garderies avec recommandations */}
        <Card title="Garderies avec recommandations">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="primary" size="sm">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-add-line"></i>
                  </div>
                  Nouvelle recommandation
                </Button>
                <Button variant="outline" size="sm">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-download-line"></i>
                  </div>
                  Rapport de suivi
                </Button>
              </div>
              <div className="w-64">
                <Input
                  placeholder="Rechercher une garderie..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  icon="ri-search-line"
                />
              </div>
            </div>

            <Table 
              columns={garderieColumns} 
              data={mockGarderies}
              emptyText="Aucune garderie trouvée"
            />
          </div>
        </Card>

        {/* Recommandations de la garderie sélectionnée */}
        {selectedGarderie && (
          <Card title={`Recommandations - ${mockGarderies.find(g => g.id === selectedGarderie)?.nom}`}>
            <div className="space-y-4">
              {/* Onglets */}
              <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                      selectedTab === tab.id
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab.label} ({tab.count})
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="primary" size="sm">
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-add-line"></i>
                    </div>
                    Ajouter recommandation
                  </Button>
                  <Button variant="outline" size="sm">
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-mail-send-line"></i>
                    </div>
                    Envoyer rappel
                  </Button>
                </div>
                <div className="flex items-center gap-3">
                  <select className="px-3 py-1 border border-gray-300 rounded text-sm pr-8">
                    <option value="toutes">Toutes catégories</option>
                    <option value="securite">Sécurité</option>
                    <option value="hygiene">Hygiène</option>
                    <option value="personnel">Personnel</option>
                    <option value="equipement">Équipement</option>
                  </select>
                </div>
              </div>

              <Table 
                columns={recommendationColumns} 
                data={filteredRecommendations}
                emptyText="Aucune recommandation pour cette garderie"
              />
            </div>
          </Card>
        )}

        {/* Actions rapides */}
        <Card title="Actions rapides">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="justify-start">
              <div className="w-5 h-5 flex items-center justify-center mr-3">
                <i className="ri-calendar-event-line"></i>
              </div>
              <div className="text-left">
                <div className="font-medium">Planifier visite de suivi</div>
                <div className="text-sm text-gray-500">Programmer une visite de contrôle</div>
              </div>
            </Button>
            <Button variant="outline" className="justify-start">
              <div className="w-5 h-5 flex items-center justify-center mr-3">
                <i className="ri-file-text-line"></i>
              </div>
              <div className="text-left">
                <div className="font-medium">Générer rapport</div>
                <div className="text-sm text-gray-500">Créer un rapport de suivi</div>
              </div>
            </Button>
            <Button variant="outline" className="justify-start">
              <div className="w-5 h-5 flex items-center justify-center mr-3">
                <i className="ri-notification-line"></i>
              </div>
              <div className="text-left">
                <div className="font-medium">Configurer alertes</div>
                <div className="text-sm text-gray-500">Paramétrer les notifications</div>
              </div>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}