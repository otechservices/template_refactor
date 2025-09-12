
import { useState } from 'react';
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    category: "CAPE",
    question: "Qu'est-ce qu'un CAPE ?",
    answer: "Un CAPE (Centre d'Accueil et de Protection de l'Enfant) est une structure dédiée à l'accueil, la protection et l'accompagnement des enfants en situation de vulnérabilité. Ces centres offrent un environnement sécurisé et des services adaptés aux besoins spécifiques de chaque enfant."
  },
  {
    id: 2,
    category: "CAPE",
    question: "Comment inscrire mon CAPE ?",
    answer: "Pour inscrire votre CAPE, vous devez constituer un dossier complet comprenant : les documents administratifs de votre structure, le projet éducatif, les qualifications du personnel, les locaux et équipements. Vous pouvez soumettre votre demande via notre plateforme en ligne ou vous rendre directement dans nos bureaux."
  },
  {
    id: 3,
    category: "CAPE",
    question: "Quels sont les critères d'autorisation d'un CAPE ?",
    answer: "Les critères incluent : conformité des locaux aux normes de sécurité, personnel qualifié et formé, projet éducatif cohérent, capacité d'accueil adaptée, respect des règles d'hygiène et de santé, et engagement à respecter les droits de l'enfant."
  },
  {
    id: 4,
    category: "Garderie",
    question: "Comment inscrire ma garderie ?",
    answer: "L'inscription d'une garderie nécessite de fournir : l'autorisation d'exploitation, le projet pédagogique, les qualifications du personnel éducatif, la conformité des locaux, et le respect des ratios encadrant/enfants. La demande se fait en ligne ou en présentiel."
  },
  {
    id: 5,
    category: "Garderie",
    question: "Quel est l'âge limite pour les enfants en garderie ?",
    answer: "Les garderies accueillent généralement les enfants de 3 mois à 6 ans. Cependant, certaines structures peuvent avoir des spécificités selon leur projet pédagogique et leur autorisation d'exploitation."
  },
  {
    id: 6,
    category: "Procédures",
    question: "Combien de temps prend l'instruction d'un dossier ?",
    answer: "L'instruction d'un dossier prend généralement entre 30 à 60 jours ouvrables, selon la complétude du dossier et la complexité de la demande. Un accusé de réception vous sera remis dès le dépôt de votre dossier."
  },
  {
    id: 7,
    category: "Procédures",
    question: "Que faire si mon dossier est rejeté ?",
    answer: "En cas de rejet, vous recevrez une notification détaillée des motifs. Vous pouvez soit corriger les points soulevés et redéposer votre dossier, soit faire un recours administratif dans un délai de 30 jours suivant la notification."
  },
  {
    id: 8,
    category: "Support",
    question: "Comment contacter le service support ?",
    answer: "Vous pouvez nous contacter par email à masm.dea@gouv.bj, par téléphone au 229 60 42 20 09, ou en utilisant notre formulaire de contact en ligne. Notre équipe vous répondra dans les plus brefs délais."
  },
  {
    id: 9,
    category: "Support",
    question: "Comment ouvrir un ticket de support ?",
    answer: "Pour ouvrir un ticket, utilisez notre formulaire dédié sur la plateforme. Décrivez précisément votre problème ou votre demande. Vous recevrez un numéro de ticket pour suivre l'avancement de votre demande."
  },
  {
    id: 10,
    category: "Documents",
    question: "Quels documents sont nécessaires pour une demande ?",
    answer: "Les documents requis varient selon le type de demande : statuts de l'association, CV du personnel, plans des locaux, projet éducatif/pédagogique, attestations d'assurance, certificats médicaux du personnel, etc. Une liste détaillée est disponible pour chaque type de structure."
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Toutes');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['Toutes', ...Array.from(new Set(faqData.map(item => item.category)))];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqData.filter(item => {
    const matchesCategory = selectedCategory === 'Toutes' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-96 flex items-center justify-center bg-cover bg-center pt-20"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=Professional%20African%20customer%20service%20team%20helping%20clients%20in%20modern%20office%20environment%2C%20friendly%20atmosphere%2C%20people%20asking%20questions%20and%20getting%20support%2C%20warm%20lighting%20and%20welcoming%20workspace&width=1920&height=600&seq=faq-hero&orientation=landscape)'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Questions Fréquemment Posées
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Trouvez rapidement les réponses à vos questions sur nos services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <div className="w-full md:w-96">
                <div className="relative">
                  <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"></i>
                  <input
                    type="text"
                    placeholder="Rechercher une question..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                      selectedCategory === category
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((item) => (
                <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                          {item.category}
                        </span>
                        <h3 className="text-lg font-medium text-gray-900">
                          {item.question}
                        </h3>
                      </div>
                      <i className={`ri-arrow-down-s-line text-xl text-gray-500 transition-transform duration-200 ${
                        openItems.includes(item.id) ? 'rotate-180' : ''
                      }`}></i>
                    </div>
                  </button>
                  
                  {openItems.includes(item.id) && (
                    <div className="px-6 pb-4">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <i className="ri-search-line text-6xl text-gray-300 mb-4"></i>
                <p className="text-gray-500 text-lg">
                  Aucune question trouvée pour votre recherche
                </p>
              </div>
            )}
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-green-50 rounded-2xl p-8 text-center">
            <i className="ri-question-answer-line text-4xl text-green-600 mb-4"></i>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Vous ne trouvez pas la réponse à votre question ?
            </h2>
            <p className="text-gray-600 mb-6">
              Notre équipe support est là pour vous aider. Contactez-nous directement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:masm.dea@gouv.bj"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-mail-line text-lg"></i>
                <span>Envoyer un email</span>
              </a>
              <a
                href="tel:+22960422009"
                className="bg-white border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-phone-line text-lg"></i>
                <span>Nous appeler</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
