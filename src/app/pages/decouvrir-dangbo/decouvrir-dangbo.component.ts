import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-decouvrir-dangbo',
  templateUrl: './decouvrir-dangbo.component.html',
})
export class DecouvrirDangboComponent implements OnInit {

  attractions = [
    {
      id: 1,
      name: "Lac Nokoué",
      description: "Magnifique lac offrant des paysages exceptionnels et des activités de pêche traditionnelle.",
      image: "https://readdy.ai/api/search-image?query=beautiful%20lake%20nokue%20dangbo%20benin%20traditional%20fishing%20boats%20african%20landscape%20sunset%20reflection%20peaceful%20water%20scenery%20clean%20natural%20background&width=400&height=300&seq=lake1&orientation=landscape",
      type: "Nature"
    },
    {
      id: 2,
      name: "Village sur pilotis de Ganvié",
      description: "Village traditionnel construit sur l'eau, patrimoine culturel unique de la région.",
      image: "https://readdy.ai/api/search-image?query=ganvie%20stilt%20village%20traditional%20houses%20on%20water%20dangbo%20benin%20african%20heritage%20wooden%20structures%20boats%20cultural%20site%20clean%20background&width=400&height=300&seq=village1&orientation=landscape",
      type: "Culture"
    },
    {
      id: 3,
      name: "Marché de Dangbo",
      description: "Marché traditionnel coloré où se mélangent produits locaux et artisanat authentique.",
      image: "https://readdy.ai/api/search-image?query=traditional%20african%20market%20dangbo%20benin%20colorful%20fruits%20vegetables%20local%20vendors%20authentic%20cultural%20commerce%20busy%20marketplace%20clean%20background&width=400&height=300&seq=market2&orientation=landscape",
      type: "Commerce"
    },
    {
      id: 4,
      name: "Temple Vodoun",
      description: "Site spirituel traditionnel témoignant de la richesse culturelle et religieuse locale.",
      image: "https://readdy.ai/api/search-image?query=traditional%20vodoun%20temple%20dangbo%20benin%20african%20spiritual%20site%20cultural%20heritage%20religious%20architecture%20sacred%20place%20clean%20background&width=400&height=300&seq=temple1&orientation=landscape",
      type: "Culture"
    }
  ];

  histoire = [
    {
      periode: "Période précoloniale",
      description: "Dangbo était un important centre de commerce entre les royaumes du Dahomey et les populations lacustres."
    },
    {
      periode: "Époque coloniale",
      description: "La région devient un carrefour commercial stratégique sous l'administration coloniale française."
    },
    {
      periode: "Indépendance",
      description: "Dangbo se développe comme commune moderne tout en préservant ses traditions ancestrales."
    },
    {
      periode: "Aujourd'hui",
      description: "Centre administratif dynamique alliant modernité et respect des coutumes traditionnelles."
    }
  ];

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateSEO({
      title: 'Découvrir Dangbo - Histoire, Culture et Tourisme au Bénin',
      description: 'Découvrez la commune de Dangbo au Bénin : son histoire, sa culture, ses attractions touristiques, sa géographie et ses traditions. Guide complet de la région.',
      keywords: 'Dangbo Bénin, tourisme Dangbo, culture béninoise, histoire Dangbo, attractions touristiques, traditions locales',
      ogTitle: 'Découvrir Dangbo - Histoire et Culture',
      ogDescription: 'Découvrez l\'histoire, la culture et les attractions de la commune de Dangbo au Bénin.',
      ogImage: 'https://mairiedangbo.exploitsweb.com/assets/logo.png',
      canonicalUrl: 'https://mairiedangbo.com/decouvrir-dangbo' // Replace with actual domain
    });

    this.seoService.addJSONLD({
      "@context": "https://schema.org",
      "@type": "TouristDestination",
      "name": "Dangbo",
      "description": "Commune de Dangbo au Bénin, riche en histoire et culture",
      "url": 'https://mairiedangbo.com/decouvrir-dangbo', // Replace with actual domain
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dangbo",
        "addressCountry": "BJ"
      },
      "touristType": [
        "Culture",
        "Histoire",
        "Traditions"
      ]
    });
  }

  getAttractionTypeColor(type: string): string {
    switch (type) {
      case 'Nature': return 'bg-green-100 text-green-600';
      case 'Culture': return 'bg-purple-100 text-purple-600';
      default: return 'bg-blue-100 text-blue-600';
    }
  }
}
