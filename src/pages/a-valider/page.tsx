
import React, { useState } from 'react';
import Card from '../../components/base/Card';
import Table from '../../components/base/Table';
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Badge from '../../components/base/Badge';

const mockDemandes = [
  {
    id: 1,
    reference: 'CAPE-VAL-001',
    type: 'CAPE',
    denomination: 'Centre Éducatif Espoir',
    demandeur: 'Marie Kouadio',
    dateDepot: '2024-01-20',
    statut: 'En attente',
    priorite: 'Urgente',
    documents: 8,
    documentsValides: 5
  },
  {
    id: 2,
    reference: 'GARD-VAL-002',
    type: 'Garderie',
    denomination: 'Garderie Les Bambins',
    demandeur: 'Jean Baptiste',
    dateDepot: '2024-01-18',
    statut: 'En cours',
    priorite: 'Normale',
    documents: 6,
    documentsValides: 6
  },
  {
    id: 3,
    reference: 'CAPE-VAL-003',
    type: 'CAPE',
    denomination: 'École Maternelle Joie',
    demandeur: 'Fatou Traoré',
    dateDepot: '2024-01-15',
    statut: 'Documents manquants',
    priorite: 'Normale',
    documents: 8,
    documentsValides: 3
  },
  {
    id: 4,
    reference: 'GARD-VAL-004',
    type: 'Garderie',
    denomination: 'Crèche Rainbow',
    demandeur: 'Alain Koffi',
    dateDepot: '2024-01-12',
    statut: 'Prêt à valider',
    priorite: 'Normale',
    documents: 7,
    documentsValides: 7
  }
];

export default function AValider() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('tous');

  const columns = [
    {
      key: 'reference',
      title: 'Référence',
      width: '120px'
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
      key: 'denomination',
      title: 'Dénomination',
      width: '200px'
    },
    {
      key: 'demandeur',
      title: 'Demandeur',
      width: '150px'
    },
    {
      key: 'dateDepot',
      title: 'Date dépôt',
      width: '100px'
    },
    {
      key: 'statut',
      title: 'Statut',
      width: '140px',
      render: (value: string) => {
        const variant = value === 'Prêt à valider' ? 'success' : 
                      value === 'En cours' ? 'warning' : 
                      value === 'Documents manquants' ? 'danger' : 'default';
        return (
          <Badge variant={variant}>
            {value}
          </Badge>
        );
      }
    },
    {
      key: 'documents',
      title: 'Documents',
      width: '100px',
      render: (value: number, row: any) => (
        <span className={row.documentsValides === value ? 'text-green-600' : 'text-orange-600'}>
          {row.documentsValides}/{value}
        </span>
      )
    },
    {
      key: 'priorite',
      title: 'Priorité',
      width: '80px',
      render: (value: string) => (
        <Badge variant={value === 'Urgente' ? 'danger' : 'default'}>
          {value}
        </Badge>
      )
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
              <i className="ri-check-line"></i>
            </div>
          </Button>
          <Button variant="ghost" size="sm">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-close-line"></i>
            </div>
          </Button>
        </div>
      )
    }
  ];

  const tabs = [
    { id: 'tous', label: 'Tous', count: mockDemandes.length },
    { id: 'cape', label: 'CAPE', count: mockDemandes.filter(d => d.type === 'CAPE').length },
    { id: 'garderie', label: 'Garderie', count: mockDemandes.filter(d => d.type === 'Garderie').length },
    { id: 'urgents', label: 'Urgents', count: mockDemandes.filter(d => d.priorite === 'Urgente').length },
    { id: 'prets', label: 'Prêts', count: mockDemandes.filter(d => d.statut === 'Prêt à valider').length }
  ];

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
              <span className="ml-1 text-gray-500 font-medium">À valider</span>
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
                <i className="ri-file-list-line text-blue-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">15</div>
            <div className="text-sm text-gray-600">Total à valider</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-alert-line text-red-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">3</div>
            <div className="text-sm text-gray-600">Urgents</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-check-line text-green-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">8</div>
            <div className="text-sm text-gray-600">Prêts à valider</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-file-warning-line text-orange-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">4</div>
            <div className="text-sm text-gray-600">Documents manquants</div>
          </Card>
        </div>

        {/* Liste des demandes */}
        <Card title="Demandes à valider">
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
                    <i className="ri-check-double-line"></i>
                  </div>
                  Valider la sélection
                </Button>
                <Button variant="outline" size="sm">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-download-line"></i>
                  </div>
                  Exporter
                </Button>
              </div>
              <div className="w-64">
                <Input
                  placeholder="Rechercher une demande..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  icon="ri-search-line"
                />
              </div>
            </div>

            <Table 
              columns={columns} 
              data={mockDemandes}
              emptyText="Aucune demande à valider"
            />

            <div className="flex items-center justify-between pt-4">
              <div className="text-sm text-gray-600">
                Affichage de l'élément 1 à 4 sur 4 éléments
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

        {/* Actions rapides */}
        <Card title="Actions rapides">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="justify-start">
              <div className="w-5 h-5 flex items-center justify-center mr-3">
                <i className="ri-file-check-line"></i>
              </div>
              <div className="text-left">
                <div className="font-medium">Validation en lot</div>
                <div className="text-sm text-gray-500">Valider plusieurs demandes</div>
              </div>
            </Button>
            <Button variant="outline" className="justify-start">
              <div className="w-5 h-5 flex items-center justify-center mr-3">
                <i className="ri-mail-send-line"></i>
              </div>
              <div className="text-left">
                <div className="font-medium">Envoyer rappels</div>
                <div className="text-sm text-gray-500">Documents manquants</div>
              </div>
            </Button>
            <Button variant="outline" className="justify-start">
              <div className="w-5 h-5 flex items-center justify-center mr-3">
                <i className="ri-calendar-event-line"></i>
              </div>
              <div className="text-left">
                <div className="font-medium">Planifier visite</div>
                <div className="text-sm text-gray-500">Organiser les visites</div>
              </div>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
