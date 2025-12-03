import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, Users, Clock, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WebinarLandingPage = () => {
  const handleRegisterClick = () => {
    window.open('https://zoom.us/webinar/register/WN_xGy0uZVEQfudbZWZFF_zUQ', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>The Vet's Survival Guide to 2026 | StringSoft Webinar</title>
        <meta
          name="description"
          content="Join us for a webinar on tech that works for you, not the other way around. Learn how to streamline your veterinary practice operations."
        />
      </Helmet>

      <div className="pt-32 pb-20 bg-charcoal-black text-white">
        <div className="container mx-auto px-6">
          {/* Hero Image with Animation */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src="/images/webinar-hero.png"
              alt="The Vet's Survival Guide to 2026"
              className="max-w-4xl w-full rounded-2xl shadow-2xl"
              loading="eager"
              animate={{
                y: ["-8px", "8px", "-8px"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16 max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="gradient-text">The Vet's Survival Guide to 2026:</span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl font-semibold mb-8 text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Tech That Works for You, Not the Other Way Around
            </motion.h2>

            <motion.div
              className="flex flex-wrap justify-center gap-6 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-white/90">
                <Calendar className="w-5 h-5 text-brand-teal" />
                <span className="text-lg font-medium">December 9, 2025</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Clock className="w-5 h-5 text-brand-teal" />
                <span className="text-lg font-medium">1:00 PM EST</span>
              </div>
            </motion.div>

            <motion.p
              className="text-xl text-white/80 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Veterinary medicine isn't slowing down, but your technology should help you keep up — not hold you hostage with endless clicks and late-night notes. In this session, we'll unpack the tools, automations, and workflows helping modern clinics cut admin time, improve client communication, and finally get home before dinner gets cold.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mb-12"
            >
              <Button
                variant="gradient"
                size="lg"
                onClick={handleRegisterClick}
                className="px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
              >
                Register Now
              </Button>
            </motion.div>
          </motion.div>

          {/* What You'll Hear Section */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-brand-teal">What You'll Hear</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              You'll hear short, real-world stories from clinics that ditched outdated systems, embraced smarter workflows, and discovered what it feels like to actually run their practice instead of the other way around.
            </p>
          </motion.div>

          {/* Perfect For Section */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-brand-teal flex items-center">
              <Users className="w-6 h-6 mr-3" />
              Perfect For
            </h3>
            <ul className="space-y-4 text-left">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-white/80 text-lg">Practice owners and managers trying to streamline their operations</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-white/80 text-lg">Veterinarians tired of doing "just one more record" at midnight</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-white/80 text-lg">Tech-skeptics who suspect there must be a better way</span>
              </li>
            </ul>
          </motion.div>

          {/* Takeaways Section */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-brand-teal flex items-center">
              <TrendingUp className="w-6 h-6 mr-3" />
              Key Takeaways
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="w-10 h-10 bg-brand-teal rounded-full flex items-center justify-center text-white font-bold mb-4">
                  1
                </div>
                <h4 className="font-semibold mb-2 text-lg">Identify Bottlenecks</h4>
                <p className="text-white/70">How to identify workflow bottlenecks draining your team's time</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="w-10 h-10 bg-brand-teal rounded-full flex items-center justify-center text-white font-bold mb-4">
                  2
                </div>
                <h4 className="font-semibold mb-2 text-lg">Automation Sweet Spots</h4>
                <p className="text-white/70">The automation sweet spots that make the biggest difference</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="w-10 h-10 bg-brand-teal rounded-full flex items-center justify-center text-white font-bold mb-4">
                  3
                </div>
                <h4 className="font-semibold mb-2 text-lg">StringSoft Simplification</h4>
                <p className="text-white/70">How StringSoft simplifies scheduling, billing, and client communication</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="w-10 h-10 bg-brand-teal rounded-full flex items-center justify-center text-white font-bold mb-4">
                  4
                </div>
                <h4 className="font-semibold mb-2 text-lg">Practical Modernization</h4>
                <p className="text-white/70">Practical steps to modernize your clinic without a full system overhaul</p>
              </div>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <div className="bg-gradient-to-r from-brand-teal/10 via-deep-purple/10 to-light-orange/10 rounded-2xl p-8 max-w-4xl mx-auto border border-white/10">
              <Calendar className="w-12 h-12 text-brand-teal mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Don't Miss Out</h3>
              <p className="text-white/80 mb-6 text-lg">
                Reserve your spot today and discover how to reclaim your time and streamline your practice.
              </p>
              <Button
                variant="gradient"
                size="lg"
                onClick={handleRegisterClick}
                className="px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
              >
                Register for the Webinar
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default WebinarLandingPage;
