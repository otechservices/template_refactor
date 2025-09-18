import React, { useState } from 'react';
import Card from '../../components/base/Card';
import Table from '../../components/base/Table';
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Badge from '../../components/base/Badge';

const mockAgrements = [
  {
    id: 1,
    reference: 'AGR-CAPE-001',
    type: 'CAPE',
    denomination: 'Centre Éducatif Espoir',
    demandeur: 'Marie Kouadio',
    dateVisite: '2024-01-20',
    scoreVisite: 18,
    statut: 'En attente de validation',
    recommandations: 2,
    documentsValides: true
  },
  {
    id: 2,
    reference: 'AGR-GARD-002',
    type: 'Garderie',
    denomination: 'Garderie Les Bambins',
    demandeur: 'Jean Baptiste',
    dateVisite: '2024-01-18',
    scoreVisite: 16,
    statut: 'Prêt à valider',
    recommandations: 1,
    documentsValides: true
  },
  {
    id: 3,
    reference: 'AGR-CAPE-003',
    type: 'CAPE',
    denomination: 'École Maternelle Joie',
    demandeur: 'Fatou Traoré',
    dateVisite: '2024-01-15',
    scoreVisite: 14,
    statut: 'Documents manquants',
    recommandations: 4,
    documentsValides: false
  },
  {
    id: 4,
    reference: 'AGR-GARD-004',
    type: 'Garderie',
    denomination: 'Crèche Rainbow',
    demandeur: 'Alain Koffi',
    dateVisite: '2024-01-12',
    scoreVisite: 19,
    statut: 'Validé',
    recommandations: 0,
    documentsValides: true
  }
];

export default function AgrementsValider() {
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
      key: 'scoreVisite',
      title: 'Score visite',
      width: '100px',
      render: (value: number) => (
        <div className="flex items-center gap-2">
          <span className={`font-bold ${value >= 16 ? 'text-green-600' : value >= 12 ? 'text-orange-600' : 'text-red-600'}`}>
            {value}/20
          </span>
        </div>
      )
    },
    {
      key: 'statut',
      title: 'Statut',
      width: '160px',
      render: (value: string) => {
        const variant = value === 'Validé' ? 'success' : 
                      value === 'Prêt à valider' ? 'primary' : 
                      value === 'Documents manquants' ? 'danger' : 'warning';
        return (
          <Badge variant={variant}>
            {value}
          </Badge>
        );
      }
    },
    {
      key: 'recommandations',
      title: 'Recommandations',
      width: '140px',
      render: (value: number) => (
        <span className={value === 0 ? 'text-green-600' : value <= 2 ? 'text-orange-600' : 'text-red-600'}>
          {value} restante{value !== 1 ? 's' : ''}
        </span>
      )
    },
    {
      key: 'actions',
      title: 'Actions',
      width: '150px',
      render: (value: any, row: any) => (
        <div className="flex gap-1">
          <Button variant="ghost" size="sm">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-eye-line"></i>
            </div>
          </Button>
          {row.statut === 'Prêt à valider' && (
            <Button variant="ghost" size="sm">
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-check-line text-green-600"></i>
              </div>
            </Button>
          )}
          <Button variant="ghost" size="sm">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-file-text-line"></i>
            </div>
          </Button>
        </div>
      )
    }
  ];

  const tabs = [
    { id: 'tous', label: 'Tous', count: mockAgrements.length },
    { id: 'prets', label: 'Prêts à valider', count: mockAgrements.filter(a => a.statut === 'Prêt à valider').length },
    { id: 'attente', label: 'En attente', count: mockAgrements.filter(a => a.statut === 'En attente de validation').length },
    { id: 'valides', label: 'Validés', count: mockAgrements.filter(a => a.statut === 'Validé').length }
  ];

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <span className="text-gray-700 hover:text-blue-600 font-medium">Agréments existants</span>
          </li>
          <li>
            <div className="flex items-center">
              <i className="ri-arrow-right-s-line text-gray-400"></i>
              <span className="ml-1 text-gray-500 font-medium">Agréments à valider</span>
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
                <i className="ri-award-line text-blue-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">25</div>
            <div className="text-sm text-gray-600">Total agréments</div>
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
                <i className="ri-time-line text-orange-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">12</div>
            <div className="text-sm text-gray-600">En attente</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-shield-check-line text-green-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">18</div>
            <div className="text-sm text-gray-600">Validés ce mois</div>
          </Card>
        </div>

        {/* Liste des agréments */}
        <Card title="Agréments à valider">
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
                    <i className="ri-calendar-event-line"></i>
                  </div>
                  Planifier validation
                </Button>
              </div>
              <div className="w-64">
                <Input
                  placeholder="Rechercher un agrément..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  icon="ri-search-line"
                />
              </div>
            </div>

            <Table 
              columns={columns} 
              data={mockAgrements}
              emptyText="Aucun agrément à valider"
            />
          </div>
        </Card>

        {/* Critères de validation */}
        <Card title="Critères de validation">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Score minimum requis</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>≥ 16/20 : Validation automatique</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span>12-15/20 : Validation conditionnelle</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>&lt; 12/20 : Refus temporaire</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Documents requis</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <i className="ri-check-line text-green-600"></i>
                  <span>Rapport de visite complet</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-check-line text-green-600"></i>
                  <span>Documents administratifs</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-check-line text-green-600"></i>
                  <span>Recommandations traitées</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-check-line text-green-600"></i>
                  <span>Validation commission</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}