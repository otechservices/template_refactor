import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from '../../components/base/ThemeToggle';
import { JsonLd, generateCourseSchema, generateWebPageSchema, generateBreadcrumbSchema } from '../../components/seo/JsonLd';

export default function Formations() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Tous');
  const navigate = useNavigate();

  useEffect(() => {
    // Update page title and meta description
    document.title = "Formations Certifiantes PMP, PRINCE2, Scrum, Lean Six Sigma | SICA CONSEIL";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Formations certifiantes reconnues mondialement : PMP, CAPM, PRINCE2, PSPO, PSM, Lean Six Sigma. E-learning et formation assistée. Taux de réussite 97%.');
    }
  }, []);

  const categories = ['Tous', 'PMP/CAPM', 'PRINCE2', 'Scrum', 'Lean Six Sigma'];

  const formations = [
    // PMP Formations
    {
      id: 'pmp-elearning',
      title: '📘 PMP (Project Management Professional) - E-learning',
      category: 'PMP/CAPM',
      level: 'Avancé',
      duration: '35h',
      price: '1890€',
      originalPrice: '2200€',
      rating: 4.9,
      students: 1520,
      description: 'Certification PMP en e-learning avec support complet et garantie de réussite',
      features: [
        '35h de formation e-learning',
        'Tests blancs illimités',
        'Support personnalisé 24/7',
        'Garantie de réussite',
        'Certificat officiel PMI'
      ],
      instructor: 'Dr. Pierre Martinet',
      image: 'https://readdy.ai/api/search-image?query=professional%20project%20management%20online%20e-learning%20computer%20screen%20modern%20office%20PMP%20certification%20digital%20training%20course%20interactive%20modules&width=400&height=250&seq=pmp-elearning&orientation=landscape',
      badge: 'Certifiant',
      logo: '📘'
    },
    {
      id: 'pmp-interaction',
      title: '📘 PMP (Project Management Professional) - Formation Assistée',
      category: 'PMP/CAPM',
      level: 'Avancé', 
      duration: '35h',
      price: '2490€',
      originalPrice: '2800€',
      rating: 4.9,
      students: 890,
      description: 'Formation PMP programmée assistée par un instructeur expert certifié',
      features: [
        '35h de formation présentielle',
        'Instructeur expert certifié',
        'Groupes de 12 participants max',
        'Matériel pédagogique inclus',
        'Suivi post-formation'
      ],
      instructor: 'Dr. Pierre Martinet',
      image: 'https://readdy.ai/api/search-image?query=professional%20instructor%20teaching%20PMP%20certification%20classroom%20training%20business%20people%20learning%20project%20management%20whiteboard%20presentation%20collaborative%20environment&width=400&height=250&seq=pmp-interaction&orientation=landscape',
      badge: 'Présentiel',
      logo: '📘'
    },
    
    // CAPM Formations
    {
      id: 'capm-elearning',
      title: '📘 CAPM (Certified Associate Project Manager) - E-learning',
      category: 'PMP/CAPM',
      level: 'Débutant',
      duration: '23h',
      price: '990€',
      originalPrice: '1200€',
      rating: 4.7,
      students: 756,
      description: 'Certification CAPM en e-learning pour débutants en gestion de projet',
      features: [
        '23h de formation e-learning',
        'Accès plateforme 6 mois',
        'Quiz interactifs',
        'Support technique',
        'Certificat PMI'
      ],
      instructor: 'Sarah Legrand',
      image: 'https://readdy.ai/api/search-image?query=CAPM%20certification%20online%20training%20beginner%20project%20management%20e-learning%20platform%20computer%20screen%20digital%20course%20modules%20interactive%20learning&width=400&height=250&seq=capm-elearning&orientation=landscape',
      badge: 'Débutant',
      logo: '📘'
    },
    {
      id: 'capm-interaction',
      title: '📘 CAPM (Certified Associate Project Manager) - Formation Assistée',
      category: 'PMP/CAPM',
      level: 'Débutant',
      duration: '23h',
      price: '1490€',
      originalPrice: '1700€',
      rating: 4.8,
      students: 534,
      description: 'Formation CAPM programmée assistée par un instructeur pour débutants',
      features: [
        '23h de formation présentielle',
        'Approche pédagogique adaptée',
        'Exercices pratiques',
        'Certification incluse',
        'Réseau professionnel'
      ],
      instructor: 'Sarah Legrand',
      image: 'https://readdy.ai/api/search-image?query=CAPM%20training%20classroom%20instructor%20teaching%20project%20management%20basics%20beginners%20learning%20environment%20collaborative%20session%20whiteboard&width=400&height=250&seq=capm-interaction&orientation=landscape',
      badge: 'Présentiel',
      logo: '📘'
    },

    // PRINCE2 Foundation
    {
      id: 'prince2-foundation-elearning',
      title: '📗 PRINCE2 Foundation - E-learning',
      category: 'PRINCE2',
      level: 'Débutant',
      duration: '21h',
      price: '850€',
      originalPrice: '1000€',
      rating: 4.6,
      students: 432,
      description: 'Formation PRINCE2 Foundation en e-learning selon les standards officiels',
      features: [
        '21h de formation e-learning',
        'Méthodologie PRINCE2 complète',
        'Exercices pratiques',
        'Examen blanc inclus',
        'Certificat AXELOS'
      ],
      instructor: 'Marc Dupont',
      image: 'https://readdy.ai/api/search-image?query=PRINCE2%20foundation%20online%20training%20methodology%20project%20management%20e-learning%20course%20structured%20approach%20digital%20platform&width=400&height=250&seq=prince2-foundation-elearning&orientation=landscape',
      badge: 'Foundation',
      logo: '📗'
    },
    {
      id: 'prince2-foundation-interaction',
      title: '📗 PRINCE2 Foundation - Formation Assistée',
      category: 'PRINCE2',
      level: 'Débutant',
      duration: '21h',
      price: '1290€',
      originalPrice: '1500€',
      rating: 4.7,
      students: 328,
      description: 'Formation PRINCE2 Foundation programmée assistée par un instructeur certifié',
      features: [
        '21h de formation présentielle',
        'Instructeur PRINCE2 certifié',
        'Cas d\'étude pratiques',
        'Support pédagogique',
        'Certification AXELOS'
      ],
      instructor: 'Marc Dupont',
      image: 'https://readdy.ai/api/search-image?query=PRINCE2%20foundation%20classroom%20training%20instructor%20teaching%20methodology%20project%20management%20principles%20structured%20approach%20collaborative%20learning&width=400&height=250&seq=prince2-foundation-interaction&orientation=landscape',
      badge: 'Présentiel',
      logo: '📗'
    },

    // PRINCE2 Practitioner
    {
      id: 'prince2-practitioner-elearning',
      title: '📗 PRINCE2 Practitioner - E-learning',
      category: 'PRINCE2',
      level: 'Avancé',
      duration: '28h',
      price: '1190€',
      originalPrice: '1400€',
      rating: 4.8,
      students: 245,
      description: 'Formation PRINCE2 Practitioner en e-learning pour maîtriser l\'application pratique',
      features: [
        '28h de formation e-learning',
        'Scénarios pratiques avancés',
        'Outils PRINCE2 complets',
        'Coaching personnalisé',
        'Certificat Practitioner'
      ],
      instructor: 'Marc Dupont',
      image: 'https://readdy.ai/api/search-image?query=PRINCE2%20practitioner%20advanced%20online%20training%20project%20management%20application%20practical%20scenarios%20e-learning%20platform%20expert%20level&width=400&height=250&seq=prince2-practitioner-elearning&orientation=landscape',
      badge: 'Practitioner',
      logo: '📗'
    },
    {
      id: 'prince2-practitioner-interaction',
      title: '📗 PRINCE2 Practitioner - Formation Assistée',
      category: 'PRINCE2',
      level: 'Avancé',
      duration: '28h',
      price: '1690€',
      originalPrice: '1900€',
      rating: 4.9,
      students: 187,
      description: 'Formation PRINCE2 Practitioner programmée assistée pour application experte',
      features: [
        '28h de formation présentielle',
        'Ateliers pratiques intensifs',
        'Simulation de projets réels',
        'Mentorat expert',
        'Certification avancée'
      ],
      instructor: 'Marc Dupont',
      image: 'https://readdy.ai/api/search-image?query=PRINCE2%20practitioner%20classroom%20advanced%20training%20expert%20instructor%20project%20management%20workshop%20practical%20application%20real%20project%20simulation&width=400&height=250&seq=prince2-practitioner-interaction&orientation=landscape',
      badge: 'Présentiel',
      logo: '📗'
    },

    // PSPO I
    {
      id: 'pspo1-elearning',
      title: '📙 PSPO I (Professional Scrum Product Owner) - E-learning',
      category: 'Scrum',
      level: 'Intermédiaire',
      duration: '16h',
      price: '790€',
      originalPrice: '950€',
      rating: 4.7,
      students: 623,
      description: 'Certification PSPO I en e-learning pour devenir Product Owner certifié Scrum.org',
      features: [
        '16h de formation e-learning',
        'Méthodes Scrum approfondies',
        'Gestion du Product Backlog',
        'Techniques de priorisation',
        'Certificat Scrum.org'
      ],
      instructor: 'Julie Chen',
      image: 'https://readdy.ai/api/search-image?query=Scrum%20Product%20Owner%20PSPO%20training%20online%20e-learning%20agile%20methodology%20product%20backlog%20management%20digital%20course%20scrum.org%20certification&width=400&height=250&seq=pspo1-elearning&orientation=landscape',
      badge: 'PSPO I',
      logo: '📙'
    },
    {
      id: 'pspo1-interaction',
      title: '📙 PSPO I (Professional Scrum Product Owner) - Formation Assistée',
      category: 'Scrum',
      level: 'Intermédiaire',
      duration: '16h',
      price: '1190€',
      originalPrice: '1350€',
      rating: 4.8,
      students: 456,
      description: 'Formation PSPO I programmée assistée pour maîtriser le rôle de Product Owner',
      features: [
        '16h de formation présentielle',
        'Ateliers Product Owner',
        'Jeux de rôle Scrum',
        'Coaching agile',
        'Réseau Scrum'
      ],
      instructor: 'Julie Chen',
      image: 'https://readdy.ai/api/search-image?query=Scrum%20Product%20Owner%20PSPO%20classroom%20training%20instructor%20agile%20workshop%20product%20backlog%20collaborative%20learning%20scrum%20team%20simulation&width=400&height=250&seq=pspo1-interaction&orientation=landscape',
      badge: 'Présentiel',
      logo: '📙'
    },

    // PSPO II
    {
      id: 'pspo2-elearning',
      title: '📙 PSPO II (Professional Scrum Product Owner) - E-learning',
      category: 'Scrum',
      level: 'Avancé',
      duration: '24h',
      price: '1290€',
      originalPrice: '1500€',
      rating: 4.8,
      students: 234,
      description: 'Certification PSPO II en e-learning pour Product Owners expérimentés',
      features: [
        '24h de formation e-learning',
        'Stratégies produit avancées',
        'Métriques et KPIs',
        'Leadership produit',
        'Certificat PSPO II'
      ],
      instructor: 'Julie Chen',
      image: 'https://readdy.ai/api/search-image?query=PSPO%20II%20advanced%20product%20owner%20training%20online%20e-learning%20product%20strategy%20metrics%20KPIs%20leadership%20digital%20course%20expert%20level&width=400&height=250&seq=pspo2-elearning&orientation=landscape',
      badge: 'PSPO II',
      logo: '📙'
    },
    {
      id: 'pspo2-interaction',
      title: '📙 PSPO II (Professional Scrum Product Owner) - Formation Assistée',
      category: 'Scrum',
      level: 'Avancé',
      duration: '24h',
      price: '1790€',
      originalPrice: '2000€',
      rating: 4.9,
      students: 167,
      description: 'Formation PSPO II programmée pour Product Owners senior',
      features: [
        '24h de formation présentielle',
        'Stratégies produit complexes',
        'Leadership d\'équipe produit',
        'Coaching avancé',
        'Certification expert'
      ],
      instructor: 'Julie Chen',
      image: 'https://readdy.ai/api/search-image?query=PSPO%20II%20advanced%20classroom%20training%20senior%20product%20owner%20strategic%20product%20management%20leadership%20workshop%20expert%20instructor&width=400&height=250&seq=pspo2-interaction&orientation=landscape',
      badge: 'Présentiel',
      logo: '📙'
    },

    // PSPO III
    {
      id: 'pspo3-elearning',
      title: '📙 PSPO III (Professional Scrum Product Owner) - E-learning',
      category: 'Scrum',
      level: 'Expert',
      duration: '32h',
      price: '1890€',
      originalPrice: '2200€',
      rating: 4.9,
      students: 89,
      description: 'Certification PSPO III en e-learning pour Product Owners experts',
      features: [
        '32h de formation e-learning',
        'Vision produit stratégique',
        'Innovation et disruption',
        'Mentorat d\'autres PO',
        'Certificat PSPO III'
      ],
      instructor: 'Julie Chen',
      image: 'https://readdy.ai/api/search-image?query=PSPO%20III%20expert%20product%20owner%20training%20online%20strategic%20product%20vision%20innovation%20disruption%20mentoring%20advanced%20e-learning%20course&width=400&height=250&seq=pspo3-elearning&orientation=landscape',
      badge: 'PSPO III',
      logo: '📙'
    },
    {
      id: 'pspo3-interaction',
      title: '📙 PSPO III (Professional Scrum Product Owner) - Formation Assistée',
      category: 'Scrum',
      level: 'Expert',
      duration: '32h',
      price: '2490€',
      originalPrice: '2800€',
      rating: 4.9,
      students: 56,
      description: 'Formation PSPO III programmée pour Product Owners de niveau expert',
      features: [
        '32h de formation présentielle',
        'Masterclass stratégique',
        'Études de cas complexes',
        'Mentorat personnalisé',
        'Certification expert'
      ],
      instructor: 'Julie Chen',
      image: 'https://readdy.ai/api/search-image?query=PSPO%20III%20expert%20classroom%20masterclass%20strategic%20product%20owner%20complex%20case%20studies%20personalized%20mentoring%20expert%20certification%20training&width=400&height=250&seq=pspo3-interaction&orientation=landscape',
      badge: 'Présentiel',
      logo: '📙'
    },

    // PSM I
    {
      id: 'psm1-elearning',
      title: '📙 PSM I (Professional Scrum Master) - E-learning',
      category: 'Scrum',
      level: 'Intermédiaire',
      duration: '16h',
      price: '790€',
      originalPrice: '950€',
      rating: 4.8,
      students: 789,
      description: 'Certification PSM I en e-learning pour devenir Scrum Master certifié',
      features: [
        '16h de formation e-learning',
        'Framework Scrum complet',
        'Facilitation d\'équipe',
        'Résolution d\'obstacles',
        'Certificat Scrum.org'
      ],
      instructor: 'Thomas Bernard',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Scrum%20Master%20PSM%20training%20online%20e-learning%20scrum%20framework%20team%20facilitation%20obstacle%20removal%20digital%20course%20certification&width=400&height=250&seq=psm1-elearning&orientation=landscape',
      badge: 'PSM I',
      logo: '📙'
    },
    {
      id: 'psm1-interaction',
      title: '📙 PSM I (Professional Scrum Master) - Formation Assistée',
      category: 'Scrum',
      level: 'Intermédiaire',
      duration: '16h',
      price: '1190€',
      originalPrice: '1350€',
      rating: 4.9,
      students: 567,
      description: 'Formation PSM I programmée assistée pour maîtriser le rôle de Scrum Master',
      features: [
        '16h de formation présentielle',
        'Ateliers Scrum interactifs',
        'Simulations d\'équipe',
        'Coaching en direct',
        'Communauté Scrum'
      ],
      instructor: 'Thomas Bernard',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Scrum%20Master%20PSM%20classroom%20training%20interactive%20workshops%20team%20simulations%20live%20coaching%20scrum%20community&width=400&height=250&seq=psm1-interaction&orientation=landscape',
      badge: 'Présentiel',
      logo: '📙'
    },

    // PSM II
    {
      id: 'psm2-elearning',
      title: '📙 PSM II (Professional Scrum Master) - E-learning',
      category: 'Scrum',
      level: 'Avancé',
      duration: '24h',
      price: '1290€',
      originalPrice: '1500€',
      rating: 4.8,
      students: 287,
      description: 'Certification PSM II en e-learning pour Scrum Masters avancés',
      features: [
        '24h de formation e-learning',
        'Facilitation avancée',
        'Coaching d\'équipe',
        'Transformation agile',
        'Certificat PSM II'
      ],
      instructor: 'Thomas Bernard',
      image: 'https://readdy.ai/api/search-image?query=PSM%20II%20advanced%20scrum%20master%20training%20online%20facilitation%20coaching%20team%20transformation%20agile%20e-learning%20advanced%20course&width=400&height=250&seq=psm2-elearning&orientation=landscape',
      badge: 'PSM II',
      logo: '📙'
    },
    {
      id: 'psm2-interaction',
      title: '📙 PSM II (Professional Scrum Master) - Formation Assistée',
      category: 'Scrum',
      level: 'Avancé',
      duration: '24h',
      price: '1790€',
      originalPrice: '2000€',
      rating: 4.9,
      students: 198,
      description: 'Formation PSM II programmée pour Scrum Masters expérimentés',
      features: [
        '24h de formation présentielle',
        'Coaching avancé d\'équipes',
        'Leadership agile',
        'Résolution de conflits',
        'Certification avancée'
      ],
      instructor: 'Thomas Bernard',
      image: 'https://readdy.ai/api/search-image?query=PSM%20II%20advanced%20classroom%20training%20experienced%20scrum%20master%20coaching%20teams%20agile%20leadership%20conflict%20resolution&width=400&height=250&seq=psm2-interaction&orientation=landscape',
      badge: 'Présentiel',
      logo: '📙'
    },

    // PSM III
    {
      id: 'psm3-elearning',
      title: '📙 PSM III (Professional Scrum Master) - E-learning',
      category: 'Scrum',
      level: 'Expert',
      duration: '32h',
      price: '1890€',
      originalPrice: '2200€',
      rating: 4.9,
      students: 134,
      description: 'Certification PSM III en e-learning pour Scrum Masters experts',
      features: [
        '32h de formation e-learning',
        'Leadership organisationnel',
        'Transformation à grande échelle',
        'Mentorat de Scrum Masters',
        'Certificat PSM III'
      ],
      instructor: 'Thomas Bernard',
      image: 'https://readdy.ai/api/search-image?query=PSM%20III%20expert%20scrum%20master%20training%20online%20organizational%20leadership%20large%20scale%20transformation%20mentoring%20advanced%20e-learning&width=400&height=250&seq=psm3-elearning&orientation=landscape',
      badge: 'PSM III',
      logo: '📙'
    },
    {
      id: 'psm3-interaction',
      title: '📙 PSM III (Professional Scrum Master) - Formation Assistée',
      category: 'Scrum',
      level: 'Expert',
      duration: '32h',
      price: '2490€',
      originalPrice: '2800€',
      rating: 4.9,
      students: 87,
      description: 'Formation PSM III programmée pour Scrum Masters de niveau expert',
      features: [
        '32h de formation présentielle',
        'Masterclass leadership',
        'Transformation organisationnelle',
        'Accompagnement personnalisé',
        'Certification expert'
      ],
      instructor: 'Thomas Bernard',
      image: 'https://readdy.ai/api/search-image?query=PSM%20III%20expert%20classroom%20masterclass%20organizational%20transformation%20personalized%20coaching%20expert%20scrum%20master%20certification&width=400&height=250&seq=psm3-interaction&orientation=landscape',
      badge: 'Présentiel',
      logo: '📙'
    },

    // Lean Six Sigma White Belt (Gratuit)
    {
      id: 'lsswb-free',
      title: '📕 LSSWB (Lean Six Sigma White Belt) - Gratuit',
      category: 'Lean Six Sigma',
      level: 'Débutant',
      duration: '8h',
      price: 'Gratuit',
      originalPrice: '0€',
      rating: 4.5,
      students: 1234,
      description: 'Introduction gratuite au Lean Six Sigma pour découvrir la méthodologie',
      features: [
        '8h de formation gratuite',
        'Introduction au Lean',
        'Concepts Six Sigma',
        'Outils de base',
        'Certificat de participation'
      ],
      instructor: 'Anne-Marie Rousseau',
      image: 'https://readdy.ai/api/search-image?query=Lean%20Six%20Sigma%20White%20Belt%20free%20introduction%20training%20online%20course%20basic%20tools%20methodology%20DMAIC%20process%20improvement&width=400&height=250&seq=lsswb-free&orientation=landscape',
      badge: 'Gratuit',
      logo: '📕'
    },

    // Lean Six Sigma Yellow Belt
    {
      id: 'lssyb-elearning',
      title: '📕 LSSYB (Lean Six Sigma Yellow Belt) - E-learning',
      category: 'Lean Six Sigma',
      level: 'Intermédiaire',
      duration: '20h',
      price: '690€',
      originalPrice: '850€',
      rating: 4.6,
      students: 456,
      description: 'Certification LSSYB en e-learning pour l\'amélioration continue',
      features: [
        '20h de formation e-learning',
        'Méthodologie DMAIC',
        'Outils statistiques',
        'Projet pratique',
        'Certificat Yellow Belt'
      ],
      instructor: 'Anne-Marie Rousseau',
      image: 'https://readdy.ai/api/search-image?query=Lean%20Six%20Sigma%20Yellow%20Belt%20training%20online%20DMAIC%20methodology%20statistical%20tools%20continuous%20improvement%20project%20practical&width=400&height=250&seq=lssyb-elearning&orientation=landscape',
      badge: 'Yellow Belt',
      logo: '📕'
    },
    {
      id: 'lssyb-interaction',
      title: '📕 LSSYB (Lean Six Sigma Yellow Belt) - Formation Assistée',
      category: 'Lean Six Sigma',
      level: 'Intermédiaire',
      duration: '20h',
      price: '990€',
      originalPrice: '1200€',
      rating: 4.7,
      students: 289,
      description: 'Formation LSSYB programmée assistée pour l\'amélioration des processus',
      features: [
        '20h de formation présentielle',
        'Ateliers pratiques DMAIC',
        'Études de cas réels',
        'Accompagnement projet',
        'Certification reconnue'
      ],
      instructor: 'Anne-Marie Rousseau',
      image: 'https://readdy.ai/api/search-image?query=Lean%20Six%20Sigma%20Yellow%20Belt%20classroom%20training%20DMAIC%20workshops%20real%20case%20studies%20project%20coaching%20process%20improvement&width=400&height=250&seq=lssyb-interaction&orientation=landscape',
      badge: 'Présentiel',
      logo: '📕'
    }
  ];

  const filteredFormations = formations.filter(formation => 
    activeCategory === 'Tous' || formation.category === activeCategory
  );

  const instructors = [
    {
      name: 'Dr. Pierre Martinet',
      title: 'Expert PMP Senior',
      experience: '15+ années',
      certifications: ['PMP', 'PMI-ACP', 'PMI-RMP'],
      image: 'https://readdy.ai/api/search-image?query=professional%20instructor%20expert%20consultant%20mature%20man%20suit%20confident%20smile%20teaching%20experience%20corporate%20trainer%20business%20coach&width=150&height=150&seq=instructor1&orientation=squarish',
      rating: 4.9,
      courses: 12
    },
    {
      name: 'Sarah Legrand',
      title: 'Spécialiste CAPM',
      experience: '8+ années',
      certifications: ['CAPM', 'PMI-ACP', 'CSM'],
      image: 'https://readdy.ai/api/search-image?query=professional%20female%20instructor%20CAPM%20specialist%20confident%20smile%20business%20attire%20experienced%20trainer%20modern%20office%20background&width=150&height=150&seq=instructor2&orientation=squarish',
      rating: 4.8,
      courses: 6
    },
    {
      name: 'Marc Dupont',
      title: 'Expert PRINCE2',
      experience: '12+ années',
      certifications: ['PRINCE2 Practitioner', 'MSP', 'MoP'],
      image: 'https://readdy.ai/api/search-image?query=PRINCE2%20expert%20trainer%20mature%20professional%20man%20business%20suit%20confident%20experienced%20mentor%20corporate%20coach%20professional%20background&width=150&height=150&seq=instructor3&orientation=squarish',
      rating: 4.7,
      courses: 8
    },
    {
      name: 'Julie Chen',
      title: 'Scrum Coach Certifiée',
      experience: '10+ années',
      certifications: ['PSPO III', 'PSM III', 'SAFe'],
      image: 'https://readdy.ai/api/search-image?query=professional%20scrum%20coach%20female%20instructor%20agile%20expert%20confident%20smile%20business%20attire%20experienced%20trainer%20modern%20background&width=150&height=150&seq=instructor4&orientation=squarish',
      rating: 4.9,
      courses: 12
    },
    {
      name: 'Thomas Bernard',
      title: 'Scrum Master Expert',
      experience: '11+ années',
      certifications: ['PSM III', 'PSPO II', 'SPS'],
      image: 'https://readdy.ai/api/search-image?query=professional%20scrum%20master%20expert%20male%20instructor%20agile%20coach%20confident%20experienced%20trainer%20business%20professional%20background&width=150&height=150&seq=instructor5&orientation=squarish',
      rating: 4.8,
      courses: 10
    },
    {
      name: 'Anne-Marie Rousseau',
      title: 'Expert Lean Six Sigma',
      experience: '14+ années',
      certifications: ['Black Belt', 'Green Belt', 'Master Black Belt'],
      image: 'https://readdy.ai/api/search-image?query=professional%20lean%20six%20sigma%20expert%20female%20instructor%20quality%20improvement%20specialist%20confident%20experienced%20trainer%20corporate%20background&width=150&height=150&seq=instructor6&orientation=squarish',
      rating: 4.7,
      courses: 7
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* JSON-LD Schema */}
      <JsonLd data={generateWebPageSchema(
        "Formations Certifiantes PMP, PRINCE2, Scrum, Lean Six Sigma",
        "Formations certifiantes reconnues mondialement : PMP, CAPM, PRINCE2, PSPO, PSM, Lean Six Sigma. E-learning et formation assistée. Taux de réussite 97%.",
        "/formations"
      )} />
      <JsonLd data={generateBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: "Formations", url: "/formations" }
      ])} />
      <JsonLd data={generateCourseSchema(
        "Formation PMP (Project Management Professional)",
        "Certification PMP reconnue internationalement avec support complet et garantie de réussite",
        "1890",
        "35h"
      )} />

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
            <button className="text-orange-500 font-medium cursor-pointer">Formations</button>
            <button onClick={() => navigate('/project-generator')} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors">Auto-génération de projets</button>
            <button onClick={() => navigate('/expertise')} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors">Notre expertise</button>
            <button onClick={() => navigate('/contact')} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer transition-colors">Contact</button>
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
              <button className="text-orange-500 font-medium cursor-pointer text-left">Formations</button>
              <button onClick={() => navigate('/project-generator')} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer text-left transition-colors">Auto-génération de projets</button>
              <button onClick={() => navigate('/expertise')} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer text-left transition-colors">Notre expertise</button>
              <button onClick={() => navigate('/contact')} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 cursor-pointer text-left transition-colors">Contact</button>
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
          <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm mb-6">
            Formations Certifiantes Reconnues Mondialement
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 transition-colors">
            Développez vos compétences
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed transition-colors">
            Avec nos formations certifiantes reconnues mondialement en gestion de projet, méthodes agiles et amélioration continue
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => navigate('/dashboard')}
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 cursor-pointer whitespace-nowrap flex items-center justify-center transition-colors"
            >
              <i className="ri-play-fill mr-2"></i>
              Commencer maintenant
            </button>
            <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer whitespace-nowrap transition-colors">
              Voir le catalogue complet
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">20+</div>
              <div className="text-gray-600 dark:text-gray-400 transition-colors">Formations certifiantes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">3500+</div>
              <div className="text-gray-600 dark:text-gray-400 transition-colors">Professionnels formés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">4.8/5</div>
              <div className="text-gray-600 dark:text-gray-400 transition-colors">Note moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">97%</div>
              <div className="text-gray-600 dark:text-gray-400 transition-colors">Taux de certification</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium cursor-pointer whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Formations Grid */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFormations.map((formation) => (
              <div key={formation.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-lg dark:hover:shadow-2xl transition-all">
                <div className="relative">
                  <img 
                    src={formation.image} 
                    alt={formation.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  {formation.badge && (
                    <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                      formation.badge === 'Certifiant' ? 'bg-orange-500 text-white' :
                      formation.badge === 'Présentiel' ? 'bg-blue-500 text-white' :
                      formation.badge === 'Gratuit' ? 'bg-green-500 text-white' :
                      formation.badge === 'Foundation' ? 'bg-green-600 text-white' :
                      formation.badge === 'Practitioner' ? 'bg-green-700 text-white' :
                      formation.badge.includes('PSPO') ? 'bg-yellow-600 text-white' :
                      formation.badge.includes('PSM') ? 'bg-yellow-700 text-white' :
                      formation.badge.includes('Belt') ? 'bg-red-600 text-white' :
                      'bg-purple-500 text-white'
                    }`}>
                      {formation.badge}
                    </span>
                  )}
                  <div className="absolute top-4 right-4 text-2xl">
                    {formation.logo}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 px-2 py-1 rounded-full">
                      {formation.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 transition-colors">{formation.level}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 transition-colors line-clamp-2">{formation.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 transition-colors">{formation.description}</p>

                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={`ri-star-fill text-yellow-500 text-sm ${i < Math.floor(formation.rating) ? '' : 'text-gray-300'}`}></i>
                      ))}
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-2 transition-colors">
                        {formation.rating} ({formation.students} étudiants)
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-1 mb-6">
                    {formation.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700 dark:text-gray-300 text-sm transition-colors">
                        <i className="ri-check-line text-green-500 mr-2 text-base"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-orange-500">{formation.price}</span>
                      {formation.originalPrice !== '0€' && (
                        <span className="text-sm text-gray-500 dark:text-gray-400 line-through ml-2 transition-colors">{formation.originalPrice}</span>
                      )}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors">
                      <i className="ri-time-line mr-1"></i>
                      {formation.duration}
                    </div>
                  </div>

                  <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 cursor-pointer whitespace-nowrap transition-colors">
                    <i className="ri-graduation-cap-line mr-2"></i>
                    {formation.price === 'Gratuit' ? 'Accès gratuit' : 'S\'inscrire maintenant'}
                  </button>

                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 transition-colors">
                    <span>Instructeur: {formation.instructor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 transition-colors">Nos Experts Formateurs</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors">
              Apprenez auprès des meilleurs experts certifiés du secteur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-8 text-center transition-colors">
                <img 
                  src={instructor.image} 
                  alt={instructor.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 transition-colors">{instructor.name}</h3>
                <p className="text-orange-500 font-semibold mb-2">{instructor.title}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors">{instructor.experience} d'expérience</p>
                
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {instructor.certifications.map((cert, certIndex) => (
                    <span key={certIndex} className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-600 px-2 py-1 rounded">
                      {cert}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400 transition-colors">
                  <span>⭐ {instructor.rating}</span>
                  <span>{instructor.courses} formations</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 transition-colors">Pourquoi choisir nos formations ?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-medal-line text-2xl text-orange-500"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 transition-colors">Certifications Reconnues</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors">Obtenez des certifications reconnues internationalement</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-user-line text-2xl text-orange-500"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 transition-colors">Support Personnalisé</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors">Accompagnement individuel tout au long de votre parcours</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-2xl text-orange-500"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 transition-colors">Formation Flexible</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors">E-learning ou formation assistée selon vos préférences</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-check-line text-2xl text-orange-500"></i>
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 transition-colors">Taux de Réussite Élevé</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors">97% de taux de réussite aux certifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-orange-500 dark:bg-orange-600 transition-colors">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à obtenir votre certification ?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Rejoignez plus de 3500 professionnels qui ont transformé leur carrière avec nos formations certifiantes
          </p>
          <button 
            onClick={() => navigate('/dashboard')}
            className="bg-white text-orange-500 px-8 py-3 rounded-lg hover:bg-orange-50 cursor-pointer whitespace-nowrap font-semibold transition-colors"
          >
            <i className="ri-graduation-cap-line mr-2"></i>
            Commencer ma formation
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
                Votre partenaire pour la maîtrise de la gestion de projet et les certifications professionnelles.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Formations</h4>
              <ul className="space-y-2 text-gray-300 dark:text-gray-400 transition-colors">
                <li><button className="hover:text-orange-400 cursor-pointer text-left">PMP & CAPM</button></li>
                <li><button className="hover:text-orange-400 cursor-pointer text-left">PRINCE2</button></li>
                <li><button className="hover:text-orange-400 cursor-pointer text-left">Scrum (PSPO & PSM)</button></li>
                <li><button className="hover:text-orange-400 cursor-pointer text-left">Lean Six Sigma</button></li>
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
    </div>
  );
}
