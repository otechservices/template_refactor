
import React, { useState } from 'react';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';

const mockCategories = [
  {
    id: 'getting-started',
    title: 'Prise en main',
    icon: 'ri-rocket-line',
    articles: [
      { title: 'Guide d\'installation', views: 1234, lastUpdate: '2024-01-15' },
      { title: 'Premier pas avec CAPE', views: 2456, lastUpdate: '2024-01-14' },
      { title: 'Configuration initiale', views: 876, lastUpdate: '2024-01-12' }
    ]
  },
  {
    id: 'user-management',
    title: 'Gestion des utilisateurs',
    icon: 'ri-user-line',
    articles: [
      { title: 'Créer un utilisateur', views: 1567, lastUpdate: '2024-01-18' },
      { title: 'Gestion des rôles', views: 1123, lastUpdate: '2024-01-16' },
      { title: 'Permissions et accès', views: 987, lastUpdate: '2024-01-15' }
    ]
  },
  {
    id: 'cape-management',
    title: 'Gestion des CAPE',
    icon: 'ri-building-line',
    articles: [
      { title: 'Créer un nouveau centre', views: 2234, lastUpdate: '2024-01-19' },
      { title: 'Processus d\'agrément', views: 1876, lastUpdate: '2024-01-17' },
      { title: 'Suivi et évaluation', views: 1456, lastUpdate: '2024-01-16' }
    ]
  },
  {
    id: 'reports',
    title: 'Rapports et statistiques',
    icon: 'ri-bar-chart-line',
    articles: [
      { title: 'Générer des rapports', views: 1345, lastUpdate: '2024-01-18' },
      { title: 'Tableaux de bord', views: 1123, lastUpdate: '2024-01-17' },
      { title: 'Export de données', views: 896, lastUpdate: '2024-01-15' }
    ]
  }
];

export default function Documentation() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <span className="text-gray-700 hover:text-blue-600 font-medium">Aide</span>
          </li>
          <li>
            <div className="flex items-center">
              <i className="ri-arrow-right-s-line text-gray-400"></i>
              <span className="ml-1 text-gray-500 font-medium">Documentation</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="space-y-6">
        {/* En-tête avec recherche */}
        <Card>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <i className="ri-book-line text-2xl text-blue-600"></i>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Centre de Documentation</h1>
            <p className="text-gray-600 mb-6">
              Trouvez toutes les informations nécessaires pour utiliser efficacement le système CAPE
            </p>
            <div className="max-w-md mx-auto">
              <Input
                placeholder="Rechercher dans la documentation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon="ri-search-line"
              />
            </div>
          </div>
        </Card>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-file-text-line text-green-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">47</div>
            <div className="text-sm text-gray-600">Articles disponibles</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-folder-line text-blue-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">8</div>
            <div className="text-sm text-gray-600">Catégories</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-eye-line text-purple-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">15.2k</div>
            <div className="text-sm text-gray-600">Vues totales</div>
          </Card>
          <Card className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-time-line text-orange-600"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">20 Jan</div>
            <div className="text-sm text-gray-600">Dernière mise à jour</div>
          </Card>
        </div>

        {/* Catégories de documentation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mockCategories.map((category) => (
            <Card key={category.id}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className={`${category.icon} text-blue-600`}></i>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.articles.map((article, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{article.title}</div>
                      <div className="text-sm text-gray-600">
                        {article.views} vues • Mise à jour le {article.lastUpdate}
                      </div>
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-arrow-right-line text-gray-400"></i>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <Button variant="outline" size="sm" className="w-full">
                  Voir tous les articles ({category.articles.length + 2})
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Articles populaires */}
        <Card title="Articles les plus consultés">
          <div className="space-y-3">
            <div className="flex items-center gap-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">Guide complet d'utilisation du système CAPE</div>
                <div className="text-sm text-gray-600">3,247 vues • Mise à jour le 18 Jan 2024</div>
              </div>
              <Button variant="ghost" size="sm">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-external-link-line"></i>
                </div>
              </Button>
            </div>

            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">Processus d'agrément des centres</div>
                <div className="text-sm text-gray-600">2,876 vues • Mise à jour le 17 Jan 2024</div>
              </div>
              <Button variant="ghost" size="sm">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-external-link-line"></i>
                </div>
              </Button>
            </div>

            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">Gestion des utilisateurs et permissions</div>
                <div className="text-sm text-gray-600">2,456 vues • Mise à jour le 16 Jan 2024</div>
              </div>
              <Button variant="ghost" size="sm">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-external-link-line"></i>
                </div>
              </Button>
            </div>
          </div>
        </Card>

        {/* Actions rapides */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-video-line text-green-600"></i>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tutoriels vidéo</h3>
              <p className="text-sm text-gray-600 mb-4">Apprenez avec nos guides vidéo</p>
              <Button variant="outline" size="sm">
                Voir les vidéos
              </Button>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-download-line text-blue-600"></i>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Guide PDF</h3>
              <p className="text-sm text-gray-600 mb-4">Manuel utilisateur complet</p>
              <Button variant="outline" size="sm">
                Télécharger
              </Button>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-question-answer-line text-purple-600"></i>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">FAQ</h3>
              <p className="text-sm text-gray-600 mb-4">Questions fréquemment posées</p>
              <Button variant="outline" size="sm">
                Consulter la FAQ
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
