import { Injectable, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService implements OnDestroy {
  private scriptElements: HTMLScriptElement[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  setJsonLd(data: object): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(data);
    document.head.appendChild(script);
    this.scriptElements.push(script);
  }

  generateOrganizationSchema(): object {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SICA CONSEIL",
      "url": "https://www.sica-conseil.com/", // Replace with actual URL
      "logo": "https://static.readdy.ai/image/2ce43ce334b232046883f79f4f3df46a/b61b027bf4d42918b4ae2ae5a241e2c2.jfif",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+33-X-XX-XX-XX-XX", // Replace with actual phone
        "contactType": "customer service"
      }
    };
  }

  generateWebPageSchema(name: string, description: string, url: string): object {
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": name,
      "description": description,
      "url": `https://www.sica-conseil.com${url}` // Replace with actual base URL
    };
  }

  generateBreadcrumbSchema(items: { name: string, url: string }[]): object {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `https://www.sica-conseil.com${item.url}`
      }))
    };
  }

  generateCourseSchema(courseName: string, description: string, price: string, duration: string): object {
    return {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": courseName,
      "description": description,
      "provider": {
        "@type": "Organization",
        "name": "SICA CONSEIL"
      },
      "offers": {
        "@type": "Offer",
        "price": price,
        "priceCurrency": "EUR"
      },
      "timeRequired": duration
    };
  }

  generateServiceSchema(name: string, description: string, price: string): object {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": name,
      "description": description,
      "provider": {
        "@type": "Organization",
        "name": "SICA CONSEIL"
      },
      "offers": {
        "@type": "Offer",
        "price": price,
        "priceCurrency": "EUR"
      }
    };
  }

  ngOnDestroy(): void {
    this.clearJsonLd();
  }

  clearJsonLd(): void {
    this.scriptElements.forEach(el => el.remove());
    this.scriptElements = [];
  }
}
