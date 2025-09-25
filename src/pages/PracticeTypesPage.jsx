import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import PracticeTypes from '@/components/PracticeTypes';

const PracticeTypesPage = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Veterinary Practice Management Software",
    "provider": {
      "@type": "Organization",
      "name": "StringSoft"
    },
    "name": "Veterinary Practice Types Served by StringSoft",
    "description": "StringSoft is built for general practices, specialty clinics, corporate groups, and universities. Discover how our flexible software supports your unique practice type.",
    "areaServed": {
      "@type": "Country",
      "name": "US"
    }
  };

  return (
    <>
      <Helmet>
        <title>Who We Serve | StringSoft Veterinary Software</title>
        <meta name="description" content="StringSoft is built for general practices, specialty clinics, corporate groups, and universities. Discover how our flexible software supports your unique practice type." />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
      <div className="pt-32 pb-20 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 lg:mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Built for Every Practice</span>
              </h1>
              <p className="text-xl text-white/80 max-w-xl mx-auto lg:mx-0">
                StringSoft is designed with the flexibility to support the unique workflows of general practices, specialty clinics, corporate groups, and universities.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center order-first lg:order-last"
            >
              <motion.img
                src="https://horizons-cdn.hostinger.com/3739547e-79b0-4f3a-9b18-ca49e4c85466/2ec8be1b2260266c835a42b62abb5048.png"
                alt="A diverse group of veterinary professionals collaborating"
                className="max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg rounded-2xl"
                loading="lazy"
                animate={{
                  y: ["-10px", "10px", "-10px"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </div>
        <PracticeTypes />
      </div>
    </>
  );
};

export default PracticeTypesPage;