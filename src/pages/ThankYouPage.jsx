import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThankYouPage = () => {
  return (
    <>
      <Helmet>
        <title>Thank You | StringSoft</title>
        <meta name="description" content="Thank you for contacting StringSoft. We'll be in touch soon!" />
      </Helmet>
      <div className="pt-32 pb-20 bg-charcoal-black text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <motion.div
              className="flex justify-center mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            >
              <div className="w-24 h-24 bg-brand-teal rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="gradient-text">Thank You!</span>
            </motion.h1>

            <motion.p
              className="text-xl text-white/80 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              We've received your message and appreciate you reaching out to StringSoft.
            </motion.p>

            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-brand-teal">What Happens Next?</h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <div className="w-8 h-8 bg-brand-teal rounded-full flex items-center justify-center text-white font-bold mb-3">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">We Review Your Request</h3>
                  <p className="text-white/70 text-sm">Our team will carefully review your message within 1 business day.</p>
                </div>
                <div>
                  <div className="w-8 h-8 bg-brand-teal rounded-full flex items-center justify-center text-white font-bold mb-3">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">Personal Response</h3>
                  <p className="text-white/70 text-sm">A StringSoft specialist will reach out to discuss your needs.</p>
                </div>
                <div>
                  <div className="w-8 h-8 bg-brand-teal rounded-full flex items-center justify-center text-white font-bold mb-3">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Custom Solution</h3>
                  <p className="text-white/70 text-sm">We'll work together to find the perfect solution for your practice.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center space-x-3 mb-3">
                  <Phone className="w-5 h-5 text-brand-teal" />
                  <h3 className="font-semibold">Need Immediate Help?</h3>
                </div>
                <p className="text-white/70 text-sm mb-3">For urgent matters, call us directly:</p>
                <a href="tel:8004812693" className="text-brand-teal hover:text-brand-teal/80 font-semibold">
                  800.481.2693
                </a>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center space-x-3 mb-3">
                  <Mail className="w-5 h-5 text-brand-teal" />
                  <h3 className="font-semibold">Email Support</h3>
                </div>
                <p className="text-white/70 text-sm mb-3">You can also reach us at:</p>
                <a href="mailto:info@stringsoft.com" className="text-brand-teal hover:text-brand-teal/80 font-semibold">
                  info@stringsoft.com
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.history.back()}
                className="px-6 py-3 rounded-full"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
              <Button
                variant="gradient"
                size="lg"
                onClick={() => window.location.href = '/'}
                className="px-6 py-3 rounded-full"
              >
                Return to Home
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <motion.img
              src="/images/thankyou.png"
              alt="Stringsoft saying thank you"
              className="max-w-xs opacity-80"
              loading="lazy"
              animate={{
                y: ["-5px", "5px", "-5px"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;