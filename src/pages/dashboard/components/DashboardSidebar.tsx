
interface DashboardSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function DashboardSidebar({ activeSection, onSectionChange }: DashboardSidebarProps) {
  const menuItems = [
    {
      id: 'accueil',
      label: 'Accueil',
      icon: 'ri-home-line'
    },
    {
      id: 'inscription-cape',
      label: 'Inscription CAPE',
      icon: 'ri-file-add-line'
    },
    {
      id: 'inscription-garderie',
      label: 'Inscription Garderie',
      icon: 'ri-building-line'
    },
    {
      id: 'mes-dossiers',
      label: 'Mes Dossiers',
      icon: 'ri-folder-line'
    },
    {
      id: 'assistance-en-ligne',
      label: 'Assistance en ligne',
      icon: 'ri-customer-service-line'
    },
    {
      id: 'profil',
      label: 'Mon Profil',
      icon: 'ri-user-line'
    }
  ];

  return (
    <aside className="fixed left-0 top-20 w-64 h-[calc(100vh-5rem)] bg-white shadow-lg border-r border-gray-200 overflow-y-auto">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Tableau de bord</h2>
        
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                activeSection === item.id
                  ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <i className={`${item.icon} text-xl mr-3 w-6 h-6 flex items-center justify-center`}></i>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
