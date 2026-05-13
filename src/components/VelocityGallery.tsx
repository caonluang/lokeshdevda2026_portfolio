import React, { useRef, useState, ReactNode } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  AnimatePresence
} from 'framer-motion';

// Wrap utility to handle infinite looping calculation
function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

interface ScrollVelocityRowProps {
  children: ReactNode;
  baseVelocity?: number;
  direction?: number;
  scrollSensitivity?: number;
}

function ScrollVelocityRow({ children, baseVelocity = 5, direction = 1, scrollSensitivity = 5 }: ScrollVelocityRowProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });

  // Allow positive & negative scroll influence based on scroll speed
  const velocityFactor = useTransform(smoothVelocity, [-1000, 1000], [-scrollSensitivity, scrollSensitivity], { clamp: false });

  // Wrap X between -50% and 0% (since we duplicate children twice, moving 50% means we shifted one full set)
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const directionFactor = useRef(direction);

  useAnimationFrame((t, delta) => {
    void t;
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    const velocity = velocityFactor.get();
    moveBy += directionFactor.current * velocity * (delta / 100);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex">
      <motion.div
        className="flex whitespace-nowrap gap-4 md:gap-6"
        style={{ x }}
        drag="x"
        dragElastic={0.2}
        dragMomentum={false}
        onDrag={(event, info) => {
          void event;
          baseX.set(baseX.get() + info.delta.x / 10);
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export interface GalleryImage {
  id: string;
  src: string;
  alt?: string;
  colSpan?: number;
  rowSpan?: number;
}

interface VelocityGalleryProps {
  rowAImages: GalleryImage[];
  rowBImages: GalleryImage[];
  rowAVelocity?: number;
  rowBVelocity?: number;
  scrollSensitivity?: number;
  imageWidth?: number | string;
  imageHeight?: number | string;
  borderRadius?: number;
  showGradients?: boolean;
}

export const VelocityGallery: React.FC<VelocityGalleryProps> = ({
  rowAImages,
  rowBImages,
  rowAVelocity = 20,
  rowBVelocity = 20,
  scrollSensitivity = 5,
  imageWidth = 400,
  imageHeight = 260,
  borderRadius = 16,
  showGradients = true,
}) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const renderImages = (images: GalleryImage[]) =>
    images.map((img) => (
      <div
        key={img.id}
        onClick={() => setSelectedImage(img)}
        className="inline-block flex-shrink-0 cursor-pointer overflow-hidden group"
        style={{ width: imageWidth, height: imageHeight, borderRadius }}
      >
        <img
          src={img.src}
          alt={img.alt || 'Gallery image'}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          draggable={false}
          loading="lazy"
        />
      </div>
    ));

  return (
    <div className="relative w-full flex flex-col justify-center overflow-hidden py-10">
      
      {/* Scroll Rows */}
      <div className="w-full flex flex-col gap-4 md:gap-6">
        <ScrollVelocityRow baseVelocity={rowAVelocity} direction={-1} scrollSensitivity={scrollSensitivity}>
          <div className="flex gap-4 md:gap-6 px-2 md:px-3">
            {renderImages(rowAImages)}
          </div>
        </ScrollVelocityRow>
        
        <ScrollVelocityRow baseVelocity={rowBVelocity} direction={1} scrollSensitivity={scrollSensitivity}>
          <div className="flex gap-4 md:gap-6 px-2 md:px-3">
            {renderImages(rowBImages)}
          </div>
        </ScrollVelocityRow>
      </div>

      {/* Cinematic Fade Gradients */}
      {showGradients && (
        <>
          <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-[#050505] to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-[#050505] to-transparent pointer-events-none z-10" />
        </>
      )}

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-6 md:p-20"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
