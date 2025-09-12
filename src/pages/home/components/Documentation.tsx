
export default function Documentation() {
  const documents = [
    {
      title: "Décret fixant les modalités de création des CAPE",
      type: "Télécharger le décret",
      icon: "ri-file-pdf-line",
      color: "bg-red-500"
    },
    {
      title: "Décret fixant les modalités de création des GARDERIES",
      type: "Télécharger le décret",
      icon: "ri-file-pdf-line",
      color: "bg-red-500"
    },
    {
      title: "Le modèle consentement pour la collecte de vos données personnelles",
      type: "Télécharger le modèle",
      icon: "ri-file-text-line",
      color: "bg-blue-500"
    },
    {
      title: "Cahier de charge de la GARDERIE",
      type: "Télécharger le cahier des charges par promoteurs",
      icon: "ri-file-pdf-line",
      color: "bg-red-500"
    },
    {
      title: "Le guide d'inscription",
      type: "Télécharger le guide",
      icon: "ri-file-text-line",
      color: "bg-blue-500"
    },
    {
      title: "Le code de l'enfant",
      type: "Télécharger le code de l'enfant",
      icon: "ri-file-text-line",
      color: "bg-red-500"
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <i className="ri-folder-line text-2xl text-orange-500 mr-3"></i>
          <h2 className="text-2xl font-bold text-gray-900">DOCUMENTATION</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((doc, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className={`w-8 h-8 ${doc.color} rounded flex items-center justify-center flex-shrink-0`}>
                  <i className={`${doc.icon} text-white text-sm`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 mb-2">{doc.title}</h3>
                  <button className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center space-x-1 cursor-pointer whitespace-nowrap">
                    <i className="ri-download-line"></i>
                    <span>{doc.type}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}