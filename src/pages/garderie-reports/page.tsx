
import { useState } from 'react';
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Table from '../../components/base/Table';

interface GarderieWithReport {
  id: number;
  typeGarderie: string;
  denomination: string;
  nombreEnfants: number;
  effectifPersonnel: number;
  statut: 'En attente' | 'Soumis' | 'Validé' | 'En retard';
}

interface ActivityReport {
  id: number;
  description: string;
  statut: 'En attente' | 'Soumis' | 'Validé' | 'En retard';
  transmis: string;
  fichier: string;
}

interface Instruction {
  id: number;
  instruction: string;
}

const GarderieReports = () => {
  const [activeTab, setActiveTab] = useState<'garderies' | 'reports' | 'instructions'>('garderies');
  const [searchTerm, setSearchTerm] = useState('');

  const garderiesWithReports: GarderieWithReport[] = [
    {
      id: 1,
      typeGarderie: "Garderie préscolaire",
      denomination: "Les Petits Anges",
      nombreEnfants: 25,
      effectifPersonnel: 5,
      statut: "Soumis"
    },
    {
      id: 2,
      typeGarderie: "Crèche communautaire", 
      denomination: "Bébés Sourires",
      nombreEnfants: 18,
      effectifPersonnel: 4,
      statut: "Validé"
    },
    {
      id: 3,
      typeGarderie: "Garderie préscolaire",
      denomination: "L'Éveil des Bambins",
      nombreEnfants: 30,
      effectifPersonnel: 6,
      statut: "En attente"
    },
    {
      id: 4,
      typeGarderie: "Centre d'éveil",
      denomination: "Les Premiers Pas",
      nombreEnfants: 22,
      effectifPersonnel: 4,
      statut: "En retard"
    }
  ];

  const activityReports: ActivityReport[] = [
    {
      id: 1,
      description: "Rapport d'activité trimestriel Q1 2024 - Garderie",
      statut: "Soumis",
      transmis: "12/04/2024",
      fichier: "rapport_garderie_q1_2024.pdf"
    },
    {
      id: 2,
      description: "Rapport suivi médical - Mars 2024",
      statut: "Validé",
      transmis: "08/04/2024", 
      fichier: "suivi_medical_mars_2024.pdf"
    },
    {
      id: 3,
      description: "Rapport activités d'éveil - Février 2024",
      statut: "En attente",
      transmis: "-",
      fichier: "-"
    },
    {
      id: 4,
      description: "Rapport nutritionnel trimestriel Q4 2023",
      statut: "En retard",
      transmis: "-",
      fichier: "-"
    }
  ];

  const instructions: Instruction[] = [
    {
      id: 1,
      instruction: "Les rapports d'activité garderie doivent inclure le suivi médical des enfants"
    },
    {
      id: 2,
      instruction: "Documenter obligatoirement les activités d'éveil et d'apprentissage"
    },
    {
      id: 3,
      instruction: "Joindre les fiches de présence quotidiennes des enfants"
    },
    {
      id: 4,
      instruction: "Inclure le rapport nutritionnel avec menus servis"
    },
    {
      id: 5,
      instruction: "Mentionner les accidents/incidents et mesures prises"
    }
  ];

  const getStatusColor = (statut: string) => {
    switch (statut) {
      case 'En attente': return 'bg-yellow-100 text-yellow-800';
      case 'Soumis': return 'bg-blue-100 text-blue-800';
      case 'Validé': return 'bg-green-100 text-green-800';
      case 'En retard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const garderiesColumns = [
    {
      header: '#',
      accessorKey: 'id',
      cell: ({ row }: any) => row.index + 1,
    },
    {
      header: 'Type Garderie',
      accessorKey: 'typeGarderie',
    },
    {
      header: 'Dénomination', 
      accessorKey: 'denomination',
    },
    {
      header: 'Nombres d\'enfants',
      accessorKey: 'nombreEnfants',
    },
    {
      header: 'Effectif du personnel',
      accessorKey: 'effectifPersonnel',
    },
    {
      header: 'Statut',
      accessorKey: 'statut',
      cell: ({ row }: any) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(row.original.statut)}`}>
          {row.original.statut}
        </span>
      ),
    },
  ];

  const reportsColumns = [
    {
      header: '#',
      accessorKey: 'id',
      cell: ({ row }: any) => row.index + 1,
    },
    {
      header: 'Description',
      accessorKey: 'description',
    },
    {
      header: 'Statut',
      accessorKey: 'statut',
      cell: ({ row }: any) => (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(row.original.statut)}`}>
          {row.original.statut}
        </span>
      ),
    },
    {
      header: 'Transmis',
      accessorKey: 'transmis',
    },
    {
      header: 'Fichier',
      accessorKey: 'fichier',
      cell: ({ row }: any) => (
        row.original.fichier !== '-' ? (
          <button className="text-blue-600 hover:text-blue-800 text-sm">
            <i className="ri-download-line mr-1"></i>
            Télécharger
          </button>
        ) : '-'
      ),
    },
  ];

  const instructionsColumns = [
    {
      header: '#',
      accessorKey: 'id',
      cell: ({ row }: any) => row.index + 1,
    },
    {
      header: 'Instruction',
      accessorKey: 'instruction',
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <span className="text-gray-500 text-sm">Garderie</span>
          </li>
          <li>
            <div className="flex items-center">
              <i className="ri-arrow-right-s-line text-gray-400"></i>
              <span className="text-gray-900 text-sm font-medium ml-1">Rapports d'activité</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Rapports d'activité Garderie</h1>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('garderies')}
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'garderies'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Liste des garderies ayant déposé des rapports
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'reports'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Rapports d'activité
            </button>
            <button
              onClick={() => setActiveTab('instructions')}
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'instructions'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Instructions sur le rapport d'activité
            </button>
          </nav>
        </div>
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

      {/* Content */}
      <div className="bg-white rounded-lg shadow">
        {activeTab === 'garderies' && (
          <>
            <div className="px-6 py-4 border-b border-gray-200 bg-blue-900 text-white rounded-t-lg">
              <h2 className="text-lg font-semibold">Liste des garderies ayant déposé des rapports d'activité</h2>
              <p className="text-blue-100 text-sm mt-1">{garderiesWithReports.length} élément(s)</p>
            </div>
            <Table
              data={garderiesWithReports}
              columns={garderiesColumns}
            />
          </>
        )}

        {activeTab === 'reports' && (
          <>
            <div className="px-6 py-4 border-b border-gray-200 bg-blue-900 text-white rounded-t-lg">
              <h2 className="text-lg font-semibold">Rapports d'activité</h2>
              <p className="text-blue-100 text-sm mt-1">{activityReports.length} élément(s)</p>
            </div>
            <Table
              data={activityReports}
              columns={reportsColumns}
            />
          </>
        )}

        {activeTab === 'instructions' && (
          <>
            <div className="px-6 py-4 border-b border-gray-200 bg-blue-900 text-white rounded-t-lg">
              <h2 className="text-lg font-semibold">Instructions sur le rapport d'activité</h2>
              <p className="text-blue-100 text-sm mt-1">{instructions.length} élément(s)</p>
            </div>
            <Table
              data={instructions}
              columns={instructionsColumns}
            />
          </>
        )}

        {/* Footer */}
        <div className="px-6 py-3 border-t border-gray-200 bg-gray-50 rounded-b-lg">
          <p className="text-sm text-gray-700">
            {activeTab === 'garderies' ? garderiesWithReports.length : 
             activeTab === 'reports' ? activityReports.length : 
             instructions.length} éléments
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-3">
        <Button variant="primary" className="whitespace-nowrap">
          <i className="ri-add-line mr-2"></i>
          Nouveau rapport
        </Button>
        <Button variant="outline" className="whitespace-nowrap">
          <i className="ri-download-line mr-2"></i>
          Télécharger modèle
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

export default GarderieReports;
