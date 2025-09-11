
import { useState, useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { updateSEO, addJSONLD } from '../../utils/seo';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  useEffect(() => {
    // Update SEO
    updateSEO({
      title: 'Services Municipaux - Mairie de Dangbo | Démarches administratives',
      description: 'Découvrez tous les services municipaux de Dangbo : état civil, urbanisme, taxes locales, santé, éducation. Démarches administratives et services en ligne.',
      keywords: 'services municipaux Dangbo, état civil, urbanisme, taxes locales, démarches administratives, certificats, permis',
      ogTitle: 'Services Municipaux - Mairie de Dangbo',
      ogDescription: 'Services administratifs et démarches municipales de la commune de Dangbo.',
      ogImage: 'https://mairiedangbo.exploitsweb.com/assets/logo.png',
      canonicalUrl: `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/services`
    });

    // Add JSON-LD structured data
    addJSONLD({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Services Municipaux de Dangbo",
      "description": "Services administratifs et démarches municipales offerts par la Mairie de Dangbo",
      "provider": {
        "@type": "GovernmentOrganization",
        "name": "Mairie de Dangbo",
        "url": import.meta.env.VITE_SITE_URL || 'https://example.com'
      },
      "areaServed": {
        "@type": "Place",
        "name": "Dangbo"
      },
      "serviceType": [
        "État Civil",
        "Urbanisme et Habitat",
        "Taxes et Impôts Locaux",
        "Santé et Hygiène",
        "Éducation et Culture"
      ]
    });
  }, []);

  const categories = ['Tous', 'État Civil', 'Urbanisme', 'Fiscalité', 'Social', 'Technique'];

  const services = [
    {
      id: 1,
      nom: "Acte de Naissance",
      category: "État Civil",
      description: "Délivrance d'actes de naissance pour tous les citoyens nés à Dangbo",
      duree: "Immédiat",
      cout: "Gratuit",
      pieces: ["Demande manuscrite", "Pièce d'identité du demandeur"],
      icon: "ri-file-text-line",
      horaires: "Lundi - Vendredi: 7h30 - 17h00"
    },
    {
      id: 2,
      nom: "Certificat de Mariage",
      category: "État Civil",
      description: "Délivrance de certificats de mariage et organisation des cérémonies",
      duree: "24h - 48h",
      cout: "5,000 FCFA",
      pieces: ["Dossier de mariage complet", "Photos d'identité", "Certificats médicaux"],
      icon: "ri-heart-line",
      horaires: "Lundi - Vendredi: 7h30 - 17h00"
    },
    {
      id: 3,
      nom: "Permis de Construire",
      category: "Urbanisme",
      description: "Autorisation pour la construction de bâtiments selon les normes urbaines",
      duree: "30 jours",
      cout: "Variable selon la surface",
      pieces: ["Plans architecturaux", "Étude de sol", "Titre de propriété"],
      icon: "ri-building-line",
      horaires: "Lundi - Vendredi: 8h00 - 16h00"
    },
    {
      id: 4,
      nom: "Certificat de Résidence",
      category: "État Civil",
      description: "Attestation de domicile pour les résidents de la commune",
      duree: "Immédiat",
      cout: "1,000 FCFA",
      pieces: ["Demande manuscrite", "Témoins", "Pièce d'identité"],
      icon: "ri-home-line",
      horaires: "Lundi - Vendredi: 7h30 - 17h00"
    },
    {
      id: 5,
      nom: "Taxe d'Habitation",
      category: "Fiscalité",
      description: "Paiement des taxes locales pour les propriétaires et locataires",
      duree: "Immédiat",
      cout: "Variable selon la propriété",
      pieces: ["Titre de propriété ou bail", "Pièce d'identité"],
      icon: "ri-money-euro-circle-line",
      horaires: "Lundi - Vendredi: 7h30 - 17h00"
    },
    {
      id: 6,
      nom: "Aide Sociale",
      category: "Social",
      description: "Assistance aux personnes vulnérables et familles en difficulté",
      duree: "Selon évaluation",
      cout: "Gratuit",
      pieces: ["Dossier social", "Justificatifs de revenus", "Certificats médicaux"],
      icon: "ri-hand-heart-line",
      horaires: "Lundi - Vendredi: 8h00 - 16h00"
    },
    {
      id: 7,
      nom: "Raccordement Eau",
      category: "Technique",
      description: "Demande de raccordement au réseau d'eau potable communal",
      duree: "15 jours",
      cout: "25,000 FCFA",
      pieces: ["Demande officielle", "Plan de situation", "Caution"],
      icon: "ri-drop-line",
      horaires: "Lundi - Vendredi: 8h00 - 16h00"
    },
    {
      id: 8,
      nom: "Autorisation de Manifestation",
      category: "Social",
      description: "Autorisation pour l'organisation d'événements publics et manifestations",
      duree: "7 jours",
      cout: "Variable selon l'événement",
      pieces: ["Dossier complet", "Plan sécuritaire", "Assurance"],
      icon: "ri-calendar-event-line",
      horaires: "Lundi - Vendredi: 8h00 - 16h00"
    },
    {
      id: 9,
      nom: "Légalisation de Signature",
      category: "État Civil",
      description: "Légalisation de signatures pour documents officiels",
      duree: "Immédiat",
      cout: "500 FCFA",
      pieces: ["Document à légaliser", "Pièce d'identité"],
      icon: "ri-quill-pen-line",
      horaires: "Lundi - Vendredi: 7h30 - 17h00"
    }
  ];

  const filteredServices = selectedCategory === 'Tous' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const demarchesEnLigne = [
    {
      service: "Pré-demande d'actes",
      description: "Faites votre demande en ligne avant de vous déplacer",
      icon: "ri-file-download-line",
      lien: "#"
    },
    {
      service: "Prise de rendez-vous",
      description: "Planifiez votre visite pour éviter l'attente",
      icon: "ri-calendar-check-line",
      lien: "#"
    },
    {
      service: "Suivi de dossier",
      description: "Consultez l'avancement de vos demandes",
      icon: "ri-search-eye-line",
      lien: "#"
    },
    {
      service: "Paiement en ligne",
      description: "Réglez vos taxes et frais depuis chez vous",
      icon: "ri-secure-payment-line",
      lien: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Services Municipaux</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Tous les services administratifs à votre disposition
            </p>
          </div>
        </div>
      </div>

      {/* Démarches en ligne */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Démarches en Ligne
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Simplifiez vos démarches avec nos services numériques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {demarchesEnLigne.map((demarche, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${demarche.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {demarche.service}
              </h3>
              <p className="text-gray-600 mb-4">
                {demarche.description}
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors whitespace-nowrap">
                Accéder
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Filtres */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                    service.category === 'État Civil' ? 'bg-blue-100' :
                    service.category === 'Urbanisme' ? 'bg-green-100' :
                    service.category === 'Fiscalité' ? 'bg-orange-100' :
                    service.category === 'Social' ? 'bg-purple-100' :
                    'bg-gray-100'
                  }`}>
                    <i className={`${service.icon} text-xl ${
                      service.category === 'État Civil' ? 'text-blue-600' :
                      service.category === 'Urbanisme' ? 'text-green-600' :
                      service.category === 'Fiscalité' ? 'text-orange-600' :
                      service.category === 'Social' ? 'text-purple-600' :
                      'text-gray-600'
                    }`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{service.nom}</h3>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      service.category === 'État Civil' ? 'bg-blue-100 text-blue-600' :
                      service.category === 'Urbanisme' ? 'bg-green-100 text-green-600' :
                      service.category === 'Fiscalité' ? 'bg-orange-100 text-orange-600' :
                      service.category === 'Social' ? 'bg-purple-100 text-purple-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {service.category}
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <i className="ri-time-line text-gray-500 mr-3"></i>
                    <div>
                      <span className="font-medium text-gray-700">Délai : </span>
                      <span className="text-gray-600">{service.duree}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-money-euro-circle-line text-gray-500 mr-3"></i>
                    <div>
                      <span className="font-medium text-gray-700">Coût : </span>
                      <span className="text-gray-600">{service.cout}</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-calendar-line text-gray-500 mr-3 mt-1"></i>
                    <div>
                      <span className="font-medium text-gray-700 block">Horaires :</span>
                      <span className="text-gray-600 text-sm">{service.horaires}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-medium text-gray-700 mb-2">Pièces requises :</h4>
                  <ul className="space-y-1">
                    {service.pieces.map((piece, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <i className="ri-checkbox-circle-line text-green-500 mr-2 mt-0.5 text-xs"></i>
                        {piece}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap">
                  Faire une demande
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Informations Pratiques */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Informations Pratiques
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-800 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <i className="ri-map-pin-line mr-3"></i>
                  Localisation
                </h3>
                <div className="space-y-3">
                  <p className="flex items-center">
                    <i className="ri-building-line mr-3 text-blue-300"></i>
                    Hôtel de Ville de Dangbo
                  </p>
                  <p className="flex items-center">
                    <i className="ri-road-map-line mr-3 text-blue-300"></i>
                    Centre-ville, Dangbo
                  </p>
                  <p className="flex items-center">
                    <i className="ri-phone-line mr-3 text-blue-300"></i>
                    +229 XX XX XX XX
                  </p>
                </div>
              </div>

              <div className="bg-blue-800 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <i className="ri-customer-service-line mr-3"></i>
                  Assistance
                </h3>
                <div className="space-y-3">
                  <p className="flex items-center">
                    <i className="ri-question-line mr-3 text-blue-300"></i>
                    Service d'information
                  </p>
                  <p className="flex items-center">
                    <i className="ri-mail-line mr-3 text-blue-300"></i>
                    info@dangbo.bj
                  </p>
                  <p className="flex items-center">
                    <i className="ri-time-line mr-3 text-blue-300"></i>
                    Lun-Ven : 7h30-17h00
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-blue-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Besoin d'aide ?</h3>
                <p className="text-blue-100 mb-6">
                  Notre équipe est à votre disposition pour vous accompagner dans vos démarches administratives.
                </p>
                <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap">
                  Contactez-nous
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
