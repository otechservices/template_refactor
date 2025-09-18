
import React, { useState } from 'react';
import Card from '../../components/base/Card';
import Table from '../../components/base/Table';
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Badge from '../../components/base/Badge';

const mockData = [
  {
    id: 1,
    typeGarderie: 'Publique',
    denomination: 'Garderie Les Bambins',
    nombresEnfants: 28,
    effectifPersonnel: 5,
    statut: 'Actif',
    derniereVisite: '2024-01-12'
  },
  {
    id: 2,
    typeGarderie: 'Privée',
    denomination: 'Crèche Bébé Bonheur',
    nombresEnfants: 35,
    effectifPersonnel: 7,
    statut: 'En révision',
    derniereVisite: '2024-01-05'
  },
  {
    id: 3,
    typeGarderie: 'Associative',
    denomination: 'Garderie Petit Monde',
    nombresEnfants: 22,
    effectifPersonnel: 4,
    statut: 'Actif',
    derniereVisite: '2024-01-18'
  }
];

const rapportsActivite = [
  {
    id: 1,
    description: 'Rapport mensuel - Janvier 2024',
    statut: 'Transmis',
    dateTransmission: '2024-01-31',
    fichier: 'rapport_garderie_janvier_2024.pdf'
  },
  {
    id: 2,
    description: 'Rapport trimestriel - Q4 2023',
    statut: 'En attente',
    dateTransmission: '',
    fichier: 'rapport_garderie_q4_2023.pdf'
  }
];

export default function Garderie() {
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const columns = [
    {
      key: 'typeGarderie',
      title: 'Type Garderie',
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
          <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
          <div className="text-sm text-gray-600">Garderies Actives</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">215</div>
          <div className="text-sm text-gray-600">Enfants Total</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">42</div>
          <div className="text-sm text-gray-600">Personnel Total</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">2</div>
          <div className="text-sm text-gray-600">En Révision</div>
        </Card>
      </div>

      {/* Liste des Garderies */}
      <Card title="Liste des garderies ayant déposé des rapports d'activité">
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
            Les rapports d'activité pour les garderies doivent être soumis mensuellement et inclure :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Nombre d'enfants accueillis par tranche d'âge</li>
            <li>Activités d'éveil et de développement réalisées</li>
            <li>Suivi médical et nutritionnel des enfants</li>
            <li>Formation du personnel éducatif</li>
            <li>Respect des normes d'hygiène et de sécurité</li>
            <li>Collaboration avec les familles</li>
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
