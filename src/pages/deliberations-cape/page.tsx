
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';

export default function DeliberationsCAPEPage() {
  const deliberations = [
    {
      id: 1,
      title: "Délibération N°001/2024 - Autorisation CAPE Les Petits Anges",
      date: "15 Mars 2024",
      status: "Accordée",
      description: "Autorisation d'ouverture du Centre d'Accueil et de Protection de l'Enfant 'Les Petits Anges' situé à Cotonou, quartier Agla.",
      details: "Capacité d'accueil : 50 enfants (3-12 ans). Personnel qualifié : 8 personnes. Durée d'autorisation : 3 ans renouvelables."
    },
    {
      id: 2,
      title: "Délibération N°002/2024 - Autorisation CAPE Espoir Enfance",
      date: "22 Mars 2024",
      status: "Accordée",
      description: "Autorisation d'ouverture du Centre d'Accueil et de Protection de l'Enfant 'Espoir Enfance' situé à Porto-Novo.",
      details: "Capacité d'accueil : 30 enfants (0-6 ans). Personnel qualifié : 6 personnes. Durée d'autorisation : 3 ans renouvelables."
    },
    {
      id: 3,
      title: "Délibération N°003/2024 - Demande CAPE Sourire d'Avenir",
      date: "28 Mars 2024",
      status: "En étude",
      description: "Demande d'autorisation pour le Centre d'Accueil et de Protection de l'Enfant 'Sourire d'Avenir' à Parakou.",
      details: "Dossier en cours d'instruction. Visite de conformité programmée pour le 10 avril 2024."
    },
    {
      id: 4,
      title: "Délibération N°004/2024 - Renouvellement CAPE Arc-en-Ciel",
      date: "05 Avril 2024",
      status: "Accordée",
      description: "Renouvellement d'autorisation du Centre d'Accueil et de Protection de l'Enfant 'Arc-en-Ciel' à Abomey-Calavi.",
      details: "Renouvellement accordé pour 3 ans. Mise aux normes effectuée. Personnel formé aux nouvelles réglementations."
    },
    {
      id: 5,
      title: "Délibération N°005/2024 - Demande CAPE Étoile du Matin",
      date: "12 Avril 2024",
      status: "Refusée",
      description: "Demande d'autorisation pour le Centre d'Accueil et de Protection de l'Enfant 'Étoile du Matin' à Bohicon.",
      details: "Refus motivé par non-conformité des installations de sécurité et insuffisance du personnel qualifié."
    },
    {
      id: 6,
      title: "Délibération N°006/2024 - Autorisation CAPE Jardin d'Enfants",
      date: "18 Avril 2024",
      status: "Accordée",
      description: "Autorisation d'ouverture du Centre d'Accueil et de Protection de l'Enfant 'Jardin d'Enfants' à Ouidah.",
      details: "Capacité d'accueil : 40 enfants (2-8 ans). Personnel qualifié : 7 personnes. Installations conformes aux normes."
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Accordée':
        return 'bg-green-100 text-green-800';
      case 'En étude':
        return 'bg-yellow-100 text-yellow-800';
      case 'Refusée':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Accordée':
        return 'ri-check-circle-line';
      case 'En étude':
        return 'ri-time-line';
      case 'Refusée':
        return 'ri-close-circle-line';
      default:
        return 'ri-information-line';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[400px] flex items-center justify-center bg-cover bg-center pt-20"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=Professional%20meeting%20room%20with%20African%20officials%20reviewing%20documents%20and%20making%20decisions%2C%20official%20government%20setting%20with%20formal%20atmosphere%2C%20legal%20documentation%20and%20administrative%20processes%2C%20modern%20office%20environment%20with%20conference%20table&width=1920&height=600&seq=deliberations-cape-bg&orientation=landscape)'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 w-full max-w-7xl px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Délibérations CAPE
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Consultez les décisions et délibérations concernant les demandes d'autorisation des Centres d'Accueil et de Protection de l'Enfant
            </p>
          </div>
        </div>
      </section>

      {/* Section des délibérations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Dernières délibérations
                </h2>
                <p className="text-gray-600">
                  Retrouvez ici toutes les décisions prises concernant les demandes d'autorisation CAPE
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Accordée</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span>En étude</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Refusée</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Liste des délibérations */}
          <div className="space-y-6">
            {deliberations.map((deliberation) => (
              <div key={deliberation.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1 mb-4 lg:mb-0">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <i className="ri-file-text-line text-blue-600 text-xl"></i>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {deliberation.title}
                        </h3>
                        <p className="text-gray-600 mb-3">
                          {deliberation.description}
                        </p>
                        <p className="text-sm text-gray-500">
                          {deliberation.details}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm text-gray-500 mb-2">Date de délibération</p>
                      <p className="font-medium text-gray-900">{deliberation.date}</p>
                    </div>
                    
                    <div className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(deliberation.status)}`}>
                      <i className={`${getStatusIcon(deliberation.status)} text-base`}></i>
                      <span>{deliberation.status}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Délibération #{String(deliberation.id).padStart(3, '0')}</span>
                    <span>•</span>
                    <span>MASM - Département Enfant et Adolescent</span>
                  </div>
                  
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm">
                    <span>Télécharger</span>
                    <i className="ri-download-line"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center mt-12">
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 text-gray-500 hover:text-gray-700 cursor-pointer">
                <i className="ri-arrow-left-line"></i>
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
              <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">2</button>
              <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">3</button>
              <button className="px-4 py-2 text-gray-500 hover:text-gray-700 cursor-pointer">
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section informative */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Information sur les délibérations
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="text-center">
                <i className="ri-calendar-line text-3xl mb-4"></i>
                <h4 className="font-semibold mb-2">Périodicité</h4>
                <p className="text-sm text-white/90">
                  Les délibérations ont lieu chaque semaine
                </p>
              </div>
              
              <div className="text-center">
                <i className="ri-time-line text-3xl mb-4"></i>
                <h4 className="font-semibold mb-2">Délai de traitement</h4>
                <p className="text-sm text-white/90">
                  15 jours ouvrables en moyenne
                </p>
              </div>
              
              <div className="text-center">
                <i className="ri-notification-line text-3xl mb-4"></i>
                <h4 className="font-semibold mb-2">Notification</h4>
                <p className="text-sm text-white/90">
                  Résultats communiqués par email
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
