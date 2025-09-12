
import { useState } from 'react';

export default function TicketSupport() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    objet: '',
    demande: ''
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
    
    if (!formData.nom || !formData.email || !formData.objet || !formData.demande) {
      alert('Veuillez remplir tous les champs requis');
      return;
    }

    if (formData.demande.length > 500) {
      alert('La description de votre demande ne peut pas dépasser 500 caractères');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://readdy.ai/api/forms/submit/ticket-support', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          nom: formData.nom,
          email: formData.email,
          objet: formData.objet,
          demande: formData.demande
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ nom: '', email: '', objet: '', demande: '' });
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
      id="ticket-support"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center py-16"
      style={{
        backgroundImage: 'url(https://readdy.ai/api/search-image?query=Professional%20African%20woman%20smiling%20while%20working%20on%20laptop%20in%20bright%20modern%20office%20environment%2C%20warm%20lighting%2C%20customer%20support%20and%20assistance%20theme%2C%20friendly%20and%20welcoming%20atmosphere&width=1920&height=1080&seq=ticket-support-bg&orientation=landscape)'
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 w-full max-w-4xl px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ouvrir un ticket
          </h1>
          <p className="text-xl text-white/90">
            Besoin d'aide ? Soumettez votre demande et notre équipe vous répondra rapidement
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="flex items-center mb-8">
            <i className="ri-customer-service-2-line text-3xl text-green-600 mr-4"></i>
            <h2 className="text-2xl font-bold text-gray-900">OUVRIR MON TICKET</h2>
          </div>

          <form id="ticket-support" onSubmit={handleSubmit} data-readdy-form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                  Entrez votre nom*
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
                  Entrez votre mail*
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

            <div>
              <label htmlFor="objet" className="block text-sm font-medium text-gray-700 mb-2">
                Entrez votre objet*
              </label>
              <input
                type="text"
                id="objet"
                name="objet"
                value={formData.objet}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                placeholder="Objet de votre demande"
              />
            </div>

            <div>
              <label htmlFor="demande" className="block text-sm font-medium text-gray-700 mb-2">
                Expliquez-nous en détail votre demande*
              </label>
              <textarea
                id="demande"
                name="demande"
                value={formData.demande}
                onChange={handleInputChange}
                required
                maxLength={500}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm resize-none"
                placeholder="Décrivez votre problème ou votre demande en détail..."
              />
              <div className="text-right text-sm text-gray-500 mt-1">
                {formData.demande.length}/500 caractères
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center">
                  <i className="ri-check-circle-line text-green-600 text-xl mr-3"></i>
                  <p className="text-green-800">
                    Votre ticket a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
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
              className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 w-full md:w-auto whitespace-nowrap"
            >
              {isSubmitting ? (
                <>
                  <i className="ri-loader-4-line animate-spin text-xl"></i>
                  <span>Envoi en cours...</span>
                </>
              ) : (
                <>
                  <span>Ouvrir</span>
                  <i className="ri-send-plane-line text-xl"></i>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
