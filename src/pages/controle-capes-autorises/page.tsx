
import { useState } from 'react';
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Table from '../../components/base/Table';

interface CapeAutorise {
  id: number;
  typeCape: string;
  libelle: string;
}

interface VisiteTerrain {
  id: number;
  typeControle: string;
  chefDeFils: string;
  observation: string;
  dateControle: string;
  membreVisite: string;
}

const ControleCapeAutorises = () => {
  const [activeTab, setActiveTab] = useState<'controles' | 'enregistrements'>('controles');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCapes, setSelectedCapes] = useState<number[]>([]);

  const capesAutorises: CapeAutorise[] = [
    {
      id: 1,
      typeCape: "Centres de long séjour",
      libelle: "Centre la Maison d'accueil Fifatin de la CASA GRANDE BENIN"
    },
    {
      id: 2,
      typeCape: "Centres de long séjour", 
      libelle: "Orphelinat Maison Fifamè"
    }
  ];

  const visitesTerrain: VisiteTerrain[] = [
    {
      id: 1,
      typeControle: "Contrôle de routine",
      chefDeFils: "KOUAME Marie",
      observation: "Établissement conforme aux normes",
      dateControle: "15/03/2024",
      membreVisite: "Dr. DIALLO, Mme TRAORE"
    },
    {
      id: 2,
      typeControle: "Contrôle inopiné",
      chefDeFils: "N'DA Françoise", 
      observation: "Quelques améliorations nécessaires",
      dateControle: "22/03/2024",
      membreVisite: "M. BAMBA, Mlle KONE"
    }
  ];

  const handleSelectCape = (id: number) => {
    setSelectedCapes(prev => 
      prev.includes(id) 
        ? prev.filter(capeId => capeId !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedCapes.length === capesAutorises.length) {
      setSelectedCapes([]);
    } else {
      setSelectedCapes(capesAutorises.map(cape => cape.id));
    }
  };

  const handleConsulterCentre = (id: number) => {
    alert(`Consultation du centre ID: ${id}`);
  };

  const capesColumns = [
    {
      header: (
        <input
          type="checkbox"
          checked={selectedCapes.length === capesAutorises.length && capesAutorises.length > 0}
          onChange={handleSelectAll}
          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
      ),
      accessorKey: 'select',
      cell: ({ row }: any) => (
        <input
          type="checkbox"
          checked={selectedCapes.includes(row.original.id)}
          onChange={() => handleSelectCape(row.original.id)}
          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
      ),
    },
    {
      header: '#',
      accessorKey: 'id',
      cell: ({ row }: any) => row.index + 1,
    },
    {
      header: 'Type Cape',
      accessorKey: 'typeCape',
    },
    {
      header: 'Libellé',
      accessorKey: 'libelle',
    },
    {
      header: 'Action',
      accessorKey: 'action',
      cell: ({ row }: any) => (
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => handleConsulterCentre(row.original.id)}
          className="whitespace-nowrap"
        >
          Consulter le centre
        </Button>
      ),
    },
  ];

  const visitesColumns = [
    {
      header: 'Type Contrôle',
      accessorKey: 'typeControle',
    },
    {
      header: 'Chef de file',
      accessorKey: 'chefDeFils',
    },
    {
      header: 'Observation',
      accessorKey: 'observation',
    },
    {
      header: 'Date de contrôle',
      accessorKey: 'dateControle',
    },
    {
      header: 'Membre de la visite',
      accessorKey: 'membreVisite',
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <span className="text-gray-500 text-sm">CAPE</span>
          </li>
          <li>
            <div className="flex items-center">
              <i className="ri-arrow-right-s-line text-gray-400"></i>
              <span className="text-gray-900 text-sm font-medium ml-1">Contrôle des capes autorisés</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Contrôle des capes autorisés</h1>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="max-w-md">
          <Input
            type="text"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon="ri-search-line"
          />
        </div>
      </div>

      {/* Liste des CAPE autorisés */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="px-6 py-4 border-b border-gray-200 bg-blue-900 text-white rounded-t-lg">
          <h2 className="text-lg font-semibold">Liste des CAPE autorisés</h2>
          <p className="text-blue-100 text-sm mt-1">{capesAutorises.length} élément(s)</p>
        </div>
        <Table
          data={capesAutorises}
          columns={capesColumns}
        />
        <div className="px-6 py-3 border-t border-gray-200 bg-gray-50 rounded-b-lg">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-700">
              Affichage de l'élément 1 à {capesAutorises.length} sur {capesAutorises.length} éléments
            </p>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700">
                Précédent
              </button>
              <button className="px-3 py-1 bg-blue-900 text-white text-sm rounded">
                1
              </button>
              <button className="px-3 py-1 text-sm text-gray-500 hover:text-gray-700">
                Suivant
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Liste des visites de terrain */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200 bg-blue-900 text-white rounded-t-lg">
          <h2 className="text-lg font-semibold">Liste des visites de terrain</h2>
          <div className="flex gap-4 mt-2">
            <button
              onClick={() => setActiveTab('controles')}
              className={`px-3 py-1 text-sm rounded ${
                activeTab === 'controles'
                  ? 'bg-white text-blue-900'
                  : 'text-blue-100 hover:text-white'
              }`}
            >
              Contrôles effectués
            </button>
            <button
              onClick={() => setActiveTab('enregistrements')}
              className={`px-3 py-1 text-sm rounded ${
                activeTab === 'enregistrements'
                  ? 'bg-white text-blue-900'
                  : 'text-blue-100 hover:text-white'
              }`}
            >
              Mes enregistrements
            </button>
          </div>
        </div>

        {activeTab === 'controles' && (
          <Table
            data={visitesTerrain}
            columns={visitesColumns}
          />
        )}

        {activeTab === 'enregistrements' && (
          <div className="p-6">
            <div className="text-center py-12 text-gray-500">
              <i className="ri-file-list-line text-4xl mb-4"></i>
              <p>Aucun enregistrement disponible</p>
            </div>
          </div>
        )}

        <div className="px-6 py-3 border-t border-gray-200 bg-gray-50 rounded-b-lg">
          <p className="text-sm text-gray-700">
            {activeTab === 'controles' ? visitesTerrain.length : 0} éléments
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-3">
        <Button variant="primary" className="whitespace-nowrap">
          <i className="ri-add-line mr-2"></i>
          Programmer visite
        </Button>
        <Button variant="outline" className="whitespace-nowrap">
          <i className="ri-calendar-line mr-2"></i>
          Planifier contrôle
        </Button>
        <Button variant="outline" className="whitespace-nowrap">
          <i className="ri-file-excel-line mr-2"></i>
          Exporter
        </Button>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          © 2024 Système de gestion CAPE. Tous droits réservés.
        </p>
      </div>
    </div>
  );
};

export default ControleCapeAutorises;
