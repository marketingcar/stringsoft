import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Linkedin } from 'lucide-react';
const Footer = () => {
  const location = useLocation();
  const handleSecurityClick = e => {
    if (location.pathname !== '/features') {
      // Let the link navigate normally
    } else {
      e.preventDefault();
      const element = document.getElementById('security');
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };
  const footerSections = [{
    title: "Product",
    links: [{
      name: "Features",
      path: "/features"
    }, {
      name: "Pricing",
      path: "/pricing"
    }, {
      name: "Request a Demo",
      path: "/request-demo"
    }, {
      name: "Security",
      path: "/features#security",
      onClick: handleSecurityClick
    }]
  }, {
    title: "Who We Serve",
    links: [{
      name: "General Practice",
      path: "/practice-types"
    }, {
      name: "Specialty Clinics",
      path: "/practice-types"
    }, {
      name: "Corporate Groups",
      path: "/practice-types"
    }, {
      name: "Universities",
      path: "/practice-types"
    }]
  }, {
    title: "Resources",
    links: [{
      name: "Blog",
      path: "/blog"
    }, {
      name: "Support",
      path: "/support"
    }, {
      name: "FAQ",
      path: "/faq"
    }]
  }, {
    title: "Company",
    links: [{
      name: "Contact",
      path: "/contact"
    }]
  }];
  return <footer className="bg-[#1A1A1A] border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="lg:col-span-1">
            <Link to="/">
              <img src="https://horizons-cdn.hostinger.com/3739547e-79b0-4f3a-9b18-ca49e4c85466/originallogoinwhite-2CKh7.png" alt="StringSoft Logo" className="h-32 w-auto mb-6" />
            </Link>
            <p className="text-white/70 leading-relaxed mb-6">
              Veterinary Practice Management, Simplified.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/stringsoft-inc./" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-deep-purple rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.facebook.com/stringsoftnh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-brand-teal rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </motion.div>

          {footerSections.map((section, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: index * 0.1
        }} viewport={{
          once: true
        }}>
              <span className="text-white font-bold text-lg mb-6 block">{section.title}</span>
              <ul className="space-y-4">
                {section.links.map(link => <li key={link.name}>
                    <Link to={link.path} onClick={link.onClick} className="text-white/70 hover:text-white transition-colors duration-300">
                      {link.name}
                    </Link>
                  </li>)}
              </ul>
            </motion.div>)}
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} StringSoft Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">Cookie Policy</Link>
          </div>
        </motion.div>
      </div>
      <motion.div className="absolute opacity-[0.03] w-96 h-96 -bottom-24 -right-24" animate={{
      rotate: 360
    }} transition={{
      duration: 150,
      repeat: Infinity,
      ease: 'linear'
    }}>
        <img src="https://horizons-cdn.hostinger.com/3739547e-79b0-4f3a-9b18-ca49e4c85466/82f166637955ff5e7e366a47be32ee65.png" alt="Decorative background icon pattern" className="w-full h-full" />
      </motion.div>
    </footer>;
};
export default Footer;