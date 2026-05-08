import React from 'react';
import { motion } from 'framer-motion';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const GlowCard: React.FC<GlowCardProps> = ({ 
  children, 
  className = '',
  glowColor = '#00ff88' 
}) => {
  return (
    <motion.div
      className={`relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden ${className}`}
      whileHover={{ 
        scale: 1.02,
        borderColor: `${glowColor}40`,
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated gradient background on hover */}
      <motion.div
        className="absolute inset-0 opacity-0"
        whileHover={{ opacity: 1 }}
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColor}10, transparent 40%)`,
        }}
      />
      
      {/* Glow border effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 20px ${glowColor}20, 0 0 20px ${glowColor}10`,
        }}
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
