import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { X } from 'lucide-react';
import { BentoGallery } from './BentoGallery';
import { VelocityGallery, GalleryImage } from './VelocityGallery';

gsap.registerPlugin(ScrollTrigger);

// Define gallery images for each category using a Bento layout structure
const categoryBentoImages: Record<string, GalleryImage[]> = {
  "Brand Identity": [
    { id: 'b1', src: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop', colSpan: 2, rowSpan: 2 },
    { id: 'b2', src: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=2000&auto=format&fit=crop', colSpan: 1, rowSpan: 1 },
    { id: 'b3', src: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2000&auto=format&fit=crop', colSpan: 1, rowSpan: 1 },
    { id: 'b4', src: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2000&auto=format&fit=crop', colSpan: 2, rowSpan: 1 },
  ],
  "Social Media Ads": [
    { id: 's1', src: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2070&auto=format&fit=crop', colSpan: 2, rowSpan: 1 },
    { id: 's2', src: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=2000&auto=format&fit=crop', colSpan: 1, rowSpan: 2 },
    { id: 's3', src: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2000&auto=format&fit=crop', colSpan: 1, rowSpan: 1 },
    { id: 's4', src: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=2000&auto=format&fit=crop', colSpan: 1, rowSpan: 1 },
  ],
  "Packaging Design": [
    { id: 'p1', src: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop', colSpan: 2, rowSpan: 2 },
    { id: 'p2', src: 'https://images.unsplash.com/photo-1605640874680-a3e9c5222e45?q=80&w=2000&auto=format&fit=crop', colSpan: 1, rowSpan: 1 },
    { id: 'p3', src: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2000&auto=format&fit=crop', colSpan: 1, rowSpan: 1 },
    { id: 'p4', src: 'https://images.unsplash.com/photo-1595642527925-4d41cb781653?q=80&w=2000&auto=format&fit=crop', colSpan: 2, rowSpan: 1 },
  ],
  "Creative Lab": [
    { id: 'c1', src: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop', colSpan: 1, rowSpan: 2 },
    { id: 'c2', src: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2000&auto=format&fit=crop', colSpan: 2, rowSpan: 1 },
    { id: 'c3', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop', colSpan: 1, rowSpan: 1 },
    { id: 'c4', src: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2000&auto=format&fit=crop', colSpan: 2, rowSpan: 1 },
  ]
};

// Define more images for the new Velocity Gallery feature for each category
const categoryVelocityImages: Record<string, { rowA: GalleryImage[], rowB: GalleryImage[] }> = {
  "Brand Identity": {
    rowA: [
      { id: 'va1', src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop' },
      { id: 'va2', src: 'https://images.unsplash.com/photo-1620061596702-8610ebecdbb2?q=80&w=800&auto=format&fit=crop' },
      { id: 'va3', src: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop' },
      { id: 'va4', src: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop' },
    ],
    rowB: [
      { id: 'vb1', src: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=800&auto=format&fit=crop' },
      { id: 'vb2', src: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop' },
      { id: 'vb3', src: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=800&auto=format&fit=crop' },
      { id: 'vb4', src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop' },
    ]
  },
  "Social Media Ads": {
    rowA: [
      { id: 'sa1', src: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop' },
      { id: 'sa2', src: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop' },
      { id: 'sa3', src: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=800&auto=format&fit=crop' },
      { id: 'sa4', src: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=800&auto=format&fit=crop' },
    ],
    rowB: [
      { id: 'sb1', src: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=800&auto=format&fit=crop' },
      { id: 'sb2', src: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=800&auto=format&fit=crop' },
      { id: 'sb3', src: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop' },
      { id: 'sb4', src: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop' },
    ]
  },
  "Packaging Design": {
    rowA: [
      { id: 'pa1', src: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop' },
      { id: 'pa2', src: 'https://images.unsplash.com/photo-1605640874680-a3e9c5222e45?q=80&w=800&auto=format&fit=crop' },
      { id: 'pa3', src: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop' },
      { id: 'pa4', src: 'https://images.unsplash.com/photo-1595642527925-4d41cb781653?q=80&w=800&auto=format&fit=crop' },
    ],
    rowB: [
      { id: 'pb1', src: 'https://images.unsplash.com/photo-1595642527925-4d41cb781653?q=80&w=800&auto=format&fit=crop' },
      { id: 'pb2', src: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop' },
      { id: 'pb3', src: 'https://images.unsplash.com/photo-1605640874680-a3e9c5222e45?q=80&w=800&auto=format&fit=crop' },
      { id: 'pb4', src: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop' },
    ]
  },
  "Creative Lab": {
    rowA: [
      { id: 'ca1', src: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop' },
      { id: 'ca2', src: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop' },
      { id: 'ca3', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' },
      { id: 'ca4', src: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop' },
    ],
    rowB: [
      { id: 'cb1', src: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop' },
      { id: 'cb2', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' },
      { id: 'cb3', src: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=800&auto=format&fit=crop' },
      { id: 'cb4', src: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop' },
    ]
  }
};

const projects = Object.keys(categoryBentoImages).map(key => ({
  title: key,
  img: categoryBentoImages[key][0].src
}));

export const HorizontalGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    if (activeCategory) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [activeCategory]);

  useGSAP(() => {
    if (!wrapperRef.current || !containerRef.current) return;
    
    const getScrollAmount = () => {
      let wrapperWidth = wrapperRef.current?.scrollWidth || 0;
      return -(wrapperWidth - window.innerWidth);
    };

    const tween = gsap.to(wrapperRef.current, {
      x: getScrollAmount,
      ease: "none"
    });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true
    });

    return () => {
      tween.kill();
    };
  }, { scope: containerRef });

  return (
    <>
      <div ref={containerRef} className="h-screen w-full overflow-hidden bg-[#050505] flex items-center relative z-10">
        <div className="absolute top-10 left-10 z-10 mix-blend-difference text-white">
          <h2 className="text-[12vw] font-black uppercase leading-none opacity-20">Featured</h2>
        </div>
        
        <div ref={wrapperRef} className="flex gap-10 px-20 w-max h-[60vh] mt-20 relative z-20">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              onClick={() => setActiveCategory(p.title)}
              className="w-[60vw] md:w-[40vw] h-full shrink-0 relative group overflow-hidden rounded-2xl cursor-pointer"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.4 }}
            >
              <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute bottom-10 left-10">
                <span className="text-white/60 text-sm tracking-widest uppercase mb-2 block">0{i + 1}</span>
                <h3 className="text-white text-4xl font-bold uppercase">{p.title}</h3>
                <span className="inline-block mt-4 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs uppercase tracking-widest text-white border border-white/20 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  View Projects
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Category Gallery Modal Overlay */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div 
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[999] bg-[#050505] overflow-y-auto overflow-x-hidden"
          >
            <div className="min-h-screen w-full relative pb-32">
              
              {/* Header */}
              <div className="sticky top-0 w-full px-6 py-6 flex justify-between items-center bg-[#050505]/80 backdrop-blur-xl z-50 border-b border-white/10">
                <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">
                  {activeCategory}
                </h2>
                <button 
                  onClick={() => setActiveCategory(null)}
                  className="p-3 bg-white/10 hover:bg-white text-white hover:text-black rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* SECTION 1: Bento Gallery Content */}
              <div className="p-6 md:p-12 max-w-[1400px] mx-auto mt-10">
                <div className="mb-10">
                  <h3 className="text-white/60 uppercase tracking-widest text-sm mb-2">Featured Projects</h3>
                  <div className="w-12 h-1 bg-[#00ff88] rounded-full"></div>
                </div>
                <BentoGallery 
                  images={categoryBentoImages[activeCategory]} 
                  columns={4}
                  gap={16}
                  borderRadius={16}
                  enableLightbox={true}
                />
              </div>

              {/* SECTION 2: Velocity Scroll Gallery Content */}
              <div className="w-full mt-20 border-t border-white/5 pt-20">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-10">
                  <h3 className="text-white/60 uppercase tracking-widest text-sm mb-2">More Explorations</h3>
                  <div className="w-12 h-1 bg-[#00ff88] rounded-full"></div>
                  <p className="text-white/40 text-xs mt-4">Scroll to accelerate velocity</p>
                </div>
                
                <VelocityGallery 
                  rowAImages={categoryVelocityImages[activeCategory].rowA}
                  rowBImages={categoryVelocityImages[activeCategory].rowB}
                  rowAVelocity={15}
                  rowBVelocity={15}
                  scrollSensitivity={8}
                />
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
