
import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { updateSEO, addJSONLD } from '../../utils/seo';

export default function Documentation() {
  useEffect(() => {
    // Update SEO
    updateSEO({
      title: 'Documentation - Mairie de Dangbo | Formulaires et Règlements',
      description: 'Centre de ressources documentaires de la Mairie de Dangbo : formulaires administratifs, règlements municipaux, délibérations et guides pratiques.',
      keywords: 'documentation Dangbo, formulaires administratifs, règlements municipaux, délibérations, guides pratiques, ressources',
      ogTitle: 'Documentation - Mairie de Dangbo',
      ogDescription: 'Centre de ressources et documentation de la Mairie de Dangbo.',
      ogImage: 'https://mairiedangbo.exploitsweb.com/assets/logo.png',
      canonicalUrl: `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/documentation`
    });

    // Add JSON-LD structured data
    addJSONLD({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Documentation - Mairie de Dangbo",
      "description": "Centre de ressources documentaires de la Mairie de Dangbo",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/documentation`,
      "mainEntity": {
        "@type": "ItemList",
        "name": "Documents administratifs",
        "description": "Collection de documents et formulaires administratifs"
      },
      "publisher": {
        "@type": "GovernmentOrganization",
        "name": "Mairie de Dangbo"
      }
    });
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const categories = ['Tous', 'Formulaires', 'Règlements', 'Délibérations', 'Guides', 'Rapports'];

  const documents = [
    {
      id: 1,
      titre: "Formulaire de demande d'acte de naissance",
      category: "Formulaires",
      description: "Formulaire officiel pour la demande d'acte de naissance",
      taille: "245 KB",
      format: "PDF",
      dateAjout: "15 janvier 2025",
      telechargements: 1247,
      icon: "ri-file-text-line"
    },
    {
      id: 2,
      titre: "Règlement d'urbanisme communal",
      category: "Règlements",
      description: "Règles et normes d'urbanisme applicables sur le territoire communal",
      taille: "2.1 MB",
      format: "PDF",
      dateAjout: "10 janvier 2025",
      telechargements: 892,
      icon: "ri-building-line"
    },
    {
      id: 3,
      titre: "Délibérations du conseil municipal - Décembre 2024",
      category: "Délibérations",
      description: "Compte-rendu des décisions prises lors de la session de décembre",
      taille: "1.8 MB",
      format: "PDF",
      dateAjout: "8 janvier 2025",
      telechargements: 456,
      icon: "ri-government-line"
    },
    {
      id: 4,
      titre: "Guide des démarches administratives",
      category: "Guides",
      description: "Guide complet pour faciliter vos démarches à la mairie",
      taille: "3.2 MB",
      format: "PDF",
      dateAjout: "5 janvier 2025",
      telechargements: 2134,
      icon: "ri-guide-line"
    },
    {
      id: 5,
      titre: "Formulaire de demande de permis de construire",
      category: "Formulaires",
      description: "Dossier complet pour les demandes de permis de construire",
      taille: "890 KB",
      format: "PDF",
      dateAjout: "3 janvier 2025",
      telechargements: 678,
      icon: "ri-home-gear-line"
    },
    {
      id: 6,
      titre: "Rapport d'activités 2024",
      category: "Rapports",
      description: "Bilan des activités et réalisations de la commune en 2024",
      taille: "4.5 MB",
      format: "PDF",
      dateAjout: "2 janvier 2025",
      telechargements: 1532,
      icon: "ri-file-chart-line"
    },
    {
      id: 7,
      titre: "Règlement intérieur du conseil municipal",
      category: "Règlements",
      description: "Règles de fonctionnement du conseil municipal de Dangbo",
      taille: "1.2 MB",
      format: "PDF",
      dateAjout: "28 décembre 2024",
      telechargements: 234,
      icon: "ri-scales-line"
    },
    {
      id: 8,
      titre: "Guide du citoyen - Droits et devoirs",
      category: "Guides",
      description: "Information sur les droits et devoirs des citoyens de Dangbo",
      taille: "2.8 MB",
      format: "PDF",
      dateAjout: "25 décembre 2024",
      telechargements: 987,
      icon: "ri-user-star-line"
    },
    {
      id: 9,
      titre: "Formulaire d'aide sociale",
      category: "Formulaires",
      description: "Demande d'assistance sociale pour les familles en difficulté",
      taille: "320 KB",
      format: "PDF",
      dateAjout: "20 décembre 2024",
      telechargements: 445,
      icon: "ri-hand-heart-line"
    },
    {
      id: 10,
      titre: "Rapport financier trimestriel Q4 2024",
      category: "Rapports",
      description: "État des finances communales pour le quatrième trimestre",
      taille: "1.9 MB",
      format: "PDF",
      dateAjout: "18 décembre 2024",
      telechargements: 356,
      icon: "ri-money-euro-circle-line"
    },
    {
      id: 11,
      titre: "Délibérations extraordinaires - Novembre 2024",
      category: "Délibérations",
      description: "Décisions prises lors de la session extraordinaire de novembre",
      taille: "1.1 MB",
      format: "PDF",
      dateAjout: "15 décembre 2024",
      telechargements: 278,
      icon: "ri-file-edit-line"
    },
    {
      id: 12,
      titre: "Guide des marchés publics",
      category: "Guides",
      description: "Procédures et modalités des marchés publics communaux",
      taille: "2.5 MB",
      format: "PDF",
      dateAjout: "12 décembre 2024",
      telechargements: 167,
      icon: "ri-auction-line"
    }
  ];

  const filteredDocuments = selectedCategory === 'Tous' 
    ? documents 
    : documents.filter(doc => doc.category === selectedCategory);

  const servicesNumeriques = [
    {
      nom: "Signature électronique",
      description: "Signez vos documents officiellement en ligne",
      icon: "ri-pen-nib-line"
    },
    {
      nom: "Archivage numérique",
      description: "Accédez à vos documents personnels en ligne",
      icon: "ri-archive-line"
    },
    {
      nom: "Notifications automatiques",
      description: "Recevez les mises à jour de vos dossiers",
      icon: "ri-notification-line"
    },
    {
      nom: "Assistance en ligne",
      description: "Chat en direct avec nos agents",
      icon: "ri-customer-service-2-line"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Documentation</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Accédez à tous les documents officiels et formulaires de la commune
            </p>
          </div>
        </div>
      </div>

      {/* Services Numériques */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Services Numériques
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Profitez de nos outils numériques pour simplifier vos démarches
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {servicesNumeriques.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${service.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.nom}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
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

      {/* Documents Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map((document) => (
            <div key={document.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    document.category === 'Formulaires' ? 'bg-blue-100' :
                    document.category === 'Règlements' ? 'bg-red-100' :
                    document.category === 'Délibérations' ? 'bg-purple-100' :
                    document.category === 'Guides' ? 'bg-green-100' :
                    'bg-orange-100'
                  }`}>
                    <i className={`${document.icon} text-xl ${
                      document.category === 'Formulaires' ? 'text-blue-600' :
                      document.category === 'Règlements' ? 'text-red-600' :
                      document.category === 'Délibérations' ? 'text-purple-600' :
                      document.category === 'Guides' ? 'text-green-600' :
                      'text-orange-600'
                    }`}></i>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    document.category === 'Formulaires' ? 'bg-blue-100 text-blue-600' :
                    document.category === 'Règlements' ? 'bg-red-100 text-red-600' :
                    document.category === 'Délibérations' ? 'bg-purple-100 text-purple-600' :
                    document.category === 'Guides' ? 'bg-green-100 text-green-600' :
                    'bg-orange-100 text-orange-600'
                  }`}>
                    {document.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {document.titre}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {document.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Format :</span>
                    <span className="font-medium text-gray-700">{document.format}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Taille :</span>
                    <span className="font-medium text-gray-700">{document.taille}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Ajouté le :</span>
                    <span className="font-medium text-gray-700">{document.dateAjout}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="ri-download-line mr-1"></i>
                    {document.telechargements} téléchargements
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center">
                    <i className="ri-download-line mr-2"></i>
                    Télécharger
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg transition-colors cursor-pointer">
                    <i className="ri-eye-line"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Informations Légales */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Informations Légales
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-800 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <i className="ri-shield-check-line mr-3"></i>
                  Authenticité
                </h3>
                <div className="space-y-3">
                  <p className="flex items-start">
                    <i className="ri-checkbox-circle-line mr-3 text-blue-300 mt-1"></i>
                    Tous les documents sont certifiés conformes
                  </p>
                  <p className="flex items-start">
                    <i className="ri-checkbox-circle-line mr-3 text-blue-300 mt-1"></i>
                    Signature électronique sécurisée
                  </p>
                  <p className="flex items-start">
                    <i className="ri-checkbox-circle-line mr-3 text-blue-300 mt-1"></i>
                    Traçabilité complète des téléchargements
                  </p>
                </div>
              </div>

              <div className="bg-blue-800 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <i className="ri-information-line mr-3"></i>
                  Aide
                </h3>
                <div className="space-y-3">
                  <p className="flex items-start">
                    <i className="ri-question-line mr-3 text-blue-300 mt-1"></i>
                    Besoin d'aide pour un document ?
                  </p>
                  <p className="flex items-start">
                    <i className="ri-phone-line mr-3 text-blue-300 mt-1"></i>
                    Contactez-nous au +229 XX XX XX XX
                  </p>
                  <p className="flex items-start">
                    <i className="ri-mail-line mr-3 text-blue-300 mt-1"></i>
                    documentation@dangbo.bj
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-blue-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">Abonnement aux Notifications</h3>
                <p className="text-blue-100 mb-6">
                  Recevez automatiquement les nouveaux documents et mises à jour par email.
                </p>
                <div className="flex max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Votre adresse email"
                    className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
                  />
                  <button className="bg-white text-blue-900 px-6 py-3 rounded-r-lg font-medium hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap">
                    S'abonner
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
