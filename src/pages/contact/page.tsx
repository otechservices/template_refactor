
import { useState, useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { updateSEO, addJSONLD } from '../../utils/seo';

export default function Contact() {
  useEffect(() => {
    // Update SEO
    updateSEO({
      title: 'Contact - Mairie de Dangbo | Coordonnées et Horaires',
      description: 'Contactez la Mairie de Dangbo. Adresse, téléphone, horaires d\'ouverture et formulaire de contact. Nous sommes à votre service pour toutes vos démarches.',
      keywords: 'contact Mairie Dangbo, adresse, téléphone, horaires, formulaire contact, service public',
      ogTitle: 'Contact - Mairie de Dangbo',
      ogDescription: 'Coordonnées et informations de contact de la Mairie de Dangbo.',
      ogImage: 'https://mairiedangbo.exploitsweb.com/assets/logo.png',
      canonicalUrl: `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/contact`
    });

    // Add JSON-LD structured data
    addJSONLD({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact - Mairie de Dangbo",
      "description": "Page de contact de la Mairie de Dangbo avec coordonnées et formulaire",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/contact`,
      "mainEntity": {
        "@type": "GovernmentOrganization",
        "name": "Mairie de Dangbo",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dangbo",
          "addressCountry": "BJ",
          "postalCode": "BP 123"
        },
        "telephone": "+229-XX-XX-XX-XX",
        "email": "contact@mairiedangbo.bj"
      }
    });
  }, []);

  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });

  const services = [
    { value: 'etat-civil', label: 'État Civil' },
    { value: 'urbanisme', label: 'Urbanisme' },
    { value: 'fiscalite', label: 'Fiscalité' },
    { value: 'social', label: 'Affaires Sociales' },
    { value: 'technique', label: 'Services Techniques' },
    { value: 'autre', label: 'Autre demande' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    // Ici, vous pourriez ajouter la logique d'envoi
    alert('Votre message a été envoyé avec succès !');
  };

  const horaires = [
    { jour: 'Lundi - Vendredi', heures: '7h30 - 17h00' },
    { jour: 'Samedi', heures: '8h00 - 12h00' },
    { jour: 'Dimanche', heures: 'Fermé' }
  ];

  const contacts = [
    {
      titre: 'Secrétariat Général',
      telephone: '+229 XX XX XX XX',
      email: 'secretariat@dangbo.bj',
      icon: 'ri-user-settings-line'
    },
    {
      titre: 'État Civil',
      telephone: '+229 XX XX XX XX',
      email: 'etatcivil@dangbo.bj',
      icon: 'ri-file-text-line'
    },
    {
      titre: 'Services Techniques',
      telephone: '+229 XX XX XX XX',
      email: 'technique@dangbo.bj',
      icon: 'ri-tools-line'
    },
    {
      titre: 'Urgences',
      telephone: '+229 XX XX XX XX',
      email: 'urgence@dangbo.bj',
      icon: 'ri-alarm-warning-line'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nous Contacter</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              L'équipe municipale est à votre écoute pour répondre à vos questions
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire de Contact */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Envoyez-nous un message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    required
                    value={formData.prenom}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    value={formData.nom}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+229 XX XX XX XX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service concerné
                </label>
                <select
                  id="service"
                  name="service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
                >
                  <option value="">Sélectionnez un service</option>
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  id="sujet"
                  name="sujet"
                  required
                  value={formData.sujet}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Résumez votre demande"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  maxLength={500}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Détaillez votre demande... (maximum 500 caractères)"
                ></textarea>
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.message.length}/500 caractères
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Informations de Contact */}
          <div className="space-y-8">
            {/* Localisation */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="ri-map-pin-line mr-3 text-blue-600"></i>
                Nous localiser
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-building-line text-blue-600 mr-3 mt-1"></i>
                  <div>
                    <p className="font-medium text-gray-900">Hôtel de Ville de Dangbo</p>
                    <p className="text-gray-600">Place de l'Indépendance</p>
                    <p className="text-gray-600">BP 123, Dangbo, Bénin</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="ri-phone-line text-blue-600 mr-3"></i>
                  <div>
                    <p className="font-medium text-gray-900">Standard</p>
                    <p className="text-gray-600">+229 XX XX XX XX</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <i className="ri-mail-line text-blue-600 mr-3"></i>
                  <div>
                    <p className="font-medium text-gray-900">Email général</p>
                    <p className="text-gray-600">contact@dangbo.bj</p>
                  </div>
                </div>
              </div>

              {/* Carte intégrée */}
              <div className="mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d2.5398877!3d6.5408355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzInMjcuMCJOIDLCsDMyJzIzLjYiRQ!5e0!3m2!1sfr!2sbj!4v1640123456789!5m2!1sfr!2sbj"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            {/* Horaires */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="ri-time-line mr-3 text-blue-600"></i>
                Horaires d'ouverture
              </h2>
              <div className="space-y-3">
                {horaires.map((horaire, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-900">{horaire.jour}</span>
                    <span className="text-gray-600">{horaire.heures}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contacts par Service */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contacts par Service
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Contactez directement le service concerné par votre demande
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contacts.map((contact, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${contact.icon} text-2xl text-blue-600`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {contact.titre}
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-600 flex items-center justify-center">
                    <i className="ri-phone-line mr-2 text-sm"></i>
                    {contact.telephone}
                  </p>
                  <p className="text-gray-600 flex items-center justify-center">
                    <i className="ri-mail-line mr-2 text-sm"></i>
                    {contact.email}
                  </p>
                </div>
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer whitespace-nowrap">
                  Contacter
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Urgences */}
        <div className="mt-16 bg-red-50 rounded-xl p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-alarm-warning-line text-2xl text-red-600"></i>
            </div>
            <h2 className="text-2xl font-bold text-red-900 mb-4">
              En cas d'urgence
            </h2>
            <p className="text-red-700 mb-6">
              Pour toute situation d'urgence nécessitant une intervention immédiate
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-4">
                <i className="ri-police-car-line text-2xl text-blue-600 mb-2"></i>
                <h3 className="font-bold text-gray-900">Police</h3>
                <p className="text-gray-600">117</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <i className="ri-fire-line text-2xl text-red-600 mb-2"></i>
                <h3 className="font-bold text-gray-900">Pompiers</h3>
                <p className="text-gray-600">118</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <i className="ri-hospital-line text-2xl text-green-600 mb-2"></i>
                <h3 className="font-bold text-gray-900">SAMU</h3>
                <p className="text-gray-600">119</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
