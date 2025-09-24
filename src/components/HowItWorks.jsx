import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, FileText, TestTube, CreditCard, MessageCircle, Cloud, Server, HardDrive } from 'lucide-react';

const HowItWorks = () => {
  const workflow = [
    { icon: Calendar, title: "Appointment booking", color: "bg-brand-teal" },
    { icon: FileText, title: "SOAP notes", color: "bg-deep-purple" },
    { icon: TestTube, title: "Labs/Imaging", color: "bg-light-orange" },
    { icon: CreditCard, title: "Billing", color: "bg-light-purple" },
    { icon: MessageCircle, title: "Client Follow-up", color: "bg-dark-purple" }
  ];

  const deploymentOptions = [
    {
      icon: Cloud,
      title: "Cloud",
      description: "Fast, secure, always current",
      color: "bg-brand-teal"
    },
    {
      icon: Server,
      title: "Hybrid",
      description: "Balance local control with cloud convenience",
      color: "bg-deep-purple"
    },
    {
      icon: HardDrive,
      title: "On-Site",
      description: "Full local install for high-volume or specialized institutions",
      color: "bg-light-orange"
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
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
            See how StringSoft powers every step of a patient's journey:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
            {workflow.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center group"
                >
                  <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white font-medium text-center">{step.title}</span>
                </motion.div>
                
                {index < workflow.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="hidden md:block w-8 h-0.5 bg-brand-teal"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Deployment Options:</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {deploymentOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="feature-card glass-effect rounded-2xl p-8 text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full ${option.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{option.title}</h4>
                <p className="text-white/80 leading-relaxed">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/contact">
            <Button 
              variant="gradient"
              size="lg"
              className="px-8 py-4 rounded-full text-lg"
            >
              Talk to a Specialist
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;