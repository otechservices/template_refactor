
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';

export default function DeliberationsGarderiePage() {
  const deliberations = [
    {
      id: 1,
      title: "Délibération N°G001/2024 - Autorisation Garderie Les Bambins Joyeux",
      date: "10 Mars 2024",
      status: "Accordée",
      description: "Autorisation d'ouverture de la garderie 'Les Bambins Joyeux' située à Cotonou, quartier Dantokpa.",
      details: "Capacité d'accueil : 25 enfants (6 mois-5 ans). Personnel qualifié : 5 personnes. Durée d'autorisation : 2 ans renouvelables."
    },
    {
      id: 2,
      title: "Délibération N°G002/2024 - Autorisation Garderie Petit Paradis",
      date: "17 Mars 2024",
      status: "Accordée",
      description: "Autorisation d'ouverture de la garderie 'Petit Paradis' située à Calavi, quartier Akassato.",
      details: "Capacité d'accueil : 35 enfants (3 mois-6 ans). Personnel qualifié : 7 personnes. Installations modernes conformes."
    },
    {
      id: 3,
      title: "Délibération N°G003/2024 - Demande Garderie Les Étoiles",
      date: "25 Mars 2024",
      status: "En étude",
      description: "Demande d'autorisation pour la garderie 'Les Étoiles' à Porto-Novo, quartier Ouando.",
      details: "Dossier en cours d'instruction. Inspection des locaux programmée pour le 8 avril 2024."
    },
    {
      id: 4,
      title: "Délibération N°G004/2024 - Renouvellement Garderie Soleil Levant",
      date: "02 Avril 2024",
      status: "Accordée",
      description: "Renouvellement d'autorisation de la garderie 'Soleil Levant' à Parakou.",
      details: "Renouvellement accordé pour 2 ans. Amélioration des équipements de sécurité effectuée."
    },
    {
      id: 5,
      title: "Délibération N°G005/2024 - Demande Garderie Petit Monde",
      date: "09 Avril 2024",
      status: "Refusée",
      description: "Demande d'autorisation pour la garderie 'Petit Monde' à Bohicon.",
      details: "Refus motivé par superficie insuffisante et non-conformité des équipements sanitaires."
    },
    {
      id: 6,
      title: "Délibération N°G006/2024 - Autorisation Garderie Les Lutins",
      date: "16 Avril 2024",
      status: "Accordée",
      description: "Autorisation d'ouverture de la garderie 'Les Lutins' située à Ouidah, centre-ville.",
      details: "Capacité d'accueil : 20 enfants (1-4 ans). Personnel expérimenté : 4 personnes. Équipements de qualité."
    },
    {
      id: 7,
      title: "Délibération N°G007/2024 - Demande Garderie Arc-en-Ciel",
      date: "20 Avril 2024",
      status: "En étude",
      description: "Demande d'autorisation pour la garderie 'Arc-en-Ciel' à Natitingou.",
      details: "Évaluation en cours. Visite de l'équipe technique prévue dans les prochains jours."
    },
    {
      id: 8,
      title: "Délibération N°G008/2024 - Autorisation Garderie Petit Ange",
      date: "23 Avril 2024",
      status: "Accordée",
      description: "Autorisation d'ouverture de la garderie 'Petit Ange' située à Abomey-Calavi, quartier Hêvié.",
      details: "Capacité d'accueil : 30 enfants (6 mois-5 ans). Personnel qualifié : 6 personnes. Normes respectées."
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
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=Professional%20African%20woman%20in%20business%20attire%20reviewing%20documents%20at%20modern%20desk%2C%20official%20administrative%20setting%20with%20paperwork%20and%20legal%20documents%2C%20government%20office%20environment%20focused%20on%20childcare%20regulations%20and%20approvals&width=1920&height=600&seq=deliberations-garderie-bg&orientation=landscape)'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 w-full max-w-7xl px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Délibérations Garderie
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Consultez les décisions et délibérations concernant les demandes d'autorisation des garderies
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
                  Retrouvez ici toutes les décisions prises concernant les demandes d'autorisation des garderies
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
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                          <i className="ri-building-line text-orange-600 text-xl"></i>
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
                    <span>Délibération #G{String(deliberation.id).padStart(3, '0')}</span>
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

      {/* Section statistiques */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Statistiques des délibérations garderies 2024
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-check-circle-line text-2xl text-green-600"></i>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">12</div>
              <p className="text-gray-600">Autorisations accordées</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-2xl text-yellow-600"></i>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4</div>
              <p className="text-gray-600">Dossiers en étude</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-close-circle-line text-2xl text-red-600"></i>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
              <p className="text-gray-600">Demandes refusées</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-refresh-line text-2xl text-blue-600"></i>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">8</div>
              <p className="text-gray-600">Renouvellements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section informative */}
      <section className="bg-orange-500 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Information sur les délibérations garderies
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="text-center">
                <i className="ri-calendar-line text-3xl mb-4"></i>
                <h4 className="font-semibold mb-2">Fréquence</h4>
                <p className="text-sm text-white/90">
                  Délibérations hebdomadaires
                </p>
              </div>
              
              <div className="text-center">
                <i className="ri-time-line text-3xl mb-4"></i>
                <h4 className="font-semibold mb-2">Délai moyen</h4>
                <p className="text-sm text-white/90">
                  10 jours ouvrables
                </p>
              </div>
              
              <div className="text-center">
                <i className="ri-shield-check-line text-3xl mb-4"></i>
                <h4 className="font-semibold mb-2">Taux d'approbation</h4>
                <p className="text-sm text-white/90">
                  75% des demandes approuvées
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
