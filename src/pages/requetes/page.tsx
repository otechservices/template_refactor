
import React, { useState } from 'react';
import Card from '../../components/base/Card';
import Table from '../../components/base/Table';
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Badge from '../../components/base/Badge';

const mockRequetes = [
  {
    id: 1,
    reference: 'CAPE-REQ-001',
    type: 'CAPE',
    denomination: 'Centre Éducatif Les Petits Princes',
    dateDepot: '2024-01-15',
    statut: 'En cours',
    priorite: 'Normale'
  },
  {
    id: 2,
    reference: 'GARD-REQ-002',
    type: 'Garderie',
    denomination: 'Garderie Arc-en-Ciel',
    dateDepot: '2024-01-12',
    statut: 'En attente',
    priorite: 'Urgente'
  },
  {
    id: 3,
    reference: 'CAPE-REQ-003',
    type: 'CAPE',
    denomination: 'École Maternelle Soleil',
    dateDepot: '2024-01-10',
    statut: 'Approuvée',
    priorite: 'Normale'
  }
];

export default function Requetes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('toutes');

  const columns = [
    {
      key: 'reference',
      title: 'Référence',
      width: '150px'
    },
    {
      key: 'type',
      title: 'Type',
      width: '100px',
      render: (value: string) => (
        <Badge variant={value === 'CAPE' ? 'primary' : 'secondary'}>
          {value}
        </Badge>
      )
    },
    {
      key: 'denomination',
      title: 'Dénomination',
      width: '300px'
    },
    {
      key: 'dateDepot',
      title: 'Date de dépôt',
      width: '120px'
    },
    {
      key: 'statut',
      title: 'Statut',
      width: '120px',
      render: (value: string) => {
        const variant = value === 'Approuvée' ? 'success' : 
                      value === 'En cours' ? 'warning' : 'default';
        return (
          <Badge variant={variant}>
            {value}
          </Badge>
        );
      }
    },
    {
      key: 'priorite',
      title: 'Priorité',
      width: '100px',
      render: (value: string) => (
        <Badge variant={value === 'Urgente' ? 'danger' : 'default'}>
          {value}
        </Badge>
      )
    },
    {
      key: 'actions',
      title: 'Actions',
      width: '150px',
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
          <Button variant="ghost" size="sm">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-delete-bin-line"></i>
            </div>
          </Button>
        </div>
      )
    }
  ];

  const tabs = [
    { id: 'toutes', label: 'Toutes les requêtes', count: mockRequetes.length },
    { id: 'cape', label: 'CAPE', count: mockRequetes.filter(r => r.type === 'CAPE').length },
    { id: 'garderie', label: 'Garderie', count: mockRequetes.filter(r => r.type === 'Garderie').length },
    { id: 'en-cours', label: 'En cours', count: mockRequetes.filter(r => r.statut === 'En cours').length },
    { id: 'approuvees', label: 'Approuvées', count: mockRequetes.filter(r => r.statut === 'Approuvée').length }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* En-tête avec statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">24</div>
          <div className="text-sm text-gray-600">Total Requêtes</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
          <div className="text-sm text-gray-600">En Attente</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">12</div>
          <div className="text-sm text-gray-600">Approuvées</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-red-600 mb-2">4</div>
          <div className="text-sm text-gray-600">Rejetées</div>
        </Card>
      </div>

      {/* Actions rapides */}
      <Card>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Actions rapides</h3>
          <div className="flex gap-3">
            <Button variant="primary">
              <div className="w-4 h-4 flex items-center justify-center mr-2">
                <i className="ri-add-line"></i>
              </div>
              Nouvelle requête CAPE
            </Button>
            <Button variant="outline">
              <div className="w-4 h-4 flex items-center justify-center mr-2">
                <i className="ri-add-line"></i>
              </div>
              Nouvelle requête Garderie
            </Button>
          </div>
        </div>
      </Card>

      {/* Liste des requêtes */}
      <Card title="Gestion des requêtes">
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
                placeholder="Rechercher une requête..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon="ri-search-line"
              />
            </div>
          </div>

          <Table 
            columns={columns} 
            data={mockRequetes}
            emptyText="Aucune requête trouvée"
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
    </div>
  );
}
