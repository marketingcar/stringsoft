import React from 'react';
import { motion } from 'framer-motion';
import { Headphones as HeadphonesIcon, RefreshCw, HeartHandshake as Handshake } from 'lucide-react';

const Support = () => {
  const supportFeatures = [
    {
      icon: HeadphonesIcon,
      title: "Dedicated Human Support",
      description: "Always speak with a real person, not a chatbot",
      color: "bg-brand-teal"
    },
    {
      icon: RefreshCw,
      title: "Continuous Updates",
      description: "New features and improvements released monthly based on clinic feedback",
      color: "bg-deep-purple"
    },
    {
      icon: Handshake,
      title: "Partnership Approach",
      description: "Practices that choose StringSoft stay because we adapt with them",
      color: "bg-light-orange"
    }
  ];

  return (
    <section className="pt-32 pb-20 bg-charcoal-black text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-start mb-8"
            >
              <motion.img
                src="/images/support-illustration.png"
                alt="Support illustration"
                className="max-w-xs md:max-w-sm"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Support & Trust
            </h1>
            <p className="text-xl text-white/80 max-w-xl mx-auto lg:mx-0">
              Veterinary medicine is demanding. Your software shouldn't add to the stress. We're your partners in practice, committed to your success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {supportFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="feature-card glass-effect rounded-2xl p-8 group flex items-start space-x-6"
              >
                <div className={`w-16 h-16 rounded-xl ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/80 text-lg leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Support;