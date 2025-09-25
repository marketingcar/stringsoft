import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Cloud, User, Hotel as Hospital, Building, GraduationCap, Server } from 'lucide-react';

const PricingCard = ({ plan, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className={`feature-card glass-effect rounded-2xl p-8 flex flex-col ${plan.popular ? 'ring-2 ring-brand-teal' : ''}`}
  >
    {plan.popular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-gradient-to-r from-brand-teal to-deep-purple text-white px-4 py-2 rounded-full text-sm font-bold">
          Most Popular
        </span>
      </div>
    )}
    <div className="flex-grow">
      <div className="flex items-center mb-6">
        <div className={`w-12 h-12 rounded-lg ${plan.color} flex items-center justify-center mr-4`}>
          <plan.icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
      </div>
      <p className="text-white/80 mb-6 leading-relaxed">{plan.description}</p>
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-start">
            <Check className="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0" />
            <span className="text-white/90">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <Link to="/request-demo" className="mt-auto">
      <Button 
        variant="gradient"
        className="w-full py-3 rounded-full"
      >
        Request Info
      </Button>
    </Link>
  </motion.div>
);

const PricingPage = () => {
  const plans = {
    cloud: [
      {
        name: "Cloud",
        description: "The full power of StringSoft, accessible from anywhere on any device. Ideal for practices that value flexibility and remote access.",
        icon: Cloud,
        color: "bg-brand-teal",
        popular: true,
        features: [
          "Supports all features of the on-site application",
          "Available from any location and device (iPad/Android)",
          "Monthly subscription model",
          "Automatic updates and maintenance"
        ]
      },
      {
        name: "Single User",
        description: "A dedicated cloud plan for solo practitioners, offering the complete feature set for one user.",
        icon: User,
        color: "bg-deep-purple",
        features: [
          "Cloud-only deployment",
          "Access to all Premise-based solution components",
          "Perfect for mobile vets or single-doctor clinics"
        ]
      }
    ],
    premise: [
      {
        name: "Small Practice",
        description: "Perfect for a small clinic with up to 10 workstations, covering all essential functions.",
        icon: Hospital,
        color: "bg-light-orange",
        features: [
          "Up to 10 workstations",
          "Electronic Medical Records",
          "Digital Imaging & Appointment Scheduling",
          "Inventory, Task Scheduling & Reminders"
        ]
      },
      {
        name: "Large Practice",
        description: "For growing hospitals up to 35 workstations, with added communication and web features.",
        icon: Hospital,
        color: "bg-light-purple",
        features: [
          "Everything in Small Practice",
          "Up to 35 workstations",
          "Internal Staff Messaging",
          "Web Access Functionality"
        ]
      },
      {
        name: "Enterprise Edition",
        description: "Designed for very large clinics with up to 100 workstations, including all features.",
        icon: Building,
        color: "bg-dark-purple",
        features: [
          "Everything in Large Practice",
          "Up to 100 workstations",
          "Full, unrestricted feature set"
        ]
      }
    ],
    specialized: [
       {
        name: "Multi-Hospital",
        description: "Centralized management for groups of up to 3 hospitals, with data sharing and consolidated reporting.",
        icon: Server,
        color: "bg-brand-teal",
        features: [
          "All Large Practice features",
          "Up to 35 workstations per hospital",
          "Multi-Hospital Reporting & Product Pricing",
          "Data Sharing between hospitals",
          "Warehouse inventory management"
        ]
      },
      {
        name: "Small University",
        description: "A comprehensive package for teaching institutions with up to 300 workstations.",
        icon: GraduationCap,
        color: "bg-deep-purple",
        features: [
          "Up to 300 workstations",
          "All University features",
          "Separate pharmacy module",
          "API access for custom applications"
        ]
      },
      {
        name: "Large University",
        description: "Our most powerful edition for large universities, supporting an unlimited number of workstations.",
        icon: GraduationCap,
        color: "bg-light-orange",
        features: [
          "Unlimited workstations",
          "All University features",
          "Separate pharmacy module",
          "API access and custom programming available"
        ]
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Veterinary Practice Management Software",
    "provider": {
      "@type": "Organization",
      "name": "StringSoft"
    },
    "name": "StringSoft Pricing & Plans",
    "description": "Find the perfect plan for your veterinary practice. StringSoft offers flexible pricing for cloud, on-premise, and university needs. Request a quote today.",
    "areaServed": {
      "@type": "Country",
      "name": "US"
    }
  };

  return (
    <>
      <Helmet>
        <title>Pricing & Plans | StringSoft</title>
        <meta name="description" content="Find the perfect plan for your veterinary practice. StringSoft offers flexible pricing for cloud, on-premise, and university needs. Request a quote today." />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
      <div className="pt-32 pb-20 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Flexible Plans for Every Practice</span>
              </h1>
              <p className="text-xl text-white/80 max-w-xl mx-auto lg:mx-0">
                StringSoft adapts to your practice size, structure, and deployment needs. All pricing is available upon request.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{
                  y: ["-10px", "10px", "-10px"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img alt="An illustration of hands interacting with a software interface, representing flexible plans" className="max-w-sm md:max-w-md lg:max-w-lg" loading="lazy" src="https://horizons-cdn.hostinger.com/3739547e-79b0-4f3a-9b18-ca49e4c85466/2ac5e792d5d8352a30bc5b9eb497bf41.png" />
              </motion.div>
            </motion.div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10 gradient-text">Cloud Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {plans.cloud.map((plan, index) => (
                <PricingCard plan={plan} index={index} key={plan.name} />
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10 gradient-text">On-Premise Practice Editions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.premise.map((plan, index) => (
                <PricingCard plan={plan} index={index} key={plan.name} />
              ))}
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10 gradient-text">Enterprise & University Editions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.specialized.map((plan, index) => (
                <PricingCard plan={plan} index={index} key={plan.name} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default PricingPage;