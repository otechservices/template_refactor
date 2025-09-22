
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
  isMobileSidebarOpen: boolean;
  setIsMobileSidebarOpen: (open: boolean) => void;
  isSidebarCollapsed: boolean;
  setIsSidebarCollapsed: (collapsed: boolean) => void;
}

export default function Sidebar({
  activeMenu,
  setActiveMenu,
  isMobileSidebarOpen,
  setIsMobileSidebarOpen,
  isSidebarCollapsed,
  setIsSidebarCollapsed,
}: SidebarProps) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Tableau de bord',
      icon: 'ri-dashboard-line',
      color: 'text-primary-600',
    },
    {
      id: 'gestion',
      label: 'Gestion des dossiers',
      icon: 'ri-folder-line',
      color: 'text-secondary-600',
      submenu: [
        { id: 'testaments', label: 'Testaments', icon: 'ri-file-text-line' },
        { id: 'declarations', label: 'Déclarations', icon: 'ri-file-list-line' },
        { id: 'donations', label: 'Donations', icon: 'ri-gift-line' },
        { id: 'recherche', label: 'Recherche avancée', icon: 'ri-search-line' },
      ],
    },
    {
      id: 'ressources',
      label: 'Ressources',
      icon: 'ri-database-line',
      color: 'text-green-600',
      submenu: [
        { id: 'depenses', label: 'Dépenses', icon: 'ri-money-dollar-circle-line' },
        { id: 'notaires', label: 'Notaires', icon: 'ri-briefcase-line' },
        { id: 'personnes', label: 'Personnes', icon: 'ri-team-line' },
      ],
    },
    {
      id: 'administration',
      label: 'Administration',
      icon: 'ri-settings-line',
      color: 'text-purple-600',
      submenu: [
        { id: 'users', label: 'Utilisateurs', icon: 'ri-user-line' },
        { id: 'roles', label: 'Rôles', icon: 'ri-shield-user-line' },
        { id: 'profiles', label: 'Profils', icon: 'ri-user-settings-line' },
        { id: 'permissions', label: 'Permissions', icon: 'ri-lock-line' },
        { id: 'parametres', label: 'Paramètres', icon: 'ri-settings-3-line' },
      ],
    },
  ];

  // Fermer le menu mobile quand on sélectionne un élément
  const handleMenuClick = (menuId: string) => {
    setActiveMenu(menuId);
    setIsMobileSidebarOpen(false);
    
    // Fermer les sous-menus si on clique sur un élément principal
    if (!menuItems.find(item => item.submenu?.some(sub => sub.id === menuId))) {
      setOpenSubmenu(null);
    }
  };

  const handleSubmenuToggle = (menuId: string) => {
    setOpenSubmenu(openSubmenu === menuId ? null : menuId);
  };

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    // Simuler la déconnexion
    localStorage.removeItem('user_token');
    localStorage.removeItem('user_data');
    
    // Rediriger vers la page de connexion
    navigate('/login');
    
    setShowLogoutModal(false);
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  // Auto-ouvrir le sous-menu si un élément y est actif
  useEffect(() => {
    const activeParent = menuItems.find(item => 
      item.submenu?.some(sub => sub.id === activeMenu)
    );
    if (activeParent) {
      setOpenSubmenu(activeParent.id);
    }
  }, [activeMenu]);

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className={`flex items-center px-4 py-6 border-b border-accent-300 ${isSidebarCollapsed ? 'justify-center' : ''}`}>
        <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-3">
          <span className="text-white font-bold text-sm">FDV</span>
        </div>
        {!isSidebarCollapsed && (
          <div>
            <h1 className="text-lg font-bold text-text-dark">FDV System</h1>
            <p className="text-xs text-text-muted">Gestion Testaments</p>
          </div>
        )}
      </div>

      {/* Bouton de réduction (desktop seulement) */}
      <div className="hidden lg:flex justify-end px-2 py-2">
        <button
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className="p-2 text-text-muted hover:text-text-dark hover:bg-accent-100 rounded-lg transition-colors cursor-pointer"
          title={isSidebarCollapsed ? 'Étendre le menu' : 'Réduire le menu'}
        >
          <i className={`ri-${isSidebarCollapsed ? 'menu-unfold' : 'menu-fold'}-line text-lg`}></i>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.id}>
            {item.submenu ? (
              <>
                {/* Menu avec sous-menu */}
                <button
                  onClick={() => handleSubmenuToggle(item.id)}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer group ${
                    openSubmenu === item.id || item.submenu.some(sub => sub.id === activeMenu)
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-text-muted hover:text-text-dark hover:bg-accent-100'
                  }`}
                  title={isSidebarCollapsed ? item.label : ''}
                >
                  <i className={`${item.icon} text-lg ${item.color} mr-3 flex-shrink-0`}></i>
                  {!isSidebarCollapsed && (
                    <>
                      <span className="flex-1 text-left">{item.label}</span>
                      <i className={`ri-arrow-${openSubmenu === item.id ? 'down' : 'right'}-s-line text-sm transition-transform`}></i>
                    </>
                  )}
                </button>

                {/* Sous-menu */}
                {!isSidebarCollapsed && openSubmenu === item.id && (
                  <div className="ml-6 mt-2 space-y-1">
                    {item.submenu.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => handleMenuClick(subItem.id)}
                        className={`w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors cursor-pointer ${
                          activeMenu === subItem.id
                            ? 'bg-primary-100 text-primary-700 font-medium'
                            : 'text-text-muted hover:text-text-dark hover:bg-accent-100'
                        }`}
                      >
                        <i className={`${subItem.icon} text-base mr-3 flex-shrink-0`}></i>
                        <span>{subItem.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              /* Menu simple */
              <button
                onClick={() => handleMenuClick(item.id)}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer group ${
                  activeMenu === item.id
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-text-muted hover:text-text-dark hover:bg-accent-100'
                }`}
                title={isSidebarCollapsed ? item.label : ''}
              >
                <i className={`${item.icon} text-lg ${item.color} mr-3 flex-shrink-0`}></i>
                {!isSidebarCollapsed && <span>{item.label}</span>}
              </button>
            )}

            {/* Tooltips pour mode réduit */}
            {isSidebarCollapsed && item.submenu && (
              <div className="relative group">
                <div className="absolute left-full top-0 ml-2 px-3 py-2 bg-text-dark text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                  {item.label}
                  <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-2 h-2 bg-text-dark rotate-45"></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className={`px-4 py-4 border-t border-accent-300 ${isSidebarCollapsed ? 'text-center' : ''}`}>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
            <span className="text-white text-sm font-medium">U</span>
          </div>
          {!isSidebarCollapsed && (
            <div className="flex-1">
              <p className="text-sm font-medium text-text-dark">Utilisateur</p>
              <p className="text-xs text-text-muted">En ligne</p>
            </div>
          )}
        </div>
        {!isSidebarCollapsed && (
          <button 
            onClick={handleLogout}
            className="w-full mt-3 flex items-center justify-center px-3 py-2 text-sm text-text-muted hover:text-text-dark hover:bg-accent-100 rounded-lg transition-colors cursor-pointer"
          >
            <i className="ri-logout-box-line mr-2"></i>
            Déconnexion
          </button>
        )}
      </div>

      {/* Modal de confirmation de déconnexion */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-100 rounded-full mb-4">
                <i className="ri-logout-box-line text-red-600 text-2xl"></i>
              </div>
              
              <h3 className="text-lg font-medium text-text-dark text-center mb-2">
                Confirmer la déconnexion
              </h3>
              
              <p className="text-text-muted text-center mb-6">
                Êtes-vous sûr de vouloir vous déconnecter ? Vous devrez vous reconnecter pour accéder à nouveau au système.
              </p>
              
              <div className="flex gap-3">
                <button
                  onClick={cancelLogout}
                  className="flex-1 px-4 py-2 text-text-muted hover:text-text-dark border border-accent-300 rounded-lg transition-colors cursor-pointer"
                >
                  Annuler
                </button>
                <button
                  onClick={confirmLogout}
                  className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors cursor-pointer"
                >
                  Se déconnecter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Sidebar Desktop */}
      <div
        className={`hidden lg:flex flex-col bg-gradient-to-b from-slate-50 to-slate-100 border-r border-slate-200 transition-all duration-300 ${
          isSidebarCollapsed ? 'w-16' : 'w-64'
        }`}
      >
        <SidebarContent />
      </div>

      {/* Sidebar Mobile */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-slate-50 to-slate-100 border-r border-slate-200 transform transition-transform duration-300 lg:hidden ${
          isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <SidebarContent />
      </div>
    </>
  );
}
