import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'Facile' | 'Moyen' | 'Difficile';
}

export default function PmpTest() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const domain = searchParams.get('domain') || 'personnes';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({});
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(55 * 60); // 55 minutes en secondes
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const domainInfo = {
    personnes: {
      title: 'Personnes',
      color: 'bg-orange-500',
      icon: 'ri-team-line',
      description: 'Leadership, gestion d\'équipe, communication et développement des compétences'
    },
    processus: {
      title: 'Processus', 
      color: 'bg-yellow-500',
      icon: 'ri-settings-line',
      description: 'Gestion du cycle de vie du projet, planification et contrôle'
    },
    environnement: {
      title: 'Environnement',
      color: 'bg-green-500', 
      icon: 'ri-building-line',
      description: 'Contexte organisationnel, stratégie et conformité'
    }
  };

  const questions: Question[] = [
    {
      id: 1,
      question: "Quelle est la principale responsabilité d'un chef de projet selon le PMI ?",
      options: [
        "Gérer les ressources techniques du projet",
        "Assurer la livraison du projet dans les délais, le budget et la qualité requis",
        "Superviser l'équipe de développement uniquement",
        "Rédiger tous les documents du projet"
      ],
      correctAnswer: 1,
      explanation: "Selon le PMI, le chef de projet est responsable de la livraison du projet en respectant le triangle de la performance : délais, coût et qualité.",
      difficulty: 'Facile'
    },
    {
      id: 2,
      question: "Dans le cadre de la gestion des parties prenantes, quelle matrice est utilisée pour analyser leur influence et leur intérêt ?",
      options: [
        "Matrice des risques",
        "Matrice pouvoir/intérêt",
        "Matrice RACI",
        "Matrice de traçabilité"
      ],
      correctAnswer: 1,
      explanation: "La matrice pouvoir/intérêt permet de cartographier les parties prenantes selon leur niveau d'influence (pouvoir) et leur degré d'intérêt pour le projet.",
      difficulty: 'Moyen'
    },
    {
      id: 3,
      question: "Quel processus permet d'identifier formellement qu'un projet ou une phase peut commencer ?",
      options: [
        "Élaborer la charte du projet",
        "Planifier la gestion du contenu",
        "Définir les activités",
        "Estimer les coûts"
      ],
      correctAnswer: 0,
      explanation: "L'élaboration de la charte du projet est le processus qui autorise formellement l'existence du projet et donne au chef de projet l'autorité nécessaire.",
      difficulty: 'Moyen'
    },
    {
      id: 4,
      question: "Quelle technique est utilisée pour identifier les risques du projet ?",
      options: [
        "Analyse SWOT uniquement",
        "Brainstorming, entretiens, analyse documentaire",
        "Diagramme de Gantt",
        "Méthode du chemin critique"
      ],
      correctAnswer: 1,
      explanation: "L'identification des risques utilise plusieurs techniques comme le brainstorming, les entretiens, l'analyse documentaire, l'analyse des hypothèses, etc.",
      difficulty: 'Facile'
    },
    {
      id: 5,
      question: "Dans la méthode du chemin critique, qu'est-ce que la marge libre ?",
      options: [
        "Le temps disponible avant que le projet soit en retard",
        "Le temps qu'une activité peut être retardée sans affecter la date de début au plus tôt de l'activité suivante",
        "La durée minimale du projet",
        "Le temps nécessaire pour terminer toutes les activités"
      ],
      correctAnswer: 1,
      explanation: "La marge libre est le temps qu'une activité peut être retardée sans impacter le début au plus tôt de ses activités successeures.",
      difficulty: 'Difficile'
    }
  ];

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTestStarted && timeLeft > 0 && !showResults) {
      interval = setInterval(() => {
        setTimeLeft(time => {
          if (time <= 1) {
            handleSubmitTest();
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTestStarted, timeLeft, showResults]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartTest = () => {
    setIsTestStarted(true);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setTimeLeft(55 * 60);
  };

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(false);
    }
  };

  const handleSubmitTest = () => {
    setShowResults(true);
    setIsTestStarted(false);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / questions.length) * 100);
  };

  if (!isTestStarted && !showResults) {
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
                onClick={() => navigate('/pmp-training')}
                className="text-gray-600 hover:text-orange-500 cursor-pointer"
              >
                Retour à la formation
              </button>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer">
                <i className="ri-user-line text-gray-600"></i>
              </div>
            </div>
          </div>
        </nav>

        {/* Test Introduction */}
        <div className="flex items-center justify-center min-h-screen p-6">
          <div className="max-w-2xl mx-auto bg-white rounded-lg border border-gray-200 p-8">
            <div className="text-center">
              <div className={`w-20 h-20 ${domainInfo[domain as keyof typeof domainInfo]?.color || 'bg-gray-500'} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <i className={`${domainInfo[domain as keyof typeof domainInfo]?.icon || 'ri-question-line'} text-3xl text-white`}></i>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Test approfondi - {domainInfo[domain as keyof typeof domainInfo]?.title || 'Domaine'}
              </h1>
              
              <p className="text-gray-600 mb-8">
                {domainInfo[domain as keyof typeof domainInfo]?.description || 'Description du domaine'}
              </p>

              <div className="bg-orange-50 rounded-lg p-6 mb-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Détails du test</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-orange-500 mb-1">30</div>
                    <div className="text-sm text-gray-600">Questions</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-500 mb-1">55</div>
                    <div className="text-sm text-gray-600">Minutes</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-500 mb-1">75%</div>
                    <div className="text-sm text-gray-600">Score requis</div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
                <div className="flex items-start space-x-3">
                  <i className="ri-information-line text-yellow-600 text-xl mt-1"></i>
                  <div className="text-left">
                    <h3 className="font-semibold text-yellow-800 mb-2">Instructions importantes</h3>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Une seule réponse correcte par question</li>
                      <li>• Le chronométre démarre dès le début du test</li>
                      <li>• Vous pouvez naviguer entre les questions</li>
                      <li>• Le test se termine automatiquement après 55 minutes</li>
                      <li>• Vos réponses sont sauvegardées automatiquement</li>
                    </ul>
                  </div>
                </div>
              </div>

              <button
                onClick={handleStartTest}
                className="bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-play-fill mr-2"></i>
                Commencer le test
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const correctAnswers = questions.filter(q => selectedAnswers[q.id] === q.correctAnswer).length;
    
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
                onClick={() => navigate('/pmp-training')}
                className="text-gray-600 hover:text-orange-500 cursor-pointer"
              >
                Retour à la formation
              </button>
            </div>
          </div>
        </nav>

        <div className="p-6">
          <div className="max-w-4xl mx-auto">
            {/* Results Header */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 mb-6">
              <div className="text-center">
                <div className={`w-20 h-20 ${score >= 75 ? 'bg-green-500' : 'bg-red-500'} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <i className={`${score >= 75 ? 'ri-check-line' : 'ri-close-line'} text-3xl text-white`}></i>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  {score >= 75 ? 'Félicitations !' : 'Test non réussi'}
                </h1>
                
                <p className="text-gray-600 mb-6">
                  Votre score pour le domaine {domainInfo[domain as keyof typeof domainInfo]?.title}
                </p>

                <div className="text-6xl font-bold mb-4">
                  <span className={score >= 75 ? 'text-green-500' : 'text-red-500'}>{score}%</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-gray-800 mb-1">{correctAnswers}/{questions.length}</div>
                    <div className="text-sm text-gray-600">Réponses correctes</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-gray-800 mb-1">{formatTime(55 * 60 - timeLeft)}</div>
                    <div className="text-sm text-gray-600">Temps utilisé</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-gray-800 mb-1">75%</div>
                    <div className="text-sm text-gray-600">Score requis</div>
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => {
                      setShowResults(false);
                      setIsTestStarted(false);
                      setCurrentQuestion(0);
                      setSelectedAnswers({});
                      setTimeLeft(55 * 60);
                    }}
                    className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-refresh-line mr-2"></i>
                    Recommencer le test
                  </button>
                  <button
                    onClick={() => navigate('/pmp-training')}
                    className="bg-gray-100 text-gray-700 px-6 py-2 rounded hover:bg-gray-200 cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-arrow-left-line mr-2"></i>
                    Retour à la formation
                  </button>
                </div>
              </div>
            </div>

            {/* Detailed Results */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Révision des questions</h2>
              
              <div className="space-y-6">
                {questions.map((question, index) => {
                  const userAnswer = selectedAnswers[question.id];
                  const isCorrect = userAnswer === question.correctAnswer;
                  
                  return (
                    <div key={question.id} className={`border rounded-lg p-6 ${isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="font-semibold text-gray-800 flex-1">
                          Question {index + 1}: {question.question}
                        </h3>
                        <span className={`text-sm px-2 py-1 rounded ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {isCorrect ? 'Correct' : 'Incorrect'}
                        </span>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        {question.options.map((option, optionIndex) => (
                          <div 
                            key={optionIndex}
                            className={`p-3 rounded border ${
                              optionIndex === question.correctAnswer 
                                ? 'border-green-300 bg-green-100' 
                                : optionIndex === userAnswer && userAnswer !== question.correctAnswer
                                ? 'border-red-300 bg-red-100'
                                : 'border-gray-200'
                            }`}
                          >
                            <div className="flex items-center">
                              {optionIndex === question.correctAnswer && (
                                <i className="ri-check-line text-green-600 mr-2"></i>
                              )}
                              {optionIndex === userAnswer && userAnswer !== question.correctAnswer && (
                                <i className="ri-close-line text-red-600 mr-2"></i>
                              )}
                              {option}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="bg-blue-50 border border-blue-200 rounded p-4">
                        <h4 className="font-semibold text-blue-800 mb-2">Explication :</h4>
                        <p className="text-blue-700 text-sm">{question.explanation}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Test in progress
  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation with Timer */}
      <nav className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">SC</span>
              </div>
              <span className="font-bold text-gray-800">SICA CONSEIL</span>
            </div>
            
            <div className="text-sm text-gray-600">
              Question {currentQuestion + 1} sur {questions.length}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className={`text-lg font-mono ${timeLeft < 300 ? 'text-red-600' : 'text-gray-800'}`}>
              <i className="ri-time-line mr-2"></i>
              {formatTime(timeLeft)}
            </div>
            <button
              onClick={handleSubmitTest}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 cursor-pointer whitespace-nowrap"
            >
              Terminer le test
            </button>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-1">
          <div 
            className="bg-orange-500 h-1 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </nav>

      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            {/* Question Header */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-xl font-bold text-gray-800">
                Question {currentQuestion + 1}
              </h1>
              <span className={`text-xs px-2 py-1 rounded ${
                currentQ.difficulty === 'Facile' ? 'bg-green-100 text-green-800' :
                currentQ.difficulty === 'Moyen' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {currentQ.difficulty}
              </span>
            </div>

            {/* Question */}
            <div className="mb-8">
              <p className="text-lg text-gray-800 leading-relaxed">{currentQ.question}</p>
            </div>

            {/* Options */}
            <div className="space-y-3 mb-8">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(currentQ.id, index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-colors cursor-pointer ${
                    selectedAnswers[currentQ.id] === index
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                      selectedAnswers[currentQ.id] === index
                        ? 'border-orange-500 bg-orange-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedAnswers[currentQ.id] === index && (
                        <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                      )}
                    </div>
                    <span className="text-gray-800">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Explanation Button */}
            {selectedAnswers[currentQ.id] !== undefined && (
              <div className="mb-6">
                <button
                  onClick={() => setShowExplanation(!showExplanation)}
                  className="text-blue-600 hover:text-blue-800 cursor-pointer"
                >
                  <i className={`${showExplanation ? 'ri-eye-off-line' : 'ri-eye-line'} mr-2`}></i>
                  {showExplanation ? 'Masquer l\'explication' : 'Voir l\'explication'}
                </button>
                
                {showExplanation && (
                  <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Explication :</h4>
                    <p className="text-blue-700">{currentQ.explanation}</p>
                    <p className="text-sm text-blue-600 mt-2">
                      Réponse correcte : {currentQ.options[currentQ.correctAnswer]}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <button
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0}
                className={`px-6 py-2 rounded cursor-pointer whitespace-nowrap ${
                  currentQuestion === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <i className="ri-arrow-left-line mr-2"></i>
                Précédent
              </button>

              <div className="text-sm text-gray-600">
                {Object.keys(selectedAnswers).length} / {questions.length} réponses
              </div>

              <button
                onClick={handleNextQuestion}
                disabled={currentQuestion === questions.length - 1}
                className={`px-6 py-2 rounded cursor-pointer whitespace-nowrap ${
                  currentQuestion === questions.length - 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-orange-500 text-white hover:bg-orange-600'
                }`}
              >
                Suivant
                <i className="ri-arrow-right-line ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}