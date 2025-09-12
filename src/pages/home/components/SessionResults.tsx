
import { useState } from 'react';

interface SessionData {
  id: number;
  annee: string;
  session: string;
  periode: string;
  dossiersInscrits: number;
  dossiersValides: number;
  dossiersRejetes: number;
}

export default function SessionResults() {
  const [searchTerm, setSearchTerm] = useState('');
  const [elementsPerPage, setElementsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Données d'exemple pour les sessions
  const sessionsData: SessionData[] = [
    {
      id: 1,
      annee: '2024',
      session: 'Session 1',
      periode: 'Janvier - Mars',
      dossiersInscrits: 145,
      dossiersValides: 132,
      dossiersRejetes: 13
    },
    {
      id: 2,
      annee: '2024',
      session: 'Session 2',
      periode: 'Avril - Juin',
      dossiersInscrits: 98,
      dossiersValides: 89,
      dossiersRejetes: 9
    },
    {
      id: 3,
      annee: '2023',
      session: 'Session 4',
      periode: 'Octobre - Décembre',
      dossiersInscrits: 156,
      dossiersValides: 142,
      dossiersRejetes: 14
    },
    {
      id: 4,
      annee: '2023',
      session: 'Session 3',
      periode: 'Juillet - Septembre',
      dossiersInscrits: 134,
      dossiersValides: 127,
      dossiersRejetes: 7
    },
    {
      id: 5,
      annee: '2023',
      session: 'Session 2',
      periode: 'Avril - Juin',
      dossiersInscrits: 112,
      dossiersValides: 108,
      dossiersRejetes: 4
    }
  ];

  // Filtrage des données
  const filteredData = sessionsData.filter(session =>
    session.annee.toLowerCase().includes(searchTerm.toLowerCase()) ||
    session.session.toLowerCase().includes(searchTerm.toLowerCase()) ||
    session.periode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalElements = filteredData.length;
  const totalPages = Math.ceil(totalElements / elementsPerPage);
  const startIndex = (currentPage - 1) * elementsPerPage;
  const endIndex = startIndex + elementsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  return (
    <section 
      id="session-results"
      className="relative min-h-screen bg-cover bg-center py-16"
      style={{
        backgroundImage: 'url(https://readdy.ai/api/search-image?query=Professional%20African%20business%20meeting%20with%20people%20discussing%20documents%20and%20charts%20on%20table%2C%20modern%20office%20environment%20with%20natural%20lighting%2C%20collaborative%20work%20atmosphere%2C%20government%20administration%20theme&width=1920&height=1080&seq=session-results-bg&orientation=landscape)',
        marginTop: '80px'
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Résultats des sessions
          </h1>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Contrôles de recherche et pagination */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">{totalElements} élément(s)</span>
              <div className="flex items-center space-x-2">
                <span className="text-gray-700">Afficher</span>
                <select
                  value={elementsPerPage}
                  onChange={(e) => {
                    setElementsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="border border-gray-300 rounded px-3 py-1 text-sm pr-8"
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
                <span className="text-gray-700">éléments</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-gray-700">Rechercher :</span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="border border-gray-300 rounded px-3 py-2 text-sm w-64"
                placeholder="Rechercher..."
              />
            </div>
          </div>

          {/* Tableau des résultats */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-medium text-gray-900">#</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-medium text-gray-900">Année</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-medium text-gray-900">Session</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-medium text-gray-900">Période</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-medium text-gray-900">Dossiers Inscrits</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-medium text-gray-900">Dossiers Validés</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-medium text-gray-900">Dossiers rejetés</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-medium text-gray-900">Voir mon résumé</th>
                </tr>
              </thead>
              <tbody>
                {currentData.length > 0 ? (
                  currentData.map((session, index) => (
                    <tr key={session.id} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-900">
                        {startIndex + index + 1}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-900">
                        {session.annee}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-900">
                        {session.session}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-900">
                        {session.periode}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-900 text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {session.dossiersInscrits}
                        </span>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-900 text-center">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {session.dossiersValides}
                        </span>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-900 text-center">
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                          {session.dossiersRejetes}
                        </span>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-1 mx-auto cursor-pointer whitespace-nowrap">
                          <i className="ri-file-text-line"></i>
                          <span>Voir</span>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8} className="border border-gray-300 px-4 py-8 text-center text-gray-500">
                      Aucune donnée disponible dans le tableau
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-6 space-y-4 md:space-y-0">
            <div className="text-gray-700 text-sm">
              Affichage de l'élément {totalElements > 0 ? startIndex + 1 : 0} à {Math.min(endIndex, totalElements)} sur {totalElements} éléments
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                Précédent
              </button>
              
              <div className="flex items-center space-x-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const pageNumber = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i;
                  if (pageNumber <= totalPages) {
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => setCurrentPage(pageNumber)}
                        className={`px-3 py-2 text-sm rounded cursor-pointer ${
                          currentPage === pageNumber
                            ? 'bg-blue-600 text-white'
                            : 'border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  }
                  return null;
                })}
              </div>

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages || totalPages === 0}
                className="px-3 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                Suivant
              </button>
            </div>
          </div>
        </div>

        {/* Section administration */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 inline-block">
            <p className="text-white mb-4">Mentions légales | Politique de Confidentialité</p>
            <p className="text-white/80 mb-4">Espace d'administration</p>
            <div className="flex items-center justify-center">
              <img 
                src="https://cape.social.gouv.bj/assets/template2/images/logo-masm.png" 
                alt="Ministère des Affaires Sociales et de la Microfinance" 
                className="h-16 object-contain"
              />
            </div>
            <p className="text-white/60 text-sm mt-4">
              © Ministère des Affaires Sociales et de la Microfinance - 2022
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
