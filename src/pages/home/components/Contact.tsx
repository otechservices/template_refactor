
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nom || !formData.email || !formData.sujet || !formData.message) {
      alert('Veuillez remplir tous les champs requis');
      return;
    }

    if (formData.message.length > 500) {
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
          nom: formData.nom,
          email: formData.email,
          telephone: formData.telephone,
          sujet: formData.sujet,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ nom: '', email: '', telephone: '', sujet: '', message: '' });
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
    <section 
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center py-16"
      style={{
        backgroundImage: 'url(https://readdy.ai/api/search-image?query=Professional%20African%20woman%20smiling%20while%20waving%20hello%20on%20laptop%20screen%2C%20warm%20welcoming%20atmosphere%2C%20modern%20office%20environment%20with%20soft%20lighting%2C%20customer%20service%20and%20communication%20theme%2C%20friendly%20and%20approachable%20feeling&width=1920&height=1080&seq=contact-bg&orientation=landscape)'
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 w-full max-w-6xl px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contactez-nous
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-8 text-center">
              CONTACTEZ NOUS ÉGALEMENT PAR LES CANAUX CI-DESSOUS:
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
                <i className="ri-file-text-line text-3xl mb-4"></i>
                <h3 className="font-semibold mb-2">En remplissant le formulaire de demande d'information</h3>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm mt-2 cursor-pointer">
                  Accéder
                </button>
              </div>
            </div>

            {/* Carte Google Maps */}
            <div className="rounded-lg overflow-hidden">
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

          {/* Formulaire de contact */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="flex items-center mb-8">
              <i className="ri-message-3-line text-3xl text-green-600 mr-4"></i>
              <h2 className="text-2xl font-bold text-gray-900">NOUS CONTACTER</h2>
            </div>

            <form id="contact-cape" onSubmit={handleSubmit} data-readdy-form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet*
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
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
                    value={formData.email}
                    onChange={handleInputChange}
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
                    value={formData.telephone}
                    onChange={handleInputChange}
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
                    value={formData.sujet}
                    onChange={handleInputChange}
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
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  maxLength={500}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm resize-none"
                  placeholder="Écrivez votre message ici..."
                />
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.message.length}/500 caractères
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
          </div>
        </div>

        {/* Section administration */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 inline-block">
            <p className="text-white mb-4">Mentions légales | Politique de confidentialité</p>
            <p className="text-white/80 mb-4">Espace d'administration</p>
            <div className="flex items-center justify-center">
              <img 
                src="https://cape.social.gouv.bj/assets/template2/images/logo-masm.png" 
                alt="Ministère des Affaires Sociales et de la Microfinance" 
                className="h-16 object-contain"
              />
            </div>
            <p className="text-white/60 text-sm mt-4">
              © Ministère des Affaires Sociales et de la Microfinance - 2022
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
