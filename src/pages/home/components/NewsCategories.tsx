
import { useState } from 'react';

export default function NewsCategories() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Toutes les actualités', icon: 'ri-newspaper-line', count: 12 },
    { id: 'articles', name: 'Articles', icon: 'ri-article-line', count: 5 },
    { id: 'themes', name: 'Thèmes', icon: 'ri-hashtag', count: 3 },
    { id: 'elus', name: 'Élus et Secrétariat', icon: 'ri-government-line', count: 2 },
    { id: 'development', name: 'Développement communal', icon: 'ri-building-line', count: 4 },
    { id: 'announcements', name: 'Avis & Communiqués', icon: 'ri-megaphone-line', count: 6 },
    { id: 'partners', name: 'Partenaires', icon: 'ri-handshake-line', count: 2 },
    { id: 'media', name: 'Presse & Médias', icon: 'ri-camera-line', count: 3 }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Actualités par Catégorie
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Retrouvez toutes les informations importantes classées par thématique
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <i className={`${category.icon} text-lg`}></i>
              <span>{category.name}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                activeCategory === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-gray-50 rounded-2xl p-12 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-newspaper-line text-3xl text-blue-600"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Actualités en cours de mise à jour
            </h3>
            <p className="text-gray-600 mb-8">
              Nos équipes travaillent activement pour publier les dernières actualités de la commune. 
              Revenez bientôt pour découvrir toutes les nouvelles informations.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer">
              Être notifié des mises à jour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
