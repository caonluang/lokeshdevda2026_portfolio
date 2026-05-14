import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxMarqueeProps {
  text: string;
  baseVelocity?: number;
  className?: string;
  direction?: 'left' | 'right';
}

export const ParallaxMarquee: React.FC<ParallaxMarqueeProps> = ({
  text,
  baseVelocity = 5,
  className = '',
  direction = 'left'
}) => {
  const { scrollY } = useScroll();
  const distance = baseVelocity * 200;
  const x = useTransform(scrollY, [0, 5000], [0, direction === 'left' ? -distance : distance]);

  return (
    <div className={`overflow-hidden whitespace-nowrap py-10 ${className}`}>
      <motion.div style={{ x }} className="flex whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-[12vw] font-black uppercase mx-8 opacity-10">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
