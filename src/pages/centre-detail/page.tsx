
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/base/Button';
import Table from '../../components/base/Table';

interface CentreInfo {
  typeCape: string;
  nomCentre: string;
  nomDirecteur: string;
  nomPromoteur: string;
  contactDirecteur: string;
  email: string;
  adresse: string;
  cible: string;
  contact: string;
}

interface Document {
  id: number;
  reference: string;
}

interface Personnel {
  id: number;
  nom: string;
  poste: string;
  qualification: string;
  anciennete: string;
}

const CentreDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<'info' | 'personnel' | 'personnaires'>('info');

  const centreInfo: CentreInfo = {
    typeCape: "Centres de long séjour",
    nomCentre: "Centre la Maison d'accueil Fifatin de la CASA GRANDE BENIN",
    nomDirecteur: "KADJA Marie-Claire",
    nomPromoteur: "KADJA Foundation",
    contactDirecteur: "97441056",
    email: "cgbenin@yahoo.fr",
    adresse: "BP 16 Allada",
    cible: "Enfants orphelins et vulnérables",
    contact: "94759304"
  };

  const documents: Document[] = [
    { id: 1, reference: "DOC001-2024" },
    { id: 2, reference: "DOC002-2024" },
    { id: 3, reference: "DOC003-2024" }
  ];

  const personnel: Personnel[] = [
    {
      id: 1,
      nom: "KOUAME Adjoua Marie",
      poste: "Directrice",
      qualification: "Master en Travail Social",
      anciennete: "5 ans"
    },
    {
      id: 2,
      nom: "DIALLO Mamadou",
      poste: "Éducateur spécialisé",
      qualification: "Licence en Éducation",
      anciennete: "3 ans"
    },
    {
      id: 3,
      nom: "N'DA Akissi Françoise",
      poste: "Assistante sociale",
      qualification: "BTS Action Sociale",
      anciennete: "2 ans"
    },
    {
      id: 4,
      nom: "TRAORE Abdoulaye",
      poste: "Surveillant",
      qualification: "BAC + Formation sécurité",
      anciennete: "4 ans"
    }
  ];

  const documentsColumns = [
    {
      header: '#',
      accessorKey: 'id',
      cell: ({ row }: any) => row.index + 1,
    },
    {
      header: 'Référence',
      accessorKey: 'reference',
    },
    {
      header: 'Action',
      accessorKey: 'action',
      cell: ({ row }: any) => (
        <Button variant="outline" size="sm" className="whitespace-nowrap">
          <i className="ri-download-line mr-1"></i>
          Télécharger
        </Button>
      ),
    },
  ];

  const personnelColumns = [
    {
      header: '#',
      accessorKey: 'id',
      cell: ({ row }: any) => row.index + 1,
    },
    {
      header: 'Nom',
      accessorKey: 'nom',
    },
    {
      header: 'Poste',
      accessorKey: 'poste',
    },
    {
      header: 'Qualification',
      accessorKey: 'qualification',
    },
    {
      header: 'Ancienneté',
      accessorKey: 'anciennete',
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <span className="text-gray-500 text-sm">Suivi CAPE</span>
          </li>
          <li>
            <div className="flex items-center">
              <i className="ri-arrow-right-s-line text-gray-400"></i>
              <span className="text-gray-900 text-sm font-medium ml-1">Détails du centre</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Détails du centre</h1>
        <div className="flex gap-3">
          <Button variant="outline" className="whitespace-nowrap">
            <i className="ri-edit-line mr-2"></i>
            Modifier
          </Button>
          <Button variant="outline" className="whitespace-nowrap">
            <i className="ri-printer-line mr-2"></i>
            Imprimer
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('info')}
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'info'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Information sur le Cape
            </button>
            <button
              onClick={() => setActiveTab('personnel')}
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'personnel'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Personnel
            </button>
            <button
              onClick={() => setActiveTab('personnaires')}
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'personnaires'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Personnaires
            </button>
          </nav>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        {/* Information sur le Cape */}
        {activeTab === 'info' && (
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <i className="ri-information-line text-blue-600 mr-2"></i>
                Informations native de la demande
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Type Cape</label>
                    <p className="text-gray-900">{centreInfo.typeCape}</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom du promoteur</label>
                    <p className="text-gray-900">{centreInfo.nomPromoteur}</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact du directeur</label>
                    <p className="text-gray-900">{centreInfo.contactDirecteur}</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <p className="text-gray-900">{centreInfo.email}</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
                    <p className="text-gray-900">{centreInfo.adresse}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom du centre</label>
                    <p className="text-gray-900">{centreInfo.nomCentre}</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom du directeur</label>
                    <p className="text-gray-900">{centreInfo.nomDirecteur}</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cible</label>
                    <p className="text-gray-900">{centreInfo.cible}</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact</label>
                    <p className="text-gray-900">{centreInfo.contact}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents joints */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <i className="ri-file-text-line text-blue-600 mr-2"></i>
                Documents joints à la soumission
              </h3>
              
              <Table
                data={documents}
                columns={documentsColumns}
              />
            </div>
          </div>
        )}

        {/* Personnel */}
        {activeTab === 'personnel' && (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Personnel du centre</h3>
              <Button variant="primary" className="whitespace-nowrap">
                <i className="ri-add-line mr-2"></i>
                Ajouter personnel
              </Button>
            </div>
            
            <Table
              data={personnel}
              columns={personnelColumns}
            />
          </div>
        )}

        {/* Personnaires */}
        {activeTab === 'personnaires' && (
          <div className="p-6">
            <div className="text-center py-12 text-gray-500">
              <i className="ri-user-line text-4xl mb-4"></i>
              <p>Aucune information personnaire disponible</p>
            </div>
          </div>
        )}
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

export default CentreDetail;
