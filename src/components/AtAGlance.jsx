import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, Image, Users, Brain, Shield } from 'lucide-react';

const AtAGlance = () => {
  const features = [
    {
      icon: FileText,
      title: "Unified electronic medical records built for pets and veterinary teams",
      color: "bg-brand-teal"
    },
    {
      icon: Calendar,
      title: "Adaptive scheduling for doctors, technicians, and front desk staff",
      color: "bg-deep-purple"
    },
    {
      icon: Image,
      title: "Seamless diagnostic and imaging integration for faster, clearer results",
      color: "bg-light-orange"
    },
    {
      icon: Users,
      title: "Client portals that keep pet owners informed and engaged",
      color: "bg-light-purple"
    },
    {
      icon: Brain,
      title: "AI features that summarize notes, support clinical decisions, and answer your questions",
      color: "bg-dark-purple"
    },
    {
      icon: Shield,
      title: "Veterinary-specific security and role-based permissions",
      color: "bg-brand-teal"
    }
  ];

  return (
    <section className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-0"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">StringSoft At a Glance</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              x: ["-15px", "15px", "-15px"],
            }}
            viewport={{ once: true }}
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
              x: {
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
            className="flex justify-center"
          >
            <img
              src="/images/detective-cat-illustration.png"
              alt="Detective cat illustration"
              className="w-full max-w-[300px] md:max-w-[400px]"
              loading="lazy"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="feature-card glass-effect rounded-2xl p-8 text-center group"
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-white/90 text-lg leading-relaxed">
                {feature.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AtAGlance;