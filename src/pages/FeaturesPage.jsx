import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { CheckCircle, FileText, Calendar, TestTube, Users, Shield, Cloud, Brain, Smartphone, Microscope, HeartPulse, Video, MessageSquare, DollarSign, Package, BarChart, ClipboardList, Truck, Clock } from 'lucide-react';
const FeatureCategory = ({
  id,
  title,
  children
}) => <div id={id} className="mb-12 scroll-mt-24">
    <h2 className="text-3xl font-bold mb-8 text-center gradient-text">{title}</h2>
    <div className="space-y-8">{children}</div>
  </div>;
const FeatureBlock = ({
  icon: Icon,
  title,
  description,
  capabilities,
  color
}) => <motion.div initial={{
  opacity: 0,
  y: 30
}} whileInView={{
  opacity: 1,
  y: 0
}} transition={{
  duration: 0.6
}} viewport={{
  once: true
}} className="feature-card glass-effect rounded-2xl p-8">
    <div className="flex items-start space-x-6 mb-4">
      <div className={`w-16 h-16 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-white/80 text-lg mt-1">{description}</p>
      </div>
    </div>
    {capabilities && <ul className="space-y-3 mt-6 pl-4 border-l-2 border-brand-teal/50">
        {capabilities.map((cap, i) => <li key={i} className="flex items-start">
            <CheckCircle className="w-5 h-5 text-brand-teal mr-3 mt-1 flex-shrink-0" />
            <span className="text-white/90">{cap}</span>
          </li>)}
      </ul>}
  </motion.div>;
const FeaturesPage = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);
  const majorFeatures = [{
    name: "Electronic Health Records (EHR/EMR)"
  }, {
    name: "Appointment Scheduling"
  }, {
    name: "Client Management"
  }, {
    name: "Billing & Invoicing"
  }, {
    name: "Inventory Management"
  }, {
    name: "Reporting & Analytics"
  }, {
    name: "Client Communication Tools"
  }, {
    name: "Automated Reminders"
  }, {
    name: "Client Portals"
  }, {
    name: "Wellness Plans"
  }, {
    name: "Telemedicine"
  }, {
    name: "Integrations"
  }, {
    name: "Task Management"
  }, {
    name: "Mobile Applications",
    status: "Coming Soon"
  }, {
    name: "Boarding Management"
  }];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Veterinary Practice Management Software",
    "provider": {
      "@type": "Organization",
      "name": "StringSoft"
    },
    "name": "StringSoft Features",
    "description": "Explore the comprehensive features of StringSoft: EMR, scheduling, imaging, client portals, security, and more. Built for modern veterinary practices.",
    "areaServed": {
      "@type": "Country",
      "name": "US"
    }
  };

  return <>
      <Helmet>
        <title>Features | StringSoft Veterinary Software</title>
        <meta name="description" content="Explore the comprehensive features of StringSoft: EMR, scheduling, imaging, client portals, security, and more. Built for modern veterinary practices." />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
      <div className="pt-32 pb-20 bg-charcoal-black text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-24">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">StringSoft Features</span>
              </h1>
              <p className="text-xl text-white/80 max-w-xl mx-auto lg:mx-0">
                A complete platform designed from the ground up for veterinary care. Explore our comprehensive feature set below.
              </p>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="relative flex justify-center">
              <motion.img src="https://horizons-cdn.hostinger.com/3739547e-79b0-4f3a-9b18-ca49e4c85466/08e99da47d0c66abd65670e4d0be4783.png" alt="Feature illustration showing software interface elements" className="max-w-sm md:max-w-md lg:max-w-lg" loading="lazy" animate={{
              y: ["-10px", "10px", "-10px"]
            }} transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }} />
            </motion.div>
          </div>

          <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="max-w-5xl mx-auto mb-20 feature-card glass-effect rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">At a Glance</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
              {majorFeatures.map((feature, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.05
            }} viewport={{
              once: true
            }} className="flex items-center">
                  {feature.status ? <Clock className="w-5 h-5 text-light-orange mr-3 flex-shrink-0" /> : <CheckCircle className="w-5 h-5 text-brand-teal mr-3 flex-shrink-0" />}
                  <span className="text-white/90">{feature.name}</span>
                  {feature.status && <span className="ml-2 text-xs bg-light-orange/20 text-light-orange px-2 py-1 rounded-full">{feature.status}</span>}
                </motion.div>)}
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Better Medicine Starts with Better Information</span>
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Fully Electronic Medical Records allow you to enter all patient information directly into the system. No more searching for x-ray folders, lab results, documents, or signed permission forms. It’s all at your fingertips.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <FeatureCategory title="Electronic Medical Records">
              <FeatureBlock icon={FileText} title="Automated SOAP Entries" description="Automate common tasks with a single click. Predefine SOAP entries, diagnosis, treatments, and more to speed up documentation." capabilities={["Attach charges automatically", "Set up treatments automatically", "Auto-assign diagnosis based on item", "Configure reminders and callback reminders", "Automate client report cards"]} color="bg-brand-teal" />
              <FeatureBlock icon={FileText} title="Free Form SOAP" description="Enjoy the flexibility to type, handwrite, draw, and add images to your SOAP entries." capabilities={["Insert images and capture handwriting", "Use preformatted templates with unlimited text fields", "Unlimited pages and entries per patient", "Assign unique, time-stamped SOAPs to each staff member"]} color="bg-brand-teal" />
              <FeatureBlock icon={Microscope} title="Labwork & Vitals" description="Automate lab connections and define vitals of any type to track any measurement needed." capabilities={["Link workstations with equipment or remote online services", "Automatically tie charges to labwork, reducing missed billing", "Define positive/negative, text, or numeric vitals", "Configure default, high, and low values for measurements"]} color="bg-brand-teal" />
            </FeatureCategory>

            <FeatureCategory title="Scheduling & Workflow">
              <FeatureBlock icon={Calendar} title="Appointment Scheduling 2.0" description="The flexibility you’ve been waiting for, with specialized workflows and views for teams of any size." capabilities={["Simplify workflows by specialty (Radiology, Surgery, Dentistry, etc.)", "Grid View Scheduling to sort and filter staff appointments", "Outlook-Style Scheduling to sync with external calendars"]} color="bg-deep-purple" />
            </FeatureCategory>

            <FeatureCategory title="Imaging & Labs">
              <FeatureBlock icon={TestTube} title="Smart Imaging" description="Welcome to the future of imaging. Import, annotate, and manipulate images from any source." capabilities={["Annotate with text, handwriting, drawings, and shapes", "Manipulate images (rotate, zoom, pan, adjust contrast/brightness)", "Store original + annotation layers separately", "Fully supports DICOM, HL7, and other imaging standards"]} color="bg-light-orange" />
              <FeatureBlock icon={HeartPulse} title="Lab Interfaces" description="StringSoft integrates seamlessly with in-house and reference lab systems." capabilities={["Supported In-House: Abaxis, Heska", "Supported Reference Labs: Antech, Idexx", "Supported LIS: Orchard Harvest/Copia, Labdaq, Sapphire, and more"]} color="bg-light-orange" />
            </FeatureCategory>

            <FeatureCategory id="security" title="Security & Permissions">
              <FeatureBlock icon={Shield} title="The Fortress: Keep Your Data Secure" description="The most secure platform in the industry. StringSoft never shares your data and allows fine-grained control of access." capabilities={["Security Groups: Apply permissions to groups of users.", "Screen & Field Security: Explicit access required for each user and sensitive field.", "Permission Levels: Control actions like delete or edit individually.", "Custom Security for reports or external programs."]} color="bg-light-purple" />
            </FeatureCategory>

            <FeatureCategory title="Client & Referral Communication">
              <FeatureBlock icon={Users} title="Complete Referral Management" description="Smarter referral management to track doctors, cases, and communications automatically." capabilities={["Track referring doctors and their cases with comprehensive reporting", "Automated referral letters (fax, email, mail)", "Secure web portal for referring doctors to submit cases and view records"]} color="bg-dark-purple" />
              <FeatureBlock icon={Smartphone} title="Client Portal" description="Empower your clients with self-service tools to view records, manage appointments, and communicate securely." capabilities={["View patient history, request refills, and review reminders", "Request new appointments and view upcoming/past visits", "Secure bidirectional messaging with the practice", "View invoices, pay balances, and electronically sign estimates"]} color="bg-dark-purple" />
            </FeatureCategory>
          </div>
        </div>
      </div>
    </>;
};
export default FeaturesPage;