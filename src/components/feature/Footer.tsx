
export default function Footer() {
  const quickLinks = [
    { name: 'État Civil', href: '#' },
    { name: 'Urbanisme', href: '#' },
    { name: 'Taxes Locales', href: '#' },
    { name: 'Démarches en ligne', href: '#' }
  ];

  const infoLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Actualités', href: '/actualites' },
    { name: 'Découvrir Dangbo', href: '/decouvrir-dangbo' },
    { name: 'Municipalité', href: '/municipalite' },
    { name: 'Services', href: '/services' },
    { name: 'Documentation', href: '/documentation' },
    { name: 'Projets', href: '/projets' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <i className="ri-phone-line mr-2 text-blue-400"></i>
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="ri-map-pin-line text-blue-400 mr-3 mt-1"></i>
                <div>
                  <p className="font-medium">Mairie de Dangbo</p>
                  <p className="text-gray-400">BP 123, Dangbo, Bénin</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="ri-phone-line text-blue-400 mr-3"></i>
                <p className="text-gray-400">+229 XX XX XX XX</p>
              </div>
              <div className="flex items-center">
                <i className="ri-mail-line text-blue-400 mr-3"></i>
                <p className="text-gray-400">contact@mairiedangbo.bj</p>
              </div>
            </div>
          </div>

          {/* Quick Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services Rapides</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center group"
                  >
                    <i className="ri-arrow-right-s-line mr-2 text-blue-400 group-hover:translate-x-1 transition-transform"></i>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Informations</h3>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center group"
                  >
                    <i className="ri-arrow-right-s-line mr-2 text-blue-400 group-hover:translate-x-1 transition-transform"></i>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Suivez-nous</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.facebook.com/share/1BMgRbVMaw/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
              >
                <i className="ri-facebook-line text-lg"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
              >
                <i className="ri-twitter-line text-lg"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
              >
                <i className="ri-instagram-line text-lg"></i>
              </a>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-400 mb-4">Restez informé de nos actualités</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-white"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors cursor-pointer whitespace-nowrap">
                  <i className="ri-send-plane-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <h4 className="text-lg font-bold mb-6 text-center">Partenaires</h4>
          <div className="flex justify-center">
            <div className="flex items-center space-x-4 bg-gray-800 rounded-lg p-4">
              <img
                src="https://mairiedangbo-api.exploitsweb.com/public/storage/partenaires/68a0d0b2e9d42_ancb.png"
                alt="Association Nationale des Communes du Bénin"
                className="h-12 object-contain"
              />
              <div>
                <a
                  href="https://ancb-benin.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium cursor-pointer"
                >
                  Association Nationale des Communes du Bénin
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2025 Dangbo. Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
              Mentions légales
            </a>
            <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-white cursor-pointer">
              Accessibilité
            </a>
            <a 
              href="https://readdy.ai/?origin=logo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 cursor-pointer font-medium"
            >
              Made with Readdy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
