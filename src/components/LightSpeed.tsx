import { useRef, useCallback, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface Beam {
  x: number;
  y: number;
  z: number;
  len: number;
  speed: number;
}

export const LightSpeed = ({ color = '#0070f3', intensity = 1 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const beams = useRef<Beam[]>([]);
  const requestRef = useRef<number | null>(null);
  const [isSpeeding, setIsSpeeding] = useState(false);

  const initBeams = useCallback((w: number, h: number) => {
    beams.current = Array.from({ length: 200 }, () => ({
      x: Math.random() * w - w / 2,
      y: Math.random() * h - h / 2,
      z: Math.random() * w,
      len: Math.random() * 20 + 10,
      speed: Math.random() * 5 + 2,
    }));
  }, []);

  const draw = useCallback((ctx: CanvasRenderingContext2D, w: number, h: number) => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
    ctx.fillRect(0, 0, w, h);

    const boost = isSpeeding ? 8 : 1;
    const currentIntensity = intensity * boost;

    beams.current.forEach((beam) => {
      beam.z -= beam.speed * currentIntensity;
      if (beam.z <= 0) {
        beam.z = w;
        beam.x = Math.random() * w - w / 2;
        beam.y = Math.random() * h - h / 2;
      }

      const x = (beam.x / beam.z) * w + w / 2;
      const y = (beam.y / beam.z) * h + h / 2;
      const size = (1 - beam.z / w) * 3;
      const length = (1 - beam.z / w) * beam.len * currentIntensity;

      // Draw beam
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = size;
      ctx.lineCap = 'round';
      
      const angle = Math.atan2(y - h / 2, x - w / 2);
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length);
      ctx.stroke();

      // Add a glow effect for high intensity
      if (currentIntensity > 2) {
        ctx.shadowBlur = 15;
        ctx.shadowColor = color;
      } else {
        ctx.shadowBlur = 0;
      }
    });

    requestRef.current = requestAnimationFrame(() => draw(ctx, w, h));
  }, [color, intensity, isSpeeding]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initBeams(canvas.width, canvas.height);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    requestRef.current = requestAnimationFrame(() => draw(ctx, canvas.width, canvas.height));

    return () => {
      window.removeEventListener('resize', handleResize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [draw, initBeams]);

  return (
    <div 
      className="relative w-full h-full cursor-pointer"
      onMouseDown={() => setIsSpeeding(true)}
      onMouseUp={() => setIsSpeeding(false)}
      onMouseLeave={() => setIsSpeeding(false)}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export const LightSpeedSection = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  // Color transition: Deep Blue -> Cyan -> White -> Pink -> Red
  const color = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.5, 0.7, 0.9],
    ["#0033ff", "#00ffff", "#ffffff", "#ff00ff", "#ff0000"]
  );

  // Intensity increases towards the middle
  const intensity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.5, 4, 0.5]
  );
  
  // Spring for smoother transitions
  const smoothIntensity = useSpring(intensity, { stiffness: 50, damping: 20 });

  const [currentColor, setCurrentColor] = useState("#0033ff");
  const [currentIntensity, setCurrentIntensity] = useState(0.5);

  useEffect(() => {
    const unsubColor = color.on("change", v => setCurrentColor(v));
    const unsubIntensity = smoothIntensity.on("change", v => setCurrentIntensity(v));
    return () => {
      unsubColor();
      unsubIntensity();
    };
  }, [color, smoothIntensity]);

  return (
    <section ref={container} className="relative h-[300vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <LightSpeed color={currentColor} intensity={currentIntensity} />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0.1, 0.2], [0, 1]) }}
            className="mb-4 text-[#00ff88] tracking-[0.4em] text-xs font-bold uppercase"
          >
            Entering Warp Drive
          </motion.div>
          
          <motion.h2 
            style={{ 
              color: currentColor,
              scale: useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0.8, 1.2, 0.8]),
              filter: `drop-shadow(0 0 30px ${currentColor})`
            }}
            className="text-[15vw] font-black uppercase leading-none italic"
          >
            SPEED
          </motion.h2>

          <div className="absolute bottom-20 text-white/30 text-sm uppercase tracking-widest animate-pulse">
            Click & Hold to Boost
          </div>
        </div>
      </div>
    </section>
  );
};
