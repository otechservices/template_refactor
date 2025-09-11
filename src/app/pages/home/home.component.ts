import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateSEO({
      title: 'Mairie de Dangbo - Commune dynamique au service des citoyens',
      description: 'Site officiel de la Mairie de Dangbo au Bénin. Découvrez nos services municipaux, actualités, projets de développement et démarches administratives en ligne.',
      keywords: 'Mairie Dangbo, Commune Dangbo, Bénin, services municipaux, actualités, projets, état civil, urbanisme',
      ogTitle: 'Mairie de Dangbo - Commune dynamique au service des citoyens',
      ogDescription: 'Site officiel de la Mairie de Dangbo au Bénin. Services municipaux, actualités et projets de développement.',
      ogImage: 'https://mairiedangbo.exploitsweb.com/assets/logo.png',
      canonicalUrl: 'https://mairiedangbo.com/' // Replace with actual domain
    });

    this.seoService.addJSONLD({
      "@context": "https://schema.org",
      "@type": "GovernmentOrganization",
      "name": "Mairie de Dangbo",
      "alternateName": "Commune de Dangbo",
      "url": 'https://mairiedangbo.com/', // Replace with actual domain
      "logo": "https://mairiedangbo.exploitsweb.com/assets/logo.png",
      "description": "Mairie de la commune de Dangbo au Bénin, offrant des services municipaux et administratifs aux citoyens.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dangbo",
        "addressCountry": "BJ",
        "postalCode": "BP 123"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+229-XX-XX-XX-XX",
        "contactType": "customer service",
        "availableLanguage": "French"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Dangbo"
      },
      "sameAs": [
        "https://www.facebook.com/share/1BMgRbVMaw/"
      ]
    });
  }

}
