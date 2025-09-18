
import React, { useState } from 'react';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';

export default function NouvelleRequeteCape() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    denomination: '',
    typeStructure: '',
    adresse: '',
    commune: '',
    departement: '',
    telephone: '',
    email: '',
    responsable: '',
    dateCreation: '',
    nombreEnfants: '',
    effectifPersonnel: '',
    description: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">Informations générales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dénomination du centre *
                </label>
                <Input
                  value={formData.denomination}
                  onChange={(e) => handleInputChange('denomination', e.target.value)}
                  placeholder="Nom du centre"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type de structure *
                </label>
                <select 
                  value={formData.typeStructure}
                  onChange={(e) => handleInputChange('typeStructure', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8"
                  required
                >
                  <option value="">Sélectionner le type</option>
                  <option value="publique">Publique</option>
                  <option value="privee">Privée</option>
                  <option value="associative">Associative</option>
                  <option value="confessionnelle">Confessionnelle</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Adresse complète *
                </label>
                <Input
                  value={formData.adresse}
                  onChange={(e) => handleInputChange('adresse', e.target.value)}
                  placeholder="Adresse du centre"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Commune *
                </label>
                <Input
                  value={formData.commune}
                  onChange={(e) => handleInputChange('commune', e.target.value)}
                  placeholder="Commune"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Département *
                </label>
                <select 
                  value={formData.departement}
                  onChange={(e) => handleInputChange('departement', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8"
                  required
                >
                  <option value="">Sélectionner le département</option>
                  <option value="alibori">Alibori</option>
                  <option value="atacora">Atacora</option>
                  <option value="atlantique">Atlantique</option>
                  <option value="borgou">Borgou</option>
                  <option value="collines">Collines</option>
                  <option value="couffo">Couffo</option>
                  <option value="donga">Donga</option>
                  <option value="littoral">Littoral</option>
                  <option value="mono">Mono</option>
                  <option value="oueme">Ouémé</option>
                  <option value="plateau">Plateau</option>
                  <option value="zou">Zou</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date de création *
                </label>
                <Input
                  type="date"
                  value={formData.dateCreation}
                  onChange={(e) => handleInputChange('dateCreation', e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">Informations de contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone *
                </label>
                <Input
                  type="tel"
                  value={formData.telephone}
                  onChange={(e) => handleInputChange('telephone', e.target.value)}
                  placeholder="+225 XX XX XX XX XX"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="contact@centre.ci"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Responsable du centre *
                </label>
                <Input
                  value={formData.responsable}
                  onChange={(e) => handleInputChange('responsable', e.target.value)}
                  placeholder="Nom complet du responsable"
                  required
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">Informations opérationnelles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre d'enfants accueillis *
                </label>
                <Input
                  type="number"
                  value={formData.nombreEnfants}
                  onChange={(e) => handleInputChange('nombreEnfants', e.target.value)}
                  placeholder="0"
                  min="1"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Effectif du personnel *
                </label>
                <Input
                  type="number"
                  value={formData.effectifPersonnel}
                  onChange={(e) => handleInputChange('effectifPersonnel', e.target.value)}
                  placeholder="0"
                  min="1"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description des activités
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Décrivez les activités principales du centre..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  maxLength={500}
                />
                <div className="text-sm text-gray-500 mt-1">
                  {formData.description.length}/500 caractères
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">Récapitulatif de la demande</h3>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="font-medium text-gray-700">Dénomination:</span>
                  <p className="text-gray-900">{formData.denomination}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Type:</span>
                  <p className="text-gray-900">{formData.typeStructure}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Adresse:</span>
                  <p className="text-gray-900">{formData.adresse}, {formData.commune}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Département:</span>
                  <p className="text-gray-900">{formData.departement}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Contact:</span>
                  <p className="text-gray-900">{formData.telephone}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Email:</span>
                  <p className="text-gray-900">{formData.email}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Responsable:</span>
                  <p className="text-gray-900">{formData.responsable}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Capacité:</span>
                  <p className="text-gray-900">{formData.nombreEnfants} enfants, {formData.effectifPersonnel} personnel</p>
                </div>
              </div>
              {formData.description && (
                <div>
                  <span className="font-medium text-gray-700">Description:</span>
                  <p className="text-gray-900 mt-1">{formData.description}</p>
                </div>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <span className="text-gray-700 hover:text-blue-600 font-medium">Requêtes</span>
          </li>
          <li>
            <div className="flex items-center">
              <i className="ri-arrow-right-s-line text-gray-400"></i>
              <span className="ml-1 text-gray-500 font-medium">Nouvelle requête CAPE</span>
            </div>
          </li>
        </ol>
      </nav>

      <Card>
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Nouvelle demande d'agrément CAPE</h1>
          <p className="text-gray-600">Complétez les informations ci-dessous pour soumettre votre demande</p>
        </div>

        {/* Indicateur d'étapes */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    step <= currentStep
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div
                    className={`w-full h-0.5 ml-4 ${
                      step < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  />
                )}
                <div className="ml-2 text-sm text-gray-600 whitespace-nowrap">
                  {step === 1 && 'Informations générales'}
                  {step === 2 && 'Contact'}
                  {step === 3 && 'Opérations'}
                  {step === 4 && 'Récapitulatif'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contenu de l'étape */}
        <div className="mb-8">
          {renderStepContent()}
        </div>

        {/* Boutons de navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            <div className="w-4 h-4 flex items-center justify-center mr-2">
              <i className="ri-arrow-left-line"></i>
            </div>
            Précédent
          </Button>

          {currentStep < 4 ? (
            <Button variant="primary" onClick={nextStep}>
              Suivant
              <div className="w-4 h-4 flex items-center justify-center ml-2">
                <i className="ri-arrow-right-line"></i>
              </div>
            </Button>
          ) : (
            <Button variant="primary">
              <div className="w-4 h-4 flex items-center justify-center mr-2">
                <i className="ri-send-plane-line"></i>
              </div>
              Soumettre la demande
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
