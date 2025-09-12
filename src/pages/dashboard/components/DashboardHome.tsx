
export default function DashboardHome() {
  const quickActions = [
    {
      title: 'Inscription CAPE',
      description: 'Demander une autorisation pour un Centre d\'Accueil de la Petite Enfance',
      icon: 'ri-shield-user-line',
      color: 'bg-green-500',
      action: 'inscription-cape'
    },
    {
      title: 'Inscription Garderie',
      description: 'Demander une autorisation pour une garderie',
      icon: 'ri-building-line',
      color: 'bg-blue-500',
      action: 'inscription-garderie'
    },
    {
      title: 'Mes Dossiers',
      description: 'Consulter le statut de vos demandes en cours',
      icon: 'ri-folder-line',
      color: 'bg-orange-500',
      action: 'mes-dossiers'
    },
    {
      title: 'Support',
      description: 'Obtenir de l\'aide ou poser une question',
      icon: 'ri-customer-service-2-line',
      color: 'bg-purple-500',
      action: 'support'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Bienvenue dans votre espace personnel</h1>
        <p className="text-blue-100 text-lg">
          Gérez vos demandes d'autorisation et suivez vos dossiers en toute simplicité
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quickActions.map((action, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer"
          >
            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <i className={`${action.icon} text-white text-xl`}></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{action.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Activité récente</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <i className="ri-file-text-line text-blue-600"></i>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Compte créé avec succès</p>
              <p className="text-xs text-gray-500">Votre espace personnel est maintenant actif</p>
            </div>
            <span className="text-xs text-gray-400">Aujourd'hui</span>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
        <div className="flex items-start space-x-3">
          <i className="ri-information-line text-yellow-600 text-xl mt-1"></i>
          <div>
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Informations importantes</h3>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Les demandes sont traitées sous 15 jours ouvrables</li>
              <li>• Assurez-vous d'avoir tous les documents requis avant de soumettre</li>
              <li>• Vous recevrez une notification par email à chaque étape</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
