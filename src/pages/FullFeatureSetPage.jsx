import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, FileText, Calendar, TestTube, Users, Shield, Cloud, Brain, Smartphone, Microscope, HeartPulse, Video, MessageSquare, DollarSign, Package, BarChart, ClipboardList, Truck } from 'lucide-react';

const FeatureCategory = ({ title, children }) => (
  <div className="mb-12">
    <h2 className="text-3xl font-bold mb-6 gradient-text">{title}</h2>
    <div className="space-y-8">{children}</div>
  </div>
);

const FeatureBlock = ({ icon: Icon, title, description, capabilities, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="feature-card glass-effect rounded-2xl p-8"
  >
    <div className="flex items-start space-x-6 mb-4">
      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center flex-shrink-0`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-white/80 text-lg mt-1">{description}</p>
      </div>
    </div>
    {capabilities && (
      <ul className="space-y-3 mt-6 pl-4 border-l-2 border-[#19A4AF]/50">
        {capabilities.map((cap, i) => (
          <li key={i} className="flex items-start">
            <CheckCircle className="w-5 h-5 text-[#19A4AF] mr-3 mt-1 flex-shrink-0" />
            <span className="text-white/90">{cap}</span>
          </li>
        ))}
      </ul>
    )}
  </motion.div>
);

const FullFeatureSetPage = () => {
  return (
    <>
      <Helmet>
        <title>Full Feature Set - StringSoft</title>
        <meta name="description" content="A detailed breakdown of all features available in StringSoft, from EMR and scheduling to advanced AI and client portals." />
      </Helmet>
      <div className="pt-32 pb-20 bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A] text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Better Medicine Starts with Better Information</span>
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Fully Electronic Medical Records allow you to enter all patient information directly into the system. No more searching for x-ray folders, lab results, documents, or signed permission forms. It’s all at your fingertips.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <FeatureCategory title="Electronic Medical Records">
              <FeatureBlock 
                icon={FileText}
                title="Automated SOAP Entries"
                description="Automate common tasks with a single click. Predefine SOAP entries, diagnosis, treatments, and more to speed up documentation."
                capabilities={[
                  "Attach charges automatically",
                  "Set up treatments automatically",
                  "Auto-assign diagnosis based on item",
                  "Configure reminders and callback reminders",
                  "Automate client report cards",
                ]}
                color="from-brand-teal to-electric-purple"
              />
              <FeatureBlock 
                icon={FileText}
                title="Free Form SOAP"
                description="Enjoy the flexibility to type, handwrite, draw, and add images to your SOAP entries."
                capabilities={[
                  "Insert images and capture handwriting",
                  "Use preformatted templates with unlimited text fields",
                  "Unlimited pages and entries per patient",
                  "Assign unique, time-stamped SOAPs to each staff member",
                ]}
                color="from-brand-teal to-electric-purple"
              />
              <FeatureBlock 
                icon={Microscope}
                title="Labwork & Vitals"
                description="Automate lab connections and define vitals of any type to track any measurement needed."
                capabilities={[
                  "Link workstations with equipment or remote online services",
                  "Automatically tie charges to labwork, reducing missed billing",
                  "Define positive/negative, text, or numeric vitals",
                  "Configure default, high, and low values for measurements",
                ]}
                color="from-brand-teal to-electric-purple"
              />
            </FeatureCategory>

            <FeatureCategory title="Scheduling & Workflow">
              <FeatureBlock 
                icon={Calendar}
                title="Appointment Scheduling 2.0"
                description="The flexibility you’ve been waiting for, with specialized workflows and views for teams of any size."
                capabilities={[
                  "Simplify workflows by specialty (Radiology, Surgery, Dentistry, etc.)",
                  "Grid View Scheduling to sort and filter staff appointments",
                  "Outlook-Style Scheduling to sync with external calendars",
                ]}
                color="from-electric-purple to-vibrant-orange"
              />
            </FeatureCategory>

            <FeatureCategory title="Imaging & Labs">
              <FeatureBlock 
                icon={TestTube}
                title="Smart Imaging"
                description="Welcome to the future of imaging. Import, annotate, and manipulate images from any source."
                capabilities={[
                  "Annotate with text, handwriting, drawings, and shapes",
                  "Manipulate images (rotate, zoom, pan, adjust contrast/brightness)",
                  "Store original + annotation layers separately",
                  "Fully supports DICOM, HL7, and other imaging standards",
                ]}
                color="from-vibrant-orange to-bright-lemon"
              />
              <FeatureBlock 
                icon={HeartPulse}
                title="Lab Interfaces"
                description="StringSoft integrates seamlessly with in-house and reference lab systems."
                capabilities={[
                  "Supported In-House: Abaxis, Heska",
                  "Supported Reference Labs: Antech, Idexx",
                  "Supported LIS: Orchard Harvest/Copia, Labdaq, Sapphire, and more",
                ]}
                color="from-vibrant-orange to-bright-lemon"
              />
            </FeatureCategory>

            <FeatureCategory title="Security & Permissions">
              <FeatureBlock 
                icon={Shield}
                title="The Fortress: Keep Your Data Secure"
                description="The most secure platform in the industry. StringSoft never shares your data and allows fine-grained control of access."
                capabilities={[
                  "Security Groups: Apply permissions to groups of users.",
                  "Screen & Field Security: Explicit access required for each user and sensitive field.",
                  "Permission Levels: Control actions like delete or edit individually.",
                  "Custom Security for reports or external programs.",
                ]}
                color="from-bright-lemon to-brand-teal"
              />
            </FeatureCategory>

            <FeatureCategory title="Client & Referral Communication">
              <FeatureBlock 
                icon={Users}
                title="Complete Referral Management"
                description="Smarter referral management to track doctors, cases, and communications automatically."
                capabilities={[
                  "Track referring doctors and their cases with comprehensive reporting",
                  "Automated referral letters (fax, email, mail)",
                  "Secure web portal for referring doctors to submit cases and view records",
                ]}
                color="from-brand-teal to-electric-purple"
              />
              <FeatureBlock 
                icon={Smartphone}
                title="Client Portal"
                description="Empower your clients with self-service tools to view records, manage appointments, and communicate securely."
                capabilities={[
                  "View patient history, request refills, and review reminders",
                  "Request new appointments and view upcoming/past visits",
                  "Secure bidirectional messaging with the practice",
                  "View invoices, pay balances, and electronically sign estimates",
                ]}
                color="from-brand-teal to-electric-purple"
              />
            </FeatureCategory>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullFeatureSetPage;