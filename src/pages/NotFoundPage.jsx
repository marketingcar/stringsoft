import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404: Page Not Found | StringSoft</title>
        <meta name="description" content="Oops! The page you are looking for does not exist. Return to the StringSoft homepage." />
      </Helmet>
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center hero-pattern overflow-hidden text-center">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-8xl md:text-9xl font-bold mb-4">
              <span className="gradient-text">404</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Oops! Page Not Found.
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              It looks like the page you're searching for has wandered off. Let's get you back on track.
            </p>
            <Button
              asChild
              variant="gradient"
              size="lg"
              className="px-8 py-4 rounded-full text-lg"
            >
              <Link to="/">Return to Home</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;