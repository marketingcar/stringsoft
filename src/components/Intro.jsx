import React from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <section className="py-20 bg-charcoal-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xl md:text-2xl leading-relaxed text-white/90">
            Managing a veterinary practice shouldn't mean juggling disconnected systems. 
            <span className="gradient-text font-semibold"> StringSoft is built for animal health professionals</span>, 
            combining medical records, scheduling, imaging, labs, billing, and client communication into one seamless platform. 
            With AI-powered insights and veterinary-specific workflows, you can spend more time with patients and less time on paperwork.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;