
import { useNavigate } from 'react-router-dom';

interface DashboardHeaderProps {
  userEmail: string;
}

export default function DashboardHeader({ userEmail }: DashboardHeaderProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="https://cape.social.gouv.bj/assets/template2/images/logo-masm.png" 
              alt="LOGO MASM" 
              className="h-10 object-contain"
            />
            <div className="border-l border-gray-300 pl-4">
              <h1 className="text-lg font-semibold text-gray-900">Espace Client</h1>
              <p className="text-sm text-gray-600">Tableau de bord personnel</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="ri-user-line text-blue-600"></i>
              </div>
              <span className="text-sm font-medium text-gray-700">{userEmail}</span>
            </div>
            
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-logout-box-line"></i>
              <span>Déconnexion</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
