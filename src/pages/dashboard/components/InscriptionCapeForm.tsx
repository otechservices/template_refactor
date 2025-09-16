
import { useState } from 'react';

interface FormData {
  // Promoteur
  nature_promotor_id: string;
  social_reason: string;
  head_office: string;
  registered_phone: string;
  registered_number: string;
  registered_date: string;
  name_pomoter: string;
  firstname_pomoter: string;
  email_pomoter: string;
  phone_pomoter: string;

  // Directeur
  name_director: string;
  firstname_director: string;
  email_director: string;
  phone_director: string;

  // Centre
  center_name: string;
  center_address: string;
  center_phone: string;
  center_email: string;
  authorization_date: string;
}

interface FileInfo {
  file: File;
  preview?: string;
}

export default function InscriptionCapeForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [uploads, setUploads] = useState<{ [key: string]: FileInfo }>({});
  
  const [formData, setFormData] = useState<FormData>({
    nature_promotor_id: '',
    social_reason: '',
    head_office: '',
    registered_phone: '',
    registered_number: '',
    registered_date: '',
    name_pomoter: '',
    firstname_pomoter: '',
    email_pomoter: '',
    phone_pomoter: '',
    name_director: '',
    firstname_director: '',
    email_director: '',
    phone_director: '',
    center_name: '',
    center_address: '',
    center_phone: '',
    center_email: '',
    authorization_date: ''
  });

  const steps = [
    { number: 0, title: 'Promoteur', icon: 'ri-user-line', color: 'from-blue-500 to-blue-600' },
    { number: 1, title: 'Directeur', icon: 'ri-user-star-line', color: 'from-purple-500 to-purple-600' },
    { number: 2, title: 'Centre', icon: 'ri-building-line', color: 'from-green-500 to-green-600' },
    { number: 3, title: 'Récapitulatif', icon: 'ri-check-line', color: 'from-amber-500 to-amber-600' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
        return !!(formData.nature_promotor_id && formData.name_pomoter && formData.firstname_pomoter && formData.email_pomoter && formData.phone_pomoter);
      case 1:
        return !!(formData.name_director && formData.firstname_director && formData.email_director && formData.phone_director);
      case 2:
        return !!(formData.center_name && formData.center_address && formData.center_phone && formData.center_email);
      case 3:
        return true;
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
                <h3 className="text-2xl font-bold text-gray-900">Informations sur le Promoteur</h3>
              </div>
              <p className="text-gray-600">Veuillez renseigner les informations personnelles et professionnelles du promoteur du centre.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Nature du promoteur *
                  </label>
                  <div className="relative">
                    <select
                      name="nature_promotor_id"
                      value={formData.nature_promotor_id}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12 text-gray-900 bg-white shadow-sm"
                    >
                      <option value="">Sélectionner la nature</option>
                      <option value="1">Personne physique</option>
                      <option value="2">Personne morale</option>
                      <option value="3">Association</option>
                      <option value="4">ONG</option>
                      <option value="5">Entreprise</option>
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                  </div>
                </div>

                {formData.nature_promotor_id === '2' && (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-6">
                    <h4 className="font-semibold text-amber-800 flex items-center">
                      <i className="ri-briefcase-line mr-2"></i>
                      Informations de l'organisation
                    </h4>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Raison sociale
                      </label>
                      <input
                        type="text"
                        name="social_reason"
                        value={formData.social_reason}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Nom de votre organisation"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Siège social
                      </label>
                      <input
                        type="text"
                        name="head_office"
                        value={formData.head_office}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Adresse du siège social"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone d'enregistrement
                        </label>
                        <input
                          type="tel"
                          name="registered_phone"
                          value={formData.registered_phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="+229 XX XX XX XX"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Numéro d'enregistrement
                        </label>
                        <input
                          type="text"
                          name="registered_number"
                          value={formData.registered_number}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Numéro d'immatriculation"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date d'enregistrement
                      </label>
                      <input
                        type="date"
                        name="registered_date"
                        value={formData.registered_date}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Nom du promoteur *
                    </label>
                    <input
                      type="text"
                      name="name_pomoter"
                      value={formData.name_pomoter}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                      placeholder="Entrez le nom"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Prénom du promoteur *
                    </label>
                    <input
                      type="text"
                      name="firstname_pomoter"
                      value={formData.firstname_pomoter}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                      placeholder="Entrez le prénom"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Email du promoteur *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email_pomoter"
                        value={formData.email_pomoter}
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
                      Téléphone du promoteur *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone_pomoter"
                        value={formData.phone_pomoter}
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
                      <h4 className="font-semibold text-blue-900 mb-3">Documents requis pour le promoteur</h4>
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
                        {formData.nature_promotor_id === '2' && (
                          <>
                            <li className="flex items-center">
                              <i className="ri-arrow-right-s-line mr-2"></i>
                              Statuts de l'organisation
                            </li>
                            <li className="flex items-center">
                              <i className="ri-arrow-right-s-line mr-2"></i>
                              Registre de commerce (si applicable)
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <FileUploadField
                    label="Pièce d'identité du promoteur"
                    fileKey="identity_promoter"
                    accept=".pdf,.jpg,.jpeg,.png"
                    description="CNI, Passeport ou autre document d'identité officiel"
                  />

                  <FileUploadField
                    label="CV du promoteur"
                    fileKey="cv_promoter"
                    accept=".pdf,.doc,.docx"
                    description="CV détaillé avec expériences et références"
                  />
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
                  <i className="ri-user-star-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Informations sur le Directeur</h3>
              </div>
              <p className="text-gray-600">Le directeur sera responsable de la gestion pédagogique et administrative du centre.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Nom du directeur *
                    </label>
                    <input
                      type="text"
                      name="name_director"
                      value={formData.name_director}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm"
                      placeholder="Entrez le nom"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Prénom du directeur *
                    </label>
                    <input
                      type="text"
                      name="firstname_director"
                      value={formData.firstname_director}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm"
                      placeholder="Entrez le prénom"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Email du directeur *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email_director"
                        value={formData.email_director}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm"
                        placeholder="directeur@email.com"
                      />
                      <i className="ri-mail-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Téléphone du directeur *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone_director"
                        value={formData.phone_director}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-5
                        focus:border-transparent shadow-sm"
                        placeholder="+229 XX XX XX XX"
                      />
                      <i className="ri-phone-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <div className="flex items-start">
                    <i className="ri-graduation-cap-line text-purple-600 text-2xl mr-4 mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-purple-900 mb-3">Qualifications requises</h4>
                      <ul className="text-sm text-purple-800 space-y-2">
                        <li className="flex items-center">
                          <i className="ri-check-line mr-2 text-purple-600"></i>
                          Diplôme en petite enfance, éducation ou équivalent
                        </li>
                        <li className="flex items-center">
                          <i className="ri-check-line mr-2 text-purple-600"></i>
                          Expérience minimum de 3 ans dans l'encadrement
                        </li>
                        <li className="flex items-center">
                          <i className="ri-check-line mr-2 text-purple-600"></i>
                          Certificat médical de moins de 3 mois
                        </li>
                        <li className="flex items-center">
                          <i className="ri-check-line mr-2 text-purple-600"></i>
                          Casier judiciaire vierge (moins de 3 mois)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <FileUploadField
                  label="CV du directeur"
                  fileKey="cv_director"
                  accept=".pdf,.doc,.docx"
                  description="CV détaillé avec expérience dans la petite enfance"
                />

                <FileUploadField
                  label="Diplômes et certifications"
                  fileKey="diplomes_director"
                  accept=".pdf,.jpg,.jpeg,.png"
                  description="Diplômes, certificats de formation, attestations"
                />

                <FileUploadField
                  label="Certificat médical"
                  fileKey="medical_certificate"
                  accept=".pdf,.jpg,.jpeg,.png"
                  description="Certificat médical de moins de 3 mois"
                />

                <FileUploadField
                  label="Casier judiciaire"
                  fileKey="criminal_record"
                  accept=".pdf,.jpg,.jpeg,.png"
                  description="Extrait de casier judiciaire de moins de 3 mois"
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

      case 2:
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-building-line text-2xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Informations sur le Centre</h3>
              </div>
              <p className="text-gray-600">Décrivez votre centre et joignez les documents techniques nécessaires.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Nom du centre *
                  </label>
                  <input
                    type="text"
                    name="center_name"
                    value={formData.center_name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm"
                    placeholder="Ex: Centre CAPE Les Petits Anges"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Adresse complète du centre *
                  </label>
                  <textarea
                    name="center_address"
                    value={formData.center_address}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm resize-none"
                    placeholder="Adresse complète avec quartier, ville, code postal..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Téléphone du centre *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="center_phone"
                        value={formData.center_phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm"
                        placeholder="+229 XX XX XX XX"
                      />
                      <i className="ri-phone-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Email du centre *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="center_email"
                        value={formData.center_email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm"
                        placeholder="centre@email.com"
                      />
                      <i className="ri-mail-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Date d'autorisation souhaitée
                  </label>
                  <input
                    type="date"
                    name="authorization_date"
                    value={formData.authorization_date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm"
                  />
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-start">
                    <i className="ri-shield-check-line text-green-600 text-2xl mr-4 mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-green-900 mb-3">Normes de sécurité</h4>
                      <ul className="text-sm text-green-800 space-y-1">
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

              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                  <i className="ri-folder-line mr-2 text-green-600"></i>
                  Documents techniques du centre
                </h4>
                
                <FileUploadField
                  label="Plan architectural"
                  fileKey="architectural_plan"
                  accept=".pdf,.jpg,.jpeg,.png,.dwg"
                  description="Plans détaillés des locaux avec dimensions et aménagements"
                />

                <FileUploadField
                  label="Inventaire du matériel"
                  fileKey="equipment_inventory"
                  accept=".pdf,.doc,.docx,.xlsx"
                  description="Liste complète du mobilier et équipements pédagogiques"
                />

                <FileUploadField
                  label="Projet pédagogique"
                  fileKey="pedagogical_project"
                  accept=".pdf,.doc,.docx"
                  description="Document détaillant votre approche éducative et vos méthodes"
                />

                <FileUploadField
                  label="Attestation de conformité sécurité"
                  fileKey="safety_certificate"
                  accept=".pdf,.jpg,.jpeg,.png"
                  description="Certificat de conformité aux normes de sécurité"
                />

                <FileUploadField
                  label="Photos des locaux"
                  fileKey="premises_photos"
                  accept=".jpg,.jpeg,.png,.pdf"
                  description="Photos représentatives des différents espaces du centre"
                />
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
                <h3 className="text-2xl font-bold text-gray-900">Récapitulatif de votre candidature</h3>
              </div>
              <p className="text-gray-600">Vérifiez toutes les informations avant de soumettre votre candidature.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <i className="ri-user-line mr-2 text-blue-600"></i>
                    Informations du Promoteur
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Nature:</span> 
                      <span className="text-gray-900">{
                        formData.nature_promotor_id === '1' ? 'Personne physique' : 
                        formData.nature_promotor_id === '2' ? 'Personne morale' : 
                        formData.nature_promotor_id === '3' ? 'Association' :
                        formData.nature_promotor_id === '4' ? 'ONG' :
                        formData.nature_promotor_id === '5' ? 'Entreprise' : 'Non spécifié'
                      }</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Nom:</span> 
                      <span className="text-gray-900">{formData.name_pomoter}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Prénom:</span> 
                      <span className="text-gray-900">{formData.firstname_pomoter}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Email:</span> 
                      <span className="text-gray-900 truncate">{formData.email_pomoter}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Téléphone:</span> 
                      <span className="text-gray-900">{formData.phone_pomoter}</span>
                    </div>
                    {formData.social_reason && (
                      <div className="pt-2 border-t border-gray-100">
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-600">Raison sociale:</span> 
                          <span className="text-gray-900">{formData.social_reason}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <i className="ri-user-star-line mr-2 text-purple-600"></i>
                    Informations du Directeur
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Nom:</span> 
                      <span className="text-gray-900">{formData.name_director}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Prénom:</span> 
                      <span className="text-gray-900">{formData.firstname_director}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Email:</span> 
                      <span className="text-gray-900 truncate">{formData.email_director}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Téléphone:</span> 
                      <span className="text-gray-900">{formData.phone_director}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <i className="ri-building-line mr-2 text-green-600"></i>
                    Informations du Centre
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Nom:</span> 
                      <span className="text-gray-900">{formData.center_name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Téléphone:</span> 
                      <span className="text-gray-900">{formData.center_phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-600">Email:</span> 
                      <span className="text-gray-900 truncate">{formData.center_email}</span>
                    </div>
                    {formData.authorization_date && (
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-600">Date souhaitée:</span> 
                        <span className="text-gray-900">{new Date(formData.authorization_date).toLocaleDateString('fr-FR')}</span>
                      </div>
                    )}
                    <div className="pt-2 border-t border-gray-100">
                      <span className="font-medium text-gray-600">Adresse:</span>
                      <p className="text-gray-900 mt-1">{formData.center_address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <i className="ri-attachment-line mr-2 text-orange-600"></i>
                    Documents joints ({Object.keys(uploads).length})
                  </h4>
                  <div className="space-y-3">
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
                          <span className="text-sm text-blue-800">Convocation pour entretien si sélectionné</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-blue-600 rounded-full text-white text-xs flex items-center justify-center mr-3">3</div>
                          <span className="text-sm text-blue-800">Visite des locaux par nos services</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-blue-600 rounded-full text-white text-xs flex items-center justify-center mr-3">4</div>
                          <span className="text-sm text-blue-800">Décision finale sous 2-3 semaines</span>
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
    
    if (!validateStep(2)) {
      alert('Veuillez remplir tous les champs requis');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Préparer les données pour l'envoi
      const submitData = {
        ...formData,
        uploads: Object.keys(uploads).length > 0 ? `${Object.keys(uploads).length} fichier(s) joint(s)` : 'Aucun fichier joint'
      };

      const response = await fetch('https://readdy.ai/api/form/d34i7koahuop1eu2j5ig', {
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
            Votre candidature CAPE a été reçue avec tous les documents joints. 
            <br />Vous recevrez une confirmation par email et nous vous recontacterons sous 5-7 jours ouvrables.
          </p>
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <p className="text-blue-800 font-medium">
              📧 Un accusé de réception sera envoyé à {formData.email_pomoter}
            </p>
          </div>
          <button
            onClick={() => {
              setSubmitStatus('idle');
              setCurrentStep(0);
              setFormData({
                nature_promotor_id: '', social_reason: '', head_office: '', registered_phone: '',
                registered_number: '', registered_date: '', name_pomoter: '', firstname_pomoter: '',
                email_pomoter: '', phone_pomoter: '', name_director: '', firstname_director: '',
                email_director: '', phone_director: '', center_name: '', center_address: '',
                center_phone: '', center_email: '', authorization_date: ''
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
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Inscription CAPE</h1>
        <p className="text-gray-600 text-lg">
          Candidature pour l'autorisation de Centre d'Accueil de la Petite Enfance
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
        <form id="inscription-cape-nouveau" onSubmit={handleSubmit} data-readdy-form>
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
