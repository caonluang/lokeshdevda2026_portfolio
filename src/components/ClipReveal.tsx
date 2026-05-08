import React from 'react';
import { motion } from 'framer-motion';

interface ClipRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const ClipReveal: React.FC<ClipRevealProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '100%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-[#00ff88] origin-top z-10 pointer-events-none"
      />
    </div>
  );
};
