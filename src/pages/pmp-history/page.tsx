
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PmpHistory = () => {
  const [filterType, setFilterType] = useState('all');
  
  const historyData = [
    {
      id: 1,
      type: 'Complet',
      date: '2024-01-15',
      score: 82,
      duration: 180,
      status: 'Réussi'
    },
    {
      id: 2,
      type: 'Entraînement',
      date: '2024-01-14',
      score: 76,
      duration: 45,
      status: 'Réussi'
    },
    {
      id: 3,
      type: 'Quiz',
      date: '2024-01-10',
      score: 68,
      duration: 20,
      status: 'Échoué'
    },
    {
      id: 4,
      type: 'Domaine',
      date: '2024-01-08',
      score: 85,
      duration: 35,
      status: 'Réussi'
    },
    {
      id: 5,
      type: 'Entraînement',
      date: '2024-01-06',
      score: 72,
      duration: 50,
      status: 'Réussi'
    },
    {
      id: 6,
      type: 'Quiz',
      date: '2024-01-03',
      score: 64,
      duration: 18,
      status: 'Réussi'
    },
    {
      id: 7,
      type: 'Complet',
      date: '2024-01-01',
      score: 58,
      duration: 175,
      status: 'Échoué'
    }
  ];

  const chartData = [
    { month: 1, score: 58 },
    { month: 2, score: 64 },
    { month: 3, score: 68 },
    { month: 4, score: 78 },
    { month: 5, score: 72 },
    { month: 6, score: 82 }
  ];

  const domainScores = [
    { name: 'Personnes', score: 78 },
    { name: 'Processus', score: 85 },
    { name: 'Environnement', score: 72 }
  ];

  const getStatusColor = (status: string) => {
    return status === 'Réussi' ? 'text-green-600' : 'text-red-600';
  };

  const getStatusBadge = (status: string) => {
    return status === 'Réussi' 
      ? 'bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium'
      : 'bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation latérale */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-10">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
              SC
            </div>
            <span className="text-xl font-bold text-gray-800">SICA CONSEIL</span>
          </div>
          
          <nav className="space-y-2">
            <Link to="/dashboard" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">
              <i className="ri-dashboard-line w-5 h-5 flex items-center justify-center"></i>
              <span>Tableau de bord</span>
            </Link>
            <Link to="/project-generator" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">
              <i className="ri-folder-line w-5 h-5 flex items-center justify-center"></i>
              <span>Générateur de projets</span>
            </Link>
            <Link to="/pmp-simulator" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">
              <i className="ri-graduation-cap-line w-5 h-5 flex items-center justify-center"></i>
              <span>Formation PMP</span>
            </Link>
            <Link to="/pmp-history" className="flex items-center space-x-3 px-4 py-3 bg-orange-50 text-orange-600 rounded-lg">
              <i className="ri-line-chart-line w-5 h-5 flex items-center justify-center"></i>
              <span>Simulateur PMP</span>
            </Link>
            <Link to="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">
              <i className="ri-bar-chart-line w-5 h-5 flex items-center justify-center"></i>
              <span>Progression</span>
            </Link>
            <Link to="#" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">
              <i className="ri-settings-line w-5 h-5 flex items-center justify-center"></i>
              <span>Paramètres</span>
            </Link>
          </nav>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="ml-64 p-8">
        {/* En-tête */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Historique des résultats</h1>
            <p className="text-gray-600">Suivez votre progression et analysez vos performances</p>
          </div>
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <i className="ri-filter-line w-4 h-4 flex items-center justify-center"></i>
              <span>Filtrer</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <i className="ri-download-line w-4 h-4 flex items-center justify-center"></i>
              <span>Exporter</span>
            </button>
          </div>
        </div>

        {/* Statistiques rapides */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 text-sm">Tests réalisés</span>
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <i className="ri-file-text-line text-orange-600 w-4 h-4 flex items-center justify-center"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">7</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 text-sm">Taux de réussite</span>
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <i className="ri-trophy-line text-yellow-600 w-4 h-4 flex items-center justify-center"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">71%</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 text-sm">Score moyen</span>
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <i className="ri-line-chart-line text-green-600 w-4 h-4 flex items-center justify-center"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">72%</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 text-sm">Meilleur score</span>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="ri-medal-line text-blue-600 w-4 h-4 flex items-center justify-center"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">85%</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 text-sm">Temps total</span>
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <i className="ri-time-line text-purple-600 w-4 h-4 flex items-center justify-center"></i>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">9h</div>
          </div>
        </div>

        {/* Graphiques */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Évolution des scores */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Évolution des scores</h3>
            <p className="text-gray-600 text-sm mb-6">Votre progression au fil des tests</p>
            
            <div className="relative h-64">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                <defs>
                  <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#f97316', stopOpacity: 0.3 }} />
                    <stop offset="100%" style={{ stopColor: '#f97316', stopOpacity: 0 }} />
                  </linearGradient>
                </defs>
                
                {/* Grille */}
                <g className="text-gray-400 text-xs">
                  {[0, 25, 50, 75, 100].map((y) => (
                    <g key={y}>
                      <line x1="50" y1={180 - (y * 1.3)} x2="350" y2={180 - (y * 1.3)} stroke="#e5e7eb" strokeWidth="1" />
                      <text x="40" y={185 - (y * 1.3)} textAnchor="end" fill="#9ca3af">{y}</text>
                    </g>
                  ))}
                  {[1, 2, 3, 4, 5, 6].map((x) => (
                    <text key={x} x={50 + (x * 50)} y="195" textAnchor="middle" fill="#9ca3af">{x}</text>
                  ))}
                </g>
                
                {/* Ligne de tendance */}
                <path
                  d="M 100 122 L 150 116 L 200 112 L 250 102 L 300 108 L 350 87"
                  stroke="#f97316"
                  strokeWidth="3"
                  fill="none"
                />
                
                {/* Points */}
                {chartData.map((point, index) => (
                  <circle
                    key={index}
                    cx={50 + (point.month * 50)}
                    cy={180 - (point.score * 1.3)}
                    r="4"
                    fill="#f97316"
                    className="cursor-pointer"
                  />
                ))}
              </svg>
            </div>
            
            <p className="text-xs text-gray-500 mt-4">L'axe rouge : taux de réussite (61%)</p>
          </div>

          {/* Performance par domaine */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance par domaine</h3>
            <p className="text-gray-600 text-sm mb-6">Scores moyens selon les domaines PMP</p>
            
            <div className="space-y-4">
              {domainScores.map((domain, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 w-24">{domain.name}</span>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-gray-200 rounded-full h-8">
                      <div
                        className="bg-orange-500 h-8 rounded-full flex items-center justify-end pr-3"
                        style={{ width: `${domain.score}%` }}
                      >
                        <span className="text-white text-xs font-medium">{domain.score}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Historique détaillé */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Historique détaillé</h3>
            <p className="text-gray-600 text-sm">Tous vos tests avec résultats complets</p>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              {historyData.map((test) => (
                <div key={test.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full ${test.status === 'Réussi' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <div>
                      <div className="font-medium text-gray-900">{test.type}</div>
                      <div className="text-sm text-gray-500">{test.date}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className={`text-lg font-bold ${getStatusColor(test.status)}`}>{test.score}%</div>
                      <div className="text-xs text-gray-500">Score</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-900">{test.duration} min</div>
                      <div className="text-xs text-gray-500">Durée</div>
                    </div>
                    
                    <div className={getStatusBadge(test.status)}>
                      {test.status}
                    </div>
                    
                    <button className="px-4 py-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors whitespace-nowrap">
                      Détails
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors whitespace-nowrap">
                Faire un nouveau test
              </button>
            </div>
          </div>
        </div>

        {/* Conseils pour progresser */}
        <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
              <i className="ri-lightbulb-line text-yellow-600 w-4 h-4 flex items-center justify-center"></i>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Conseils pour progresser</h4>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Points forts identifiés :</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Excellence performance en 'Processus' (85%)</li>
                    <li>• Progression constante sur les derniers tests</li>
                    <li>• Bonne gestion du temps d'examen</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-800 mb-2">Axes d'amélioration :</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Renforcer le domaine 'Environnement' (72%)</li>
                    <li>• Pratiquer plus sur tests complets</li>
                    <li>• Réviser les concepts de leadership</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PmpHistory;
