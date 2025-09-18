
import React, { useState } from 'react';
import Card from '../../components/base/Card';
import Table from '../../components/base/Table';
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Badge from '../../components/base/Badge';

const mockVisites = [
  {
    id: 1,
    etablissement: 'Centre Éducatif Les Petits Princes',
    type: 'CAPE',
    dateVisite: '2024-01-15',
    inspecteur: 'Marie Dubois',
    statut: 'Terminée',
    rapport: 'Conforme',
    score: 85
  },
  {
    id: 2,
    etablissement: 'Garderie Arc-en-Ciel',
    type: 'Garderie',
    dateVisite: '2024-01-20',
    inspecteur: 'Jean Martin',
    statut: 'Planifiée',
    rapport: 'En attente',
    score: null
  },
  {
    id: 3,
    etablissement: 'École Maternelle Soleil',
    type: 'CAPE',
    dateVisite: '2024-01-08',
    inspecteur: 'Sophie Bernard',
    statut: 'En cours',
    rapport: 'En cours',
    score: null
  }
];

export default function VisiteTerrain() {
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const columns = [
    {
      key: 'etablissement',
      title: 'Établissement',
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
      key: 'dateVisite',
      title: 'Date de visite',
      width: '120px'
    },
    {
      key: 'inspecteur',
      title: 'Inspecteur',
      width: '150px'
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
      key: 'score',
      title: 'Score',
      width: '80px',
      render: (value: number | null) => (
        value ? <span className="font-medium text-green-600">{value}%</span> : '-'
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
              <i className="ri-download-line"></i>
            </div>
          </Button>
        </div>
      )
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* En-tête avec statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
          <div className="text-sm text-gray-600">Visites Planifiées</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">8</div>
          <div className="text-sm text-gray-600">Visites Terminées</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
          <div className="text-sm text-gray-600">En Cours</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">82%</div>
          <div className="text-sm text-gray-600">Score Moyen</div>
        </Card>
      </div>

      {/* Nouvelle visite */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Planifier une nouvelle visite</h3>
          <Button variant="primary">
            <div className="w-4 h-4 flex items-center justify-center mr-2">
              <i className="ri-add-line"></i>
            </div>
            Nouvelle visite
          </Button>
        </div>
      </Card>

      {/* Liste des visites */}
      <Card title="Visites de terrain">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Afficher</span>
                <select 
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  className="px-3 py-1 border border-gray-300 rounded text-sm pr-8"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
                <span className="text-sm text-gray-600">éléments</span>
              </div>
            </div>
            <div className="w-64">
              <Input
                placeholder="Rechercher une visite..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon="ri-search-line"
              />
            </div>
          </div>

          <Table 
            columns={columns} 
            data={mockVisites}
            emptyText="Aucune visite planifiée"
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

      {/* Calendrier des visites */}
      <Card title="Calendrier des visites à venir">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-600">20 Jan 2024</span>
                <Badge variant="default">Garderie</Badge>
              </div>
              <h4 className="font-medium mb-1">Garderie Arc-en-Ciel</h4>
              <p className="text-sm text-gray-600">Inspecteur: Jean Martin</p>
              <p className="text-sm text-gray-600">09:00 - 12:00</p>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-600">22 Jan 2024</span>
                <Badge variant="primary">CAPE</Badge>
              </div>
              <h4 className="font-medium mb-1">Centre Les Étoiles</h4>
              <p className="text-sm text-gray-600">Inspecteur: Marie Dubois</p>
              <p className="text-sm text-gray-600">14:00 - 17:00</p>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-600">25 Jan 2024</span>
                <Badge variant="primary">CAPE</Badge>
              </div>
              <h4 className="font-medium mb-1">École Montessori</h4>
              <p className="text-sm text-gray-600">Inspecteur: Sophie Bernard</p>
              <p className="text-sm text-gray-600">10:00 - 13:00</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
