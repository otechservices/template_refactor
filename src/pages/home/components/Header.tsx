
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const [showInscriptionsMenu, setShowInscriptionsMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="w-full px-6 py-4">      
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://cape.social.gouv.bj/assets/template2/images/logo-masm.png" 
              alt="LOGO MASM" 
              className="h-12 object-contain"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-blue-600 font-medium hover:text-blue-700 cursor-pointer">ACCUEIL</Link>
            
            {/* Menu Inscriptions avec sous-menu */}
            <div className="relative group">
              <button 
                className="text-gray-700 hover:text-blue-600 cursor-pointer flex items-center"
                onClick={() => setShowInscriptionsMenu(!showInscriptionsMenu)}
              >
                INSCRIPTIONS
                <i className="ri-arrow-down-s-line ml-1"></i>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link to="/inscription-cape" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Inscription CAPE
                  </Link>
                  <Link to="/inscription-garderie" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Inscription Garderie
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Menu Délibérations avec sous-menu */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 cursor-pointer flex items-center">
                DÉLIBÉRATIONS
                <i className="ri-arrow-down-s-line ml-1"></i>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link to="/deliberations-cape" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Délibérations CAPE
                  </Link>
                  <Link to="/deliberations-garderie" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Délibérations Garderie
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Menu Structures Autorisées avec sous-menu */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 cursor-pointer flex items-center">
                STRUCTURES AUTORISÉES
                <i className="ri-arrow-down-s-line ml-1"></i>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link to="/cape-autorises" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    CAPE Autorisés
                  </Link>
                  <Link to="/garderies-autorisees" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Garderies Autorisées
                  </Link>
                </div>
              </div>
            </div>
            
            <Link to="/actualites" className="text-gray-700 hover:text-blue-600 cursor-pointer">ACTUALITÉS</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 cursor-pointer">CONTACT</Link>
          </nav>

          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <Link 
                to="/dashboard" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                Mon Espace
              </Link>
            ) : (
              <>
                <Link 
                  to="/auth/login" 
                  className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer whitespace-nowrap"
                >
                  Se connecter
                </Link>
                <Link 
                  to="/auth/register" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap"
                >
                  S'inscrire
                </Link>
              </>
            )}
          </div>

          {/* Menu mobile */}
          <button className="md:hidden text-gray-600 hover:text-gray-900">
            <i className="ri-menu-line text-2xl"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
