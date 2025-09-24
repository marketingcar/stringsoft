import React from 'react';
import { Helmet } from 'react-helmet';
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
    "url": "https://your-domain.com/",
    "logo": "https://your-domain.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-481-2693",
      "contactType": "customer service"
    },
    "sameAs": []
  };

  return (
    <>
      <Helmet>
        <title>StringSoft | Veterinary Practice Management, Simplified</title>
        <meta name="description" content="The all-in-one veterinary practice management software. Unified EMR, scheduling, imaging, labs, billing, and client communication in one seamless platform." />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </Helmet>
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