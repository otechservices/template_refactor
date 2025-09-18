
import React, { useState } from 'react';
import Card from '../../components/base/Card';
import Input from '../../components/base/Input';
import Button from '../../components/base/Button';
import Badge from '../../components/base/Badge';
import Table from '../../components/base/Table';

const mockResults = [
  {
    id: 1,
    reference: 'CAPE-001',
    denomination: 'Centre Éducatif Espoir',
    directeur: 'Marie Kouadio',
    commune: 'Cocody',
    statut: 'Actif',
    dateCreation: '2023-03-15',
    capacite: 45,
    enfantsInscrits: 42,
    tauxOccupation: 93
  },
  {
    id: 2,
    reference: 'CAPE-002',
    denomination: 'École Maternelle Joie',
    directeur: 'Jean Baptiste',
    commune: 'Plateau',
    statut: 'Actif',
    dateCreation: '2022-09-20',
    capacite: 60,
    enfantsInscrits: 58,
    tauxOccupation: 97
  },
  {
    id: 3,
    reference: 'CAPE-003',
    denomination: 'Jardin d\'Enfants Rainbow',
    directeur: 'Fatou Traoré',
    commune: 'Marcory',
    statut: 'Suspendu',
    dateCreation: '2023-01-10',
    capacite: 30,
    enfantsInscrits: 0,
    tauxOccupation: 0
  }
];

export default function CapeSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    commune: '',
    statut: '',
    capaciteMin: '',
    capaciteMax: ''
  });
  const [showAdvanced, setShowAdvanced] = useState(false);

  const columns = [
    {
      key: 'reference',
      title: 'Référence',
      width: '100px'
    },
    {
      key: 'denomination',
      title: 'Dénomination',
      width: '200px'
    },
    {
      key: 'directeur',
      title: 'Directeur',
      width: '150px'
    },
    {
      key: 'commune',
      title: 'Commune',
      width: '120px'
    },
    {
      key: 'statut',
      title: 'Statut',
      width: '100px',
      render: (value: string) => (
        <Badge variant={value === 'Actif' ? 'success' : value === 'Suspendu' ? 'danger' : 'default'}>
          {value}
        </Badge>
      )
    },
    {
      key: 'capacite',
      title: 'Capacité',
      width: '80px'
    },
    {
      key: 'enfantsInscrits',
      title: 'Inscrits',
      width: '80px'
    },
    {
      key: 'tauxOccupation',
      title: 'Taux',
      width: '80px',
      render: (value: number) => (
        <span className={value > 90 ? 'text-green-600 font-medium' : value > 70 ? 'text-orange-600' : 'text-red-600'}>
          {value}%
        </span>
      )
    },
    {
      key: 'actions',
      title: 'Actions',
      width: '100px',
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
        </div>
      )
    }
  ];

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <span className="text-gray-700 hover:text-blue-600 font-medium">Recherche</span>
          </li>
          <li>
            <div className="flex items-center">
              <i className="ri-arrow-right-s-line text-gray-400"></i>
              <span className="ml-1 text-gray-500 font-medium">CAPE</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="space-y-6">
        {/* Recherche */}
        <Card title="Recherche de CAPE">
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Rechercher par nom, référence, directeur..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  icon="ri-search-line"
                />
              </div>
              <Button variant="primary">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-search-line"></i>
                </div>
                Rechercher
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowAdvanced(!showAdvanced)}
              >
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-filter-line"></i>
                </div>
                Filtres avancés
              </Button>
            </div>

            {showAdvanced && (
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Commune
                    </label>
                    <select 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8"
                      value={filters.commune}
                      onChange={(e) => setFilters({...filters, commune: e.target.value})}
                    >
                      <option value="">Toutes les communes</option>
                      <option value="Cocody">Cocody</option>
                      <option value="Plateau">Plateau</option>
                      <option value="Marcory">Marcory</option>
                      <option value="Treichville">Treichville</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Statut
                    </label>
                    <select 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8"
                      value={filters.statut}
                      onChange={(e) => setFilters({...filters, statut: e.target.value})}
                    >
                      <option value="">Tous les statuts</option>
                      <option value="Actif">Actif</option>
                      <option value="Suspendu">Suspendu</option>
                      <option value="En attente">En attente</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Capacité min
                    </label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={filters.capaciteMin}
                      onChange={(e) => setFilters({...filters, capaciteMin: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Capacité max
                    </label>
                    <Input
                      type="number"
                      placeholder="100"
                      value={filters.capaciteMax}
                      onChange={(e) => setFilters({...filters, capaciteMax: e.target.value})}
                    />
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm">
                    Réinitialiser
                  </Button>
                  <Button variant="primary" size="sm">
                    Appliquer les filtres
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Résultats */}
        <Card title="Résultats de recherche (3 CAPE trouvés)">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-download-line"></i>
                  </div>
                  Exporter
                </Button>
                <Button variant="outline" size="sm">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-printer-line"></i>
                  </div>
                  Imprimer
                </Button>
              </div>
              <div className="text-sm text-gray-600">
                3 résultats trouvés
              </div>
            </div>

            <Table 
              columns={columns} 
              data={mockResults}
              emptyText="Aucun CAPE trouvé"
            />
          </div>
        </Card>

        {/* Recherches sauvegardées */}
        <Card title="Recherches sauvegardées">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium text-gray-900">CAPE actifs - Cocody</div>
                <div className="text-sm text-gray-600">Dernière utilisation : 15 Jan 2024</div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-play-line"></i>
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
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-medium text-gray-900">Capacité &gt; 50 enfants</div>
                <div className="text-sm text-gray-600">Dernière utilisation : 12 Jan 2024</div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-play-line"></i>
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
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
