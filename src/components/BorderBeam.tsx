import React, { useRef, useState, ReactNode } from 'react';
import { useAnimationFrame } from 'framer-motion';

interface BorderBeamProps {
  children: ReactNode;
  className?: string;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  duration?: number; // seconds for one full orbit
  borderRadius?: string;
}

/**
 * BorderBeam
 * A glowing beam of light animates around the border of a card.
 * Mirrors the Framer Border Beam marketplace component by Sumit Chakraborty.
 */
export const BorderBeam: React.FC<BorderBeamProps> = ({
  children,
  className = '',
  borderWidth = 2,
  colorFrom = '#00ff88',
  colorTo = '#ffffff',
  duration = 3,
  borderRadius = '1rem',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [beamPos, setBeamPos] = useState({ x: 0, y: 0 });

  // Compute beam position along the perimeter
  useAnimationFrame((t) => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const W = el.offsetWidth;
    const H = el.offsetHeight;
    const perimeter = 2 * (W + H);
    const pos = ((t / 1000 / duration) % 1) * perimeter;

    let x = 0, y = 0;
    if (pos < W) {
      x = pos; y = 0; // top edge
    } else if (pos < W + H) {
      x = W; y = pos - W; // right edge
    } else if (pos < 2 * W + H) {
      x = W - (pos - W - H); y = H; // bottom edge
    } else {
      x = 0; y = H - (pos - 2 * W - H); // left edge
    }
    setBeamPos({ x, y });
  });

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ borderRadius }}
    >
      {/* Glow beam */}
      <div
        className="absolute pointer-events-none z-10"
        style={{
          left: beamPos.x - 40,
          top: beamPos.y - 40,
          width: 80,
          height: 80,
          background: `radial-gradient(circle, ${colorFrom} 0%, ${colorTo}44 50%, transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(8px)',
          transition: 'left 0.016s, top 0.016s',
        }}
      />
      {/* Animated border via gradient */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          borderRadius,
          border: `${borderWidth}px solid transparent`,
          background: `linear-gradient(#050505, #050505) padding-box, linear-gradient(135deg, ${colorFrom}33, transparent 50%, ${colorTo}33) border-box`,
        }}
      />
      {/* Content */}
      <div className="relative z-[1]">{children}</div>
    </div>
  );
};
