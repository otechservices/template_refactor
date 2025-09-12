
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-gray-300 mb-2">
            <a href="#" className="hover:text-white cursor-pointer">Mentions légales</a> | 
            <a href="#" className="hover:text-white cursor-pointer ml-2">Politique de Confidentialité</a>
          </p>
          <div className="mt-4">
            <a 
              href="https://capemanager.social.gouv.bj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 cursor-pointer"
            >
              Espace d'administration
            </a>
          </div>
        </div>
        
        <div className="flex items-center justify-center mb-8">
          <img 
            src="https://cape.social.gouv.bj/assets/template2/images/logo-masm-footer.png" 
            alt="Logo MASM Footer" 
            className="h-20 object-contain"
          />
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-4">
            © Ministère des Affaires Sociales et de la Microfinance - 2022
          </p>
          
          {/* Drapeau du Bénin */}
          <div className="flex justify-center mb-6">
            <div className="flex h-3 w-24">
              <div className="flex-1 bg-green-500"></div>
              <div className="flex-1 bg-yellow-400"></div>
              <div className="flex-1 bg-red-500"></div>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-6">
            <a href="https://readdy.ai/?origin=logo" className="text-gray-400 hover:text-white text-sm cursor-pointer">
              Made with Readdy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
