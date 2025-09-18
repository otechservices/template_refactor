
import React from 'react';
import Card from '../../components/base/Card';
import Button from '../../components/base/Button';
import { useNavigate } from 'react-router-dom';

export default function TableauBord() {
  const navigate = useNavigate();

  const statsCards = [
    {
      title: 'Recommandations en cours',
      value: '15',
      bgColor: 'bg-cyan-500',
      textColor: 'text-white',
      path: '/cape-recommendations'
    },
    {
      title: 'Contrôles effectués',
      value: '128',
      bgColor: 'bg-red-500',
      textColor: 'text-white',
      path: '/controle-capes-autorises'
    },
    {
      title: 'CAPE autorisés',
      value: '74',
      bgColor: 'bg-green-500',
      textColor: 'text-white',
      path: '/controle-capes-autorises'
    },
    {
      title: 'CAPE inscrits',
      value: '45',
      bgColor: 'bg-gray-500',
      textColor: 'text-white',
      path: '/dossiers-cape-inscrire'
    },
    {
      title: 'Dossiers à valider',
      value: '8',
      bgColor: 'bg-orange-500',
      textColor: 'text-white',
      path: '/a-valider'
    }
  ];

  const activitesRecentes = [
    {
      id: 1,
      type: 'Nouvelle demande',
      description: 'Orphelinat Mère Brandis - Demande d\'autorisation',
      heure: 'Il y a 2 heures',
      icon: 'ri-file-add-line',
      iconColor: 'text-blue-500'
    },
    {
      id: 2,
      type: 'Visite programmée',
      description: 'Centre ASSAFWA - Visite de terrain prévue',
      heure: 'Il y a 4 heures',
      icon: 'ri-calendar-line',
      iconColor: 'text-green-500'
    },
    {
      id: 3,
      type: 'Rapport transmis',
      description: 'Orphelinat Saint Jean Paul II - Rapport mensuel',
      heure: 'Il y a 6 heures',
      icon: 'ri-file-text-line',
      iconColor: 'text-purple-500'
    },
    {
      id: 4,
      type: 'Validation requise',
      description: 'Centre OHANA - Dossier en attente de validation',
      heure: 'Il y a 1 jour',
      icon: 'ri-alert-line',
      iconColor: 'text-orange-500'
    }
  ];

  const actionsRapides = [
    { title: 'Nouvelle visite', icon: 'ri-add-circle-line', path: '/visite-terrain' },
    { title: 'Valider dossier', icon: 'ri-check-line', path: '/a-valider' },
    { title: 'Gérer sessions', icon: 'ri-calendar-line', path: '/sessions' },
    { title: 'Voir statistiques', icon: 'ri-bar-chart-line', path: '/statistiques' }
  ];

  return (
    <div className="bg-gray-50">
      {/* Fil d'ariane */}
      <div className="bg-white border-b px-6 py-3">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-blue-600 cursor-pointer" onClick={() => navigate('/cape')}>CAPE</span>
          <i className="ri-arrow-right-s-line text-gray-400"></i>
          <span className="text-gray-600">Tableau de bord</span>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Cartes statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {statsCards.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} ${card.textColor} rounded-lg p-6 cursor-pointer hover:opacity-90 transition-opacity`}
              onClick={() => navigate(card.path)}
            >
              <div className="text-2xl font-bold mb-2">{card.value}</div>
              <div className="text-sm opacity-90">{card.title}</div>
              <div className="mt-3 text-right">
                <span className="text-xs underline">Voir plus</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Activités récentes */}
          <Card title="Activités récentes">
            <div className="space-y-4">
              {activitesRecentes.map((activite) => (
                <div key={activite.id} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 ${activite.iconColor}`}>
                    <i className={activite.icon}></i>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{activite.type}</div>
                    <div className="text-sm text-gray-600">{activite.description}</div>
                    <div className="text-xs text-gray-400 mt-1">{activite.heure}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <Button variant="outline" size="sm" className="w-full">
                Voir toutes les activités
              </Button>
            </div>
          </Card>

          {/* Actions rapides */}
          <Card title="Actions rapides">
            <div className="grid grid-cols-2 gap-4">
              {actionsRapides.map((action, index) => (
                <button
                  key={index}
                  onClick={() => navigate(action.path)}
                  className="p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors cursor-pointer text-center"
                >
                  <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2 text-blue-600">
                    <i className={action.icon}></i>
                  </div>
                  <div className="text-sm font-medium text-gray-700">{action.title}</div>
                </button>
              ))}
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 pt-8">
          Copyright 2020
        </div>
      </div>
    </div>
  );
}
