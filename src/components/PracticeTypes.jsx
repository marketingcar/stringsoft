import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Stethoscope, Building2, GraduationCap } from 'lucide-react';

const PracticeTypes = () => {
  const practiceTypes = [
    {
      icon: Heart,
      title: "General Practices",
      description: "From wellness visits to urgent care, StringSoft simplifies everyday veterinary workflows, helping small teams deliver better client and patient experiences.",
      color: "bg-brand-teal",
    },
    {
      icon: Stethoscope,
      title: "Specialty Clinics",
      description: "Advanced tools for specialists who handle complex cases — with built-in lab, imaging, and referral features.",
      color: "bg-deep-purple",
    },
    {
      icon: Building2,
      title: "Corporate & Multi-Hospital Groups",
      description: "Centralize oversight, share records across locations, and manage enterprise-level data securely.",
      color: "bg-light-orange",
    },
    {
      icon: GraduationCap,
      title: "Universities & Teaching Hospitals",
      description: "Support large teams, student access, and research with scalable, role-based permissions and high-capacity infrastructure.",
      color: "bg-light-purple",
    }
  ];

  return (
    <section className="py-20 bg-charcoal-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {practiceTypes.map((practice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="feature-card glass-effect rounded-2xl p-8 flex items-start space-x-6 group"
            >
              <div className={`w-16 h-16 rounded-xl ${practice.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <practice.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{practice.title}</h3>
                <p className="text-white/80 text-lg leading-relaxed">{practice.description}</p>
              </div>
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
              Get a Custom Demo
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PracticeTypes;