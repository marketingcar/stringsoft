import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const TermsOfServicePage = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | StringSoft</title>
        <meta name="description" content="Read the StringSoft Terms of Service. This document governs your use of our website and services." />
      </Helmet>
      <div className="pt-32 pb-20 bg-charcoal-black text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
              <span className="gradient-text">Terms of Service</span>
            </h1>
            <div className="prose prose-invert prose-lg max-w-none mx-auto space-y-6">
              <p>Last updated: September 19, 2025</p>
              <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the StringSoft website (the "Service") operated by StringSoft Inc. ("us", "we", or "our").</p>
              
              <h2>Accounts</h2>
              <p>When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>

              <h2>Intellectual Property</h2>
              <p>The Service and its original content, features, and functionality are and will remain the exclusive property of StringSoft Inc. and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>

              <h2>Termination</h2>
              <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

              <h2>Governing Law</h2>
              <p>These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default TermsOfServicePage;