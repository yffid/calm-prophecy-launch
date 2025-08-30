import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noIndex?: boolean;
  structuredData?: object;
}

export function SEOHead({
  title = "Momta 2028 - The Dawn of Serene Intelligence | Coming Soon",
  description = "Join the waitlist for Momta 2028 - where artificial intelligence meets tranquility. Secure your exclusive 20% launch discount for the future of serene intelligence.",
  canonical = "https://momta.org",
  ogImage = "https://momta.org/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  noIndex = false,
  structuredData
}: SEOHeadProps) {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Momta Technology" />
      <meta name="keywords" content="artificial intelligence 2028, AI innovation, future robotics, serene intelligence, calm prophecy, technology 2028, momta robotics" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {!noIndex && <meta name="robots" content="index, follow" />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Momta 2028" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@momta2028" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#1E7EFF" />
      <meta name="msapplication-TileColor" content="#1E7EFF" />
      
      {/* Preload Critical Fonts */}
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
        as="style"
        onLoad="this.onload=null;this.rel='stylesheet'"
      />
      
      {/* DNS Prefetch for External Resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}