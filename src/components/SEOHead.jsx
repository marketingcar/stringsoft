import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHead = ({
  title,
  description,
  canonical,
  image,
  type = 'website',
  author = 'Marketing Car',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData,
  noIndex = false,
  breadcrumbs = [],
}) => {
  const siteConfig = {
    name: 'StringSoft',
    url: 'https://stringsoft.com',
    defaultImage: 'https://stringsoft.com/og-image.jpg',
    twitterHandle: '@StringSoftware',
  };

  const ogImage = image || siteConfig.defaultImage;
  const ogUrl = canonical || `${siteConfig.url}${window?.location?.pathname || ''}`;

  // Generate structured data for articles
  const generateArticleStructuredData = () => {
    if (type !== 'article' || !publishedTime) return null;

    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": description,
      "image": ogImage,
      "author": {
        "@type": "Organization",
        "name": siteConfig.name,
        "url": siteConfig.url
      },
      "publisher": {
        "@type": "Organization",
        "name": siteConfig.name,
        "url": siteConfig.url,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteConfig.url}/logo.png`
        }
      },
      "datePublished": publishedTime,
      "dateModified": modifiedTime || publishedTime,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": ogUrl
      }
    };
  };

  // Generate comprehensive structured data
  const generateBusinessStructuredData = () => ({
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "Organization"],
    "name": siteConfig.name,
    "legalName": "StringSoft Inc",
    "url": siteConfig.url,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteConfig.url}/images/logo-header.png`,
      "contentUrl": `${siteConfig.url}/images/logo-header.png`,
      "width": 775,
      "height": 178
    },
    "image": {
      "@type": "ImageObject",
      "url": siteConfig.defaultImage,
      "contentUrl": siteConfig.defaultImage,
      "width": 1200,
      "height": 630
    },
    "description": "Revolutionary veterinary practice management software designed for modern animal care professionals.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser, Windows, macOS, Linux",
    "softwareVersion": "2024",
    "releaseNotes": "Latest version with enhanced features for veterinary practices",
    "downloadUrl": siteConfig.url,
    "screenshot": siteConfig.defaultImage,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "priceRange": "Contact for pricing",
      "seller": {
        "@type": "Organization",
        "name": "StringSoft Inc"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "StringSoft Inc",
      "url": siteConfig.url
    },
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+1-800-481-2693",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": ["English"],
      "hoursAvailable": "Mo-Fr 08:00-17:00"
    }, {
      "@type": "ContactPoint",
      "contactType": "sales",
      "areaServed": "US",
      "availableLanguage": ["English"],
      "url": `${siteConfig.url}/contact`
    }],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "New Hampshire"
    },
    "foundingDate": "2015",
    "industry": "Veterinary Software",
    "keywords": "veterinary practice management, EMR, electronic medical records, veterinary software, animal care, practice management",
    "targetAudience": {
      "@type": "Audience",
      "name": "Veterinary Professionals",
      "description": "Veterinarians, veterinary technicians, practice managers, and veterinary staff"
    },
    "serviceArea": {
      "@type": "GeoShape",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.linkedin.com/company/stringsoft-inc./",
      "https://www.facebook.com/stringsoftnh"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": siteConfig.url
    }
  });

  // Generate website structured data
  const generateWebsiteStructuredData = () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "alternateName": "StringSoft Veterinary Software",
    "url": siteConfig.url,
    "description": "Revolutionary veterinary practice management software designed for modern animal care professionals.",
    "inLanguage": "en-US",
    "copyrightYear": "2024",
    "copyrightHolder": {
      "@type": "Organization",
      "name": "StringSoft Inc"
    },
    "author": {
      "@type": "Organization",
      "name": "Marketing Car"
    },
    "publisher": {
      "@type": "Organization",
      "name": "StringSoft Inc",
      "url": siteConfig.url
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteConfig.url}/blog?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": siteConfig.name,
      "description": "Revolutionary veterinary practice management software designed for modern animal care professionals."
    }
  });

  const articleData = generateArticleStructuredData();
  const businessData = generateBusinessStructuredData();
  const websiteData = generateWebsiteStructuredData();
  const customStructuredData = structuredData;

  // Generate breadcrumb structured data
  const generateBreadcrumbStructuredData = () => {
    if (!breadcrumbs.length) return null;

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": breadcrumb.name,
        "item": `${siteConfig.url}${breadcrumb.url}`
      }))
    };
  };

  const breadcrumbData = generateBreadcrumbStructuredData();

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {author && <meta name="author" content={author} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Robots */}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteConfig.name} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {siteConfig.twitterHandle && <meta name="twitter:site" content={siteConfig.twitterHandle} />}
      {siteConfig.twitterHandle && <meta name="twitter:creator" content={siteConfig.twitterHandle} />}

      {/* Additional Meta Tags */}
      <meta name="generator" content="StringSoft Static Site Generator" />
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <link rel="alternate" type="application/rss+xml" title="StringSoft RSS Feed" href="/rss.xml" />

      {/* Structured Data */}
      {articleData && (
        <script type="application/ld+json">
          {JSON.stringify(articleData)}
        </script>
      )}

      {/* Always include business data */}
      <script type="application/ld+json">
        {JSON.stringify(businessData)}
      </script>

      {/* Always include website data */}
      <script type="application/ld+json">
        {JSON.stringify(websiteData)}
      </script>

      {/* Include breadcrumb data if provided */}
      {breadcrumbData && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
      )}

      {customStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(customStructuredData)}
        </script>
      )}

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://www.stringsoft.com" />

      {/* Favicon and Apple Touch Icon */}
      <link rel="icon" type="image/png" href="https://www.stringsoft.com/favicon.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="https://www.stringsoft.com/favicon.png" />
      <meta name="theme-color" content="#189AA6" />
    </Helmet>
  );
};

export default SEOHead;