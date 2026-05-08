import React from 'react';
import { motion } from 'framer-motion';

interface RollingTextProps {
  text: string;
  className?: string;
}

export const RollingText: React.FC<RollingTextProps> = ({ text, className = '' }) => {
  return (
    <div className={`inline-flex overflow-hidden ${className}`}>
      {text.split('').map((char, i) => (
        <motion.div
          key={i}
          className="relative inline-block"
          whileHover={{ y: "-100%" }}
          transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
        >
          <span className="block h-full">{char === ' ' ? '\u00A0' : char}</span>
          <span className="absolute top-full left-0 block h-full text-[#00ff88]">
            {char === ' ' ? '\u00A0' : char}
          </span>
        </motion.div>
      ))}
    </div>
  );
};
