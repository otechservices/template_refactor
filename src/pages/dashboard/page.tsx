import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ThemeToggle } from '../../components/base/ThemeToggle';

export default function Dashboard() {
  const [selectedMenu, setSelectedMenu] = useState('dashboard');
  const navigate = useNavigate();

  const menuItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: 'ri-dashboard-line' },
    { id: 'projects', label: 'Générateur de projets', icon: 'ri-file-text-line' },
    { id: 'formation', label: 'Formation PMP', icon: 'ri-book-line' },
    { id: 'simulator', label: 'Simulateur PMP', icon: 'ri-flask-line' },
    { id: 'progress', label: 'Progression', icon: 'ri-bar-chart-line' },
    { id: 'settings', label: 'Paramètres', icon: 'ri-settings-line' }
  ];

  const progressData = [
    { label: 'Formation PMP', progress: 53, color: 'bg-orange-500' },
    { label: 'Simulateur d\'examen', progress: 78, color: 'bg-orange-500' },
    { label: 'Projets générés', progress: 100, color: 'bg-orange-500' }
  ];

  const recentActivities = [
    {
      icon: 'ri-check-line',
      title: 'Module "Gestion des risques" complété',
      time: 'Il y a 2 heures',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      iconColor: 'text-green-600'
    },
    {
      icon: 'ri-file-line',
      title: 'Projet "Application mobile" généré',
      time: 'Hier',
      bgColor: 'bg-orange-100 dark:bg-orange-900/30',
      iconColor: 'text-orange-600'
    },
    {
      icon: 'ri-award-line',
      title: 'Test PMP réalisé - Score: 82%',
      time: 'Il y a 2 jours',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
      iconColor: 'text-yellow-600'
    },
    {
      icon: 'ri-download-line',
      title: 'Certificat de formation téléchargé',
      time: 'Il y a 3 jours',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      iconColor: 'text-blue-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex transition-colors">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-sm border-r border-gray-200 dark:border-gray-700 transition-colors">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <img 
              src="https://static.readdy.ai/image/2ce43ce334b232046883f79f4f3df46a/b61b027bf4d42918b4ae2ae5a241e2c2.jfif" 
              alt="SICA CONSEIL" 
              className="h-10 w-auto"
            />
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedMenu(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors cursor-pointer ${
                  selectedMenu === item.id
                    ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 border-r-2 border-orange-500'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <i className={`${item.icon} text-lg`}></i>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
            <Link to="/pmp-simulator" className="flex items-center space-x-3 px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/30 hover:text-orange-600 rounded-lg transition-colors">
              <i className="ri-graduation-cap-line w-5 h-5 flex items-center justify-center"></i>
              <span>Formation PMP</span>
            </Link>
            <Link to="/pmp-history" className="flex items-center space-x-3 px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/30 hover:text-orange-600 rounded-lg transition-colors">
              <i className="ri-line-chart-line w-5 h-5 flex items-center justify-center"></i>
              <span>Simulateur PMP</span>
            </Link>
          </nav>

          <div className="absolute bottom-6 left-6">
            <button className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-orange-500 cursor-pointer transition-colors">
              <i className="ri-logout-box-line text-lg"></i>
              <span>Déconnexion</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-8 py-6 transition-colors">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white transition-colors">Tableau de bord</h1>
              <p className="text-gray-600 dark:text-gray-300 mt-1 transition-colors">Votre plateforme complète pour la gestion de projet et la certification PMP</p>
            </div>
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <button className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer transition-colors">
                <i className="ri-user-line text-gray-600 dark:text-gray-300"></i>
              </button>
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 rounded-xl p-8 mb-8 text-white transition-colors">
            <h2 className="text-3xl font-bold mb-2">Bienvenue sur SICA CONSEIL !</h2>
            <p className="text-orange-100 mb-6">Votre plateforme complète pour la gestion de projet et la certification PMP</p>
            <div className="flex space-x-4">
              <button 
                onClick={() => navigate('/project-generator')}
                className="bg-orange-500 dark:bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-600 dark:hover:bg-orange-700 cursor-pointer whitespace-nowrap flex items-center transition-colors"
              >
                <i className="ri-add-line mr-2"></i>
                Créer un projet
              </button>
              <button 
                onClick={() => navigate('/project-generator')}
                className="border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 cursor-pointer whitespace-nowrap flex items-center transition-colors"
              >
                <i className="ri-file-text-line mr-2"></i>
                Mes projets
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">Projets générés</p>
                  <p className="text-3xl font-bold text-gray-800 dark:text-white mt-1 transition-colors">12</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <i className="ri-file-text-line text-2xl text-orange-500"></i>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">Modules complétés</p>
                  <p className="text-3xl font-bold text-gray-800 dark:text-white mt-1 transition-colors">8<span className="text-lg text-gray-500 dark:text-gray-400">/15</span></p>
                </div>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <i className="ri-book-line text-2xl text-orange-500"></i>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">Score moyen PMP</p>
                  <p className="text-3xl font-bold text-gray-800 dark:text-white mt-1 transition-colors">78%</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <i className="ri-line-chart-line text-2xl text-orange-500"></i>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm transition-colors">Temps d'étude</p>
                  <p className="text-3xl font-bold text-gray-800 dark:text-white mt-1 transition-colors">24h</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <i className="ri-time-line text-2xl text-orange-500"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Progress Section */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 flex items-center transition-colors">
                <i className="ri-bar-chart-line text-orange-500 mr-2"></i>
                Votre progression
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors">Suivez vos progrès dans la formation PMP</p>

              <div className="space-y-6">
                {progressData.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium transition-colors">{item.label}</span>
                      <span className="text-gray-600 dark:text-gray-400 font-semibold transition-colors">{item.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 transition-colors">
                      <div
                        className={`${item.color} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => navigate('/pmp-history')}
                className="w-full mt-6 text-orange-500 border border-orange-200 dark:border-orange-700 py-2 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/30 cursor-pointer whitespace-nowrap transition-colors"
              >
                Voir les détails
              </button>
            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 transition-colors">Activité récente</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors">Vos dernières actions sur la plateforme</p>

              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-10 h-10 ${activity.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <i className={`${activity.icon} ${activity.iconColor}`}></i>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 dark:text-white font-medium transition-colors">{activity.title}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 transition-colors">Actions rapides</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors">Accédez rapidement aux fonctionnalités principales</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="flex flex-col items-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-orange-200 dark:hover:border-orange-700 hover:bg-orange-50 dark:hover:bg-orange-900/30 cursor-pointer transition-colors">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-3">
                  <i className="ri-file-add-line text-2xl text-orange-500"></i>
                </div>
                <span className="font-semibold text-gray-800 dark:text-white transition-colors">Nouveau projet</span>
              </button>

              <button className="flex flex-col items-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-orange-200 dark:hover:border-orange-700 hover:bg-orange-50 dark:hover:bg-orange-900/30 cursor-pointer transition-colors">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-3">
                  <i className="ri-play-line text-2xl text-orange-500"></i>
                </div>
                <span className="font-semibold text-gray-800 dark:text-white transition-colors">Continuer la formation</span>
              </button>

              <button className="flex flex-col items-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-orange-200 dark:hover:border-orange-700 hover:bg-orange-50 dark:hover:bg-orange-900/30 cursor-pointer transition-colors">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-3">
                  <i className="ri-flask-line text-2xl text-orange-500"></i>
                </div>
                <span className="font-semibold text-gray-800 dark:text-white transition-colors">Test PMP</span>
              </button>

              {/* New Simulateur PMP card */}
              <div 
                onClick={() => navigate('/pmp-simulator')}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600 hover:shadow-md dark:hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors">Simulateur PMP</h3>
                  <i className="ri-brain-line text-2xl text-purple-500"></i>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors">Tests d'entraînement pour la certification PMP</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 transition-colors">
                  <span>24 tests réalisés</span>
                  <span>78% score moyen</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}