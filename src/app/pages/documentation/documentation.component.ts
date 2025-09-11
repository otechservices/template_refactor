import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

interface Document {
  id: number;
  titre: string;
  category: string;
  description: string;
  taille: string;
  format: string;
  dateAjout: string;
  telechargements: number;
  icon: string;
}

interface ServiceNumerique {
  nom: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
})
export class DocumentationComponent implements OnInit {
  selectedCategory = 'Tous';

  categories = ['Tous', 'Formulaires', 'Règlements', 'Délibérations', 'Guides', 'Rapports'];

  documents: Document[] = [
    {
      id: 1,
      titre: "Formulaire de demande d'acte de naissance",
      category: "Formulaires",
      description: "Formulaire officiel pour la demande d'acte de naissance",
      taille: "245 KB",
      format: "PDF",
      dateAjout: "15 janvier 2025",
      telechargements: 1247,
      icon: "ri-file-text-line"
    },
    {
      id: 2,
      titre: "Règlement d'urbanisme communal",
      category: "Règlements",
      description: "Règles et normes d'urbanisme applicables sur le territoire communal",
      taille: "2.1 MB",
      format: "PDF",
      dateAjout: "10 janvier 2025",
      telechargements: 892,
      icon: "ri-building-line"
    },
    {
      id: 3,
      titre: "Délibérations du conseil municipal - Décembre 2024",
      category: "Délibérations",
      description: "Compte-rendu des décisions prises lors de la session de décembre",
      taille: "1.8 MB",
      format: "PDF",
      dateAjout: "8 janvier 2025",
      telechargements: 456,
      icon: "ri-government-line"
    },
    {
      id: 4,
      titre: "Guide des démarches administratives",
      category: "Guides",
      description: "Guide complet pour faciliter vos démarches à la mairie",
      taille: "3.2 MB",
      format: "PDF",
      dateAjout: "5 janvier 2025",
      telechargements: 2134,
      icon: "ri-guide-line"
    },
    {
      id: 5,
      titre: "Formulaire de demande de permis de construire",
      category: "Formulaires",
      description: "Dossier complet pour les demandes de permis de construire",
      taille: "890 KB",
      format: "PDF",
      dateAjout: "3 janvier 2025",
      telechargements: 678,
      icon: "ri-home-gear-line"
    },
    {
      id: 6,
      titre: "Rapport d'activités 2024",
      category: "Rapports",
      description: "Bilan des activités et réalisations de la commune en 2024",
      taille: "4.5 MB",
      format: "PDF",
      dateAjout: "2 janvier 2025",
      telechargements: 1532,
      icon: "ri-file-chart-line"
    },
    {
      id: 7,
      titre: "Règlement intérieur du conseil municipal",
      category: "Règlements",
      description: "Règles de fonctionnement du conseil municipal de Dangbo",
      taille: "1.2 MB",
      format: "PDF",
      dateAjout: "28 décembre 2024",
      telechargements: 234,
      icon: "ri-scales-line"
    },
    {
      id: 8,
      titre: "Guide du citoyen - Droits et devoirs",
      category: "Guides",
      description: "Information sur les droits et devoirs des citoyens de Dangbo",
      taille: "2.8 MB",
      format: "PDF",
      dateAjout: "25 décembre 2024",
      telechargements: 987,
      icon: "ri-user-star-line"
    },
    {
      id: 9,
      titre: "Formulaire d'aide sociale",
      category: "Formulaires",
      description: "Demande d'assistance sociale pour les familles en difficulté",
      taille: "320 KB",
      format: "PDF",
      dateAjout: "20 décembre 2024",
      telechargements: 445,
      icon: "ri-hand-heart-line"
    },
    {
      id: 10,
      titre: "Rapport financier trimestriel Q4 2024",
      category: "Rapports",
      description: "État des finances communales pour le quatrième trimestre",
      taille: "1.9 MB",
      format: "PDF",
      dateAjout: "18 décembre 2024",
      telechargements: 356,
      icon: "ri-money-euro-circle-line"
    },
    {
      id: 11,
      titre: "Délibérations extraordinaires - Novembre 2024",
      category: "Délibérations",
      description: "Décisions prises lors de la session extraordinaire de novembre",
      taille: "1.1 MB",
      format: "PDF",
      dateAjout: "15 décembre 2024",
      telechargements: 278,
      icon: "ri-file-edit-line"
    },
    {
      id: 12,
      titre: "Guide des marchés publics",
      category: "Guides",
      description: "Procédures et modalités des marchés publics communaux",
      taille: "2.5 MB",
      format: "PDF",
      dateAjout: "12 décembre 2024",
      telechargements: 167,
      icon: "ri-auction-line"
    }
  ];

  servicesNumeriques: ServiceNumerique[] = [
    {
      nom: "Signature électronique",
      description: "Signez vos documents officiellement en ligne",
      icon: "ri-pen-nib-line"
    },
    {
      nom: "Archivage numérique",
      description: "Accédez à vos documents personnels en ligne",
      icon: "ri-archive-line"
    },
    {
      nom: "Notifications automatiques",
      description: "Recevez les mises à jour de vos dossiers",
      icon: "ri-notification-line"
    },
    {
      nom: "Assistance en ligne",
      description: "Chat en direct avec nos agents",
      icon: "ri-customer-service-2-line"
    }
  ];

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateSEO({
      title: 'Documentation - Mairie de Dangbo | Formulaires et Règlements',
      description: 'Centre de ressources documentaires de la Mairie de Dangbo : formulaires administratifs, règlements municipaux, délibérations et guides pratiques.',
      keywords: 'documentation Dangbo, formulaires administratifs, règlements municipaux, délibérations, guides pratiques, ressources',
      ogTitle: 'Documentation - Mairie de Dangbo',
      ogDescription: 'Centre de ressources et documentation de la Mairie de Dangbo.',
      ogImage: 'https://mairiedangbo.exploitsweb.com/assets/logo.png',
      canonicalUrl: 'https://mairiedangbo.com/documentation' // Replace with actual domain
    });

    this.seoService.addJSONLD({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Documentation - Mairie de Dangbo",
      "description": "Centre de ressources documentaires de la Mairie de Dangbo",
      "url": 'https://mairiedangbo.com/documentation', // Replace with actual domain
      "mainEntity": {
        "@type": "ItemList",
        "name": "Documents administratifs",
        "description": "Collection de documents et formulaires administratifs"
      },
      "publisher": {
        "@type": "GovernmentOrganization",
        "name": "Mairie de Dangbo"
      }
    });
  }

  get filteredDocuments(): Document[] {
    return this.selectedCategory === 'Tous'
      ? this.documents
      : this.documents.filter(doc => doc.category === this.selectedCategory);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  getCategoryClass(category: string): any {
    return {
      'bg-blue-100': category === 'Formulaires', 'text-blue-600': category === 'Formulaires',
      'bg-red-100': category === 'Règlements', 'text-red-600': category === 'Règlements',
      'bg-purple-100': category === 'Délibérations', 'text-purple-600': category === 'Délibérations',
      'bg-green-100': category === 'Guides', 'text-green-600': category === 'Guides',
      'bg-orange-100': category === 'Rapports', 'text-orange-600': category === 'Rapports'
    };
  }
}
