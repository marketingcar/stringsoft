import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHead = ({
  title,
  description,
  canonical,
  image,
  type = 'website',
  author = 'StringSoft',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData,
  noIndex = false,
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

  // Generate organization structured data
  const generateOrganizationStructuredData = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo.png`,
    "description": "Revolutionary veterinary practice management software designed for modern animal care professionals.",
    "sameAs": [
      "https://twitter.com/StringSoftware",
      "https://linkedin.com/company/stringsoft"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-STRING",
      "contactType": "customer service",
      "availableLanguage": "en"
    }
  });

  const articleData = generateArticleStructuredData();
  const organizationData = generateOrganizationStructuredData();
  const customStructuredData = structuredData;

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

      {/* Always include organization data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationData)}
      </script>

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