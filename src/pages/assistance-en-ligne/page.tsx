
import { useState } from 'react';
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';

export default function AssistanceEnLignePage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    objet: '',
    description: ''
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
    
    if (!formData.nom || !formData.email || !formData.objet || !formData.description) {
      alert('Veuillez remplir tous les champs requis');
      return;
    }

    if (formData.description.length > 500) {
      alert('La description ne peut pas dépasser 500 caractères');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://readdy.ai/api/form/d31svd8emi0jo7assistance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          nom: formData.nom,
          email: formData.email,
          telephone: formData.telephone,
          objet: formData.objet,
          description: formData.description
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ nom: '', email: '', telephone: '', objet: '', description: '' });
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
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-20"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=Smiling%20African%20woman%20waving%20hello%20on%20laptop%20screen%20in%20bright%20modern%20office%20environment%2C%20professional%20customer%20service%20representative%2C%20warm%20welcoming%20atmosphere%20with%20soft%20natural%20lighting%2C%20friendly%20and%20approachable%20communication%20theme&width=1920&height=1080&seq=assistance-hero&orientation=landscape)'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 w-full max-w-6xl px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Offre d'une assistance en ligne aux usagers clients
            </h1>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-4">
                Avez-vous besoin d'assistance pour l'exploitation de la plateforme, ouvrez un ticket afin de poser votre préoccupation qui sera prise en charge dans des délais appréciables.
              </h2>
              <p className="text-gray-600 text-lg">
                Votre satisfaction est notre priorité.
              </p>
            </div>

            <form id="assistance-en-ligne" onSubmit={handleSubmit} data-readdy-form className="space-y-6">
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
                    placeholder="Entrez votre nom complet"
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
                  <label htmlFor="objet" className="block text-sm font-medium text-gray-700 mb-2">
                    Objet de votre demande*
                  </label>
                  <input
                    type="text"
                    id="objet"
                    name="objet"
                    value={formData.objet}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    placeholder="Résumez votre problème en quelques mots"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description détaillée de votre préoccupation*
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  maxLength={500}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm resize-none"
                  placeholder="Décrivez votre problème ou votre question en détail. Plus vous donnez d'informations, mieux nous pourrons vous aider..."
                />
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.description.length}/500 caractères
                </div>
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <i className="ri-check-circle-line text-green-600 text-xl mr-3"></i>
                    <div>
                      <p className="text-green-800 font-medium">
                        Votre ticket d'assistance a été créé avec succès !
                      </p>
                      <p className="text-green-700 text-sm mt-1">
                        Notre équipe examinera votre demande et vous répondra dans les plus brefs délais.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <i className="ri-error-warning-line text-red-600 text-xl mr-3"></i>
                    <p className="text-red-800">
                      Une erreur s'est produite lors de l'envoi. Veuillez réessayer ou nous contacter directement.
                    </p>
                  </div>
                </div>
              )}

              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-12 py-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 mx-auto whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin text-xl"></i>
                      <span>Création du ticket...</span>
                    </>
                  ) : (
                    <>
                      <span>Ouvrir mon ticket</span>
                      <i className="ri-send-plane-line text-xl"></i>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-16 text-center">
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-white text-lg mb-6">
                Mentions légales | Politique de Confidentialité
              </p>
              <p className="text-white/90 text-lg mb-8">
                Espace d'administration
              </p>
              
              <div className="flex justify-center mb-8">
                <img 
                  src="https://cape.social.gouv.bj/assets/template2/images/logo-masm.png" 
                  alt="Ministère des Affaires Sociales" 
                  className="h-20 object-contain"
                />
              </div>
              
              <p className="text-white/70 text-sm">
                © Ministère des Affaires Sociales et de la Microfinance - 2022
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
