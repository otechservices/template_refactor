
import { Link } from 'react-router-dom';

export default function NewsSection() {
  const news = [
    {
      id: 1,
      title: "Nouveau projet d'éclairage public",
      excerpt: "La mairie lance un ambitieux programme de modernisation de l'éclairage public pour améliorer la sécurité...",
      date: "15 Janvier 2025",
      category: "Projets",
      image: "https://readdy.ai/api/search-image?query=Modern%20street%20lighting%20project%20in%20African%20town%2C%20LED%20street%20lamps%2C%20night%20illumination%2C%20urban%20development%2C%20municipal%20infrastructure%2C%20modern%20lighting%20system&width=400&height=250&seq=news1&orientation=landscape"
    },
    {
      id: 2,
      title: "Campagne de vaccination gratuite",
      excerpt: "Organisation d'une campagne de vaccination gratuite pour tous les enfants de 0 à 5 ans dans notre commune...",
      date: "12 Janvier 2025",
      category: "Santé",
      image: "https://readdy.ai/api/search-image?query=Healthcare%20vaccination%20campaign%20in%20Africa%2C%20medical%20staff%2C%20children%20vaccination%2C%20health%20center%2C%20community%20health%20program%2C%20medical%20professionals%20helping%20children&width=400&height=250&seq=news2&orientation=landscape"
    },
    {
      id: 3,
      title: "Marché moderne de Dangbo",
      excerpt: "Inauguration prochaine du nouveau marché moderne équipé de toutes les commodités pour nos commerçants...",
      date: "10 Janvier 2025",
      category: "Économie",
      image: "https://readdy.ai/api/search-image?query=Modern%20African%20market%20building%2C%20covered%20market%20structure%2C%20vendors%20selling%20fresh%20produce%2C%20bustling%20marketplace%2C%20contemporary%20market%20architecture%2C%20commercial%20development&width=400&height=250&seq=news3&orientation=landscape"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Actualités du Maire
            </h2>
            <div className="w-20 h-1 bg-blue-600"></div>
          </div>
          <Link
            to="/actualites"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer"
          >
            Voir toutes les actualités →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <Link
              key={article.id}
              to="/actualites"
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group block"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <i className="ri-calendar-line mr-2"></i>
                  {article.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="mt-4 flex items-center text-blue-600 font-medium">
                  <span className="mr-2">Lire la suite</span>
                  <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
