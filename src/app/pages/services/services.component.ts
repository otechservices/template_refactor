import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

interface Service {
  id: number;
  nom: string;
  category: string;
  description: string;
  duree: string;
  cout: string;
  pieces: string[];
  icon: string;
  horaires: string;
}

interface Demarche {
  service: string;
  description: string;
  icon: string;
  lien: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
})
export class ServicesComponent implements OnInit {
  selectedCategory = 'Tous';

  categories = ['Tous', 'État Civil', 'Urbanisme', 'Fiscalité', 'Social', 'Technique'];

  services: Service[] = [
    {
      id: 1,
      nom: "Acte de Naissance",
      category: "État Civil",
      description: "Délivrance d'actes de naissance pour tous les citoyens nés à Dangbo",
      duree: "Immédiat",
      cout: "Gratuit",
      pieces: ["Demande manuscrite", "Pièce d'identité du demandeur"],
      icon: "ri-file-text-line",
      horaires: "Lundi - Vendredi: 7h30 - 17h00"
    },
    {
      id: 2,
      nom: "Certificat de Mariage",
      category: "État Civil",
      description: "Délivrance de certificats de mariage et organisation des cérémonies",
      duree: "24h - 48h",
      cout: "5,000 FCFA",
      pieces: ["Dossier de mariage complet", "Photos d'identité", "Certificats médicaux"],
      icon: "ri-heart-line",
      horaires: "Lundi - Vendredi: 7h30 - 17h00"
    },
    {
      id: 3,
      nom: "Permis de Construire",
      category: "Urbanisme",
      description: "Autorisation pour la construction de bâtiments selon les normes urbaines",
      duree: "30 jours",
      cout: "Variable selon la surface",
      pieces: ["Plans architecturaux", "Étude de sol", "Titre de propriété"],
      icon: "ri-building-line",
      horaires: "Lundi - Vendredi: 8h00 - 16h00"
    },
    {
      id: 4,
      nom: "Certificat de Résidence",
      category: "État Civil",
      description: "Attestation de domicile pour les résidents de la commune",
      duree: "Immédiat",
      cout: "1,000 FCFA",
      pieces: ["Demande manuscrite", "Témoins", "Pièce d'identité"],
      icon: "ri-home-line",
      horaires: "Lundi - Vendredi: 7h30 - 17h00"
    },
    {
      id: 5,
      nom: "Taxe d'Habitation",
      category: "Fiscalité",
      description: "Paiement des taxes locales pour les propriétaires et locataires",
      duree: "Immédiat",
      cout: "Variable selon la propriété",
      pieces: ["Titre de propriété ou bail", "Pièce d'identité"],
      icon: "ri-money-euro-circle-line",
      horaires: "Lundi - Vendredi: 7h30 - 17h00"
    },
    {
      id: 6,
      nom: "Aide Sociale",
      category: "Social",
      description: "Assistance aux personnes vulnérables et familles en difficulté",
      duree: "Selon évaluation",
      cout: "Gratuit",
      pieces: ["Dossier social", "Justificatifs de revenus", "Certificats médicaux"],
      icon: "ri-hand-heart-line",
      horaires: "Lundi - Vendredi: 8h00 - 16h00"
    },
    {
      id: 7,
      nom: "Raccordement Eau",
      category: "Technique",
      description: "Demande de raccordement au réseau d'eau potable communal",
      duree: "15 jours",
      cout: "25,000 FCFA",
      pieces: ["Demande officielle", "Plan de situation", "Caution"],
      icon: "ri-drop-line",
      horaires: "Lundi - Vendredi: 8h00 - 16h00"
    },
    {
      id: 8,
      nom: "Autorisation de Manifestation",
      category: "Social",
      description: "Autorisation pour l'organisation d'événements publics et manifestations",
      duree: "7 jours",
      cout: "Variable selon l'événement",
      pieces: ["Dossier complet", "Plan sécuritaire", "Assurance"],
      icon: "ri-calendar-event-line",
      horaires: "Lundi - Vendredi: 8h00 - 16h00"
    },
    {
      id: 9,
      nom: "Légalisation de Signature",
      category: "État Civil",
      description: "Légalisation de signatures pour documents officiels",
      duree: "Immédiat",
      cout: "500 FCFA",
      pieces: ["Document à légaliser", "Pièce d'identité"],
      icon: "ri-quill-pen-line",
      horaires: "Lundi - Vendredi: 7h30 - 17h00"
    }
  ];

  demarchesEnLigne: Demarche[] = [
    {
      service: "Pré-demande d'actes",
      description: "Faites votre demande en ligne avant de vous déplacer",
      icon: "ri-file-download-line",
      lien: "#"
    },
    {
      service: "Prise de rendez-vous",
      description: "Planifiez votre visite pour éviter l'attente",
      icon: "ri-calendar-check-line",
      lien: "#"
    },
    {
      service: "Suivi de dossier",
      description: "Consultez l'avancement de vos demandes",
      icon: "ri-search-eye-line",
      lien: "#"
    },
    {
      service: "Paiement en ligne",
      description: "Réglez vos taxes et frais depuis chez vous",
      icon: "ri-secure-payment-line",
      lien: "#"
    }
  ];

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateSEO({
      title: 'Services Municipaux - Mairie de Dangbo | Démarches administratives',
      description: 'Découvrez tous les services municipaux de Dangbo : état civil, urbanisme, taxes locales, santé, éducation. Démarches administratives et services en ligne.',
      keywords: 'services municipaux Dangbo, état civil, urbanisme, taxes locales, démarches administratives, certificats, permis',
      ogTitle: 'Services Municipaux - Mairie de Dangbo',
      ogDescription: 'Services administratifs et démarches municipales de la commune de Dangbo.',
      ogImage: 'https://mairiedangbo.exploitsweb.com/assets/logo.png',
      canonicalUrl: 'https://mairiedangbo.com/services' // Replace with actual domain
    });

    this.seoService.addJSONLD({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Services Municipaux de Dangbo",
      "description": "Services administratifs et démarches municipales offerts par la Mairie de Dangbo",
      "provider": {
        "@type": "GovernmentOrganization",
        "name": "Mairie de Dangbo",
        "url": 'https://mairiedangbo.com' // Replace with actual domain
      },
      "areaServed": {
        "@type": "Place",
        "name": "Dangbo"
      },
      "serviceType": [
        "État Civil",
        "Urbanisme et Habitat",
        "Taxes et Impôts Locaux",
        "Santé et Hygiène",
        "Éducation et Culture"
      ]
    });
  }

  get filteredServices(): Service[] {
    return this.selectedCategory === 'Tous'
      ? this.services
      : this.services.filter(service => service.category === this.selectedCategory);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  getCategoryClass(category: string): any {
    return {
      'bg-blue-100': category === 'État Civil',
      'text-blue-600': category === 'État Civil',
      'bg-green-100': category === 'Urbanisme',
      'text-green-600': category === 'Urbanisme',
      'bg-orange-100': category === 'Fiscalité',
      'text-orange-600': category === 'Fiscalité',
      'bg-purple-100': category === 'Social',
      'text-purple-600': category === 'Social',
      'bg-gray-100': category === 'Technique',
      'text-gray-600': category === 'Technique'
    };
  }
}
