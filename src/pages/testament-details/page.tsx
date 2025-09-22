
import { useState } from 'react';

interface TestamentDetailsProps {
  onBack: () => void;
  testamentData: any;
  onUpdateTestament: (updatedData: any) => void;
}

export default function TestamentDetails({
  onBack,
  testamentData,
  onUpdateTestament,
}: TestamentDetailsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showFileViewer, setShowFileViewer] = useState(false);
  const [selectedFile, setSelectedFile] = useState('');
  const [editFormData, setEditFormData] = useState<any>({});

  if (!testamentData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-accent-100 to-accent-200 p-4 lg:p-6">
        <div className="bg-white rounded-lg shadow-sm border border-accent-300 p-6">
          <div className="text-center text-text-muted">
            <i className="ri-file-text-line text-4xl mb-4"></i>
            <p>Aucun testament sélectionné</p>
            <button
              onClick={onBack}
              className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors cursor-pointer"
            >
              Retour à la liste
            </button>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getTestamentStatusLabel = (testament: any) => {
    if (testament.steps.length === 0) {
      return { text: 'Nouveau testament initialisé', class: 'bg-green-100 text-green-800' };
    } else if (testament.status === 2) {
      return { text: 'Testament validé', class: 'bg-blue-100 text-blue-800' };
    } else {
      return { text: 'Testament en cours', class: 'bg-yellow-100 text-yellow-800' };
    }
  };

  const handleEditTestament = () => {
    setEditFormData({
      testator: { ...testamentData.testator },
      testament_type: testamentData.testament_type || '',
      testament_date: testamentData.testament_date || '',
      observation: testamentData.observation || '',
    });
    setShowEditModal(true);
  };

  const handleSaveEdit = () => {
    setIsLoading(true);

    setTimeout(() => {
      const updatedData = {
        ...testamentData,
        testator: editFormData.testator,
        testament_type: editFormData.testament_type,
        testament_date: editFormData.testament_date,
        observation: editFormData.observation,
        updated_at: new Date().toISOString(),
      };
      onUpdateTestament(updatedData);
      setShowEditModal(false);
      setEditFormData({});
      setIsLoading(false);
    }, 2000);
  };

  const handleViewFile = (fileName: string) => {
    setSelectedFile(fileName);
    setShowFileViewer(true);
  };

  // Données simulées pour les témoins et 2ème notaire
  const mockWitnesses = testamentData.witnesses || [
    {
      id: 1,
      npi: 'NPI-TEM-001',
      lastname: 'Koffi',
      firstname: 'Marie Antoinette',
      birthdate: '1978-05-12',
      birthplace: 'Cotonou',
      job: 'Greffier',
      address: '15 Rue des Martyrs, Cotonou',
      email: 'marie.koffi@email.com',
      phone: '+229 97 45 32 11',
    },
    {
      id: 2,
      npi: 'NPI-TEM-002',
      lastname: 'Dossou',
      firstname: 'Paul Emmanuel',
      birthdate: '1985-08-25',
      birthplace: 'Porto-Novo',
      job: 'Juriste',
      address: '8 Avenue Steinmetz, Porto-Novo',
      email: 'paul.dossou@email.com',
      phone: '+229 96 78 45 29',
    },
  ];

  const mockSecondNotary = {
    lastname: 'Adjovi',
    firstname: 'Sèna Michel',
    office: 'Étude Adjovi & Partenaires',
    email: 'michel.adjovi@etude.bj',
    phone: '+229 95 12 67 83',
  };

  const mockDocuments = testamentData.documents || [
    { id: 1, name: `testament_${testamentData.code}.pdf`, libelle: 'Document testament principal' },
    { id: 2, name: `annexe_${testamentData.code}.pdf`, libelle: 'Annexes et dispositions particulières' },
    { id: 3, name: `identite_${testamentData.code}.pdf`, libelle: "Pièce d'identité du testateur" },
  ];

  const mockBeneficiaries = testamentData.beneficiaries || [
    {
      id: 1,
      lastname: 'Martin',
      firstname: 'Claire Sophie',
      relationship: 'Épouse',
      percentage: 60,
      address: '15 Rue des Palmiers, Cotonou',
      phone: '+229 97 23 45 67',
    },
    {
      id: 2,
      lastname: 'Martin',
      firstname: 'Pierre Emmanuel',
      relationship: 'Fils',
      percentage: 25,
      address: '8 Avenue de la Paix, Porto-Novo',
      phone: '+229 90 12 34 56',
    },
    {
      id: 3,
      lastname: 'Martin',
      firstname: 'Marie Claire',
      relationship: 'Fille',
      percentage: 15,
      address: '22 Boulevard Marina, Cotonou',
      phone: '+229 95 67 89 12',
    }
  ];

  const mockExecutor = testamentData.executor || {
    lastname: 'Kouassi',
    firstname: 'Emmanuel Kofi',
    birthdate: '1975-03-12',
    birthplace: 'Abomey',
    job: 'Avocat',
    address: '18 Avenue Pape Jean-Paul II, Cotonou',
    email: 'emmanuel.kouassi@email.com',
    phone: '+229 90 45 67 83',
  };

  const getTotalPercentage = () => {
    return mockBeneficiaries.reduce((total, ben) => total + ben.percentage, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-100 to-accent-200">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-accent-300 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={onBack}
                className="mr-4 p-2 text-text-muted hover:text-text-dark hover:bg-accent-100 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-arrow-left-line text-xl"></i>
              </button>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-file-text-line text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h1 className="text-xl lg:text-2xl font-bold text-text-dark">Détails du testament</h1>
                  <p className="text-text-muted text-sm">
                    Code: {testamentData.code} - Créé le {formatDate(testamentData.created_at)}
                  </p>
                </div>
              </div>
            </div>

            {/* Status badge */}
            <div className="flex items-center">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTestamentStatusLabel(
                  testamentData,
                ).class}`}
              >
                {getTestamentStatusLabel(testamentData).text}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
        {/* Action buttons */}
        <div className="mb-6 p-4 bg-white rounded-lg shadow-sm border border-accent-300">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleEditTestament}
              disabled={isLoading}
              className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap disabled:opacity-50"
            >
              <i className="ri-edit-line mr-2"></i>
              Modifier
            </button>

            <button 
              onClick={() => window.print()} 
              className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap"
            >
              <i className="ri-printer-line mr-2"></i>
              Imprimer
            </button>

            <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap">
              <i className="ri-check-line mr-2"></i>
              Valider le testament
            </button>

            <button className="flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap">
              <i className="ri-archive-line mr-2"></i>
              Archiver
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {/* Informations du testament */}
          <div className="bg-white rounded-lg shadow-sm border border-accent-300 p-6">
            <h2 className="text-lg font-semibold text-text-dark mb-4 flex items-center border-b border-accent-200 pb-3">
              <i className="ri-file-text-line text-primary-500 mr-3"></i>
              Informations du testament
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Type de testament</label>
                <p className="text-text-dark font-medium">{testamentData.testament_type || 'Testament olographe'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Date du testament</label>
                <p className="text-text-dark">{testamentData.testament_date ? formatDate(testamentData.testament_date) : formatDate(testamentData.created_at)}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Date d'enregistrement</label>
                <p className="text-text-dark">{formatDateTime(testamentData.created_at)}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Dernière modification</label>
                <p className="text-text-dark">{formatDateTime(testamentData.updated_at)}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Statut</label>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTestamentStatusLabel(testamentData).class}`}>
                  {getTestamentStatusLabel(testamentData).text}
                </span>
              </div>
            </div>
          </div>

          {/* Informations du testateur */}
          <div className="bg-white rounded-lg shadow-sm border border-accent-300 p-6">
            <h2 className="text-lg font-semibold text-text-dark mb-4 flex items-center border-b border-accent-200 pb-3">
              <i className="ri-user-line text-primary-500 mr-3"></i>
              Testateur
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Nom</label>
                <p className="text-text-dark font-medium">{testamentData.testator.lastname}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Prénoms</label>
                <p className="text-text-dark font-medium">{testamentData.testator.firstname}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Date de naissance</label>
                <p className="text-text-dark">{formatDate(testamentData.testator.birthdate)}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Lieu de naissance</label>
                <p className="text-text-dark">{testamentData.testator.birthplace}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Profession</label>
                <p className="text-text-dark">{testamentData.testator.job}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Adresse</label>
                <p className="text-text-dark">{testamentData.testator.address}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Email</label>
                <p className="text-text-dark">{testamentData.testator.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Contact</label>
                <p className="text-text-dark">{testamentData.testator.phone}</p>
              </div>
            </div>
          </div>

          {/* Témoins et 2ème notaire */}
          <div className="bg-white rounded-lg shadow-sm border border-accent-300 p-6">
            <h2 className="text-lg font-semibold text-text-dark mb-4 flex items-center border-b border-accent-200 pb-3">
              <i className="ri-group-line text-primary-500 mr-3"></i>
              Témoins et Notaire
            </h2>

            {/* Témoins */}
            <div className="mb-8">
              <h3 className="text-base font-semibold text-text-dark mb-4">Témoins ({mockWitnesses.length})</h3>
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="border-b border-accent-300">
                      <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">#</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Nom et prénoms</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Date et lieu de naissance</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Profession</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Adresse</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockWitnesses.map((witness, index) => (
                      <tr key={witness.id} className="border-b border-accent-200 hover:bg-accent-50">
                        <td className="py-3 px-4 text-sm text-text-dark">{index + 1}</td>
                        <td className="py-3 px-4 text-sm text-text-dark font-medium">
                          {witness.lastname} {witness.firstname}
                        </td>
                        <td className="py-3 px-4 text-sm text-text-dark">
                          {formatDate(witness.birthdate)} à {witness.birthplace}
                        </td>
                        <td className="py-3 px-4 text-sm text-text-dark">{witness.job}</td>
                        <td className="py-3 px-4 text-sm text-text-dark">{witness.address}</td>
                        <td className="py-3 px-4 text-sm text-text-dark">{witness.phone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Second notaire */}
            <div>
              <h3 className="text-base font-semibold text-text-dark mb-4">Second notaire</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-1">Nom</label>
                  <p className="text-text-dark font-medium">{mockSecondNotary.lastname}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-1">Prénoms</label>
                  <p className="text-text-dark font-medium">{mockSecondNotary.firstname}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-1">Cabinet</label>
                  <p className="text-text-dark">{mockSecondNotary.office}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-1">Email</label>
                  <p className="text-text-dark">{mockSecondNotary.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-1">Contact</label>
                  <p className="text-text-dark">{mockSecondNotary.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bénéficiaires */}
          <div className="bg-white rounded-lg shadow-sm border border-accent-300 p-6">
            <h2 className="text-lg font-semibold text-text-dark mb-4 flex items-center border-b border-accent-200 pb-3">
              <i className="ri-user-heart-line text-primary-500 mr-3"></i>
              Bénéficiaires ({mockBeneficiaries.length}) - Total: {getTotalPercentage()}%
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="border-b border-accent-300">
                    <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">#</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Nom et prénoms</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Lien de parenté</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Part (%)</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Adresse</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {mockBeneficiaries.map((beneficiary, index) => (
                    <tr key={beneficiary.id} className="border-b border-accent-200 hover:bg-accent-50">
                      <td className="py-3 px-4 text-sm text-text-dark">{index + 1}</td>
                      <td className="py-3 px-4 text-sm text-text-dark font-medium">
                        {beneficiary.lastname} {beneficiary.firstname}
                      </td>
                      <td className="py-3 px-4 text-sm text-text-dark">{beneficiary.relationship}</td>
                      <td className="py-3 px-4 text-sm text-text-dark">
                        <span className="font-medium text-primary-600">{beneficiary.percentage}%</span>
                      </td>
                      <td className="py-3 px-4 text-sm text-text-dark">{beneficiary.address}</td>
                      <td className="py-3 px-4 text-sm text-text-dark">{beneficiary.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Documents */}
          <div className="bg-white rounded-lg shadow-sm border border-accent-300 p-6">
            <h2 className="text-lg font-semibold text-text-dark mb-4 flex items-center border-b border-accent-200 pb-3">
              <i className="ri-file-list-line text-primary-500 mr-3"></i>
              Documents ({mockDocuments.length})
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="border-b border-accent-300">
                    <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">#</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Libellé</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {mockDocuments.map((document, index) => (
                    <tr key={document.id} className="border-b border-accent-200 hover:bg-accent-50">
                      <td className="py-3 px-4 text-sm text-text-dark">{index + 1}</td>
                      <td className="py-3 px-4 text-sm text-text-dark">{document.libelle}</td>
                      <td className="py-3 px-4">
                        <button
                          onClick={() => handleViewFile(document.name)}
                          className="p-2 text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                          title="Visualiser le document"
                        >
                          <i className="ri-eye-line text-lg"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Exécuteur */}
          <div className="bg-white rounded-lg shadow-sm border border-accent-300 p-6">
            <h2 className="text-lg font-semibold text-text-dark mb-4 flex items-center border-b border-accent-200 pb-3">
              <i className="ri-user-star-line text-primary-500 mr-3"></i>
              Exécuteur testamentaire
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Nom</label>
                <p className="text-text-dark font-medium">{mockExecutor.lastname}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Prénoms</label>
                <p className="text-text-dark font-medium">{mockExecutor.firstname}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Date de naissance</label>
                <p className="text-text-dark">{formatDate(mockExecutor.birthdate)}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Lieu de naissance</label>
                <p className="text-text-dark">{mockExecutor.birthplace}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Profession</label>
                <p className="text-text-dark">{mockExecutor.job}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Adresse</label>
                <p className="text-text-dark">{mockExecutor.address}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Email</label>
                <p className="text-text-dark">{mockExecutor.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Contact</label>
                <p className="text-text-dark">{mockExecutor.phone}</p>
              </div>
            </div>
          </div>

          {/* Observations */}
          <div className="bg-white rounded-lg shadow-sm border border-accent-300 p-6">
            <h2 className="text-lg font-semibold text-text-dark mb-4 flex items-center border-b border-accent-200 pb-3">
              <i className="ri-chat-3-line text-primary-500 mr-3"></i>
              Observations
            </h2>
            <div className="bg-accent-50 rounded-lg p-4">
              <p className="text-text-dark leading-relaxed">
                {testamentData.observation ||
                  'Testament rédigé conformément aux dispositions légales en vigueur. Toutes les formalités ont été respectées lors de l\'établissement de ce document. Le testateur était en pleine possession de ses facultés mentales au moment de la rédaction. La répartition des biens est conforme aux volontés exprimées par le testateur.'}
              </p>
              {testamentData.urgentReading && (
                <div className="flex items-center text-red-600 mt-3">
                  <i className="ri-alarm-warning-line mr-2"></i>
                  <span className="text-sm font-medium">Lecture urgente demandée</span>
                </div>
              )}
            </div>
          </div>

          {/* Historique des étapes */}
          <div className="bg-white rounded-lg shadow-sm border border-accent-300 p-6">
            <h2 className="text-lg font-semibold text-text-dark mb-4 flex items-center border-b border-accent-200 pb-3">
              <i className="ri-history-line text-primary-500 mr-3"></i>
              Historique des étapes
            </h2>
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-accent-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-text-dark">Testament créé</p>
                  <p className="text-xs text-text-muted">{formatDateTime(testamentData.created_at)}</p>
                </div>
              </div>

              {testamentData.steps && testamentData.steps.map((step: any, index: number) => (
                <div
                  key={step.id}
                  className="flex items-center p-3 bg-green-50 rounded-lg border border-green-200"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-text-dark">{step.step_name} complétée</p>
                    <p className="text-xs text-text-muted">Étape {index + 1} terminée</p>
                  </div>
                  <i className="ri-check-circle-fill text-green-500"></i>
                </div>
              ))}

              {testamentData.status === 2 && (
                <div className="flex items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-text-dark">Testament validé</p>
                    <p className="text-xs text-text-muted">Processus terminé avec succès</p>
                  </div>
                  <i className="ri-check-double-line text-blue-500"></i>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal d'édition */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-text-dark">Modifier le testament</h3>
                <button onClick={() => setShowEditModal(false)} className="text-text-muted hover:text-text-dark">
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSaveEdit();
                }}
              >
                <div className="space-y-6">
                  {/* Informations du testament */}
                  <div>
                    <h4 className="text-base font-semibold text-text-dark mb-4 pb-2 border-b border-accent-200">
                      Informations du testament
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-2">
                          Type de testament <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={editFormData.testament_type || ''}
                          onChange={(e) =>
                            setEditFormData({
                              ...editFormData,
                              testament_type: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm pr-8"
                          required
                        >
                          <option value="">Sélectionner un type</option>
                          <option value="Testament olographe">Testament olographe</option>
                          <option value="Testament authentique">Testament authentique</option>
                          <option value="Testament mystique">Testament mystique</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-2">
                          Date du testament <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          value={editFormData.testament_date || ''}
                          onChange={(e) =>
                            setEditFormData({
                              ...editFormData,
                              testament_date: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Informations du testateur */}
                  <div>
                    <h4 className="text-base font-semibold text-text-dark mb-4 pb-2 border-b border-accent-200">
                      Informations du testateur
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-2">
                          Nom <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={editFormData.testator?.lastname || ''}
                          onChange={(e) =>
                            setEditFormData({
                              ...editFormData,
                              testator: { ...editFormData.testator, lastname: e.target.value },
                            })
                          }
                          className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-2">
                          Prénoms <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={editFormData.testator?.firstname || ''}
                          onChange={(e) =>
                            setEditFormData({
                              ...editFormData,
                              testator: { ...editFormData.testator, firstname: e.target.value },
                            })
                          }
                          className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-2">
                          Date de naissance <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          value={editFormData.testator?.birthdate || ''}
                          onChange={(e) =>
                            setEditFormData({
                              ...editFormData,
                              testator: { ...editFormData.testator, birthdate: e.target.value },
                            })
                          }
                          className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-2">
                          Lieu de naissance <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={editFormData.testator?.birthplace || ''}
                          onChange={(e) =>
                            setEditFormData({
                              ...editFormData,
                              testator: { ...editFormData.testator, birthplace: e.target.value },
                            })
                          }
                          className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-2">
                          Profession <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={editFormData.testator?.job || ''}
                          onChange={(e) =>
                            setEditFormData({
                              ...editFormData,
                              testator: { ...editFormData.testator, job: e.target.value },
                            })
                          }
                          className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                          required
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-text-dark mb-2">
                          Adresse <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={editFormData.testator?.address || ''}
                          onChange={(e) =>
                            setEditFormData({
                              ...editFormData,
                              testator: { ...editFormData.testator, address: e.target.value },
                            })
                          }
                          className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={editFormData.testator?.email || ''}
                          onChange={(e) =>
                            setEditFormData({
                              ...editFormData,
                              testator: { ...editFormData.testator, email: e.target.value },
                            })
                          }
                          className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-2">
                          Téléphone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          value={editFormData.testator?.phone || ''}
                          onChange={(e) =>
                            setEditFormData({
                              ...editFormData,
                              testator: { ...editFormData.testator, phone: e.target.value },
                            })
                          }
                          className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Observations */}
                  <div>
                    <h4 className="text-base font-semibold text-text-dark mb-4 pb-2 border-b border-accent-200">
                      Observations
                    </h4>
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-2">
                        Observations sur le testament
                      </label>
                      <textarea
                        value={editFormData.observation || ''}
                        onChange={(e) => setEditFormData({ ...editFormData, observation: e.target.value })}
                        className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                        rows={4}
                        placeholder="Saisissez vos observations..."
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowEditModal(false)}
                    className="px-4 py-2 text-text-muted hover:text-text-dark border border-accent-300 rounded-lg transition-colors cursor-pointer"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    disabled={
                      !editFormData.testament_type ||
                      !editFormData.testament_date ||
                      !editFormData.testator?.lastname ||
                      !editFormData.testator?.firstname ||
                      !editFormData.testator?.birthdate ||
                      !editFormData.testator?.birthplace ||
                      !editFormData.testator?.job ||
                      !editFormData.testator?.address ||
                      !editFormData.testator?.email ||
                      !editFormData.testator?.phone ||
                      isLoading
                    }
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {isLoading ? 'Sauvegarde...' : 'Sauvegarder'}
                    {isLoading && <i className="ri-loader-4-line animate-spin ml-2"></i>}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Visualiseur de fichier */}
      {showFileViewer && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl h-5/6">
            <div className="flex justify-between items-center p-4 border-b border-accent-300">
              <h3 className="text-lg font-medium text-text-dark">Visualisation du document</h3>
              <button onClick={() => setShowFileViewer(false)} className="text-text-muted hover:text-text-dark">
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            <div className="p-4 h-full">
              <div className="bg-accent-100 rounded-lg h-full flex items-center justify-center">
                <div className="text-center text-text-muted">
                  <i className="ri-file-pdf-line text-6xl mb-4"></i>
                  <p className="text-lg font-medium mb-2">Document PDF</p>
                  <p className="text-sm mb-4">Prévisualisation du fichier</p>
                  <p className="text-sm text-text-dark font-medium mb-4">{selectedFile}</p>
                  <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors cursor-pointer">
                    <i className="ri-download-line mr-2"></i>
                    Télécharger
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
