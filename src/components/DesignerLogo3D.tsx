import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

type DesignerLogo3DProps = {
  className?: string;
  compact?: boolean;
};

export const DesignerLogo3D = ({ className, compact = false }: DesignerLogo3DProps) => {
  return (
    <motion.div
      className={cn(
        'relative isolate flex items-center justify-center [perspective:900px]',
        compact ? 'h-28 w-28' : 'h-52 w-52 md:h-72 md:w-72',
        className
      )}
      initial={{ opacity: 0, rotateX: 18, rotateY: -22, y: 30 }}
      whileInView={{ opacity: 1, rotateX: 0, rotateY: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-[8%] rounded-full bg-[#00ff88]/20 blur-3xl" />
      <motion.div
        className={cn(
          'relative grid place-items-center rounded-[22px] border border-white/15 bg-black/70 shadow-[0_30px_90px_rgba(0,0,0,0.65)] [transform-style:preserve-3d]',
          compact ? 'h-20 w-20' : 'h-40 w-40 md:h-56 md:w-56'
        )}
        animate={{ rotateY: [0, 10, 0, -10, 0], rotateX: [0, -5, 0, 5, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 rounded-[22px] bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_35%,rgba(0,255,136,0.16))]" />
        <div className="absolute -inset-2 rounded-[26px] border border-[#00ff88]/25 [transform:translateZ(-28px)]" />
        <div className="absolute inset-5 rounded-[16px] border border-white/10 [transform:translateZ(18px)]" />
        <span
          className={cn(
            'relative font-black tracking-[-0.08em] text-white drop-shadow-[8px_12px_0_rgba(0,255,136,0.22)] [transform:translateZ(42px)]',
            compact ? 'text-4xl' : 'text-7xl md:text-8xl'
          )}
        >
          LD
        </span>
        <span className="absolute bottom-5 text-[9px] font-black uppercase tracking-[0.32em] text-[#00ff88] [transform:translateZ(36px)]">
          Studio
        </span>
      </motion.div>
    </motion.div>
  );
};
