
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CapeAutorisesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [elementsPerPage, setElementsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const capeList = [
    { id: 1, name: 'Orphelinat Mère Brandis' },
    { id: 2, name: 'Orphelinat Saint Jean Paul II' },
    { id: 3, name: 'Orphelinat Saint Augustin de Sakété' },
    { id: 4, name: 'Orphelinat ASSAFWA' },
    { id: 5, name: 'Centre des aveugles Père Paul Rival "ALLO YON"' },
    { id: 6, name: 'Orphelinat AS SADAKA' },
    { id: 7, name: 'Orphelinat les Saints Innocents de Lobogo' },
    { id: 8, name: 'Orphelinat AL HOUDA' },
    { id: 9, name: 'Orphelinat AS SALAM' },
    { id: 10, name: 'Centre d\'accueil des orphelins et enfants vulnérables OHANA' },
    { id: 11, name: 'Centre d\'Accueil La Providence' },
    { id: 12, name: 'Orphelinat Sainte Marie de Cotonou' },
    { id: 13, name: 'Centre d\'Accueil des Enfants Défavorisés' },
    { id: 14, name: 'Maison d\'Espoir pour Enfants' },
    { id: 15, name: 'Centre de Protection de l\'Enfance' },
    { id: 16, name: 'Foyer Saint Joseph' },
    { id: 17, name: 'Centre d\'Accueil Bethléem' },
    { id: 18, name: 'Orphelinat Notre Dame de Lourdes' },
    { id: 19, name: 'Centre d\'Aide à l\'Enfance en Détresse' },
    { id: 20, name: 'Maison de l\'Enfant Jésus' },
    { id: 21, name: 'Centre d\'Accueil La Miséricorde' },
    { id: 22, name: 'Orphelinat Saint François d\'Assise' },
    { id: 23, name: 'Centre de Réhabilitation des Mineurs' },
    { id: 24, name: 'Foyer d\'Accueil Sainte Thérèse' },
    { id: 25, name: 'Centre d\'Hébergement des Enfants Vulnérables' },
    { id: 26, name: 'Maison d\'Accueil Saint Vincent de Paul' },
    { id: 27, name: 'Centre de Protection des Mineurs en Danger' },
    { id: 28, name: 'Orphelinat Saint Pierre et Paul' },
    { id: 29, name: 'Centre d\'Accueil La Paix' },
    { id: 30, name: 'Foyer des Enfants Abandonnés' },
    { id: 31, name: 'Centre d\'Aide aux Orphelins' },
    { id: 32, name: 'Maison de l\'Espérance' },
    { id: 33, name: 'Centre d\'Accueil des Mineurs Isolés' },
    { id: 34, name: 'Orphelinat Sainte Bernadette' },
    { id: 35, name: 'Centre de Prise en Charge des Enfants' },
    { id: 36, name: 'Foyer d\'Accueil Temporaire' },
    { id: 37, name: 'Centre d\'Hébergement d\'Urgence' },
    { id: 38, name: 'Maison d\'Accueil Spécialisée' },
    { id: 39, name: 'Centre de Réinsertion des Jeunes' },
    { id: 40, name: 'Orphelinat Saint Michel Archange' },
    { id: 41, name: 'Centre d\'Accueil La Résurrection' },
    { id: 42, name: 'Foyer des Enfants Défavorisés' },
    { id: 43, name: 'Centre de Protection Sociale' },
    { id: 44, name: 'Maison d\'Accueil des Mineurs' },
    { id: 45, name: 'Centre d\'Aide à l\'Insertion' },
    { id: 46, name: 'Orphelinat Sainte Marie Madeleine' },
    { id: 47, name: 'Centre d\'Hébergement et de Réadaptation' },
    { id: 48, name: 'Foyer d\'Accueil des Jeunes Filles' },
    { id: 49, name: 'Centre de Soutien aux Familles' },
    { id: 50, name: 'Maison d\'Accueil Spécialisée pour Mineurs' },
    { id: 51, name: 'Centre d\'Accompagnement Social' },
    { id: 52, name: 'Orphelinat Saint Dominique' },
    { id: 53, name: 'Centre de Réhabilitation et d\'Insertion' },
    { id: 54, name: 'Foyer d\'Accueil Familial' },
    { id: 55, name: 'Centre d\'Aide Psychosociale' },
    { id: 56, name: 'Maison d\'Accueil Éducatif' },
    { id: 57, name: 'Centre de Protection de l\'Enfance Vulnérable' },
    { id: 58, name: 'Orphelinat Sainte Rita' },
    { id: 59, name: 'Centre d\'Hébergement Temporaire' },
    { id: 60, name: 'Foyer de Jeunes en Difficulté' },
    { id: 61, name: 'Centre d\'Accueil et d\'Orientation' },
    { id: 62, name: 'Maison de l\'Enfance' },
    { id: 63, name: 'Centre de Soutien Éducatif' },
    { id: 64, name: 'Orphelinat Saint Antoine de Padoue' },
    { id: 65, name: 'Centre d\'Aide aux Jeunes en Détresse' },
    { id: 66, name: 'Foyer d\'Accueil d\'Urgence' },
    { id: 67, name: 'Centre de Réadaptation Sociale' },
    { id: 68, name: 'Maison d\'Accueil pour Adolescents' },
    { id: 69, name: 'Centre de Protection et d\'Accompagnement' },
    { id: 70, name: 'Orphelinat Saint Christophe' },
    { id: 71, name: 'Centre d\'Hébergement Éducatif' },
    { id: 72, name: 'Foyer de Transition' },
    { id: 73, name: 'Centre d\'Aide à la Réinsertion' },
    { id: 74, name: 'Maison d\'Accueil Thérapeutique' }
  ];

  const filteredList = capeList.filter(cape =>
    cape.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalElements = filteredList.length;
  const totalPages = Math.ceil(totalElements / elementsPerPage);
  const startIndex = (currentPage - 1) * elementsPerPage;
  const endIndex = startIndex + elementsPerPage;
  const currentElements = filteredList.slice(startIndex, endIndex);

  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="w-full px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://cape.social.gouv.bj/assets/template2/images/logo-masm.png" 
                  alt="LOGO MASM" 
                  className="h-12 object-contain"
                />
              </div>
            </div>
            
            <nav className="flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 cursor-pointer">ACCUEIL</Link>
              
              <div className="relative group">
                <span className="text-gray-700 hover:text-blue-600 cursor-pointer flex items-center">
                  E-SERVICES
                  <i className="ri-arrow-down-s-line ml-1"></i>
                </span>
              </div>

              <div className="relative group">
                <span className="text-gray-700 hover:text-blue-600 cursor-pointer flex items-center">
                  DÉLIBÉRATIONS
                  <i className="ri-arrow-down-s-line ml-1"></i>
                </span>
              </div>

              <div className="relative group">
                <span className="text-blue-600 font-medium cursor-pointer flex items-center">
                  STRUCTURES AUTORISÉES
                  <i className="ri-arrow-down-s-line ml-1"></i>
                </span>
              </div>

              <div className="relative group">
                <span className="text-gray-700 hover:text-blue-600 cursor-pointer flex items-center">
                  SUPPORT
                  <i className="ri-arrow-down-s-line ml-1"></i>
                </span>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-96 flex items-center justify-center bg-cover bg-center pt-20"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=Happy%20African%20children%20playing%20together%20in%20a%20safe%20childcare%20environment%2C%20bright%20and%20welcoming%20orphanage%20setting%2C%20professional%20care%20and%20protection%20atmosphere%2C%20warm%20natural%20lighting%2C%20hope%20and%20safety%20theme&width=1920&height=600&seq=cape-hero&orientation=landscape)'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Liste des CAPE autorisés</h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Stats and Search */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-sm text-gray-600">
              <p>{totalElements} élément(s)</p>
              <p>0 élément(s)</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <label className="text-sm text-gray-600">Afficher</label>
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
                  <option value={100}>100</option>
                </select>
                <span className="text-sm text-gray-600">éléments</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <label className="text-sm text-gray-600">Rechercher :</label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="border border-gray-300 rounded px-3 py-1 text-sm w-48"
                  placeholder="Rechercher..."
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-gray-700 w-16">
                    <div className="flex items-center">
                      #
                      <button className="ml-1 text-gray-400 hover:text-gray-600">
                        <i className="ri-arrow-up-down-line text-xs"></i>
                      </button>
                    </div>
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-medium text-gray-700">
                    <div className="flex items-center">
                      Dénomination
                      <button className="ml-1 text-gray-400 hover:text-gray-600">
                        <i className="ri-arrow-up-down-line text-xs"></i>
                      </button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentElements.map((cape, index) => (
                  <tr key={cape.id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-sm text-center">
                      <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs mx-auto">
                        {startIndex + index + 1}
                      </div>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-900">
                      {cape.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-8">
            <div className="text-sm text-gray-600">
              Affichage de l'élément 1 à {Math.min(elementsPerPage, totalElements)} sur {totalElements}
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                « précédent
              </button>
              
              {generatePageNumbers().map(pageNum => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-3 py-2 text-sm border rounded ${
                    currentPage === pageNum
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {pageNum}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Suivant
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 p-6 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-700 mb-2">
              <strong>NB:</strong> Pour contacter un CAPE, veuillez vous référer au Ministère des Affaires Sociales et de la Microfinance (MASM):
            </p>
            <Link to="/information" className="text-blue-600 hover:underline text-sm font-medium">
              Contactez le MASM →
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-4">
              <Link to="/information" className="text-yellow-400 hover:underline text-sm">
                Mentions légales
              </Link>
              <span className="text-gray-400">|</span>
              <Link to="/information" className="text-yellow-400 hover:underline text-sm">
                Politique de Confidentialité
              </Link>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-gray-400 mb-4">Espace d'administration</p>
              <div className="w-16 h-16 mx-auto mb-4">
                <img 
                  src="https://cape.social.gouv.bj/assets/template2/images/logo-masm.png" 
                  alt="LOGO MASM" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xs text-gray-500">
                © Ministère des Affaires Sociales et de la Microfinance - 2022
              </p>
            </div>
            
            <div className="flex items-center justify-center">
              <Link 
                to="https://readdy.ai/?origin=logo" 
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Made with Readdy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
