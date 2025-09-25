import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, Home, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/features', text: 'Features' },
    { to: '/practice-types', text: 'Who We Serve' },
    { to: '/pricing', text: 'Pricing' },
    { to: '/support', text: 'Support' },
    { to: '/blog', text: 'Blog' },
    { to: '/faq', text: 'FAQ' },
    { to: '/contact', text: 'Contact' },
  ];

  const mobileNavLinks = [
    { to: '/', text: 'Home', icon: Home },
    ...navLinks.map(link => ({...link, icon: link.to === '/faq' ? HelpCircle : undefined }))
  ];

  const activeLinkStyle = {
    color: '#19A4AF',
  };
  
  const mobileActiveLinkStyle = {
    background: '#5D21D1',
    color: '#FFFFFF',
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img
                src="https://horizons-cdn.hostinger.com/3739547e-79b0-4f3a-9b18-ca49e4c85466/f03b4b7a74b3cff324d7e971cbf16b62.png"
                alt="StringSoft Logo"
                className="h-10 w-auto"
                loading="eager"
              />
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                className="text-white/80 hover:text-brand-teal transition-colors duration-300 font-medium"
              >
                {({ isActive }) => (
                  <motion.span
                    className={`py-1 ${isActive ? 'font-bold' : ''}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.text}
                  </motion.span>
                )}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
             <a href="tel:18004812693" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors bg-white/10 px-4 py-2 rounded-full font-semibold hover:bg-brand-teal/20">
                <Phone size={16} className="text-brand-teal" />
                <span>1-800-481-2693</span>
            </a>
            <Link to="/request-demo">
              <Button 
                variant="gradient"
                className="px-6 py-2 rounded-full"
              >
                Request a Demo
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pb-4 border-t border-white/10"
          >
            <div className="flex flex-col space-y-2 pt-4">
              {mobileNavLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  end={link.to === '/'}
                  style={({ isActive }) => isActive ? mobileActiveLinkStyle : undefined}
                  className="text-white/80 hover:bg-white/10 transition-colors duration-300 font-medium text-left py-3 px-4 rounded-lg"
                >
                  {link.text}
                </NavLink>
              ))}
              <div className="pt-4 pb-2 text-center">
                <a href="tel:18004812693" className="inline-flex items-center justify-center space-x-3 text-white/90 hover:text-white transition-colors py-3 px-6 bg-white/10 rounded-full text-lg font-semibold hover:bg-brand-teal/20">
                  <Phone size={20} className="text-brand-teal" />
                  <span>1-800-481-2693</span>
                </a>
              </div>
              <Link to="/request-demo" onClick={() => setIsMenuOpen(false)} className="pt-2">
                <Button 
                  variant="gradient"
                  className="w-full px-6 py-3 rounded-full text-base"
                >
                  Request a Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;