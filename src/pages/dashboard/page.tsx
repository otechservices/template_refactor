
import { useState } from 'react';
import Sidebar from '../../components/feature/Sidebar';
import MobileHeader from '../../components/feature/MobileHeader';

// Import des composants de pages spécialisées
import TestamentDetails from '../testament-details/page';
import TestamentRegistration from '../testament-registration/page';
import DeclarationDetails from '../declaration-details/page';
import DeclarationRegistration from '../declaration-registration/page';

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  
  // États pour la navigation des vues
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // États pour les modales
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'add' | 'edit' | 'delete' | 'view'>('add');
  const [modalData, setModalData] = useState<any>(null);

  // États pour les filtres et recherche
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Données simulées
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
    }
  ]);

  const [declarations, setDeclarations] = useState([
    {
      id: 1,
      code: 'DECL-001',
      created_at: '2024-02-01T09:15:00.000Z',
      updated_at: '2024-02-01T09:15:00.000Z',
      status: 1,
      testator: {
        lastname: 'Dupont',
        firstname: 'Sophie Marie',
        birthdate: '1972-06-18',
        birthplace: 'Parakou',
        job: 'Notaire',
        address: "22 Avenue de l'Indépendance, Parakou",
        email: 'sophie.dupont@email.com',
        phone: '+229 94 56 78 90'
      },
      observation: "Déclaration d'inscription en cours de traitement.",
      steps: [
        { id: 1, step_name: 'Informations personnelles', completed: true }
      ]
    }
  ]);

  const [donations, setDonations] = useState([
    {
      id: 1,
      npi: 'NPI-DON-001',
      created_at: '2024-02-05T11:30:00.000Z',
      updated_at: '2024-02-05T11:30:00.000Z',
      status: 'en_attente',
      type: 'donation',
      testator: {
        lastname: 'Bernard',
        firstname: 'Paul Michel',
        birthdate: '1968-09-22',
        birthplace: 'Bohicon',
        job: 'Entrepreneur',
        address: '35 Rue des Martyrs, Bohicon',
        email: 'paul.bernard@email.com',
        phone: '+229 93 67 89 01'
      },
      amount: 50000,
      description: 'Donation immobilière'
    }
  ]);

  const [users, setUsers] = useState([
    {
      id: 1,
      lastname: 'Admin',
      firstname: 'Super',
      email: 'admin@fdv.bj',
      role: 'Administrateur',
      status: 'actif',
      created_at: '2024-01-01T00:00:00.000Z',
      last_login: '2024-02-28T08:30:00.000Z'
    },
    {
      id: 2,
      lastname: 'Notaire',
      firstname: 'Jean',
      email: 'jean.notaire@fdv.bj',
      role: 'Notaire Principal',
      status: 'actif',
      created_at: '2024-01-15T10:00:00.000Z',
      last_login: '2024-02-27T16:45:00.000Z'
    }
  ]);

  const [depenses, setDepenses] = useState([
    {
      id: 1,
      reference: 'MAIS-001',
      montant: 125000,
      date: '2024-02-15',
      description: 'Rénovation toiture principale',
      fichier: 'facture_renovation_001.pdf',
      status: 'validé'
    },
    {
      id: 2,
      reference: 'MAIS-002',
      montant: 75000,
      date: '2024-02-20',
      description: 'Plomberie salle de bain',
      fichier: 'facture_plomberie_002.pdf',
      status: 'en_attente'
    }
  ]);

  const [notaires, setNotaires] = useState([
    {
      id: 1,
      lastname: 'Kouassi',
      firstname: 'Emmanuel',
      office: 'Étude Kouassi & Partenaires',
      address: '15 Avenue de la République, Cotonou',
      email: 'e.kouassi@etude.bj',
      phone: '+229 97 12 34 56',
      role: 'Principal',
      status: 'actif'
    },
    {
      id: 2,
      lastname: 'Martin',
      firstname: 'Claire',
      office: 'Cabinet Martin Notaires',
      address: '28 Rue de la Paix, Porto-Novo',
      email: 'c.martin@cabinet.bj',
      phone: '+229 96 78 90 12',
      role: 'Associé',
      status: 'actif'
    }
  ]);

  const [personnes, setPersonnes] = useState([
    {
      id: 1,
      npi: 'NPI-PER-001',
      lastname: 'Témoin',
      firstname: 'Marie',
      birthdate: '1980-04-15',
      birthplace: 'Cotonou',
      job: 'Greffier',
      address: '12 Rue des Fleurs, Cotonou',
      email: 'marie.temoin@email.com',
      phone: '+229 95 23 45 67',
      category: 'Témoin',
      status: 'actif'
    },
    {
      id: 2,
      npi: 'NPI-PER-002',
      lastname: 'Exécuteur',
      firstname: 'Paul',
      birthdate: '1975-08-22',
      birthplace: 'Porto-Novo',
      job: 'Avocat',
      address: '33 Avenue Marina, Porto-Novo',
      email: 'paul.executeur@email.com',
      phone: '+229 94 56 78 90',
      category: 'Exécutaire',
      status: 'actif'
    }
  ]);

  const [permissions, setPermissions] = useState([
    { id: 1, libelle: 'Ajouter Transactions', statut: 'Actif', type: 'Transaction' },
    { id: 2, libelle: 'Modifier Transactions', statut: 'Actif', type: 'Transaction' },
    { id: 3, libelle: 'Consulter Transactions', statut: 'Actif', type: 'Transaction' },
    { id: 4, libelle: 'Supprimer Transactions', statut: 'Inactif', type: 'Transaction' },
    { id: 5, libelle: 'Filtrer Transactions', statut: 'Actif', type: 'Transaction' },
    { id: 6, libelle: 'Rechercher Transactions', statut: 'Actif', type: 'Transaction' },
    { id: 7, libelle: 'Changer État Transactions', statut: 'Actif', type: 'Transaction' },
    { id: 8, libelle: 'Lister Versions', statut: 'Actif', type: 'Version' },
    { id: 9, libelle: 'Ajouter Versions', statut: 'Inactif', type: 'Version' },
    { id: 10, libelle: 'Modifier Versions', statut: 'Actif', type: 'Version' },
    { id: 11, libelle: 'Consulter Utilisateurs', statut: 'Actif', type: 'Utilisateur' },
    { id: 12, libelle: 'Gérer Rôles', statut: 'Actif', type: 'Utilisateur' },
    { id: 13, libelle: 'Export Données', statut: 'Inactif', type: 'Système' },
    { id: 14, libelle: 'Import Données', statut: 'Actif', type: 'Système' },
    { id: 15, libelle: 'Configuration Système', statut: 'Actif', type: 'Système' },
    { id: 16, libelle: 'Archiver Transactions', statut: 'Actif', type: 'Transaction' },
    { id: 17, libelle: 'Restaurer Transactions', statut: 'Inactif', type: 'Transaction' },
    { id: 18, libelle: 'Valider Versions', statut: 'Actif', type: 'Version' },
    { id: 19, libelle: 'Publier Versions', statut: 'Actif', type: 'Version' },
    { id: 20, libelle: 'Bloquer Utilisateurs', statut: 'Inactif', type: 'Utilisateur' }
  ]);

  const [roles, setRoles] = useState([
    { id: 1, name: 'Administrateur', description: 'Accès complet au système', dateCreation: '2024-01-10', status: 'Actif' },
    { id: 2, name: 'Superviseur', description: 'Supervision et contrôle des opérations', dateCreation: '2024-01-10', status: 'Actif' },
    { id: 3, name: 'Gestionnaire', description: 'Gestion des dossiers et transactions', dateCreation: '2024-01-10', status: 'Actif' },
    { id: 4, name: 'Utilisateur', description: 'Consultation et saisie de base', dateCreation: '2024-01-10', status: 'Actif' },
    { id: 5, name: 'Archiviste', description: 'Gestion des archives et documents', dateCreation: '2024-01-15', status: 'Actif' },
    { id: 6, name: 'Auditeur', description: 'Audit et contrôle des données', dateCreation: '2024-01-20', status: 'Inactif' },
    { id: 7, name: 'Consultant', description: 'Consultation en lecture seule', dateCreation: '2024-01-25', status: 'Actif' },
    { id: 8, name: 'Opérateur', description: 'Opérations quotidiennes limitées', dateCreation: '2024-02-01', status: 'Actif' },
    { id: 9, name: 'Validateur', description: 'Validation des processus et documents', dateCreation: '2024-02-05', status: 'Actif' },
    { id: 10, name: 'Invité', description: 'Accès temporaire et limité', dateCreation: '2024-02-10', status: 'Inactif' }
  ]);

  const [profiles, setProfiles] = useState([
    { 
      id: 1, 
      name: 'Profil Administrateur', 
      description: 'Profil avec tous les droits administrateur',
      dateCreation: '2024-01-10', 
      status: 'Actif',
      permissions: [
        { id: 1, name: 'Ajouter Transactions' },
        { id: 2, name: 'Modifier Transactions' },
        { id: 3, name: 'Consulter Transactions' },
        { id: 11, name: 'Consulter Utilisateurs' },
        { id: 12, name: 'Gérer Rôles' },
        { id: 15, name: 'Configuration Système' }
      ]
    },
    { 
      id: 2, 
      name: 'Profil Superviseur', 
      description: 'Profil de supervision avec droits étendus',
      dateCreation: '2024-01-12', 
      status: 'Actif',
      permissions: [
        { id: 3, name: 'Consulter Transactions' },
        { id: 5, name: 'Filtrer Transactions' },
        { id: 6, name: 'Rechercher Transactions' },
        { id: 8, name: 'Lister Versions' },
        { id: 11, name: 'Consulter Utilisateurs' }
      ]
    },
    { 
      id: 3, 
      name: 'Profil Gestionnaire', 
      description: 'Profil pour la gestion des dossiers',
      dateCreation: '2024-01-15', 
      status: 'Actif',
      permissions: [
        { id: 1, name: 'Ajouter Transactions' },
        { id: 2, name: 'Modifier Transactions' },
        { id: 3, name: 'Consulter Transactions' },
        { id: 7, name: 'Changer État Transactions' },
        { id: 16, name: 'Archiver Transactions' }
      ]
    },
    { 
      id: 4, 
      name: 'Profil Utilisateur Standard', 
      description: 'Profil de base pour utilisateur standard',
      dateCreation: '2024-01-18', 
      status: 'Actif',
      permissions: [
        { id: 3, name: 'Consulter Transactions' },
        { id: 6, name: 'Rechercher Transactions' }
      ]
    },
    { 
      id: 5, 
      name: 'Profil Archiviste', 
      description: 'Profil spécialisé dans la gestion des archives',
      dateCreation: '2024-01-20', 
      status: 'Actif',
      permissions: [
        { id: 3, name: 'Consulter Transactions' },
        { id: 16, name: 'Archiver Transactions' },
        { id: 17, name: 'Restaurer Transactions' },
        { id: 13, name: 'Export Données' }
      ]
    }
  ]);

  const [parametres, setParametres] = useState([
    { id: 1, categorie: 'Système', nom: 'Timeout Session', valeur: '30 minutes', description: 'Durée avant déconnexion automatique' },
    { id: 2, categorie: 'Système', nom: 'Sauvegarde Auto', valeur: 'Quotidienne', description: 'Fréquence des sauvegardes automatiques' },
    { id: 3, categorie: 'Email', nom: 'Serveur SMTP', valeur: 'smtp.fdv.bj', description: "Serveur d'envoi d'emails" },
    { id: 4, categorie: 'Email', nom: 'Port SMTP', valeur: '587', description: 'Port du serveur SMTP' },
    { id: 5, categorie: 'Sécurité', nom: 'Complexité MDP', valeur: 'Élevée', description: 'Niveau de complexité des mots de passe' },
    { id: 6, categorie: 'Sécurité', nom: 'Tentatives Max', valeur: '5', description: 'Nombre maximum de tentatives de connexion' },
    { id: 7, categorie: 'Interface', nom: 'Thème', valeur: 'Clair', description: "Thème de l'interface utilisateur" },
    { id: 8, categorie: 'Interface', nom: 'Langue', valeur: 'Français', description: 'Langue par défaut du système' }
  ]);

  const allPermissions = [
    { id: 1, name: 'Ajouter Transactions' },
    { id: 2, name: 'Modifier Transactions' },
    { id: 3, name: 'Consulter Transactions' },
    { id: 4, name: 'Supprimer Transactions' },
    { id: 5, name: 'Filtrer Transactions' },
    { id: 6, name: 'Rechercher Transactions' },
    { id: 7, name: 'Changer État Transactions' },
    { id: 8, name: 'Lister Versions' },
    { id: 9, name: 'Ajouter Versions' },
    { id: 10, name: 'Modifier Versions' },
    { id: 11, name: 'Consulter Utilisateurs' },
    { id: 12, name: 'Gérer Rôles' },
    { id: 13, name: 'Export Données' },
    { id: 14, name: 'Import Données' },
    { id: 15, name: 'Configuration Système' },
    { id: 16, name: 'Archiver Transactions' },
    { id: 17, name: 'Restaurer Transactions' },
    { id: 18, name: 'Valider Versions' },
    { id: 19, name: 'Publier Versions' },
    { id: 20, name: 'Bloquer Utilisateurs' }
  ];

  // Fonctions utilitaires
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

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
    }).format(amount);
  };

  // Gestionnaires d'événements
  const handleMenuChange = (menu: string) => {
    setActiveMenu(menu);
    setCurrentView(menu);
    setSelectedItem(null);
    setSearchTerm('');
    setSelectedFilter('all');
  };

  const handleOpenModal = (type: 'add' | 'edit' | 'delete' | 'view', data?: any) => {
    setModalType(type);
    setModalData(data);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalData(null);
  };

  const handleCompleteTestamentRegistration = (testamentData: any) => {
    setTestaments([...testaments, testamentData]);
    setCurrentView('testaments');
  };

  const handleCompleteDeclarationRegistration = (declarationData: any) => {
    setDeclarations([...declarations, declarationData]);
    setCurrentView('declarations');
  };

  const handleUpdateTestament = (updatedData: any) => {
    setTestaments(testaments.map(t => t.id === updatedData.id ? updatedData : t));
  };

  const handleUpdateDeclaration = (updatedData: any) => {
    setDeclarations(declarations.map(d => d.id === updatedData.id ? updatedData : d));
  };

  const handleAddNew = () => {
    if (currentView === 'testaments') {
      setCurrentView('testament-registration');
    } else if (currentView === 'declarations') {
      setCurrentView('declaration-registration');
    } else {
      handleOpenModal('add');
    }
  };

  const handleSubmitModal = (formData: any) => {
    // Simuler l'ajout/modification des données
    const newItem = {
      id: Date.now(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      ...formData
    };

    switch (currentView) {
      case 'donations':
        if (modalType === 'add') {
          setDonations([...donations, newItem]);
        } else if (modalType === 'edit' && modalData) {
          setDonations(donations.map(d => d.id === modalData.id ? { ...modalData, ...formData } : d));
        }
        break;
      case 'users':
        if (modalType === 'add') {
          setUsers([...users, { ...newItem, last_login: new Date().toISOString() }]);
        } else if (modalType === 'edit' && modalData) {
          setUsers(users.map(u => u.id === modalData.id ? { ...modalData, ...formData } : u));
        }
        break;
      case 'depenses':
        if (modalType === 'add') {
          setDepenses([...depenses, newItem]);
        } else if (modalType === 'edit' && modalData) {
          setDepenses(depenses.map(d => d.id === modalData.id ? { ...modalData, ...formData } : d));
        }
        break;
      case 'notaires':
        if (modalType === 'add') {
          setNotaires([...notaires, newItem]);
        } else if (modalType === 'edit' && modalData) {
          setNotaires(notaires.map(n => n.id === modalData.id ? { ...modalData, ...formData } : n));
        }
        break;
      case 'personnes':
        if (modalType === 'add') {
          setPersonnes([...personnes, newItem]);
        } else if (modalType === 'edit' && modalData) {
          setPersonnes(personnes.map(p => p.id === modalData.id ? { ...modalData, ...formData } : p));
        }
        break;
      case 'permissions':
        if (modalType === 'add') {
          setPermissions([...permissions, { ...newItem, libelle: formData.libelle, type: formData.type, statut: 'Actif' }]);
        } else if (modalType === 'edit' && modalData) {
          setPermissions(permissions.map(p => p.id === modalData.id ? { ...modalData, libelle: formData.libelle, type: formData.type } : p));
        }
        break;
      case 'roles':
        if (modalType === 'add') {
          setRoles([...roles, { ...newItem, name: formData.name, description: formData.description, dateCreation: new Date().toISOString().split('T')[0], status: 'Actif' }]);
        } else if (modalType === 'edit' && modalData) {
          setRoles(roles.map(r => r.id === modalData.id ? { ...modalData, name: formData.name, description: formData.description } : r));
        }
        break;
      case 'profiles':
        if (modalType === 'add') {
          setProfiles([...profiles, { 
            ...newItem, 
            name: formData.name, 
            description: formData.description, 
            dateCreation: new Date().toISOString().split('T')[0], 
            status: 'Actif',
            permissions: formData.permissions || []
          }]);
        } else if (modalType === 'edit' && modalData) {
          setProfiles(profiles.map(p => p.id === modalData.id ? { 
            ...modalData, 
            name: formData.name, 
            description: formData.description,
            permissions: formData.permissions || modalData.permissions
          } : p));
        }
        break;
      case 'parametres':
        if (modalType === 'add') {
          setParametres([...parametres, { 
            ...newItem, 
            categorie: formData.categorie,
            nom: formData.nom, 
            valeur: formData.valeur, 
            description: formData.description
          }]);
        } else if (modalType === 'edit' && modalData) {
          setParametres(parametres.map(p => p.id === modalData.id ? { 
            ...modalData, 
            categorie: formData.categorie,
            nom: formData.nom, 
            valeur: formData.valeur, 
            description: formData.description
          } : p));
        }
        break;
    }

    handleCloseModal();
  };

  const handleDelete = (item: any) => {
    switch (currentView) {
      case 'donations':
        setDonations(donations.filter(d => d.id !== item.id));
        break;
      case 'users':
        setUsers(users.filter(u => u.id !== item.id));
        break;
      case 'depenses':
        setDepenses(depenses.filter(d => d.id !== item.id));
        break;
      case 'notaires':
        setNotaires(notaires.filter(n => n.id !== item.id));
        break;
      case 'personnes':
        setPersonnes(personnes.filter(p => p.id !== item.id));
        break;
      case 'permissions':
        setPermissions(permissions.filter(p => p.id !== item.id));
        break;
      case 'roles':
        setRoles(roles.filter(r => r.id !== item.id));
        break;
      case 'profiles':
        setProfiles(profiles.filter(p => p.id !== item.id));
        break;
      case 'parametres':
        setParametres(parametres.filter(p => p.id !== item.id));
        break;
    }
    handleCloseModal();
  };

  // Rendu conditionnel pour les vues spéciales
  if (currentView === 'testament-details' && selectedItem) {
    return (
      <TestamentDetails
        onBack={() => {
          setCurrentView('testaments');
          setSelectedItem(null);
        }}
        testamentData={selectedItem}
        onUpdateTestament={handleUpdateTestament}
      />
    );
  }

  if (currentView === 'testament-registration') {
    return (
      <TestamentRegistration
        onBack={() => setCurrentView('testaments')}
        onComplete={handleCompleteTestamentRegistration}
      />
    );
  }

  if (currentView === 'declaration-details' && selectedItem) {
    return (
      <DeclarationDetails
        onBack={() => {
          setCurrentView('declarations');
          setSelectedItem(null);
        }}
        declarationData={selectedItem}
        onUpdateDeclaration={handleUpdateDeclaration}
      />
    );
  }

  if (currentView === 'declaration-registration') {
    return (
      <DeclarationRegistration
        onBack={() => setCurrentView('declarations')}
        onComplete={handleCompleteDeclarationRegistration}
      />
    );
  }

  const renderDashboardStats = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow-sm border border-accent-300 p-6">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mr-4">
            <i className="ri-file-text-line text-blue-600 text-xl"></i>
          </div>
          <div>
            <p className="text-2xl font-bold text-text-dark">{testaments.length}</p>
            <p className="text-sm text-text-muted">Testaments</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-accent-300 p-6">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg flex items-center justify-center mr-4">
            <i className="ri-file-list-line text-orange-600 text-xl"></i>
          </div>
          <div>
            <p className="text-2xl font-bold text-text-dark">{declarations.length}</p>
            <p className="text-sm text-text-muted">Déclarations</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-accent-300 p-6">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-green-200 rounded-lg flex items-center justify-center mr-4">
            <i className="ri-gift-line text-green-600 text-xl"></i>
          </div>
          <div>
            <p className="text-2xl font-bold text-text-dark">{donations.length}</p>
            <p className="text-sm text-text-muted">Donations</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-accent-300 p-6">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mr-4">
            <i className="ri-user-line text-purple-600 text-xl"></i>
          </div>
          <div>
            <p className="text-2xl font-bold text-text-dark">{users.length}</p>
            <p className="text-sm text-text-muted">Utilisateurs</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderActivityFeed = () => (
    <div className="bg-white rounded-lg shadow-sm border border-accent-300 p-6">
      <h3 className="text-lg font-semibold text-text-dark mb-4 flex items-center">
        <i className="ri-history-line text-primary-500 mr-2"></i>
        Activités récentes
      </h3>
      <div className="space-y-4">
        <div className="flex items-center p-3 bg-accent-50 rounded-lg">
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
          <div className="flex-1">
            <p className="text-sm font-medium text-text-dark">Nouveau testament créé</p>
            <p className="text-xs text-text-muted">TEST-002 - Marie Claire Kouassi</p>
            <p className="text-xs text-text-muted">Il y a 2 heures</p>
          </div>
        </div>
        <div className="flex items-center p-3 bg-accent-50 rounded-lg">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
          <div className="flex-1">
            <p className="text-sm font-medium text-text-dark">Testament validé</p>
            <p className="text-xs text-text-muted">TEST-001 - Jean Pierre Martin</p>
            <p className="text-xs text-text-muted">Il y a 4 heures</p>
          </div>
        </div>
        <div className="flex items-center p-3 bg-accent-50 rounded-lg">
          <div className="w-2 h-2 bg-orange-500 rounded-full mr-4"></div>
          <div className="flex-1">
            <p className="text-sm font-medium text-text-dark">Nouvelle déclaration</p>
            <p className="text-xs text-text-muted">DECL-001 - Sophie Marie Dupont</p>
            <p className="text-xs text-text-muted">Il y a 6 heures</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQuickActions = () => (
    <div className="bg-white rounded-lg shadow-sm border border-accent-300 p-6">
      <h3 className="text-lg font-semibold text-text-dark mb-4 flex items-center">
        <i className="ri-flashlight-line text-secondary-500 mr-2"></i>
        Actions rapides
      </h3>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleAddNew}
            className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap"
          >
            <i className="ri-add-line mr-2"></i>
            Nouveau testament
          </button>
          <button
            onClick={() => setCurrentView('declaration-registration')}
            className="flex items-center px-4 py-2 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap"
          >
            <i className="ri-file-add-line mr-2"></i>
            Nouvelle déclaration
          </button>
          <button
            onClick={() => handleMenuChange('testaments')}
            className="flex items-center px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer"
          >
            <i className="ri-file-list-line text-blue-600 mr-2"></i>
            Voir testaments
          </button>
          <button
            onClick={() => handleMenuChange('declarations')}
            className="flex items-center px-4 py-2 bg-green-50 hover:bg-green-100 rounded-lg transition-colors cursor-pointer"
          >
            <i className="ri-list-check-line text-green-600 mr-2"></i>
            Voir déclarations
          </button>
        </div>

        <div className="lg:w-1/3">
          <div className="relative">
            <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted text-sm"></i>
            <input
              type="text"
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderDataTable = (data: any[], type: string) => {
    const filteredData = data.filter(item => {
      const searchFields = type === 'testaments' 
        ? [item.testator?.lastname, item.testator?.firstname, item.code]
        : type === 'declarations'
        ? [item.testator?.lastname, item.testator?.firstname, item.code]
        : type === 'users'
        ? [item.lastname, item.firstname, item.email]
        : type === 'notaires'
        ? [item.lastname, item.firstname, item.office]
        : type === 'personnes'
        ? [item.lastname, item.firstname, item.category]
        : type === 'permissions'
        ? [item.libelle, item.type, item.statut]
        : type === 'roles'
        ? [item.name, item.description, item.status]
        : type === 'profiles'
        ? [item.name, item.description, item.status]
        : type === 'parametres'
        ? [item.nom, item.categorie, item.valeur, item.description]
        : [item.reference, item.description];
      
      return searchFields.some(field => 
        field?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    // Calcul pagination pour les nouvelles tables d'administration
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = filteredData.slice(startIndex, endIndex);

    return (
      <>
        <div className="bg-white rounded-lg shadow-sm border border-accent-300 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-accent-50 border-b border-accent-300">
                <tr>
                  <th className="w-12 px-4 py-3 text-left">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-primary-500 border-accent-400 focus:ring-primary-500"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedPermissions(currentData.map((t: any) => t.id.toString()));
                        } else {
                          setSelectedPermissions([]);
                        }
                      }}
                      checked={currentData.length > 0 && selectedPermissions.length === currentData.length}
                    />
                  </th>
                  {type === 'testaments' && (
                    <>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Code</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Testateur</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Type</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Date</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Statut</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Actions</th>
                    </>
                  )}
                  {type === 'declarations' && (
                    <>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Code</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Testateur</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Date création</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Statut</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Actions</th>
                    </>
                  )}
                  {type === 'donations' && (
                    <>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">NPI</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Testateur</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Type</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Montant</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Statut</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Actions</th>
                    </>
                  )}
                  {type === 'users' && (
                    <>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Nom complet</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Email</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Rôle</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Statut</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Dernière connexion</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Actions</th>
                    </>
                  )}
                  {type === 'depenses' && (
                    <>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Référence</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Description</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Montant</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Date</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Statut</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Actions</th>
                    </>
                  )}
                  {type === 'notaires' && (
                    <>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Nom complet</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Cabinet</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Contact</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Rôle</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Statut</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Actions</th>
                    </>
                  )}
                  {type === 'personnes' && (
                    <>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">NPI</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Nom complet</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Date naissance</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Profession</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Catégorie</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Statut</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Actions</th>
                    </>
                  )}
                  {type === 'permissions' && (
                    <>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Libellé</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Type</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Statut</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Actions</th>
                    </>
                  )}
                  {type === 'roles' && (
                    <>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Nom du rôle</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Description</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Statut</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Date création</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Actions</th>
                    </>
                  )}
                  {type === 'profiles' && (
                    <>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Nom du profil</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Description</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Permissions</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Statut</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Date création</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Actions</th>
                    </>
                  )}
                  {type === 'parametres' && (
                    <>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Catégorie</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Nom</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Valeur</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Description</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-text-dark">Actions</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {currentData.map((item, index) => (
                  <tr key={item.id} className={`border-b border-accent-200 hover:bg-accent-50 ${index % 2 === 0 ? 'bg-white' : 'bg-accent-50'}`}>
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={selectedPermissions.includes(item.id.toString())}
                        onChange={() => {
                          const id = item.id.toString();
                          setSelectedPermissions(prev =>
                            prev.includes(id)
                              ? prev.filter(p => p !== id)
                              : [...prev, id]
                          );
                        }}
                        className="w-4 h-4 text-primary-500 border-accent-400 focus:ring-primary-500"
                      />
                    </td>
                    {/* Permissions */}
                    {type === 'permissions' && (
                      <>
                        <td className="px-4 py-3">
                          <span className="text-sm text-text-dark">{item.libelle}</span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-100 text-text-dark">
                            {item.type}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            item.statut === 'Actif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {item.statut}
                          </span>
                        </td>
                      </>
                    )}
                    {/* Roles */}
                    {type === 'roles' && (
                      <>
                        <td className="px-4 py-3">
                          <div>
                            <p className="text-sm font-medium text-text-dark">{item.name}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-sm text-text-dark">{item.description}</span>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            item.status === 'Actif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-sm text-text-dark">{formatDate(item.dateCreation)}</span>
                        </td>
                      </>
                    )}
                    {/* Profiles */}
                    {type === 'profiles' && (
                      <>
                        <td className="px-4 py-3">
                          <div>
                            <p className="text-sm font-medium text-text-dark">{item.name}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-sm text-text-dark">{item.description}</span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex flex-wrap gap-1">
                            {item.permissions?.slice(0, 2).map((permission: any) => (
                              <span key={permission.id} className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-accent-100 text-text-dark">
                                {permission.name}
                              </span>
                            ))}
                            {item.permissions?.length > 2 && (
                              <span className="text-xs text-text-muted">
                                +{item.permissions.length - 2} autres
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            item.status === 'Actif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-sm text-text-dark">{formatDate(item.dateCreation)}</span>
                        </td>
                      </>
                    )}
                    {/* Paramètres */}
                    {type === 'parametres' && (
                      <>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                            {item.categorie}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm font-medium text-text-dark">{item.nom}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-text-dark">{item.valeur}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-sm text-text-muted">{item.description}</p>
                        </td>
                      </>
                    )}
                    {/* Existing view content for other types */}
                    {['testaments', 'declarations', 'donations', 'users', 'depenses', 'notaires', 'personnes'].includes(type) && (
                      <>
                        {type === 'testaments' && (
                          <>
                            <td className="px-4 py-3">
                              <span className="text-sm font-medium text-primary-600">{item.code}</span>
                            </td>
                            <td className="px-4 py-3">
                              <div>
                                <p className="text-sm font-medium text-text-dark">
                                  {item.testator.lastname} {item.testator.firstname}
                                </p>
                                <p className="text-xs text-text-muted">{item.testator.job}</p>
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-sm text-text-dark">{item.testament_type}</span>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-sm text-text-dark">{formatDate(item.testament_date)}</span>
                            </td>
                            <td className="px-4 py-3">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                item.status === 2 ? 'bg-blue-100 text-blue-800' :
                                item.status === 1 ? 'bg-yellow-100 text-yellow-800' :
                                'bg-green-100 text-green-800'
                              }`}>
                                {item.status === 2 ? 'Validé' : item.status === 1 ? 'En cours' : 'Nouveau'}
                              </span>
                            </td>
                          </>
                        )}
                        {type === 'declarations' && (
                          <>
                            <td className="px-4 py-3">
                              <span className="text-sm font-medium text-primary-600">{item.code}</span>
                            </td>
                            <td className="px-4 py-3">
                              <div>
                                <p className="text-sm font-medium text-text-dark">
                                  {item.testator.lastname} {item.testator.firstname}
                                </p>
                                <p className="text-xs text-text-muted">{item.testator.job}</p>
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-sm text-text-dark">{formatDateTime(item.created_at)}</span>
                            </td>
                            <td className="px-4 py-3">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                item.status === 2 ? 'bg-blue-100 text-blue-800' :
                                item.status === 1 ? 'bg-yellow-100 text-yellow-800' :
                                'bg-green-100 text-green-800'
                              }`}>
                                {item.status === 2 ? 'Finalisée' : item.status === 1 ? 'En cours' : 'Nouvelle'}
                              </span>
                            </td>
                          </>
                        )}
                        {type === 'donations' && (
                          <>
                            <td className="px-4 py-3">
                              <span className="text-sm font-medium text-primary-600">{item.npi}</span>
                            </td>
                            <td className="px-4 py-3">
                              <div>
                                <p className="text-sm font-medium text-text-dark">
                                  {item.testator.lastname} {item.testator.firstname}
                                </p>
                                <p className="text-xs text-text-muted">{item.testator.job}</p>
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-sm text-text-dark capitalize">{item.type}</span>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-sm font-medium text-text-dark">{formatCurrency(item.amount)}</span>
                            </td>
                            <td className="px-4 py-3">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                item.status === 'finalisé' ? 'bg-blue-100 text-blue-800' :
                                item.status === 'en_cours' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-green-100 text-green-800'
                              }`}>
                                {item.status === 'finalisé' ? 'Finalisé' : 
                                 item.status === 'en_cours' ? 'En cours' : 'En attente'}
                              </span>
                            </td>
                          </>
                        )}
                        {type === 'users' && (
                          <>
                            <td className="px-4 py-3">
                              <div>
                                <p className="text-sm font-medium text-text-dark">
                                  {item.lastname} {item.firstname}
                                </p>
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-sm text-text-dark">{item.email}</span>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-sm text-text-dark">{item.role}</span>
                            </td>
                            <td className="px-4 py-3">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                item.status === 'actif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                              }`}>
                                {item.status === 'actif' ? 'Actif' : 'Inactif'}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-sm text-text-dark">{formatDateTime(item.last_login)}</span>
                            </td>
                          </>
                        )}
                        {type === 'depenses' && (
                          <>
                            <td className="px-4 py-3">
                              <span className="text-sm font-medium text-primary-600">{item.reference}</span>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-sm text-text-dark">{item.description}</span>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-sm font-medium text-text-dark">{formatCurrency(item.montant)}</span>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-sm text-text-dark">{formatDate(item.date)}</span>
                            </td>
                            <td className="px-4 py-3">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                item.status === 'validé' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {item.status === 'validé' ? 'Validé' : 'En attente'}
                              </span>
                            </td>
                          </>
                        )}
                        {type === 'notaires' && (
                          <>
                            <td className="px-4 py-3">
                              <div>
                                <p className="text-sm font-medium text-text-dark">
                                  {item.lastname} {item.firstname}
                                </p>
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-sm text-text-dark">{item.office}</span>
                            </td>
                            <td className="px-4 py-3">
                              <div>
                                <p className="text-sm text-text-dark">{item.email}</p>
                                <p className="text-xs text-text-muted">{item.phone}</p>
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-sm text-text-dark">{item.role}</span>
                            </td>
                            <td className="px-4 py-3">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                item.status === 'actif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                              }`}>
                                {item.status === 'actif' ? 'Actif' : 'Inactif'}
                              </span>
                            </td>
                          </>
                        )}
                        {type === 'personnes' && (
                          <>
                            <td className="px-4 py-3">
                              <span className="text-sm font-medium text-primary-600">{item.npi}</span>
                            </td>
                            <td className="px-4 py-3">
                              <div>
                                <p className="text-sm font-medium text-text-dark">
                                  {item.lastname} {item.firstname}
                                </p>
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-sm text-text-dark">{formatDate(item.birthdate)}</span>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-sm text-text-dark">{item.job}</span>
                            </td>
                            <td className="px-4 py-3">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                item.category === 'Témoin' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                              }`}>
                                {item.category}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                item.status === 'actif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                              }`}>
                                {item.status === 'actif' ? 'Actif' : 'Inactif'}
                              </span>
                            </td>
                          </>
                        )}
                      </>
                    )}
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleOpenModal('view', item)}
                          className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                          title="Voir détails"
                        >
                          <i className="ri-eye-line text-sm"></i>
                        </button>
                        <button
                          onClick={() => handleOpenModal('edit', item)}
                          className="p-2 text-yellow-600 hover:text-yellow-800 hover:bg-yellow-50 rounded-lg transition-colors cursor-pointer"
                          title="Modifier"
                        >
                          <i className="ri-edit-line text-sm"></i>
                        </button>
                        <button
                          onClick={() => handleOpenModal('delete', item)}
                          className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                          title="Supprimer"
                        >
                          <i className="ri-delete-bin-line text-sm"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination pour les nouvelles tables d'administration */}
        {['permissions', 'roles', 'profiles', 'parametres'].includes(type) && totalPages > 1 && (
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-text-muted">
              Affichage de {startIndex + 1} à {Math.min(endIndex, filteredData.length)} sur {filteredData.length} éléments
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded border cursor-pointer ${
                  currentPage === 1
                    ? 'bg-accent-100 text-text-muted border-accent-300 cursor-not-allowed'
                    : 'bg-white text-text-dark border-accent-300 hover:bg-accent-50'
                }`}
              >
                <i className="ri-arrow-left-line"></i>
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded border cursor-pointer ${
                    currentPage === page
                      ? 'bg-primary-500 text-white border-primary-500'
                      : 'bg-white text-text-dark border-accent-300 hover:bg-accent-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded border cursor-pointer ${
                  currentPage === totalPages
                    ? 'bg-accent-100 text-text-muted border-accent-300 cursor-not-allowed'
                    : 'bg-white text-text-dark border-accent-300 hover:bg-accent-50'
                }`}
              >
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        )}
      </>
    );
  };

  const renderContent = () => {
    if (currentView === 'dashboard') {
      return (
        <div>
          {renderDashboardStats()}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {renderActivityFeed()}
            {renderQuickActions()}
          </div>
        </div>
      );
    }

    const getPageTitle = () => {
      switch (currentView) {
        case 'testaments': return { title: 'Testaments', icon: 'ri-file-text-line', color: 'blue' };
        case 'declarations': return { title: 'Déclarations', icon: 'ri-file-list-line', color: 'orange' };
        case 'donations': return { title: 'Donations', icon: 'ri-gift-line', color: 'green' };
        case 'users': return { title: 'Utilisateurs', icon: 'ri-user-line', color: 'purple' };
        case 'depenses': return { title: 'Dépenses', icon: 'ri-money-dollar-circle-line', color: 'red' };
        case 'notaires': return { title: 'Notaires', icon: 'ri-briefcase-line', color: 'indigo' };
        case 'personnes': return { title: 'Personnes', icon: 'ri-team-line', color: 'teal' };
        case 'permissions': return { title: 'Permissions', icon: 'ri-key-line', color: 'yellow' };
        case 'roles': return { title: 'Rôles', icon: 'ri-shield-user-line', color: 'pink' };
        case 'profiles': return { title: 'Profils', icon: 'ri-user-star-line', color: 'cyan' };
        case 'parametres': return { title: 'Paramètres', icon: 'ri-settings-3-line', color: 'gray' };
        default: return { title: 'Dashboard', icon: 'ri-dashboard-line', color: 'blue' };
      }
    };

    const pageInfo = getPageTitle();

    const getData = () => {
      switch (currentView) {
        case 'testaments': return testaments;
        case 'declarations': return declarations;
        case 'donations': return donations;
        case 'users': return users;
        case 'depenses': return depenses;
        case 'notaires': return notaires;
        case 'personnes': return personnes;
        case 'permissions': return permissions;
        case 'roles': return roles;
        case 'profiles': return profiles;
        case 'parametres': return parametres;
        default: return [];
      }
    };

    return (
      <div>
        {/* Header de page */}
        <div className="mb-6">
          <div className="flex items-center">
            <div className={`w-12 h-12 bg-gradient-to-r from-${pageInfo.color}-100 to-${pageInfo.color}-200 rounded-full flex items-center justify-center mr-4`}>
              <i className={`${pageInfo.icon} text-${pageInfo.color}-600 text-xl`}></i>
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-text-dark">{pageInfo.title}</h1>
              <p className="text-text-muted text-sm">Gestion des {pageInfo.title.toLowerCase()}</p>
            </div>
          </div>
        </div>

        {/* Barre d'actions */}
        <div className="bg-accent-50 rounded-lg p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleAddNew}
                className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap"
              >
                <i className="ri-add-line mr-2"></i>
                Ajouter
              </button>
              <button
                onClick={() => window.print()}
                className="flex items-center px-4 py-2 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap"
              >
                <i className="ri-printer-line mr-2"></i>
                Imprimer
              </button>
              <button className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium cursor-pointer whitespace-nowrap">
                <i className="ri-download-line mr-2"></i>
                Exporter
              </button>
            </div>

            <div className="lg:w-1/3">
              <div className="relative">
                <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted text-sm"></i>
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tableau de données */}
        {renderDataTable(getData(), currentView)}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-100 to-accent-200">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar
          activeMenu={activeMenu}
          setActiveMenu={handleMenuChange}
          isMobileSidebarOpen={isMobileSidebarOpen}
          setIsMobileSidebarOpen={setIsMobileSidebarOpen}
          isSidebarCollapsed={isSidebarCollapsed}
          setIsSidebarCollapsed={setIsSidebarCollapsed}
        />

        {/* Contenu principal */}
        <div className="flex-1 flex flex-col">
          {/* En-tête mobile */}
          <MobileHeader setIsMobileSidebarOpen={setIsMobileSidebarOpen} />

          <div className="flex-1 p-4 lg:p-6">
            <div className="bg-white rounded-lg shadow-sm border border-accent-300 h-full">
              <div className="p-4 lg:p-6">
                {renderContent()}
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

      {/* Modal Universelle */}
      {showModal && (
        <ModalComponent
          type={modalType}
          currentView={currentView}
          modalData={modalData}
          onClose={handleCloseModal}
          onSubmit={handleSubmitModal}
          onDelete={handleDelete}
          formatDate={formatDate}
          formatDateTime={formatDateTime}
          formatCurrency={formatCurrency}
        />
      )}
    </div>
  );
}

// Composant Modal séparé pour une meilleure organisation
interface ModalComponentProps {
  type: 'add' | 'edit' | 'delete' | 'view';
  currentView: string;
  modalData: any;
  onClose: () => void;
  onSubmit: (data: any) => void;
  onDelete: (item: any) => void;
  formatDate: (date: string) => string;
  formatDateTime: (date: string) => string;
  formatCurrency: (amount: number) => string;
}

function ModalComponent({
  type,
  currentView,
  modalData,
  onClose,
  onSubmit,
  onDelete,
  formatDate,
  formatDateTime,
  formatCurrency,
}: ModalComponentProps) {
  const [formData, setFormData] = useState<any>(modalData || {});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const formObject = Object.fromEntries(data.entries());
    onSubmit(formObject);
  };

  const getModalTitle = () => {
    const action = type === 'add' ? 'Ajouter' : type === 'edit' ? 'Modifier' : type === 'view' ? 'Voir' : 'Supprimer';
    const item = currentView === 'donations' ? 'une donation' : 
                 currentView === 'users' ? 'un utilisateur' :
                 currentView === 'depenses' ? 'une dépense' :
                 currentView === 'notaires' ? 'un notaire' :
                 currentView === 'personnes' ? 'une personne' :
                 currentView === 'permissions' ? 'une permission' :
                 currentView === 'roles' ? 'un rôle' :
                 currentView === 'profiles' ? 'un profil' :
                 currentView === 'parametres' ? 'un paramètre' :
                 'un élément';
    return `${action} ${item}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-text-dark">{getModalTitle()}</h3>
            <button onClick={onClose} className="text-text-muted hover:text-text-dark cursor-pointer">
              <i className="ri-close-line text-xl"></i>
            </button>
          </div>

          {type === 'delete' ? (
            <div>
              <div className="mb-6">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-100 rounded-full mb-4">
                  <i className="ri-delete-bin-line text-red-600 text-2xl"></i>
                </div>
                <h3 className="text-lg font-medium text-text-dark text-center mb-2">
                  Confirmer la suppression
                </h3>
                <p className="text-text-muted text-center">
                  Êtes-vous sûr de vouloir supprimer cet élément ? Cette action est irréversible.
                </p>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-text-muted hover:text-text-dark border border-accent-300 rounded-lg transition-colors cursor-pointer"
                >
                  Annuler
                </button>
                <button
                  onClick={() => onDelete(modalData)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors cursor-pointer"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ) : type === 'view' ? (
            <ViewModalContent 
              currentView={currentView} 
              modalData={modalData} 
              onClose={onClose}
              formatDate={formatDate}
              formatDateTime={formatDateTime}
              formatCurrency={formatCurrency}
            />
          ) : (
            <FormModalContent 
              currentView={currentView} 
              type={type}
              modalData={modalData}
              onSubmit={handleSubmit}
              onClose={onClose}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// Composant pour le contenu de visualisation
function ViewModalContent({ currentView, modalData, onClose, formatDate, formatDateTime, formatCurrency }: any) {
  if (!modalData) return null;

  return (
    <div>
      <div className="space-y-4">
        {currentView === 'permissions' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Libellé</label>
              <p className="text-text-dark">{modalData.libelle}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Type</label>
              <p className="text-text-dark">{modalData.type}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Statut</label>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                modalData.statut === 'Actif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {modalData.statut}
              </span>
            </div>
          </div>
        )}

        {currentView === 'roles' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Nom du rôle</label>
              <p className="text-text-dark font-medium">{modalData.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Statut</label>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                modalData.status === 'Actif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {modalData.status}
              </span>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-text-muted mb-1">Description</label>
              <p className="text-text-dark">{modalData.description}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Date de création</label>
              <p className="text-text-dark">{formatDate(modalData.dateCreation)}</p>
            </div>
          </div>
        )}

        {currentView === 'profiles' && (
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Nom du profil</label>
                <p className="text-text-dark font-medium">{modalData.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-1">Statut</label>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  modalData.status === 'Actif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {modalData.status}
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Description</label>
              <p className="text-text-dark">{modalData.description}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Date de création</label>
              <p className="text-text-dark">{formatDate(modalData.dateCreation)}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-2">Permissions</label>
              <div className="flex flex-wrap gap-2">
                {modalData.permissions?.map((permission: any) => (
                  <span key={permission.id} className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-800">
                    {permission.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentView === 'parametres' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Catégorie</label>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                {modalData.categorie}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Nom</label>
              <p className="text-text-dark font-medium">{modalData.nom}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Valeur</label>
              <p className="text-text-dark">{modalData.valeur}</p>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-text-muted mb-1">Description</label>
              <p className="text-text-dark">{modalData.description}</p>
            </div>
          </div>
        )}

        {/* Existing view content for other types */}
        {currentView === 'donations' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">NPI</label>
              <p className="text-text-dark">{modalData.npi}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Type</label>
              <p className="text-text-dark capitalize">{modalData.type}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Testateur</label>
              <p className="text-text-dark font-medium">{modalData.testator.lastname} {modalData.testator.firstname}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Montant</label>
              <p className="text-text-dark font-medium">{formatCurrency(modalData.amount)}</p>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-text-muted mb-1">Description</label>
              <p className="text-text-dark">{modalData.description}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Statut</label>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                modalData.status === 'finalisé' ? 'bg-blue-100 text-blue-800' :
                modalData.status === 'en_cours' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {modalData.status === 'finalisé' ? 'Finalisé' : 
                 modalData.status === 'en_cours' ? 'En cours' : 'En attente'}
              </span>
            </div>
          </div>
        )}

        {currentView === 'users' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Nom complet</label>
              <p className="text-text-dark font-medium">{modalData.lastname} {modalData.firstname}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Email</label>
              <p className="text-text-dark">{modalData.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Rôle</label>
              <p className="text-text-dark">{modalData.role}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Statut</label>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                modalData.status === 'actif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {modalData.status === 'actif' ? 'Actif' : 'Inactif'}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Date de création</label>
              <p className="text-text-dark">{formatDateTime(modalData.created_at)}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Dernière connexion</label>
              <p className="text-text-dark">{formatDateTime(modalData.last_login)}</p>
            </div>
          </div>
        )}

        {currentView === 'depenses' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Référence</label>
              <p className="text-text-dark font-medium">{modalData.reference}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Date</label>
              <p className="text-text-dark">{formatDate(modalData.date)}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Montant</label>
              <p className="text-text-dark font-medium">{formatCurrency(modalData.montant)}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Statut</label>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                modalData.status === 'validé' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {modalData.status === 'validé' ? 'Validé' : 'En attente'}
              </span>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-text-muted mb-1">Description</label>
              <p className="text-text-dark">{modalData.description}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Fichier</label>
              <p className="text-text-dark">{modalData.fichier}</p>
            </div>
          </div>
        )}

        {currentView === 'notaires' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Nom complet</label>
              <p className="text-text-dark font-medium">{modalData.lastname} {modalData.firstname}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Cabinet</label>
              <p className="text-text-dark">{modalData.office}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Email</label>
              <p className="text-text-dark">{modalData.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Téléphone</label>
              <p className="text-text-dark">{modalData.phone}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Adresse</label>
              <p className="text-text-dark">{modalData.address}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Rôle</label>
              <p className="text-text-dark">{modalData.role}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Statut</label>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                modalData.status === 'actif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {modalData.status === 'actif' ? 'Actif' : 'Inactif'}
              </span>
            </div>
          </div>
        )}

        {currentView === 'personnes' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">NPI</label>
              <p className="text-text-dark font-medium">{modalData.npi}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Nom complet</label>
              <p className="text-text-dark font-medium">{modalData.lastname} {modalData.firstname}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Date de naissance</label>
              <p className="text-text-dark">{formatDate(modalData.birthdate)}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Lieu de naissance</label>
              <p className="text-text-dark">{modalData.birthplace}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Profession</label>
              <p className="text-text-dark">{modalData.job}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Email</label>
              <p className="text-text-dark">{modalData.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Téléphone</label>
              <p className="text-text-dark">{modalData.phone}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Adresse</label>
              <p className="text-text-dark">{modalData.address}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Catégorie</label>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                modalData.category === 'Témoin' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
              }`}>
                {modalData.category}
              </span>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Statut</label>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                modalData.status === 'actif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {modalData.status === 'actif' ? 'Actif' : 'Inactif'}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-end mt-6">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors cursor-pointer"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}

// Composant pour le contenu de formulaire
function FormModalContent({ currentView, type, modalData, onSubmit, onClose }: any) {
  return (
    <form onSubmit={onSubmit}>
      <div className="space-y-4 mb-6">
        {currentView === 'permissions' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Libellé <span className="text-red-500">*</span>
              </label>
              <input
                name="libelle"
                type="text"
                defaultValue={modalData?.libelle || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Type <span className="text-red-500">*</span>
              </label>
              <select 
                name="type" 
                defaultValue={modalData?.type || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm pr-8" 
                required
              >
                <option value="">Sélectionner</option>
                <option value="Transaction">Transaction</option>
                <option value="Version">Version</option>
                <option value="Utilisateur">Utilisateur</option>
                <option value="Système">Système</option>
              </select>
            </div>
          </div>
        )}

        {currentView === 'roles' && (
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Nom du rôle <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                type="text"
                defaultValue={modalData?.name || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                defaultValue={modalData?.description || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                rows={3}
                required
              />
            </div>
          </div>
        )}

        {currentView === 'profiles' && (
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Nom du profil <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                type="text"
                defaultValue={modalData?.name || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                defaultValue={modalData?.description || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                rows={3}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">Permissions</label>
              <div className="max-h-40 overflow-y-auto border border-accent-300 rounded p-3 space-y-2">
                {allPermissions.map(permission => (
                  <label key={permission.id} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="permissions"
                      value={JSON.stringify(permission)}
                      defaultChecked={modalData?.permissions?.some((p: any) => p.id === permission.id) || false}
                      className="mr-2"
                    />
                    <span className="text-sm">{permission.name}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentView === 'parametres' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Catégorie <span className="text-red-500">*</span>
              </label>
              <select 
                name="categorie" 
                defaultValue={modalData?.categorie || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm pr-8" 
                required
              >
                <option value="">Sélectionner</option>
                <option value="Système">Système</option>
                <option value="Email">Email</option>
                <option value="Sécurité">Sécurité</option>
                <option value="Interface">Interface</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Nom <span className="text-red-500">*</span>
              </label>
              <input
                name="nom"
                type="text"
                defaultValue={modalData?.nom || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Valeur <span className="text-red-500">*</span>
              </label>
              <input
                name="valeur"
                type="text"
                defaultValue={modalData?.valeur || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-text-dark mb-2">Description</label>
              <textarea
                name="description"
                defaultValue={modalData?.description || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                rows={2}
              />
            </div>
          </div>
        )}

        {/* Existing form content for other types */}
        {currentView === 'donations' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                NPI <span className="text-red-500">*</span>
              </label>
              <input
                name="npi"
                type="text"
                defaultValue={modalData?.npi || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Montant <span className="text-red-500">*</span>
              </label>
              <input
                name="amount"
                type="number"
                defaultValue={modalData?.amount || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Testateur (Nom) <span className="text-red-500">*</span>
              </label>
              <input
                name="testator_lastname"
                type="text"
                defaultValue={modalData?.testator?.lastname || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Testateur (Prénom) <span className="text-red-500">*</span>
              </label>
              <input
                name="testator_firstname"
                type="text"
                defaultValue={modalData?.testator?.firstname || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-text-dark mb-2">Description</label>
              <textarea
                name="description"
                defaultValue={modalData?.description || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                rows={3}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Statut <span className="text-red-500">*</span>
              </label>
              <select
                name="status"
                defaultValue={modalData?.status || 'en_attente'}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              >
                <option value="en_attente">En attente</option>
                <option value="en_cours">En cours</option>
                <option value="finalisé">Finalisé</option>
              </select>
            </div>
          </div>
        )}

        {currentView === 'users' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Nom <span className="text-red-500">*</span>
              </label>
              <input
                name="lastname"
                type="text"
                defaultValue={modalData?.lastname || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Prénom <span className="text-red-500">*</span>
              </label>
              <input
                name="firstname"
                type="text"
                defaultValue={modalData?.firstname || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                type="email"
                defaultValue={modalData?.email || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Rôle <span className="text-red-500">*</span>
              </label>
              <input
                name="role"
                type="text"
                defaultValue={modalData?.role || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Statut <span className="text-red-500">*</span>
              </label>
              <select
                name="status"
                defaultValue={modalData?.status || 'actif'}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              >
                <option value="actif">Actif</option>
                <option value="inactif">Inactif</option>
              </select>
            </div>
          </div>
        )}

        {currentView === 'depenses' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Référence <span className="text-red-500">*</span>
              </label>
              <input
                name="reference"
                type="text"
                defaultValue={modalData?.reference || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Montant <span className="text-red-500">*</span>
              </label>
              <input
                name="montant"
                type="number"
                defaultValue={modalData?.montant || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Date <span className="text-red-500">*</span>
              </label>
              <input
                name="date"
                type="date"
                defaultValue={modalData?.date || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Statut <span className="text-red-500">*</span>
              </label>
              <select
                name="status"
                defaultValue={modalData?.status || 'en_attente'}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              >
                <option value="en_attente">En attente</option>
                <option value="validé">Validé</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-text-dark mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                defaultValue={modalData?.description || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                rows={3}
                required
              />
            </div>
          </div>
        )}

        {currentView === 'notaires' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Nom <span className="text-red-500">*</span>
              </label>
              <input
                name="lastname"
                type="text"
                defaultValue={modalData?.lastname || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Prénom <span className="text-red-500">*</span>
              </label>
              <input
                name="firstname"
                type="text"
                defaultValue={modalData?.firstname || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Cabinet <span className="text-red-500">*</span>
              </label>
              <input
                name="office"
                type="text"
                defaultValue={modalData?.office || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                type="email"
                defaultValue={modalData?.email || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Téléphone <span className="text-red-500">*</span>
              </label>
              <input
                name="phone"
                type="tel"
                defaultValue={modalData?.phone || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Adresse <span className="text-red-500">*</span>
              </label>
              <textarea
                name="address"
                defaultValue={modalData?.address || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                rows={2}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Rôle <span className="text-red-500">*</span>
              </label>
              <select
                name="role"
                defaultValue={modalData?.role || 'Principal'}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              >
                <option value="Principal">Principal</option>
                <option value="Associé">Associé</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Statut <span className="text-red-500">*</span>
              </label>
              <select
                name="status"
                defaultValue={modalData?.status || 'actif'}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              >
                <option value="actif">Actif</option>
                <option value="inactif">Inactif</option>
              </select>
            </div>
          </div>
        )}

        {currentView === 'personnes' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                NPI <span className="text-red-500">*</span>
              </label>
              <input
                name="npi"
                type="text"
                defaultValue={modalData?.npi || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Nom <span className="text-red-500">*</span>
              </label>
              <input
                name="lastname"
                type="text"
                defaultValue={modalData?.lastname || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Prénom <span className="text-red-500">*</span>
              </label>
              <input
                name="firstname"
                type="text"
                defaultValue={modalData?.firstname || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Date de naissance <span className="text-red-500">*</span>
              </label>
              <input
                name="birthdate"
                type="date"
                defaultValue={modalData?.birthdate || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Lieu de naissance <span className="text-red-500">*</span>
              </label>
              <input
                name="birthplace"
                type="text"
                defaultValue={modalData?.birthplace || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Profession <span className="text-red-500">*</span>
              </label>
              <input
                name="job"
                type="text"
                defaultValue={modalData?.job || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                type="email"
                defaultValue={modalData?.email || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Téléphone <span className="text-red-500">*</span>
              </label>
              <input
                name="phone"
                type="tel"
                defaultValue={modalData?.phone || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-text-dark mb-2">
                Adresse <span className="text-red-500">*</span>
              </label>
              <textarea
                name="address"
                defaultValue={modalData?.address || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                rows={2}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Catégorie <span className="text-red-500">*</span>
              </label>
              <select
                name="category"
                defaultValue={modalData?.category || ''}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              >
                <option value="">Sélectionner</option>
                <option value="Témoin">Témoin</option>
                <option value="Exécutaire">Exécutaire</option>
                <option value="Bénéficiaire">Bénéficiaire</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Statut <span className="text-red-500">*</span>
              </label>
              <select
                name="status"
                defaultValue={modalData?.status || 'actif'}
                className="w-full px-3 py-2 border border-accent-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                required
              >
                <option value="actif">Actif</option>
                <option value="inactif">Inactif</option>
              </select>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-text-muted hover:text-text-dark border border-accent-300 rounded-lg transition-colors cursor-pointer"
        >
          Annuler
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors cursor-pointer"
        >
          {type === 'add' ? 'Ajouter' : 'Sauvegarder'}
        </button>
      </div>
    </form>
  );
}
