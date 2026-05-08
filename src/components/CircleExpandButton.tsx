import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CircleExpandButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const CircleExpandButton: React.FC<CircleExpandButtonProps> = ({
  children,
  icon,
  className = '',
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative flex items-center gap-2 px-6 py-3 bg-[#00ff88] text-black font-bold rounded-full overflow-hidden group cursor-none ${className}`}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 transition-transform duration-500 group-hover:-translate-x-1">
        {children}
      </span>
      
      {icon && (
        <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
          {icon}
        </span>
      )}

      {/* The expanding circle */}
      <motion.div
        initial={{ scale: 0, x: '-50%', y: '-50%' }}
        animate={{ 
          scale: isHovered ? 4 : 0,
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }}
        className="absolute top-1/2 left-1/2 w-10 h-10 bg-white rounded-full pointer-events-none"
      />
    </motion.button>
  );
};
