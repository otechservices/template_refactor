import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
})
export class ActualitesComponent implements OnInit {
  selectedCategory = 'Toutes';
  selectedArticle: Article | null = null;

  categories = ['Toutes', 'Conseil Municipal', 'Projets', 'Événements', 'Avis Publics'];

  actualites: Article[] = [
    {
      id: 1,
      title: "Lancement du projet d'adduction d'eau potable",
      excerpt: "La commune de Dangbo lance un grand projet d'adduction d'eau potable pour améliorer l'accès à l'eau dans tous les quartiers.",
      content: "Contenu détaillé de l'article...",
      date: "15 Janvier 2025",
      category: "Projets",
      image: "https://readdy.ai/api/search-image?query=water%20supply%20project%20construction%20workers%20installing%20pipes%20in%20african%20village%20dangbo%20benin%20modern%20infrastructure%20development%20clean%20simple%20background&width=400&height=300&seq=water1&orientation=landscape",
      author: "Service Communication",
      readTime: "5 min",
      tags: ["eau", "infrastructure", "développement", "santé"],
      gallery: [
        "https://readdy.ai/api/search-image?query=water%20supply%20project%20construction%20workers%20installing%20pipes%20in%20african%20village%20dangbo%20benin%20modern%20infrastructure%20development%20clean%20simple%20background&width=600&height=400&seq=water1&orientation=landscape",
        "https://readdy.ai/api/search-image?query=clean%20water%20distribution%20african%20community%20dangbo%20benin%20water%20access%20project%20clean%20background&width=600&height=400&seq=water2&orientation=landscape",
        "https://readdy.ai/api/search-image?query=water%20treatment%20facility%20african%20village%20dangbo%20benin%20modern%20infrastructure%20clean%20background&width=600&height=400&seq=water3&orientation=landscape"
      ],
      featured: true
    },
    {
      id: 2,
      title: "Conseil Municipal du 20 Janvier 2025",
      excerpt: "Ordre du jour du prochain conseil municipal : budget 2025, projets d'infrastructure et aménagement urbain.",
      content: "Contenu détaillé de l'article...",
      date: "10 Janvier 2025",
      category: "Conseil Municipal",
      image: "https://readdy.ai/api/search-image?query=municipal%20council%20meeting%20African%20officials%20discussing%20documents%20in%20modern%20meeting%20room%20dangbo%20benin%20government%20building%20clean%20professional%20background&width=400&height=300&seq=council1&orientation=landscape",
      author: "Secrétariat Municipal",
      readTime: "3 min",
      tags: ["conseil", "budget", "gouvernance", "démocratie"]
    },
    {
      id: 3,
      title: "Festival culturel de Dangbo 2025",
      excerpt: "Venez découvrir la richesse culturelle de Dangbo lors du festival annuel qui se déroulera du 5 au 7 février 2025.",
      content: "Contenu détaillé de l'article...",
      date: "8 Janvier 2025",
      category: "Événements",
      image: "https://readdy.ai/api/search-image?query=african%20cultural%20festival%20traditional%20dancers%20colorful%20costumes%20dangbo%20benin%20celebration%20community%20gathering%20vibrant%20clean%20background&width=400&height=300&seq=festival1&orientation=landscape",
      author: "Service Culturel",
      readTime: "4 min",
      tags: ["culture", "festival", "tradition", "communauté"]
    },
    {
      id: 4,
      title: "Appel d'offres pour la construction du marché central",
      excerpt: "La mairie lance un appel d'offres pour la construction d'un nouveau marché central moderne.",
      content: "Contenu détaillé de l'article...",
      date: "5 Janvier 2025",
      category: "Avis Publics",
      image: "https://readdy.ai/api/search-image?query=modern%20african%20market%20construction%20site%20architectural%20plans%20dangbo%20benin%20commercial%20building%20development%20clean%20professional%20background&width=400&height=300&seq=market1&orientation=landscape",
      author: "Service Technique",
      readTime: "6 min",
      tags: ["marché", "construction", "économie", "commerce"]
    },
    {
      id: 5,
      title: "Programme de vaccination contre la COVID-19",
      excerpt: "Campagne de vaccination gratuite dans tous les centres de santé de la commune.",
      content: "Contenu détaillé de l'article...",
      date: "3 Janvier 2025",
      category: "Avis Publics",
      image: "https://readdy.ai/api/search-image?query=vaccination%20campaign%20African%20healthcare%20workers%20medical%20tent%20dangbo%20benin%20community%20health%20program%20clean%20modern%20background&width=400&height=300&seq=vaccine1&orientation=landscape",
      author: "Service Santé",
      readTime: "4 min",
      tags: ["santé", "vaccination", "prévention", "covid"]
    },
    {
      id: 6,
      title: "Réhabilitation des routes communales",
      excerpt: "Début des travaux de réhabilitation des principales routes de la commune pour améliorer la mobilité.",
      content: "Contenu détaillé de l'article...",
      date: "28 Décembre 2024",
      category: "Projets",
      image: "https://readdy.ai/api/search-image?query=road%20rehabilitation%20construction%20workers%20paving%20asphalt%20dangbo%20benin%20infrastructure%20development%20modern%20equipment%20clean%20background&width=400&height=300&seq=road1&orientation=landscape",
      author: "Service Technique",
      readTime: "5 min",
      tags: ["routes", "infrastructure", "transport", "développement"]
    }
  ];

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateSEO({
      title: 'Actualités - Mairie de Dangbo | Informations et événements',
      description: 'Découvrez les dernières actualités de la commune de Dangbo : conseil municipal, projets, événements et avis publics. Restez informé des développements locaux.',
      keywords: 'actualités Dangbo, conseil municipal, projets commune, événements Dangbo, avis publics, informations locales',
      ogTitle: 'Actualités - Mairie de Dangbo',
      ogDescription: 'Dernières actualités et événements de la commune de Dangbo au Bénin.',
      ogImage: 'https://mairiedangbo.exploitsweb.com/assets/logo.png',
      canonicalUrl: 'https://mairiedangbo.com/actualites' // Replace with actual domain
    });

    this.seoService.addJSONLD({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Actualités - Mairie de Dangbo",
      "description": "Page des actualités et événements de la commune de Dangbo",
      "url": 'https://mairiedangbo.com/actualites', // Replace with actual domain
      "mainEntity": {
        "@type": "ItemList",
        "name": "Articles d'actualités",
        "description": "Liste des actualités de la commune de Dangbo"
      },
      "publisher": {
        "@type": "GovernmentOrganization",
        "name": "Mairie de Dangbo",
        "logo": "https://mairiedangbo.exploitsweb.com/assets/logo.png"
      }
    });
  }

  get filteredActualites(): Article[] {
    return this.selectedCategory === 'Toutes'
      ? this.actualites
      : this.actualites.filter(article => article.category === this.selectedCategory);
  }

  get featuredArticle(): Article | undefined {
    return this.actualites.find(article => article.featured);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  selectArticle(article: Article): void {
    this.selectedArticle = article;
    window.scrollTo(0, 0);
  }

  unselectArticle(): void {
    this.selectedArticle = null;
  }

  getCategoryColor(category: string): string {
    switch (category) {
      case 'Conseil Municipal': return 'bg-green-100 text-green-600';
      case 'Projets': return 'bg-blue-100 text-blue-600';
      case 'Événements': return 'bg-purple-100 text-purple-600';
      default: return 'bg-orange-100 text-orange-600';
    }
  }
}
