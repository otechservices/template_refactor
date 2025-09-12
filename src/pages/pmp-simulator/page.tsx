import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function PmpSimulator() {
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const navigate = useNavigate();

  const examModes = [
    {
      id: 'complet',
      title: 'Examen complet PMP',
      description: '180 questions - 230 minutes (timing officiel)',
      questions: 180,
      duration: '230 min',
      badge: 'Réel',
      badgeColor: 'bg-red-500'
    },
    {
      id: 'entrainement',
      title: "Test d'entraînement",
      description: '50 questions - 90 minutes (confortable)',
      questions: 50,
      duration: '90 min',
      badge: 'Moyen',
      badgeColor: 'bg-orange-500'
    },
    {
      id: 'rapide',
      title: 'Quiz rapide',
      description: '20 questions - 35 minutes (détente)',
      questions: 20,
      duration: '35 min',
      badge: 'Facile',
      badgeColor: 'bg-yellow-500'
    },
    {
      id: 'domaine',
      title: 'Par domaine',
      description: '30 questions - 55 minutes (approfondi)',
      questions: 30,
      duration: '55 min',
      badge: 'Variable',
      badgeColor: 'bg-purple-500'
    }
  ];

  const recentResults = [
    { name: 'Test complet', date: '2024-01-18', score: 82, status: 'Passé', color: 'text-green-600' },
    { name: 'Entraînement', date: '2024-01-16', score: 76, status: 'Passé', color: 'text-green-600' },
    { name: 'Quiz rapide', date: '2024-01-10', score: 68, status: 'Échoué', color: 'text-red-600' },
    { name: 'Par domaine', date: '2024-01-08', score: 85, status: 'Passé', color: 'text-green-600' }
  ];

  const domainPerformances = [
    { name: 'Personnes', score: 78, questions: 42, color: 'bg-orange-400' },
    { name: 'Processus', score: 82, questions: 50, color: 'bg-blue-400' },
    { name: 'Environnement', score: 75, questions: 88, color: 'bg-green-400' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r border-gray-200">
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-white text-sm font-bold">SC</span>
            </div>
            <span className="font-bold text-gray-800">SICA CONSEIL</span>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => navigate('/dashboard')}
              className="w-full flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
            >
              <i className="ri-dashboard-line w-5 h-5 flex items-center justify-center"></i>
              <span>Tableau de bord</span>
            </button>
            <button
              onClick={() => navigate('/project-generator')}
              className="w-full flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
            >
              <i className="ri-file-text-line w-5 h-5 flex items-center justify-center"></i>
              <span>Générateur de projets</span>
            </button>
            <Link to="/pmp-simulator" className="flex items-center space-x-3 px-4 py-3 bg-orange-50 text-orange-600 rounded-lg">
              <i className="ri-graduation-cap-line w-5 h-5 flex items-center justify-center"></i>
              <span>Formation PMP</span>
            </Link>
            <Link to="/pmp-history" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">
              <i className="ri-line-chart-line w-5 h-5 flex items-center justify-center"></i>
              <span>Simulateur PMP</span>
            </Link>
            <div className="w-full flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
              <i className="ri-bar-chart-line w-5 h-5 flex items-center justify-center"></i>
              <span>Progression</span>
            </div>
            <div className="w-full flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
              <i className="ri-settings-line w-5 h-5 flex items-center justify-center"></i>
              <span>Paramètres</span>
            </div>
          </nav>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <i className="ri-trophy-line text-orange-500"></i>
              <span className="text-sm font-medium text-orange-700">Recommencer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Simulateur d'examen PMP</h1>
              <p className="text-gray-600 mt-1">Préparez-vous efficacement avec des questions authentiques du PMI Institute</p>
            </div>

            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate('/pmp-history')}
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer whitespace-nowrap"
              >
                <i className="ri-file-chart-line"></i>
                <span>Mes résultats</span>
              </button>
              <button 
                onClick={() => navigate('/pmp-training')}
                className="flex items-center space-x-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-graduation-cap-line"></i>
                <span>Formation</span>
              </button>
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Tests réalisés</span>
                <i className="ri-file-list-line text-orange-500"></i>
              </div>
              <div className="text-3xl font-bold text-gray-800">24</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Score moyen</span>
                <i className="ri-trophy-line text-yellow-500"></i>
              </div>
              <div className="text-3xl font-bold text-gray-800">78%</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Meilleur score</span>
                <i className="ri-trending-up-line text-green-500"></i>
              </div>
              <div className="text-3xl font-bold text-gray-800">92%</div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 text-sm">Temps total</span>
                <i className="ri-time-line text-blue-500"></i>
              </div>
              <div className="text-3xl font-bold text-gray-800">18h</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Exam Modes */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Choisir un mode d'examen</h2>
              <p className="text-gray-600 mb-6">Sélectionnez le type de test qui correspond à vos objectifs</p>

              <div className="space-y-4 mb-6">
                {examModes.map((mode) => (
                  <div
                    key={mode.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-all hover:border-orange-300 ${
                      selectedMode === mode.id ? 'border-orange-500 bg-orange-50' : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedMode(mode.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-800">{mode.title}</h3>
                      <span className={`px-2 py-1 text-xs text-white rounded-full ${mode.badgeColor}`}>
                        {mode.badge}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{mode.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <i className="ri-question-line"></i>
                        <span>{mode.questions} questions</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <i className="ri-time-line"></i>
                        <span>{mode.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 cursor-pointer whitespace-nowrap font-medium">
                <i className="ri-play-fill mr-2"></i>
                Commencer l'examen
              </button>
            </div>

            {/* Performance by Domain */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Performance par domaine</h2>
              <p className="text-gray-600 mb-6">Vos scores selon les 3 domaines du PMP</p>

              <div className="space-y-6 mb-6">
                {domainPerformances.map((domain, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-800">{domain.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-gray-800">{domain.score}%</span>
                        <span className="text-sm text-gray-500">({domain.questions} questions)</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`${domain.color} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${domain.score}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between mt-2 text-sm">
                      <span className="text-gray-500">Seuil de réussite: 61%</span>
                      <button className="text-orange-500 hover:text-orange-600 cursor-pointer">
                        <i className="ri-refresh-line mr-1"></i>
                        Réviser
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <i className="ri-information-line text-blue-500"></i>
                  <span className="font-medium text-gray-800">Entraînement par domaine</span>
                </div>
                <p className="text-sm text-gray-600">
                  Concentrez-vous sur vos points faibles pour améliorer votre score global
                </p>
              </div>
            </div>
          </div>

          {/* Recent Results */}
          <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Résultats récents</h2>
              <button className="text-orange-500 hover:text-orange-600 cursor-pointer text-sm">
                Voir tous les résultats
              </button>
            </div>
            <p className="text-gray-600 mb-6">Vos derniers tests et performances</p>

            <div className="space-y-4">
              {recentResults.map((result, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full ${result.score >= 75 ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <div>
                      <h3 className="font-medium text-gray-800">{result.name}</h3>
                      <p className="text-sm text-gray-500">{result.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl font-bold text-gray-800">{result.score}%</span>
                    <span className={`px-3 py-1 text-sm rounded-full ${
                      result.score >= 75 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {result.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips Section */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-4">
              <i className="ri-lightbulb-line text-yellow-600 text-xl"></i>
              <h3 className="text-lg font-bold text-yellow-800">Conseils pour réussir</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-600">•</span>
                  <span className="text-sm text-yellow-800">Visez un score minimum de 61% dans chaque domaine</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-600">•</span>
                  <span className="text-sm text-yellow-800">Pratiquez régulièrement avec des tests courts</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-600">•</span>
                  <span className="text-sm text-yellow-800">Analysez vos erreurs après chaque test</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-600">•</span>
                  <span className="text-sm text-yellow-800">Gérez votre temps : ~1,3 min par question</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-600">•</span>
                  <span className="text-sm text-yellow-800">Lisez attentivement chaque question</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-yellow-600">•</span>
                  <span className="text-sm text-yellow-800">Utilisez la méthode d'élimination</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link to="/pmp-history" className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap">
              <i className="ri-history-line w-4 h-4 flex items-center justify-center"></i>
              <span>Voir l'historique complet</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
