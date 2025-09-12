
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import DashboardHeader from './components/DashboardHeader';
import DashboardSidebar from './components/DashboardSidebar';
import DashboardHome from './components/DashboardHome';
import InscriptionCapeForm from './components/InscriptionCapeForm';
import InscriptionGarderieForm from './components/InscriptionGarderieForm';
import MesDossiers from './components/MesDossiers';
import SupportTicket from './components/SupportTicket';
import MonProfil from './components/MonProfil';

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState('accueil');
  
  // Vérifier si l'utilisateur est connecté
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  if (!isLoggedIn) {
    return <Navigate to="/auth/login" replace />;
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'accueil':
        return <DashboardHome />;
      case 'inscription-cape':
        return <InscriptionCapeForm />;
      case 'inscription-garderie':
        return <InscriptionGarderieForm />;
      case 'mes-dossiers':
        return <MesDossiers />;
      case 'assistance-en-ligne':
        return <SupportTicket />;
      case 'profil':
        return <MonProfil />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <DashboardSidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <main className="ml-64 pt-20 p-8">
        <div className="max-w-6xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
