import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '../../components/base/ThemeToggle';
import { JsonLd, generateWebPageSchema, generateBreadcrumbSchema } from '../../components/seo/JsonLd';

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    service: 'conseil'
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Update page title and meta description
    document.title = "Contactez-nous - SICA CONSEIL | Gestion de Projet et Formation";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contactez SICA CONSEIL pour vos projets de gestion, formations PMP, conseil en transformation. Consultation gratuite. +33 1 23 45 67 89');
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi du formulaire
    console.log('Formulaire envoyé:', formData);
    alert('Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');
  };

  const contactInfo = [
    {
      icon: 'ri-phone-line',
      title: 'Téléphone',
      value: '+33 1 23 45 67 89',
      description: 'Lun-Ven: 9h-18h'
    },
    {
      icon: 'ri-mail-line',
      title: 'Email',
      value: 'contact@sica-conseil.fr',
      description: 'Réponse sous 24h'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Adresse',
      value: '123 Avenue des Champs-Élysées',
      description: '75008 Paris, France'
    },
    {
      icon: 'ri-time-line',
      title: 'Horaires',
      value: 'Lundi - Vendredi',
      description: '9h00 - 18h00'
    }
  ];

  const services = [
    { value: 'conseil', label: 'Conseil en Management' },
    { value: 'formation', label: 'Formation PMP' },
    { value: 'audit', label: 'Audit & Optimisation' },
    { value: 'coaching', label: 'Coaching Individuel' },
    { value: 'digital', label: 'Transformation Digitale' },
    { value: 'autre', label: 'Autre demande' }
  ];

  const faqs = [
    {
      question: 'Combien coûte une formation PMP ?',
      answer: 'Nos formations PMP sont accessibles dès 1€ pour l\'ensemble du programme complet incluant les tests blancs et le support personnalisé.'
    },
    {
      question: 'Quelle est la durée moyenne d\'une mission de conseil ?',
      answer: 'La durée varie selon la complexité du projet, généralement entre 1 et 6 mois. Nous proposons une évaluation gratuite pour estimer précisément vos besoins.'
    },
    {
      question: 'Proposez-vous des formations en entreprise ?',
      answer: 'Oui, nous proposons des formations sur mesure adaptées aux besoins spécifiques de votre organisation, directement dans vos locaux ou en distanciel.'
    },
    {
      question: 'Comment obtenir un devis personnalisé ?',
      answer: 'Utilisez notre formulaire de contact en précisant vos besoins, ou appelez-nous directement. Nous vous proposerons un devis gratuit sous 48h.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* JSON-LD Schema */}
      <JsonLd data={generateWebPageSchema(
        "Contactez-nous - SICA CONSEIL",
        "Contactez SICA CONSEIL pour vos projets de gestion, formations PMP, conseil en transformation. Consultation gratuite. +33 1 23 45 67 89",
        "/contact"
      )} />
      <JsonLd data={generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Contact", url: "/contact" }
      ])} />

      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 px-4 py-3 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://static.readdy.ai/image/2ce43ce334b232046883f79f4f3df46a/b61b027bf4d42918b4ae2ae5a241e2c2.jfif" 
              alt="SICA CONSEIL" 
              className="h-10 w-auto cursor-pointer"
              onClick={() => navigate('/')}
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => navigate('/')} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors">Accueil</button>
            <button onClick={() => navigate('/missions')} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors">Nos missions</button>
            <button onClick={() => navigate('/formations')} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors">Formations</button>
            <button onClick={() => navigate('/project-generator')} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors">Auto-génération de projets</button>
            <button onClick={() => navigate('/expertise')} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors">Notre expertise</button>
            <button className="text-orange-500 font-medium cursor-pointer">Contact</button>
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
              <button onClick={() => navigate('/')} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer text-left transition-colors">Accueil</button>
              <button onClick={() => navigate('/missions')} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer text-left transition-colors">Nos missions</button>
              <button onClick={() => navigate('/formations')} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer text-left transition-colors">Formations</button>
              <button onClick={() => navigate('/project-generator')} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer text-left transition-colors">Auto-génération de projets</button>
              <button onClick={() => navigate('/expertise')} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer text-left transition-colors">Notre expertise</button>
              <button className="text-orange-500 font-medium cursor-pointer text-left">Contact</button>
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
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-gray-800 dark:to-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 transition-colors">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto transition-colors">
            Discutons de votre projet et découvrons ensemble comment nous pouvons vous accompagner
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 cursor-pointer whitespace-nowrap transition-colors">
              <i className="ri-phone-line mr-2"></i>
              Appeler maintenant
            </button>
            <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer whitespace-nowrap transition-colors">
              <i className="ri-calendar-line mr-2"></i>
              Planifier un RDV
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${info.icon} text-2xl text-orange-500`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 transition-colors">{info.title}</h3>
                <p className="text-gray-800 dark:text-white font-semibold mb-1 transition-colors">{info.value}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 transition-colors">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 transition-colors">Envoyez-nous un message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                      Service d'intérêt *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-8 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm transition-colors"
                      required
                    >
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm resize-none transition-colors"
                    placeholder="Décrivez votre projet ou vos besoins..."
                    required
                  ></textarea>
                  <div className="text-right text-sm text-gray-500 dark:text-gray-400 mt-1 transition-colors">
                    {formData.message.length}/500 caractères
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 focus:ring-4 focus:ring-orange-200 font-medium transition-colors cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-send-plane-line mr-2"></i>
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-colors">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 transition-colors">Notre localisation</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors">
                  Rendez-nous visite dans nos bureaux parisiens pour un échange en personne
                </p>
              </div>
              
              <div className="h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937604!2d2.295028316395587!3d48.86837007928708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fec70fb1337%3A0x1e9d44b4a4d1c5e8!2sChamps-%C3%89lys%C3%A9es%2C%20Paris%2C%20France!5e0!3m2!1sfr!2sfr!4v1647875586589!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation SICA CONSEIL"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 transition-colors">Questions Fréquentes</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors">
              Trouvez rapidement les réponses à vos questions
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 transition-colors">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3 transition-colors">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors">Vous ne trouvez pas la réponse à votre question ?</p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 cursor-pointer whitespace-nowrap transition-colors">
              <i className="ri-question-line mr-2"></i>
              Poser une question
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-orange-500 dark:bg-orange-600 transition-colors">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Contactez-nous dès aujourd'hui pour une consultation gratuite
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-500 px-8 py-3 rounded-lg hover:bg-orange-50 cursor-pointer whitespace-nowrap font-semibold transition-colors">
              <i className="ri-phone-line mr-2"></i>
              +33 1 23 45 67 89
            </button>
            <button 
              onClick={() => navigate('/dashboard')}
              className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 cursor-pointer whitespace-nowrap font-semibold transition-colors"
            >
              <i className="ri-play-line mr-2"></i>
              Essayer gratuitement
            </button>
          </div>
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
                Votre partenaire pour la maîtrise de la gestion de projet et la certification PMP.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300 dark:text-gray-400 transition-colors">
                <li>+33 1 23 45 67 89</li>
                <li>contact@sica-conseil.fr</li>
                <li>123 Avenue des Champs-Élysées</li>
                <li>75008 Paris, France</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300 dark:text-gray-400 transition-colors">
                <li><button className="hover:text-orange-400 cursor-pointer text-left">FAQ</button></li>
                <li><button className="hover:text-orange-400 cursor-pointer text-left">Assistance</button></li>
                <li><button className="hover:text-orange-400 cursor-pointer text-left">Documentation</button></li>
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
    </div>
  );
}
