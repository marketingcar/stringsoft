import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroAnimationData from '@/assets/lottie/hero-animation.json';

const Hero = () => {
  const rotatingTexts = [
    "Simplified",
    "Clarified",
    "Untangled",
    "Calmed",
    "Focused",
    "Simplified",
    "Made Effortless"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-pattern overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-teal/10 rounded-full blur-xl floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-deep-purple/10 rounded-full blur-xl floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-light-orange/10 rounded-full blur-xl floating-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-16 md:pt-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-white">Veterinary Practice Management, </span>
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={currentTextIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="gradient-text rotating-text"
                  >
                    {rotatingTexts[currentTextIndex]}
                  </motion.span>
                </AnimatePresence>
              </motion.h1>

              <motion.p 
                className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Behind-the-scenes workflows designed for veterinary practices of every size.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link to="/request-demo">
                  <Button 
                    variant="gradient"
                    size="lg"
                    className="px-8 py-4 rounded-full text-lg"
                  >
                    See StringSoft in Action
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative flex justify-center items-center lg:-mx-24"
            >
              {heroAnimationData && Object.keys(heroAnimationData).length > 0 ? (
                <Lottie 
                  animationData={heroAnimationData} 
                  loop={true}
                  autoplay={true} 
                  className="w-full h-auto max-w-full md:max-w-xl lg:max-w-none transform lg:scale-125"
                />
              ) : (
                <div className="w-full h-64 flex items-center justify-center text-white/70 text-center">
                  <p>Paste your Lottie animation JSON into `src/assets/lottie/hero-animation.json` to see it here!</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;