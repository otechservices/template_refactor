
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CandidatureProfessionnelPage() {
  const [formData, setFormData] = useState({
    civilite: '',
    nom: '',
    prenom: '',
    dateNaissance: '',
    lieuNaissance: '',
    nationalite: '',
    telephone: '',
    email: '',
    adresse: '',
    profession: '',
    diplomes: '',
    experience: '',
    motivation: '',
    disponibilite: '',
    acceptPolicy: false
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.civilite) newErrors.civilite = 'Veuillez sélectionner votre civilité';
    if (!formData.nom.trim()) newErrors.nom = 'Le nom est obligatoire';
    if (!formData.prenom.trim()) newErrors.prenom = 'Le prénom est obligatoire';
    if (!formData.dateNaissance) newErrors.dateNaissance = 'La date de naissance est obligatoire';
    if (!formData.lieuNaissance.trim()) newErrors.lieuNaissance = 'Le lieu de naissance est obligatoire';
    if (!formData.nationalite.trim()) newErrors.nationalite = 'La nationalité est obligatoire';
    if (!formData.telephone.trim()) newErrors.telephone = 'Le téléphone est obligatoire';
    if (!formData.email.trim()) newErrors.email = 'L\'email est obligatoire';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email invalide';
    if (!formData.adresse.trim()) newErrors.adresse = 'L\'adresse est obligatoire';
    if (!formData.profession.trim()) newErrors.profession = 'La profession est obligatoire';
    if (!formData.diplomes.trim()) newErrors.diplomes = 'Les diplômes sont obligatoires';
    if (!formData.experience.trim()) newErrors.experience = 'L\'expérience est obligatoire';
    if (!formData.motivation.trim()) newErrors.motivation = 'La motivation est obligatoire';
    if (formData.motivation.length > 500) newErrors.motivation = 'La motivation ne peut pas dépasser 500 caractères';
    if (!formData.disponibilite.trim()) newErrors.disponibilite = 'La disponibilité est obligatoire';
    if (!formData.acceptPolicy) newErrors.acceptPolicy = 'Vous devez accepter la collecte de données';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const submitData = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'acceptPolicy') {
          submitData.append(key, value ? 'Oui' : 'Non');
        } else {
          submitData.append(key, value.toString());
        }
      });

      const response = await fetch('https://readdy.ai/api/form/candidature-professionnel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: submitData
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          civilite: '',
          nom: '',
          prenom: '',
          dateNaissance: '',
          lieuNaissance: '',
          nationalite: '',
          telephone: '',
          email: '',
          adresse: '',
          profession: '',
          diplomes: '',
          experience: '',
          motivation: '',
          disponibilite: '',
          acceptPolicy: false
        });
      } else {
        setErrors({ submit: 'Une erreur est survenue lors de l\'envoi' });
      }
    } catch (error) {
      setErrors({ submit: 'Une erreur est survenue lors de l\'envoi' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="w-full px-6 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-3">
                <img 
                  src="https://cape.social.gouv.bj/assets/template2/images/logo-masm.png" 
                  alt="LOGO MASM" 
                  className="h-12 object-contain"
                />
              </Link>
              <nav className="flex items-center space-x-8">
                <Link to="/" className="text-blue-600 hover:text-blue-700 cursor-pointer">Retour à l'accueil</Link>
              </nav>
            </div>
          </div>
        </header>

        <div className="py-16">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <i className="ri-check-line text-2xl text-green-600"></i>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Candidature envoyée avec succès</h1>
              <p className="text-gray-600 mb-6">
                Votre candidature pour devenir professionnel agréé a été transmise à nos équipes. 
                Vous recevrez une réponse par email dans les 5 jours ouvrables.
              </p>
              <Link 
                to="/" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="w-full px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="https://cape.social.gouv.bj/assets/template2/images/logo-masm.png" 
                alt="LOGO MASM" 
                className="h-12 object-contain"
              />
            </Link>
            <nav className="flex items-center space-x-8">
              <Link to="/" className="text-blue-600 hover:text-blue-700 cursor-pointer">Retour à l'accueil</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Professional%20development%20and%20career%20advancement%20consultation%20scene%20with%20diverse%20professionals%20in%20modern%20office%20environment%20discussing%20career%20opportunities%20and%20professional%20growth%2C%20bright%20modern%20office%20setting%2C%20warm%20lighting%2C%20people%20in%20business%20attire%20having%20meaningful%20career%20discussions%2C%20professional%20consultation%20atmosphere&width=1200&height=400&seq=prof-career-hero&orientation=landscape"
            alt="Développement professionnel"
            className="w-full h-full object-cover object-top opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Devenir Professionnel Agréé
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Rejoignez notre réseau de professionnels qualifiés dans le domaine de la petite enfance 
            et contribuez au développement des centres d'accueil et garderies au Bénin.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Formulaire de candidature</h2>
              <p className="text-gray-600">
                Veuillez remplir tous les champs obligatoires pour soumettre votre candidature.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6" data-readdy-form id="candidature-professionnel">
              {/* Informations personnelles */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations personnelles</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Civilité *
                    </label>
                    <select
                      name="civilite"
                      value={formData.civilite}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8 ${
                        errors.civilite ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Sélectionner</option>
                      <option value="Monsieur">Monsieur</option>
                      <option value="Madame">Madame</option>
                      <option value="Mademoiselle">Mademoiselle</option>
                    </select>
                    {errors.civilite && <p className="mt-1 text-sm text-red-600">{errors.civilite}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.nom ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Votre nom"
                    />
                    {errors.nom && <p className="mt-1 text-sm text-red-600">{errors.nom}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.prenom ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Votre prénom"
                    />
                    {errors.prenom && <p className="mt-1 text-sm text-red-600">{errors.prenom}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date de naissance *
                    </label>
                    <input
                      type="date"
                      name="dateNaissance"
                      value={formData.dateNaissance}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.dateNaissance ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.dateNaissance && <p className="mt-1 text-sm text-red-600">{errors.dateNaissance}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Lieu de naissance *
                    </label>
                    <input
                      type="text"
                      name="lieuNaissance"
                      value={formData.lieuNaissance}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.lieuNaissance ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Ville, Pays"
                    />
                    {errors.lieuNaissance && <p className="mt-1 text-sm text-red-600">{errors.lieuNaissance}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nationalité *
                    </label>
                    <input
                      type="text"
                      name="nationalite"
                      value={formData.nationalite}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.nationalite ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Ex: Béninoise"
                    />
                    {errors.nationalite && <p className="mt-1 text-sm text-red-600">{errors.nationalite}</p>}
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations de contact</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.telephone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+229 XX XX XX XX"
                    />
                    {errors.telephone && <p className="mt-1 text-sm text-red-600">{errors.telephone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="votre.email@exemple.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse complète *
                  </label>
                  <input
                    type="text"
                    name="adresse"
                    value={formData.adresse}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.adresse ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Votre adresse complète"
                  />
                  {errors.adresse && <p className="mt-1 text-sm text-red-600">{errors.adresse}</p>}
                </div>
              </div>

              {/* Informations professionnelles */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations professionnelles</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Profession actuelle *
                    </label>
                    <input
                      type="text"
                      name="profession"
                      value={formData.profession}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.profession ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Votre profession actuelle"
                    />
                    {errors.profession && <p className="mt-1 text-sm text-red-600">{errors.profession}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Diplômes et certifications *
                    </label>
                    <textarea
                      name="diplomes"
                      value={formData.diplomes}
                      onChange={handleInputChange}
                      rows={3}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.diplomes ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Listez vos diplômes et certifications"
                    />
                    {errors.diplomes && <p className="mt-1 text-sm text-red-600">{errors.diplomes}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expérience professionnelle *
                    </label>
                    <textarea
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.experience ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Décrivez votre expérience pertinente dans le domaine de la petite enfance"
                    />
                    {errors.experience && <p className="mt-1 text-sm text-red-600">{errors.experience}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Motivation (max 500 caractères) *
                    </label>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      rows={4}
                      maxLength={500}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.motivation ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Pourquoi souhaitez-vous devenir professionnel agréé ?"
                    />
                    <div className="mt-1 flex justify-between">
                      {errors.motivation && <p className="text-sm text-red-600">{errors.motivation}</p>}
                      <p className="text-sm text-gray-500">{formData.motivation.length}/500</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Disponibilité *
                    </label>
                    <input
                      type="text"
                      name="disponibilite"
                      value={formData.disponibilite}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.disponibilite ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Ex: Temps plein, temps partiel, consultations ponctuelles"
                    />
                    {errors.disponibilite && <p className="mt-1 text-sm text-red-600">{errors.disponibilite}</p>}
                  </div>
                </div>
              </div>

              {/* Acceptation */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="acceptPolicy"
                    checked={formData.acceptPolicy}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                  />
                  <div className="flex-1">
                    <label className="text-sm text-gray-700 cursor-pointer">
                      J'accepte que mes données personnelles soient collectées et traitées dans le cadre 
                      de ma candidature pour devenir professionnel agréé. Ces informations seront utilisées 
                      uniquement pour l'évaluation de ma candidature et la gestion de mon dossier. *
                    </label>
                    {errors.acceptPolicy && <p className="mt-1 text-sm text-red-600">{errors.acceptPolicy}</p>}
                  </div>
                </div>
              </div>

              {errors.submit && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-600">{errors.submit}</p>
                </div>
              )}

              <div className="flex justify-end space-x-4 pt-6">
                <Link 
                  to="/"
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Annuler
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Soumettre ma candidature'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-300 mb-2">
            <a href="#" className="hover:text-white cursor-pointer">Mentions légales</a> | 
            <a href="#" className="hover:text-white cursor-pointer ml-2">Politique de Confidentialité</a>
          </p>
          <div className="flex items-center justify-center mb-4">
            <img 
              src="https://cape.social.gouv.bj/assets/template2/images/logo-masm-footer.png" 
              alt="Logo MASM Footer" 
              className="h-16 object-contain"
            />
          </div>
          <p className="text-gray-400 text-sm">
            © Ministère des Affaires Sociales et de la Microfinance - 2022
          </p>
        </div>
      </footer>
    </div>
  );
}
