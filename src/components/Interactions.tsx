import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import React, { useRef, useState } from 'react';

export const MagneticButton = ({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ripple = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      id: Date.now(),
    };
    setRipples((prev) => [...prev, ripple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
    }, 600);
    onClick?.();
  };

  const ref = useRef<HTMLButtonElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Optimized spring for natural physics (Interaction Design Principle)
  const springConfig = { damping: 17, stiffness: 400 }; 
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{ x: springX, y: springY }}
      className={`relative overflow-hidden ${className}`}
    >
      <span className="relative z-10 pointer-events-none">{children}</span>
      <AnimatePresence>
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute bg-white/20 rounded-full animate-ripple pointer-events-none"
            style={{ 
              left: ripple.x, 
              top: ripple.y,
              width: 100,
              height: 100,
              marginLeft: -50,
              marginTop: -50
            }}
          />
        ))}
      </AnimatePresence>
    </motion.button>
  );
};

export const CursorTrail = () => {
  const [points, setPoints] = React.useState<{ x: number; y: number; id: number }[]>([]);
  
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPoint = { x: e.clientX, y: e.clientY, id: Date.now() };
      setPoints(prev => [...prev.slice(-15), newPoint]);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[999]">
      {points.map((point) => (
        <motion.div
          key={point.id}
          className="absolute w-1.5 h-1.5 bg-[#00FF88] rounded-full blur-[1px]"
          initial={{ opacity: 0.5, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          style={{ left: point.x - 3, top: point.y - 3 }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </div>
  );
};
