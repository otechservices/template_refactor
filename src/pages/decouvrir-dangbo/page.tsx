import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { updateSEO, addJSONLD } from '../../utils/seo';

export default function DecouvrirDangbo() {
  useEffect(() => {
    // Update SEO
    updateSEO({
      title: 'Découvrir Dangbo - Histoire, Culture et Tourisme au Bénin',
      description: 'Découvrez la commune de Dangbo au Bénin : son histoire, sa culture, ses attractions touristiques, sa géographie et ses traditions. Guide complet de la région.',
      keywords: 'Dangbo Bénin, tourisme Dangbo, culture béninoise, histoire Dangbo, attractions touristiques, traditions locales',
      ogTitle: 'Découvrir Dangbo - Histoire et Culture',
      ogDescription: 'Découvrez l\'histoire, la culture et les attractions de la commune de Dangbo au Bénin.',
      ogImage: 'https://mairiedangbo.exploitsweb.com/assets/logo.png',
      canonicalUrl: `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/decouvrir-dangbo`
    });

    // Add JSON-LD structured data
    addJSONLD({
      "@context": "https://schema.org",
      "@type": "TouristDestination",
      "name": "Dangbo",
      "description": "Commune de Dangbo au Bénin, riche en histoire et culture",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/decouvrir-dangbo`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dangbo",
        "addressCountry": "BJ"
      },
      "touristType": [
        "Culture",
        "Histoire",
        "Traditions"
      ]
    });
  }, []);

  const attractions = [
    {
      id: 1,
      name: "Lac Nokoué",
      description: "Magnifique lac offrant des paysages exceptionnels et des activités de pêche traditionnelle.",
      image: "https://readdy.ai/api/search-image?query=beautiful%20lake%20nokue%20dangbo%20benin%20traditional%20fishing%20boats%20african%20landscape%20sunset%20reflection%20peaceful%20water%20scenery%20clean%20natural%20background&width=400&height=300&seq=lake1&orientation=landscape",
      type: "Nature"
    },
    {
      id: 2,
      name: "Village sur pilotis de Ganvié",
      description: "Village traditionnel construit sur l'eau, patrimoine culturel unique de la région.",
      image: "https://readdy.ai/api/search-image?query=ganvie%20stilt%20village%20traditional%20houses%20on%20water%20dangbo%20benin%20african%20heritage%20wooden%20structures%20boats%20cultural%20site%20clean%20background&width=400&height=300&seq=village1&orientation=landscape",
      type: "Culture"
    },
    {
      id: 3,
      name: "Marché de Dangbo",
      description: "Marché traditionnel coloré où se mélangent produits locaux et artisanat authentique.",
      image: "https://readdy.ai/api/search-image?query=traditional%20african%20market%20dangbo%20benin%20colorful%20fruits%20vegetables%20local%20vendors%20authentic%20cultural%20commerce%20busy%20marketplace%20clean%20background&width=400&height=300&seq=market2&orientation=landscape",
      type: "Commerce"
    },
    {
      id: 4,
      name: "Temple Vodoun",
      description: "Site spirituel traditionnel témoignant de la richesse culturelle et religieuse locale.",
      image: "https://readdy.ai/api/search-image?query=traditional%20vodoun%20temple%20dangbo%20benin%20african%20spiritual%20site%20cultural%20heritage%20religious%20architecture%20sacred%20place%20clean%20background&width=400&height=300&seq=temple1&orientation=landscape",
      type: "Culture"
    }
  ];

  const histoire = [
    {
      periode: "Période précoloniale",
      description: "Dangbo était un important centre de commerce entre les royaumes du Dahomey et les populations lacustres."
    },
    {
      periode: "Époque coloniale",
      description: "La région devient un carrefour commercial stratégique sous l'administration coloniale française."
    },
    {
      periode: "Indépendance",
      description: "Dangbo se développe comme commune moderne tout en préservant ses traditions ancestrales."
    },
    {
      periode: "Aujourd'hui",
      description: "Centre administratif dynamique alliant modernité et respect des coutumes traditionnelles."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=dangbo%20benin%20aerial%20view%20beautiful%20landscape%20lake%20nokue%20traditional%20village%20african%20countryside%20panoramic%20scenery%20clean%20natural%20background&width=1200&height=400&seq=hero1&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Découvrir Dangbo</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Au cœur du Bénin, entre tradition et modernité
            </p>
          </div>
        </div>
      </div>

      {/* Présentation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Bienvenue à Dangbo
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Dangbo est une commune dynamique située dans le département de l'Ouémé, au sud-est du Bénin. 
            Riche de son patrimoine culturel et de ses paysages exceptionnels, elle offre un cadre de vie 
            unique entre le lac Nokoué et les terres fertiles de la région. Découvrez une destination 
            authentique où se mélangent harmonieusement traditions ancestrales et aspirations modernes.
          </p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center bg-blue-50 rounded-xl p-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-group-line text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-blue-900">89,731</h3>
            <p className="text-gray-600">Habitants</p>
          </div>
          <div className="text-center bg-green-50 rounded-xl p-6">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-map-line text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-green-900">340</h3>
            <p className="text-gray-600">km² de superficie</p>
          </div>
          <div className="text-center bg-purple-50 rounded-xl p-6">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-building-line text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-purple-900">12</h3>
            <p className="text-gray-600">Arrondissements</p>
          </div>
          <div className="text-center bg-orange-50 rounded-xl p-6">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-star-line text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold text-orange-900">1960</h3>
            <p className="text-gray-600">Année de création</p>
          </div>
        </div>
      </div>

      {/* Attractions */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lieux d'Intérêt
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Découvrez les merveilles naturelles et culturelles qui font la richesse de Dangbo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {attractions.map((attraction) => (
              <div key={attraction.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      attraction.type === 'Nature' ? 'bg-green-100 text-green-600' :
                      attraction.type === 'Culture' ? 'bg-purple-100 text-purple-600' :
                      'bg-blue-100 text-blue-600'
                    }`}>
                      {attraction.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {attraction.name}
                  </h3>
                  <p className="text-gray-600">
                    {attraction.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Histoire */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Histoire de Dangbo
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Un voyage à travers les époques qui ont façonné notre commune
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-blue-300"></div>
            
            {histoire.map((period, index) => (
              <div key={index} className={`relative mb-8 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}>
                <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-3">
                        {period.periode}
                      </h3>
                      <p className="text-gray-700">
                        {period.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Culture et Traditions */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Culture et Traditions
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Dangbo est riche d'un patrimoine culturel exceptionnel, mélange harmonieux des traditions 
              Fon, Yoruba et des influences lacustres. Les festivals traditionnels, les cérémonies vodoun 
              et l'artisanat local témoignent de cette richesse culturelle préservée à travers les générations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-music-line text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Musique Traditionnelle</h3>
                <p className="text-blue-100">Rythmes ancestraux et instruments locaux</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-palette-line text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Artisanat</h3>
                <p className="text-blue-100">Sculptures, tissages et poteries authentiques</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-calendar-event-line text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Festivals</h3>
                <p className="text-blue-100">Célébrations traditionnelles annuelles</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
