import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Book3DProps {
  title: string;
  cover: string;
  className?: string;
}

export const Book3D: React.FC<Book3DProps> = ({ title, cover, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative w-[280px] h-[400px] perspective-[1500px] cursor-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-700 transform-style-3d"
        animate={{
          rotateY: isHovered ? -30 : -5,
          rotateX: isHovered ? 5 : 0,
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Pages */}
        <div className="absolute inset-0 bg-white rounded-r-lg shadow-2xl translate-z-[-20px]" />
        <div className="absolute inset-0 bg-white rounded-r-lg shadow-2xl translate-z-[-10px]" />
        
        {/* Cover */}
        <div 
          className="absolute inset-0 rounded-r-lg bg-cover bg-center overflow-hidden shadow-2xl origin-left"
          style={{ backgroundImage: `url(${cover})` }}
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
            <h3 className="text-white text-3xl font-black uppercase tracking-tighter drop-shadow-lg">
              {title}
            </h3>
          </div>
          {/* Spine glow */}
          <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-r from-black/40 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
};
