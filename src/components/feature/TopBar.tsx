
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../base/Input';
import Button from '../base/Button';

export default function TopBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Fermer le menu
    setShowUserMenu(false);
    // Rediriger vers la page de connexion
    navigate('/login');
  };

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold text-gray-900">Tableau de bord</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-80">
            <Input
              placeholder="Rechercher un centre, rapport..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              icon="ri-search-line"
            />
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-notification-line"></i>
              </div>
            </Button>

            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">U</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Utilisateur</span>
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-arrow-down-s-line text-xs text-gray-500"></i>
                </div>
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Profil
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Paramètres
                  </button>
                  <hr className="my-2" />
                  <button 
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    Déconnexion
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
