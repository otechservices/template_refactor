
import React, { useState } from 'react';
import Card from '../../components/base/Card';
import Table from '../../components/base/Table';
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Badge from '../../components/base/Badge';

const mockData = [
  {
    id: 1,
    typeCape: 'Type A',
    denomination: 'Centre Éducatif Les Petits Princes',
    nombresEnfants: 45,
    effectifPersonnel: 8,
    statut: 'Actif',
    derniereVisite: '2024-01-15'
  },
  {
    id: 2,
    typeCape: 'Type B',
    denomination: 'Garderie Arc-en-Ciel',
    nombresEnfants: 32,
    effectifPersonnel: 6,
    statut: 'En révision',
    derniereVisite: '2024-01-10'
  },
  {
    id: 3,
    typeCape: 'Type C',
    denomination: 'École Maternelle Soleil',
    nombresEnfants: 67,
    effectifPersonnel: 12,
    statut: 'Actif',
    derniereVisite: '2024-01-08'
  }
];

const rapportsActivite = [
  {
    id: 1,
    description: 'Rapport mensuel - Janvier 2024',
    statut: 'Transmis',
    dateTransmission: '2024-01-31',
    fichier: 'rapport_janvier_2024.pdf'
  },
  {
    id: 2,
    description: 'Rapport trimestriel - Q4 2023',
    statut: 'En attente',
    dateTransmission: '',
    fichier: 'rapport_q4_2023.pdf'
  }
];

export default function Cape() {
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const columns = [
    {
      key: 'typeCape',
      title: 'Type CAPE',
      width: '120px'
    },
    {
      key: 'denomination',
      title: 'Dénomination',
      width: '300px'
    },
    {
      key: 'nombresEnfants',
      title: 'Nombres d\'enfants',
      width: '150px',
      render: (value: number) => (
        <span className="font-medium">{value}</span>
      )
    },
    {
      key: 'effectifPersonnel',
      title: 'Effectif du personnel',
      width: '180px',
      render: (value: number) => (
        <span className="font-medium">{value}</span>
      )
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
        </div>
      )
    }
  ];

  const rapportColumns = [
    {
      key: 'description',
      title: 'Description',
      width: '300px'
    },
    {
      key: 'statut',
      title: 'Statut',
      width: '120px',
      render: (value: string) => (
        <Badge variant={value === 'Transmis' ? 'success' : 'warning'}>
          {value}
        </Badge>
      )
    },
    {
      key: 'dateTransmission',
      title: 'Date de transmission',
      width: '180px',
      render: (value: string) => value || '-'
    },
    {
      key: 'actions',
      title: 'Actions',
      width: '150px',
      render: () => (
        <div className="flex gap-2">
          <Button variant="ghost" size="sm">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-download-line"></i>
            </div>
          </Button>
          <Button variant="ghost" size="sm">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-eye-line"></i>
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
          <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
          <div className="text-sm text-gray-600">CAPE Actifs</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">456</div>
          <div className="text-sm text-gray-600">Enfants Total</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">89</div>
          <div className="text-sm text-gray-600">Personnel Total</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
          <div className="text-sm text-gray-600">En Révision</div>
        </Card>
      </div>

      {/* Liste des CAPE */}
      <Card title="Liste des capes ayant déposé des rapports d'activité">
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
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon="ri-search-line"
              />
            </div>
          </div>

          <Table 
            columns={columns} 
            data={mockData}
            emptyText="Aucune donnée disponible dans le tableau"
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

      {/* Rapports d'activité */}
      <Card title="Rapports d'activité">
        <Table 
          columns={rapportColumns} 
          data={rapportsActivite}
          emptyText="Aucun rapport disponible"
        />
      </Card>

      {/* Instructions */}
      <Card title="Instructions sur le rapport d'activité">
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-4">
            Les rapports d'activité doivent être soumis mensuellement et inclure les informations suivantes :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Nombre d'enfants accueillis durant la période</li>
            <li>Activités pédagogiques réalisées</li>
            <li>Incidents ou événements particuliers</li>
            <li>État du personnel et formations suivies</li>
            <li>Respect des normes de sécurité et d'hygiène</li>
          </ul>
          <div className="mt-6">
            <Button variant="primary">
              <div className="w-4 h-4 flex items-center justify-center mr-2">
                <i className="ri-download-line"></i>
              </div>
              Télécharger le modèle
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
