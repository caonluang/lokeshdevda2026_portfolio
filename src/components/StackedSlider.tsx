import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StackedSliderItem {
  id: string;
  src: string;
  title: string;
  category: string;
}

interface StackedSliderProps {
  items: StackedSliderItem[];
  className?: string;
}

export const StackedSlider: React.FC<StackedSliderProps> = ({ items, className = '' }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % items.length);

  return (
    <div className={`relative h-[600px] w-full flex items-center justify-center ${className}`}>
      <div className="relative w-full max-w-lg h-full flex items-center justify-center">
        <AnimatePresence initial={false}>
          {items.map((item, i) => {
            const isTop = i === index;
            const isSecond = i === (index + 1) % items.length;
            const isThird = i === (index + 2) % items.length;

            if (!isTop && !isSecond && !isThird) return null;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{
                  opacity: isTop ? 1 : isSecond ? 0.6 : 0.3,
                  scale: isTop ? 1 : isSecond ? 0.9 : 0.8,
                  y: isTop ? 0 : isSecond ? -40 : -80,
                  zIndex: isTop ? 10 : isSecond ? 5 : 2,
                }}
                exit={{ opacity: 0, x: 500, rotate: 20, transition: { duration: 0.5 } }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl cursor-none"
                onClick={next}
              >
                <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-10">
                  <span className="text-[#00ff88] text-sm font-bold uppercase tracking-widest mb-2">{item.category}</span>
                  <h3 className="text-white text-4xl font-black uppercase tracking-tighter">{item.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Instruction */}
      <div className="absolute bottom-[-40px] text-white/40 text-xs uppercase tracking-widest animate-pulse">
        Click the card to shuffle
      </div>
    </div>
  );
};
