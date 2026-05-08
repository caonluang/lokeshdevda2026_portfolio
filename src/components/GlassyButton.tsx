import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GlassyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'neon' | 'white';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const variants = {
  default: 'bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/40',
  neon: 'bg-[#00ff88]/10 border-[#00ff88]/40 text-[#00ff88] hover:bg-[#00ff88]/20',
  white: 'bg-white/90 border-white text-black hover:bg-white',
};
const sizes = {
  sm: 'px-5 py-2.5 text-xs',
  md: 'px-7 py-3.5 text-sm',
  lg: 'px-10 py-5 text-base',
};

export const GlassyButton: React.FC<GlassyButtonProps> = ({
  children,
  variant = 'default',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`
        relative flex items-center gap-2.5 rounded-full border backdrop-blur-md font-bold
        tracking-widest uppercase overflow-hidden transition-colors duration-300 cursor-none
        ${variants[variant]} ${sizes[size]} ${className}
      `}
      {...(props as any)}
    >
      {/* Animated shimmer */}
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '200%', opacity: 0.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12"
          />
        )}
      </AnimatePresence>

      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === 'right' && (
        <motion.span
          animate={{ x: isHovered ? 4 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          {icon}
        </motion.span>
      )}
    </motion.button>
  );
};
