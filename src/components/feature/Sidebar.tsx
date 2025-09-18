
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  path?: string;
  children?: MenuItem[];
}

const menuItems = [
  {
    title: 'Accueil',
    icon: 'ri-home-line',
    path: '/accueil',
    active: false
  },
  {
    id: 'tableau-bord',
    label: 'Tableau de bord',
    icon: 'ri-dashboard-line',
    path: '/'
  },
  {
    id: 'controle-capes',
    label: 'Contrôle des CAPE autorisés',
    icon: 'ri-shield-check-line',
    path: '/controle-capes-autorises'
  },
  {
    id: 'liste-membres',
    label: 'Liste des membres',
    icon: 'ri-team-line',
    path: '/liste-membres'
  },
  {
    id: 'traitement-demandes',
    label: 'TRAITEMENT DES DEMANDES',
    icon: 'ri-file-list-line',
    children: [
      { id: 'a-valider', label: 'À valider', icon: 'ri-checkbox-line', path: '/a-valider' },
      { id: 'parcours-traitement', label: 'Parcours traitement', icon: 'ri-route-line', path: '/parcours-traitement' },
      { id: 'dossiers-cape-inscrire', label: 'Dossiers CAPE à inscrire en session', icon: 'ri-file-add-line', path: '/dossiers-cape-inscrire' },
      { id: 'dossiers-garderie-inscrire', label: 'Dossiers garderie à inscrire en session', icon: 'ri-group-line', path: '/dossiers-garderie-inscrire' }
    ]
  },
  {
    id: 'agrements-existants',
    label: 'AGRÉMENTS EXISTANTS',
    icon: 'ri-award-line',
    children: [
      { id: 'agrements-valider', label: 'Agréments à valider', icon: 'ri-check-line', path: '/agrements-valider' }
    ]
  },
  {
    id: 'gestion-sessions',
    label: 'GESTION DES SESSIONS',
    icon: 'ri-calendar-line',
    children: [
      { id: 'creation-session', label: 'Création de session', icon: 'ri-add-circle-line', path: '/creation-session' },
      { id: 'creation-membres', label: 'Création des membres', icon: 'ri-user-add-line', path: '/creation-membres' }
    ]
  },
  {
    id: 'gestion-sanctions',
    label: 'GESTION DES SANCTIONS',
    icon: 'ri-shield-line',
    children: [
      { id: 'sanctions', label: 'Sanctions', icon: 'ri-error-warning-line', path: '/sanctions' }
    ]
  },
  {
    id: 'gestion-rapports',
    label: 'GESTION DES RAPPORTS',
    icon: 'ri-folder-line',
    children: [
      { id: 'visite-terrain', label: 'Visite de terrain', icon: 'ri-map-pin-line', path: '/visite-terrain' },
      { id: 'cape', label: 'CAPE', icon: 'ri-file-text-line', path: '/cape' },
      { id: 'garderie', label: 'Garderie', icon: 'ri-group-line', path: '/garderie' }
    ]
  },
  {
    id: 'recommandations',
    label: 'Recommandations',
    icon: 'ri-lightbulb-line',
    children: [
      { id: 'cape-rec', label: 'CAPE', icon: 'ri-file-text-line', path: '/cape-recommendations' },
      { id: 'garderie-rec', label: 'Garderie', icon: 'ri-group-line', path: '/garderie-recommendations' }
    ]
  },
  {
    id: 'rapports-activite',
    label: "Rapports d'activité",
    icon: 'ri-bar-chart-line',
    children: [
      { id: 'cape-ra', label: 'CAPE', icon: 'ri-file-text-line', path: '/cape-reports' },
      { id: 'garderie-ra', label: 'Garderie', icon: 'ri-group-line', path: '/garderie-reports' }
    ]
  },
  {
    id: 'statistiques',
    label: 'STATISTIQUES',
    icon: 'ri-pie-chart-line',
    children: [
      { id: 'cape-stats', label: 'CAPE', icon: 'ri-file-text-line', path: '/cape-stats' },
      { id: 'garderie-stats', label: 'Garderie', icon: 'ri-group-line', path: '/garderie-stats' }
    ]
  },
  {
    id: 'recherche',
    label: 'RECHERCHE',
    icon: 'ri-search-line',
    children: [
      { id: 'cape-search', label: 'CAPE', icon: 'ri-file-text-line', path: '/cape-search' },
      { id: 'garderie-search', label: 'Garderie', icon: 'ri-group-line', path: '/garderie-search' }
    ]
  },
  {
    id: 'parametres',
    label: 'PARAMÈTRES',
    icon: 'ri-settings-line',
    children: [
      { id: 'utilisateurs', label: 'Utilisateurs', icon: 'ri-user-line', path: '/utilisateurs' },
      { id: 'roles', label: 'Rôles et permissions', icon: 'ri-shield-user-line', path: '/roles' },
      { id: 'configuration', label: 'Configuration', icon: 'ri-tools-line', path: '/configuration' }
    ]
  },
  {
    id: 'aide',
    label: 'AIDE',
    icon: 'ri-question-line',
    children: [
      { id: 'documentation', label: 'Documentation', icon: 'ri-book-line', path: '/documentation' },
      { id: 'support', label: 'Support technique', icon: 'ri-customer-service-line', path: '/support' },
      { id: 'formation', label: 'Formation', icon: 'ri-graduation-cap-line', path: '/formation' }
    ]
  }
];

export default function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>(['traitement-demandes', 'gestion-rapports']);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleItemClick = (item: MenuItem) => {
    if (item.children) {
      toggleExpanded(item.id);
    } else if (item.path) {
      navigate(item.path);
    }
  };

  const isActive = (path?: string) => {
    return path === location.pathname;
  };

  return (
    <div className="w-64 bg-slate-800 text-white min-h-screen overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <i className="ri-building-line text-white"></i>
          </div>
          <span className="font-bold text-xl">CAPE</span>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => handleItemClick(item)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors cursor-pointer whitespace-nowrap ${
                  item.children ? 'text-gray-300 hover:text-white hover:bg-slate-700' : 
                  isActive(item.path) ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                    <i className={`${item.icon} text-sm`}></i>
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                {item.children && (
                  <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                    <i className={`ri-arrow-right-s-line text-xs transition-transform ${
                      expandedItems.includes(item.id) ? 'rotate-90' : ''
                    }`}></i>
                  </div>
                )}
              </button>

              {item.children && expandedItems.includes(item.id) && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.children.map((child) => (
                    <button
                      key={child.id}
                      onClick={() => handleItemClick(child)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors cursor-pointer whitespace-nowrap ${
                        isActive(child.path) ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white hover:bg-slate-700'
                      }`}
                    >
                      <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                        <i className={`${child.icon} text-xs`}></i>
                      </div>
                      <span className="text-sm">{child.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
