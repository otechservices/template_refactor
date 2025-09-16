
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';
import SEO from '../../components/SEO';

export default function ActualitesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';

  const newsItems = [
    {
      id: 1,
      date: "15 Décembre 2024",
      title: "Nouvelle procédure d'agrément pour les CAPE",
      excerpt: "Le Ministère annonce la mise en place d'une nouvelle procédure simplifiée pour l'agrément des Centres d'Accueil et de Protection de l'Enfant (CAPE). Cette réforme vise à améliorer l'efficacité du processus tout en maintenant les standards de qualité.",
      category: "CAPE",
      image: "https://readdy.ai/api/search-image?query=African%20children%20in%20a%20modern%20daycare%20center%20with%20colorful%20toys%20and%20educational%20materials%2C%20bright%20and%20welcoming%20environment%2C%20professional%20caregivers%20supervising%20activities%2C%20clean%20and%20organized%20space&width=400&height=250&seq=news1&orientation=landscape",
      author: "Direction des Affaires Sociales",
      readTime: "3 min de lecture"
    },
    {
      id: 2,
      date: "12 Décembre 2024",
      title: "Formation obligatoire pour les directeurs de garderies",
      excerpt: "Une formation de 40 heures devient obligatoire pour tous les directeurs de garderies afin d'améliorer la qualité des services offerts aux enfants. Cette mesure entre en vigueur dès janvier 2025.",
      category: "GARDERIES",
      image: "https://readdy.ai/api/search-image?query=Professional%20training%20session%20for%20daycare%20directors%20in%20Benin%2C%20adults%20in%20formal%20attire%20attending%20educational%20workshop%2C%20modern%20conference%20room%20setting%2C%20presentation%20screen%20visible&width=400&height=250&seq=news2&orientation=landscape",
      author: "Département Formation",
      readTime: "4 min de lecture"
    },
    {
      id: 3,
      date: "10 Décembre 2024",
      title: "Inspection annuelle des structures autorisées",
      excerpt: "Les équipes du Ministère effectuent actuellement les inspections annuelles de toutes les structures de protection de l'enfant autorisées. Ces inspections garantissent le respect des normes de sécurité et de qualité.",
      category: "INSPECTION",
      image: "https://readdy.ai/api/search-image?query=Government%20officials%20conducting%20inspection%20at%20childcare%20facility%20in%20Benin%2C%20professional%20assessment%20of%20safety%20standards%2C%20modern%20African%20childcare%20center%20environment&width=400&height=250&seq=news3&orientation=landscape",
      author: "Service d'Inspection",
      readTime: "2 min de lecture"
    },
    {
      id: 4,
      date: "8 Décembre 2024",
      title: "Subventions pour l'amélioration des infrastructures",
      excerpt: "Le gouvernement alloue des fonds spéciaux pour l'amélioration des infrastructures des CAPE et garderies dans tout le pays. Un budget de 2 milliards de FCFA est prévu pour cette initiative.",
      category: "FINANCEMENT",
      image: "https://readdy.ai/api/search-image?query=Modern%20renovated%20childcare%20facility%20in%20Benin%20showing%20improved%20infrastructure%2C%20new%20playground%20equipment%2C%20updated%20buildings%20with%20children%20playing%20safely&width=400&height=250&seq=news4&orientation=landscape",
      author: "Ministère des Finances",
      readTime: "5 min de lecture"
    },
    {
      id: 5,
      date: "5 Décembre 2024",
      title: "Campagne de sensibilisation sur les droits de l'enfant",
      excerpt: "Lancement d'une grande campagne nationale de sensibilisation sur les droits de l'enfant et l'importance de la protection infantile. Cette campagne touchera toutes les communes du Bénin.",
      category: "SENSIBILISATION",
      image: "https://readdy.ai/api/search-image?query=Community%20awareness%20campaign%20about%20children%20rights%20in%20Benin%2C%20colorful%20banners%20and%20posters%2C%20community%20gathering%20with%20families%20and%20children%2C%20educational%20materials%20displayed&width=400&height=250&seq=news5&orientation=landscape",
      author: "Communication Ministérielle",
      readTime: "3 min de lecture"
    },
    {
      id: 6,
      date: "2 Décembre 2024",
      title: "Partenariat avec l'UNICEF pour la formation",
      excerpt: "Signature d'un accord de partenariat avec l'UNICEF pour renforcer les capacités du personnel des structures de protection de l'enfant. Ce partenariat prévoit la formation de 500 professionnels.",
      category: "PARTENARIAT",
      image: "https://readdy.ai/api/search-image?query=Official%20signing%20ceremony%20between%20Benin%20Ministry%20and%20UNICEF%20representatives%2C%20formal%20handshake%2C%20flags%20of%20Benin%20and%20UNICEF%20visible%2C%20professional%20government%20office%20setting&width=400&height=250&seq=news6&orientation=landscape",
      author: "Relations Internationales",
      readTime: "4 min de lecture"
    },
    {
      id: 7,
      date: "28 Novembre 2024",
      title: "Nouvelles normes de sécurité pour les garderies",
      excerpt: "Publication des nouvelles normes de sécurité applicables à toutes les garderies du territoire national. Ces normes renforcent la protection des enfants et améliorent les conditions d'accueil.",
      category: "GARDERIES",
      image: "https://readdy.ai/api/search-image?query=Safe%20and%20secure%20daycare%20environment%20in%20Benin%20with%20modern%20safety%20equipment%2C%20fire%20safety%20systems%2C%20secure%20entrances%2C%20and%20child-friendly%20safety%20measures&width=400&height=250&seq=news7&orientation=landscape",
      author: "Service Technique",
      readTime: "6 min de lecture"
    },
    {
      id: 8,
      date: "25 Novembre 2024",
      title: "Journée mondiale de l'enfance célébrée",
      excerpt: "Célébration de la Journée mondiale de l'enfance avec des activités dans tous les CAPE du pays. Plus de 10 000 enfants ont participé aux festivités organisées à cette occasion.",
      category: "ÉVÉNEMENT",
      image: "https://readdy.ai/api/search-image?query=Children%20celebrating%20World%20Children%20Day%20in%20Benin%2C%20colorful%20festivities%2C%20traditional%20African%20decorations%2C%20happy%20children%20with%20flags%20and%20balloons%2C%20outdoor%20celebration&width=400&height=250&seq=news8&orientation=landscape",
      author: "Coordination Nationale",
      readTime: "3 min de lecture"
    }
  ];

  const categories = [
    { id: 'all', name: 'Toutes les actualités', count: newsItems.length },
    { id: 'CAPE', name: 'CAPE', count: newsItems.filter(item => item.category === 'CAPE').length },
    { id: 'GARDERIES', name: 'Garderies', count: newsItems.filter(item => item.category === 'GARDERIES').length },
    { id: 'INSPECTION', name: 'Inspections', count: newsItems.filter(item => item.category === 'INSPECTION').length },
    { id: 'FINANCEMENT', name: 'Financement', count: newsItems.filter(item => item.category === 'FINANCEMENT').length },
    { id: 'SENSIBILISATION', name: 'Sensibilisation', count: newsItems.filter(item => item.category === 'SENSIBILISATION').length },
    { id: 'PARTENARIAT', name: 'Partenariats', count: newsItems.filter(item => item.category === 'PARTENARIAT').length },
    { id: 'ÉVÉNEMENT', name: 'Événements', count: newsItems.filter(item => item.category === 'ÉVÉNEMENT').length }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'CAPE': return 'bg-green-100 text-green-800';
      case 'GARDERIES': return 'bg-blue-100 text-blue-800';
      case 'INSPECTION': return 'bg-orange-100 text-orange-800';
      case 'FINANCEMENT': return 'bg-purple-100 text-purple-800';
      case 'SENSIBILISATION': return 'bg-red-100 text-red-800';
      case 'PARTENARIAT': return 'bg-indigo-100 text-indigo-800';
      case 'ÉVÉNEMENT': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredNews = selectedCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  // Helper function to convert French date format to ISO
  const convertFrenchDateToISO = (frenchDate: string) => {
    try {
      // Convert "15 Décembre 2024" to "2024-12-15"
      const months: { [key: string]: string } = {
        'Janvier': '01', 'Février': '02', 'Mars': '03', 'Avril': '04',
        'Mai': '05', 'Juin': '06', 'Juillet': '07', 'Août': '08',
        'Septembre': '09', 'Octobre': '10', 'Novembre': '11', 'Décembre': '12'
      };
      
      const parts = frenchDate.split(' ');
      if (parts.length === 3) {
        const day = parts[0].padStart(2, '0');
        const month = months[parts[1]] || '01';
        const year = parts[2];
        return new Date(`${year}-${month}-${day}`).toISOString();
      }
      
      // Fallback to current date if parsing fails
      return new Date().toISOString();
    } catch {
      return new Date().toISOString();
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Actualités - CAPE et Garderies",
    "description": "Toutes les actualités concernant les CAPE, garderies et services de protection de l'enfant au Bénin",
    "url": `${siteUrl}/actualites`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": newsItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "NewsArticle",
          "headline": item.title,
          "description": item.excerpt,
          "author": {
            "@type": "Organization",
            "name": item.author
          },
          "datePublished": convertFrenchDateToISO(item.date),
          "url": `${siteUrl}/actualites/${item.id}`,
          "image": item.image
        }
      }))
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Actualités - CAPE et Garderies | Ministère des Affaires Sociales"
        description="Restez informé des dernières nouvelles concernant les CAPE, garderies et services de protection de l'enfant au Bénin"
        keywords="actualités, CAPE, garderies, nouvelles, Bénin, protection enfant, ministère affaires sociales"
        ogTitle="Actualités - Protection de l'Enfant au Bénin"
        ogDescription="Toutes les actualités sur les services de protection de l'enfant, CAPE et garderies au Bénin"
        ogImage={`${siteUrl}/og-image-news.jpg`}
        structuredData={structuredData}
      />
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative pt-20 pb-16 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=Modern%20newsroom%20environment%20in%20Benin%20with%20journalists%20working%20on%20computers%2C%20news%20headlines%20on%20screens%2C%20professional%20media%20setting%2C%20bright%20lighting%2C%20contemporary%20office%20space&width=1920&height=600&seq=news-hero&orientation=landscape)'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Actualités
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Restez informé des dernières nouvelles concernant les CAPE, garderies et services de protection de l'enfant au Bénin
            </p>
            <div className="flex items-center justify-center space-x-4 text-blue-200">
              <i className="ri-news-line text-2xl"></i>
              <span className="text-lg">{newsItems.length} articles disponibles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filtres par catégorie */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Liste des actualités */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          {filteredNews.length === 0 ? (
            <div className="text-center py-12">
              <i className="ri-article-line text-6xl text-gray-300 mb-4"></i>
              <p className="text-gray-500 text-lg">Aucune actualité trouvée pour cette catégorie.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item) => (
                <article key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <i className="ri-calendar-line mr-2"></i>
                      {item.date}
                      <span className="mx-2">•</span>
                      <i className="ri-time-line mr-1"></i>
                      {item.readTime}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {item.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <i className="ri-user-line mr-1"></i>
                        {item.author}
                      </div>
                      
                      <Link
                        to={`/actualites/${item.id}`}
                        className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm whitespace-nowrap"
                      >
                        Lire la suite
                        <i className="ri-arrow-right-line ml-2"></i>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Pagination */}
          {filteredNews.length > 0 && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                  <i className="ri-arrow-left-line"></i>
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">3</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-mail-line text-2xl text-blue-600"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Restez informé de nos actualités
            </h2>
            <p className="text-gray-600 mb-8">
              Abonnez-vous à notre newsletter pour recevoir les dernières nouvelles et mises à jour directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap">
                S'abonner
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
