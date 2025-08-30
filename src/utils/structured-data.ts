// Structured data for SEO and rich snippets
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Momta Technology",
  "alternateName": "Momta 2028",
  "url": "https://momta.org",
  "logo": "https://momta.org/logo.png",
  "description": "Pioneering the future of artificial intelligence and robotics with serene intelligence technology launching in 2028.",
  "foundingDate": "2024",
  "industry": "Artificial Intelligence and Robotics",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "support@momta.org",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://twitter.com/momta2028",
    "https://linkedin.com/company/momta-technology"
  ]
};

export const productStructuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Momta 2028 - Serene Intelligence System",
  "description": "Revolutionary AI and robotics platform combining artificial intelligence with tranquility, launching in 2028.",
  "brand": {
    "@type": "Brand",
    "name": "Momta Technology"
  },
  "category": "Artificial Intelligence Software",
  "releaseDate": "2028-01-01",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/PreOrder",
    "priceValidUntil": "2028-01-01",
    "url": "https://momta.org"
  }
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Momta 2028",
  "url": "https://momta.org",
  "description": "The official website for Momta 2028 - The Dawn of Serene Intelligence",
  "publisher": {
    "@type": "Organization",
    "name": "Momta Technology"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://momta.org/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};