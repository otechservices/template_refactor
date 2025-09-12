
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import News from './components/News';
import Documentation from './components/Documentation';
import UsefulLinks from './components/UsefulLinks';
import Footer from './components/Footer';
import SEO from '../../components/SEO';

export default function HomePage() {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "GovernmentOrganization",
    "name": "Ministère des Affaires Sociales et de la Microfinance",
    "alternateName": "MASM",
    "description": "Ministère en charge de la protection de l'enfant et des services sociaux au Bénin",
    "url": siteUrl,
    "logo": `${siteUrl}/logo-masm.png`,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BJ",
      "addressLocality": "Cotonou",
      "addressRegion": "Littoral"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+229-60-42-20-09",
      "contactType": "customer service",
      "email": "masm.dea@gouv.bj"
    },
    "sameAs": [
      "https://www.gouv.bj"
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/actualites?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Plateforme CAPE et GARDERIES - Ministère des Affaires Sociales - Bénin"
        description="Plateforme officielle de gestion des Centres d'Accueil et de Protection de l'Enfant (CAPE) et des garderies au Bénin. Inscriptions, agréments et services de protection de l'enfance."
        keywords="CAPE, garderies, protection enfant, Bénin, Ministère Affaires Sociales, inscription, agrément, enfance, microfinance"
        ogTitle="Plateforme CAPE et GARDERIES - Protection de l'Enfant au Bénin"
        ogDescription="Services officiels d'inscription et d'agrément pour les structures de protection de l'enfant au Bénin"
        ogImage={`${siteUrl}/og-image-home.jpg`}
        structuredData={structuredData}
      />
      <Header />
      <Hero />
      <News />
      <Documentation />
      <UsefulLinks />
      <Footer />
    </div>
  );
}
