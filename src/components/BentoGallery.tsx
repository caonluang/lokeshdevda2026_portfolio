import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  alt?: string;
  colSpan?: number;
  rowSpan?: number;
}

interface BentoGalleryProps {
  images: GalleryImage[];
  columns?: number;
  gap?: number;
  borderRadius?: number;
  enableLightbox?: boolean;
}

export const BentoGallery: React.FC<BentoGalleryProps> = ({
  images,
  columns = 4,
  gap = 16,
  borderRadius = 24,
  enableLightbox = true,
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lightbox keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentIndex]);

  const openLightbox = (index: number) => {
    if (!enableLightbox) return;
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      <div 
        className="w-full grid"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          gap: `${gap}px`
        }}
      >
        {images.map((image, index) => {
          // Responsive spans: on mobile, everything spans 1 column (effectively stacked)
          // On tablet/desktop, use the specified spans
          const colSpan = image.colSpan || 1;
          const rowSpan = image.rowSpan || 1;

          return (
            <motion.div
              key={image.id}
              onClick={() => openLightbox(index)}
              className="relative group overflow-hidden bg-[#1A1A1A] cursor-pointer"
              style={{
                borderRadius: `${borderRadius}px`,
                // We use inline styles for grid column/row because Tailwind dynamic classes can be tricky
                gridColumn: `span ${colSpan}`,
                gridRow: `span ${rowSpan}`,
                // Ensuring a base aspect ratio or min-height so cells aren't empty
                minHeight: '200px'
              }}
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                className="absolute inset-0 w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={image.src}
                  alt={image.alt || `Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </motion.div>
              {/* Optional: Overlay gradient to make it look premium */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && enableLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-6 p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors z-50"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-6 p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors z-50"
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}

            {/* Image Container */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl max-h-[85vh] px-4 md:px-16"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt || `Gallery View ${currentIndex + 1}`}
                className="w-full h-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
              {images[currentIndex].alt && (
                <div className="absolute bottom-[-40px] left-0 w-full text-center text-white/60 text-sm">
                  {images[currentIndex].alt}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
