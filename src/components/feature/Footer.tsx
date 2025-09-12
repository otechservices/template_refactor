
import { useNavigate } from 'react-router-dom';

export function Footer() {
  const navigate = useNavigate();

  return (
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
              Votre partenaire pour la maîtrise de la gestion de projet et la certification PMP.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300 dark:text-gray-400 transition-colors">
              <li><button onClick={() => navigate('/project-generator')} className="hover:text-orange-400 cursor-pointer text-left">Génération de projets</button></li>
              <li><button onClick={() => navigate('/formations')} className="hover:text-orange-400 cursor-pointer text-left">Formation PMP</button></li>
              <li><button onClick={() => navigate('/pmp-simulator')} className="hover:text-orange-400 cursor-pointer text-left">Simulateur d'examens</button></li>
              <li><button onClick={() => navigate('/missions')} className="hover:text-orange-400 cursor-pointer text-left">Conseil</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300 dark:text-gray-400 transition-colors">
              <li><button className="hover:text-orange-400 cursor-pointer text-left">FAQ</button></li>
              <li><button onClick={() => navigate('/contact')} className="hover:text-orange-400 cursor-pointer text-left">Contact</button></li>
              <li><button className="hover:text-orange-400 cursor-pointer text-left">Assistance</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Légal</h4>
            <ul className="space-y-2 text-gray-300 dark:text-gray-400 transition-colors">
              <li><button className="hover:text-orange-400 cursor-pointer text-left">Confidentialité</button></li>
              <li><button className="hover:text-orange-400 cursor-pointer text-left">Conditions d'utilisation</button></li>
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
  );
}
