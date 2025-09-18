
import React, { useState } from 'react';
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';

export default function Login() {
  const [email, setEmail] = useState('masm.cpsallada@gouv.bj');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    // Simulation de connexion
    setTimeout(() => {
      setIsLoading(false);
      // Rediriger vers le tableau de bord
      window.location.href = '/';
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Image de gauche */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img 
          src="https://readdy.ai/api/search-image?query=Young%20African%20child%20smiling%20happily%20at%20camera%2C%20bright%20colorful%20background%20with%20other%20children%20playing%2C%20warm%20natural%20lighting%2C%20joyful%20expression%2C%20educational%20setting%2C%20vibrant%20colors%2C%20professional%20photography%20style%20showing%20hope%20and%20education&width=800&height=1000&seq=login-bg&orientation=portrait"
          alt="Enfants souriants"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-blue-900/20"></div>
      </div>

      {/* Formulaire de connexion */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Logo et titre */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <img 
                src="https://readdy.ai/api/search-image?query=Official%20government%20coat%20of%20arms%20emblem%20of%20Republic%20of%20Benin%2C%20detailed%20heraldic%20design%20with%20national%20symbols%2C%20professional%20government%20seal%2C%20formal%20institutional%20logo%20design%2C%20blue%20and%20gold%20colors&width=120&height=80&seq=benin-logo&orientation=squarish"
                alt="République du Bénin"
                className="h-16"
              />
            </div>
            <div className="text-xs text-gray-600 mb-2 uppercase tracking-wide">
              MINISTÈRE<br/>
              DES AFFAIRES SOCIALES<br/>
              ET DE LA MICROFINANCE<br/>
              -------<br/>
              RÉPUBLIQUE DU BÉNIN
            </div>
          </div>

          {/* Titre principal */}
          <div className="text-center">
            <h1 className="text-lg font-medium text-teal-700 leading-tight">
              Plateforme de gestion des centres d'accueil et de protection de l'enfant en République du Bénin
            </h1>
          </div>

          {/* Formulaire */}
          <div className="bg-white p-8 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold text-teal-700 mb-6 text-center">
              Authentification
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Veuillez vous connecter à votre espace de traitement *
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                  placeholder="Adresse email"
                />
              </div>

              <div>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full"
                  placeholder="Mot de passe"
                />
              </div>

              <Button
                variant="primary"
                onClick={handleLogin}
                disabled={isLoading || !email || !password}
                className="w-full bg-blue-800 hover:bg-blue-900"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Connexion...
                  </div>
                ) : (
                  'Connexion'
                )}
              </Button>

              <div className="text-center">
                <a 
                  href="#" 
                  className="text-sm text-blue-600 hover:text-blue-800 underline"
                >
                  Mot de passe oublié
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-gray-500">
            <p>© 2024 République du Bénin - Tous droits réservés</p>
            <p className="mt-1">
              Plateforme sécurisée pour la gestion des centres CAPE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
