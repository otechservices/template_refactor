import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    const siteUrl = 'https://example.com'; // Placeholder for environment variable

    this.seoService.update({
      title: "Plateforme CAPE et GARDERIES - Ministère des Affaires Sociales - Bénin",
      description: "Plateforme officielle de gestion des Centres d'Accueil et de Protection de l'Enfant (CAPE) et des garderies au Bénin. Inscriptions, agréments et services de protection de l'enfance.",
      keywords: "CAPE, garderies, protection enfant, Bénin, Ministère Affaires Sociales, inscription, agrément, enfance, microfinance",
      ogTitle: "Plateforme CAPE et GARDERIES - Protection de l'Enfant au Bénin",
      ogDescription: "Services officiels d'inscription et d'agrément pour les structures de protection de l'enfant au Bénin",
      ogImage: `${siteUrl}/og-image-home.jpg`
      // Structured data is handled differently in Angular and is omitted for now.
    });
  }
}
