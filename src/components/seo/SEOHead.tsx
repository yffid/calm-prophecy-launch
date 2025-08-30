import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noIndex?: boolean;
  structuredData?: object;
}

export function SEOHead({
  title = "Momta 2028 - AI Robots & Future Robotics | Friendly Robot Technology",
  description = "Momta 2028: Leading AI robots and friendly robotics technology. Best robots for home automation, cheap robots with advanced AI. Join the future of robotics - launching 2028.",
  keywords = "AI robots, friendly robots, cheap robots, best robots, future of robotics, Momta robotics, artificial intelligence robots, home automation robots, robot technology 2028, serene intelligence",
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
      <meta name="keywords" content={keywords} />
      
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
      
      {/* Enhanced SEO Meta Tags */}
      <meta name="application-name" content="Momta 2028" />
      <meta name="apple-mobile-web-app-title" content="Momta 2028" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#1E7EFF" />
      <meta name="msapplication-tap-highlight" content="no" />
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      
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
      <link rel="dns-prefetch" href="//supabase.co" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}