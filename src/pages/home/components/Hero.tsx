
export default function Hero() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/auth/login');
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://readdy.ai/api/search-image?query=Professional%20African%20childcare%20workers%20smiling%20while%20supervising%20happy%20children%20playing%20in%20a%20modern%20bright%20CAPE%20center%20or%20daycare%20facility%2C%20colorful%20educational%20environment%20with%20safety%20equipment%2C%20warm%20natural%20lighting%2C%20children%20engaged%20in%20learning%20activities%2C%20protective%20and%20nurturing%20atmosphere%20showcasing%20quality%20childcare%20services&width=1920&height=1080&seq=hero-cape-bg&orientation=landscape)'
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 text-center text-white px-8 py-12 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          PLATEFORME CAPE ET GARDERIES
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Votre portail officiel pour l'inscription et l'autorisation des structures de protection de l'enfant au Bénin
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {/* Inscription Garderie */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
              <i className="ri-building-line text-2xl text-blue-600"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Inscription Garderie</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">Demandez l'autorisation d'ouverture de votre garderie</p>
            <button
              onClick={() => window.location.href = '/auth/login'}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap"
            >
              Commencer
            </button>
          </div>

          {/* Inscription CAPE */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
              <i className="ri-shield-user-line text-2xl text-green-600"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Inscription CAPE</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">Obtenez votre autorisation CAPE facilement</p>
            <button
              onClick={() => window.location.href = '/auth/login'}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap"
            >
              Commencer
            </button>
          </div>

          {/* Suivi de dossier */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
              <i className="ri-file-search-line text-2xl text-orange-600"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Suivi de dossier</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">Consultez l'état d'avancement de votre dossier</p>
            <button
              onClick={() => scrollToSection('ticket-support')}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap"
            >
              Suivre
            </button>
          </div>

          {/* Assistance */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
              <i className="ri-customer-service-2-line text-2xl text-purple-600"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Assistance</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">Obtenez de l'aide pour vos démarches</p>
            <button
              onClick={() => scrollToSection('ticket-support')}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap"
            >
              Contacter
            </button>
          </div>
        </div>

        {/* Section informative */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <i className="ri-information-line text-3xl text-white mr-3"></i>
            <h2 className="text-xl font-semibold text-white">Informations importantes</h2>
          </div>
          <p className="text-white/90 text-center leading-relaxed">
            Toutes les demandes sont traitées selon les réglementations en vigueur. 
            Pour toute question, n'hésitez pas à nous contacter via notre service d'assistance.
          </p>
        </div>
      </div>
    </section>
  );
}
