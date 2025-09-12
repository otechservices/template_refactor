
import { useState } from 'react';

interface FormData {
  // Étape 1 - Informations personnelles
  nom: string;
  prenom: string;
  dateNaissance: string;
  lieuNaissance: string;
  nationalite: string;
  telephone: string;
  email: string;
  
  // Étape 2 - Informations professionnelles
  profession: string;
  experienceAnnees: string;
  diplomes: string;
  formations: string;
  
  // Étape 3 - Informations sur l'établissement
  nomEtablissement: string;
  adresseEtablissement: string;
  typeEtablissement: string;
  capaciteAccueil: string;
  
  // Étape 4 - Documents et finalisation
  motivations: string;
  disponibilite: string;
}

export default function InscriptionCapeForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    prenom: '',
    dateNaissance: '',
    lieuNaissance: '',
    nationalite: '',
    telephone: '',
    email: '',
    profession: '',
    experienceAnnees: '',
    diplomes: '',
    formations: '',
    nomEtablissement: '',
    adresseEtablissement: '',
    typeEtablissement: '',
    capaciteAccueil: '',
    motivations: '',
    disponibilite: ''
  });

  const steps = [
    { number: 1, title: 'Informations personnelles', icon: 'ri-user-line' },
    { number: 2, title: 'Informations professionnelles', icon: 'ri-briefcase-line' },
    { number: 3, title: 'Informations établissement', icon: 'ri-building-line' },
    { number: 4, title: 'Finalisation', icon: 'ri-check-line' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.nom && formData.prenom && formData.dateNaissance && formData.email && formData.telephone);
      case 2:
        return !!(formData.profession && formData.experienceAnnees && formData.diplomes);
      case 3:
        return !!(formData.nomEtablissement && formData.adresseEtablissement && formData.typeEtablissement);
      case 4:
        return !!(formData.motivations && formData.disponibilite);
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
      const response = await fetch('https://readdy.ai/api/form/d31ugpu666qo127joqpg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData)
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
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Informations personnelles</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
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
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date de naissance *
                </label>
                <input
                  type="date"
                  name="dateNaissance"
                  value={formData.dateNaissance}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lieu de naissance
                </label>
                <input
                  type="text"
                  name="lieuNaissance"
                  value={formData.lieuNaissance}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nationalité
                </label>
                <input
                  type="text"
                  name="nationalite"
                  value={formData.nationalite}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Informations professionnelles</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Profession actuelle *
              </label>
              <input
                type="text"
                name="profession"
                value={formData.profession}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Années d'expérience *
              </label>
              <select
                name="experienceAnnees"
                value={formData.experienceAnnees}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              >
                <option value="">Sélectionner</option>
                <option value="0-2">0-2 ans</option>
                <option value="3-5">3-5 ans</option>
                <option value="6-10">6-10 ans</option>
                <option value="10+">Plus de 10 ans</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Diplômes et certifications *
              </label>
              <textarea
                name="diplomes"
                value={formData.diplomes}
                onChange={handleInputChange}
                required
                rows={4}
                maxLength={500}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Listez vos diplômes et certifications pertinents..."
              />
              <p className="text-sm text-gray-500 mt-1">
                {formData.diplomes.length}/500 caractères
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Formations complémentaires
              </label>
              <textarea
                name="formations"
                value={formData.formations}
                onChange={handleInputChange}
                rows={3}
                maxLength={500}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Formations spécialisées, stages, etc..."
              />
              <p className="text-sm text-gray-500 mt-1">
                {formData.formations.length}/500 caractères
              </p>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Informations sur l'établissement</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom de l'établissement *
              </label>
              <input
                type="text"
                name="nomEtablissement"
                value={formData.nomEtablissement}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adresse complète de l'établissement *
              </label>
              <textarea
                name="adresseEtablissement"
                value={formData.adresseEtablissement}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Adresse complète avec ville et quartier..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type d'établissement *
              </label>
              <select
                name="typeEtablissement"
                value={formData.typeEtablissement}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              >
                <option value="">Sélectionner</option>
                <option value="cape-individuel">CAPE Individuel</option>
                <option value="cape-collectif">CAPE Collectif</option>
                <option value="cape-familial">CAPE Familial</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Capacité d'accueil prévue
              </label>
              <select
                name="capaciteAccueil"
                value={formData.capaciteAccueil}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              >
                <option value="">Sélectionner</option>
                <option value="1-5">1 à 5 enfants</option>
                <option value="6-10">6 à 10 enfants</option>
                <option value="11-20">11 à 20 enfants</option>
                <option value="20+">Plus de 20 enfants</option>
              </select>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Finalisation de votre candidature</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Motivations et projet pédagogique *
              </label>
              <textarea
                name="motivations"
                value={formData.motivations}
                onChange={handleInputChange}
                required
                rows={6}
                maxLength={500}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Décrivez vos motivations et votre projet pédagogique..."
              />
              <p className="text-sm text-gray-500 mt-1">
                {formData.motivations.length}/500 caractères
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Disponibilité pour démarrer *
              </label>
              <select
                name="disponibilite"
                value={formData.disponibilite}
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
                    <li>• Convocation pour entretien si sélectionné</li>
                    <li>• Visite des locaux par nos services</li>
                    <li>• Décision finale sous 2-3 semaines</li>
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
            Votre candidature CAPE a été reçue. Vous recevrez une confirmation par email et nous vous recontacterons sous 5-7 jours ouvrables.
          </p>
          <button
            onClick={() => {
              setSubmitStatus('idle');
              setCurrentStep(1);
              setFormData({
                nom: '', prenom: '', dateNaissance: '', lieuNaissance: '', nationalite: '',
                telephone: '', email: '', profession: '', experienceAnnees: '', diplomes: '',
                formations: '', nomEtablissement: '', adresseEtablissement: '', typeEtablissement: '',
                capaciteAccueil: '', motivations: '', disponibilite: ''
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
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Inscription CAPE</h1>
        <p className="text-gray-600">
          Candidature pour l'autorisation de Centre d'Accueil de la Petite Enfance
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
        <form id="inscription-cape-stepper" onSubmit={handleSubmit} data-readdy-form>
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
