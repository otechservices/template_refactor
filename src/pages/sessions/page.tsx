
import React, { useState } from 'react';
import Card from '../../components/base/Card';
import Table from '../../components/base/Table';
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Badge from '../../components/base/Badge';

const mockSessions = [
  {
    id: 1,
    code: 'SES-2024-001',
    titre: 'Session d\'agrément CAPE - Janvier 2024',
    dateDebut: '2024-01-15',
    dateFin: '2024-01-25',
    statut: 'En cours',
    nombreDossiers: 12,
    dossiersTarites: 8,
    type: 'CAPE'
  },
  {
    id: 2,
    code: 'SES-2024-002',
    titre: 'Session d\'agrément Garderie - Janvier 2024',
    dateDebut: '2024-01-20',
    dateFin: '2024-01-30',
    statut: 'Planifiée',
    nombreDossiers: 6,
    dossiersTarites: 0,
    type: 'Garderie'
  },
  {
    id: 3,
    code: 'SES-2023-012',
    titre: 'Session d\'agrément CAPE - Décembre 2023',
    dateDebut: '2023-12-10',
    dateFin: '2023-12-20',
    statut: 'Terminée',
    nombreDossiers: 15,
    dossiersTarites: 15,
    type: 'CAPE'
  }
];

export default function Sessions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('toutes');

  const columns = [
    {
      key: 'code',
      title: 'Code Session',
      width: '150px'
    },
    {
      key: 'titre',
      title: 'Titre',
      width: '300px'
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
      key: 'dateDebut',
      title: 'Date début',
      width: '120px'
    },
    {
      key: 'dateFin',
      title: 'Date fin',
      width: '120px'
    },
    {
      key: 'statut',
      title: 'Statut',
      width: '120px',
      render: (value: string) => {
        const variant = value === 'Terminée' ? 'success' : 
                      value === 'En cours' ? 'warning' : 'default';
        return (
          <Badge variant={variant}>
            {value}
          </Badge>
        );
      }
    },
    {
      key: 'progression',
      title: 'Progression',
      width: '150px',
      render: (_, row: any) => (
        <div className="flex items-center space-x-2">
          <div className="flex-1 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full" 
              style={{ width: `${(row.dossiersTarites / row.nombreDossiers) * 100}%` }}
            ></div>
          </div>
          <span className="text-sm text-gray-600">
            {row.dossiersTarites}/{row.nombreDossiers}
          </span>
        </div>
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
              <i className="ri-file-download-line"></i>
            </div>
          </Button>
        </div>
      )
    }
  ];

  const tabs = [
    { id: 'toutes', label: 'Toutes', count: mockSessions.length },
    { id: 'en-cours', label: 'En cours', count: mockSessions.filter(s => s.statut === 'En cours').length },
    { id: 'planifiees', label: 'Planifiées', count: mockSessions.filter(s => s.statut === 'Planifiée').length },
    { id: 'terminees', label: 'Terminées', count: mockSessions.filter(s => s.statut === 'Terminée').length }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* En-tête avec statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">18</div>
          <div className="text-sm text-gray-600">Total Sessions</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
          <div className="text-sm text-gray-600">En Cours</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">12</div>
          <div className="text-sm text-gray-600">Terminées</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
          <div className="text-sm text-gray-600">Planifiées</div>
        </Card>
      </div>

      {/* Actions rapides */}
      <Card>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Gestion des sessions</h3>
          <div className="flex gap-3">
            <Button variant="primary">
              <div className="w-4 h-4 flex items-center justify-center mr-2">
                <i className="ri-add-line"></i>
              </div>
              Nouvelle session
            </Button>
            <Button variant="outline">
              <div className="w-4 h-4 flex items-center justify-center mr-2">
                <i className="ri-calendar-line"></i>
              </div>
              Planifier
            </Button>
          </div>
        </div>
      </Card>

      {/* Tableau des sessions */}
      <Card title="Sessions d'agrément">
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
                placeholder="Rechercher une session..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon="ri-search-line"
              />
            </div>
          </div>

          <Table 
            columns={columns} 
            data={mockSessions}
            emptyText="Aucune session trouvée"
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

      {/* Calendrier des sessions à venir */}
      <Card title="Sessions à venir">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="primary">CAPE</Badge>
                <span className="text-sm text-gray-500">20-30 Jan</span>
              </div>
              <h4 className="font-medium mb-2">Session d'agrément CAPE</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <p>12 dossiers à traiter</p>
                <p>Début: 20 janvier 2024</p>
              </div>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary">Garderie</Badge>
                <span className="text-sm text-gray-500">25 Jan - 5 Fév</span>
              </div>
              <h4 className="font-medium mb-2">Session d'agrément Garderie</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <p>8 dossiers à traiter</p>
                <p>Début: 25 janvier 2024</p>
              </div>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="primary">CAPE</Badge>
                <span className="text-sm text-gray-500">10-20 Fév</span>
              </div>
              <h4 className="font-medium mb-2">Session extraordinaire</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <p>5 dossiers urgents</p>
                <p>Début: 10 février 2024</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
