import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const SkeletonCard = () => (
  <div className="w-full h-64 bg-zinc-900 rounded-3xl animate-pulse flex flex-col p-5">
    <div className="w-20 h-3 bg-zinc-800 rounded mb-4" />
    <div className="w-full h-8 bg-zinc-800 rounded mb-2" />
    <div className="mt-auto flex justify-between items-center">
      <div className="w-32 h-4 bg-zinc-800 rounded" />
      <div className="w-8 h-8 bg-zinc-800 rounded-full" />
    </div>
  </div>
);

interface ProjectCardProps {
  image: string;
  category: string;
  title: string;
  height: string;
  delay?: number;
}

const ProjectCard = ({ image, category, title, height, delay = 0 }: ProjectCardProps) => (
  <motion.a 
    href="#work"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -4, scale: 1.01 }}
    whileTap={{ scale: 0.99 }}
    viewport={{ once: true }}
    transition={{ 
      delay,
      type: "spring", 
      stiffness: 400, 
      damping: 17 
    }}
    className="group relative overflow-hidden ring-1 ring-neutral-200/10 bg-zinc-900 rounded-3xl shadow-sm block transition-shadow hover:shadow-2xl hover:shadow-[#00FF88]/5"
  >
    <img 
      src={image} 
      alt={title} 
      className={`${height} w-full transition-transform duration-500 group-hover:scale-105 object-cover`}
    />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 p-5">
      <p className="text-[10px] sm:text-xs text-white/50 font-medium uppercase tracking-widest">{category}</p>
      <div className="mt-1 flex items-center justify-between">
        <h4 className="text-base sm:text-lg tracking-tight font-medium text-white">{title}</h4>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900 group-hover:bg-[#00FF88] group-hover:text-black transition-colors">
          <ArrowRight size={14} />
        </span>
      </div>
    </div>
  </motion.a>
);

export const BentoGrid = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="portfolio" className="max-w-7xl mx-auto px-4 sm:px-6">
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}
        </div>
      ) : (
        <>
      <div className="flex sm:mb-12 mb-8 items-end justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[11px] sm:text-xs tracking-[0.3em] text-zinc-500 uppercase font-bold">(03) Selected Work</p>
          <h3 className="mt-2 text-2xl sm:text-4xl tracking-tighter font-black text-white uppercase">Design Portfolio</h3>
        </motion.div>
        
        <motion.a 
          href="#work"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="hidden sm:inline-flex items-center gap-2 ring-1 ring-white/10 hover:shadow-xl hover:shadow-[#00FF88]/10 text-sm text-zinc-300 font-medium bg-zinc-900/50 backdrop-blur rounded-full px-6 py-3 transition-all hover:border-[#00FF88]/30 group"
        >
          View All Work
          <ArrowUpRight size={16} className="text-zinc-500 group-hover:text-[#00FF88] transition-colors" />
        </motion.a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {/* Column 1 */}
        <div className="flex flex-col gap-4 sm:gap-6">
          <ProjectCard 
            image="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=2070&auto=format&fit=crop"
            category="Visual Identity"
            title="Logo & Brand Guidelines"
            height="h-64"
            delay={0.1}
          />
          <ProjectCard 
            image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2070&auto=format&fit=crop"
            category="Digital Marketing"
            title="Social Media Grid Design"
            height="h-80"
            delay={0.2}
          />
          <ProjectCard 
            image="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
            category="Product Design"
            title="Luxury Packaging Concept"
            height="h-56"
            delay={0.3}
          />
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 sm:gap-6">
          <ProjectCard 
            image="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop"
            category="Print Media"
            title="Advertising & Billboard Design"
            height="h-72"
            delay={0.15}
          />
          <ProjectCard 
            image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
            category="Web Development"
            title="WordPress Business Portfolio"
            height="h-64"
            delay={0.25}
          />
          <ProjectCard 
            image="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2070&auto=format&fit=crop"
            category="Creative Lab"
            title="Experimental Art Series"
            height="h-64"
            delay={0.35}
          />
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-4 sm:gap-6">
          <ProjectCard 
            image="https://images.unsplash.com/photo-1586717791821-3f44a563cc4c?q=80&w=2070&auto=format&fit=crop"
            category="Branding"
            title="Startup Identity Package"
            height="h-80"
            delay={0.2}
          />
          <ProjectCard 
            image="https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2070&auto=format&fit=crop"
            category="Social Media"
            title="Campaign Visuals"
            height="h-56"
            delay={0.3}
          />
          <ProjectCard 
            image="https://images.unsplash.com/photo-1541462608141-ad4d4f9d3fb9?q=80&w=2070&auto=format&fit=crop"
            category="UI Development"
            title="Modern Web Experience"
            height="h-64"
            delay={0.4}
          />
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 sm:mt-20 flex justify-center"
      >
        <a 
          href="#work" 
          className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-neutral-200 px-8 py-4 text-sm font-black text-black hover:shadow-2xl hover:shadow-[#00FF88]/40 transition-all hover:scale-105"
        >
          View More Projects
          <ArrowUpRight size={18} />
        </a>
      </motion.div>
        </>
      )}
    </section>
  );
};
