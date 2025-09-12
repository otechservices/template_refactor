
import { Link } from 'react-router-dom';

export default function News() {
  const newsItems = [
    {
      id: 1,
      date: "15 Décembre 2024",
      title: "Nouvelle procédure d'agrément pour les CAPE",
      excerpt: "Le Ministère annonce la mise en place d'une nouvelle procédure simplifiée pour l'agrément des Centres d'Accueil et de Protection de l'Enfant (CAPE).",
      category: "CAPE",
      image: "https://readdy.ai/api/search-image?query=African%20children%20in%20a%20modern%20daycare%20center%20with%20colorful%20toys%20and%20educational%20materials%2C%20bright%20and%20welcoming%20environment%2C%20professional%20caregivers%20supervising%20activities%2C%20clean%20and%20organized%20space&width=400&height=250&seq=news1&orientation=landscape"
    },
    {
      id: 2,
      date: "12 Décembre 2024",
      title: "Formation obligatoire pour les directeurs de garderies",
      excerpt: "Une formation de 40 heures devient obligatoire pour tous les directeurs de garderies afin d'améliorer la qualité des services offerts aux enfants.",
      category: "GARDERIES",
      image: "https://readdy.ai/api/search-image?query=Professional%20training%20session%20for%20daycare%20directors%20in%20Benin%2C%20adults%20in%20formal%20attire%20attending%20educational%20workshop%2C%20modern%20conference%20room%20setting%2C%20presentation%20screen%20visible&width=400&height=250&seq=news2&orientation=landscape"
    },
    {
      id: 3,
      date: "10 Décembre 2024",
      title: "Inspection annuelle des structures autorisées",
      excerpt: "Les équipes du Ministère effectuent actuellement les inspections annuelles de toutes les structures de protection de l'enfant autorisées.",
      category: "INSPECTION",
      image: "https://readdy.ai/api/search-image?query=Government%20officials%20conducting%20inspection%20at%20childcare%20facility%20in%20Benin%2C%20professional%20assessment%20of%20safety%20standards%2C%20modern%20African%20childcare%20center%20environment&width=400&height=250&seq=news3&orientation=landscape"
    },
    {
      id: 4,
      date: "8 Décembre 2024",
      title: "Subventions pour l'amélioration des infrastructures",
      excerpt: "Le gouvernement alloue des fonds spéciaux pour l'amélioration des infrastructures des CAPE et garderies dans tout le pays.",
      category: "FINANCEMENT",
      image: "https://readdy.ai/api/search-image?query=Modern%20renovated%20childcare%20facility%20in%20Benin%20showing%20improved%20infrastructure%2C%20new%20playground%20equipment%2C%20updated%20buildings%20with%20children%20playing%20safely&width=400&height=250&seq=news4&orientation=landscape"
    },
    {
      id: 5,
      date: "5 Décembre 2024",
      title: "Campagne de sensibilisation sur les droits de l'enfant",
      excerpt: "Lancement d'une grande campagne nationale de sensibilisation sur les droits de l'enfant et l'importance de la protection infantile.",
      category: "SENSIBILISATION",
      image: "https://readdy.ai/api/search-image?query=Community%20awareness%20campaign%20about%20children%20rights%20in%20Benin%2C%20colorful%20banners%20and%20posters%2C%20community%20gathering%20with%20families%20and%20children%2C%20educational%20materials%20displayed&width=400&height=250&seq=news5&orientation=landscape"
    },
    {
      id: 6,
      date: "2 Décembre 2024",
      title: "Partenariat avec l'UNICEF pour la formation",
      excerpt: "Signature d'un accord de partenariat avec l'UNICEF pour renforcer les capacités du personnel des structures de protection de l'enfant.",
      category: "PARTENARIAT",
      image: "https://readdy.ai/api/search-image?query=Official%20signing%20ceremony%20between%20Benin%20Ministry%20and%20UNICEF%20representatives%2C%20formal%20handshake%2C%20flags%20of%20Benin%20and%20UNICEF%20visible%2C%20professional%20government%20office%20setting&width=400&height=250&seq=news6&orientation=landscape"
    }
  ];

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

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <i className="ri-news-line text-2xl text-orange-500 mr-3"></i>
          <h2 className="text-2xl font-bold text-gray-900">ACTUALITÉS SUR LES CAPE ET GARDERIES</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
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
                  className="flex items-center text-green-600 hover:text-green-700 font-medium text-sm whitespace-nowrap"
                >
                  Lire la suite
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/actualites"
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium whitespace-nowrap"
          >
            Voir toutes les actualités
          </Link>
        </div>
      </div>
    </section>
  );
}