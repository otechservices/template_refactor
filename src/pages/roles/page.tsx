
import React, { useState } from 'react';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import Badge from '../../components/base/Badge';

const mockRoles = [
  {
    id: 1,
    nom: 'Administrateur',
    description: 'Accès complet au système avec tous les privilèges',
    utilisateurs: 3,
    couleur: 'bg-red-600',
    permissions: [
      'Gestion utilisateurs',
      'Configuration système',
      'Gestion des rôles',
      'Accès aux rapports',
      'Validation des demandes',
      'Gestion des sanctions'
    ]
  },
  {
    id: 2,
    nom: 'Inspecteur',
    description: 'Responsable des visites et inspections sur terrain',
    utilisateurs: 8,
    couleur: 'bg-blue-600',
    permissions: [
      'Planification des visites',
      'Création de rapports',
      'Validation des centres',
      'Accès aux statistiques',
      'Gestion des recommandations'
    ]
  },
  {
    id: 3,
    nom: 'Gestionnaire',
    description: 'Gestion administrative des centres et dossiers',
    utilisateurs: 10,
    couleur: 'bg-green-600',
    permissions: [
      'Gestion des dossiers',
      'Traitement des demandes',
      'Inscription en sessions',
      'Suivi des parcours',
      'Génération de rapports'
    ]
  },
  {
    id: 4,
    nom: 'Superviseur',
    description: 'Supervision et validation des processus',
    utilisateurs: 3,
    couleur: 'bg-orange-600',
    permissions: [
      'Validation des agréments',
      'Supervision des équipes',
      'Accès aux tableaux de bord',
      'Gestion des sessions',
      'Contrôle qualité'
    ]
  }
];

export default function Roles() {
  const [selectedRole, setSelectedRole] = useState<any>(mockRoles[0]);
  const [showModal, setShowModal] = useState(false);

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
              <span className="ml-1 text-gray-500 font-medium">Rôles et permissions</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Liste des rôles */}
        <div className="lg:col-span-1">
          <Card title="Rôles système">
            <div className="space-y-3">
              <Button variant="primary" size="sm" onClick={() => setShowModal(true)} className="w-full">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-add-line"></i>
                </div>
                Nouveau rôle
              </Button>
              
              {mockRoles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role)}
                  className={`w-full p-4 text-left border rounded-lg transition-colors ${
                    selectedRole?.id === role.id 
                      ? 'border-blue-600 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-8 h-8 ${role.couleur} rounded-lg flex items-center justify-center`}>
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-shield-user-line text-white"></i>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{role.nom}</div>
                      <div className="text-sm text-gray-500">{role.utilisateurs} utilisateurs</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">{role.description}</div>
                </button>
              ))}
            </div>
          </Card>
        </div>

        {/* Détails du rôle sélectionné */}
        <div className="lg:col-span-2">
          <Card title={`Rôle : ${selectedRole?.nom}`}>
            <div className="space-y-6">
              {/* Informations générales */}
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 ${selectedRole?.couleur} rounded-lg flex items-center justify-center`}>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-shield-user-line text-white text-2xl"></i>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{selectedRole?.nom}</h3>
                  <p className="text-gray-600 mb-2">{selectedRole?.description}</p>
                  <div className="flex items-center gap-4">
                    <Badge variant="primary">{selectedRole?.utilisateurs} utilisateurs</Badge>
                    <Badge variant="secondary">{selectedRole?.permissions.length} permissions</Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-edit-line"></i>
                    </div>
                  </Button>
                  <Button variant="outline" size="sm">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-delete-bin-line"></i>
                    </div>
                  </Button>
                </div>
              </div>

              {/* Permissions */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">Permissions accordées</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedRole?.permissions.map((permission: string, index: number) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-check-line text-green-600"></i>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{permission}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Utilisateurs assignés */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">Utilisateurs assignés</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">MK</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Marie Kouadio</div>
                        <div className="text-sm text-gray-600">marie.kouadio@cape.gov.ci</div>
                      </div>
                    </div>
                    <Badge variant="success">Actif</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">ST</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Seydou Traoré</div>
                        <div className="text-sm text-gray-600">seydou.traore@cape.gov.ci</div>
                      </div>
                    </div>
                    <Badge variant="success">Actif</Badge>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t">
                <Button variant="primary">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-user-add-line"></i>
                  </div>
                  Assigner utilisateur
                </Button>
                <Button variant="outline">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-settings-line"></i>
                  </div>
                  Modifier permissions
                </Button>
                <Button variant="outline">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-file-copy-line"></i>
                  </div>
                  Dupliquer
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Modal Nouveau rôle */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Nouveau rôle</h3>
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
                  Nom du rôle
                </label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ex: Contrôleur qualité"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Description du rôle et de ses responsabilités..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Couleur
                </label>
                <div className="flex gap-2">
                  {['bg-red-600', 'bg-blue-600', 'bg-green-600', 'bg-orange-600', 'bg-purple-600', 'bg-pink-600'].map((color) => (
                    <button
                      key={color}
                      className={`w-8 h-8 ${color} rounded-full border-2 border-transparent hover:border-gray-300`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <Button variant="outline" onClick={() => setShowModal(false)} className="flex-1">
                Annuler
              </Button>
              <Button variant="primary" className="flex-1">
                Créer rôle
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
