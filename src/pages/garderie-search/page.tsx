
import React, { useState } from 'react';
import Card from '../../components/base/Card';
import Input from '../../components/base/Input';
import Button from '../../components/base/Button';
import Badge from '../../components/base/Badge';
import Table from '../../components/base/Table';

const mockResults = [
  {
    id: 1,
    reference: 'GARD-001',
    denomination: 'Crèche Les Bambins',
    directeur: 'Aïcha Diallo',
    commune: 'Yopougon',
    statut: 'Actif',
    dateCreation: '2023-05-12',
    capacite: 25,
    enfantsInscrits: 23,
    trancheAge: '0-3 ans',
    tauxOccupation: 92
  },
  {
    id: 2,
    reference: 'GARD-002',
    denomination: 'Garderie Sunshine',
    directeur: 'Kofi Asante',
    commune: 'Adjamé',
    statut: 'Actif',
    dateCreation: '2022-11-08',
    capacite: 40,
    enfantsInscrits: 38,
    trancheAge: '1-4 ans',
    tauxOccupation: 95
  },
  {
    id: 3,
    reference: 'GARD-003',
    denomination: 'Pouponnière Arc-en-ciel',
    directeur: 'Marie Coulibaly',
    commune: 'Koumassi',
    statut: 'En révision',
    dateCreation: '2023-02-20',
    capacite: 15,
    enfantsInscrits: 10,
    trancheAge: '0-2 ans',
    tauxOccupation: 67
  }
];

export default function GarderieSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    commune: '',
    statut: '',
    trancheAge: '',
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
      width: '180px'
    },
    {
      key: 'directeur',
      title: 'Directeur',
      width: '130px'
    },
    {
      key: 'commune',
      title: 'Commune',
      width: '100px'
    },
    {
      key: 'trancheAge',
      title: 'Âge',
      width: '80px'
    },
    {
      key: 'statut',
      title: 'Statut',
      width: '100px',
      render: (value: string) => (
        <Badge variant={value === 'Actif' ? 'success' : value === 'En révision' ? 'warning' : 'default'}>
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
              <span className="ml-1 text-gray-500 font-medium">Garderie</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="space-y-6">
        {/* Recherche */}
        <Card title="Recherche de Garderies">
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
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Commune
                    </label>
                    <select 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8"
                      value={filters.commune}
                      onChange={(e) => setFilters({...filters, commune: e.target.value})}
                    >
                      <option value="">Toutes</option>
                      <option value="Yopougon">Yopougon</option>
                      <option value="Adjamé">Adjamé</option>
                      <option value="Koumassi">Koumassi</option>
                      <option value="Port-Bouët">Port-Bouët</option>
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
                      <option value="">Tous</option>
                      <option value="Actif">Actif</option>
                      <option value="En révision">En révision</option>
                      <option value="Suspendu">Suspendu</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tranche d'âge
                    </label>
                    <select 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8"
                      value={filters.trancheAge}
                      onChange={(e) => setFilters({...filters, trancheAge: e.target.value})}
                    >
                      <option value="">Toutes</option>
                      <option value="0-2 ans">0-2 ans</option>
                      <option value="0-3 ans">0-3 ans</option>
                      <option value="1-4 ans">1-4 ans</option>
                      <option value="2-5 ans">2-5 ans</option>
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
                      placeholder="50"
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
        <Card title="Résultats de recherche (3 garderies trouvées)">
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
                    <i className="ri-map-pin-line"></i>
                  </div>
                  Carte
                </Button>
              </div>
              <div className="text-sm text-gray-600">
                3 résultats trouvés
              </div>
            </div>

            <Table 
              columns={columns} 
              data={mockResults}
              emptyText="Aucune garderie trouvée"
            />
          </div>
        </Card>

        {/* Statistiques rapides */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-home-heart-line text-blue-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">3</div>
            <div className="text-sm text-gray-600">Garderies trouvées</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-group-line text-green-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">71</div>
            <div className="text-sm text-gray-600">Enfants accueillis</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-user-line text-orange-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">80</div>
            <div className="text-sm text-gray-600">Capacité totale</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-percent-line text-purple-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">89%</div>
            <div className="text-sm text-gray-600">Taux moyen</div>
          </Card>
        </div>
      </div>
    </div>
  );
}
