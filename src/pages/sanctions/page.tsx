
import React, { useState } from 'react';
import Card from '../../components/base/Card';
import Table from '../../components/base/Table';
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Badge from '../../components/base/Badge';

const mockSanctions = [
  {
    id: 1,
    reference: 'SANC-001',
    etablissement: 'Centre Éducatif Les Petits Princes',
    type: 'CAPE',
    typeSanction: 'Avertissement',
    motif: 'Non-respect des normes d\'hygiène',
    dateSanction: '2024-01-15',
    statut: 'Active',
    gravite: 'Mineure'
  },
  {
    id: 2,
    reference: 'SANC-002',
    etablissement: 'Garderie Arc-en-Ciel',
    type: 'Garderie',
    typeSanction: 'Suspension temporaire',
    motif: 'Défaillance dans l\'encadrement',
    dateSanction: '2024-01-10',
    statut: 'En cours',
    gravite: 'Majeure'
  },
  {
    id: 3,
    reference: 'SANC-003',
    etablissement: 'École Maternelle Soleil',
    type: 'CAPE',
    typeSanction: 'Amende',
    motif: 'Dépassement de capacité d\'accueil',
    dateSanction: '2024-01-05',
    statut: 'Résolue',
    gravite: 'Modérée'
  }
];

export default function Sanctions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('toutes');

  const columns = [
    {
      key: 'reference',
      title: 'Référence',
      width: '120px'
    },
    {
      key: 'etablissement',
      title: 'Établissement',
      width: '250px'
    },
    {
      key: 'type',
      title: 'Type',
      width: '80px',
      render: (value: string) => (
        <Badge variant={value === 'CAPE' ? 'primary' : 'secondary'}>
          {value}
        </Badge>
      )
    },
    {
      key: 'typeSanction',
      title: 'Type de sanction',
      width: '150px'
    },
    {
      key: 'gravite',
      title: 'Gravité',
      width: '100px',
      render: (value: string) => {
        const variant = value === 'Majeure' ? 'danger' : 
                      value === 'Modérée' ? 'warning' : 'default';
        return (
          <Badge variant={variant}>
            {value}
          </Badge>
        );
      }
    },
    {
      key: 'dateSanction',
      title: 'Date',
      width: '100px'
    },
    {
      key: 'statut',
      title: 'Statut',
      width: '100px',
      render: (value: string) => {
        const variant = value === 'Résolue' ? 'success' : 
                      value === 'En cours' ? 'warning' : 'default';
        return (
          <Badge variant={variant}>
            {value}
          </Badge>
        );
      }
    },
    {
      key: 'actions',
      title: 'Actions',
      width: '120px',
      render: () => (
        <div className="flex gap-2">
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
        </div>
      )
    }
  ];

  const tabs = [
    { id: 'toutes', label: 'Toutes', count: mockSanctions.length },
    { id: 'actives', label: 'Actives', count: mockSanctions.filter(s => s.statut === 'Active').length },
    { id: 'en-cours', label: 'En cours', count: mockSanctions.filter(s => s.statut === 'En cours').length },
    { id: 'resolues', label: 'Résolues', count: mockSanctions.filter(s => s.statut === 'Résolue').length }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* En-tête avec statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="text-center">
          <div className="text-3xl font-bold text-red-600 mb-2">15</div>
          <div className="text-sm text-gray-600">Total Sanctions</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
          <div className="text-sm text-gray-600">En Cours</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">5</div>
          <div className="text-sm text-gray-600">Résolues</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
          <div className="text-sm text-gray-600">Actives</div>
        </Card>
      </div>

      {/* Actions rapides */}
      <Card>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Gestion des sanctions</h3>
          <div className="flex gap-3">
            <Button variant="primary">
              <div className="w-4 h-4 flex items-center justify-center mr-2">
                <i className="ri-add-line"></i>
              </div>
              Nouvelle sanction
            </Button>
            <Button variant="outline">
              <div className="w-4 h-4 flex items-center justify-center mr-2">
                <i className="ri-file-download-line"></i>
              </div>
              Exporter
            </Button>
          </div>
        </div>
      </Card>

      {/* Tableau des sanctions */}
      <Card title="Liste des sanctions">
        <div className="space-y-4">
          {/* Onglets de filtrage */}
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
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
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Afficher</span>
                <select className="px-3 py-1 border border-gray-300 rounded text-sm pr-8">
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
                <span className="text-sm text-gray-600">éléments</span>
              </div>
            </div>
            <div className="w-64">
              <Input
                placeholder="Rechercher une sanction..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon="ri-search-line"
              />
            </div>
          </div>

          <Table 
            columns={columns} 
            data={mockSanctions}
            emptyText="Aucune sanction trouvée"
          />

          <div className="flex items-center justify-between pt-4">
            <div className="text-sm text-gray-600">
              Affichage de l'élément 1 à 3 sur 3 éléments
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                Précédent
              </Button>
              <Button variant="outline" size="sm" disabled>
                Suivant
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Statistiques par type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Sanctions par type">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <span className="font-medium">Avertissements</span>
              <span className="text-2xl font-bold text-orange-600">8</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <span className="font-medium">Amendes</span>
              <span className="text-2xl font-bold text-red-600">4</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <span className="font-medium">Suspensions</span>
              <span className="text-2xl font-bold text-purple-600">3</span>
            </div>
          </div>
        </Card>

        <Card title="Tendances mensuelles">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <span className="font-medium">Janvier 2024</span>
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <span className="font-medium">Décembre 2023</span>
              <span className="text-2xl font-bold text-green-600">2</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <span className="font-medium">Novembre 2023</span>
              <span className="text-2xl font-bold text-gray-600">5</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
