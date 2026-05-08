import React from 'react';
import { motion } from 'framer-motion';

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  size: 'small' | 'medium' | 'large';
}

interface ModernGalleryProps {
  items: GalleryItem[];
  className?: string;
}

export const ModernGallery: React.FC<ModernGalleryProps> = ({ items, className = '' }) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] ${className}`}>
      {items.map((item) => (
        <motion.div
          key={item.id}
          className={`relative rounded-3xl overflow-hidden group cursor-none
            ${item.size === 'medium' ? 'row-span-2' : ''}
            ${item.size === 'large' ? 'col-span-2 row-span-2' : ''}
          `}
          whileHover={{ scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.img
            src={item.src}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h4 className="text-white text-lg font-bold uppercase tracking-tighter">{item.title}</h4>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
