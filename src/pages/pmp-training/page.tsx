import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PmpTraining() {
  const [selectedLevel, setSelectedLevel] = useState('débutant');
  const [lessonProgress, setLessonProgress] = useState<{[key: string]: boolean}>({});
  const [showLessonModal, setShowLessonModal] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<any>(null);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [studyModal, setStudyModal] = useState<string | null>(null);
  const [moduleModal, setModuleModal] = useState<{domainId: string, moduleIndex: number} | null>(null);
  const [lessonModal, setLessonModal] = useState<{domainId: string, moduleIndex: number, lessonIndex: number} | null>(null);
  const navigate = useNavigate();

  const domains = [
    {
      id: 'personnes',
      title: 'Personnes',
      subtitle: '42% de l\'examen',
      description: 'Leadership, gestion d\'équipe, communication et développement des compétences',
      score: 78,
      level: 'Faible',
      color: 'bg-orange-500',
      icon: 'ri-team-line',
      topics: [
        'Leadership et influence',
        'Gestion d\'équipe',
        'Communication',
        'Négociation',
        'Développement des compétences'
      ],
      studyContent: {
        overview: 'Ce domaine représente 42% de l\'examen PMP et se concentre sur les aspects humains de la gestion de projet. Il couvre les compétences relationnelles, le leadership, la communication et la gestion d\'équipe.',
        keyPoints: [
          'Développer des compétences en leadership pour inspirer et motiver l\'équipe',
          'Gérer efficacement la dynamique d\'équipe et résoudre les conflits',
          'Maîtriser les techniques de communication avec toutes les parties prenantes',
          'Négocier et influencer pour obtenir l\'adhésion et les ressources nécessaires',
          'Développer continuellement les compétences de l\'équipe'
        ],
        modules: [
          {
            title: 'Leadership et Influence',
            duration: '45 min',
            description: 'Techniques de leadership situationnel et d\'influence positive'
          },
          {
            title: 'Gestion d\'Équipe',
            duration: '60 min',
            description: 'Formation d\'équipes performantes et gestion des conflits'
          },
          {
            title: 'Communication Efficace',
            duration: '40 min',
            description: 'Plans de communication et techniques de présentation'
          },
          {
            title: 'Négociation',
            duration: '35 min',
            description: 'Stratégies de négociation et résolution de problèmes'
          }
        ]
      }
    },
    {
      id: 'processus',
      title: 'Processus',
      subtitle: '50% de l\'examen',
      description: 'Gestion du cycle de vie du projet, planification et contrôle',
      score: 82,
      level: 'Excellent',
      color: 'bg-yellow-500',
      icon: 'ri-settings-line',
      topics: [
        'Initiation du projet',
        'Planification',
        'Exécution',
        'Surveillance et contrôle',
        'Clôture du projet'
      ],
      studyContent: {
        overview: 'Ce domaine représente 50% de l\'examen PMP et couvre l\'ensemble du cycle de vie du projet selon le guide PMBOK. Il inclut tous les processus depuis l\'initiation jusqu\'à la clôture.',
        keyPoints: [
          'Maîtriser les 5 groupes de processus : Initiation, Planification, Exécution, Surveillance/Contrôle, Clôture',
          'Comprendre les 10 domaines de connaissance et leurs interactions',
          'Savoir utiliser les outils et techniques appropriés pour chaque processus',
          'Gérer les changements et maintenir la performance du projet',
          'Assurer la qualité et respecter les contraintes de coût, délai et périmètre'
        ],
        modules: [
          {
            title: 'Initiation du Projet',
            duration: '55 min',
            description: 'Charte projet, identification des parties prenantes'
          },
          {
            title: 'Planification Détaillée',
            duration: '90 min',
            description: 'Plan de management, WBS, planification des ressources'
          },
          {
            title: 'Exécution et Direction',
            duration: '70 min',
            description: 'Gestion des livrables et coordination des activités'
          },
          {
            title: 'Surveillance et Contrôle',
            duration: '80 min',
            description: 'Suivi de la performance et gestion des changements'
          }
        ]
      }
    },
    {
      id: 'environnement',
      title: 'Environnement',
      subtitle: '8% de l\'examen',
      description: 'Contexte organisationnel, stratégie et conformité',
      score: 75,
      level: 'Faible',
      color: 'bg-green-500',
      icon: 'ri-building-line',
      topics: [
        'Structure organisationnelle',
        'Gouvernance',
        'Conformité et réglementation',
        'Stratégie d\'entreprise',
        'Gestion du changement'
      ],
      studyContent: {
        overview: 'Ce domaine représente 8% de l\'examen PMP et traite du contexte dans lequel évoluent les projets. Il couvre l\'environnement organisationnel, la gouvernance et l\'alignement stratégique.',
        keyPoints: [
          'Comprendre l\'impact de la structure organisationnelle sur les projets',
          'Aligner les projets avec la stratégie d\'entreprise',
          'Respecter les exigences de gouvernance et de conformité',
          'Gérer le changement organisationnel',
          'Naviguer dans les contraintes politiques et culturelles'
        ],
        modules: [
          {
            title: 'Structures Organisationnelles',
            duration: '30 min',
            description: 'Types d\'organisations et leur impact sur les projets'
          },
          {
            title: 'Gouvernance de Projet',
            duration: '40 min',
            description: 'Cadres de gouvernance et processus de décision'
          },
          {
            title: 'Alignement Stratégique',
            duration: '35 min',
            description: 'Lien entre projets et objectifs organisationnels'
          },
          {
            title: 'Gestion du Changement',
            duration: '45 min',
            description: 'Conduite du changement et adoption des solutions'
          }
        ]
      }
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBarColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const openStudyModal = (domainId: string) => {
    setStudyModal(domainId);
  };

  const closeStudyModal = () => {
    setStudyModal(null);
  };

  const openModuleModal = (domainId: string, moduleIndex: number) => {
    setModuleModal({domainId, moduleIndex});
    setStudyModal(null);
  };

  const closeModuleModal = () => {
    setModuleModal(null);
  };

  const openLessonModal = (domainId: string, moduleIndex: number, lessonIndex: number) => {
    setLessonModal({domainId, moduleIndex, lessonIndex});
    setModuleModal(null);
  };

  const closeLessonModal = () => {
    setLessonModal(null);
  };

  const completeLesson = (domainId: string, moduleIndex: number, lessonIndex: number) => {
    const key = `${domainId}-${moduleIndex}-${lessonIndex}`;
    setLessonProgress(prev => ({
      ...prev,
      [key]: true
    }));
  };

  const isLessonCompleted = (domainId: string, moduleIndex: number, lessonIndex: number) => {
    const key = `${domainId}-${moduleIndex}-${lessonIndex}`;
    return lessonProgress[key] === true;
  };

  const isLessonUnlocked = (domainId: string, moduleIndex: number, lessonIndex: number) => {
    if (lessonIndex === 0) return true;
    return isLessonCompleted(domainId, moduleIndex, lessonIndex - 1);
  };

  const getModuleProgress = (domainId: string, moduleIndex: number) => {
    const totalLessons = 3;
    let completedLessons = 0;
    for (let i = 0; i < totalLessons; i++) {
      if (isLessonCompleted(domainId, moduleIndex, i)) {
        completedLessons++;
      }
    }
    return Math.round((completedLessons / totalLessons) * 100);
  };

  const currentDomain = domains.find(d => d.id === studyModal);
  const currentModule = moduleModal ? domains.find(d => d.id === moduleModal.domainId)?.studyContent.modules[moduleModal.moduleIndex] : null;
  const currentModuleDomain = moduleModal ? domains.find(d => d.id === moduleModal.domainId) : null;

  const currentLessonData = lessonModal ? {
    domain: domains.find(d => d.id === lessonModal.domainId),
    module: domains.find(d => d.id === lessonModal.domainId)?.studyContent.modules[lessonModal.moduleIndex],
    lessonIndex: lessonModal.lessonIndex
  } : null;

  const lessons = [
    {
      title: 'Concepts fondamentaux',
      duration: '15 min',
      icon: 'ri-play-circle-line',
      content: {
        introduction: 'Cette leçon couvre les concepts fondamentaux et les définitions clés.',
        keyPoints: [
          'Terminologie PMI',
          'Meilleures pratiques',
          'Exemples concrets'
        ],
        detailedContent: `
          <h3>Introduction aux concepts fondamentaux</h3>
          <p>Dans cette première leçon, nous explorerons les bases essentielles qui constituent le fondement de votre compréhension du domaine.</p>
          
          <h4>1. Terminologie PMI</h4>
          <p>Le Project Management Institute (PMI) définit des termes précis que vous devez maîtriser pour l'examen PMP. Ces définitions sont standardisées et utilisées dans le monde entier.</p>
          
          <h4>2. Meilleures pratiques</h4>
          <p>Les meilleures pratiques sont des méthodes éprouvées qui ont fait leurs preuves dans de nombreux projets et organisations. Elles constituent la base des recommandations du PMI.</p>
          
          <h4>3. Application pratique</h4>
          <p>Chaque concept théorique doit être compris dans son contexte d'application réelle. Nous verrons des exemples concrets tirés de projets réels.</p>
        `
      }
    },
    {
      title: 'Outils et techniques',
      duration: '20 min',
      icon: 'ri-tools-line',
      content: {
        introduction: 'Découverte des outils pratiques et des techniques spécifiques au domaine.',
        keyPoints: [
          'Outils standards PMI',
          'Techniques d\'optimisation',
          'Cas d\'usage pratiques'
        ],
        detailedContent: `
          <h3>Outils et techniques essentiels</h3>
          <p>Cette leçon vous présente les outils concrets que vous utiliserez dans vos projets quotidiens.</p>
          
          <h4>1. Outils standards du PMI</h4>
          <p>Le PMI recommande des outils spécifiques pour chaque processus. Ces outils sont standardisés et reconnus internationalement.</p>
          
          <h4>2. Techniques d'optimisation</h4>
          <p>Au-delà des outils de base, il existe des techniques avancées pour optimiser vos résultats et améliorer l'efficacité de vos projets.</p>
          
          <h4>3. Mise en pratique</h4>
          <p>Nous verrons comment appliquer ces outils dans différents contextes et situations projet.</p>
        `
      }
    },
    {
      title: 'Cas pratiques et exercices',
      duration: '15 min',
      icon: 'ri-lightbulb-line',
      content: {
        introduction: 'Mise en pratique avec des exercices interactifs et des études de cas réels.',
        keyPoints: [
          'Quiz interactifs',
          'Études de cas',
          'Exercices pratiques'
        ],
        detailedContent: `
          <h3>Application pratique des connaissances</h3>
          <p>Cette leçon finale vous permet de mettre en pratique tout ce que vous avez appris dans les leçons précédentes.</p>
          
          <h4>1. Quiz interactifs</h4>
          <p>Des questions pratiques pour tester votre compréhension et identifier les points à approfondir.</p>
          
          <h4>2. Études de cas réels</h4>
          <p>Analyse de situations réelles de projets avec les défis et solutions correspondants.</p>
          
          <h4>3. Exercices pratiques</h4>
          <p>Des exercices hands-on pour appliquer directement les outils et techniques étudiés.</p>
        `
      }
    }
  ];

  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleLogout = () => {
    setShowProfileDropdown(false);
    navigate('/login');
  };

  const handleGoToDashboard = () => {
    setShowProfileDropdown(false);
    navigate('/dashboard');
  };

  const handleGoToProfile = () => {
    setShowProfileDropdown(false);
    // Navigate to profile page or show profile modal
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">SC</span>
              </div>
              <span className="font-bold text-gray-800">SICA CONSEIL</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/pmp-simulator')}
              className="text-gray-600 hover:text-orange-500 cursor-pointer"
            >
              Simulateur
            </button>
            <button
              onClick={() => navigate('/pmp-history')}
              className="text-gray-600 hover:text-orange-500 cursor-pointer"
            >
              Historique
            </button>
            
            {/* Profile Dropdown */}
            <div className="relative">
              <div 
                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
                onClick={handleProfileClick}
              >
                <i className="ri-user-line text-gray-600"></i>
              </div>
              
              {/* Dropdown Menu */}
              {showProfileDropdown && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <i className="ri-user-line text-orange-600"></i>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Jean Dupont</p>
                        <p className="text-sm text-gray-500">jean.dupont@email.com</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="py-2">
                    <button
                      onClick={handleGoToDashboard}
                      className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <i className="ri-dashboard-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                      <span>Tableau de bord</span>
                    </button>
                    
                    <button
                      onClick={handleGoToProfile}
                      className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <i className="ri-user-settings-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                      <span>Mon profil</span>
                    </button>
                    
                    <button
                      onClick={() => {
                        setShowProfileDropdown(false);
                        navigate('/pmp-history');
                      }}
                      className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <i className="ri-line-chart-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                      <span>Mes résultats</span>
                    </button>
                    
                    <button
                      onClick={() => {
                        setShowProfileDropdown(false);
                        navigate('/project-generator');
                      }}
                      className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <i className="ri-file-text-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                      <span>Mes projets</span>
                    </button>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-2">
                    <button
                      onClick={() => {
                        setShowProfileDropdown(false);
                        // Navigate to settings or show settings modal
                      }}
                      className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <i className="ri-settings-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                      <span>Paramètres</span>
                    </button>
                    
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-red-50 cursor-pointer transition-colors"
                    >
                      <i className="ri-logout-box-line mr-3 w-4 h-4 flex items-center justify-center"></i>
                      <span>Déconnexion</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Click outside to close dropdown */}
      {showProfileDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowProfileDropdown(false)}
        ></div>
      )}

      <div className="flex">
        {/* Sidebar */}
        <div className="hidden lg:block w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-6">
            <nav className="space-y-2">
              <button
                onClick={() => navigate('/dashboard')}
                className="w-full flex items-center space-x-3 text-gray-600 hover:text-orange-500 hover:bg-orange-50 px-3 py-2 rounded cursor-pointer"
              >
                <i className="ri-dashboard-line w-4 h-4 flex items-center justify-center"></i>
                <span>Tableau de bord</span>
              </button>
              <button
                onClick={() => navigate('/project-generator')}
                className="w-full flex items-center space-x-3 text-gray-600 hover:text-orange-500 hover:bg-orange-50 px-3 py-2 rounded cursor-pointer"
              >
                <i className="ri-file-text-line w-4 h-4 flex items-center justify-center"></i>
                <span>Générateur de projets</span>
              </button>
              <button
                onClick={() => navigate('/pmp-simulator')}
                className="w-full flex items-center space-x-3 text-gray-600 hover:text-orange-500 hover:bg-orange-50 px-3 py-2 rounded cursor-pointer"
              >
                <i className="ri-play-circle-line w-4 h-4 flex items-center justify-center"></i>
                <span>Simulateur PMP</span>
              </button>
              <button className="w-full flex items-center space-x-3 text-orange-500 bg-orange-50 px-3 py-2 rounded cursor-pointer">
                <i className="ri-graduation-cap-line w-4 h-4 flex items-center justify-center"></i>
                <span>Formation PMP</span>
              </button>
              <button
                onClick={() => navigate('/pmp-history')}
                className="w-full flex items-center space-x-3 text-gray-600 hover:text-orange-500 hover:bg-orange-50 px-3 py-2 rounded cursor-pointer"
              >
                <i className="ri-line-chart-line w-4 h-4 flex items-center justify-center"></i>
                <span>Progression</span>
              </button>
              <button className="w-full flex items-center space-x-3 text-gray-600 hover:text-orange-500 hover:bg-orange-50 px-3 py-2 rounded cursor-pointer">
                <i className="ri-settings-line w-4 h-4 flex items-center justify-center"></i>
                <span>Paramètres</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Entraînement par domaine</h1>
              <p className="text-gray-600">Concentrez-vous sur vos points faibles avec des questions ciblées</p>
            </div>

            {/* Vue d'ensemble des domaines */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Vue d'ensemble des domaines</h2>
              <p className="text-gray-600 mb-6">L'examen PMP est structuré autour de 3 domaines principaux selon le PMI</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {domains.map((domain) => (
                  <div key={domain.id} className="bg-orange-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 ${domain.color} rounded-lg flex items-center justify-center`}>
                        <i className={`${domain.icon} text-2xl text-white`}></i>
                      </div>
                      <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                        {domain.level}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{domain.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{domain.subtitle}</p>
                    <p className="text-sm text-gray-700 mb-4">{domain.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-600">Score actuel</span>
                      <span className={`text-lg font-bold ${getScoreColor(domain.score)}`}>
                        {domain.score}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div 
                        className={`${getScoreBarColor(domain.score)} h-2 rounded-full`}
                        style={{ width: `${domain.score}%` }}
                      ></div>
                    </div>
                    
                    <button 
                      onClick={() => navigate(`/pmp-test?domain=${domain.id}`)}
                      className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 cursor-pointer whitespace-nowrap"
                    >
                      <i className="ri-play-fill mr-2"></i>
                      S'entraîner
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Détail par domaine */}
            {domains.map((domain) => (
              <div key={domain.id} className="bg-white rounded-lg border border-gray-200 p-8 mb-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 ${domain.color} rounded-lg flex items-center justify-center`}>
                    <i className={`${domain.icon} text-2xl text-white`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800">{domain.title}</h3>
                    <p className="text-gray-600">{domain.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Performance actuelle</div>
                    <div className={`text-2xl font-bold ${getScoreColor(domain.score)}`}>
                      {domain.score}%
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-4">Sujets couverts :</h4>
                    <ul className="space-y-2">
                      {domain.topics.map((topic, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                      <div 
                        className={`${getScoreBarColor(domain.score)} h-3 rounded-full`}
                        style={{ width: `${domain.score}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button 
                        onClick={() => navigate(`/pmp-test?domain=${domain.id}`)}
                        className="flex-1 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 cursor-pointer whitespace-nowrap"
                      >
                        <i className="ri-play-fill mr-2"></i>
                        Test approfondi (30 questions - 55 min)
                      </button>
                      <button 
                        onClick={() => openStudyModal(domain.id)}
                        className="bg-gray-100 text-gray-700 py-2 px-4 rounded hover:bg-gray-200 cursor-pointer whitespace-nowrap"
                      >
                        <i className="ri-book-line mr-2"></i>
                        Étudier
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Stratégie d'entraînement recommandée */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <i className="ri-lightbulb-line text-2xl text-orange-500"></i>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Stratégie d'entraînement recommandée</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-focus-3-line text-2xl text-orange-500"></i>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">1. Identifiez vos faiblesses</h3>
                  <p className="text-sm text-gray-600">
                    Concentrez-vous sur les domaines où votre score est inférieur à 75%
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-book-open-line text-2xl text-orange-500"></i>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">2. Étudiez puis pratiquez</h3>
                  <p className="text-sm text-gray-600">
                    Alternez entre formation théorique et tests pratiques
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-repeat-line text-2xl text-orange-500"></i>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">3. Testez régulièrement</h3>
                  <p className="text-sm text-gray-600">
                    Faites des tests courts mais fréquents pour maintenir votre niveau
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Study Modal */}
      {studyModal && currentDomain && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 ${currentDomain.color} rounded-lg flex items-center justify-center`}>
                  <i className={`${currentDomain.icon} text-2xl text-white`}></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Formation - {currentDomain.title}</h2>
                  <p className="text-gray-600">{currentDomain.subtitle}</p>
                </div>
              </div>
              <button 
                onClick={closeStudyModal}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            <div className="p-6">
              {/* Overview */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Vue d'ensemble</h3>
                <p className="text-gray-700 leading-relaxed">{currentDomain.studyContent.overview}</p>
              </div>

              {/* Key Points */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Points clés à retenir</h3>
                <ul className="space-y-3">
                  {currentDomain.studyContent.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <i className="ri-check-line text-orange-500 text-sm"></i>
                      </div>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Study Modules */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Modules de formation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentDomain.studyContent.modules.map((module, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-800">{module.title}</h4>
                        <span className="text-sm text-orange-500 bg-orange-50 px-2 py-1 rounded">
                          {module.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{module.description}</p>
                      <button 
                        onClick={() => openModuleModal(currentDomain.id, index)}
                        className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 cursor-pointer whitespace-nowrap text-sm"
                      >
                        <i className="ri-play-fill mr-2"></i>
                        Commencer le module
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                <button 
                  onClick={() => {
                    closeStudyModal();
                    navigate(`/pmp-test?domain=${currentDomain.id}`);
                  }}
                  className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-play-fill mr-2"></i>
                  Passer au test pratique
                </button>
                <button 
                  onClick={closeStudyModal}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-bookmark-line mr-2"></i>
                  Marquer comme étudié
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Module Training Modal */}
      {moduleModal && currentModule && currentModuleDomain && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 ${currentModuleDomain.color} rounded-lg flex items-center justify-center`}>
                  <i className={`${currentModuleDomain.icon} text-2xl text-white`}></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{currentModule.title}</h2>
                  <p className="text-gray-600">{currentModuleDomain.title} • {currentModule.duration}</p>
                </div>
              </div>
              <button 
                onClick={closeModuleModal}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            <div className="p-6">
              {/* Module Content */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6 mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <i className="ri-graduation-cap-line text-2xl text-orange-500"></i>
                    <h3 className="text-xl font-bold text-gray-800">Objectifs du module</h3>
                  </div>
                  <p className="text-gray-700">{currentModule.description}</p>
                </div>

                {/* Interactive Content */}
                <div className="space-y-6">
                  {lessons.map((lesson, lessonIndex) => {
                    const isCompleted = isLessonCompleted(currentModuleDomain.id, moduleModal.moduleIndex, lessonIndex);
                    const isUnlocked = isLessonUnlocked(currentModuleDomain.id, moduleModal.moduleIndex, lessonIndex);
                    
                    return (
                      <div key={lessonIndex} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-lg font-semibold text-gray-800 flex items-center">
                            <i className={`${lesson.icon} text-orange-500 mr-2`}></i>
                            Leçon {lessonIndex + 1} : {lesson.title}
                            {isCompleted && <i className="ri-check-circle-fill text-green-500 ml-2"></i>}
                          </h4>
                          <span className="text-sm text-gray-500">{lesson.duration}</span>
                        </div>
                        <p className="text-gray-700 mb-4">{lesson.content.introduction}</p>
                        
                        <div className={`${lessonIndex === 0 ? 'bg-blue-50 border-blue-200' : lessonIndex === 1 ? 'bg-green-50 border-green-200' : 'bg-purple-50 border-purple-200'} border rounded-lg p-4 mb-4`}>
                          <h5 className={`font-semibold mb-2 ${lessonIndex === 0 ? 'text-blue-800' : lessonIndex === 1 ? 'text-green-800' : 'text-purple-800'}`}>
                            {lessonIndex === 0 ? 'Points clés :' : lessonIndex === 1 ? 'Vous apprendrez :' : 'Activités incluses :'}
                          </h5>
                          <ul className={`text-sm space-y-1 ${lessonIndex === 0 ? 'text-blue-700' : lessonIndex === 1 ? 'text-green-700' : 'text-purple-700'}`}>
                            {lesson.content.keyPoints.map((point, pointIndex) => (
                              <li key={pointIndex}>• {point}</li>
                            ))}
                          </ul>
                        </div>
                        
                        {isUnlocked ? (
                          <button 
                            onClick={() => openLessonModal(currentModuleDomain.id, moduleModal.moduleIndex, lessonIndex)}
                            className={`px-4 py-2 rounded cursor-pointer whitespace-nowrap ${
                              isCompleted 
                                ? 'bg-green-500 text-white hover:bg-green-600'
                                : 'bg-orange-500 text-white hover:bg-orange-600'
                            }`}
                          >
                            <i className={`${isCompleted ? 'ri-check-line' : 'ri-play-fill'} mr-2`}></i>
                            {isCompleted ? 'Revoir la leçon' : 'Commencer la leçon'}
                          </button>
                        ) : (
                          <button className="bg-gray-300 text-gray-600 px-4 py-2 rounded cursor-not-allowed" disabled>
                            <i className="ri-lock-line mr-2"></i>
                            Terminer la leçon {lessonIndex} d'abord
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Progress and Navigation */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-800">Progression du module</h4>
                  <span className="text-sm text-gray-600">{getModuleProgress(currentModuleDomain.id, moduleModal.moduleIndex)}% terminé</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                  <div 
                    className="bg-orange-500 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${getModuleProgress(currentModuleDomain.id, moduleModal.moduleIndex)}%` }}
                  ></div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => {
                      closeModuleModal();
                      navigate(`/pmp-test?domain=${currentModuleDomain.id}`);
                    }}
                    className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-question-line mr-2"></i>
                    Passer au test après formation
                  </button>
                  <button 
                    onClick={() => {
                      closeModuleModal();
                      setStudyModal(currentModuleDomain.id);
                    }}
                    className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-arrow-left-line mr-2"></i>
                    Retour aux modules
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lesson Content Modal */}
      {lessonModal && currentLessonData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 ${currentLessonData.domain?.color} rounded-lg flex items-center justify-center`}>
                  <i className={`${lessons[lessonModal.lessonIndex].icon} text-2xl text-white`}></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Leçon {lessonModal.lessonIndex + 1} : {lessons[lessonModal.lessonIndex].title}
                  </h2>
                  <p className="text-gray-600">
                    {currentLessonData.module?.title} • {lessons[lessonModal.lessonIndex].duration}
                  </p>
                </div>
              </div>
              <button 
                onClick={closeLessonModal}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            <div className="p-6">
              {/* Lesson Content */}
              <div className="prose max-w-none mb-8">
                <div 
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ 
                    __html: lessons[lessonModal.lessonIndex].content.detailedContent 
                  }}
                />
              </div>

              {/* Interactive Elements */}
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-6 mb-8">
                <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                  <i className="ri-questionnaire-line text-orange-500 mr-2"></i>
                  Vérification des connaissances
                </h4>
                <p className="text-gray-700 mb-4">
                  Avant de passer à la suite, assurez-vous d'avoir bien compris les concepts clés de cette leçon.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {lessons[lessonModal.lessonIndex].content.keyPoints.map((point, index) => (
                    <div key={index} className="flex items-center bg-white rounded-lg p-3 border border-orange-200">
                      <i className="ri-check-line text-green-500 mr-3"></i>
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                <button 
                  onClick={() => {
                    completeLesson(lessonModal.domainId, lessonModal.moduleIndex, lessonModal.lessonIndex);
                    closeLessonModal();
                    setModuleModal({domainId: lessonModal.domainId, moduleIndex: lessonModal.moduleIndex});
                  }}
                  className="flex-1 bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-check-line mr-2"></i>
                  Marquer comme terminée
                </button>
                <button 
                  onClick={() => {
                    closeLessonModal();
                    setModuleModal({domainId: lessonModal.domainId, moduleIndex: lessonModal.moduleIndex});
                  }}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-arrow-left-line mr-2"></i>
                  Retour au module
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}