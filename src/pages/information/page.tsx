
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function InformationPage() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.nom.trim()) {
      newErrors.nom = 'Le nom est requis';
    }
    if (!formData.prenom.trim()) {
      newErrors.prenom = 'Le prénom est requis';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }
    if (!formData.telephone.trim()) {
      newErrors.telephone = 'Le téléphone est requis';
    }
    if (!formData.sujet.trim()) {
      newErrors.sujet = 'Le sujet est requis';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.length > 500) {
      newErrors.message = 'Le message ne peut pas dépasser 500 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://readdy.ai/api/forms/2088b13d-c4e5-45c7-8bdb-4ad14cbfb123', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          nom: formData.nom,
          prenom: formData.prenom,
          email: formData.email,
          telephone: formData.telephone,
          sujet: formData.sujet,
          message: formData.message
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          nom: '',
          prenom: '',
          email: '',
          telephone: '',
          sujet: '',
          message: ''
        });
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      setErrors({ submit: 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="w-full px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://cape.social.gouv.bj/assets/template2/images/logo-masm.png" 
                  alt="LOGO MASM" 
                  className="h-12 object-contain"
                />
              </div>
            </div>
            
            <nav className="flex items-center space-x-8">
              <Link to="/" className="text-blue-600 font-medium hover:text-blue-700 cursor-pointer">ACCUEIL</Link>
              <a href="#" className="text-gray-700 hover:text-blue-600 cursor-pointer flex items-center">
                E-SERVICES
                <i className="ri-arrow-down-s-line ml-1"></i>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 cursor-pointer flex items-center">
                DÉLIBÉRATIONS
                <i className="ri-arrow-down-s-line ml-1"></i>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 cursor-pointer flex items-center">
                STRUCTURES AUTORISÉES
                <i className="ri-arrow-down-s-line ml-1"></i>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 cursor-pointer flex items-center">
                SUPPORT
                <i className="ri-arrow-down-s-line ml-1"></i>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20government%20office%20reception%20area%20with%20friendly%20staff%20member%20welcoming%20visitors%2C%20modern%20administrative%20building%20interior%2C%20clean%20and%20professional%20atmosphere%2C%20warm%20lighting%2C%20official%20government%20setting%20with%20comfortable%20seating%20area&width=1200&height=600&seq=info-hero&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Demande d'Information
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Vous avez des questions sur nos services ? Notre équipe est là pour vous accompagner et vous fournir toutes les informations nécessaires.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Information Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Comment pouvons-nous vous aider ?
              </h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-900 mb-3 flex items-center">
                    <i className="ri-information-line mr-2"></i>
                    Informations générales
                  </h3>
                  <p className="text-blue-800">
                    Renseignements sur les procédures d'inscription, les documents requis, et les délais de traitement.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="font-semibold text-green-900 mb-3 flex items-center">
                    <i className="ri-file-text-line mr-2"></i>
                    Accompagnement personnalisé
                  </h3>
                  <p className="text-green-800">
                    Assistance pour constituer votre dossier et comprendre les exigences spécifiques à votre projet.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="font-semibold text-purple-900 mb-3 flex items-center">
                    <i className="ri-phone-line mr-2"></i>
                    Contact direct
                  </h3>
                  <p className="text-purple-800">
                    Possibilité d'être recontacté par un conseiller pour un accompagnement sur mesure.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Délai de réponse
                </h3>
                <p className="text-gray-700">
                  Nous nous engageons à vous répondre dans un délai de <strong>48 heures ouvrables</strong> maximum.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Formulaire de demande
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-check-line text-2xl text-green-600"></i>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Demande envoyée avec succès !
                    </h3>
                    <p className="text-gray-600">
                      Nous vous recontacterons dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" id="information-form" data-readdy-form>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nom *
                        </label>
                        <input
                          type="text"
                          name="nom"
                          value={formData.nom}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm ${
                            errors.nom ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Votre nom"
                        />
                        {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom}</p>}
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
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm ${
                            errors.prenom ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Votre prénom"
                        />
                        {errors.prenom && <p className="text-red-500 text-sm mt-1">{errors.prenom}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Adresse email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="votre@email.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm ${
                          errors.telephone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="+229 XX XX XX XX"
                      />
                      {errors.telephone && <p className="text-red-500 text-sm mt-1">{errors.telephone}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Sujet de votre demande *
                      </label>
                      <select
                        name="sujet"
                        value={formData.sujet}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8 ${
                          errors.sujet ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="inscription-garderie">Inscription Garderie</option>
                        <option value="inscription-cape">Inscription CAPE</option>
                        <option value="suivi-dossier">Suivi de dossier</option>
                        <option value="candidature-professionnel">Candidature professionnel</option>
                        <option value="documentation">Documentation</option>
                        <option value="autre">Autre</option>
                      </select>
                      {errors.sujet && <p className="text-red-500 text-sm mt-1">{errors.sujet}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message * <span className="text-gray-500">({formData.message.length}/500)</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        maxLength={500}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none ${
                          errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Décrivez votre demande en détail..."
                      />
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>

                    {errors.submit && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-600 text-sm">{errors.submit}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <i className="ri-loader-4-line animate-spin mr-2"></i>
                          Envoi en cours...
                        </span>
                      ) : (
                        'Envoyer ma demande'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Autres moyens de nous contacter
            </h2>
            <p className="text-lg text-gray-600">
              Plusieurs canaux sont à votre disposition pour obtenir des informations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-mail-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Par email
              </h3>
              <p className="text-gray-600 mb-4">
                Écrivez-nous directement
              </p>
              <a 
                href="mailto:masm.dea@gouv.bj" 
                className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
              >
                masm.dea@gouv.bj
              </a>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-phone-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Par téléphone
              </h3>
              <p className="text-gray-600 mb-4">
                Appelez-nous directement
              </p>
              <a 
                href="tel:+22921300000" 
                className="text-green-600 hover:text-green-700 font-medium cursor-pointer"
              >
                +229 21 30 00 00
              </a>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-map-pin-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                En personne
              </h3>
              <p className="text-gray-600 mb-4">
                Rendez-vous dans nos bureaux
              </p>
              <p className="text-purple-600 font-medium">
                Ministère des Affaires Sociales<br />
                Cotonou, Bénin
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <img 
                src="https://cape.social.gouv.bj/assets/template2/images/logo-masm.png" 
                alt="LOGO MASM" 
                className="h-16 object-contain"
              />
              <img 
                src="https://cape.social.gouv.bj/assets/template2/images/logo-benin.png" 
                alt="RÉPUBLIQUE DU BÉNIN"
                className="h-16 object-contain"
              />
            </div>
            
            <p className="text-gray-300 mb-6">
              Ministère des Affaires Sociales et de la Microfinance
            </p>
            
            <div className="border-t border-gray-700 pt-6">
              <div className="flex flex-wrap items-center justify-center space-x-6 text-sm">
                <Link to="/contact" className="text-gray-300 hover:text-white cursor-pointer">
                  Contactez-nous
                </Link>
                <a href="#" className="text-gray-300 hover:text-white cursor-pointer">
                  Mentions légales
                </a>
                <a href="#" className="text-gray-300 hover:text-white cursor-pointer">
                  Politique de confidentialité
                </a>
                <a 
                  href="https://readdy.ai/?origin=logo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  Made with Readdy
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                © Ministère des Affaires Sociales et de la Microfinance - 2024
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
