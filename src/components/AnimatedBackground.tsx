import React from 'react';
import { motion } from 'framer-motion';
import { GravityParticles } from './GravityParticles';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050505] pointer-events-none">
      {/* SVG Noise Texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] mix-blend-overlay z-10 pointer-events-none">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      {/* Gravity Particles — mouse-reactive */}
      <GravityParticles count={50} colors={['#00ff88', '#ffffff', '#7B61FF']} maxRadius={2} speed={0.3} />

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 opacity-30 mix-blend-screen blur-[120px] z-0">
        <motion.div
          animate={{ x: ['0%', '20%', '-20%', '0%'], y: ['0%', '-20%', '20%', '0%'], scale: [1, 1.2, 0.8, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#1a0033]"
        />
        <motion.div
          animate={{ x: ['0%', '-30%', '30%', '0%'], y: ['0%', '30%', '-30%', '0%'], scale: [1, 1.5, 0.9, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear', delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#001133]"
        />
        <motion.div
          animate={{ x: ['0%', '40%', '-40%', '0%'], y: ['0%', '10%', '-10%', '0%'], scale: [1, 0.8, 1.2, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear', delay: 5 }}
          className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-[#00ff88] opacity-10"
        />
      </div>

      {/* Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.12] z-0"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};
