
import { useEffect } from 'react';

interface JsonLdProps {
  data: any;
}

export function JsonLd({ data }: JsonLdProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [data]);

  return null;
}

// Schema.org data generators
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SICA CONSEIL",
  "description": "Expert en gestion de projet, formations certifiantes PMP, PRINCE2, Scrum et conseil en transformation organisationnelle",
  "url": import.meta.env.VITE_SITE_URL || "https://example.com",
  "logo": "https://static.readdy.ai/image/2ce43ce334b232046883f79f4f3df46a/b61b027bf4d42918b4ae2ae5a241e2c2.jfif",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33-1-23-45-67-89",
    "contactType": "Customer Service",
    "availableLanguage": ["French"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Avenue des Champs-Élysées",
    "addressLocality": "Paris",
    "postalCode": "75008",
    "addressCountry": "FR"
  },
  "sameAs": [
    "https://www.linkedin.com/company/sica-conseil"
  ]
});

export const generateServiceSchema = (serviceName: string, description: string, price?: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "SICA CONSEIL",
    "url": import.meta.env.VITE_SITE_URL || "https://example.com"
  },
  ...(price && {
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "EUR"
    }
  })
});

export const generateCourseSchema = (courseName: string, description: string, price: string, duration: string) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  "name": courseName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "SICA CONSEIL",
    "url": import.meta.env.VITE_SITE_URL || "https://example.com"
  },
  "offers": {
    "@type": "Offer",
    "price": price.replace('€', ''),
    "priceCurrency": "EUR"
  },
  "timeRequired": duration,
  "courseMode": "online",
  "inLanguage": "fr"
});

export const generateWebPageSchema = (title: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": title,
  "description": description,
  "url": (import.meta.env.VITE_SITE_URL || "https://example.com") + url,
  "isPartOf": {
    "@type": "WebSite",
    "name": "SICA CONSEIL",
    "url": import.meta.env.VITE_SITE_URL || "https://example.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "SICA CONSEIL"
  }
});

export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": (import.meta.env.VITE_SITE_URL || "https://example.com") + item.url
  }))
});
