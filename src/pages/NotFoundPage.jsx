import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search, Phone, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEOHead from '@/components/SEOHead';

const NotFoundPage = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found | StringSoft"
        description="The page you're looking for doesn't exist. Return to StringSoft's homepage to explore our veterinary practice management software."
        canonical="https://stringsoft.com/404"
        noIndex={true}
      />
      <div className="min-h-screen flex items-center justify-center bg-charcoal-black text-white relative overflow-hidden pt-20">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-brand-teal"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-deep-purple"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-light-purple"></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-4">
                404
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Page Not Found</h2>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                Oops! The page you're looking for seems to have wandered off like a curious cat.
                Don't worry – even the best veterinary practices sometimes lose track of things.
                Let's get you back on the right path.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link to="/">
                <Button variant="gradient" className="w-full sm:w-auto px-8 py-3">
                  <Home className="w-5 h-5 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Link to="/blog">
                <Button variant="outline" className="w-full sm:w-auto px-8 py-3 border-white/20 text-white hover:bg-white/10">
                  <Search className="w-5 h-5 mr-2" />
                  Browse Blog
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="w-full sm:w-auto px-8 py-3 border-white/20 text-white hover:bg-white/10">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Support
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white/60"
            >
              <div className="text-center">
                <h3 className="font-semibold text-white mb-2">Product</h3>
                <div className="space-y-1">
                  <Link to="/features" className="block hover:text-brand-teal transition-colors">Features</Link>
                  <Link to="/pricing" className="block hover:text-brand-teal transition-colors">Pricing</Link>
                  <Link to="/request-demo" className="block hover:text-brand-teal transition-colors">Demo</Link>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-white mb-2">Solutions</h3>
                <div className="space-y-1">
                  <Link to="/practice-types" className="block hover:text-brand-teal transition-colors">Practice Types</Link>
                  <Link to="/features" className="block hover:text-brand-teal transition-colors">Integrations</Link>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-white mb-2">Resources</h3>
                <div className="space-y-1">
                  <Link to="/blog" className="block hover:text-brand-teal transition-colors">Blog</Link>
                  <Link to="/support" className="block hover:text-brand-teal transition-colors">Support</Link>
                  <Link to="/faq" className="block hover:text-brand-teal transition-colors">FAQ</Link>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-white mb-2">Company</h3>
                <div className="space-y-1">
                  <Link to="/contact" className="block hover:text-brand-teal transition-colors">Contact</Link>
                  <Link to="/privacy-policy" className="block hover:text-brand-teal transition-colors">Privacy</Link>
                  <Link to="/terms-of-service" className="block hover:text-brand-teal transition-colors">Terms</Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 pt-8 border-t border-white/10 text-white/50"
            >
              <p>Still can't find what you're looking for?</p>
              <p className="mt-2">
                Call us at{' '}
                <a href="tel:1-800-481-2693" className="text-brand-teal hover:underline">
                  1-800-481-2693
                </a>
                {' '}or{' '}
                <Link to="/contact" className="text-brand-teal hover:underline">
                  send us a message
                </Link>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;