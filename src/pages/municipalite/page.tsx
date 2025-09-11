
import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { updateSEO, addJSONLD } from '../../utils/seo';

export default function Municipalite() {
  useEffect(() => {
    // Update SEO
    updateSEO({
      title: 'Municipalité - Mairie de Dangbo | Maire et Conseil Municipal',
      description: 'Découvrez l\'organisation municipale de Dangbo : présentation du maire, conseil municipal, services administratifs et réalisations de l\'équipe dirigeante.',
      keywords: 'municipalité Dangbo, maire Dangbo, conseil municipal, élus locaux, administration municipale, gouvernance locale',
      ogTitle: 'Municipalité - Mairie de Dangbo',
      ogDescription: 'Organisation municipale et équipe dirigeante de la commune de Dangbo.',
      ogImage: 'https://mairiedangbo.exploitsweb.com/assets/logo.png',
      canonicalUrl: `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/municipalite`
    });

    // Add JSON-LD structured data
    addJSONLD({
      "@context": "https://schema.org",
      "@type": "GovernmentOrganization",
      "name": "Conseil Municipal de Dangbo",
      "description": "Organisation municipale et conseil municipal de la commune de Dangbo",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/municipalite`,
      "parentOrganization": {
        "@type": "GovernmentOrganization",
        "name": "Mairie de Dangbo"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Dangbo"
      }
    });
  }, []);

  const maire = {
    nom: "HOUNKPEVI Chabi Denis",
    fonction: "Maire de Dangbo",
    mandatDebut: "2020",
    mandatFin: "2026",
    photo: "https://readdy.ai/api/search-image?query=african%20mayor%20official%20portrait%20professional%20suit%20dangbo%20benin%20municipal%20leader%20government%20official%20formal%20photograph%20clean%20background&width=400&height=500&seq=mayor1&orientation=portrait",
    biographie: "Élu maire de Dangbo en 2020, Denis HOUNKPEVI Chabi s'engage pour le développement durable de sa commune. Fort de son expérience en gestion publique, il œuvre pour l'amélioration des infrastructures, l'accès aux services de base et la promotion de l'économie locale."
  };

  const conseillers = [
    {
      nom: "AKPOVI Marie-Claire",
      poste: "1ère Adjointe au Maire",
      photo: "https://readdy.ai/api/search-image?query=african%20woman%20councilor%20official%20portrait%20professional%20attire%20dangbo%20benin%20government%20official%20formal%20photograph%20clean%20background&width=300&height=400&seq=councilor1&orientation=portrait",
      responsabilites: "Affaires sociales et Education"
    },
    {
      nom: "SOGLO Jean-Baptiste",
      poste: "2ème Adjoint au Maire",
      photo: "https://readdy.ai/api/search-image?query=african%20man%20councilor%20official%20portrait%20professional%20suit%20dangbo%20benin%20government%20official%20formal%20photograph%20clean%20background&width=300&height=400&seq=councilor2&orientation=portrait",
      responsabilites: "Développement économique"
    },
    {
      nom: "TCHAKONDO Estelle",
      poste: "Conseillère Municipale",
      photo: "https://readdy.ai/api/search-image?query=african%20woman%20municipal%20councilor%20official%20portrait%20professional%20dress%20dangbo%20benin%20government%20official%20formal%20photograph%20clean%20background&width=300&height=400&seq=councilor3&orientation=portrait",
      responsabilites: "Environnement et Santé"
    },
    {
      nom: "GBAGUIDI Pascal",
      poste: "Conseiller Municipal",
      photo: "https://readdy.ai/api/search-image?query=african%20man%20municipal%20councilor%20official%20portrait%20professional%20attire%20dangbo%20benin%20government%20official%20formal%20photograph%20clean%20background&width=300&height=400&seq=councilor4&orientation=portrait",
      responsabilites: "Infrastructure et Urbanisme"
    },
    {
      nom: "ADEGBIDI Francine",
      poste: "Conseillère Municipale",
      photo: "https://readdy.ai/api/search-image?query=african%20woman%20municipal%20councilor%20official%20portrait%20professional%20blazer%20dangbo%20benin%20government%20official%20formal%20photograph%20clean%20background&width=300&height=400&seq=councilor5&orientation=portrait",
      responsabilites: "Culture et Tourisme"
    },
    {
      nom: "AKPOVO Germain",
      poste: "Conseiller Municipal",
      photo: "https://readdy.ai/api/search-image?query=african%20man%20municipal%20councilor%20official%20portrait%20professional%20shirt%20dangbo%20benin%20government%20official%20formal%20photograph%20clean%20background&width=300&height=400&seq=councilor6&orientation=portrait",
      responsabilites: "Jeunesse et Sports"
    }
  ];

  const services = [
    {
      nom: "Secrétariat Général",
      responsable: "AKPOVI Sylvain",
      description: "Coordination administrative et suivi des dossiers municipaux",
      icon: "ri-file-text-line"
    },
    {
      nom: "Service Financier",
      responsable: "HOUNSOU Marcelline",
      description: "Gestion budgétaire et comptabilité communale",
      icon: "ri-money-euro-circle-line"
    },
    {
      nom: "Service Technique",
      responsable: "TOGBE Laurent",
      description: "Infrastructures, urbanisme et travaux publics",
      icon: "ri-tools-line"
    },
    {
      nom: "Service État Civil",
      responsable: "FELIHO Rosine",
      description: "Actes de naissance, mariage, décès et CNI",
      icon: "ri-user-settings-line"
    },
    {
      nom: "Service Social",
      responsable: "ADEGBOLA Christine",
      description: "Affaires sociales et aide aux populations vulnérables",
      icon: "ri-heart-line"
    },
    {
      nom: "Service Environnement",
      responsable: "LOKOSSOU Pierre",
      description: "Gestion des déchets et protection environnementale",
      icon: "ri-leaf-line"
    }
  ];

  const realisations = [
    {
      annee: "2024",
      projets: [
        "Construction de 5 forages d'eau potable",
        "Réhabilitation de l'école primaire publique de Houédo",
        "Aménagement du marché central de Dangbo"
      ]
    },
    {
      annee: "2023",
      projets: [
        "Électrification de 3 villages",
        "Construction du centre de santé de Gbessou",
        "Bitumage de 2 km de routes communales"
      ]
    },
    {
      annee: "2022",
      projets: [
        "Création de la maison des jeunes",
        "Aménagement des berges du lac Nokoué",
        "Installation de l'éclairage public solaire"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Municipalité</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Au service des citoyens de Dangbo depuis 2020
            </p>
          </div>
        </div>
      </div>

      {/* Le Maire */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Le Maire
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={maire.photo}
                  alt={maire.nom}
                  className="w-full h-64 md:h-full object-cover object-top"
                />
              </div>
              <div className="md:w-2/3 p-8">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{maire.nom}</h3>
                  <p className="text-xl text-blue-600 font-semibold mb-4">{maire.fonction}</p>
                  <div className="flex items-center text-gray-600 mb-6">
                    <i className="ri-calendar-line mr-3"></i>
                    <span>Mandat : {maire.mandatDebut} - {maire.mandatFin}</span>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {maire.biographie}
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                    <i className="ri-phone-line text-blue-600 mr-2"></i>
                    <span className="text-gray-700">+229 XX XX XX XX</span>
                  </div>
                  <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                    <i className="ri-mail-line text-blue-600 mr-2"></i>
                    <span className="text-gray-700">maire@dangbo.bj</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conseil Municipal */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Conseil Municipal
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Une équipe engagée pour le développement de Dangbo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conseillers.map((conseiller, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={conseiller.photo}
                  alt={conseiller.nom}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {conseiller.nom}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {conseiller.poste}
                  </p>
                  <p className="text-gray-600">
                    {conseiller.responsabilites}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Municipaux */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Services Municipaux
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Organisation administrative au service des citoyens
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <i className={`${service.icon} text-white text-xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{service.nom}</h3>
                  <p className="text-gray-600 text-sm">{service.responsable}</p>
                </div>
              </div>
              <p className="text-gray-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Réalisations */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Principales Réalisations
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Les projets qui transforment notre commune
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {realisations.map((periode, index) => (
              <div key={index} className="mb-12 last:mb-0">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mr-6">
                    <span className="text-2xl font-bold">{periode.annee}</span>
                  </div>
                  <div className="flex-1 h-px bg-blue-700"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-22">
                  {periode.projets.map((projet, projetIndex) => (
                    <div key={projetIndex} className="bg-blue-800 rounded-lg p-6">
                      <div className="flex items-start">
                        <i className="ri-checkbox-circle-line text-green-400 text-xl mr-3 mt-1"></i>
                        <p className="text-blue-100">{projet}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Mairie */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Horaires et Contact
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <i className="ri-time-line mr-3"></i>
                Horaires d'ouverture
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-blue-200">
                  <span className="font-medium text-gray-700">Lundi - Vendredi</span>
                  <span className="text-blue-600">7h30 - 17h00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-blue-200">
                  <span className="font-medium text-gray-700">Samedi</span>
                  <span className="text-blue-600">8h00 - 12h00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-700">Dimanche</span>
                  <span className="text-red-600">Fermé</span>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center">
                <i className="ri-customer-service-line mr-3"></i>
                Audience du Maire
              </h3>
              <div className="space-y-4">
                <div className="flex items-center py-2">
                  <i className="ri-calendar-line text-green-600 mr-3"></i>
                  <div>
                    <p className="font-medium text-gray-700">Mercredi & Vendredi</p>
                    <p className="text-sm text-gray-600">Sur rendez-vous uniquement</p>
                  </div>
                </div>
                <div className="flex items-center py-2">
                  <i className="ri-time-line text-green-600 mr-3"></i>
                  <div>
                    <p className="font-medium text-gray-700">9h00 - 12h00</p>
                    <p className="text-sm text-gray-600">14h00 - 16h00</p>
                  </div>
                </div>
                <div className="flex items-center py-2">
                  <i className="ri-phone-line text-green-600 mr-3"></i>
                  <p className="text-gray-700">+229 XX XX XX XX</p>
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
