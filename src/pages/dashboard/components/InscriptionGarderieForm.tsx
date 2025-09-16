
import { useState } from 'react';

interface FormData {
  // Étape 1 - Informations du responsable
  nomResponsable: string;
  prenomResponsable: string;
  emailResponsable: string;
  telephoneResponsable: string;
  
  // Étape 2 - Informations de l'établissement
  nomGarderie: string;
  adresseGarderie: string;
  typeGarderie: string;
  capaciteMax: string;
  ageMinimum: string;
  ageMaximum: string;
  
  // Étape 3 - Informations pratiques
  horairesOuverture: string;
  horaireFermeture: string;
  joursOuverture: string[];
  tarifsHoraires: string;
  servicesInclus: string[];
  
  // Étape 4 - Équipe et finalisation
  nombreEmployes: string;
  qualificationsEquipe: string;
  projetPedagogique: string;
  disponibiliteOuverture: string;
}

interface FileInfo {
  file: File;
  preview?: string;
}

export default function InscriptionGarderieForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [uploads, setUploads] = useState<{ [key: string]: FileInfo }>({});
  
  const [formData, setFormData] = useState<FormData>({
    nomResponsable: '',
    prenomResponsable: '',
    emailResponsable: '',
    telephoneResponsable: '',
    nomGarderie: '',
    adresseGarderie: '',
    typeGarderie: '',
    capaciteMax: '',
    ageMinimum: '',
    ageMaximum: '',
    horairesOuverture: '',
    horaireFermeture: '',
    joursOuverture: [],
    tarifsHoraires: '',
    servicesInclus: [],
    nombreEmployes: '',
    qualificationsEquipe: '',
    projetPedagogique: '',
    disponibiliteOuverture: ''
  });

  const steps = [
    { number: 0, title: 'Responsable', icon: 'ri-user-line', color: 'from-blue-500 to-blue-600' },
    { number: 1, title: 'Établissement', icon: 'ri-building-line', color: 'from-purple-500 to-purple-600' },
    { number: 2, title: 'Services', icon: 'ri-settings-line', color: 'from-green-500 to-green-600' },
    { number: 3, title: 'Finalisation', icon: 'ri-check-line', color: 'from-amber-500 to-amber-600' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'joursOuverture' || name === 'servicesInclus') {
        setFormData(prev => ({
          ...prev,
          [name]: checked 
            ? [...prev[name as keyof Pick<FormData, 'joursOuverture' | 'servicesInclus'>], value]
            : (prev[name as keyof Pick<FormData, 'joursOuverture' | 'servicesInclus'>]).filter(item => item !== value)
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const fileInfo: FileInfo = { file };
      
      // Créer un aperçu pour les images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setUploads(prev => ({
            ...prev,
            [key]: { ...fileInfo, preview: e.target?.result as string }
          }));
        };
        reader.readAsDataURL(file);
      } else {
        setUploads(prev => ({ ...prev, [key]: fileInfo }));
      }
    }
  };

  const removeFile = (key: string) => {
    setUploads(prev => {
      const newUploads = { ...prev };
      delete newUploads[key];
      return newUploads;
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const FileUploadField = ({ 
    label, 
    fileKey, 
    accept = ".pdf,.doc,.docx,.jpg,.jpeg,.png",
    description 
  }: { 
    label: string; 
    fileKey: string; 
    accept?: string;
    description?: string;
  }) => {
    const uploadedFile = uploads[fileKey];

    return (
      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        {description && (
          <p className="text-xs text-gray-500">{description}</p>
        )}
        
        {!uploadedFile ? (
          <div className="relative">
            <input
              type="file"
              onChange={(e) => handleFileChange(e, fileKey)}
              accept={accept}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-400 hover:bg-green-50 transition-colors">
              <i className="ri-upload-cloud-2-line text-4xl text-gray-400 mb-4"></i>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium text-green-600">Cliquez pour choisir</span> ou glissez un fichier
              </p>
              <p className="text-xs text-gray-500">
                Formats acceptés: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3 flex-1">
                {uploadedFile.preview ? (
                  <img 
                    src={uploadedFile.preview} 
                    alt="Aperçu" 
                    className="w-16 h-16 object-cover rounded-lg border"
                  />
                ) : (
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                    <i className="ri-file-text-line text-2xl text-blue-600"></i>
                  </div>
                )}
                
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {uploadedFile.file.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatFileSize(uploadedFile.file.size)}
                  </p>
                  <div className="mt-2">
                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full inline-flex items-center">
                      <i className="ri-check-line mr-1"></i>
                      Fichier chargé
                    </div>
                  </div>
                </div>
              </div>
              
              <button
                type="button"
                onClick={() => removeFile(fileKey)}
                className="ml-4 text-red-500 hover:text-red-700 p-1"
                title="Supprimer le fichier"
              >
                <i className="ri-delete-bin-line text-lg"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 0:
        return !!(formData.nomResponsable && formData.prenomResponsable && formData.emailResponsable && formData.telephoneResponsable);
      case 1:
        return !!(formData.nomGarderie && formData.adresseGarderie && formData.typeGarderie && formData.capaciteMax);
      case 2:
        return !!(formData.horairesOuverture && formData.horaireFermeture && formData.joursOuverture.length > 0);
      case 3:
        return !!(formData.nombreEmployes && formData.projetPedagogique && formData.disponibiliteOuverture);
      default:
        return true;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-user-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Informations du Responsable</h3>
              </div>
              <p className="text-gray-600">Veuillez renseigner les informations personnelles du responsable de la garderie.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Nom du responsable *
                    </label>
                    <input
                      type="text"
                      name="nomResponsable"
                      value={formData.nomResponsable}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                      placeholder="Entrez le nom"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Prénom du responsable *
                    </label>
                    <input
                      type="text"
                      name="prenomResponsable"
                      value={formData.prenomResponsable}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                      placeholder="Entrez le prénom"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Email du responsable *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="emailResponsable"
                        value={formData.emailResponsable}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                        placeholder="exemple@email.com"
                      />
                      <i className="ri-mail-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Téléphone du responsable *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="telephoneResponsable"
                        value={formData.telephoneResponsable}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                        placeholder="+229 XX XX XX XX"
                      />
                      <i className="ri-phone-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-start">
                    <i className="ri-information-line text-blue-600 text-2xl mr-4 mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-3">Documents requis pour le responsable</h4>
                      <ul className="text-sm text-blue-800 space-y-2">
                        <li className="flex items-center">
                          <i className="ri-arrow-right-s-line mr-2"></i>
                          Pièce d'identité (CNI, Passeport)
                        </li>
                        <li className="flex items-center">
                          <i className="ri-arrow-right-s-line mr-2"></i>
                          Justificatif de domicile (moins de 3 mois)
                        </li>
                        <li className="flex items-center">
                          <i className="ri-arrow-right-s-line mr-2"></i>
                          CV détaillé avec références
                        </li>
                        <li className="flex items-center">
                          <i className="ri-arrow-right-s-line mr-2"></i>
                          Diplômes et certifications
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <FileUploadField
                  label="Pièce d'identité du responsable"
                  fileKey="identity_responsable"
                  accept=".pdf,.jpg,.jpeg,.png"
                  description="CNI, Passeport ou autre document d'identité officiel"
                />

                <FileUploadField
                  label="CV du responsable"
                  fileKey="cv_responsable"
                  accept=".pdf,.doc,.docx"
                  description="CV détaillé avec expérience dans la petite enfance"
                />

                <FileUploadField
                  label="Diplômes et certifications"
                  fileKey="diplomes_responsable"
                  accept=".pdf,.jpg,.jpeg,.png"
                  description="Diplômes, certificats de formation, attestations"
                />

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <i className="ri-lightbulb-line text-amber-600 text-xl mr-3"></i>
                    <h4 className="font-semibold text-amber-800">Conseil</h4>
                  </div>
                  <p className="text-amber-700 text-sm">
                    Assurez-vous que tous les documents sont lisibles et datés. Les documents périmés ne seront pas acceptés.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-building-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Informations de l'Établissement</h3>
              </div>
              <p className="text-gray-600">Décrivez votre garderie et ses caractéristiques principales.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Nom de la garderie *
                  </label>
                  <input
                    type="text"
                    name="nomGarderie"
                    value={formData.nomGarderie}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm"
                    placeholder="Ex: Garderie Les Petits Anges"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Adresse complète de la garderie *
                  </label>
                  <textarea
                    name="adresseGarderie"
                    value={formData.adresseGarderie}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm resize-none"
                    placeholder="Adresse complète avec quartier, ville et code postal..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Type de garderie *
                    </label>
                    <div className="relative">
                      <select
                        name="typeGarderie"
                        value={formData.typeGarderie}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-12 shadow-sm"
                      >
                        <option value="">Sélectionner</option>
                        <option value="privee">Garderie privée</option>
                        <option value="associative">Garderie associative</option>
                        <option value="familiale">Garderie familiale</option>
                        <option value="micro-creche">Micro-crèche</option>
                      </select>
                      <i className="ri-arrow-down-s-line absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Capacité maximale *
                    </label>
                    <div className="relative">
                      <select
                        name="capaciteMax"
                        value={formData.capaciteMax}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-12 shadow-sm"
                      >
                        <option value="">Sélectionner</option>
                        <option value="5-10">5 à 10 enfants</option>
                        <option value="11-20">11 à 20 enfants</option>
                        <option value="21-30">21 à 30 enfants</option>
                        <option value="30+">Plus de 30 enfants</option>
                      </select>
                      <i className="ri-arrow-down-s-line absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Âge minimum (mois)
                    </label>
                    <div className="relative">
                      <select
                        name="ageMinimum"
                        value={formData.ageMinimum}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-12 shadow-sm"
                      >
                        <option value="">Sélectionner</option>
                        <option value="2">2 mois</option>
                        <option value="3">3 mois</option>
                        <option value="6">6 mois</option>
                        <option value="12">12 mois</option>
                      </select>
                      <i className="ri-arrow-down-s-line absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Âge maximum (années)
                    </label>
                    <div className="relative">
                      <select
                        name="ageMaximum"
                        value={formData.ageMaximum}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-12 shadow-sm"
                      >
                        <option value="">Sélectionner</option>
                        <option value="3">3 ans</option>
                        <option value="4">4 ans</option>
                        <option value="5">5 ans</option>
                        <option value="6">6 ans</option>
                      </select>
                      <i className="ri-arrow-down-s-line absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                  <i className="ri-folder-line mr-2 text-purple-600"></i>
                  Documents techniques de l'établissement
                </h4>
                
                <FileUploadField
                  label="Plan architectural"
                  fileKey="architectural_plan_garderie"
                  accept=".pdf,.jpg,.jpeg,.png,.dwg"
                  description="Plans détaillés des locaux avec dimensions et aménagements"
                />

                <FileUploadField
                  label="Inventaire du matériel"
                  fileKey="equipment_inventory_garderie"
                  accept=".pdf,.doc,.docx,.xlsx"
                  description="Liste complète du mobilier et équipements pédagogiques"
                />

                <FileUploadField
                  label="Photos des locaux"
                  fileKey="premises_photos_garderie"
                  accept=".jpg,.jpeg,.png,.pdf"
                  description="Photos représentatives des différents espaces de la garderie"
                />

                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <div className="flex items-start">
                    <i className="ri-shield-check-line text-purple-600 text-2xl mr-4 mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-purple-900 mb-3">Normes de sécurité</h4>
                      <ul className="text-sm text-purple-800 space-y-1">
                        <li className="flex items-center">
                          <i className="ri-arrow-right-s-line mr-2"></i>
                          Espaces adaptés aux enfants (0-6 ans)
                        </li>
                        <li className="flex items-center">
                          <i className="ri-arrow-right-s-line mr-2"></i>
                          Équipements de sécurité obligatoires
                        </li>
                        <li className="flex items-center">
                          <i className="ri-arrow-right-s-line mr-2"></i>
                          Accès pour personnes à mobilité réduite
                        </li>
                        <li className="flex items-center">
                          <i className="ri-arrow-right-s-line mr-2"></i>
                          Espaces extérieurs sécurisés
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-settings-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Services et Horaires</h3>
              </div>
              <p className="text-gray-600">Définissez les horaires, tarifs et services proposés par votre garderie.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Heure d'ouverture *
                    </label>
                    <input
                      type="time"
                      name="horairesOuverture"
                      value={formData.horairesOuverture}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Heure de fermeture *
                    </label>
                    <input
                      type="time"
                      name="horaireFermeture"
                      value={formData.horaireFermeture}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    Jours d'ouverture *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map(jour => (
                      <label key={jour} className="flex items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          name="joursOuverture"
                          value={jour}
                          checked={formData.joursOuverture.includes(jour)}
                          onChange={handleInputChange}
                          className="mr-3 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        <span className="text-sm font-medium text-gray-700">{jour}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Tarifs horaires approximatifs
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="tarifsHoraires"
                      value={formData.tarifsHoraires}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm"
                      placeholder="Ex: 1500 FCFA/heure"
                    />
                    <i className="ri-money-dollar-circle-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    Services inclus
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Repas', 'Goûter', 'Couches', 'Activités éducatives', 
                      'Sortie et promenade', 'Sieste', 'Éveil musical', 'Apprentissage langues'
                    ].map(service => (
                      <label key={service} className="flex items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                        <input
                          type="checkbox"
                          name="servicesInclus"
                          value={service}
                          checked={formData.servicesInclus.includes(service)}
                          onChange={handleInputChange}
                          className="mr-3 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        <span className="text-sm font-medium text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                  <i className="ri-file-list-line mr-2 text-green-600"></i>
                  Documents administratifs
                </h4>
                
                <FileUploadField
                  label="Règlement intérieur"
                  fileKey="reglement_interieur"
                  accept=".pdf,.doc,.docx"
                  description="Règlement détaillé de la garderie"
                />

                <FileUploadField
                  label="Grille tarifaire"
                  fileKey="grille_tarifaire"
                  accept=".pdf,.doc,.docx,.xlsx"
                  description="Tarifs détaillés par service et tranche d'âge"
                />

                <FileUploadField
                  label="Attestation d'assurance"
                  fileKey="assurance_garderie"
                  accept=".pdf,.jpg,.jpeg,.png"
                  description="Attestation d'assurance responsabilité civile en cours de validité"
                />

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-start">
                    <i className="ri-time-line text-green-600 text-2xl mr-4 mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-green-900 mb-3">Conseils horaires</h4>
                      <ul className="text-sm text-green-800 space-y-2">
                        <li className="flex items-center">
                          <i className="ri-arrow-right-s-line mr-2"></i>
                          Prévoyez des créneaux adaptés aux parents actifs
                        </li>
                        <li className="flex items-center">
                          <i className="ri-arrow-right-s-line mr-2"></i>
                          Considérez les heures de pointe (7h-9h, 17h-19h)
                        </li>
                        <li className="flex items-center">
                          <i className="ri-arrow-right-s-line mr-2"></i>
                          Pensez aux services d'urgence ou garde d'appoint
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-check-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Équipe et Finalisation</h3>
              </div>
              <p className="text-gray-600">Finalisez votre candidature avec les informations sur votre équipe et votre projet pédagogique.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Nombre d'employés prévus *
                  </label>
                  <div className="relative">
                    <select
                      name="nombreEmployes"
                      value={formData.nombreEmployes}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent pr-12 shadow-sm"
                    >
                      <option value="">Sélectionner</option>
                      <option value="1-2">1 à 2 employés</option>
                      <option value="3-5">3 à 5 employés</option>
                      <option value="6-10">6 à 10 employés</option>
                      <option value="10+">Plus de 10 employés</option>
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Qualifications de l'équipe
                  </label>
                  <textarea
                    name="qualificationsEquipe"
                    value={formData.qualificationsEquipe}
                    onChange={handleInputChange}
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent shadow-sm resize-none"
                    placeholder="Diplômes, certifications, expériences du personnel..."
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    {formData.qualificationsEquipe.length}/500 caractères
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Projet pédagogique *
                  </label>
                  <textarea
                    name="projetPedagogique"
                    value={formData.projetPedagogique}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent shadow-sm resize-none"
                    placeholder="Décrivez votre approche pédagogique, vos valeurs, vos méthodes..."
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    {formData.projetPedagogique.length}/500 caractères
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Disponibilité pour ouverture *
                  </label>
                  <div className="relative">
                    <select
                      name="disponibiliteOuverture"
                      value={formData.disponibiliteOuverture}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent pr-12 shadow-sm"
                    >
                      <option value="">Sélectionner</option>
                      <option value="immédiate">Immédiate</option>
                      <option value="1-mois">Dans 1 mois</option>
                      <option value="3-mois">Dans 3 mois</option>
                      <option value="6-mois">Dans 6 mois</option>
                      <option value="flexible">Flexible</option>
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <i className="ri-attachment-line mr-2 text-amber-600"></i>
                    Documents joints ({Object.keys(uploads).length})
                  </h4>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {Object.keys(uploads).length > 0 ? (
                      Object.entries(uploads).map(([key, fileInfo]) => (
                        <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            {fileInfo.preview ? (
                              <img src={fileInfo.preview} alt="Aperçu" className="w-10 h-10 object-cover rounded" />
                            ) : (
                              <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                                <i className="ri-file-line text-blue-600"></i>
                              </div>
                            )}
                            
                            <div>
                              <p className="text-sm font-medium text-gray-900 truncate max-w-[200px]">
                                {fileInfo.file.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {formatFileSize(fileInfo.file.size)}
                              </p>
                            </div>
                          </div>
                          
                          <div className="text-green-600">
                            <i className="ri-check-circle-fill"></i>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 text-center py-4">Aucun document joint</p>
                    )}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-start">
                    <i className="ri-roadmap-line text-blue-600 text-2xl mr-4 mt-1"></i>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-3">Prochaines étapes</h4>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-blue-600 rounded-full text-white text-xs flex items-center justify-center mr-3">1</div>
                          <span className="text-sm text-blue-800">Validation de votre candidature sous 5-7 jours ouvrables</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-blue-600 rounded-full text-white text-xs flex items-center justify-center mr-3">2</div>
                          <span className="text-sm text-blue-800">Visite des locaux par nos services</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-blue-600 rounded-full text-white text-xs flex items-center justify-center mr-3">3</div>
                          <span className="text-sm text-blue-800">Vérification des qualifications de l'équipe</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-blue-600 rounded-full text-white text-xs flex items-center justify-center mr-3">4</div>
                          <span className="text-sm text-blue-800">Autorisation d'ouverture sous 3-4 semaines</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <i className="ri-customer-service-line text-green-600 text-xl mr-3"></i>
                    <h4 className="font-semibold text-green-800">Besoin d'aide ?</h4>
                  </div>
                  <p className="text-green-700 text-sm mb-3">
                    Notre équipe est disponible pour vous accompagner dans vos démarches.
                  </p>
                  <div className="text-sm text-green-800">
                    <p>📧 masm.dea@gouv.bj</p>
                    <p>📞 229 60 42 20 09</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    } else {
      alert('Veuillez remplir tous les champs requis avant de continuer.');
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(3)) {
      alert('Veuillez remplir tous les champs requis');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Préparer les données pour l'envoi
      const submitData = {
        ...formData,
        joursOuverture: formData.joursOuverture.join(', '),
        servicesInclus: formData.servicesInclus.join(', '),
        uploads: Object.keys(uploads).length > 0 ? `${Object.keys(uploads).length} fichier(s) joint(s)` : 'Aucun fichier joint'
      };

      const response = await fetch('https://readdy.ai/api/form/d31ugvq9q46hcr5l60lg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(submitData)
      });

      if (response.ok) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <i className="ri-check-line text-4xl text-white"></i>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            🎉 Candidature envoyée avec succès !
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Votre candidature de garderie a été reçue avec tous les documents joints. 
            <br />Vous recevrez une confirmation par email et nous vous recontacterons sous 5-7 jours ouvrables.
          </p>
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <p className="text-blue-800 font-medium">
              📧 Un accusé de réception sera envoyé à {formData.emailResponsable}
            </p>
          </div>
          <button
            onClick={() => {
              setSubmitStatus('idle');
              setCurrentStep(0);
              setFormData({
                nomResponsable: '', prenomResponsable: '', emailResponsable: '', telephoneResponsable: '',
                nomGarderie: '', adresseGarderie: '', typeGarderie: '', capaciteMax: '',
                ageMinimum: '', ageMaximum: '', horairesOuverture: '', horaireFermeture: '',
                joursOuverture: [], tarifsHoraires: '', servicesInclus: [], nombreEmployes: '',
                qualificationsEquipe: '', projetPedagogique: '', disponibiliteOuverture: ''
              });
              setUploads({});
            }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium shadow-lg transform hover:scale-105"
          >
            Nouvelle candidature
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Inscription Garderie</h1>
        <p className="text-gray-600 text-lg">
          Candidature pour l'autorisation d'ouverture de garderie
        </p>
      </div>

      {/* Navigation par étapes moderne */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
        <div className="flex justify-between items-center">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div
                className={`relative cursor-pointer transition-all duration-200 ${
                  currentStep >= step.number ? 'scale-110' : 'hover:scale-105'
                }`}
                onClick={() => setCurrentStep(step.number)}
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-200 ${
                    currentStep === step.number
                      ? `bg-gradient-to-r ${step.color} text-white shadow-lg`
                      : currentStep > step.number
                      ? 'bg-gray-100 text-green-600 border-2 border-green-200'
                      : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                  }`}
                >
                  {currentStep > step.number ? (
                    <i className="ri-check-line text-2xl"></i>
                  ) : (
                    <i className={`${step.icon} text-2xl`}></i>
                  )}
                </div>
                <div className="text-center mt-3">
                  <p className={`text-sm font-bold ${
                    currentStep >= step.number ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    Étape {step.number + 1}
                  </p>
                  <p className={`text-xs ${
                    currentStep >= step.number ? 'text-gray-700' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className={`flex-1 h-1 mx-4 rounded-full transition-all duration-300 ${
                  currentStep > step.number ? 'bg-green-400' : 'bg-gray-200'
                }`}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contenu du formulaire */}
      <div className="bg-white rounded-2xl shadow-xl p-10">
        <form id="inscription-garderie-nouveau" onSubmit={handleSubmit} data-readdy-form>
          {renderStepContent()}

          {submitStatus === 'error' && (
            <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-center">
                <i className="ri-error-warning-line text-red-600 text-2xl mr-4"></i>
                <div>
                  <p className="text-red-800 font-medium">
                    Une erreur s'est produite lors de l'envoi
                  </p>
                  <p className="text-red-700 text-sm mt-1">
                    Veuillez vérifier votre connexion et réessayer
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Boutons de navigation améliorés */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-3 font-medium disabled:hover:bg-white"
            >
              <i className="ri-arrow-left-line text-xl"></i>
              <span>Précédent</span>
            </button>

            {currentStep < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center space-x-3 font-medium shadow-lg transform hover:scale-105"
              >
                <span>Suivant</span>
                <i className="ri-arrow-right-line text-xl"></i>
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-12 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-3 font-medium shadow-lg transform hover:scale-105 disabled:hover:scale-100"
              >
                {isSubmitting && (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                )}
                <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer la candidature'}</span>
                {!isSubmitting && <i className="ri-send-plane-line text-xl"></i>}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
