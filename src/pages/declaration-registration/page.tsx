
import { useState, useEffect } from 'react';

interface DeclarationRegistrationProps {
  onBack: () => void;
  onComplete: (declarationData: any) => void;
}

export default function DeclarationRegistration({ onBack, onComplete }: DeclarationRegistrationProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Formulaire testateur
  const [testatorForm, setTestatorForm] = useState({
    npi: '',
    lastname: '',
    firstname: '',
    birthdate: '',
    birthplace: '',
    job: '',
    address: '',
    email: '',
    phone: ''
  });

  // Type de testament et témoins/notaire
  const [testamentType, setTestamentType] = useState('');
  const [witnesses, setWitnesses] = useState<any[]>([]);
  const [secondNotary, setSecondNotary] = useState('');
  const [showWitnessModal, setShowWitnessModal] = useState(false);
  const [witnessForm, setWitnessForm] = useState({
    npi: '',
    lastname: '',
    firstname: '',
    birthdate: '',
    birthplace: '',
    job: '',
    address: '',
    email: '',
    phone: ''
  });

  // Documents
  const [documents, setDocuments] = useState<any[]>([]);
  const [showDocumentModal, setShowDocumentModal] = useState(false);
  const [documentForm, setDocumentForm] = useState({
    name: '',
    file: null as File | null
  });

  // Exécuteur
  const [executorForm, setExecutorForm] = useState({
    npi: '',
    lastname: '',
    firstname: '',
    birthdate: '',
    birthplace: '',
    job: '',
    address: '',
    email: '',
    phone: ''
  });

  // Observations
  const [observation, setObservation] = useState('');
  const [urgentReading, setUrgentReading] = useState(false);

  // Données simulées
  const testamentTypes = [
    'Testament olographe',
    'Testament authentique', 
    'Testament mystique'
  ];

  const availableNotaries = [
    { id: 1, name: 'Maître Jean Pierre Dupont - Cabinet Dupont & Associés' },
    { id: 2, name: 'Maître Marie Claire Martin - Étude Martin' },
    { id: 3, name: 'Maître Emmanuel Kouassi - Cabinet Kouassi & Partenaires' }
  ];

  const [identityFile, setIdentityFile] = useState<File | null>(null);

  const steps = [
    'Infos Testateur',
    'Infos Témoins | 2nd Notaire', 
    'Documents',
    'Infos Exécuteur',
    'Observations',
    'Récapitulatif'
  ];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleTestatorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleNextStep();
  };

  const handleAddWitness = () => {
    if (witnesses.length < 2) {
      setWitnessForm({
        npi: '',
        lastname: '',
        firstname: '',
        birthdate: '',
        birthplace: '',
        job: '',
        address: '',
        email: '',
        phone: ''
      });
      setShowWitnessModal(true);
    }
  };

  const handleSaveWitness = () => {
    if (witnessForm.lastname && witnessForm.firstname && witnessForm.birthdate) {
      setWitnesses([...witnesses, { ...witnessForm, id: Date.now() }]);
      setShowWitnessModal(false);
      setWitnessForm({
        npi: '',
        lastname: '',
        firstname: '',
        birthdate: '',
        birthplace: '',
        job: '',
        address: '',
        email: '',
        phone: ''
      });
    }
  };

  const handleRemoveWitness = (index: number) => {
    setWitnesses(witnesses.filter((_, i) => i !== index));
  };

  const handleAddDocument = () => {
    setDocumentForm({
      name: '',
      file: null
    });
    setShowDocumentModal(true);
  };

  const handleSaveDocument = () => {
    if (documentForm.name && documentForm.file) {
      setDocuments([...documents, { ...documentForm, id: Date.now() }]);
      setShowDocumentModal(false);
      setDocumentForm({
        name: '',
        file: null
      });
    }
  };

  const handleRemoveDocument = (index: number) => {
    setDocuments(documents.filter((_, i) => i !== index));
  };

  const handleFinalSubmit = () => {
    setIsLoading(true);
    
    // Simuler l'enregistrement
    setTimeout(() => {
      const declarationData = {
        id: Date.now(),
        code: `DECL-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        status: 0,
        testator: testatorForm,
        testamentType,
        witnesses,
        secondNotary,
        documents,
        executor: executorForm,
        observation,
        urgentReading,
        steps: [
          {
            id: 1,
            step_name: 'Informations personnelles',
            completed: true,
            data: testatorForm
          }
        ]
      };
      
      onComplete(declarationData);
      setIsLoading(false);
    }, 2000);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR');
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
                <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-file-add-line text-orange-600 text-xl"></i>
                </div>
                <div>
                  <h1 className="text-xl lg:text-2xl font-bold text-text-dark">Enregistrement de déclaration</h1>
                  <p className="text-text-muted text-sm">Nouvelle inscription au testament</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stepper */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
        <div className="bg-white rounded-lg shadow-sm border border-accent-300 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                  index <= currentStep 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-accent-200 text-text-muted'
                }`}>
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-0.5 mx-2 ${
                    index < currentStep ? 'bg-primary-500' : 'bg-accent-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className="text-lg font-semibold text-text-dark">{steps[currentStep]}</h2>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-lg shadow-sm border border-accent-300 p-6">
          {/* Étape 1: Infos Testateur */}
          {currentStep === 0 && (
            <form onSubmit={handleTestatorSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">NPI</label>
                  <input
                    type="text"
                    value={testatorForm.npi}
                    onChange={(e) => setTestatorForm({...testatorForm, npi: e.target.value})}
                    className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Nom <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={testatorForm.lastname}
                    onChange={(e) => setTestatorForm({...testatorForm, lastname: e.target.value})}
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
                    value={testatorForm.firstname}
                    onChange={(e) => setTestatorForm({...testatorForm, firstname: e.target.value})}
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
                    value={testatorForm.birthdate}
                    onChange={(e) => setTestatorForm({...testatorForm, birthdate: e.target.value})}
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
                    value={testatorForm.birthplace}
                    onChange={(e) => setTestatorForm({...testatorForm, birthplace: e.target.value})}
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
                    value={testatorForm.job}
                    onChange={(e) => setTestatorForm({...testatorForm, job: e.target.value})}
                    className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Adresse <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={testatorForm.address}
                    onChange={(e) => setTestatorForm({...testatorForm, address: e.target.value})}
                    className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">Email</label>
                  <input
                    type="email"
                    value={testatorForm.email}
                    onChange={(e) => setTestatorForm({...testatorForm, email: e.target.value})}
                    className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Contact(s) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={testatorForm.phone}
                    onChange={(e) => setTestatorForm({...testatorForm, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-text-dark mb-2">
                  Pièce d'identité du testateur
                </label>
                <input
                  type="file"
                  onChange={(e) => setIdentityFile(e.target.files?.[0] || null)}
                  className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  accept=".pdf"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex items-center px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap"
                >
                  Suivant
                  <i className="ri-arrow-right-line ml-2"></i>
                </button>
              </div>
            </form>
          )}

          {/* Étape 2: Infos Témoins | 2nd Notaire */}
          {currentStep === 1 && (
            <div>
              {/* Type de testament */}
              <div className="mb-6">
                <h3 className="text-base font-semibold text-text-dark mb-4">Type de testament</h3>
                <select
                  value={testamentType}
                  onChange={(e) => setTestamentType(e.target.value)}
                  className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                >
                  <option value="">Sélectionner un type</option>
                  {testamentTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Témoins */}
              {secondNotary === '' && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-semibold text-text-dark">Témoins</h3>
                    {witnesses.length < 2 && (
                      <button
                        onClick={handleAddWitness}
                        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm cursor-pointer"
                      >
                        <i className="ri-add-line mr-2"></i>
                        Ajouter un témoin
                      </button>
                    )}
                  </div>

                  {witnesses.length > 0 && (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-accent-300">
                            <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">#</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">NPI</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Nom et prénoms</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Date et lieu de naissance</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Profession</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Adresse</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Email</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Contact(s)</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {witnesses.map((witness, index) => (
                            <tr key={witness.id} className="border-b border-accent-200 hover:bg-accent-50">
                              <td className="py-3 px-4 text-sm text-text-dark">{index + 1}</td>
                              <td className="py-3 px-4 text-sm text-text-dark">{witness.npi}</td>
                              <td className="py-3 px-4 text-sm text-text-dark font-medium">
                                {witness.lastname} {witness.firstname}
                              </td>
                              <td className="py-3 px-4 text-sm text-text-dark">
                                {formatDate(witness.birthdate)} à {witness.birthplace}
                              </td>
                              <td className="py-3 px-4 text-sm text-text-dark">{witness.job}</td>
                              <td className="py-3 px-4 text-sm text-text-dark">{witness.address}</td>
                              <td className="py-3 px-4 text-sm text-text-dark">{witness.email}</td>
                              <td className="py-3 px-4 text-sm text-text-dark">{witness.phone}</td>
                              <td className="py-3 px-4">
                                <button
                                  onClick={() => handleRemoveWitness(index)}
                                  className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                                >
                                  <i className="ri-delete-bin-line"></i>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {/* Second notaire */}
              {witnesses.length === 0 && (
                <div className="mb-6">
                  <h3 className="text-base font-semibold text-text-dark mb-4">Second notaire</h3>
                  <select
                    value={secondNotary}
                    onChange={(e) => setSecondNotary(e.target.value)}
                    className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  >
                    <option value="">Sélectionner un notaire</option>
                    {availableNotaries.map(notary => (
                      <option key={notary.id} value={notary.id}>{notary.name}</option>
                    ))}
                  </select>
                </div>
              )}

              <div className="flex justify-between">
                <button
                  onClick={handlePrevStep}
                  className="flex items-center px-6 py-2 bg-accent-300 text-text-dark rounded-lg hover:bg-accent-400 transition-colors text-sm font-medium cursor-pointer"
                >
                  <i className="ri-arrow-left-line mr-2"></i>
                  Précédent
                </button>
                <button
                  onClick={handleNextStep}
                  className="flex items-center px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-sm font-medium cursor-pointer"
                >
                  Suivant
                  <i className="ri-arrow-right-line ml-2"></i>
                </button>
              </div>
            </div>
          )}

          {/* Étape 3: Documents */}
          {currentStep === 2 && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-semibold text-text-dark">Documents</h3>
                <button
                  onClick={handleAddDocument}
                  className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm cursor-pointer"
                >
                  <i className="ri-add-line mr-2"></i>
                  Ajouter un document
                </button>
              </div>

              {documents.length > 0 && (
                <div className="overflow-x-auto mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-accent-300">
                        <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">#</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Libellé</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {documents.map((doc, index) => (
                        <tr key={doc.id} className="border-b border-accent-200 hover:bg-accent-50">
                          <td className="py-3 px-4 text-sm text-text-dark">{index + 1}</td>
                          <td className="py-3 px-4 text-sm text-text-dark">{doc.name}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <button className="p-2 text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer">
                                <i className="ri-eye-line"></i>
                              </button>
                              <button
                                onClick={() => handleRemoveDocument(index)}
                                className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                              >
                                <i className="ri-delete-bin-line"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <div className="flex justify-between">
                <button
                  onClick={handlePrevStep}
                  className="flex items-center px-6 py-2 bg-accent-300 text-text-dark rounded-lg hover:bg-accent-400 transition-colors text-sm font-medium cursor-pointer"
                >
                  <i className="ri-arrow-left-line mr-2"></i>
                  Précédent
                </button>
                <button
                  onClick={handleNextStep}
                  className="flex items-center px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-sm font-medium cursor-pointer"
                >
                  Suivant
                  <i className="ri-arrow-right-line ml-2"></i>
                </button>
              </div>
            </div>
          )}

          {/* Étape 4: Infos Exécuteur */}
          {currentStep === 3 && (
            <div>
              <p className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
                <strong>NB:</strong> Si pas d'exécuteur, veuillez cliquer sur suivant sinon remplir tous les champs avec 
                <span className="text-red-500 ml-1">(*)</span>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">NPI</label>
                  <input
                    type="text"
                    value={executorForm.npi}
                    onChange={(e) => setExecutorForm({...executorForm, npi: e.target.value})}
                    className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Nom <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={executorForm.lastname}
                    onChange={(e) => setExecutorForm({...executorForm, lastname: e.target.value})}
                    className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Prénoms <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={executorForm.firstname}
                    onChange={(e) => setExecutorForm({...executorForm, firstname: e.target.value})}
                    className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Date de naissance <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={executorForm.birthdate}
                    onChange={(e) => setExecutorForm({...executorForm, birthdate: e.target.value})}
                    className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Lieu de naissance <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={executorForm.birthplace}
                    onChange={(e) => setExecutorForm({...executorForm, birthplace: e.target.value})}
                    className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Profession <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={executorForm.job}
                    onChange={(e) => setExecutorForm({...executorForm, job: e.target.value})}
                    className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Adresse <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={executorForm.address}
                    onChange={(e) => setExecutorForm({...executorForm, address: e.target.value})}
                    className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">Email</label>
                  <input
                    type="email"
                    value={executorForm.email}
                    onChange={(e) => setExecutorForm({...executorForm, email: e.target.value})}
                    className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Contact(s) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={executorForm.phone}
                    onChange={(e) => setExecutorForm({...executorForm, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={handlePrevStep}
                  className="flex items-center px-6 py-2 bg-accent-300 text-text-dark rounded-lg hover:bg-accent-400 transition-colors text-sm font-medium cursor-pointer"
                >
                  <i className="ri-arrow-left-line mr-2"></i>
                  Précédent
                </button>
                <button
                  onClick={handleNextStep}
                  className="flex items-center px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-sm font-medium cursor-pointer"
                >
                  Suivant
                  <i className="ri-arrow-right-line ml-2"></i>
                </button>
              </div>
            </div>
          )}

          {/* Étape 5: Observations */}
          {currentStep === 4 && (
            <div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-text-dark mb-2">
                  Observations <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={observation}
                  onChange={(e) => setObservation(e.target.value)}
                  className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  rows={4}
                  placeholder="Saisissez vos observations..."
                />
              </div>

              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={urgentReading}
                    onChange={(e) => setUrgentReading(e.target.checked)}
                    className="w-4 h-4 text-primary-500 rounded border-accent-400 focus:ring-primary-500 focus:ring-2 mr-3"
                  />
                  <span className="text-sm text-text-dark">
                    Cette observation doit-elle faire l'objet d'une lecture urgente ?
                  </span>
                </label>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={handlePrevStep}
                  className="flex items-center px-6 py-2 bg-accent-300 text-text-dark rounded-lg hover:bg-accent-400 transition-colors text-sm font-medium cursor-pointer"
                >
                  <i className="ri-arrow-left-line mr-2"></i>
                  Précédent
                </button>
                <button
                  onClick={handleNextStep}
                  className="flex items-center px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-sm font-medium cursor-pointer"
                >
                  Suivant
                  <i className="ri-arrow-right-line ml-2"></i>
                </button>
              </div>
            </div>
          )}

          {/* Étape 6: Récapitulatif */}
          {currentStep === 5 && (
            <div>
              <div className="space-y-6">
                {/* Testateur */}
                <div className="border border-accent-200 rounded-lg p-4">
                  <h3 className="text-base font-semibold text-text-dark mb-4 border-b border-accent-200 pb-2">
                    Testateur
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <dt className="text-sm font-medium text-text-muted">Nom</dt>
                      <dd className="text-text-dark font-medium">{testatorForm.lastname}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-text-muted">Prénoms</dt>
                      <dd className="text-text-dark font-medium">{testatorForm.firstname}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-text-muted">Date de naissance</dt>
                      <dd className="text-text-dark">{formatDate(testatorForm.birthdate)}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-text-muted">Lieu de naissance</dt>
                      <dd className="text-text-dark">{testatorForm.birthplace}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-text-muted">Profession</dt>
                      <dd className="text-text-dark">{testatorForm.job}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-text-muted">Adresse</dt>
                      <dd className="text-text-dark">{testatorForm.address}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-text-muted">Email</dt>
                      <dd className="text-text-dark">{testatorForm.email}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-text-muted">Contact(s)</dt>
                      <dd className="text-text-dark">{testatorForm.phone}</dd>
                    </div>
                  </div>
                </div>

                {/* Type de testament */}
                <div className="border border-accent-200 rounded-lg p-4">
                  <h3 className="text-base font-semibold text-text-dark mb-4 border-b border-accent-200 pb-2">
                    Type de testament
                  </h3>
                  <p className="text-text-dark">{testamentType}</p>
                </div>

                {/* Témoins ou Second notaire */}
                {witnesses.length > 0 && (
                  <div className="border border-accent-200 rounded-lg p-4">
                    <h3 className="text-base font-semibold text-text-dark mb-4 border-b border-accent-200 pb-2">
                      Témoins
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-accent-300">
                            <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">#</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">NPI</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Nom et prénoms</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Date et lieu de naissance</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Profession</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Adresse</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Email</th>
                            <th className="text-left py-3 px-4 text-sm font-medium text-text-dark">Contact(s)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {witnesses.map((witness, index) => (
                            <tr key={witness.id} className="border-b border-accent-200">
                              <td className="py-3 px-4 text-sm text-text-dark">{index + 1}</td>
                              <td className="py-3 px-4 text-sm text-text-dark">{witness.npi}</td>
                              <td className="py-3 px-4 text-sm text-text-dark font-medium">
                                {witness.lastname} {witness.firstname}
                              </td>
                              <td className="py-3 px-4 text-sm text-text-dark">
                                {formatDate(witness.birthdate)} à {witness.birthplace}
                              </td>
                              <td className="py-3 px-4 text-sm text-text-dark">{witness.job}</td>
                              <td className="py-3 px-4 text-sm text-text-dark">{witness.address}</td>
                              <td className="py-3 px-4 text-sm text-text-dark">{witness.email}</td>
                              <td className="py-3 px-4 text-sm text-text-dark">{witness.phone}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {secondNotary && (
                  <div className="border border-accent-200 rounded-lg p-4">
                    <h3 className="text-base font-semibold text-text-dark mb-4 border-b border-accent-200 pb-2">
                      Second notaire
                    </h3>
                    <p className="text-text-dark">
                      {availableNotaries.find(n => n.id === parseInt(secondNotary))?.name}
                    </p>
                  </div>
                )}

                {/* Documents */}
                {documents.length > 0 && (
                  <div className="border border-accent-200 rounded-lg p-4">
                    <h3 className="text-base font-semibold text-text-dark mb-4 border-b border-accent-200 pb-2">
                      Documents ({documents.length})
                    </h3>
                    <ul className="space-y-2">
                      {documents.map((doc, index) => (
                        <li key={doc.id} className="flex items-center text-text-dark">
                          <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium mr-3">
                            {index + 1}
                          </span>
                          {doc.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Exécuteur */}
                {executorForm.lastname && (
                  <div className="border border-accent-200 rounded-lg p-4">
                    <h3 className="text-base font-semibold text-text-dark mb-4 border-b border-accent-200 pb-2">
                      Exécuteur testamentaire
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div>
                        <dt className="text-sm font-medium text-text-muted">Nom</dt>
                        <dd className="text-text-dark font-medium">{executorForm.lastname}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-text-muted">Prénoms</dt>
                        <dd className="text-text-dark font-medium">{executorForm.firstname}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-text-muted">Date de naissance</dt>
                        <dd className="text-text-dark">{formatDate(executorForm.birthdate)}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-text-muted">Lieu de naissance</dt>
                        <dd className="text-text-dark">{executorForm.birthplace}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-text-muted">Profession</dt>
                        <dd className="text-text-dark">{executorForm.job}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-text-muted">Adresse</dt>
                        <dd className="text-text-dark">{executorForm.address}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-text-muted">Email</dt>
                        <dd className="text-text-dark">{executorForm.email}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-text-muted">Contact(s)</dt>
                        <dd className="text-text-dark">{executorForm.phone}</dd>
                      </div>
                    </div>
                  </div>
                )}

                {/* Observations */}
                <div className="border border-accent-200 rounded-lg p-4">
                  <h3 className="text-base font-semibold text-text-dark mb-4 border-b border-accent-200 pb-2">
                    Observations
                  </h3>
                  <p className="text-text-dark mb-4">{observation}</p>
                  {urgentReading && (
                    <div className="flex items-center text-red-600">
                      <i className="ri-alarm-warning-line mr-2"></i>
                      <span className="text-sm font-medium">Lecture urgente demandée</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={handlePrevStep}
                  className="flex items-center px-6 py-2 bg-accent-300 text-text-dark rounded-lg hover:bg-accent-400 transition-colors text-sm font-medium cursor-pointer"
                >
                  <i className="ri-arrow-left-line mr-2"></i>
                  Précédent
                </button>
                <button
                  onClick={handleFinalSubmit}
                  disabled={isLoading}
                  className="flex items-center px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium cursor-pointer disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Enregistrement...
                    </>
                  ) : (
                    <>
                      <i className="ri-save-line mr-2"></i>
                      Finaliser l'enregistrement
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal Témoin */}
      {showWitnessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-text-dark">Ajouter un témoin</h3>
                <button 
                  onClick={() => setShowWitnessModal(false)}
                  className="text-text-muted hover:text-text-dark"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">NPI</label>
                  <input
                    type="text"
                    value={witnessForm.npi}
                    onChange={(e) => setWitnessForm({...witnessForm, npi: e.target.value})}
                    className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Nom <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={witnessForm.lastname}
                    onChange={(e) => setWitnessForm({...witnessForm, lastname: e.target.value})}
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
                    value={witnessForm.firstname}
                    onChange={(e) => setWitnessForm({...witnessForm, firstname: e.target.value})}
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
                    value={witnessForm.birthdate}
                    onChange={(e) => setWitnessForm({...witnessForm, birthdate: e.target.value})}
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
                    value={witnessForm.birthplace}
                    onChange={(e) => setWitnessForm({...witnessForm, birthplace: e.target.value})}
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
                    value={witnessForm.job}
                    onChange={(e) => setWitnessForm({...witnessForm, job: e.target.value})}
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
                    value={witnessForm.address}
                    onChange={(e) => setWitnessForm({...witnessForm, address: e.target.value})}
                    className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">Email</label>
                  <input
                    type="email"
                    value={witnessForm.email}
                    onChange={(e) => setWitnessForm({...witnessForm, email: e.target.value})}
                    className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Contact(s) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={witnessForm.phone}
                    onChange={(e) => setWitnessForm({...witnessForm, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowWitnessModal(false)}
                  className="px-4 py-2 text-text-muted hover:text-text-dark border border-accent-300 rounded-lg transition-colors cursor-pointer"
                >
                  Annuler
                </button>
                <button
                  onClick={handleSaveWitness}
                  disabled={!witnessForm.lastname || !witnessForm.firstname || !witnessForm.birthdate}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer disabled:opacity-50"
                >
                  Ajouter le témoin
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Document */}
      {showDocumentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-text-dark">Ajouter un document</h3>
                <button 
                  onClick={() => setShowDocumentModal(false)}
                  className="text-text-muted hover:text-text-dark"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Libellé <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={documentForm.name}
                    onChange={(e) => setDocumentForm({...documentForm, name: e.target.value})}
                    className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                    placeholder="Nom du document"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Fichier <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    onChange={(e) => setDocumentForm({...documentForm, file: e.target.files?.[0] || null})}
                    className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                    accept=".pdf"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowDocumentModal(false)}
                  className="px-4 py-2 text-text-muted hover:text-text-dark border border-accent-300 rounded-lg transition-colors cursor-pointer"
                >
                  Annuler
                </button>
                <button
                  onClick={handleSaveDocument}
                  disabled={!documentForm.name || !documentForm.file}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer disabled:opacity-50"
                >
                  Ajouter le document
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
