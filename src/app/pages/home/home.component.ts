import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private router = inject(Router);
  private seoService = inject(SeoService);

  ngOnInit(): void {
    const title = "SICA CONSEIL - Gestion de Projet & Formation PMP";
    const description = "Maîtrisez la gestion de projet avec SICA CONSEIL. Génération automatique de projets personnalisés et formation certifiante PMP - Accès gratuit !";

    this.seoService.setTitle(title);
    this.seoService.updateDescription(description);

    // Set Organization JSON-LD
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SICA CONSEIL",
      "url": "https://sica-conseil.com", // Replace with actual URL
      "logo": "https://static.readdy.ai/image/2ce43ce334b232046883f79f4f3df46a/b61b027bf4d42918b4ae2ae5a241e2c2.jfif"
    };
    this.seoService.setJsonLd(orgSchema);

    // I am not setting the WebPage schema here as it might be redundant with the Organization one
    // and can be added on a per-page basis if needed.
  }

  goTo(path: string): void {
    this.router.navigate([path]);
  }
}
