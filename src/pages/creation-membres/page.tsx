import React, { useState } from 'react';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Badge from '../../components/base/Badge';
import Table from '../../components/base/Table';

const mockMembres = [
  {
    id: 1,
    nom: 'Dr. Marie Kouadio',
    specialite: 'Pédiatrie',
    fonction: 'Président',
    telephone: '+225 07 12 34 56 78',
    email: 'marie.kouadio@cape.ci',
    statut: 'Actif',
    dateNomination: '2024-01-15'
  },
  {
    id: 2,
    nom: 'Prof. Jean Baptiste',
    specialite: 'Psychologie infantile',
    fonction: 'Vice-président',
    telephone: '+225 05 98 76 54 32',
    email: 'jean.baptiste@cape.ci',
    statut: 'Actif',
    dateNomination: '2024-01-10'
  },
  {
    id: 3,
    nom: 'Fatou Traoré',
    specialite: 'Administration sociale',
    fonction: 'Secrétaire',
    telephone: '+225 01 23 45 67 89',
    email: 'fatou.traore@cape.ci',
    statut: 'En attente',
    dateNomination: '2024-01-20'
  }
];

export default function CreationMembres() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    fonction: '',
    specialite: '',
    telephone: '',
    email: '',
    adresse: '',
    experience: '',
    diplomes: '',
    motivation: ''
  });

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const columns = [
    {
      key: 'nom',
      title: 'Nom complet',
      width: '200px'
    },
    {
      key: 'fonction',
      title: 'Fonction',
      width: '150px'
    },
    {
      key: 'specialite',
      title: 'Spécialité',
      width: '180px'
    },
    {
      key: 'telephone',
      title: 'Téléphone',
      width: '140px'
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
              <i className="ri-delete-bin-line"></i>
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
            <span className="text-gray-700 hover:text-blue-600 font-medium">Gestion des sessions</span>
          </li>
          <li>
            <div className="flex items-center">
              <i className="ri-arrow-right-s-line text-gray-400"></i>
              <span className="ml-1 text-gray-500 font-medium">Création des membres</span>
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
                <i className="ri-team-line text-blue-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">15</div>
            <div className="text-sm text-gray-600">Membres actifs</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-user-add-line text-green-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">3</div>
            <div className="text-sm text-gray-600">Candidatures en attente</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-award-line text-purple-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">8</div>
            <div className="text-sm text-gray-600">Experts spécialisés</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-calendar-event-line text-orange-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">42</div>
            <div className="text-sm text-gray-600">Sessions animées</div>
          </Card>
        </div>

        {/* Formulaire d'ajout */}
        <Card title="Ajouter un nouveau membre">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                  <Input
                    value={formData.nom}
                    onChange={(e) => handleInputChange('nom', e.target.value)}
                    placeholder="Nom de famille"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                  <Input
                    value={formData.prenom}
                    onChange={(e) => handleInputChange('prenom', e.target.value)}
                    placeholder="Prénom"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Fonction</label>
                <select 
                  value={formData.fonction}
                  onChange={(e) => handleInputChange('fonction', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-8"
                >
                  <option value="">Sélectionner une fonction</option>
                  <option value="Président">Président</option>
                  <option value="Vice-président">Vice-président</option>
                  <option value="Secrétaire">Secrétaire</option>
                  <option value="Trésorier">Trésorier</option>
                  <option value="Membre">Membre</option>
                  <option value="Expert">Expert</option>
                  <option value="Formateur">Formateur</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Spécialité</label>
                <Input
                  value={formData.specialite}
                  onChange={(e) => handleInputChange('specialite', e.target.value)}
                  placeholder="Domaine d'expertise"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                  <Input
                    value={formData.telephone}
                    onChange={(e) => handleInputChange('telephone', e.target.value)}
                    placeholder="+225 XX XX XX XX XX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="email@exemple.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Adresse</label>
                <textarea
                  value={formData.adresse}
                  onChange={(e) => handleInputChange('adresse', e.target.value)}
                  placeholder="Adresse complète"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expérience professionnelle</label>
                <textarea
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  placeholder="Résumé de l'expérience professionnelle"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Diplômes et certifications</label>
                <textarea
                  value={formData.diplomes}
                  onChange={(e) => handleInputChange('diplomes', e.target.value)}
                  placeholder="Liste des diplômes et certifications"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Motivation</label>
                <textarea
                  value={formData.motivation}
                  onChange={(e) => handleInputChange('motivation', e.target.value)}
                  placeholder="Motivation pour rejoindre l'équipe"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                />
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Documents à fournir</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• CV détaillé</li>
                  <li>• Copies des diplômes</li>
                  <li>• Lettre de motivation</li>
                  <li>• Certificat de bonne conduite</li>
                  <li>• Photo d'identité</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <Button variant="outline">
              <div className="w-4 h-4 flex items-center justify-center mr-2">
                <i className="ri-upload-line"></i>
              </div>
              Joindre documents
            </Button>
            <div className="flex gap-3">
              <Button variant="outline">Annuler</Button>
              <Button variant="primary">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-user-add-line"></i>
                </div>
                Ajouter le membre
              </Button>
            </div>
          </div>
        </Card>

        {/* Liste des membres */}
        <Card title="Membres existants">
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
                    <i className="ri-mail-send-line"></i>
                  </div>
                  Envoyer convocation
                </Button>
              </div>
              <div className="w-64">
                <Input
                  placeholder="Rechercher un membre..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  icon="ri-search-line"
                />
              </div>
            </div>

            <Table 
              columns={columns} 
              data={mockMembres}
              emptyText="Aucun membre trouvé"
            />
          </div>
        </Card>

        {/* Rôles et responsabilités */}
        <Card title="Rôles et responsabilités">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Fonctions principales</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium">Président</div>
                    <div className="text-sm text-gray-600">Direction et coordination générale</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium">Vice-président</div>
                    <div className="text-sm text-gray-600">Assistance à la présidence</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium">Secrétaire</div>
                    <div className="text-sm text-gray-600">Gestion administrative</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium">Expert</div>
                    <div className="text-sm text-gray-600">Expertise technique spécialisée</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Critères de sélection</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <i className="ri-check-line text-green-600"></i>
                  <span>Diplôme dans le domaine pertinent</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-check-line text-green-600"></i>
                  <span>Minimum 5 ans d'expérience</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-check-line text-green-600"></i>
                  <span>Disponibilité pour les sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-check-line text-green-600"></i>
                  <span>Intégrité professionnelle</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-check-line text-green-600"></i>
                  <span>Capacités pédagogiques</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}