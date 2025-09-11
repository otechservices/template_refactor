
import { useState } from 'react';

interface ArticleDetailProps {
  article: {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    category: string;
    image: string;
    author: string;
    readTime: string;
    tags: string[];
    gallery?: string[];
  };
  onBack: () => void;
}

export default function ArticleDetail({ article, onBack }: ArticleDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Conseil Municipal': return 'bg-green-100 text-green-800';
      case 'Projets': return 'bg-blue-100 text-blue-800';
      case 'Événements': return 'bg-purple-100 text-purple-800';
      case 'Avis Publics': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const relatedArticles = [
    {
      id: 2,
      title: "Conseil Municipal du 20 Janvier 2025",
      excerpt: "Ordre du jour du prochain conseil municipal...",
      date: "10 Janvier 2025",
      category: "Conseil Municipal",
      image: "https://readdy.ai/api/search-image?query=municipal%20council%20meeting%20african%20officials%20discussing%20documents%20in%20modern%20meeting%20room%20dangbo%20benin%20government%20building%20clean%20professional%20background&width=300&height=200&seq=related1&orientation=landscape"
    },
    {
      id: 3,
      title: "Festival culturel de Dangbo 2025",
      excerpt: "Venez découvrir la richesse culturelle de Dangbo...",
      date: "8 Janvier 2025",
      category: "Événements",
      image: "https://readdy.ai/api/search-image?query=african%20cultural%20festival%20traditional%20dancers%20colorful%20costumes%20dangbo%20benin%20celebration%20community%20gathering%20vibrant%20clean%20background&width=300&height=200&seq=related2&orientation=landscape"
    }
  ];

  const nextImage = () => {
    if (article.gallery) {
      setCurrentImageIndex((prev) => (prev + 1) % article.gallery.length);
    }
  };

  const prevImage = () => {
    if (article.gallery) {
      setCurrentImageIndex((prev) => (prev - 1 + article.gallery.length) % article.gallery.length);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={onBack}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-4 cursor-pointer"
          >
            <i className="ri-arrow-left-line mr-2"></i>
            Retour aux actualités
          </button>
          
          <div className="flex items-center space-x-4 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
              {article.category}
            </span>
            <span className="text-gray-500 flex items-center">
              <i className="ri-calendar-line mr-2"></i>
              {article.date}
            </span>
            <span className="text-gray-500 flex items-center">
              <i className="ri-time-line mr-2"></i>
              {article.readTime}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {article.title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Image */}
            <div className="mb-8">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover object-top rounded-xl shadow-lg"
              />
            </div>

            {/* Article Content */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="prose max-w-none">
                <div className="text-xl text-gray-600 mb-8 font-medium leading-relaxed">
                  {article.excerpt}
                </div>
                
                <div className="text-gray-700 leading-relaxed space-y-6">
                  <p>
                    La commune de Dangbo franchit une étape majeure dans l'amélioration de l'accès à l'eau potable pour tous ses habitants. Ce projet ambitieux, d'un montant de 2,5 milliards de FCFA, vise à équiper l'ensemble du territoire communal d'un système d'adduction d'eau moderne et durable.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Objectifs du projet</h3>
                  <p>
                    Ce projet s'inscrit dans la vision de développement durable de la commune et répond à plusieurs objectifs stratégiques :
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="ri-check-line text-green-600 mr-3 mt-1"></i>
                      Garantir l'accès à l'eau potable pour 100% de la population
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-green-600 mr-3 mt-1"></i>
                      Réduire les maladies hydriques de 80%
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-green-600 mr-3 mt-1"></i>
                      Améliorer les conditions de vie des femmes et des enfants
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-green-600 mr-3 mt-1"></i>
                      Favoriser le développement économique local
                    </li>
                  </ul>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Phases de réalisation</h3>
                  <p>
                    Le projet sera réalisé en trois phases distinctes sur une période de 24 mois :
                  </p>
                  
                  <div className="bg-blue-50 rounded-lg p-6 my-6">
                    <h4 className="font-bold text-blue-900 mb-3">Phase 1 : Études et préparation (6 mois)</h4>
                    <p className="text-blue-800">
                      Études techniques approfondies, consultation des communautés, et préparation du terrain.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-6 my-6">
                    <h4 className="font-bold text-green-900 mb-3">Phase 2 : Construction (15 mois)</h4>
                    <p className="text-green-800">
                      Installation des infrastructures principales, construction des stations de pompage et pose des canalisations.
                    </p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-6 my-6">
                    <h4 className="font-bold text-purple-900 mb-3">Phase 3 : Tests et mise en service (3 mois)</h4>
                    <p className="text-purple-800">
                      Tests de qualité, formation des équipes techniques et mise en service progressive.
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Impact attendu</h3>
                  <p>
                    Ce projet transformera fondamentalement la vie quotidienne des habitants de Dangbo. L'accès permanent à l'eau potable permettra :
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <li className="bg-gray-50 rounded-lg p-4">
                      <i className="ri-heart-line text-red-600 mr-3"></i>
                      <span className="font-medium">Amélioration de la santé publique</span>
                    </li>
                    <li className="bg-gray-50 rounded-lg p-4">
                      <i className="ri-time-line text-blue-600 mr-3"></i>
                      <span className="font-medium">Gain de temps pour les familles</span>
                    </li>
                    <li className="bg-gray-50 rounded-lg p-4">
                      <i className="ri-graduation-cap-line text-green-600 mr-3"></i>
                      <span className="font-medium">Amélioration de la scolarisation</span>
                    </li>
                    <li className="bg-gray-50 rounded-lg p-4">
                      <i className="ri-plant-line text-purple-600 mr-3"></i>
                      <span className="font-medium">Développement agricole</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Gallery */}
              {article.gallery && article.gallery.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Galerie photos</h3>
                  <div className="relative mb-6">
                    <img
                      src={article.gallery[currentImageIndex]}
                      alt={`Image ${currentImageIndex + 1}`}
                      className="w-full h-64 object-cover object-top rounded-lg"
                    />
                    {article.gallery.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors cursor-pointer"
                        >
                          <i className="ri-arrow-left-line"></i>
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors cursor-pointer"
                        >
                          <i className="ri-arrow-right-line"></i>
                        </button>
                      </>
                    )}
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {article.gallery.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`overflow-hidden rounded cursor-pointer ${
                          currentImageIndex === index ? 'ring-2 ring-blue-500' : ''
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Miniature ${index + 1}`}
                          className="w-full h-16 object-cover object-top hover:scale-110 transition-transform"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Mots-clés</h4>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-8 border-t border-gray-200 bg-gray-50 rounded-lg p-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-user-line text-white text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{article.author}</h4>
                    <p className="text-gray-600">Service Communication - Mairie de Dangbo</p>
                    <p className="text-sm text-gray-500 mt-1">Publié le {article.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Share */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Partager</h3>
                <div className="flex space-x-3">
                  <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                    <i className="ri-facebook-line"></i>
                  </button>
                  <button className="w-10 h-10 bg-blue-400 hover:bg-blue-500 text-white rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                    <i className="ri-twitter-line"></i>
                  </button>
                  <button className="w-10 h-10 bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                    <i className="ri-mail-line"></i>
                  </button>
                  <button className="w-10 h-10 bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                    <i className="ri-whatsapp-line"></i>
                  </button>
                </div>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Articles similaires</h3>
                <div className="space-y-4">
                  {relatedArticles.map((related) => (
                    <article key={related.id} className="group cursor-pointer">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-32 object-cover object-top rounded-lg mb-3 group-hover:scale-105 transition-transform"
                      />
                      <div className="space-y-2">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(related.category)}`}>
                          {related.category}
                        </span>
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {related.title}
                        </h4>
                        <p className="text-sm text-gray-500">{related.date}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
