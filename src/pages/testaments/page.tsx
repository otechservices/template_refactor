
import { useState } from 'react';
import TestamentDetails from '../testament-details/page';
import TestamentRegistration from '../testament-registration/page';
import Sidebar from '../../components/feature/Sidebar';
import MobileHeader from '../../components/feature/MobileHeader';

export default function Testaments() {
  const [currentView, setCurrentView] = useState('list');
  const [selectedTestament, setSelectedTestament] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  
  // States pour la sidebar
  const [activeMenu, setActiveMenu] = useState('testaments');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Données simulées des testaments
  const [testaments, setTestaments] = useState([
    {
      id: 1,
      code: 'TEST-001',
      created_at: '2024-01-15T10:30:00.000Z',
      updated_at: '2024-01-15T10:30:00.000Z',
      status: 2,
      testament_type: 'Testament olographe',
      testament_date: '2024-01-10',
      testator: {
        lastname: 'Martin',
        firstname: 'Jean Pierre',
        birthdate: '1965-03-15',
        birthplace: 'Cotonou',
        job: 'Commerçant',
        address: '15 Rue des Palmiers, Cotonou',
        email: 'jean.martin@email.com',
        phone: '+229 97 12 34 56'
      },
      observation: 'Testament rédigé conformément aux dispositions légales en vigueur.',
      urgentReading: false,
      steps: [
        { id: 1, step_name: 'Informations testateur', completed: true },
        { id: 2, step_name: 'Testament et témoins', completed: true },
        { id: 3, step_name: 'Documents', completed: true },
        { id: 4, step_name: 'Bénéficiaires', completed: true }
      ]
    },
    {
      id: 2,
      code: 'TEST-002',
      created_at: '2024-01-20T14:15:00.000Z',
      updated_at: '2024-01-25T09:45:00.000Z',
      status: 1,
      testament_type: 'Testament authentique',
      testament_date: '2024-01-18',
      testator: {
        lastname: 'Kouassi',
        firstname: 'Marie Claire',
        birthdate: '1970-08-22',
        birthplace: 'Porto-Novo',
        job: 'Enseignante',
        address: '28 Avenue de la Paix, Porto-Novo',
        email: 'marie.kouassi@email.com',
        phone: '+229 96 78 90 12'
      },
      observation: 'Testament en cours de finalisation.',
      urgentReading: true,
      steps: [
        { id: 1, step_name: 'Informations testateur', completed: true },
        { id: 2, step_name: 'Testament et témoins', completed: true }
      ]
    },
    {
      id: 3,
      code: 'TEST-003',
      created_at: '2024-02-01T11:20:00.000Z',
      updated_at: '2024-02-01T11:20:00.000Z',
      status: 0,
      testament_type: 'Testament mystique',
      testament_date: '2024-01-30',
      testator: {
        lastname: 'Dossou',
        firstname: 'Emmanuel Kofi',
        birthdate: '1958-12-05',
        birthplace: 'Abomey',
        job: 'Retraité',
        address: '42 Boulevard Marina, Cotonou',
        email: 'emmanuel.dossou@email.com',
        phone: '+229 95 45 67 89'
      },
      observation: 'Nouveau testament initialisé.',
      urgentReading: false,
      steps: []
    }
  ]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getTestamentStatusLabel = (testament: any) => {
    if (testament.steps.length === 0) {
      return { text: 'Nouveau testament initialisé', class: 'bg-green-100 text-green-800' };
    } else if (testament.status === 2) {
      return { text: 'Testament validé', class: 'bg-blue-100 text-blue-800' };
    } else if (testament.status === 3) {
      return { text: 'Testament archivé', class: 'bg-purple-100 text-purple-800' };
    } else {
      return { text: 'Testament en cours', class: 'bg-yellow-100 text-yellow-800' };
    }
  };

  const getProgressPercentage = (steps: any[]) => {
    const totalSteps = 7;
    return Math.round((steps.length / totalSteps) * 100);
  };

  const filteredTestaments = testaments.filter(testament =>
    testament.testator.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    testament.testator.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    testament.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewDetails = () => {
    if (selectedItem !== null) {
      const testament = testaments.find(t => t.id === selectedItem);
      if (testament) {
        setSelectedTestament(testament);
        setCurrentView('details');
      }
    }
  };

  const handleAddTestament = () => {
    setCurrentView('register');
  };

  const handleCompleteRegistration = (testamentData: any) => {
    setTestaments([...testaments, testamentData]);
    setCurrentView('list');
  };

  const handleUpdateTestament = (updatedData: any) => {
    setTestaments(testaments.map(t => t.id === updatedData.id ? updatedData : t));
    setSelectedTestament(updatedData);
  };

  const handleValidateTestament = () => {
    if (selectedItem !== null) {
      const updatedTestaments = testaments.map(t => 
        t.id === selectedItem ? { ...t, status: 2 } : t
      );
      setTestaments(updatedTestaments);
      setSelectedItem(null);
    }
  };

  const handleArchiveTestament = () => {
    if (selectedItem !== null) {
      const updatedTestaments = testaments.map(t => 
        t.id === selectedItem ? { ...t, status: 3 } : t
      );
      setTestaments(updatedTestaments);
      setSelectedItem(null);
    }
  };

  const handleDeleteTestament = () => {
    if (selectedItem !== null && window.confirm('Êtes-vous sûr de vouloir supprimer ce testament ?')) {
      setTestaments(testaments.filter(t => t.id !== selectedItem));
      setSelectedItem(null);
    }
  };

  if (currentView === 'details') {
    return (
      <TestamentDetails
        onBack={() => setCurrentView('list')}
        testamentData={selectedTestament}
        onUpdateTestament={handleUpdateTestament}
      />
    );
  }

  if (currentView === 'register') {
    return (
      <TestamentRegistration
        onBack={() => setCurrentView('list')}
        onComplete={handleCompleteRegistration}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-100 to-accent-200">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          isMobileSidebarOpen={isMobileSidebarOpen}
          setIsMobileSidebarOpen={setIsMobileSidebarOpen}
          isSidebarCollapsed={isSidebarCollapsed}
          setIsSidebarCollapsed={setIsSidebarCollapsed}
        />

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Mobile header */}
          <MobileHeader setIsMobileSidebarOpen={setIsMobileSidebarOpen} />

          <div className="flex-1 p-4 lg:p-6">
            <div className="bg-white rounded-lg shadow-sm border border-accent-300 h-full">
              <div className="p-4 lg:p-6">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <i className="ri-file-text-line text-blue-600 text-xl"></i>
                    </div>
                    <div>
                      <h1 className="text-xl lg:text-2xl font-bold text-text-dark">Testaments</h1>
                      <p className="text-text-muted text-sm">Liste des inscriptions finalisées</p>
                    </div>
                  </div>
                </div>

                {/* Actions et recherche */}
                <div className="bg-accent-50 rounded-lg p-6 mb-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    {/* Boutons d'action */}
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={handleAddTestament}
                        className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap"
                      >
                        <i className="ri-add-line mr-2"></i>
                        Ajouter
                      </button>

                      <button
                        onClick={handleViewDetails}
                        disabled={selectedItem === null}
                        className="flex items-center px-4 py-2 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap disabled:opacity-50"
                      >
                        <i className="ri-eye-line mr-2"></i>
                        Consulter
                      </button>

                      <button
                        disabled={selectedItem === null}
                        className="flex items-center px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap disabled:opacity-50"
                      >
                        <i className="ri-edit-line mr-2"></i>
                        Éditer
                      </button>

                      <button
                        onClick={handleDeleteTestament}
                        disabled={selectedItem === null}
                        className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap disabled:opacity-50"
                      >
                        <i className="ri-delete-bin-line mr-2"></i>
                        Supprimer
                      </button>

                      <button
                        onClick={handleValidateTestament}
                        disabled={selectedItem === null}
                        className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap disabled:opacity-50"
                      >
                        <i className="ri-check-line mr-2"></i>
                        Valider
                      </button>

                      <button
                        onClick={handleArchiveTestament}
                        disabled={selectedItem === null}
                        className="flex items-center px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap disabled:opacity-50"
                      >
                        <i className="ri-archive-line mr-2"></i>
                        Archiver
                      </button>
                    </div>

                    {/* Barre de recherche */}
                    <div className="lg:w-1/3">
                      <div className="relative">
                        <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted"></i>
                        <input
                          type="text"
                          placeholder="Rechercher par nom, prénom ou code..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-10 pr-4 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tableau des testaments */}
                <div className="bg-white rounded-lg shadow-sm border border-accent-300 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-accent-50 border-b border-accent-300">
                        <tr>
                          <th className="w-12 px-4 py-3 text-left">
                            <input
                              type="radio"
                              name="selectAll"
                              className="w-4 h-4 text-primary-500 border-accent-400 focus:ring-primary-500"
                              disabled
                            />
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Code</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Testateur</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Type</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Date testament</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Créé le</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Statut</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Progression</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Urgence</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredTestaments.map((testament) => (
                          <tr
                            key={testament.id}
                            className={`border-b border-accent-200 hover:bg-accent-50 cursor-pointer ${
                              selectedItem === testament.id ? 'bg-primary-50' : ''
                            }`}
                            onClick={() => setSelectedItem(testament.id)}
                          >
                            <td className="px-4 py-3">
                              <input
                                type="radio"
                                name="testamentSelect"
                                value={testament.id}
                                checked={selectedItem === testament.id}
                                onChange={() => setSelectedItem(testament.id)}
                                className="w-4 h-4 text-primary-500 border-accent-400 focus:ring-primary-500"
                              />
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-sm font-medium text-primary-600">{testament.code}</span>
                            </td>
                            <td className="px-4 py-3">
                              <div>
                                <p className="text-sm font-medium text-text-dark">
                                  {testament.testator.lastname} {testament.testator.firstname}
                                </p>
                                <p className="text-xs text-text-muted">{testament.testator.job}</p>
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-sm text-text-dark">{testament.testament_type}</span>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-sm text-text-dark">{formatDate(testament.testament_date)}</span>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-sm text-text-dark">{formatDateTime(testament.created_at)}</span>
                            </td>
                            <td className="px-4 py-3">
                              <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  getTestamentStatusLabel(testament).class
                                }`}
                              >
                                {getTestamentStatusLabel(testament).text}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex items-center">
                                <div className="w-full bg-accent-200 rounded-full h-2 mr-2">
                                  <div
                                    className="bg-primary-500 h-2 rounded-full"
                                    style={{ width: `${getProgressPercentage(testament.steps)}%` }}
                                  ></div>
                                </div>
                                <span className="text-xs text-text-muted">{getProgressPercentage(testament.steps)}%</span>
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              {testament.urgentReading && (
                                <div className="flex items-center">
                                  <i className="ri-alarm-warning-line text-red-500 mr-1"></i>
                                  <span className="text-xs text-red-600 font-medium">Urgente</span>
                                </div>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Footer du tableau */}
                  <div className="bg-accent-50 px-4 py-3 border-t border-accent-300">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-text-muted">
                        {filteredTestaments.length} testament{filteredTestaments.length > 1 ? 's' : ''} trouvé{filteredTestaments.length > 1 ? 's' : ''}
                      </p>
                      <div className="text-sm text-text-muted">
                        Page 1 sur 1
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay pour mobile */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}
