import React from 'react';
import { motion } from 'framer-motion';

interface TextGlowHoverProps {
  text: string;
  className?: string;
  glowColor?: string;
}

export const TextGlowHover: React.FC<TextGlowHoverProps> = ({
  text,
  className = '',
  glowColor = '#00ff88'
}) => {
  return (
    <motion.span
      className={`inline-block transition-all duration-300 cursor-none ${className}`}
      whileHover={{
        color: glowColor,
        textShadow: `0 0 20px ${glowColor}, 0 0 40px ${glowColor}`,
        scale: 1.05
      }}
    >
      {text}
    </motion.span>
  );
};
