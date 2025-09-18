import React, { useState } from 'react';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Badge from '../../components/base/Badge';

export default function CreationSession() {
  const [formData, setFormData] = useState({
    nom: '',
    type: 'CAPE',
    dateDebut: '',
    dateFin: '',
    lieu: '',
    adresse: '',
    capaciteMax: '',
    description: '',
    formateur: '',
    prerequis: '',
    cout: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const sessionsExistantes = [
    {
      id: 1,
      nom: 'Session CAPE - Janvier 2024',
      type: 'CAPE',
      dateDebut: '2024-01-15',
      dateFin: '2024-01-19',
      lieu: 'Centre de Formation CAPE',
      inscrits: 15,
      capacite: 20,
      statut: 'En cours'
    },
    {
      id: 2,
      nom: 'Formation Garderie - Février 2024',
      type: 'Garderie',
      dateDebut: '2024-02-05',
      dateFin: '2024-02-09',
      lieu: 'Institut de Formation',
      inscrits: 12,
      capacite: 18,
      statut: 'Planifiée'
    },
    {
      id: 3,
      nom: 'Session CAPE - Mars 2024',
      type: 'CAPE',
      dateDebut: '2024-03-10',
      dateFin: '2024-03-14',
      lieu: 'Centre de Formation CAPE',
      inscrits: 0,
      capacite: 25,
      statut: 'Ouverte'
    }
  ];

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <span className="text-gray-700 hover:text-blue-600 font-medium">Gestion des sessions</span>
          </li>
          <li>
            <div className="flex items-center">
              <i className="ri-arrow-right-s-line text-gray-400"></i>
              <span className="ml-1 text-gray-500 font-medium">Création de session</span>
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
                <i className="ri-calendar-line text-blue-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">8</div>
            <div className="text-sm text-gray-600">Sessions actives</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-group-line text-green-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">156</div>
            <div className="text-sm text-gray-600">Participants inscrits</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-calendar-event-line text-orange-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">3</div>
            <div className="text-sm text-gray-600">Sessions planifiées</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-award-line text-purple-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">89</div>
            <div className="text-sm text-gray-600">Certifications délivrées</div>
          </Card>
        </div>

        {/* Formulaire de création */}
        <Card title="Créer une nouvelle session">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nom de la session</label>
                <Input
                  value={formData.nom}
                  onChange={(e) => handleInputChange('nom', e.target.value)}
                  placeholder="Ex: Session CAPE - Avril 2024"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type de session</label>
                <select 
                  value={formData.type}
                  onChange={(e) => handleInputChange('type', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
                >
                  <option value="CAPE">CAPE</option>
                  <option value="Garderie">Garderie</option>
                  <option value="Mixte">Mixte (CAPE + Garderie)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date de début</label>
                  <Input
                    type="date"
                    value={formData.dateDebut}
                    onChange={(e) => handleInputChange('dateDebut', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date de fin</label>
                  <Input
                    type="date"
                    value={formData.dateFin}
                    onChange={(e) => handleInputChange('dateFin', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Lieu de formation</label>
                <Input
                  value={formData.lieu}
                  onChange={(e) => handleInputChange('lieu', e.target.value)}
                  placeholder="Nom du centre de formation"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Adresse complète</label>
                <textarea
                  value={formData.adresse}
                  onChange={(e) => handleInputChange('adresse', e.target.value)}
                  placeholder="Adresse du lieu de formation"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Capacité maximale</label>
                <Input
                  type="number"
                  value={formData.capaciteMax}
                  onChange={(e) => handleInputChange('capaciteMax', e.target.value)}
                  placeholder="Nombre maximum de participants"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Formateur principal</label>
                <Input
                  value={formData.formateur}
                  onChange={(e) => handleInputChange('formateur', e.target.value)}
                  placeholder="Nom du formateur"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Coût de la formation</label>
                <Input
                  type="number"
                  value={formData.cout}
                  onChange={(e) => handleInputChange('cout', e.target.value)}
                  placeholder="Montant en FCFA"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Prérequis</label>
                <textarea
                  value={formData.prerequis}
                  onChange={(e) => handleInputChange('prerequis', e.target.value)}
                  placeholder="Conditions d'admission à la formation"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Description détaillée de la session"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <Button variant="outline">
              <div className="w-4 h-4 flex items-center justify-center mr-2">
                <i className="ri-save-line"></i>
              </div>
              Enregistrer comme brouillon
            </Button>
            <div className="flex gap-3">
              <Button variant="outline">Annuler</Button>
              <Button variant="primary">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-add-line"></i>
                </div>
                Créer la session
              </Button>
            </div>
          </div>
        </Card>

        {/* Sessions existantes */}
        <Card title="Sessions récentes">
          <div className="space-y-4">
            {sessionsExistantes.map(session => (
              <div key={session.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900">{session.nom}</h3>
                      <Badge variant={session.type === 'CAPE' ? 'primary' : 'secondary'}>
                        {session.type}
                      </Badge>
                      <Badge variant={
                        session.statut === 'En cours' ? 'warning' : 
                        session.statut === 'Planifiée' ? 'primary' : 'success'
                      }>
                        {session.statut}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Période:</span>
                        <div>{session.dateDebut} - {session.dateFin}</div>
                      </div>
                      <div>
                        <span className="font-medium">Lieu:</span>
                        <div>{session.lieu}</div>
                      </div>
                      <div>
                        <span className="font-medium">Participants:</span>
                        <div>{session.inscrits}/{session.capacite}</div>
                      </div>
                      <div>
                        <span className="font-medium">Taux de remplissage:</span>
                        <div>{Math.round((session.inscrits / session.capacite) * 100)}%</div>
                      </div>
                    </div>
                  </div>
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
                    <Button variant="ghost" size="sm">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-group-line"></i>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}