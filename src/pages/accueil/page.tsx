
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';

export default function Accueil() {
  const navigate = useNavigate();

  const statistiques = [
    {
      titre: 'CAPE Autorisés',
      valeur: '74',
      icone: 'ri-building-line',
      couleur: 'text-blue-600',
      bgCouleur: 'bg-blue-100',
      description: 'Centres d\'accueil préscolaire actifs'
    },
    {
      titre: 'Enfants Accueillis',
      valeur: '2,847',
      icone: 'ri-group-line',
      couleur: 'text-green-600',
      bgCouleur: 'bg-green-100',
      description: 'Total des enfants dans nos centres'
    },
    {
      titre: 'Personnel Éducatif',
      valeur: '425',
      icone: 'ri-user-3-line',
      couleur: 'text-purple-600',
      bgCouleur: 'bg-purple-100',
      description: 'Éducateurs et personnel spécialisé'
    },
    {
      titre: 'Visites ce Mois',
      valeur: '23',
      icone: 'ri-calendar-check-line',
      couleur: 'text-orange-600',
      bgCouleur: 'bg-orange-100',
      description: 'Inspections et visites de terrain'
    }
  ];

  const actionsRapides = [
    {
      titre: 'Gestion CAPE',
      description: 'Consulter et gérer les centres d\'accueil préscolaire',
      icone: 'ri-building-2-line',
      couleur: 'bg-blue-600',
      path: '/cape'
    },
    {
      titre: 'Gestion Garderies',
      description: 'Superviser les garderies et crèches',
      icone: 'ri-home-heart-line',
      couleur: 'bg-green-600',
      path: '/garderie'
    },
    {
      titre: 'Visites de Terrain',
      description: 'Planifier et suivre les inspections',
      icone: 'ri-map-pin-line',
      couleur: 'bg-purple-600',
      path: '/visite-terrain'
    },
    {
      titre: 'Statistiques',
      description: 'Analyser les données et performances',
      icone: 'ri-bar-chart-line',
      couleur: 'bg-orange-600',
      path: '/statistiques'
    }
  ];

  const actualites = [
    {
      id: 1,
      titre: 'Nouvelle réglementation CAPE 2024',
      description: 'Mise à jour des normes de sécurité et d\'hygiène pour tous les centres',
      date: '15 Janvier 2024',
      type: 'Important',
      couleur: 'text-red-600'
    },
    {
      id: 2,
      titre: 'Formation du personnel éducatif',
      description: 'Programme de formation continue pour améliorer la qualité de l\'accueil',
      date: '12 Janvier 2024',
      type: 'Information',
      couleur: 'text-blue-600'
    },
    {
      id: 3,
      titre: 'Campagne de sensibilisation',
      description: 'Lancement de la campagne sur les droits de l\'enfant',
      date: '10 Janvier 2024',
      type: 'Événement',
      couleur: 'text-green-600'
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* En-tête de bienvenue */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8">
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold mb-4">
              Bienvenue dans le Système de Gestion CAPE
            </h1>
            <p className="text-blue-100 text-lg mb-6">
              Plateforme de gestion et de supervision des Centres d'Accueil Préscolaire et des garderies en Côte d'Ivoire
            </p>
            <div className="flex gap-4">
              <Button 
                variant="secondary" 
                onClick={() => navigate('/tableau-bord')}
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                Accéder au Tableau de Bord
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Guide d'utilisation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Statistiques principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statistiques.map((stat, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-shadow">
            <div className={`w-16 h-16 ${stat.bgCouleur} rounded-full flex items-center justify-center mx-auto mb-4`}>
              <i className={`${stat.icone} text-2xl ${stat.couleur}`}></i>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.valeur}</div>
            <div className="text-lg font-medium text-gray-700 mb-1">{stat.titre}</div>
            <div className="text-sm text-gray-500">{stat.description}</div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Actions rapides */}
        <div className="lg:col-span-2">
          <Card>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Actions Rapides</h2>
              <p className="text-gray-600">Accédez rapidement aux principales fonctionnalités</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {actionsRapides.map((action, index) => (
                <button
                  key={index}
                  onClick={() => navigate(action.path)}
                  className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-200 text-left group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${action.couleur} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <i className={`${action.icone} text-xl text-white`}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {action.titre}
                      </h3>
                      <p className="text-sm text-gray-600">{action.description}</p>
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center text-gray-400 group-hover:text-blue-600 transition-colors">
                      <i className="ri-arrow-right-line"></i>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </Card>
        </div>

        {/* Actualités et notifications */}
        <div>
          <Card>
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Actualités</h2>
              <p className="text-gray-600 text-sm">Dernières informations importantes</p>
            </div>
            <div className="space-y-4">
              {actualites.map((actualite) => (
                <div key={actualite.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${actualite.couleur} bg-opacity-10`}>
                      {actualite.type}
                    </span>
                    <span className="text-xs text-gray-500">{actualite.date}</span>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">{actualite.titre}</h4>
                  <p className="text-sm text-gray-600">{actualite.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <Button variant="outline" size="sm" className="w-full">
                Voir toutes les actualités
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Section d'aide rapide */}
      <div className="mt-8">
        <Card>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-question-line text-2xl text-blue-600"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Besoin d'aide ?</h3>
            <p className="text-gray-600 mb-4">
              Consultez notre documentation ou contactez le support technique pour toute assistance
            </p>
            <div className="flex justify-center gap-3">
              <Button variant="outline" size="sm">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-book-line"></i>
                </div>
                Documentation
              </Button>
              <Button variant="outline" size="sm">
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-customer-service-line"></i>
                </div>
                Support
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>© 2024 Ministère de la Femme, de la Famille et de l'Enfant - République de Côte d'Ivoire</p>
        <p className="mt-1">Système de Gestion des Centres d'Accueil Préscolaire (CAPE)</p>
      </div>
    </div>
  );
}
