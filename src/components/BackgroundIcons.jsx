import React from 'react';
import { motion } from 'framer-motion';

const AnimatedIcon = ({ className, animate, transition }) => (
  <motion.div
    className={`absolute opacity-[0.03] ${className}`}
    animate={animate}
    transition={transition}
  >
    <img
      src="/images/decorative-background-icons.png"
      alt="Subtle background icon"
      className="w-full h-full"
      loading="lazy"
    />
  </motion.div>
);

const BackgroundIcons = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatedIcon
        className="w-64 h-64 top-[10%] left-[-5%]"
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
      />
      <AnimatedIcon
        className="w-96 h-96 top-[50%] right-[-10%]"
        animate={{ rotate: -360 }}
        transition={{ duration: 150, repeat: Infinity, ease: 'linear' }}
      />
      <AnimatedIcon
        className="w-48 h-48 bottom-[5%] left-[20%]"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      />
       <AnimatedIcon
        className="w-72 h-72 bottom-[-20%] right-[15%]"
        animate={{ rotate: -360 }}
        transition={{ duration: 130, repeat: Infinity, ease: 'linear' }}
      />
      <AnimatedIcon
        className="w-80 h-80 top-[120vh] left-[5%]"
        animate={{ rotate: 360 }}
        transition={{ duration: 140, repeat: Infinity, ease: 'linear' }}
      />
      <AnimatedIcon
        className="w-56 h-56 top-[180vh] right-[5%]"
        animate={{ rotate: -360 }}
        transition={{ duration: 110, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
};

export default BackgroundIcons;