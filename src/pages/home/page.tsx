
import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import NewsSection from './components/NewsSection';
import NewsCategories from './components/NewsCategories';
import ServicesSection from './components/ServicesSection';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { updateSEO, addJSONLD } from '../../utils/seo';

export default function Home() {
  useEffect(() => {
    // Update SEO
    updateSEO({
      title: 'Mairie de Dangbo - Commune dynamique au service des citoyens',
      description: 'Site officiel de la Mairie de Dangbo au Bénin. Découvrez nos services municipaux, actualités, projets de développement et démarches administratives en ligne.',
      keywords: 'Mairie Dangbo, Commune Dangbo, Bénin, services municipaux, actualités, projets, état civil, urbanisme',
      ogTitle: 'Mairie de Dangbo - Commune dynamique au service des citoyens',
      ogDescription: 'Site officiel de la Mairie de Dangbo au Bénin. Services municipaux, actualités et projets de développement.',
      ogImage: 'https://mairiedangbo.exploitsweb.com/assets/logo.png',
      canonicalUrl: `${import.meta.env.VITE_SITE_URL || 'https://example.com'}/`
    });

    // Add JSON-LD structured data
    addJSONLD({
      "@context": "https://schema.org",
      "@type": "GovernmentOrganization",
      "name": "Mairie de Dangbo",
      "alternateName": "Commune de Dangbo",
      "url": import.meta.env.VITE_SITE_URL || 'https://example.com',
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
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <NewsSection />
      <NewsCategories />
      <ServicesSection />
      <Footer />
    </div>
  );
}
