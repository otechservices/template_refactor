
import { useState } from 'react';

interface ConsultationDetailsProps {
  onBack: () => void;
  consultationData: any;
  onUpdateConsultation: (updatedData: any) => void;
}

export default function ConsultationDetails({ onBack, consultationData, onUpdateConsultation }: ConsultationDetailsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectReason, setRejectReason] = useState('');
  const [showFileViewer, setShowFileViewer] = useState(false);
  const [selectedFile, setSelectedFile] = useState('');

  if (!consultationData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-accent-100 to-accent-200 p-4 lg:p-6">
        <div className="bg-white rounded-lg shadow-sm border border-accent-300 p-6">
          <div className="text-center text-text-muted">
            <i className="ri-file-search-line text-4xl mb-4"></i>
            <p>Aucune consultation sélectionnée</p>
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

  const getStatusLabel = (status: number) => {
    switch (status) {
      case 0: return { text: 'Nouvelle demande d\'interrogation initiée', class: 'bg-blue-100 text-blue-800' };
      case 1: return { text: 'Demande d\'interrogation en attente d\'autorisation', class: 'bg-yellow-100 text-yellow-800' };
      case 2: return { text: 'Autorisation demande d\'interrogation accordée', class: 'bg-green-100 text-green-800' };
      case 3: return { text: 'Demande d\'interrogation clôturée', class: 'bg-green-100 text-green-800' };
      case 4: return { text: 'Demande d\'interrogation rejetée', class: 'bg-red-100 text-red-800' };
      default: return { text: 'Statut inconnu', class: 'bg-gray-100 text-gray-800' };
    }
  };

  const getDocumentStatusIcon = (status: string) => {
    switch (status) {
      case 'validated': return 'ri-check-circle-fill text-green-500';
      case 'rejected': return 'ri-close-circle-fill text-red-500';
      case 'pending': return 'ri-time-line text-yellow-500';
      default: return 'ri-file-line text-gray-500';
    }
  };

  const getMemberStatusBadge = (status: string) => {
    switch (status) {
      case 'validated': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleAuthorize = () => {
    setIsLoading(true);
    setTimeout(() => {
      const updatedData = { ...consultationData, status: 2 };
      onUpdateConsultation(updatedData);
      setIsLoading(false);
    }, 1500);
  };

  const handleReject = () => {
    if (rejectReason.trim()) {
      setIsLoading(true);
      setTimeout(() => {
        const updatedData = { 
          ...consultationData, 
          status: 4,
          rejectionReason: rejectReason 
        };
        onUpdateConsultation(updatedData);
        setShowRejectModal(false);
        setRejectReason('');
        setIsLoading(false);
      }, 1500);
    }
  };

  const handlePrintResult = () => {
    setIsLoading(true);
    setTimeout(() => {
      window.print();
      setIsLoading(false);
    }, 1000);
  };

  const handleValidateDocument = (docIndex: number) => {
    const updatedData = {
      ...consultationData,
      documents: consultationData.documents.map((doc: any, index: number) =>
        index === docIndex ? { ...doc, status: 'validated' } : doc
      )
    };
    onUpdateConsultation(updatedData);
  };

  const handleRejectDocument = (docIndex: number, reason: string) => {
    const updatedData = {
      ...consultationData,
      documents: consultationData.documents.map((doc: any, index: number) =>
        index === docIndex ? { ...doc, status: 'rejected', rejectionReason: reason } : doc
      )
    };
    onUpdateConsultation(updatedData);
  };

  const handleValidateMember = (memberId: number) => {
    const updatedData = {
      ...consultationData,
      familyMembers: consultationData.familyMembers.map((member: any) =>
        member.id === memberId ? { ...member, status: 'validated' } : member
      )
    };
    onUpdateConsultation(updatedData);
  };

  const handleRejectMember = (memberId: number, reason: string) => {
    const updatedData = {
      ...consultationData,
      familyMembers: consultationData.familyMembers.map((member: any) =>
        member.id === memberId ? { ...member, status: 'rejected', rejectionReason: reason } : member
      )
    };
    onUpdateConsultation(updatedData);
  };

  const handleViewFile = (fileName: string) => {
    setSelectedFile(fileName);
    setShowFileViewer(true);
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
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-text-dark">
                  Détails consultation {consultationData.code}
                </h1>
                <p className="text-text-muted text-sm">
                  Créée le {formatDate(consultationData.created_at)}
                </p>
              </div>
            </div>

            {/* Status badge */}
            <div className="flex items-center">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusLabel(consultationData.status).class}`}>
                {getStatusLabel(consultationData.status).text}
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
            {consultationData.status === 1 && (
              <>
                <button
                  onClick={handleAuthorize}
                  disabled={isLoading}
                  className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap disabled:opacity-50"
                >
                  {isLoading ? (
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                  ) : (
                    <i className="ri-check-line mr-2"></i>
                  )}
                  Autoriser la demande
                </button>
                <button
                  onClick={() => setShowRejectModal(true)}
                  disabled={isLoading}
                  className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap disabled:opacity-50"
                >
                  <i className="ri-close-line mr-2"></i>
                  Rejeter la demande
                </button>
              </>
            )}

            {consultationData.status === 2 && (
              <button
                onClick={handlePrintResult}
                disabled={isLoading}
                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap disabled:opacity-50"
              >
                {isLoading ? (
                  <i className="ri-loader-4-line animate-spin mr-2"></i>
                ) : (
                  <i className="ri-printer-line mr-2"></i>
                )}
                Imprimer le résultat
              </button>
            )}

            {consultationData.status === 4 && consultationData.rejectionReason && (
              <div className="flex items-center px-4 py-2 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800">
                <i className="ri-error-warning-line mr-2"></i>
                Motif de rejet: {consultationData.rejectionReason}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Informations du de Cujus */}
          <div className="space-y-6">
            {/* Informations personnelles */}
            <div className="bg-white rounded-lg shadow-sm border border-accent-300 p-6">
              <h2 className="text-lg font-semibold text-text-dark mb-4 flex items-center">
                <i className="ri-user-line text-primary-500 mr-3"></i>
                Informations du de Cujus
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-1">Nom complet</label>
                    <p className="text-text-dark font-medium">{consultationData.lastname} {consultationData.firstname}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-1">Téléphone</label>
                    <p className="text-text-dark">{consultationData.phone}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-1">Date de naissance</label>
                    <p className="text-text-dark">{new Date(consultationData.birthdate).toLocaleDateString('fr-FR')}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-1">Date de décès</label>
                    <p className="text-text-dark font-medium text-red-600">{new Date(consultationData.deathdate).toLocaleDateString('fr-FR')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents fournis */}
            <div className="bg-white rounded-lg shadow-sm border border-accent-300 p-6">
              <h2 className="text-lg font-semibold text-text-dark mb-4 flex items-center">
                <i className="ri-file-list-line text-primary-500 mr-3"></i>
                Documents fournis
              </h2>
              <div className="space-y-3">
                {consultationData.documents?.map((doc: any, index: number) => (
                  <div key={index} className="border border-accent-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <i className={`${getDocumentStatusIcon(doc.status)} mr-3 text-lg`}></i>
                        <div>
                          <h3 className="font-medium text-text-dark">{doc.type}</h3>
                          <p className="text-sm text-text-muted">{doc.name}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => handleViewFile(doc.name)}
                          className="p-2 text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                          title="Visualiser le document"
                        >
                          <i className="ri-eye-line"></i>
                        </button>
                        {doc.status === 'pending' && (
                          <>
                            <button 
                              onClick={() => handleValidateDocument(index)}
                              className="p-2 text-green-500 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors cursor-pointer"
                              title="Valider le document"
                            >
                              <i className="ri-check-line"></i>
                            </button>
                            <button 
                              onClick={() => {
                                const reason = prompt('Motif de rejet:');
                                if (reason) handleRejectDocument(index, reason);
                              }}
                              className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                              title="Rejeter le document"
                            >
                              <i className="ri-close-line"></i>
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                    {doc.rejectionReason && (
                      <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded text-sm text-red-600">
                        <i className="ri-error-warning-line mr-1"></i>
                        Motif de rejet: {doc.rejectionReason}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Membres de la famille */}
          <div className="bg-white rounded-lg shadow-sm border border-accent-300 p-6">
            <h2 className="text-lg font-semibold text-text-dark mb-4 flex items-center">
              <i className="ri-group-line text-primary-500 mr-3"></i>
              Membres de la famille
            </h2>
            <div className="space-y-4">
              {consultationData.familyMembers?.map((member: any) => (
                <div key={member.id} className="border border-accent-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-medium text-text-dark">{member.lastname} {member.firstname}</h3>
                      <p className="text-sm text-text-muted">{member.relationship}</p>
                      <p className="text-sm text-text-muted">{member.phone}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getMemberStatusBadge(member.status)}`}>
                      {member.status === 'validated' ? 'Validé' : 
                       member.status === 'rejected' ? 'Rejeté' : 'En attente'}
                    </span>
                  </div>

                  {member.rejectionReason && (
                    <div className="mb-3 p-2 bg-red-50 border border-red-200 rounded text-sm text-red-600">
                      <i className="ri-error-warning-line mr-1"></i>
                      Motif de rejet: {member.rejectionReason}
                    </div>
                  )}

                  {/* Documents du membre */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-text-dark">Pièces justificatives:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {member.documents?.map((doc: string, docIndex: number) => (
                        <div key={docIndex} className="flex items-center justify-between p-2 bg-accent-50 rounded">
                          <span className="text-sm text-text-dark truncate">{doc}</span>
                          <button 
                            onClick={() => handleViewFile(doc)}
                            className="ml-2 p-1 text-blue-500 hover:text-blue-700 cursor-pointer"
                            title="Visualiser"
                          >
                            <i className="ri-eye-line text-sm"></i>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions pour le membre */}
                  {member.status === 'pending' && (
                    <div className="flex gap-2 mt-4 pt-3 border-t border-accent-200">
                      <button 
                        onClick={() => handleValidateMember(member.id)}
                        className="flex items-center px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors cursor-pointer"
                      >
                        <i className="ri-check-line mr-1"></i>
                        Valider
                      </button>
                      <button 
                        onClick={() => {
                          const reason = prompt('Motif de rejet du membre:');
                          if (reason) handleRejectMember(member.id, reason);
                        }}
                        className="flex items-center px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors cursor-pointer"
                      >
                        <i className="ri-close-line mr-1"></i>
                        Rejeter
                      </button>
                    </div>
                  )}
                </div>
              ))}

              {(!consultationData.familyMembers || consultationData.familyMembers.length === 0) && (
                <div className="text-center py-8 text-text-muted">
                  <i className="ri-group-line text-3xl mb-2"></i>
                  <p>Aucun membre de famille enregistré</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Historique des actions */}
        <div className="mt-6 bg-white rounded-lg shadow-sm border border-accent-300 p-6">
          <h2 className="text-lg font-semibold text-text-dark mb-4 flex items-center">
            <i className="ri-history-line text-primary-500 mr-3"></i>
            Historique des actions
          </h2>
          <div className="space-y-3">
            <div className="flex items-center p-3 bg-accent-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-text-dark">Consultation créée</p>
                <p className="text-xs text-text-muted">{formatDate(consultationData.created_at)}</p>
              </div>
            </div>
            {consultationData.status >= 1 && (
              <div className="flex items-center p-3 bg-accent-50 rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-4"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-text-dark">Demande soumise pour autorisation</p>
                  <p className="text-xs text-text-muted">Documents et membres ajoutés</p>
                </div>
              </div>
            )}
            {consultationData.status >= 2 && (
              <div className="flex items-center p-3 bg-accent-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-text-dark">Consultation autorisée</p>
                  <p className="text-xs text-text-muted">Prêt pour la recherche</p>
                </div>
              </div>
            )}
            {consultationData.status === 4 && (
              <div className="flex items-center p-3 bg-red-50 rounded-lg border border-red-200">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-4"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-red-700">Consultation rejetée</p>
                  <p className="text-xs text-red-600">{consultationData.rejectionReason || 'Aucun motif spécifié'}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal de rejet */}
      {showRejectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-text-dark">Rejeter la demande</h3>
                <button 
                  onClick={() => setShowRejectModal(false)}
                  className="text-text-muted hover:text-text-dark"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-text-dark mb-2">
                  Motif du rejet <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={rejectReason}
                  onChange={(e) => setRejectReason(e.target.value)}
                  className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  rows={4}
                  placeholder="Veuillez indiquer le motif du rejet..."
                  required
                />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowRejectModal(false)}
                  className="px-4 py-2 text-text-muted hover:text-text-dark border border-accent-300 rounded-lg transition-colors cursor-pointer"
                >
                  Annuler
                </button>
                <button
                  onClick={handleReject}
                  disabled={!rejectReason.trim() || isLoading}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors cursor-pointer disabled:opacity-50"
                >
                  {isLoading ? 'Rejet en cours...' : 'Confirmer le rejet'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Visualiseur de fichier */}
      {showFileViewer && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl h-5/6">
            <div className="flex justify-between items-center p-4 border-b border-accent-300">
              <h3 className="text-lg font-medium text-text-dark">Visualisation du fichier</h3>
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
                  <p className="text-lg font-medium mb-2">{selectedFile}</p>
                  <p className="text-sm">Prévisualisation du document PDF</p>
                  <button className="mt-4 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors cursor-pointer">
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
