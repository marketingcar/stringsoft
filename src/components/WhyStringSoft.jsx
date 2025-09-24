import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Zap, Headphones as HeadphonesIcon, TrendingUp, Settings } from 'lucide-react';

const WhyStringSoft = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Efficiency",
      description: "Cut down charting time, reduce duplicate entries, and streamline scheduling",
      color: "bg-brand-teal"
    },
    {
      icon: HeadphonesIcon,
      title: "Support",
      description: "Real human support from a team that understands veterinary workflows",
      color: "bg-deep-purple"
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "From a solo GP to a teaching hospital, StringSoft grows with you",
      color: "bg-light-orange"
    },
    {
      icon: Settings,
      title: "Flexibility",
      description: "Deploy in the cloud, hybrid, or on-site based on your clinic's needs",
      color: "bg-light-purple"
    }
  ];

  const handleCTAClick = () => {
    toast({
      title: "🚧 Impact Exploration",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section className="py-20 bg-charcoal-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="gradient-text">Why StringSoft</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              <p className="text-xl text-white/90 leading-relaxed">
                Most veterinary software is either too generic or pieced together from multiple tools. 
                That leaves staff duplicating work, clients frustrated, and vets drained.
              </p>
              
              <p className="text-xl text-white/90 leading-relaxed">
                <span className="gradient-text font-semibold">StringSoft changes that story.</span> One system, 
                designed from the ground up for veterinary care. The result? A smoother clinic workflow, 
                happier clients, and more time for medicine.
              </p>
            </div>

            <Button 
              onClick={handleCTAClick}
              variant="gradient"
              size="lg"
              className="px-8 py-4 rounded-full text-lg"
            >
              Explore Our Impact
            </Button>
          </motion.div>

          {/* Right Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="feature-card glass-effect rounded-2xl p-6 group"
              >
                <div className={`w-12 h-12 mb-4 rounded-lg ${benefit.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/80 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyStringSoft;