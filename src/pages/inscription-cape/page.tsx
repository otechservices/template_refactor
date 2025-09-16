
import { Link } from 'react-router-dom';
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';

export default function InscriptionCapePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative min-h-[400px] flex items-center justify-center bg-cover bg-center pt-20"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=Happy%20African%20children%20in%20a%20bright%20and%20safe%20childcare%20center%20environment%2C%20modern%20daycare%20facility%20with%20colorful%20educational%20toys%20and%20play%20areas%2C%20professional%20childcare%20setting%20with%20warm%20lighting%20and%20secure%20atmosphere&width=1920&height=600&seq=cape-inscription-hero&orientation=landscape)'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Inscrivez votre Centre d'Accueil et de Protection de l'Enfant
          </h1>
          <p className="text-xl md:text-2xl">
            Demande d'autorisation d'ouverture d'un CAPE
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Liste des pièces à fournir */}
        <section className="mb-12">
          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
              <i className="ri-file-list-3-line mr-3"></i>
              LISTE DES PIÈCES À FOURNIR
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <p className="font-medium text-gray-900">Demande d'autorisation d'ouverture</p>
                    <p className="text-sm text-gray-600">sur papier en-tête</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <p className="font-medium text-gray-900">Certificat médical du promoteur</p>
                    <p className="text-sm text-gray-600">datant de moins de 3 mois</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <p className="font-medium text-gray-900">Plan architectural</p>
                    <p className="text-sm text-gray-600">du local où sera installé le CAPE</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                  <div>
                    <p className="font-medium text-gray-900">Dossier du personnel</p>
                    <p className="text-sm text-gray-600">CV et diplômes du personnel qualifié</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">5</span>
                  <div>
                    <p className="font-medium text-gray-900">Inventaire du matériel</p>
                    <p className="text-sm text-gray-600">équipements et mobilier</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">6</span>
                  <div>
                    <p className="font-medium text-gray-900">Document du projet</p>
                    <p className="text-sm text-gray-600">indiquant les activités du centre avec un volet financement et la procédure d'accès aux bénéficiaires</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">7</span>
                  <div>
                    <p className="font-medium text-gray-900">Numéro d'agrément</p>
                    <p className="text-sm text-gray-600">ou autorisation du ministère si nécessaire</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">8</span>
                  <div>
                    <p className="font-medium text-gray-900">Documents légaux</p>
                    <p className="text-sm text-gray-600">de responsabilité de la structure et du bail</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">9</span>
                  <div>
                    <p className="font-medium text-gray-900">Tous les actes de recommandation</p>
                    <p className="text-sm text-gray-600">des institutions partenaires ou du personnel concerné par les activités</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">10</span>
                  <div>
                    <p className="font-medium text-gray-900">Quittance de primes</p>
                    <p className="text-sm text-gray-600">statutaires et règlement des frais d'étude du dossier</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Procédure d'obtention */}
        <section className="mb-12">
          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
              <i className="ri-roadmap-line mr-3"></i>
              PROCÉDURE D'OBTENTION DE L'AUTORISATION D'OUVERTURE
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="font-bold text-blue-800 mb-2">Inscription en ligne</h3>
                <p className="text-sm text-gray-600">Votre inscription se fait par cette plateforme ou enregistrement via les informations informatisées avec les pièces jointes</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="font-bold text-blue-800 mb-2">Étude de demande et visite et agrément provisoire</h3>
                <p className="text-sm text-gray-600">Une équipe d'experts du MASM sera constituée pour étudier votre dossier et effectuer une visite de terrain</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="font-bold text-blue-800 mb-2">Délivrance de l'agrément définitif</h3>
                <p className="text-sm text-gray-600">Agrément définitif vous sera délivré, des activités suivant la loi en vigueur</p>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation */}
        <section className="mb-12">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <i className="ri-download-line mr-3"></i>
              DOCUMENTATION
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <i className="ri-file-pdf-line text-2xl text-red-600"></i>
                  <div>
                    <h3 className="font-medium text-gray-900">Décret fixant les modalités de création des CAPE</h3>
                    <p className="text-sm text-gray-500">Télécharger le décret</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <i className="ri-file-pdf-line text-2xl text-blue-600"></i>
                  <div>
                    <h3 className="font-medium text-gray-900">Le modèle consentement pour la collecte de vos données personnelles</h3>
                    <p className="text-sm text-gray-500">Télécharger le modèle</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <i className="ri-file-pdf-line text-2xl text-red-600"></i>
                  <div>
                    <h3 className="font-medium text-gray-900">Le guide d'inscription</h3>
                    <p className="text-sm text-gray-500">Télécharger le guide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Besoin d'aide ?</h3>
            <p className="text-gray-600 mb-4">
              Pour toute question concernant votre inscription CAPE, contactez directement le MASM
            </p>
            <a
              href="mailto:masm.dea@gouv.bj"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-mail-line"></i>
              <span>Contacter le MASM</span>
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
