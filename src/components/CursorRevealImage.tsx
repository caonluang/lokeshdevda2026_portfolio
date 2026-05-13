import React, { useRef } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

interface CursorRevealImageProps {
  src: string; // Color/reveal image
  graySrc?: string; // Optional grayscale version — computed via CSS filter if not provided
  alt?: string;
  className?: string;
  cursorSize?: number; // px, default 220
}

/**
 * CursorRevealImage
 * Shows a grayscale image by default; where the cursor is, the full-color version is revealed
 * through a circular mask — matching the Framer "Cursor Mask Reveal" marketplace component.
 */
export const CursorRevealImage: React.FC<CursorRevealImageProps> = ({
  src,
  alt = '',
  className = '',
  cursorSize = 220,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(-999);
  const rawY = useMotionValue(-999);
  const x = useSpring(rawX, { stiffness: 200, damping: 25 });
  const y = useSpring(rawY, { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    rawX.set(e.clientX - rect.left);
    rawY.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden select-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        rawX.set(-999);
        rawY.set(-999);
      }}
    >
      {/* Bottom layer: grayscale */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ filter: 'grayscale(100%) contrast(1.1)' }}
        draggable={false}
      />

      {/* Top layer: full color, revealed by cursor circle mask */}
      <div className="absolute inset-0">
        {/* We use a JS-driven mask since motion values can't directly drive CSS mask-image strings */}
        <MaskedColorLayer src={src} alt={alt} x={x} y={y} radius={cursorSize / 2} />
      </div>
    </div>
  );
};

// Sub-component using a canvas-style div mask approach
const MaskedColorLayer: React.FC<{
  src: string;
  alt: string;
  x: ReturnType<typeof useSpring>;
  y: ReturnType<typeof useSpring>;
  radius: number;
}> = ({ src, alt, x, y, radius }) => {
  const [pos, setPos] = React.useState({ x: -999, y: -999 });

  React.useEffect(() => {
    const unsubX = x.on('change', () => setPos({ x: x.get(), y: y.get() }));
    const unsubY = y.on('change', () => setPos({ x: x.get(), y: y.get() }));
    return () => { unsubX(); unsubY(); };
  }, [x, y]);

  return (
    <div
      className="absolute inset-0"
      style={{
        WebkitMaskImage: `radial-gradient(circle ${radius}px at ${pos.x}px ${pos.y}px, black 60%, transparent 100%)`,
        maskImage: `radial-gradient(circle ${radius}px at ${pos.x}px ${pos.y}px, black 60%, transparent 100%)`,
      }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" draggable={false} />
    </div>
  );
};
