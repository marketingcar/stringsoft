import React from 'react';
import { Helmet } from 'react-helmet';
import Support from '@/components/Support';
import HowItWorks from '@/components/HowItWorks';

const SupportPage = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Customer Support",
    "provider": {
      "@type": "Organization",
      "name": "StringSoft"
    },
    "name": "StringSoft Support & Trust",
    "description": "Discover StringSoft's commitment to your success with dedicated human support, continuous updates, and a true partnership approach. We're here to help.",
    "areaServed": {
      "@type": "Country",
      "name": "US"
    }
  };

  return (
    <>
      <Helmet>
        <title>Support & Trust | StringSoft</title>
        <meta name="description" content="Discover StringSoft's commitment to your success with dedicated human support, continuous updates, and a true partnership approach. We're here to help." />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
      <div className="bg-charcoal-black">
        <Support />
        <HowItWorks />
      </div>
    </>
  );
};

export default SupportPage;