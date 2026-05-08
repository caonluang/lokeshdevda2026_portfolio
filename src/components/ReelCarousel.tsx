import React from 'react';
import { motion } from 'framer-motion';

interface ReelItem {
  id: string;
  src: string;
}

interface ReelCarouselProps {
  items: ReelItem[];
  speed?: number;
  className?: string;
  reverse?: boolean;
}

export const ReelCarousel: React.FC<ReelCarouselProps> = ({ 
  items, 
  speed = 40, 
  className = '',
  reverse = false
}) => {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className={`relative h-full overflow-hidden ${className}`}>
      <motion.div
        animate={{
          y: reverse ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col gap-4"
      >
        {duplicatedItems.map((item, i) => (
          <div key={`${item.id}-${i}`} className="w-full aspect-[3/4] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
            <img src={item.src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </motion.div>
      
      {/* Fade overlays */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#050505] to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-10" />
    </div>
  );
};
