import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText, Calendar, TestTube, Users, Shield, Cloud, Brain, Smartphone } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: "Electronic Medical Records (EMR)",
      description: "Designed specifically for pet patients",
      details: [
        "Automated SOAP Entries: Preloaded templates that add treatments, charges, callbacks, and reminders in one step",
        "Freeform SOAP: Draw, type, or upload images directly into medical notes",
        "Vitals & Lab Integration: Track vitals your way, pull in lab results automatically, and link directly to invoices"
      ],
      color: "from-[#19A4AF] to-[#6C2DC7]"
    },
    {
      icon: Calendar,
      title: "Scheduling",
      description: "Visual, drag-and-drop scheduling for appointments, surgeries, and technicians",
      details: [
        "Room and equipment management built for veterinary needs",
        "Real-time updates so front desk, doctors, and staff are always aligned"
      ],
      color: "from-[#6C2DC7] to-[#FF5A00]"
    },
    {
      icon: TestTube,
      title: "Lab & Imaging Integration",
      description: "Connect seamlessly with diagnostic labs and imaging systems",
      details: [
        "Test results and scans flow automatically into the patient record",
        "Charges are auto-generated with results, reducing billing errors"
      ],
      color: "from-[#FF5A00] to-[#FDD835]"
    },
    {
      icon: Users,
      title: "Client Communication & Portals",
      description: "Referral Portal & Client Portal solutions",
      details: [
        "Accept electronic case submissions from referring veterinarians",
        "Pet owners can book appointments, request refills, pay invoices, and access records online",
        "Two-way messaging keeps clients connected without tying up phone lines"
      ],
      color: "from-[#FDD835] to-[#19A4AF]"
    },
    {
      icon: Shield,
      title: "Security & Permissions",
      description: "Veterinary-specific permissions for doctors, techs, receptionists, and students",
      details: [
        "Protects sensitive data while giving each team member the right level of access"
      ],
      color: "from-[#19A4AF] to-[#6C2DC7]"
    },
    {
      icon: Cloud,
      title: "Flexible Deployment (Above the Cloud)",
      description: "Multiple deployment options to fit your needs",
      details: [
        "Cloud-based for easy access from anywhere",
        "Hybrid models to balance local storage with cloud benefits",
        "On-site options for large institutions with specialized IT requirements"
      ],
      color: "from-[#6C2DC7] to-[#FF5A00]"
    },
    {
      icon: Brain,
      title: "AI Integration (Next Generation)",
      description: "Smart features powered by artificial intelligence",
      details: [
        "Search: Ask your system anything and get instant answers from medical records",
        "Smart Summaries: Generate concise summaries of visits, exams, or multi-day cases",
        "Clinical Alerts: Identify potential red flags like medication conflicts or unusual test values",
        "Voice Dictation: Dictate notes hands-free to reduce after-hours charting"
      ],
      color: "from-[#FF5A00] to-[#FDD835]"
    },
    {
      icon: Smartphone,
      title: "Mobile Experience (Coming Soon)",
      description: "Secure mobile access for vets and techs on the move",
      details: [
        "Real-time appointment updates and notifications",
        "Join the early access program to test upcoming features"
      ],
      color: "from-[#FDD835] to-[#19A4AF]"
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
            <span className="gradient-text">Features</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="feature-card glass-effect rounded-2xl p-8 group"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/80 text-lg">{feature.description}</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-white/70 leading-relaxed flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-r from-[#19A4AF] to-[#6C2DC7] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {detail}
                  </li>
                ))}
              </ul>
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
              Request a Demo
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;