
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';

interface Garderie {
  id: number;
  denomination: string;
  responsable: string;
  localisation: string;
  contact: string;
}

const garderies: Garderie[] = [
  { id: 1, denomination: "Garderie Les Petits Anges", responsable: "Mme ADJOVI Marie", localisation: "Cotonou, Fidjrossè", contact: "97 45 32 18" },
  { id: 2, denomination: "Garderie Sainte Marie", responsable: "Mme KOUDOUNO Sylvie", localisation: "Porto-Novo, Centre-ville", contact: "95 78 41 23" },
  { id: 3, denomination: "Garderie Les Bambins Joyeux", responsable: "M. AGBO Jean", localisation: "Parakou, Quartier Banikanni", contact: "96 12 85 47" },
  { id: 4, denomination: "Garderie L'Éveil des Tout-Petits", responsable: "Mme DOSSOU Françoise", localisation: "Abomey-Calavi, Akassato", contact: "97 63 29 15" },
  { id: 5, denomination: "Garderie Arc-en-Ciel", responsable: "Mlle HOUNKPATIN Grace", localisation: "Cotonou, Akpakpa", contact: "95 84 17 36" },
  { id: 6, denomination: "Garderie Les Étoiles", responsable: "Mme YEMADJE Cecile", localisation: "Bohicon, Centre", contact: "96 47 53 82" },
  { id: 7, denomination: "Garderie Petit Monde", responsable: "M. KOUGBLENOU Paul", localisation: "Natitingou, Quartier Koussey", contact: "97 25 68 91" },
  { id: 8, denomination: "Garderie Les Coccinelles", responsable: "Mme ADEOTI Monique", localisation: "Ouidah, Centre-ville", contact: "95 39 74 62" },
  { id: 9, denomination: "Garderie Soleil Levant", responsable: "Mme TOKPANOU Judith", localisation: "Lokossa, Quartier Djigbé", contact: "96 81 45 27" },
  { id: 10, denomination: "Garderie Les Petites Abeilles", responsable: "M. SENOU Robert", localisation: "Kandi, Centre", contact: "97 15 92 38" },
  { id: 11, denomination: "Garderie Bonne Nouvelle", responsable: "Mme SOSSOU Augustine", localisation: "Djougou, Quartier Kolokondé", contact: "95 67 83 14" },
  { id: 12, denomination: "Garderie Les Lutins", responsable: "Mlle AZONDEKON Rose", localisation: "Savalou, Centre-ville", contact: "96 34 76 59" },
  { id: 13, denomination: "Garderie Espoir", responsable: "Mme GBENOU Martine", localisation: "Pobè, Quartier Ayou", contact: "97 58 12 43" },
  { id: 14, denomination: "Garderie Les Perles", responsable: "M. AYENA Desire", localisation: "Tchaourou, Centre", contact: "95 42 87 65" },
  { id: 15, denomination: "Garderie Petit Paradis", responsable: "Mme FASSINOU Beatrice", localisation: "Malanville, Quartier Toumboutou", contact: "96 73 29 18" },
  { id: 16, denomination: "Garderie Les Hirondelles", responsable: "Mme ADJAKPA Sylviane", localisation: "Comè, Centre-ville", contact: "97 19 64 82" },
  { id: 17, denomination: "Garderie Douce Mélodie", responsable: "M. TEGBE Emmanuel", localisation: "Allada, Quartier Attakè", contact: "95 86 37 41" },
  { id: 18, denomination: "Garderie Les Diamants", responsable: "Mme HOUNSOU Marie-Claire", localisation: "Bassila, Centre", contact: "96 52 94 76" },
  { id: 19, denomination: "Garderie Rayon de Soleil", responsable: "Mlle AMOUSSOU Eugenie", localisation: "Sèmè-Kpodji, Djeffa", contact: "97 28 15 63" },
  { id: 20, denomination: "Garderie Les Papillons", responsable: "Mme ZINSOU Colette", localisation: "Aplahoué, Centre-ville", contact: "95 73 48 29" },
  { id: 21, denomination: "Garderie Nouvelle Génération", responsable: "M. ALASSANE Moussa", localisation: "Banikoara, Quartier Soroko", contact: "96 41 86 37" },
  { id: 22, denomination: "Garderie Les Tournesols", responsable: "Mme BIAOU Rosine", localisation: "Zagnanado, Centre", contact: "97 67 23 54" },
  { id: 23, denomination: "Garderie Petit Bonheur", responsable: "Mme MITCHODIGNI Simone", localisation: "Covè, Quartier Lanta", contact: "95 35 79 81" },
  { id: 24, denomination: "Garderie Les Roses", responsable: "M. HOUETO Joseph", localisation: "Glazoué, Centre-ville", contact: "96 89 42 16" },
  { id: 25, denomination: "Garderie Jardin des Enfants", responsable: "Mme DAGNON Philomene", localisation: "Dassa-Zoumè, Centre", contact: "97 13 56 78" },
  { id: 26, denomination: "Garderie Les Colombes", responsable: "Mlle HOUNKONNOU Nadege", localisation: "Athiémé, Quartier Djègbadji", contact: "95 78 94 32" },
  { id: 27, denomination: "Garderie Éveil Maternel", responsable: "Mme YEDOMONHAN Honorine", localisation: "Dogbo, Centre-ville", contact: "96 24 67 85" },
  { id: 28, denomination: "Garderie Les Violettes", responsable: "M. ASSOGBA Fidèle", localisation: "Kétou, Quartier Idigny", contact: "97 51 38 42" },
  { id: 29, denomination: "Garderie Petit Royaume", responsable: "Mme AKPLOGAN Véronique", localisation: "Sakété, Centre", contact: "95 46 82 17" },
  { id: 30, denomination: "Garderie Les Marguerites", responsable: "Mme AGOSSOU Christine", localisation: "Adja-Ouèrè, Centre-ville", contact: "96 72 19 63" },
  { id: 31, denomination: "Garderie Tendresse Maternelle", responsable: "M. ZONGO Alassane", localisation: "Ségbana, Quartier Liboussou", contact: "97 38 75 24" },
  { id: 32, denomination: "Garderie Les Lilas", responsable: "Mme AGBOKPANZO Bernadette", localisation: "Grand-Popo, Centre", contact: "95 63 91 48" },
  { id: 33, denomination: "Garderie Bonheur des Enfants", responsable: "Mlle ADANDE Georgette", localisation: "Klouékanmè, Centre-ville", contact: "96 87 34 52" },
  { id: 34, denomination: "Garderie Les Tulipes", responsable: "Mme TCHIBOZO Félicité", localisation: "Lalo, Quartier Tchito", contact: "97 45 68 91" },
  { id: 35, denomination: "Garderie Nid Douillet", responsable: "M. AHOSSOU Raphael", localisation: "Toffo, Centre", contact: "95 29 73 86" },
  { id: 36, denomination: "Garderie Les Orchidées", responsable: "Mme DOSSOU-YOVO Pauline", localisation: "Toviklin, Centre-ville", contact: "96 54 17 32" },
  { id: 37, denomination: "Garderie Premier Pas", responsable: "Mme YEHOUENOU Marie-José", localisation: "Houéyogbé, Quartier Ayizame", contact: "97 68 83 45" },
  { id: 38, denomination: "Garderie Les Jonquilles", responsable: "M. ZINSOU Marcel", localisation: "Boukombé, Centre", contact: "95 14 79 56" },
  { id: 39, denomination: "Garderie Rêves d'Enfants", responsable: "Mme SOGLO Antoinette", localisation: "Matéri, Centre-ville", contact: "96 82 46 23" },
  { id: 40, denomination: "Garderie Les Mimosas", responsable: "Mlle AGBO-PANZO Thérèse", localisation: "Tanguiéta, Quartier Benti", contact: "97 37 91 74" },
  { id: 41, denomination: "Garderie Cocon de Tendresse", responsable: "Mme DANGBEDJI Julienne", localisation: "Copargo, Centre", contact: "95 56 28 13" },
  { id: 42, denomination: "Garderie Les Pâquerettes", responsable: "M. HOUNMENOU Sylvain", localisation: "Kouandé, Centre-ville", contact: "96 71 45 89" },
  { id: 43, denomination: "Garderie Sourire d'Enfant", responsable: "Mme VIHOUNON Célestine", localisation: "Péhunco, Quartier Gninsy", contact: "97 23 67 34" },
  { id: 44, denomination: "Garderie Les Coquelicots", responsable: "Mme TOKPANOU Agnès", localisation: "Sinendé, Centre", contact: "95 89 52 41" },
  { id: 45, denomination: "Garderie Petit Trésor", responsable: "M. BIAOU Antoine", localisation: "Bembèrèkè, Centre-ville", contact: "96 43 78 26" },
  { id: 46, denomination: "Garderie Les Pensées", responsable: "Mme CAKPO Honorine", localisation: "N'Dali, Quartier Bétérou", contact: "97 76 14 58" },
  { id: 47, denomination: "Garderie Douceur Infantile", responsable: "Mlle AGBOSSOU Viviane", localisation: "Nikki, Centre", contact: "95 32 87 69" },
  { id: 48, denomination: "Garderie Les Bégonias", responsable: "Mme AVOCEVOU Marie-Thérèse", localisation: "Pèrèrè, Centre-ville", contact: "96 65 39 47" },
  { id: 49, denomination: "Garderie Univers des Petits", responsable: "M. GNONLONFOUN Pierre", localisation: "Kalale, Quartier Pédarou", contact: "97 18 74 83" },
  { id: 50, denomination: "Garderie Les Azalées", responsable: "Mme YEKPE Anastasie", localisation: "Ouaké, Centre", contact: "95 74 26 31" },
  { id: 51, denomination: "Garderie Oasis des Bambins", responsable: "Mme ZOSSOU Brigitte", localisation: "So-Ava, Vekky", contact: "96 52 91 46" },
  { id: 52, denomination: "Garderie Les Géraniums", responsable: "M. ADANDJÈ Gilbert", localisation: "Ifangni, Centre-ville", contact: "97 84 37 62" },
  { id: 53, denomination: "Garderie Monde Magique", responsable: "Mme HOUNGBEDJI Lucienne", localisation: "Ouinhi, Centre", contact: "95 47 69 85" },
  { id: 54, denomination: "Garderie Les Primevères", responsable: "Mlle AHOLOUKPE Rosalie", localisation: "Zè, Quartier Djidja", contact: "96 73 18 24" },
  { id: 55, denomination: "Garderie Câlin Maternel", responsable: "Mme KOUSSI Fatouma", localisation: "Gogounou, Centre-ville", contact: "97 29 86 57" },
  { id: 56, denomination: "Garderie Les Iris", responsable: "M. ADJAHO Norbert", localisation: "Karimama, Quartier Monkassa", contact: "95 61 43 78" },
  { id: 57, denomination: "Garderie Paradis des Enfants", responsable: "Mme AFFOUKOU Euphrasie", localisation: "Zogbodomey, Centre", contact: "96 38 75 12" }
];

export default function GarderiesAutorisesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredGarderies = garderies.filter(garderie =>
    garderie.denomination.toLowerCase().includes(searchTerm.toLowerCase()) ||
    garderie.responsable.toLowerCase().includes(searchTerm.toLowerCase()) ||
    garderie.localisation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredGarderies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredGarderies.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Happy%20children%20playing%20in%20a%20safe%20nursery%20environment%20with%20toys%20and%20caring%20teachers%2C%20bright%20and%20welcoming%20childcare%20center%20interior%20with%20colorful%20educational%20materials%20and%20secure%20playground%20area%2C%20professional%20daycare%20facility%20with%20modern%20safety%20standards%20and%20child-friendly%20design%20elements&width=1200&height=400&seq=garderies-hero&orientation=landscape')`
        }}
      >
        <div className="text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Liste des Garderies autorisées</h1>
          <p className="text-xl md:text-2xl opacity-90">Structures agréées pour l'accueil des enfants</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filter Section */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-medium">{filteredGarderies.length} élément(s)</span>
                <div className="flex items-center space-x-2">
                  <label className="text-gray-600">Afficher</label>
                  <select 
                    value={itemsPerPage}
                    onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
                    className="border border-gray-300 rounded px-3 py-1 text-sm"
                  >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                  <span className="text-gray-600">éléments</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <label className="text-gray-600">Rechercher :</label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-2 text-sm w-64"
                  placeholder="Nom de la garderie..."
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16">#</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dénomination</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Responsable</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Localisation</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentItems.map((garderie, index) => (
                    <tr key={garderie.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {startIndex + index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {garderie.denomination}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {garderie.responsable}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {garderie.localisation}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {garderie.contact}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-8">
            <div className="text-sm text-gray-600">
              Affichage de l'élément {startIndex + 1} à {Math.min(startIndex + itemsPerPage, filteredGarderies.length)} sur {filteredGarderies.length}
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Précédent
              </button>
              
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const page = i + 1;
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-2 text-sm border rounded ${
                      currentPage === page
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
              
              {totalPages > 5 && (
                <>
                  <span className="text-gray-500">...</span>
                  <button
                    onClick={() => handlePageChange(totalPages)}
                    className={`px-3 py-2 text-sm border rounded ${
                      currentPage === totalPages
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {totalPages}
                  </button>
                </>
              )}
              
              <button
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-sm border border-gray-300 rounded bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Suivant
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Besoin d'informations ?</h3>
            <p className="text-gray-600 mb-4">
              <strong>NB:</strong> Pour contacter une garderie, veuillez vous référer au Ministère des Affaires Sociales et de la Microfinance (MASM):
            </p>
            <a 
              href="mailto:masm.dea@gouv.bj" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
            >
              <i className="ri-mail-line mr-2"></i>
              Contactez le MASM
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
