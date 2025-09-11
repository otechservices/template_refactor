
import { useState, useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ArticleDetail from './components/ArticleDetail';
import { updateSEO, addJSONLD } from '../../utils/seo';

export default function Actualites() {
  const [selectedCategory, setSelectedCategory] = useState('Toutes');
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    // Update SEO
    updateSEO({
      title: 'Actualités - Mairie de Dangbo | Informations et événements',
      description: 'Découvrez les dernières actualités de la commune de Dangbo : conseil municipal, projets, événements et avis publics. Restez informé des développements locaux.',
      keywords: 'actualités Dangbo, conseil municipal, projets commune, événements Dangbo, avis publics, informations locales',
      ogTitle: 'Actualités - Mairie de Dangbo',
      ogDescription: 'Dernières actualités et événements de la commune de Dangbo au Bénin.',
      ogImage: 'https://mairiedangbo.exploitsweb.com/assets/logo.png',
      canonicalUrl: `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/actualites`
    });

    // Add JSON-LD structured data
    addJSONLD({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Actualités - Mairie de Dangbo",
      "description": "Page des actualités et événements de la commune de Dangbo",
      "url": `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/actualites`,
      "mainEntity": {
        "@type": "ItemList",
        "name": "Articles d'actualités",
        "description": "Liste des actualités de la commune de Dangbo"
      },
      "publisher": {
        "@type": "GovernmentOrganization",
        "name": "Mairie de Dangbo",
        "logo": "https://mairiedangbo.exploitsweb.com/assets/logo.png"
      }
    });
  }, []);

  const categories = ['Toutes', 'Conseil Municipal', 'Projets', 'Événements', 'Avis Publics'];

  const actualites = [
    {
      id: 1,
      title: "Lancement du projet d'adduction d'eau potable",
      excerpt: "La commune de Dangbo lance un grand projet d'adduction d'eau potable pour améliorer l'accès à l'eau dans tous les quartiers.",
      content: "Contenu détaillé de l'article...",
      date: "15 Janvier 2025",
      category: "Projets",
      image: "https://readdy.ai/api/search-image?query=water%20supply%20project%20construction%20workers%20installing%20pipes%20in%20african%20village%20dangbo%20benin%20modern%20infrastructure%20development%20clean%20simple%20background&width=400&height=300&seq=water1&orientation=landscape",
      author: "Service Communication",
      readTime: "5 min",
      tags: ["eau", "infrastructure", "développement", "santé"],
      gallery: [
        "https://readdy.ai/api/search-image?query=water%20supply%20project%20construction%20workers%20installing%20pipes%20in%20african%20village%20dangbo%20benin%20modern%20infrastructure%20development%20clean%20simple%20background&width=600&height=400&seq=water1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=clean%20water%20distribution%20african%20community%20dangbo%20benin%20water%20access%20project%20clean%20background&width=600&height=400&seq=water2&orientation=landscape",
        "https://readdy.ai/api/search-image?query=water%20treatment%20facility%20african%20village%20dangbo%20benin%20modern%20infrastructure%20clean%20background&width=600&height=400&seq=water3&orientation=landscape"
      ],
      featured: true
    },
    {
      id: 2,
      title: "Conseil Municipal du 20 Janvier 2025",
      excerpt: "Ordre du jour du prochain conseil municipal : budget 2025, projets d'infrastructure et aménagement urbain.",
      content: "Contenu détaillé de l'article...",
      date: "10 Janvier 2025",
      category: "Conseil Municipal",
      image: "https://readdy.ai/api/search-image?query=municipal%20council%20meeting%20African%20officials%20discussing%20documents%20in%20modern%20meeting%20room%20dangbo%20benin%20government%20building%20clean%20professional%20background&width=400&height=300&seq=council1&orientation=landscape",
      author: "Secrétariat Municipal",
      readTime: "3 min",
      tags: ["conseil", "budget", "gouvernance", "démocratie"]
    },
    {
      id: 3,
      title: "Festival culturel de Dangbo 2025",
      excerpt: "Venez découvrir la richesse culturelle de Dangbo lors du festival annuel qui se déroulera du 5 au 7 février 2025.",
      content: "Contenu détaillé de l'article...",
      date: "8 Janvier 2025",
      category: "Événements",
      image: "https://readdy.ai/api/search-image?query=african%20cultural%20festival%20traditional%20dancers%20colorful%20costumes%20dangbo%20benin%20celebration%20community%20gathering%20vibrant%20clean%20background&width=400&height=300&seq=festival1&orientation=landscape",
      author: "Service Culturel",
      readTime: "4 min",
      tags: ["culture", "festival", "tradition", "communauté"]
    },
    {
      id: 4,
      title: "Appel d'offres pour la construction du marché central",
      excerpt: "La mairie lance un appel d'offres pour la construction d'un nouveau marché central moderne.",
      content: "Contenu détaillé de l'article...",
      date: "5 Janvier 2025",
      category: "Avis Publics",
      image: "https://readdy.ai/api/search-image?query=modern%20african%20market%20construction%20site%20architectural%20plans%20dangbo%20benin%20commercial%20building%20development%20clean%20professional%20background&width=400&height=300&seq=market1&orientation=landscape",
      author: "Service Technique",
      readTime: "6 min",
      tags: ["marché", "construction", "économie", "commerce"]
    },
    {
      id: 5,
      title: "Programme de vaccination contre la COVID-19",
      excerpt: "Campagne de vaccination gratuite dans tous les centres de santé de la commune.",
      content: "Contenu détaillé de l'article...",
      date: "3 Janvier 2025",
      category: "Avis Publics",
      image: "https://readdy.ai/api/search-image?query=vaccination%20campaign%20African%20healthcare%20workers%20medical%20tent%20dangbo%20benin%20community%20health%20program%20clean%20modern%20background&width=400&height=300&seq=vaccine1&orientation=landscape",
      author: "Service Santé",
      readTime: "4 min",
      tags: ["santé", "vaccination", "prévention", "covid"]
    },
    {
      id: 6,
      title: "Réhabilitation des routes communales",
      excerpt: "Début des travaux de réhabilitation des principales routes de la commune pour améliorer la mobilité.",
      content: "Contenu détaillé de l'article...",
      date: "28 Décembre 2024",
      category: "Projets",
      image: "https://readdy.ai/api/search-image?query=road%20rehabilitation%20construction%20workers%20paving%20asphalt%20dangbo%20benin%20infrastructure%20development%20modern%20equipment%20clean%20background&width=400&height=300&seq=road1&orientation=landscape",
      author: "Service Technique",
      readTime: "5 min",
      tags: ["routes", "infrastructure", "transport", "développement"]
    }
  ];

  const filteredActualites = selectedCategory === 'Toutes' 
    ? actualites 
    : actualites.filter(article => article.category === selectedCategory);

  const featuredArticle = actualites.find(article => article.featured);
  const regularArticles = actualites.filter(article => !article.featured);

  if (selectedArticle) {
    return (
      <div>
        <Header />
        <ArticleDetail 
          article={selectedArticle} 
          onBack={() => setSelectedArticle(null)} 
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Actualités</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Restez informé des dernières nouvelles et événements de votre commune
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
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

      {/* Featured Article */}
      {featuredArticle && selectedCategory === 'Toutes' && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-64 md:h-full object-cover object-top"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                    À la Une
                  </span>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium ml-2">
                    {featuredArticle.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {featuredArticle.title}
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 flex items-center">
                    <i className="ri-time-line mr-2"></i>
                    {featuredArticle.date}
                  </span>
                  <button 
                    onClick={() => setSelectedArticle(featuredArticle)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Lire la suite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Articles Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredActualites.filter(article => !article.featured || selectedCategory !== 'Toutes').map((article) => (
            <div key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group" onClick={() => setSelectedArticle(article)}>
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    article.category === 'Conseil Municipal' ? 'bg-green-100 text-green-600' :
                    article.category === 'Projets' ? 'bg-blue-100 text-blue-600' :
                    article.category === 'Événements' ? 'bg-purple-100 text-purple-600' :
                    'bg-orange-100 text-orange-600'
                  }`}>
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm flex items-center">
                    <i className="ri-time-line mr-2"></i>
                    {article.date}
                  </span>
                  <span className="text-blue-600 hover:text-blue-700 font-medium whitespace-nowrap">
                    Lire plus →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
