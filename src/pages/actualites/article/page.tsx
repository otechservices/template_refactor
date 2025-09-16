
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../home/components/Header';
import Footer from '../../home/components/Footer';
import SEO from '../../../components/SEO';

export default function ArticlePage() {
  const { id } = useParams();
  const [article, setArticle] = useState<any>(null);
  const [relatedArticles, setRelatedArticles] = useState<any[]>([]);
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';

  const newsItems = [
    {
      id: 1,
      date: "15 Décembre 2024",
      title: "Nouvelle procédure d'agrément pour les CAPE",
      excerpt: "Le Ministère annonce la mise en place d'une nouvelle procédure simplifiée pour l'agrément des Centres d'Accueil et de Protection de l'Enfant (CAPE). Cette réforme vise à améliorer l'efficacité du processus tout en maintenant les standards de qualité.",
      category: "CAPE",
      image: "https://readdy.ai/api/search-image?query=African%20children%20in%20a%20modern%20daycare%20center%20with%20colorful%20toys%20and%20educational%20materials%2C%20bright%20and%20welcoming%20environment%2C%20professional%20caregivers%20supervising%20activities%2C%20clean%20and%20organized%20space&width=800&height=400&seq=article1&orientation=landscape",
      author: "Direction des Affaires Sociales",
      readTime: "3 min de lecture",
      content: `
        <p>Le Ministère des Affaires Sociales et de la Microfinance annonce officiellement la mise en place d'une nouvelle procédure d'agrément pour les Centres d'Accueil et de Protection de l'Enfant (CAPE). Cette réforme majeure, qui entrera en vigueur le 1er janvier 2025, vise à simplifier les démarches administratives tout en renforçant les critères de qualité et de sécurité.</p>

        <h3>Les principales innovations de cette réforme</h3>
        
        <p>La nouvelle procédure introduit plusieurs améliorations significatives :</p>
        
        <ul>
          <li><strong>Dématérialisation complète</strong> : Tous les dossiers peuvent désormais être soumis en ligne via notre plateforme dédiée</li>
          <li><strong>Délais raccourcis</strong> : Le temps de traitement passe de 6 mois à 3 mois maximum</li>
          <li><strong>Accompagnement renforcé</strong> : Chaque candidat bénéficie d'un conseiller dédié</li>
          <li><strong>Critères clarifiés</strong> : Publication d'un guide détaillé avec tous les critères d'évaluation</li>
        </ul>
        
        <h3>Impact sur les structures existantes</h3>
        
        <p>Les CAPE déjà agréés devront procéder à une mise à jour de leur dossier avant le 30 juin 2025. Cette transition se fera sans interruption de service et sera accompagnée par nos équipes techniques.</p>
        
        <p>Le Directeur des Affaires Sociales, M. Kokou AGBESSI, précise : "Cette réforme s'inscrit dans notre volonté d'améliorer continuellement la qualité des services offerts aux enfants tout en facilitant les démarches des professionnels du secteur."</p>
        
        <h3>Formation et accompagnement</h3>
        
        <p>Des sessions de formation seront organisées dans toutes les régions du pays pour accompagner les professionnels dans cette transition. Les dates et modalités d'inscription seront communiquées prochainement.</p>
        
        <p>Pour toute question relative à cette nouvelle procédure, les professionnels peuvent contacter le service dédié au 229 60 42 20 09 ou par email à cape.agrement@gouv.bj.</p>
      `
    },
    {
      id: 2,
      date: "12 Décembre 2024",
      title: "Formation obligatoire pour les directeurs de garderies",
      excerpt: "Une formation de 40 heures devient obligatoire pour tous les directeurs de garderies afin d'améliorer la qualité des services offerts aux enfants. Cette mesure entre en vigueur dès janvier 2025.",
      category: "GARDERIES",
      image: "https://readdy.ai/api/search-image?query=Professional%20training%20session%20for%20daycare%20directors%20in%20Benin%2C%20adults%20in%20formal%20attire%20attending%20educational%20workshop%2C%20modern%20conference%20room%20setting%2C%20presentation%20screen%20visible&width=800&height=400&seq=article2&orientation=landscape",
      author: "Département Formation",
      readTime: "4 min de lecture",
      content: `
        <p>À partir de janvier 2025, tous les directeurs de garderies du territoire national devront suivre une formation obligatoire de 40 heures pour maintenir leur autorisation d'exercer. Cette mesure, annoncée par le Ministère des Affaires Sociales, vise à renforcer les compétences professionnelles et améliorer la qualité des services offerts aux jeunes enfants.</p>

        <h3>Contenu de la formation</h3>
        
        <p>Le programme de formation, élaboré en collaboration avec des experts internationaux, couvre plusieurs domaines essentiels :</p>
        
        <ul>
          <li><strong>Développement de l'enfant</strong> : Psychologie de l'enfant de 0 à 6 ans (8 heures)</li>
          <li><strong>Gestion et administration</strong> : Management d'équipe, gestion financière (10 heures)</li>
          <li><strong>Sécurité et hygiène</strong> : Protocoles de sécurité, prévention des accidents (8 heures)</li>
          <li><strong>Pédagogie</strong> : Méthodes d'éveil et d'apprentissage précoce (8 heures)</li>
          <li><strong>Relation avec les familles</strong> : Communication, médiation (6 heures)</li>
        </ul>
        
        <h3>Modalités pratiques</h3>
        
        <p>La formation sera dispensée selon plusieurs modalités pour s'adapter aux contraintes des professionnels :</p>
        
        <ul>
          <li>Sessions en présentiel dans les centres régionaux</li>
          <li>Formation en ligne avec encadrement pédagogique</li>
          <li>Formule mixte (présentiel + en ligne)</li>
        </ul>
        
        <p>Le coût de la formation est pris en charge à hauteur de 80% par le Ministère, le reste étant à la charge de la structure ou du professionnel.</p>
        
        <h3>Calendrier de déploiement</h3>
        
        <p>Les inscriptions ouvriront le 15 décembre 2024. Un calendrier échelonné permettra à tous les directeurs de suivre la formation avant la date butoir du 31 décembre 2025.</p>
        
        <p>Mme Célestine DOSSOU, Responsable de la Formation, souligne : "Cette formation représente un investissement majeur dans la qualité de l'accueil de nos enfants. Nous mettons tout en œuvre pour faciliter l'accès à cette formation à tous les professionnels."</p>
      `
    }
  ];

  useEffect(() => {
    const foundArticle = newsItems.find(item => item.id === parseInt(id || ''));
    setArticle(foundArticle);
    
    if (foundArticle) {
      const related = newsItems
        .filter(item => item.id !== foundArticle.id && item.category === foundArticle.category)
        .slice(0, 3);
      setRelatedArticles(related);
    }
  }, [id]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'CAPE': return 'bg-green-100 text-green-800';
      case 'GARDERIES': return 'bg-blue-100 text-blue-800';
      case 'INSPECTION': return 'bg-orange-100 text-orange-800';
      case 'FINANCEMENT': return 'bg-purple-100 text-purple-800';
      case 'SENSIBILISATION': return 'bg-red-100 text-red-800';
      case 'PARTENARIAT': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <i className="ri-article-line text-6xl text-gray-300 mb-4"></i>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
            <p className="text-gray-600 mb-8">L'article que vous recherchez n'existe pas ou a été supprimé.</p>
            <Link
              to="/actualites"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap"
            >
              Retour aux actualités
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Helper function to convert French date format to ISO
  const convertFrenchDateToISO = (frenchDate: string) => {
    try {
      // Convert "15 Décembre 2024" to "2024-12-15T00:00:00.000Z"
      const months: { [key: string]: string } = {
        'Janvier': '01', 'Février': '02', 'Mars': '03', 'Avril': '04',
        'Mai': '05', 'Juin': '06', 'Juillet': '07', 'Août': '08',
        'Septembre': '09', 'Octobre': '10', 'Novembre': '11', 'Décembre': '12'
      };
      
      const parts = frenchDate.split(' ');
      if (parts.length === 3) {
        const day = parts[0].padStart(2, '0');
        const monthName = parts[1];
        const year = parts[2];
        const month = months[monthName];
        
        if (month) {
          return new Date(`${year}-${month}-${day}T00:00:00.000Z`).toISOString();
        }
      }
      
      // Fallback to current date if parsing fails
      return new Date().toISOString();
    } catch {
      return new Date().toISOString();
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.image,
    "author": {
      "@type": "Organization",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ministère des Affaires Sociales et de la Microfinance",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo-masm.png`
      }
    },
    "datePublished": convertFrenchDateToISO(article.date),
    "dateModified": convertFrenchDateToISO(article.date),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteUrl}/actualites/${article.id}`
    },
    "articleSection": article.category,
    "keywords": `${article.category}, protection enfant, Bénin, ${article.author.toLowerCase().replace(/\s+/g, ', ')}`
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${article.title} | Actualités CAPE et Garderies`}
        description={article.excerpt}
        keywords={`${article.category}, protection enfant, Bénin, actualités, ${article.author.toLowerCase()}`}
        ogTitle={article.title}
        ogDescription={article.excerpt}
        ogImage={article.image}
        ogType="article"
        twitterCard="summary_large_image"
        structuredData={structuredData}
      />
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative pt-20 pb-16 bg-cover bg-center"
        style={{
          backgroundImage: `url(${article.image})`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-white">
            <div className="flex items-center mb-4">
              <Link
                to="/actualites"
                className="flex items-center text-white/80 hover:text-white font-medium"
              >
                <i className="ri-arrow-left-line mr-2"></i>
                Retour aux actualités
              </Link>
            </div>
            
            <div className="mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                {article.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center">
                <i className="ri-calendar-line mr-2"></i>
                {article.date}
              </div>
              <div className="flex items-center">
                <i className="ri-user-line mr-2"></i>
                {article.author}
              </div>
              <div className="flex items-center">
                <i className="ri-time-line mr-2"></i>
                {article.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-8">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
                style={{
                  lineHeight: '1.8',
                  fontSize: '16px',
                  color: '#374151'
                }}
              />
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center flex-wrap gap-3">
                  <span className="text-gray-600 font-medium">Mots-clés :</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {article.category}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    Protection enfant
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    Bénin
                  </span>
                </div>
              </div>
              
              {/* Partage */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-medium">Partager cet article :</span>
                  <div className="flex items-center space-x-4">
                    <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <i className="ri-facebook-line"></i>
                    </button>
                    <button className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                      <i className="ri-twitter-line"></i>
                    </button>
                    <button className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                      <i className="ri-linkedin-line"></i>
                    </button>
                    <button className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                      <i className="ri-whatsapp-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles liés */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Articles similaires
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((item) => (
                <article key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover object-top"
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
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {item.excerpt}
                    </p>
                    
                    <Link
                      to={`/actualites/${item.id}`}
                      className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm whitespace-nowrap"
                    >
                      Lire l'article
                      <i className="ri-arrow-right-line ml-2"></i>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
