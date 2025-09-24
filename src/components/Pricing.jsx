import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Small Practice Plan",
      description: "Affordable for solo doctors and small teams",
      color: "bg-brand-teal",
      features: [
        "Up to 3 veterinarians",
        "Basic EMR functionality",
        "Appointment scheduling",
        "Client portal access",
        "Email support"
      ]
    },
    {
      name: "Large Practice Plan",
      description: "Robust features for specialty and multi-doctor hospitals",
      color: "bg-deep-purple",
      popular: true,
      features: [
        "Unlimited veterinarians",
        "Advanced EMR with imaging",
        "Lab integrations",
        "Referral portal",
        "Priority phone support",
        "Custom reporting"
      ]
    },
    {
      name: "Enterprise Plan",
      description: "Built for corporate groups, universities, and teaching hospitals",
      color: "bg-light-orange",
      features: [
        "Multi-location support",
        "Advanced analytics",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 support"
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Pricing & Plans</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            StringSoft adapts to your practice size and structure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`feature-card glass-effect rounded-2xl p-8 relative ${plan.popular ? 'ring-2 ring-brand-teal scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-brand-teal to-deep-purple text-white px-4 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`w-16 h-16 mx-auto mb-6 rounded-full ${plan.color} flex items-center justify-center`}>
                <Check className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 text-center">{plan.name}</h3>
              <p className="text-white/80 text-center mb-8 leading-relaxed">{plan.description}</p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-white/90">
                    <Check className="w-5 h-5 text-brand-teal mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/request-demo">
                <Button 
                  variant="gradient"
                  className="w-full py-3 rounded-full"
                >
                  Get Started
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/request-demo">
            <Button 
              variant="gradient"
              size="lg"
              className="px-8 py-4 rounded-full text-lg"
            >
              Request Pricing Info
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;