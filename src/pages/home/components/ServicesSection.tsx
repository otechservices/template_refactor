
export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "État Civil",
      description: "Actes de naissance, mariage, décès et autres documents officiels",
      icon: "ri-user-line",
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Urbanisme",
      description: "Permis de construire, certificats d'urbanisme, autorisations",
      icon: "ri-building-line",
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Développement Local",
      description: "Projets communautaires, infrastructures, développement économique",
      icon: "ri-community-line",
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "Services Sociaux",
      description: "Action sociale, aide aux familles, programmes d'assistance",
      icon: "ri-heart-line",
      color: "bg-red-500"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Actualités des Élus",
      description: "Suivez les activités et décisions de vos représentants élus",
      items: [
        "Conseils municipaux",
        "Décisions du maire",
        "Projets en cours",
        "Rencontres citoyennes"
      ]
    },
    {
      id: 2,
      title: "Plan de Développement",
      description: "Découvrez notre vision pour l'avenir de Dangbo",
      items: [
        "Projets d'infrastructure",
        "Développement économique",
        "Amélioration des services",
        "Environnement durable"
      ]
    }
  ];

  const announcements = [
    {
      id: 1,
      title: "Appel d'offres - Réfection des routes",
      date: "20 Janvier 2025",
      type: "Appel d'offres",
      urgent: true
    },
    {
      id: 2,
      title: "Fermeture temporaire des bureaux",
      date: "18 Janvier 2025",
      type: "Avis",
      urgent: false
    },
    {
      id: 3,
      title: "Assemblée générale citoyenne",
      date: "25 Janvier 2025",
      type: "Convocation",
      urgent: true
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Services & Projets
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos initiatives pour améliorer votre quotidien
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${service.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
                <span className="mr-2">En savoir plus</span>
                <i className="ri-arrow-right-line"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="ri-government-line text-blue-600 mr-3"></i>
                {project.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {project.description}
              </p>
              <ul className="space-y-3">
                {project.items.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <i className="ri-check-line text-green-500 mr-3"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Announcements Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <i className="ri-megaphone-line text-red-500 mr-3"></i>
              Avis & Communiqués
            </h3>
            <button className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer">
              Voir tous les avis →
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    announcement.urgent
                      ? 'bg-red-100 text-red-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {announcement.type}
                  </span>
                  {announcement.urgent && (
                    <i className="ri-alert-line text-red-500 text-lg"></i>
                  )}
                </div>
                <h4 className="font-bold text-gray-900 mb-3 leading-tight">
                  {announcement.title}
                </h4>
                <div className="flex items-center text-gray-500 text-sm">
                  <i className="ri-calendar-line mr-2"></i>
                  {announcement.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
