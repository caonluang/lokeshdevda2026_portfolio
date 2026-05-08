import React from 'react';
import { motion } from 'framer-motion';

interface UnblurTextRevealProps {
  text: string;
  className?: string;
}

export const UnblurTextReveal: React.FC<UnblurTextRevealProps> = ({
  text,
  className = ''
}) => {
  return (
    <motion.span
      initial={{ filter: 'blur(10px)', opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={`inline-block ${className}`}
    >
      {text}
    </motion.span>
  );
};
