import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface TextPressureProps {
  text: string;
  className?: string;
  flexibility?: number; // How much it expands
}

export const TextPressure: React.FC<TextPressureProps> = ({
  text,
  className = '',
  flexibility = 0.5
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(Infinity);
  const mouseY = useMotionValue(Infinity);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className={`flex flex-wrap gap-x-2 ${className}`}>
      {text.split(' ').map((word, i) => (
        <Word key={i} word={word} mouseX={mouseX} mouseY={mouseY} flexibility={flexibility} />
      ))}
    </div>
  );
};

const Word: React.FC<{ word: string, mouseX: any, mouseY: any, flexibility: number }> = ({ word, mouseX, mouseY, flexibility }) => {
  const wordRef = useRef<HTMLDivElement>(null);
  const scaleX = useSpring(1, { stiffness: 200, damping: 20 });

  useEffect(() => {
    return mouseX.on('change', (x: number) => {
      if (!wordRef.current) return;
      const rect = wordRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(mouseY.get() - centerY, 2));
      
      const maxDist = 200;
      if (distance < maxDist) {
        const factor = 1 + (1 - distance / maxDist) * flexibility;
        scaleX.set(factor);
      } else {
        scaleX.set(1);
      }
    });
  }, [mouseX, mouseY, flexibility, scaleX]);

  return (
    <motion.div
      ref={wordRef}
      style={{ scaleX, originX: 0.5 }}
      className="inline-block"
    >
      {word}
    </motion.div>
  );
};
