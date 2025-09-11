
export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

export const updateSEO = (seoData: SEOData) => {
  // Update title
  document.title = seoData.title;
  
  // Update meta description
  updateMeta('description', seoData.description);
  
  // Update keywords if provided
  if (seoData.keywords) {
    updateMeta('keywords', seoData.keywords);
  }
  
  // Update robots meta
  const robotsContent = seoData.noIndex ? 'noindex, nofollow' : 'index, follow';
  updateMeta('robots', robotsContent);
  
  // Update Open Graph tags
  updateMeta('og:title', seoData.ogTitle || seoData.title, 'property');
  updateMeta('og:description', seoData.ogDescription || seoData.description, 'property');
  updateMeta('og:url', seoData.canonicalUrl || window.location.href, 'property');
  
  if (seoData.ogImage) {
    updateMeta('og:image', seoData.ogImage, 'property');
  }
  
  // Update Twitter Card tags
  updateMeta('twitter:title', seoData.ogTitle || seoData.title, 'property');
  updateMeta('twitter:description', seoData.ogDescription || seoData.description, 'property');
  
  if (seoData.ogImage) {
    updateMeta('twitter:image', seoData.ogImage, 'property');
  }
  
  // Update canonical URL
  updateCanonical(seoData.canonicalUrl || window.location.href);
};

const updateMeta = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
  let meta = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

const updateCanonical = (url: string) => {
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;
};

export const addJSONLD = (data: any) => {
  // Remove existing JSON-LD script if any
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }
  
  // Add new JSON-LD script
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.innerHTML = JSON.stringify(data);
  document.head.appendChild(script);
};
