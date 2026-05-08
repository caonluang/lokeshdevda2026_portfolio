import { motion } from 'framer-motion';

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
}

export const FlipCard = ({ front, back, className = '' }: FlipCardProps) => {
  return (
    <motion.div
      className={`group relative w-full h-full [perspective:1000px] ${className}`}
      whileHover="flip"
      initial="initial"
    >
      <motion.div
        className="relative w-full h-full rounded-xl [transform-style:preserve-3d]"
        variants={{
          initial: { rotateY: 0 },
          flip: { rotateY: 180 }
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Front Face */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl overflow-hidden">
          {front}
        </div>
        
        {/* Back Face */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl overflow-hidden">
          {back}
        </div>
      </motion.div>
    </motion.div>
  );
};
