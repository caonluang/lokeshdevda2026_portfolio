import React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface LiquidImageProps {
  src: string;
  alt?: string;
  className?: string;
  intensity?: number; // distortion amount 1-30
}

/** Mirrors Framer Liquid Image — hover produces a wave/liquid distortion effect via CSS filter */
export const LiquidImage: React.FC<LiquidImageProps> = ({
  src,
  alt = '',
  className = '',
  intensity = 15,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 100, damping: 20 });

  const scaleX = useMotionValue(1);
  const scaleY = useMotionValue(1);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(nx * intensity);
    y.set(ny * intensity);
    rotateX.set(-ny * intensity * 0.5);
    rotateY.set(nx * intensity * 0.5);
    scaleX.set(1 + Math.abs(nx) * 0.03);
    scaleY.set(1 + Math.abs(ny) * 0.03);
  };

  const handleMouseLeave = () => {
    x.set(0); y.set(0);
    rotateX.set(0); rotateY.set(0);
    scaleX.set(1); scaleY.set(1);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
      style={{ perspective: 800 }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover will-change-transform"
        style={{
          rotateX,
          rotateY,
          scaleX,
          scaleY,
          transformStyle: 'preserve-3d',
          transition: 'filter 0.3s',
        }}
        whileHover={{ filter: 'saturate(1.2) brightness(1.05)' }}
        draggable={false}
      />
      {/* Liquid sheen overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08) 0%, transparent 70%)',
          opacity: 0,
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};
