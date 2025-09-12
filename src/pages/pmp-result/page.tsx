
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function PmpResult() {
  const navigate = useNavigate();
  
  // Données simulées du test
  const testResult = {
    score: 0,
    totalQuestions: 0,
    correctAnswers: 0,
    timeUsed: '55min',
    successRate: 'NaN%',
    testType: 'Quiz',
    status: 'Échec',
    threshold: 61
  };

  const domainPerformance = [
    { domain: 'Personnes', score: 0, color: 'text-blue-500' },
    { domain: 'Processus', score: 0, color: 'text-green-500' },
    { domain: 'Environnement', score: 0, color: 'text-purple-500' }
  ];

  const recommendations = [
    'Revoir les modules de formation',
    'Pratiquer avec des quiz ciblés',
    'Analyser vos erreurs'
  ];

  const analysisData = [
    { label: 'Votre score', value: '%', subtitle: 'En dessous du seuil', color: 'text-blue-500' },
    { label: 'Seuil de réussite', value: '61%', subtitle: 'Standard PMP', color: 'text-gray-600' },
    { label: 'Score moyen', value: '78%', subtitle: 'Utilisateurs SICA', color: 'text-green-500' },
    { label: 'Score excellent', value: '85%', subtitle: 'Top 20%', color: 'text-purple-500' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-white text-sm font-bold">SC</span>
            </div>
            <span className="font-bold text-gray-800">SICA CONSEIL</span>
          </div>

          <nav className="space-y-2">
            <Link to="/dashboard" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">
              <i className="ri-dashboard-line w-5 h-5 flex items-center justify-center"></i>
              <span>Tableau de bord</span>
            </Link>
            
            <Link to="/project-generator" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">
              <i className="ri-file-text-line w-5 h-5 flex items-center justify-center"></i>
              <span>Générateur de projets</span>
            </Link>
            
            <Link to="/pmp-training" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">
              <i className="ri-graduation-cap-line w-5 h-5 flex items-center justify-center"></i>
              <span>Formation PMP</span>
            </Link>
            
            <Link to="/pmp-simulator" className="flex items-center space-x-3 px-4 py-3 bg-orange-100 text-orange-600 rounded-lg">
              <i className="ri-brain-line w-5 h-5 flex items-center justify-center"></i>
              <span>Simulateur PMP</span>
            </Link>
            
            <Link to="/pmp-history" className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">
              <i className="ri-line-chart-line w-5 h-5 flex items-center justify-center"></i>
              <span>Progression</span>
            </Link>
            
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">
              <i className="ri-settings-line w-5 h-5 flex items-center justify-center"></i>
              <span>Paramètres</span>
            </button>
          </nav>
        </div>

        <div className="absolute bottom-6 left-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-orange-500 hover:text-orange-600 cursor-pointer"
          >
            <i className="ri-logout-box-line w-4 h-4 flex items-center justify-center"></i>
            <span className="text-sm">Déconnexion</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={() => navigate('/pmp-simulator')}
              className="flex items-center text-gray-600 hover:text-orange-500 mb-4"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              Retour au simulateur
            </button>
            <h1 className="text-3xl font-bold text-gray-800">Résultats du test PMP</h1>
            <p className="text-gray-600 mt-2">Analyse détaillée de votre performance</p>
          </div>

          {/* Main Result Card */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-xl p-8 mb-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-target-line text-4xl text-white"></i>
              </div>
              
              <div className="text-6xl font-bold text-red-500 mb-2">%</div>
              <div className="text-xl text-gray-700 mb-6">
                {testResult.correctAnswers} bonnes réponses sur {testResult.totalQuestions}
              </div>
              
              <div className="inline-flex items-center bg-red-500 text-white px-6 py-3 rounded-full font-semibold mb-8">
                <i className="ri-close-line mr-2"></i>
                Échec
              </div>

              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">{testResult.timeUsed}</div>
                  <div className="text-gray-600">Temps utilisé</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">{testResult.successRate}</div>
                  <div className="text-gray-600">Taux de réussite</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">{testResult.testType}</div>
                  <div className="text-gray-600">Type d'examen</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Performance par domaine */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Performance par domaine</h2>
              <p className="text-gray-600 mb-6">Vos scores détaillés selon les domaines PMP</p>
              
              <div className="space-y-4">
                {domainPerformance.map((domain, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-800">{domain.domain}</span>
                    <span className={`text-2xl font-bold ${domain.color}`}>{domain.score}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommandations */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Continuez vos efforts !</h2>
              <p className="text-gray-600 mb-6">Votre score indique qu'il faut encore travailler. Concentrez-vous sur vos points faibles.</p>
              
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Actions recommandées :</h3>
                <ul className="space-y-2">
                  {recommendations.map((rec, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => navigate('/pmp-training')}
                  className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 cursor-pointer whitespace-nowrap flex items-center justify-center"
                >
                  <i className="ri-book-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Accéder à la formation
                </button>
                <button
                  onClick={() => navigate('/pmp-simulator')}
                  className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 cursor-pointer whitespace-nowrap flex items-center justify-center"
                >
                  <i className="ri-refresh-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                  Refaire un test
                </button>
              </div>
            </div>
          </div>

          {/* Analyse détaillée */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Analyse détaillée</h2>
            <p className="text-gray-600 mb-6">Comparaison avec les standards PMP</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {analysisData.map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`text-4xl font-bold ${item.color} mb-2`}>{item.value}</div>
                  <div className="font-semibold text-gray-800 mb-1">{item.label}</div>
                  <div className="text-sm text-gray-500">{item.subtitle}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Que faire maintenant ?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="flex flex-col items-center p-6 border border-gray-200 rounded-lg hover:border-orange-200 hover:bg-orange-50 cursor-pointer transition-colors">
                <i className="ri-download-line text-2xl text-orange-500 mb-3 w-6 h-6 flex items-center justify-center"></i>
                <span className="font-semibold text-gray-800">Télécharger le rapport</span>
              </button>

              <button
                onClick={() => navigate('/pmp-simulator')}
                className="flex flex-col items-center p-6 border border-gray-200 rounded-lg hover:border-orange-200 hover:bg-orange-50 cursor-pointer transition-colors"
              >
                <i className="ri-share-line text-2xl text-orange-500 mb-3 w-6 h-6 flex items-center justify-center"></i>
                <span className="font-semibold text-gray-800">Partager le résultat</span>
              </button>

              <button
                onClick={() => navigate('/pmp-history')}
                className="flex flex-col items-center p-6 border border-gray-200 rounded-lg hover:border-orange-200 hover:bg-orange-50 cursor-pointer transition-colors"
              >
                <i className="ri-line-chart-line text-2xl text-orange-500 mb-3 w-6 h-6 flex items-center justify-center"></i>
                <span className="font-semibold text-gray-800">Voir l'historique</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
