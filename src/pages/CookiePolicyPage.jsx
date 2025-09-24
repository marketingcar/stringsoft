import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const CookiePolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | StringSoft</title>
        <meta name="description" content="Read the StringSoft Cookie Policy to understand how and why we use cookies on our website to improve your experience." />
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
              <span className="gradient-text">Cookie Policy</span>
            </h1>
            <div className="prose prose-invert prose-lg max-w-none mx-auto space-y-6">
              <p>Last updated: September 19, 2025</p>
              <p>StringSoft Inc. ("us", "we", or "our") uses cookies on the StringSoft website (the "Service"). By using the Service, you consent to the use of cookies.</p>
              
              <h2>What are cookies</h2>
              <p>Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.</p>

              <h2>How StringSoft uses cookies</h2>
              <p>When you use and access the Service, we may place a number of cookies files in your web browser. We use cookies for the following purposes: to enable certain functions of the Service, to provide analytics, to store your preferences.</p>

              <h2>Your choices regarding cookies</h2>
              <p>If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CookiePolicyPage;