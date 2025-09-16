
import { useState } from 'react';
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState('contact');
  const [contactData, setContactData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });
  const [informationData, setInformationData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInformationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInformationData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactData.nom || !contactData.email || !contactData.sujet || !contactData.message) {
      alert('Veuillez remplir tous les champs requis');
      return;
    }

    if (contactData.message.length > 500) {
      alert('Le message ne peut pas dépasser 500 caractères');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://readdy.ai/api/form/d31svd8emi0jo797cfi0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          nom: contactData.nom,
          email: contactData.email,
          telephone: contactData.telephone,
          sujet: contactData.sujet,
          message: contactData.message
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setContactData({ nom: '', email: '', telephone: '', sujet: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInformationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!informationData.nom || !informationData.prenom || !informationData.email || !informationData.telephone || !informationData.sujet || !informationData.message) {
      alert('Veuillez remplir tous les champs requis');
      return;
    }

    if (informationData.message.length > 500) {
      alert('Le message ne peut pas dépasser 500 caractères');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://readdy.ai/api/forms/2088b13d-c4e5-45c7-8bdb-4ad14cbfb123', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          nom: informationData.nom,
          prenom: informationData.prenom,
          email: informationData.email,
          telephone: informationData.telephone,
          sujet: informationData.sujet,
          message: informationData.message
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setInformationData({ nom: '', prenom: '', email: '', telephone: '', sujet: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center py-16"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=Friendly%20African%20female%20government%20social%20worker%20or%20CAPE%20administrator%20smiling%20warmly%20at%20camera%20in%20bright%20modern%20office%2C%20professional%20attire%2C%20child%20protection%20posters%20and%20CAPE%20certification%20documents%20visible%20on%20walls%2C%20welcoming%20customer%20service%20environment%2C%20natural%20lighting%20creating%20approachable%20atmosphere%20for%20contact%20and%20communication&width=1920&height=1080&seq=contact-cape-bg&orientation=landscape)'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 w-full max-w-7xl px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contactez-nous
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Nous sommes là pour vous accompagner dans vos démarches
            </p>
          </div>

          {/* Onglets */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-1 flex">
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === 'contact'
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                Contact Direct
              </button>
              <button
                onClick={() => setActiveTab('information')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === 'information'
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                Demande d'Information
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Section gauche - Informations */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
              {activeTab === 'contact' ? (
                <>
                  <h2 className="text-2xl font-bold mb-8 text-center">
                    CONTACTEZ NOUS DIRECTEMENT
                  </h2>
                  
                  <p className="text-center mb-8 text-white/90">
                    Vous pouvez contacter le Département en charge de l'Enfant et de l'Adolescent.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center bg-white/10 rounded-lg p-6">
                      <i className="ri-mail-line text-3xl mb-4"></i>
                      <h3 className="font-semibold mb-2">En envoyant un mail à l'adresse</h3>
                      <p className="text-sm">masm.dea@gouv.bj</p>
                    </div>

                    <div className="text-center bg-white/10 rounded-lg p-6">
                      <i className="ri-phone-line text-3xl mb-4"></i>
                      <h3 className="font-semibold mb-2">En appelant le numéro de téléphone</h3>
                      <p className="text-sm">229 60 42 20 09</p>
                    </div>

                    <div className="text-center bg-white/10 rounded-lg p-6">
                      <i className="ri-map-pin-line text-3xl mb-4"></i>
                      <h3 className="font-semibold mb-2">En vous rendant à nos bureaux</h3>
                      <p className="text-sm">Ministère des Affaires Sociales</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-8 text-center">
                    COMMENT POUVONS-NOUS VOUS AIDER ?
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="bg-white/20 rounded-lg p-6">
                      <h3 className="font-semibold mb-3 flex items-center">
                        <i className="ri-information-line mr-2"></i>
                        Informations générales
                      </h3>
                      <p className="text-white/90">
                        Renseignements sur les procédures d'inscription, les documents requis, et les délais de traitement.
                      </p>
                    </div>

                    <div className="bg-white/20 rounded-lg p-6">
                      <h3 className="font-semibold mb-3 flex items-center">
                        <i className="ri-file-text-line mr-2"></i>
                        Accompagnement personnalisé
                      </h3>
                      <p className="text-white/90">
                        Assistance pour constituer votre dossier et comprendre les exigences spécifiques à votre projet.
                      </p>
                    </div>

                    <div className="bg-white/20 rounded-lg p-6">
                      <h3 className="font-semibold mb-3 flex items-center">
                        <i className="ri-phone-line mr-2"></i>
                        Contact direct
                      </h3>
                      <p className="text-white/90">
                        Possibilité d'être recontacté par un conseiller pour un accompagnement sur mesure.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-white/20 rounded-lg">
                    <h3 className="font-semibold mb-3">
                      Délai de réponse
                    </h3>
                    <p className="text-white/90">
                      Nous nous engageons à vous répondre dans un délai de <strong>48 heures ouvrables</strong> maximum.
                    </p>
                  </div>
                </>
              )}

              {/* Carte Google Maps */}
              <div className="rounded-lg overflow-hidden mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.677842063943!2d2.4281384147771836!3d6.365288025334775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a7c8e8b9e6e9%3A0x8b8c8c8c8c8c8c8c!2sCotonou%2C%20Benin!5e0!3m2!1sen!2sus!4v1635789012345!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation MASM"
                ></iframe>
              </div>
            </div>

            {/* Section droite - Formulaires */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              {activeTab === 'contact' ? (
                <>
                  <div className="flex items-center mb-8">
                    <i className="ri-message-3-line text-3xl text-green-600 mr-4"></i>
                    <h2 className="text-2xl font-bold text-gray-900">NOUS CONTACTER</h2>
                  </div>

                  <form id="contact-cape" onSubmit={handleContactSubmit} data-readdy-form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                          Nom complet*
                        </label>
                        <input
                          type="text"
                          id="nom"
                          name="nom"
                          value={contactData.nom}
                          onChange={handleContactChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                          placeholder="Votre nom complet"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Adresse email*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={contactData.email}
                          onChange={handleContactChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                          placeholder="votre.email@exemple.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                          Numéro de téléphone
                        </label>
                        <input
                          type="tel"
                          id="telephone"
                          name="telephone"
                          value={contactData.telephone}
                          onChange={handleContactChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                          placeholder="+229 XX XX XX XX"
                        />
                      </div>

                      <div>
                        <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-2">
                          Sujet*
                        </label>
                        <input
                          type="text"
                          id="sujet"
                          name="sujet"
                          value={contactData.sujet}
                          onChange={handleContactChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                          placeholder="Sujet de votre message"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={contactData.message}
                        onChange={handleContactChange}
                        required
                        maxLength={500}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm resize-none"
                        placeholder="Écrivez votre message ici..."
                      />
                      <div className="text-right text-sm text-gray-500 mt-1">
                        {contactData.message.length}/500 caractères
                      </div>
                    </div>

                    {submitStatus === 'success' && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center">
                          <i className="ri-check-circle-line text-green-600 text-xl mr-3"></i>
                          <p className="text-green-800">
                            Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                          </p>
                        </div>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="flex items-center">
                          <i className="ri-error-warning-line text-red-600 text-xl mr-3"></i>
                          <p className="text-red-800">
                            Une erreur s'est produite lors de l'envoi. Veuillez réessayer.
                          </p>
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 w-full whitespace-nowrap"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="ri-loader-4-line animate-spin text-xl"></i>
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <i className="ri-send-plane-line text-xl"></i>
                          <span>Envoyer le message</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <>
                  <div className="flex items-center mb-8">
                    <i className="ri-question-line text-3xl text-blue-600 mr-4"></i>
                    <h2 className="text-2xl font-bold text-gray-900">DEMANDE D'INFORMATION</h2>
                  </div>

                  <form id="information-form" onSubmit={handleInformationSubmit} data-readdy-form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="info-nom" className="block text-sm font-medium text-gray-700 mb-2">
                          Nom*
                        </label>
                        <input
                          type="text"
                          id="info-nom"
                          name="nom"
                          value={informationData.nom}
                          onChange={handleInformationChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                          placeholder="Votre nom"
                        />
                      </div>

                      <div>
                        <label htmlFor="info-prenom" className="block text-sm font-medium text-gray-700 mb-2">
                          Prénom*
                        </label>
                        <input
                          type="text"
                          id="info-prenom"
                          name="prenom"
                          value={informationData.prenom}
                          onChange={handleInformationChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                          placeholder="Votre prénom"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="info-email" className="block text-sm font-medium text-gray-700 mb-2">
                        Adresse email*
                      </label>
                      <input
                        type="email"
                        id="info-email"
                        name="email"
                        value={informationData.email}
                        onChange={handleInformationChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="info-telephone" className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone*
                      </label>
                      <input
                        type="tel"
                        id="info-telephone"
                        name="telephone"
                        value={informationData.telephone}
                        onChange={handleInformationChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        placeholder="+229 XX XX XX XX"
                      />
                    </div>

                    <div>
                      <label htmlFor="info-sujet" className="block text-sm font-medium text-gray-700 mb-2">
                        Sujet de votre demande*
                      </label>
                      <select
                        id="info-sujet"
                        name="sujet"
                        value={informationData.sujet}
                        onChange={handleInformationChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="inscription-garderie">Inscription Garderie</option>
                        <option value="inscription-cape">Inscription CAPE</option>
                        <option value="suivi-dossier">Suivi de dossier</option>
                        <option value="candidature-professionnel">Candidature professionnel</option>
                        <option value="documentation">Documentation</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="info-message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message* <span className="text-gray-500">({informationData.message.length}/500)</span>
                      </label>
                      <textarea
                        id="info-message"
                        name="message"
                        value={informationData.message}
                        onChange={handleInformationChange}
                        required
                        maxLength={500}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                        placeholder="Décrivez votre demande en détail..."
                      />
                    </div>

                    {submitStatus === 'success' && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center">
                          <i className="ri-check-circle-line text-green-600 text-xl mr-3"></i>
                          <p className="text-green-800">
                            Votre demande a été envoyée avec succès ! Nous vous recontacterons dans les plus brefs délais.
                          </p>
                        </div>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="flex items-center">
                          <i className="ri-error-warning-line text-red-600 text-xl mr-3"></i>
                          <p className="text-red-800">
                            Une erreur s'est produite lors de l'envoi. Veuillez réessayer.
                          </p>
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 w-full whitespace-nowrap"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="ri-loader-4-line animate-spin text-xl"></i>
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <i className="ri-send-plane-line text-xl"></i>
                          <span>Envoyer ma demande</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
