import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | StringSoft</title>
        <meta name="description" content="Read the StringSoft Privacy Policy to understand how we collect, use, and protect your personal and practice data." />
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
              <span className="gradient-text">Privacy Policy</span>
            </h1>
            <div className="prose prose-invert prose-lg max-w-none mx-auto space-y-6">
              <p>Last updated: September 19, 2025</p>
              <p>StringSoft Inc. ("us", "we", or "our") operates the StringSoft website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
              
              <h2>Information Collection and Use</h2>
              <p>We collect several different types of information for various purposes to provide and improve our Service to you. This may include, but is not limited to, your name, email address, phone number, and clinic information when you request a demo or contact us.</p>

              <h2>Data Use</h2>
              <p>StringSoft Inc. uses the collected data for various purposes: to provide and maintain the Service, to notify you about changes to our Service, to provide customer care and support, and to gather analysis or valuable information so that we can improve the Service.</p>

              <h2>Security of Data</h2>
              <p>The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

              <h2>Changes to This Privacy Policy</h2>
              <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;