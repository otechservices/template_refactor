
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

export default function InscriptionGarderieForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
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
    { number: 1, title: 'Responsable', icon: 'ri-user-line' },
    { number: 2, title: 'Établissement', icon: 'ri-building-line' },
    { number: 3, title: 'Services', icon: 'ri-settings-line' },
    { number: 4, title: 'Finalisation', icon: 'ri-check-line' }
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

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.nomResponsable && formData.prenomResponsable && formData.emailResponsable && formData.telephoneResponsable);
      case 2:
        return !!(formData.nomGarderie && formData.adresseGarderie && formData.typeGarderie && formData.capaciteMax);
      case 3:
        return !!(formData.horairesOuverture && formData.horaireFermeture && formData.joursOuverture.length > 0);
      case 4:
        return !!(formData.nombreEmployes && formData.projetPedagogique && formData.disponibiliteOuverture);
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    } else {
      alert('Veuillez remplir tous les champs requis avant de continuer.');
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(4)) {
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
        servicesInclus: formData.servicesInclus.join(', ')
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

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Informations du responsable</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  name="nomResponsable"
                  value={formData.nomResponsable}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  name="prenomResponsable"
                  value={formData.prenomResponsable}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="emailResponsable"
                  value={formData.emailResponsable}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  name="telephoneResponsable"
                  value={formData.telephoneResponsable}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Informations de l'établissement</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom de la garderie *
              </label>
              <input
                type="text"
                name="nomGarderie"
                value={formData.nomGarderie}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adresse complète *
              </label>
              <textarea
                name="adresseGarderie"
                value={formData.adresseGarderie}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Adresse complète avec ville et quartier..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type de garderie *
                </label>
                <select
                  name="typeGarderie"
                  value={formData.typeGarderie}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
                >
                  <option value="">Sélectionner</option>
                  <option value="privee">Garderie privée</option>
                  <option value="associative">Garderie associative</option>
                  <option value="familiale">Garderie familiale</option>
                  <option value="micro-creche">Micro-crèche</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Capacité maximale *
                </label>
                <select
                  name="capaciteMax"
                  value={formData.capaciteMax}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
                >
                  <option value="">Sélectionner</option>
                  <option value="5-10">5 à 10 enfants</option>
                  <option value="11-20">11 à 20 enfants</option>
                  <option value="21-30">21 à 30 enfants</option>
                  <option value="30+">Plus de 30 enfants</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Âge minimum (mois)
                </label>
                <select
                  name="ageMinimum"
                  value={formData.ageMinimum}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
                >
                  <option value="">Sélectionner</option>
                  <option value="2">2 mois</option>
                  <option value="3">3 mois</option>
                  <option value="6">6 mois</option>
                  <option value="12">12 mois</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Âge maximum (années)
                </label>
                <select
                  name="ageMaximum"
                  value={formData.ageMaximum}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
                >
                  <option value="">Sélectionner</option>
                  <option value="3">3 ans</option>
                  <option value="4">4 ans</option>
                  <option value="5">5 ans</option>
                  <option value="6">6 ans</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Informations pratiques</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Heure d'ouverture *
                </label>
                <input
                  type="time"
                  name="horairesOuverture"
                  value={formData.horairesOuverture}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Heure de fermeture *
                </label>
                <input
                  type="time"
                  name="horaireFermeture"
                  value={formData.horaireFermeture}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Jours d'ouverture *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map(jour => (
                  <label key={jour} className="flex items-center">
                    <input
                      type="checkbox"
                      name="joursOuverture"
                      value={jour}
                      checked={formData.joursOuverture.includes(jour)}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    {jour}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tarifs horaires approximatifs
              </label>
              <input
                type="text"
                name="tarifsHoraires"
                value={formData.tarifsHoraires}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ex: 1500 FCFA/heure"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Services inclus
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Repas', 'Goûter', 'Couches', 'Activités éducatives', 
                  'Sortie et promenade', 'Sieste', 'Éveil musical', 'Apprentissage langues'
                ].map(service => (
                  <label key={service} className="flex items-center">
                    <input
                      type="checkbox"
                      name="servicesInclus"
                      value={service}
                      checked={formData.servicesInclus.includes(service)}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    {service}
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Équipe et finalisation</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre d'employés prévus *
              </label>
              <select
                name="nombreEmployes"
                value={formData.nombreEmployes}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              >
                <option value="">Sélectionner</option>
                <option value="1-2">1 à 2 employés</option>
                <option value="3-5">3 à 5 employés</option>
                <option value="6-10">6 à 10 employés</option>
                <option value="10+">Plus de 10 employés</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Qualifications de l'équipe
              </label>
              <textarea
                name="qualificationsEquipe"
                value={formData.qualificationsEquipe}
                onChange={handleInputChange}
                rows={4}
                maxLength={500}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Diplômes, certifications, expériences du personnel..."
              />
              <p className="text-sm text-gray-500 mt-1">
                {formData.qualificationsEquipe.length}/500 caractères
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Projet pédagogique *
              </label>
              <textarea
                name="projetPedagogique"
                value={formData.projetPedagogique}
                onChange={handleInputChange}
                required
                rows={6}
                maxLength={500}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Décrivez votre approche pédagogique, vos valeurs, vos méthodes..."
              />
              <p className="text-sm text-gray-500 mt-1">
                {formData.projetPedagogique.length}/500 caractères
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Disponibilité pour ouverture *
              </label>
              <select
                name="disponibiliteOuverture"
                value={formData.disponibiliteOuverture}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              >
                <option value="">Sélectionner</option>
                <option value="immédiate">Immédiate</option>
                <option value="1-mois">Dans 1 mois</option>
                <option value="3-mois">Dans 3 mois</option>
                <option value="6-mois">Dans 6 mois</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <i className="ri-information-line text-blue-600 text-xl mr-3 mt-1"></i>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Prochaines étapes</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Validation de votre candidature sous 5-7 jours ouvrables</li>
                    <li>• Visite de conformité des locaux</li>
                    <li>• Vérification des qualifications de l'équipe</li>
                    <li>• Autorisation d'ouverture sous 3-4 semaines</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="ri-check-line text-3xl text-green-600"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Candidature envoyée avec succès !
          </h2>
          <p className="text-gray-600 mb-6">
            Votre candidature de garderie a été reçue. Vous recevrez une confirmation par email et nous vous recontacterons sous 5-7 jours ouvrables.
          </p>
          <button
            onClick={() => {
              setSubmitStatus('idle');
              setCurrentStep(1);
              setFormData({
                nomResponsable: '', prenomResponsable: '', emailResponsable: '', telephoneResponsable: '',
                nomGarderie: '', adresseGarderie: '', typeGarderie: '', capaciteMax: '',
                ageMinimum: '', ageMaximum: '', horairesOuverture: '', horaireFermeture: '',
                joursOuverture: [], tarifsHoraires: '', servicesInclus: [], nombreEmployes: '',
                qualificationsEquipe: '', projetPedagogique: '', disponibiliteOuverture: ''
              });
            }}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Nouvelle candidature
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Inscription Garderie</h1>
        <p className="text-gray-600">
          Candidature pour l'autorisation d'ouverture de garderie
        </p>
      </div>

      {/* Indicateur d'étapes */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep >= step.number
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                <i className={`${step.icon} text-lg`}></i>
              </div>
              <div className="ml-3">
                <p className={`text-sm font-medium ${
                  currentStep >= step.number ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  Étape {step.number}
                </p>
                <p className={`text-xs ${
                  currentStep >= step.number ? 'text-blue-600' : 'text-gray-400'
                }`}>
                  {step.title}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className={`w-16 h-0.5 ml-6 ${
                  currentStep > step.number ? 'bg-blue-600' : 'bg-gray-200'
                }`}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contenu du formulaire */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <form id="inscription-garderie-stepper" onSubmit={handleSubmit} data-readdy-form>
          {renderStepContent()}

          {submitStatus === 'error' && (
            <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center">
                <i className="ri-error-warning-line text-red-600 text-xl mr-3"></i>
                <p className="text-red-800">
                  Une erreur s'est produite lors de l'envoi. Veuillez réessayer.
                </p>
              </div>
            </div>
          )}

          {/* Boutons de navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
            >
              <i className="ri-arrow-left-line"></i>
              <span>Précédent</span>
            </button>

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <span>Suivant</span>
                <i className="ri-arrow-right-line"></i>
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
              >
                {isSubmitting && (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                )}
                <span>{isSubmitting ? 'Envoi...' : 'Envoyer la candidature'}</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
