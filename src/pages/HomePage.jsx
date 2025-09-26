import React from 'react';
import SEOHead from '@/components/SEOHead';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import AtAGlance from '@/components/AtAGlance';
import WhyStringSoft from '@/components/WhyStringSoft';
import PracticeTypes from '@/components/PracticeTypes';
import Support from '@/components/Support';

const HomePage = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "StringSoft",
    "url": "https://stringsoft.com/",
    "logo": "https://stringsoft.com/logo.png",
    "description": "Revolutionary veterinary practice management software designed for modern animal care professionals.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-481-2693",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.linkedin.com/company/stringsoft-inc./",
      "https://www.facebook.com/stringsoftnh"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "United States",
      "addressCountry": "US"
    }
  };

  return (
    <>
      <SEOHead
        title="StringSoft | Veterinary Practice Management, Simplified"
        description="The all-in-one veterinary practice management software. Unified EMR, scheduling, imaging, labs, billing, and client communication in one seamless platform."
        canonical="https://stringsoft.com/"
        type="website"
        structuredData={organizationSchema}
      />
      <Hero />
      <Intro />
      <AtAGlance />
      <WhyStringSoft />
      <div className="container mx-auto px-6 py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">Who We Serve</h2>
        <PracticeTypes />
      </div>
      <Support />
    </>
  );
};

export default HomePage;