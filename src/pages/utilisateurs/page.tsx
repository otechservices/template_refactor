
import React, { useState } from 'react';
import Card from '../../components/base/Card';
import Table from '../../components/base/Table';
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Badge from '../../components/base/Badge';

const mockUsers = [
  {
    id: 1,
    nom: 'Kouadio',
    prenoms: 'Marie Ange',
    email: 'marie.kouadio@cape.gov.ci',
    telephone: '+225 07 12 34 56 78',
    role: 'Administrateur',
    statut: 'Actif',
    dernierAcces: '2024-01-20 14:30',
    dateCreation: '2023-06-15'
  },
  {
    id: 2,
    nom: 'Traoré',
    prenoms: 'Seydou',
    email: 'seydou.traore@cape.gov.ci',
    telephone: '+225 05 98 76 54 32',
    role: 'Inspecteur',
    statut: 'Actif',
    dernierAcces: '2024-01-20 10:15',
    dateCreation: '2023-08-22'
  },
  {
    id: 3,
    nom: 'Diallo',
    prenoms: 'Fatoumata',
    email: 'fatoumata.diallo@cape.gov.ci',
    telephone: '+225 01 23 45 67 89',
    role: 'Gestionnaire',
    statut: 'Actif',
    dernierAcces: '2024-01-19 16:45',
    dateCreation: '2023-05-10'
  },
  {
    id: 4,
    nom: 'Koffi',
    prenoms: 'Jean-Claude',
    email: 'jean.koffi@cape.gov.ci',
    telephone: '+225 03 45 67 89 01',
    role: 'Superviseur',
    statut: 'Inactif',
    dernierAcces: '2024-01-15 09:20',
    dateCreation: '2023-09-05'
  }
];

export default function Utilisateurs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [showModal, setShowModal] = useState(false);

  const columns = [
    {
      key: 'nom',
      title: 'Nom complet',
      width: '200px',
      render: (value: string, row: any) => (
        <div>
          <div className="font-medium text-gray-900">{row.nom} {row.prenoms}</div>
          <div className="text-sm text-gray-500">{row.email}</div>
        </div>
      )
    },
    {
      key: 'telephone',
      title: 'Téléphone',
      width: '140px'
    },
    {
      key: 'role',
      title: 'Rôle',
      width: '120px',
      render: (value: string) => {
        const variant = value === 'Administrateur' ? 'danger' : 
                      value === 'Inspecteur' ? 'primary' : 
                      value === 'Superviseur' ? 'warning' : 'secondary';
        return (
          <Badge variant={variant}>
            {value}
          </Badge>
        );
      }
    },
    {
      key: 'statut',
      title: 'Statut',
      width: '100px',
      render: (value: string) => (
        <Badge variant={value === 'Actif' ? 'success' : 'default'}>
          {value}
        </Badge>
      )
    },
    {
      key: 'dernierAcces',
      title: 'Dernier accès',
      width: '140px',
      render: (value: string) => (
        <div className="text-sm text-gray-600">{value}</div>
      )
    },
    {
      key: 'actions',
      title: 'Actions',
      width: '120px',
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
          <Button variant="ghost" size="sm">
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-lock-line"></i>
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
            <span className="text-gray-700 hover:text-blue-600 font-medium">Paramètres</span>
          </li>
          <li>
            <div className="flex items-center">
              <i className="ri-arrow-right-s-line text-gray-400"></i>
              <span className="ml-1 text-gray-500 font-medium">Utilisateurs</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="space-y-6">
        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-user-line text-blue-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">24</div>
            <div className="text-sm text-gray-600">Total utilisateurs</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-check-line text-green-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">21</div>
            <div className="text-sm text-gray-600">Actifs</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-time-line text-orange-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">15</div>
            <div className="text-sm text-gray-600">Connectés aujourd'hui</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-shield-user-line text-red-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">3</div>
            <div className="text-sm text-gray-600">Administrateurs</div>
          </Card>
        </div>

        {/* Gestion des utilisateurs */}
        <Card title="Gestion des utilisateurs">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Button variant="primary" onClick={() => setShowModal(true)}>
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-user-add-line"></i>
                </div>
                Nouvel utilisateur
              </Button>
              <div className="flex items-center gap-4">
                <div className="w-48">
                  <select 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                  >
                    <option value="">Tous les rôles</option>
                    <option value="Administrateur">Administrateur</option>
                    <option value="Inspecteur">Inspecteur</option>
                    <option value="Gestionnaire">Gestionnaire</option>
                    <option value="Superviseur">Superviseur</option>
                  </select>
                </div>
                <div className="w-64">
                  <Input
                    placeholder="Rechercher un utilisateur..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    icon="ri-search-line"
                  />
                </div>
              </div>
            </div>

            <Table 
              columns={columns} 
              data={mockUsers}
              emptyText="Aucun utilisateur trouvé"
            />

            <div className="flex items-center justify-between pt-4">
              <div className="text-sm text-gray-600">
                Affichage de l'élément 1 à 4 sur 24 éléments
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Précédent
                </Button>
                <Button variant="outline" size="sm">
                  Suivant
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Actions en lot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card title="Actions en lot">
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-mail-send-line"></i>
                </div>
                Envoyer invitation
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-lock-line"></i>
                </div>
                Désactiver comptes
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <div className="w-5 h-5 flex items-center justify-center mr-3">
                  <i className="ri-download-line"></i>
                </div>
                Exporter liste
              </Button>
            </div>
          </Card>
          
          <Card title="Rôles par type">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Administrateurs</span>
                <Badge variant="danger">3</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Inspecteurs</span>
                <Badge variant="primary">8</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Gestionnaires</span>
                <Badge variant="secondary">10</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Superviseurs</span>
                <Badge variant="warning">3</Badge>
              </div>
            </div>
          </Card>

          <Card title="Activité récente">
            <div className="space-y-3">
              <div className="text-sm">
                <div className="font-medium text-gray-900">Marie Kouadio</div>
                <div className="text-gray-600">Connexion - il y a 2h</div>
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-900">Seydou Traoré</div>
                <div className="text-gray-600">Rapport créé - il y a 4h</div>
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-900">Fatoumata Diallo</div>
                <div className="text-gray-600">Validation - il y a 6h</div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Modal Nouvel utilisateur */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Nouvel utilisateur</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-close-line"></i>
                </div>
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom
                </label>
                <Input placeholder="Nom de famille" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prénoms
                </label>
                <Input placeholder="Prénoms" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input type="email" placeholder="email@cape.gov.ci" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <Input placeholder="+225 XX XX XX XX XX" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Rôle
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8">
                  <option value="">Sélectionner un rôle</option>
                  <option value="Gestionnaire">Gestionnaire</option>
                  <option value="Inspecteur">Inspecteur</option>
                  <option value="Superviseur">Superviseur</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <Button variant="outline" onClick={() => setShowModal(false)} className="flex-1">
                Annuler
              </Button>
              <Button variant="primary" className="flex-1">
                Créer utilisateur
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
