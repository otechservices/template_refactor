
import { useState } from 'react';

export default function MesDossiers() {
  const [activeTab, setActiveTab] = useState('tous');
  const [dossiers] = useState([
    {
      id: 'CAPE-2024-0123',
      type: 'CAPE',
      nom: 'Centre Les Petits Explorateurs',
      statut: 'En instruction',
      dateDepot: '2024-01-15',
      dateLimite: '2024-02-15',
      etapes: [
        { nom: 'Dépôt du dossier', statut: 'termine', date: '2024-01-15' },
        { nom: 'Vérification des pièces', statut: 'termine', date: '2024-01-18' },
        { nom: 'Instruction technique', statut: 'en-cours', date: null },
        { nom: 'Visite de contrôle', statut: 'en-attente', date: null },
        { nom: 'Décision finale', statut: 'en-attente', date: null }
      ],
      documents: [
        { nom: 'Formulaire de demande', statut: 'valide', type: 'PDF' },
        { nom: 'Plan des locaux', statut: 'valide', type: 'PDF' },
        { nom: 'Projet pédagogique', statut: 'valide', type: 'PDF' },
        { nom: 'CV du personnel', statut: 'manquant', type: 'PDF' }
      ]
    },
    {
      id: 'GARD-2024-0087',
      type: 'Garderie',
      nom: 'Crèche Bébé Bonheur',
      statut: 'Autorisé',
      dateDepot: '2023-12-01',
      dateLimite: '2024-01-01',
      dateAutorisation: '2023-12-28',
      etapes: [
        { nom: 'Dépôt du dossier', statut: 'termine', date: '2023-12-01' },
        { nom: 'Vérification des pièces', statut: 'termine', date: '2023-12-05' },
        { nom: 'Instruction technique', statut: 'termine', date: '2023-12-15' },
        { nom: 'Visite de contrôle', statut: 'termine', date: '2023-12-20' },
        { nom: 'Décision finale', statut: 'termine', date: '2023-12-28' }
      ],
      documents: [
        { nom: 'Formulaire de demande', statut: 'valide', type: 'PDF' },
        { nom: 'Plan des locaux', statut: 'valide', type: 'PDF' },
        { nom: 'Projet éducatif', statut: 'valide', type: 'PDF' },
        { nom: 'Diplômes du personnel', statut: 'valide', type: 'PDF' },
        { nom: 'Attestation d\'autorisation', statut: 'genere', type: 'PDF' }
      ]
    },
    {
      id: 'CAPE-2024-0045',
      type: 'CAPE',
      nom: 'Club Loisirs Mercredi+',
      statut: 'Refusé',
      dateDepot: '2023-11-10',
      dateLimite: '2023-12-10',
      dateDecision: '2023-12-08',
      motifRefus: 'Locaux non conformes aux normes de sécurité incendie',
      etapes: [
        { nom: 'Dépôt du dossier', statut: 'termine', date: '2023-11-10' },
        { nom: 'Vérification des pièces', statut: 'termine', date: '2023-11-15' },
        { nom: 'Instruction technique', statut: 'termine', date: '2023-11-25' },
        { nom: 'Visite de contrôle', statut: 'termine', date: '2023-12-01' },
        { nom: 'Décision finale', statut: 'termine', date: '2023-12-08' }
      ],
      documents: [
        { nom: 'Formulaire de demande', statut: 'valide', type: 'PDF' },
        { nom: 'Plan des locaux', statut: 'refuse', type: 'PDF' },
        { nom: 'Projet pédagogique', statut: 'valide', type: 'PDF' },
        { nom: 'Rapport de visite', statut: 'genere', type: 'PDF' }
      ]
    }
  ]);

  const [dossierSelectionne, setDossierSelectionne] = useState<string | null>(null);

  const filtrerDossiers = () => {
    switch (activeTab) {
      case 'en-cours':
        return dossiers.filter(d => d.statut === 'En instruction');
      case 'autorises':
        return dossiers.filter(d => d.statut === 'Autorisé');
      case 'refuses':
        return dossiers.filter(d => d.statut === 'Refusé');
      default:
        return dossiers;
    }
  };

  const getStatutColor = (statut: string) => {
    switch (statut) {
      case 'En instruction':
        return 'bg-yellow-100 text-yellow-800';
      case 'Autorisé':
        return 'bg-green-100 text-green-800';
      case 'Refusé':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getEtapeStatutColor = (statut: string) => {
    switch (statut) {
      case 'termine':
        return 'bg-green-500';
      case 'en-cours':
        return 'bg-blue-500';
      case 'en-attente':
        return 'bg-gray-300';
      default:
        return 'bg-gray-300';
    }
  };

  const getDocumentStatutColor = (statut: string) => {
    switch (statut) {
      case 'valide':
        return 'bg-green-100 text-green-800';
      case 'manquant':
        return 'bg-red-100 text-red-800';
      case 'refuse':
        return 'bg-red-100 text-red-800';
      case 'genere':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const dossiersAffiches = filtrerDossiers();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Mes Dossiers</h1>
        <p className="text-gray-600">
          Suivez l'avancement de vos demandes d'autorisation
        </p>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <i className="ri-file-list-3-line text-xl text-blue-600"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total</p>
              <p className="text-2xl font-bold text-gray-900">{dossiers.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <i className="ri-time-line text-xl text-yellow-600"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">En cours</p>
              <p className="text-2xl font-bold text-gray-900">
                {dossiers.filter(d => d.statut === 'En instruction').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <i className="ri-check-line text-xl text-green-600"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Autorisés</p>
              <p className="text-2xl font-bold text-gray-900">
                {dossiers.filter(d => d.statut === 'Autorisé').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <i className="ri-close-line text-xl text-red-600"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Refusés</p>
              <p className="text-2xl font-bold text-gray-900">
                {dossiers.filter(d => d.statut === 'Refusé').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Onglets */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          {[
            { key: 'tous', label: 'Tous les dossiers' },
            { key: 'en-cours', label: 'En cours' },
            { key: 'autorises', label: 'Autorisés' },
            { key: 'refuses', label: 'Refusés' }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.key
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Liste des dossiers */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">
                Dossiers ({dossiersAffiches.length})
              </h3>
            </div>
            <div className="divide-y divide-gray-200">
              {dossiersAffiches.map(dossier => (
                <div
                  key={dossier.id}
                  onClick={() => setDossierSelectionne(dossier.id)}
                  className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                    dossierSelectionne === dossier.id ? 'bg-blue-50 border-r-2 border-blue-500' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">{dossier.id}</span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatutColor(dossier.statut)}`}>
                      {dossier.statut}
                    </span>
                  </div>
                  <h4 className="text-sm font-medium text-gray-900 mb-1">
                    {dossier.nom}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Déposé le {dossier.dateDepot}</span>
                    <span className={`px-2 py-1 rounded-full ${
                      dossier.type === 'CAPE' ? 'bg-purple-100 text-purple-800' : 'bg-orange-100 text-orange-800'
                    }`}>
                      {dossier.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Détail du dossier */}
        <div className="lg:col-span-2">
          {dossierSelectionne ? (
            <div className="space-y-6">
              {(() => {
                const dossier = dossiers.find(d => d.id === dossierSelectionne);
                if (!dossier) return null;

                return (
                  <>
                    {/* En-tête du dossier */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{dossier.nom}</h3>
                          <p className="text-sm text-gray-600">Dossier #{dossier.id}</p>
                        </div>
                        <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatutColor(dossier.statut)}`}>
                          {dossier.statut}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Date de dépôt :</span>
                          <span className="ml-2 font-medium">{dossier.dateDepot}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Type :</span>
                          <span className="ml-2 font-medium">{dossier.type === 'CAPE' ? 'Centre CAPE' : 'Garderie'}</span>
                        </div>
                        {dossier.dateLimite && (
                          <div>
                            <span className="text-gray-600">Délai limite :</span>
                            <span className="ml-2 font-medium">{dossier.dateLimite}</span>
                          </div>
                        )}
                        {dossier.dateAutorisation && (
                          <div>
                            <span className="text-gray-600">Date d'autorisation :</span>
                            <span className="ml-2 font-medium text-green-600">{dossier.dateAutorisation}</span>
                          </div>
                        )}
                        {dossier.dateDecision && dossier.statut === 'Refusé' && (
                          <div className="col-span-2">
                            <span className="text-gray-600">Date de refus :</span>
                            <span className="ml-2 font-medium text-red-600">{dossier.dateDecision}</span>
                          </div>
                        )}
                      </div>

                      {dossier.motifRefus && (
                        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                          <h4 className="text-sm font-medium text-red-800 mb-2">Motif de refus :</h4>
                          <p className="text-sm text-red-700">{dossier.motifRefus}</p>
                        </div>
                      )}
                    </div>

                    {/* Suivi des étapes */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Suivi des étapes</h4>
                      <div className="space-y-4">
                        {dossier.etapes.map((etape, index) => (
                          <div key={index} className="flex items-center">
                            <div className={`w-4 h-4 rounded-full ${getEtapeStatutColor(etape.statut)} flex-shrink-0`}>
                              {etape.statut === 'termine' && (
                                <i className="ri-check-line text-xs text-white flex items-center justify-center w-full h-full"></i>
                              )}
                            </div>
                            <div className="ml-4 flex-1">
                              <div className="flex items-center justify-between">
                                <span className={`text-sm font-medium ${
                                  etape.statut === 'termine' ? 'text-gray-900' : 
                                  etape.statut === 'en-cours' ? 'text-blue-600' : 'text-gray-500'
                                }`}>
                                  {etape.nom}
                                </span>
                                {etape.date && (
                                  <span className="text-xs text-gray-500">{etape.date}</span>
                                )}
                              </div>
                              {etape.statut === 'en-cours' && (
                                <p className="text-xs text-blue-600 mt-1">En cours de traitement</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Documents */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Documents</h4>
                      <div className="space-y-3">
                        {dossier.documents.map((doc, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center mr-3">
                                <i className="ri-file-text-line text-gray-600"></i>
                              </div>
                              <div>
                                <span className="text-sm font-medium text-gray-900">{doc.nom}</span>
                                <p className="text-xs text-gray-600">{doc.type}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDocumentStatutColor(doc.statut)}`}>
                                {doc.statut === 'valide' ? 'Validé' :
                                 doc.statut === 'manquant' ? 'Manquant' :
                                 doc.statut === 'refuse' ? 'Refusé' :
                                 doc.statut === 'genere' ? 'Généré' : doc.statut}
                              </span>
                              {doc.statut === 'valide' || doc.statut === 'genere' ? (
                                <button className="text-blue-600 hover:text-blue-800 transition-colors">
                                  <i className="ri-download-line"></i>
                                </button>
                              ) : doc.statut === 'manquant' ? (
                                <button className="text-orange-600 hover:text-orange-800 transition-colors">
                                  <i className="ri-upload-line"></i>
                                </button>
                              ) : null}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Actions</h4>
                      <div className="flex space-x-4">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          Contacter le service
                        </button>
                        {dossier.statut === 'Refusé' && (
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                            Faire un recours
                          </button>
                        )}
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                          Télécharger le dossier
                        </button>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-folder-line text-2xl text-gray-400"></i>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Sélectionnez un dossier</h3>
              <p className="text-gray-600">
                Cliquez sur un dossier à gauche pour voir les détails et le suivi.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
