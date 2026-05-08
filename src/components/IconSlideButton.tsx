import React from 'react';
import { motion } from 'framer-motion';

interface IconSlideButtonProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const IconSlideButton: React.FC<IconSlideButtonProps> = ({
  children,
  icon,
  className = '',
  onClick,
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={`relative group flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-full overflow-hidden cursor-none ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10 transition-transform duration-500 group-hover:-translate-x-3">
        {children}
      </span>
      
      <div className="absolute right-6 transition-all duration-500 transform translate-x-12 group-hover:translate-x-0 group-hover:opacity-100 opacity-0">
        {icon}
      </div>
      
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
    </motion.button>
  );
};
