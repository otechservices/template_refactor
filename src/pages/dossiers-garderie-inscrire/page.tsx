
import React, { useState } from 'react';
import Card from '../../components/base/Card';
import Table from '../../components/base/Table';
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Badge from '../../components/base/Badge';

const mockDossiers = [
  {
    id: 1,
    reference: 'GARD-INS-001',
    denomination: 'Garderie Les Anges',
    responsable: 'Aïssata Coulibaly',
    commune: 'Yopougon',
    dateValidation: '2024-01-19',
    capacite: 25,
    trancheAge: '0-3 ans',
    typeStructure: 'Privée',
    statut: 'Validé',
    session: ''
  },
  {
    id: 2,
    reference: 'GARD-INS-002',
    denomination: 'Crèche Bébé Joie',
    responsable: 'Sandrine Assi',
    commune: 'Koumassi',
    dateValidation: '2024-01-17',
    capacite: 30,
    trancheAge: '0-6 ans',
    typeStructure: 'Associative',
    statut: 'Validé',
    session: ''
  },
  {
    id: 3,
    reference: 'GARD-INS-003',
    denomination: 'Garderie Petit Bonheur',
    responsable: 'Yao Francis',
    commune: 'Treichville',
    dateValidation: '2024-01-15',
    capacite: 20,
    trancheAge: '3-6 ans',
    typeStructure: 'Familiale',
    statut: 'Validé',
    session: ''
  },
  {
    id: 4,
    reference: 'GARD-INS-004',
    denomination: 'Centre Petite Enfance Espoir',
    responsable: 'Marie-Claire Brou',
    commune: 'Abobo',
    dateValidation: '2024-01-13',
    capacite: 40,
    trancheAge: '0-6 ans',
    typeStructure: 'Publique',
    statut: 'Validé',
    session: ''
  }
];

const sessions = [
  { id: 1, nom: 'Session Garderie Mars 2024', date: '2024-03-22', places: 15 },
  { id: 2, nom: 'Session Garderie Avril 2024', date: '2024-04-25', places: 12 },
  { id: 3, nom: 'Session Garderie Mai 2024', date: '2024-05-20', places: 18 }
];

export default function DossiersGarderieInscrire() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDossiers, setSelectedDossiers] = useState<number[]>([]);
  const [showSessionModal, setShowSessionModal] = useState(false);
  const [selectedSession, setSelectedSession] = useState('');

  const columns = [
    {
      key: 'select',
      title: '',
      width: '50px',
      render: (_: any, row: any) => (
        <input
          type="checkbox"
          checked={selectedDossiers.includes(row.id)}
          onChange={(e) => {
            if (e.target.checked) {
              setSelectedDossiers([...selectedDossiers, row.id]);
            } else {
              setSelectedDossiers(selectedDossiers.filter(id => id !== row.id));
            }
          }}
          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
      )
    },
    {
      key: 'reference',
      title: 'Référence',
      width: '130px'
    },
    {
      key: 'denomination',
      title: 'Dénomination',
      width: '200px'
    },
    {
      key: 'responsable',
      title: 'Responsable',
      width: '150px'
    },
    {
      key: 'commune',
      title: 'Commune',
      width: '100px'
    },
    {
      key: 'capacite',
      title: 'Capacité',
      width: '80px',
      render: (value: number) => (
        <span>{value} enfants</span>
      )
    },
    {
      key: 'trancheAge',
      title: 'Tranche âge',
      width: '80px',
      render: (value: string) => (
        <Badge variant="secondary">
          {value}
        </Badge>
      )
    },
    {
      key: 'typeStructure',
      title: 'Type',
      width: '100px',
      render: (value: string) => (
        <Badge variant="default">
          {value}
        </Badge>
      )
    },
    {
      key: 'dateValidation',
      title: 'Date validation',
      width: '120px'
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

  const handleInscriptionSession = () => {
    if (selectedDossiers.length === 0) {
      alert('Veuillez sélectionner au moins un dossier');
      return;
    }
    setShowSessionModal(true);
  };

  const confirmerInscription = () => {
    if (!selectedSession) {
      alert('Veuillez sélectionner une session');
      return;
    }
    alert(`${selectedDossiers.length} dossier(s) garderie inscrit(s) en session`);
    setSelectedDossiers([]);
    setShowSessionModal(false);
    setSelectedSession('');
  };

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <span className="text-gray-700 hover:text-blue-600 font-medium">Traitement des demandes</span>
          </li>
          <li>
            <div className="flex items-center">
              <i className="ri-arrow-right-s-line text-gray-400"></i>
              <span className="ml-1 text-gray-500 font-medium">Dossiers Garderie à inscrire</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="space-y-6">
        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-group-line text-green-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">14</div>
            <div className="text-sm text-gray-600">Dossiers validés</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-check-double-line text-blue-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">8</div>
            <div className="text-sm text-gray-600">Déjà inscrits</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-calendar-line text-orange-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">3</div>
            <div className="text-sm text-gray-600">Sessions disponibles</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-team-line text-purple-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">45</div>
            <div className="text-sm text-gray-600">Places disponibles</div>
          </Card>
        </div>

        {/* Sessions disponibles */}
        <Card title="Sessions d'agrément garderie disponibles">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sessions.map((session) => (
              <div key={session.id} className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium mb-2">{session.nom}</h4>
                <div className="text-sm text-gray-600 mb-2">
                  <div className="w-4 h-4 inline-flex items-center justify-center mr-2">
                    <i className="ri-calendar-line"></i>
                  </div>
                  {session.date}
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  <div className="w-4 h-4 inline-flex items-center justify-center mr-2">
                    <i className="ri-group-line"></i>
                  </div>
                  {session.places} places disponibles
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Voir les détails
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Liste des dossiers */}
        <Card title="Dossiers Garderie validés à inscrire en session">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button 
                  variant="primary" 
                  onClick={handleInscriptionSession}
                  disabled={selectedDossiers.length === 0}
                >
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-calendar-check-line"></i>
                  </div>
                  Inscrire en session ({selectedDossiers.length})
                </Button>
                <Button variant="outline" size="sm">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-download-line"></i>
                  </div>
                  Exporter
                </Button>
              </div>
              <div className="w-64">
                <Input
                  placeholder="Rechercher un dossier..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  icon="ri-search-line"
                />
              </div>
            </div>

            <Table 
              columns={columns} 
              data={mockDossiers}
              emptyText="Aucun dossier à inscrire"
            />

            <div className="flex items-center justify-between pt-4">
              <div className="text-sm text-gray-600">
                Affichage de l'élément 1 à 4 sur 4 éléments
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
      </div>

      {/* Modal de sélection de session */}
      {showSessionModal && (
        <div className="fixed inset-0 bg-black bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Inscrire en session</h3>
              <button
                onClick={() => setShowSessionModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-close-line"></i>
                </div>
              </button>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-3">
                Sélectionnez une session pour inscrire {selectedDossiers.length} dossier(s) garderie :
              </p>
              
              <div className="space-y-2">
                {sessions.map((session) => (
                  <label key={session.id} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="session"
                      value={session.id}
                      checked={selectedSession === session.id.toString()}
                      onChange={(e) => setSelectedSession(e.target.value)}
                      className="mr-3"
                    />
                    <div className="flex-1">
                      <div className="font-medium">{session.nom}</div>
                      <div className="text-sm text-gray-600">{session.date} - {session.places} places</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                onClick={() => setShowSessionModal(false)}
                className="flex-1"
              >
                Annuler
              </Button>
              <Button 
                variant="primary" 
                onClick={confirmerInscription}
                className="flex-1"
              >
                Confirmer l'inscription
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
