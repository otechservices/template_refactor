
import { useState } from 'react';

interface DonationDetailsProps {
  onBack: () => void;
  donationData: any;
  onUpdateDonation: (updatedData: any) => void;
}

export default function DonationDetails({ onBack, donationData, onUpdateDonation }: DonationDetailsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showFileViewer, setShowFileViewer] = useState(false);
  const [selectedFile, setSelectedFile] = useState('');
  const [editFormData, setEditFormData] = useState({
    date_written_off: '',
    observation_written_off: ''
  });
  const [consentFile, setConsentFile] = useState<File | null>(null);
  const [identityFile, setIdentityFile] = useState<File | null>(null);

  if (!donationData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-accent-100 to-accent-200 p-4 lg:p-6">
        <div className="bg-white rounded-lg shadow-sm border border-accent-300 p-6">
          <div className="text-center text-text-muted">
            <i className="ri-gift-line text-4xl mb-4"></i>
            <p>Aucune donation sélectionnée</p>
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
    return new Date(dateString).toLocaleString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDateOnly = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const getDonationStatusLabel = (donation: any) => {
    if (donation.status === 0 && !donation.is_read) {
      return { text: 'Nouvelle donation', class: 'bg-blue-500 text-white' };
    } else if (donation.status === 0 && donation.is_read) {
      return { text: `Donation lue le ${formatDateOnly(donation.read_at)}`, class: 'bg-blue-500 text-white' };
    } else if (donation.status === 1) {
      return { text: 'En attente de chargement de l\'accord de radiation', class: 'bg-yellow-500 text-white' };
    } else if (donation.status === 2) {
      return { text: `Radiée le ${formatDateOnly(donation.date_written_off)}`, class: 'bg-green-500 text-white' };
    }
    return { text: 'Statut inconnu', class: 'bg-gray-500 text-white' };
  };

  const handleMarkAsRead = () => {
    if (donationData.status === 0 && !donationData.is_read) {
      setIsLoading(true);
      setTimeout(() => {
        const updatedData = { 
          ...donationData, 
          is_read: true, 
          read_at: new Date().toISOString() 
        };
        onUpdateDonation(updatedData);
        setIsLoading(false);
      }, 1500);
    }
  };

  const handleLaunchRadiation = () => {
    if (donationData.status === 0 && !donationData.is_read) {
      setIsLoading(true);
      setTimeout(() => {
        const updatedData = { ...donationData, status: 1 };
        onUpdateDonation(updatedData);
        setIsLoading(false);
      }, 1500);
    }
  };

  const handleEditDonation = () => {
    if (donationData.status === 1) {
      setEditFormData({
        date_written_off: '',
        observation_written_off: ''
      });
      setConsentFile(null);
      setIdentityFile(null);
      setShowEditModal(true);
    }
  };

  const handleSaveEdit = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      const updatedData = {
        ...donationData,
        status: 2,
        date_written_off: new Date(editFormData.date_written_off).toISOString(),
        observation_written_off: editFormData.observation_written_off,
        consent_file: consentFile ? `accord_radiation_${donationData.code}.pdf` : null,
        identity_file: identityFile ? `cni_testateur_${donationData.code}.pdf` : null
      };
      onUpdateDonation(updatedData);
      setShowEditModal(false);
      setEditFormData({ date_written_off: '', observation_written_off: '' });
      setConsentFile(null);
      setIdentityFile(null);
      setIsLoading(false);
    }, 2000);
  };

  const handleViewFile = (fileName: string) => {
    setSelectedFile(fileName);
    setShowFileViewer(true);
  };

  // Données simulées pour les témoins et 2ème notaire
  const mockWitnesses = [
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
      nature: 'Témoin'
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
      nature: 'Témoin'
    }
  ];

  const mockSecondNotary = {
    lastname: 'Adjovi',
    firstname: 'Sèna Michel',
    office: 'Étude Adjovi & Partenaires',
    email: 'michel.adjovi@etude.bj',
    phone: '+229 95 12 67 83'
  };

  const mockVersions = [
    {
      id: 1,
      created_at: '2024-03-10T10:30:00Z',
      observation: 'Version initiale de la donation entre époux',
      reading_urgente: false,
      documents: [
        { name: `donation_${donationData.code}_v1.pdf`, path: `/documents/donation_${donationData.code}_v1.pdf` },
        { name: `annexe_${donationData.code}_v1.pdf`, path: `/documents/annexe_${donationData.code}_v1.pdf` }
      ]
    },
    {
      id: 2,
      created_at: '2024-03-12T14:15:00Z',
      observation: 'Version révisée avec corrections mineures',
      reading_urgente: true,
      documents: [
        { name: `donation_${donationData.code}_v2.pdf`, path: `/documents/donation_${donationData.code}_v2.pdf` }
      ]
    }
  ];

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
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-gift-line text-purple-600 text-xl"></i>
                </div>
                <div>
                  <h1 className="text-xl lg:text-2xl font-bold text-text-dark">
                    Inscription à la donation entre époux finalisée
                  </h1>
                  <p className="text-text-muted text-sm">
                    {donationData.testator.lastname} {donationData.testator.firstname} - Créée le {formatDateOnly(donationData.created_at)}
                  </p>
                </div>
              </div>
            </div>

            {/* Status badge */}
            <div className="flex items-center">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getDonationStatusLabel(donationData).class}`}>
                {getDonationStatusLabel(donationData).text}
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
            {donationData.status === 0 && !donationData.is_read && (
              <>
                <button
                  onClick={handleMarkAsRead}
                  disabled={isLoading}
                  className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap disabled:opacity-50"
                >
                  {isLoading ? (
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                  ) : (
                    <i className="ri-check-line mr-2"></i>
                  )}
                  Marquer comme lu
                </button>
                <button
                  onClick={handleLaunchRadiation}
                  disabled={isLoading}
                  className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap disabled:opacity-50"
                >
                  <i className="ri-close-circle-line mr-2"></i>
                  Lancer une radiation
                </button>
              </>
            )}

            {donationData.status === 1 && (
              <button
                onClick={handleEditDonation}
                disabled={isLoading}
                className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap disabled:opacity-50"
              >
                <i className="ri-upload-line mr-2"></i>
                Charger l'accord de radiation
              </button>
            )}

            {donationData.status === 2 && (
              <div className="flex gap-3">
                <button
                  onClick={() => handleViewFile(donationData.consent_file)}
                  className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-file-pdf-line mr-2"></i>
                  Voir l'accord de radiation
                </button>
                <button
                  onClick={() => handleViewFile(donationData.identity_file)}
                  className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-id-card-line mr-2"></i>
                  Voir la pièce d'identité
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          {/* Informations du testateur */}
          <div className="bg-white rounded-lg shadow-sm border border-accent-300 p-6">
            <h2 className="text-lg font-semibold text-text-dark mb-4 flex items-center border-b border-accent-200 pb-3">
              <i className="ri-user-line text-primary-500 mr-3"></i>
              Testateur
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Nom</label>
                <p className="text-text-dark font-medium">{donationData.testator.lastname}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Prénoms</label>
                <p className="text-text-dark font-medium">{donationData.testator.firstname}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Date de naissance</label>
                <p className="text-text-dark">15-08-1965</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Lieu de naissance</label>
                <p className="text-text-dark">Cotonou, Bénin</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Profession</label>
                <p className="text-text-dark">Notaire</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Adresse</label>
                <p className="text-text-dark">Quartier Ganhi, Rue des Notaires, Cotonou</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Email</label>
                <p className="text-text-dark">{donationData.testator.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Contact</label>
                <p className="text-text-dark">{donationData.testator.phone}</p>
              </div>
            </div>
          </div>

          {/* Témoins et 2ème notaire */}
          <div className="bg-white rounded-lg shadow-sm border border-accent-300 p-6">
            <h2 className="text-lg font-semibold text-text-dark mb-4 flex items-center border-b border-accent-200 pb-3">
              <i className="ri-group-line text-primary-500 mr-3"></i>
              Témoins | 2nd notaire
            </h2>
            
            {/* Liste des témoins */}
            <div className="mb-8">
              <h3 className="text-base font-semibold text-text-dark mb-4">Liste des témoins</h3>
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="border-b border-accent-300">
                      <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">#</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">NPI</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Nom et prénoms</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Date et lieu de naissance</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Profession</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Adresse</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Email</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Contact</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Nature</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockWitnesses.map((witness, index) => (
                      <tr key={witness.id} className="border-b border-accent-200 hover:bg-accent-50">
                        <td className="py-3 px-4 text-sm text-text-dark">{index + 1}</td>
                        <td className="py-3 px-4 text-sm text-text-dark">{witness.npi}</td>
                        <td className="py-3 px-4 text-sm text-text-dark font-medium">{witness.lastname} {witness.firstname}</td>
                        <td className="py-3 px-4 text-sm text-text-dark">{formatDateOnly(witness.birthdate)} à {witness.birthplace}</td>
                        <td className="py-3 px-4 text-sm text-text-dark">{witness.job}</td>
                        <td className="py-3 px-4 text-sm text-text-dark">{witness.address}</td>
                        <td className="py-3 px-4 text-sm text-text-dark">{witness.email}</td>
                        <td className="py-3 px-4 text-sm text-text-dark">{witness.phone}</td>
                        <td className="py-3 px-4 text-sm text-text-dark">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                            {witness.nature}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 2ème Notaire */}
            <div>
              <h3 className="text-base font-semibold text-text-dark mb-4">2nd Notaire</h3>
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

          {/* Documents */}
          <div className="bg-white rounded-lg shadow-sm border border-accent-300 p-6">
            <h2 className="text-lg font-semibold text-text-dark mb-4 flex items-center border-b border-accent-200 pb-3">
              <i className="ri-file-list-line text-primary-500 mr-3"></i>
              Documents
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="border-b border-accent-300">
                    <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">#</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Version du</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Observations</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Lecture urgente</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Document</th>
                  </tr>
                </thead>
                <tbody>
                  {mockVersions.map((version, index) => (
                    <tr key={version.id} className="border-b border-accent-200 hover:bg-accent-50">
                      <td className="py-3 px-4 text-sm text-text-dark">{index + 1}</td>
                      <td className="py-3 px-4 text-sm text-text-dark">Version du {formatDate(version.created_at)}</td>
                      <td className="py-3 px-4 text-sm text-text-dark">{version.observation}</td>
                      <td className="py-3 px-4">
                        {version.reading_urgente ? (
                          <span className="px-2 py-1 bg-red-500 text-white rounded text-xs font-medium">Oui</span>
                        ) : (
                          <span className="px-2 py-1 bg-blue-500 text-white rounded text-xs font-medium">Non</span>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <div className="space-y-1">
                          {version.documents.map((doc, docIndex) => (
                            <button
                              key={docIndex}
                              onClick={() => handleViewFile(doc.path)}
                              className="block text-blue-500 hover:text-blue-700 underline text-sm cursor-pointer"
                            >
                              {doc.name}
                            </button>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Informations de radiation */}
          {donationData.status === 2 && (
            <div className="bg-white rounded-lg shadow-sm border border-accent-300 p-6">
              <h2 className="text-lg font-semibold text-text-dark mb-4 flex items-center border-b border-accent-200 pb-3">
                <i className="ri-close-circle-line text-red-500 mr-3"></i>
                Informations de radiation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-1">Date de radiation</label>
                  <p className="text-text-dark font-medium">{formatDateOnly(donationData.date_written_off)}</p>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-text-muted mb-1">Observation sur la radiation</label>
                  <p className="text-text-dark">{donationData.observation_written_off}</p>
                </div>
                <div className="md:col-span-3">
                  <label className="block text-sm font-medium text-text-muted mb-3">Documents de radiation</label>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleViewFile(donationData.consent_file)}
                      className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap"
                    >
                      <i className="ri-file-pdf-line mr-2"></i>
                      Voir l'accord
                      {isLoading && <i className="ri-loader-4-line animate-spin ml-2"></i>}
                    </button>
                    <button
                      onClick={() => handleViewFile(donationData.identity_file)}
                      className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap"
                    >
                      <i className="ri-id-card-line mr-2"></i>
                      Voir la pièce d'identité
                      {isLoading && <i className="ri-loader-4-line animate-spin ml-2"></i>}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal d'édition pour finaliser la radiation */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-text-dark">Finalisation de la radiation</h3>
                <button 
                  onClick={() => setShowEditModal(false)}
                  className="text-text-muted hover:text-text-dark"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>

              <form onSubmit={(e) => {
                e.preventDefault();
                handleSaveEdit();
              }}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">
                      Date de radiation <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={editFormData.date_written_off}
                      onChange={(e) => setEditFormData({...editFormData, date_written_off: e.target.value})}
                      className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">
                      Observation <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={editFormData.observation_written_off}
                      onChange={(e) => setEditFormData({...editFormData, observation_written_off: e.target.value})}
                      className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                      rows={3}
                      placeholder="Saisissez l'observation sur la radiation..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">
                      L'accord de radiation <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="file"
                      onChange={(e) => setConsentFile(e.target.files?.[0] || null)}
                      className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                      accept=".pdf"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">
                      Pièce d'identité du testateur <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="file"
                      onChange={(e) => setIdentityFile(e.target.files?.[0] || null)}
                      className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                      accept=".pdf"
                      required
                    />
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
                    disabled={!editFormData.date_written_off || !editFormData.observation_written_off || !consentFile || !identityFile || isLoading}
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
              <h3 className="text-lg font-medium text-text-dark">Visualiseur de fichier</h3>
              <button 
                onClick={() => setShowFileViewer(false)}
                className="text-text-muted hover:text-text-dark"
              >
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
