
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '../base/ThemeToggle';

interface HeaderProps {
  currentPage?: string;
}

export function Header({ currentPage = '' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { path: '/', label: 'Accueil' },
    { path: '/missions', label: 'Nos missions' },
    { path: '/formations', label: 'Formations' },
    { path: '/project-generator', label: 'Auto-génération de projets' },
    { path: '/expertise', label: 'Notre expertise' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 px-4 py-3 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="https://static.readdy.ai/image/2ce43ce334b232046883f79f4f3df46a/b61b027bf4d42918b4ae2ae5a241e2c2.jfif" 
            alt="SICA CONSEIL" 
            className="h-10 w-auto cursor-pointer"
            onClick={() => navigate('/')}
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`cursor-pointer transition-colors ${
                currentPage === item.path
                  ? 'text-orange-500 font-medium'
                  : 'text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400'
              }`}
            >
              {item.label}
            </button>
          ))}
          <ThemeToggle />
          <button
            onClick={() => navigate('/login')}
            className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors"
          >
            Connexion
          </button>
          <button 
            onClick={() => navigate('/dashboard')}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 cursor-pointer whitespace-nowrap transition-colors"
          >
            Accès gratuit
          </button>
        </div>

        <button 
          className="md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="ri-menu-line text-2xl text-gray-600 dark:text-gray-300"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col space-y-3 pt-4">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setIsMenuOpen(false);
                }}
                className={`cursor-pointer text-left transition-colors ${
                  currentPage === item.path
                    ? 'text-orange-500 font-medium'
                    : 'text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300">Mode sombre</span>
              <ThemeToggle />
            </div>
            <button
              onClick={() => {
                navigate('/login');
                setIsMenuOpen(false);
              }}
              className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer text-left transition-colors"
            >
              Connexion
            </button>
            <button 
              onClick={() => {
                navigate('/dashboard');
                setIsMenuOpen(false);
              }}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 cursor-pointer whitespace-nowrap w-fit transition-colors"
            >
              Accès gratuit
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
