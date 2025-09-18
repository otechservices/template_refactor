
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function TraitementDemande() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('information');

  const [formData, setFormData] = useState({
    numeroOrdre: '16/02/2019',
    dateCreation: '16/02/2019',
    statut: 'Nouveau',
    demandeur: {
      civilite: 'Mme',
      nom: 'MARTIN',
      prenom: 'Sophie',
      dateNaissance: '15/08/1985',
      adresse: '123 Rue de la République',
      ville: 'Lyon',
      codePostal: '69001',
      telephone: '04 78 12 34 56',
      email: 'sophie.martin@email.com'
    },
    etablissement: {
      nom: 'Les Petits Anges',
      adresse: '45 Avenue des Enfants',
      ville: 'Lyon',
      codePostal: '69003',
      telephone: '04 78 98 76 54',
      capacite: '20',
      typeAccueil: 'Régulier'
    },
    documents: [
      { nom: 'Certificat médical', statut: 'Fourni', date: '10/02/2019' },
      { nom: 'Extrait casier judiciaire', statut: 'Fourni', date: '12/02/2019' },
      { nom: 'Diplôme CAP Petite Enfance', statut: 'Fourni', date: '14/02/2019' },
      { nom: 'Attestation formation secours', statut: 'Manquant', date: '' },
      { nom: 'Plan des locaux', statut: 'Fourni', date: '16/02/2019' }
    ],
    observations: '',
    decision: '',
    dateVisite: '',
    inspecteur: ''
  });

  const handleInputChange = (section: string, field: string, value: string) => {
    if (section === 'root') {
      setFormData(prev => ({ ...prev, [field]: value }));
    } else {
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section as keyof typeof prev] as any,
          [field]: value
        }
      }));
    }
  };

  const handleSubmit = (action: string) => {
    console.log(`Action: ${action}`, formData);
    navigate('/dossiers-cape-inscrire');
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* En-tête avec fil d'ariane */}
      <div className="mb-6">
        <nav className="text-sm text-gray-600 mb-2">
          <span 
            className="hover:text-blue-600 cursor-pointer"
            onClick={() => navigate('/dossiers-cape-inscrire')}
          >
            Dossiers CAPE à inscrire
          </span>
          <span className="mx-2">›</span>
          <span className="text-gray-900">Traitement d'une demande</span>
        </nav>
        <h1 className="text-2xl font-bold text-gray-900">
          Traitement d'une demande - Dossier #{formData.numeroOrdre}
        </h1>
      </div>

      {/* Onglets */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('information')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'information'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Informations générales
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'documents'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Documents
            </button>
            <button
              onClick={() => setActiveTab('traitement')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'traitement'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Traitement
            </button>
          </nav>
        </div>
      </div>

      {/* Contenu des onglets */}
      {activeTab === 'information' && (
        <div className="space-y-8">
          {/* Informations de la demande */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations de la demande</h3>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Numéro d'ordre
                </label>
                <input
                  type="text"
                  value={formData.numeroOrdre}
                  onChange={(e) => handleInputChange('root', 'numeroOrdre', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date de création
                </label>
                <input
                  type="date"
                  value={formData.dateCreation}
                  onChange={(e) => handleInputChange('root', 'dateCreation', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Statut
                </label>
                <select
                  value={formData.statut}
                  onChange={(e) => handleInputChange('root', 'statut', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Nouveau">Nouveau</option>
                  <option value="En cours">En cours</option>
                  <option value="En attente">En attente</option>
                  <option value="Validé">Validé</option>
                  <option value="Refusé">Refusé</option>
                </select>
              </div>
            </div>
          </div>

          {/* Informations du demandeur */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations du demandeur</h3>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Civilité
                </label>
                <select
                  value={formData.demandeur.civilite}
                  onChange={(e) => handleInputChange('demandeur', 'civilite', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="M.">M.</option>
                  <option value="Mme">Mme</option>
                  <option value="Mlle">Mlle</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  value={formData.demandeur.nom}
                  onChange={(e) => handleInputChange('demandeur', 'nom', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prénom
                </label>
                <input
                  type="text"
                  value={formData.demandeur.prenom}
                  onChange={(e) => handleInputChange('demandeur', 'prenom', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date de naissance
                </label>
                <input
                  type="date"
                  value={formData.demandeur.dateNaissance}
                  onChange={(e) => handleInputChange('demandeur', 'dateNaissance', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  value={formData.demandeur.telephone}
                  onChange={(e) => handleInputChange('demandeur', 'telephone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.demandeur.email}
                  onChange={(e) => handleInputChange('demandeur', 'email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Adresse
                </label>
                <input
                  type="text"
                  value={formData.demandeur.adresse}
                  onChange={(e) => handleInputChange('demandeur', 'adresse', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ville
                </label>
                <input
                  type="text"
                  value={formData.demandeur.ville}
                  onChange={(e) => handleInputChange('demandeur', 'ville', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Code postal
                </label>
                <input
                  type="text"
                  value={formData.demandeur.codePostal}
                  onChange={(e) => handleInputChange('demandeur', 'codePostal', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Informations de l'établissement */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations de l'établissement</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom de l'établissement
                </label>
                <input
                  type="text"
                  value={formData.etablissement.nom}
                  onChange={(e) => handleInputChange('etablissement', 'nom', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Capacité d'accueil
                </label>
                <input
                  type="number"
                  value={formData.etablissement.capacite}
                  onChange={(e) => handleInputChange('etablissement', 'capacite', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Adresse
                </label>
                <input
                  type="text"
                  value={formData.etablissement.adresse}
                  onChange={(e) => handleInputChange('etablissement', 'adresse', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type d'accueil
                </label>
                <select
                  value={formData.etablissement.typeAccueil}
                  onChange={(e) => handleInputChange('etablissement', 'typeAccueil', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Régulier">Régulier</option>
                  <option value="Occasionnel">Occasionnel</option>
                  <option value="Périscolaire">Périscolaire</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ville
                </label>
                <input
                  type="text"
                  value={formData.etablissement.ville}
                  onChange={(e) => handleInputChange('etablissement', 'ville', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Code postal
                </label>
                <input
                  type="text"
                  value={formData.etablissement.codePostal}
                  onChange={(e) => handleInputChange('etablissement', 'codePostal', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  value={formData.etablissement.telephone}
                  onChange={(e) => handleInputChange('etablissement', 'telephone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'documents' && (
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Documents requis</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Document
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date de réception
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {formData.documents.map((doc, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {doc.nom}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        doc.statut === 'Fourni' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {doc.statut}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {doc.date || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {doc.statut === 'Fourni' ? (
                        <button className="text-blue-600 hover:text-blue-900 mr-3">
                          <i className="ri-download-line"></i> Télécharger
                        </button>
                      ) : (
                        <button className="text-orange-600 hover:text-orange-900">
                          <i className="ri-mail-line"></i> Relancer
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'traitement' && (
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Planification de la visite</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date de visite prévue
                </label>
                <input
                  type="date"
                  value={formData.dateVisite}
                  onChange={(e) => handleInputChange('root', 'dateVisite', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Inspecteur assigné
                </label>
                <select
                  value={formData.inspecteur}
                  onChange={(e) => handleInputChange('root', 'inspecteur', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Sélectionner un inspecteur</option>
                  <option value="Jean DUBOIS">Jean DUBOIS</option>
                  <option value="Marie LAURENT">Marie LAURENT</option>
                  <option value="Pierre BERNARD">Pierre BERNARD</option>
                  <option value="Anne MOREAU">Anne MOREAU</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Observations</h3>
            <textarea
              value={formData.observations}
              onChange={(e) => handleInputChange('root', 'observations', e.target.value)}
              placeholder="Saisir vos observations concernant ce dossier..."
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Décision</h3>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="decision"
                    value="accepter"
                    checked={formData.decision === 'accepter'}
                    onChange={(e) => handleInputChange('root', 'decision', e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">Accepter la demande</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="decision"
                    value="refuser"
                    checked={formData.decision === 'refuser'}
                    onChange={(e) => handleInputChange('root', 'decision', e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">Refuser la demande</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="decision"
                    value="complements"
                    checked={formData.decision === 'complements'}
                    onChange={(e) => handleInputChange('root', 'decision', e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">Demander des compléments</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Boutons d'action */}
      <div className="mt-8 flex justify-between">
        <button
          onClick={() => navigate('/dossiers-cape-inscrire')}
          className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
        >
          <i className="ri-arrow-left-line mr-2"></i>
          Retour à la liste
        </button>
        
        <div className="flex space-x-3">
          <button
            onClick={() => handleSubmit('brouillon')}
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            <i className="ri-save-line mr-2"></i>
            Enregistrer comme brouillon
          </button>
          
          <button
            onClick={() => handleSubmit('valider')}
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            <i className="ri-check-line mr-2"></i>
            Valider le traitement
          </button>
        </div>
      </div>
    </div>
  );
}
