import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Carousel3DItem {
  id: string;
  src: string;
  title: string;
}

interface Carousel3DProps {
  items: Carousel3DItem[];
  className?: string;
}

export const Carousel3D: React.FC<Carousel3DProps> = ({ items, className = '' }) => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % items.length);
  const prev = () => setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));

  return (
    <div className={`relative h-[500px] w-full flex items-center justify-center overflow-hidden ${className}`}>
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <AnimatePresence initial={false}>
          {items.map((item, i) => {
            const offset = (i - index + items.length) % items.length;
            const isCenter = offset === 0;
            const isLeft = offset === items.length - 1;
            const isRight = offset === 1;

            if (!isCenter && !isLeft && !isRight) return null;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 0, scale: 0.5, rotateY: 0 }}
                animate={{
                  opacity: isCenter ? 1 : 0.4,
                  x: isCenter ? 0 : isLeft ? -300 : 300,
                  scale: isCenter ? 1 : 0.8,
                  rotateY: isCenter ? 0 : isLeft ? 45 : -45,
                  zIndex: isCenter ? 10 : 5,
                }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-[300px] md:w-[450px] aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
                onClick={() => {
                  if (isLeft) prev();
                  if (isRight) next();
                }}
              >
                <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                  <h3 className="text-white text-2xl font-black uppercase tracking-tighter">{item.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute bottom-10 flex gap-6 z-20">
        <button onClick={prev} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-none">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </button>
        <button onClick={next} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all cursor-none">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
    </div>
  );
};
