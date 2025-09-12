import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '../../components/base/ThemeToggle';
import { JsonLd, generateOrganizationSchema, generateWebPageSchema } from '../../components/seo/JsonLd';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Update page title and meta description
    document.title = "SICA CONSEIL - Gestion de Projet & Formation PMP";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Maîtrisez la gestion de projet avec SICA CONSEIL. Génération automatique de projets personnalisés et formation certifiante PMP - Accès gratuit !');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* JSON-LD Schema */}
      <JsonLd data={generateOrganizationSchema()} />
      <JsonLd data={generateWebPageSchema(
        "SICA CONSEIL - Gestion de Projet & Formation PMP",
        "Maîtrisez la gestion de projet avec SICA CONSEIL. Génération automatique de projets personnalisés et formation certifiante PMP - Accès gratuit !",
        "/"
      )} />

      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 px-4 py-3 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://static.readdy.ai/image/2ce43ce334b232046883f79f4f3df46a/b61b027bf4d42918b4ae2ae5a241e2c2.jfif" 
              alt="SICA CONSEIL" 
              className="h-10 w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors">Accueil</a>
            <button onClick={() => navigate('/missions')} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors">Nos missions</button>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors">Formations</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors">Auto-génération de projets</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors">Notre expertise</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors">Contact</a>
            <ThemeToggle />
            <button
              onClick={() => navigate('/login')}
              className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors"
            >
              Connexion
            </button>
            <button 
              onClick={() => navigate('/dashboard')}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 cursor-pointer whitespace-nowrap transition-colors"
            >
              Accès gratuit
            </button>
          </div>

          <button 
            className="md:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-2xl text-gray-600 dark:text-gray-300"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 dark:border-gray-800">
            <div className="flex flex-col space-y-3 pt-4">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors">Accueil</a>
              <button onClick={() => navigate('/missions')} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer text-left transition-colors">Nos missions</button>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors">Formations</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors">Auto-génération de projets</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors">Notre expertise</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors">Contact</a>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-300">Mode sombre</span>
                <ThemeToggle />
              </div>
              <button
                onClick={() => navigate('/login')}
                className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer text-left transition-colors"
              >
                Connexion
              </button>
              <button 
                onClick={() => navigate('/dashboard')}
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 cursor-pointer whitespace-nowrap w-fit transition-colors"
              >
                Accès gratuit
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        className="relative py-20 px-4 bg-cover bg-center bg-no-repeat transition-colors overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(249, 115, 22, 0.9) 0%, rgba(234, 88, 12, 0.8) 50%, rgba(194, 65, 12, 0.9) 100%), url('https://static.readdy.ai/image/2ce43ce334b232046883f79f4f3df46a/46d63d94aab362a5e53218267bda1e6a.jfif')`
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mb-6">
                Plateforme Perfectionnée de Secteur de Projet
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                SICA CONSEIL
              </h1>
              
              <p className="text-xl text-white/90 mb-8 max-w-lg leading-relaxed">
                Maîtrisez la gestion de projet avec notre plateforme complète : génération automatique de projets personnalisés et formation certifiante PMP - Accès gratuit !
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={() => navigate('/dashboard')}
                  className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50 cursor-pointer whitespace-nowrap flex items-center justify-center font-semibold transition-colors shadow-lg"
                >
                  <i className="ri-play-fill mr-2"></i>
                  Commencer gratuitement
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 cursor-pointer whitespace-nowrap backdrop-blur-sm transition-colors">
                  Découvrir nos services
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-white/80 text-sm">Projets générés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">95%</div>
                  <div className="text-white/80 text-sm">Taux de réussite PMP</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">1000+</div>
                  <div className="text-white/80 text-sm">Utilisateurs actifs</div>
                </div>
              </div>
            </div>

            {/* Right side - Image is now integrated as background */}
            <div className="hidden lg:block">
              {/* This space is intentionally left for the background image to show through */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4 transition-colors">Nos Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-16 max-w-3xl mx-auto transition-colors">
            Une plateforme complète pour développer vos compétences en gestion de projet
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Auto-génération de Projets */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:shadow-lg dark:hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-file-text-line text-2xl text-orange-500"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 transition-colors">Auto-génération de Projets</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors">
                Créez des projets structurés et personnalisés en quelques clics.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700 dark:text-gray-300 transition-colors">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Formulaire interactif personnalisé
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300 transition-colors">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Génération automatique de charte projet
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300 transition-colors">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Export PDF/DOCX instantané
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300 transition-colors">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Personnalisation avancée
                </li>
              </ul>
            </div>

            {/* Formation Certifiante PMP */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:shadow-lg dark:hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-graduation-cap-line text-2xl text-orange-500"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 transition-colors">Formation Certifiante PMP</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors">
                Préparez-vous efficacement à la certification PMP.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700 dark:text-gray-300 transition-colors">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Modules de formation structurés
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300 transition-colors">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Simulateur d'examens PMP
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300 transition-colors">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Feedback détaillé en corrections
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300 transition-colors">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Certificat PMP automatique
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16 transition-colors">
            Pourquoi choisir SICA CONSEIL ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-user-line text-2xl text-orange-500"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 transition-colors">Accès gratuit</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors">
                Accès complet à tous nos services gratuitement - Inscription en quelques accessibles à tous
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-time-line text-2xl text-orange-500"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 transition-colors">Résultats immédiats</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors">
                Suivez instantanés, feedback détaillé et suivi de progression en temps réel
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-money-dollar-circle-line text-2xl text-orange-500"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 transition-colors">Prix démocratique</h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors">
                Accès complet à tous nos services pour seulement 1€ - Formule de qualité accessible
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-orange-500 dark:bg-orange-600 transition-colors">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à transformer votre approche de la gestion de projet ?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Rejoignez des milliers de professionnels qui font confiance à SICA CONSEIL
          </p>
          <button className="bg-white text-orange-500 px-8 py-3 rounded-lg hover:bg-orange-50 cursor-pointer whitespace-nowrap font-semibold transition-colors">
            <i className="ri-play-fill mr-2"></i>
            Commencer maintenant - Gratuit
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-black text-white py-16 px-4 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="https://static.readdy.ai/image/2ce43ce334b232046883f79f4f3df46a/b61b027bf4d42918b4ae2ae5a241e2c2.jfif" 
                  alt="SICA CONSEIL" 
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-300 dark:text-gray-400 transition-colors">
                Votre partenaire pour la maîtrise des services de gestion et la certification PMP.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300 dark:text-gray-400 transition-colors">
                <li><a href="#" className="hover:text-orange-400 cursor-pointer">Génération de projets</a></li>
                <li><a href="#" className="hover:text-orange-400 cursor-pointer">Formation PMP</a></li>
                <li><a href="#" className="hover:text-orange-400 cursor-pointer">Simulateur d'examens</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300 dark:text-gray-400 transition-colors">
                <li><a href="#" className="hover:text-orange-400 cursor-pointer">FAQ</a></li>
                <li><a href="#" className="hover:text-orange-400 cursor-pointer">Contact</a></li>
                <li><a href="#" className="hover:text-orange-400 cursor-pointer">Assistance</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Légal</h4>
              <ul className="space-y-2 text-gray-300 dark:text-gray-400 transition-colors">
                <li><a href="#" className="hover:text-orange-400 cursor-pointer">Confidentialité</a></li>
                <li><a href="#" className="hover:text-orange-400 cursor-pointer">Conditions d'utilisation</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 dark:border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center transition-colors">
            <p className="text-gray-400 dark:text-gray-500 mb-4 md:mb-0 transition-colors">© 2024 SICA CONSEIL. Tous droits réservés.</p>
            <div className="flex items-center space-x-4">
              <a href="https://readdy.ai/?origin=logo" className="text-gray-400 dark:text-gray-500 hover:text-orange-400 cursor-pointer transition-colors">Made with Readdy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
