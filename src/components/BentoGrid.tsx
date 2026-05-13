import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Layers, Layout, Palette, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../utils/cn';
import { CategoryGalleryModal, type GalleryCategory } from './CategoryGalleryModal';

const categories: GalleryCategory[] = [
  {
    id: 'poster',
    name: 'Poster Design',
    subtitle: 'High-impact posters, print & digital',
    images: [
      'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?q=80&w=1600&auto=format&fit=crop',
    ]
  },
  {
    id: 'branding',
    name: 'Logo & Branding',
    subtitle: 'Identity systems & brand direction',
    images: [
      'https://images.unsplash.com/photo-1586717791821-3f44a563cc4c?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1600&auto=format&fit=crop',
    ]
  },
  {
    id: 'social',
    name: 'Social Media',
    subtitle: 'Reels covers, grids, ads & campaigns',
    images: [
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop',
    ]
  },
  {
    id: 'uiux',
    name: 'UI/UX Design',
    subtitle: 'Landing pages & product interfaces',
    images: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541462608141-ad4d4f9d3fb9?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop',
    ],
  },
  {
    id: 'motion',
    name: 'Motion & AI',
    subtitle: 'Motion graphics + AI art direction',
    images: [
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618005198919-d3d4b5a92eee?q=80&w=1600&auto=format&fit=crop',
    ],
  }
];

export const ProjectBentoGrid = () => {
  const [openCategory, setOpenCategory] = useState<GalleryCategory | null>(null);

  return (
    <section id="portfolio" className="py-32 px-6 md:px-20 max-w-7xl mx-auto">
      <CategoryGalleryModal category={openCategory} onClose={() => setOpenCategory(null)} />
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
        <div>
          <p className="text-[#00ff88] tracking-[0.3em] text-xs font-bold uppercase mb-4">(04) Portfolio</p>
          <h2 className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter">
            Curated <span className="text-white/20">Works</span>
          </h2>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-6xl mx-auto">
        {/* Featured category (hero) */}
        <CategoryTile
          category={categories[0]}
          variant="hero"
          className="col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-8 min-h-[320px] sm:min-h-[360px] md:min-h-[460px]"
          onOpen={(c) => setOpenCategory(c)}
          Icon={Palette}
          accentClassName="bg-[#DA291C]"
        />

        {/* Accent category */}
        <CategoryTile
          category={categories[1]}
          variant="accent"
          className="col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-4 min-h-[320px] sm:min-h-[360px] md:min-h-[460px]"
          onOpen={(c) => setOpenCategory(c)}
          Icon={Layers}
          accentClassName="bg-[#DA291C]"
        />

        {/* Tiles */}
        <CategoryTile
          category={categories[2]}
          variant="tile"
          className="col-span-1 md:col-span-3 lg:col-span-4 min-h-[200px] sm:min-h-[240px] md:min-h-[260px]"
          onOpen={(c) => setOpenCategory(c)}
          Icon={Layers}
        />
        <CategoryTile
          category={categories[3]}
          variant="tile"
          className="col-span-1 md:col-span-3 lg:col-span-4 min-h-[200px] sm:min-h-[240px] md:min-h-[260px]"
          onOpen={(c) => setOpenCategory(c)}
          Icon={Layout}
        />
        <CategoryTile
          category={categories[4]}
          variant="tile"
          className="col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-4 min-h-[200px] sm:min-h-[240px] md:min-h-[260px]"
          onOpen={(c) => setOpenCategory(c)}
          Icon={Sparkles}
        />
      </div>
      
      {/* Footer link */}
      <div className="mt-12 flex justify-center">
         <motion.a 
           href="#contact"
           whileHover={{ scale: 1.05 }}
           className="px-10 py-5 rounded-full bg-white text-black font-black uppercase tracking-widest text-sm flex items-center gap-3 shadow-2xl shadow-[#00ff88]/20"
         >
           View Full Archive
           <ArrowUpRight size={18} />
         </motion.a>
      </div>
    </section>
  );
};

function CategoryTile({
  category,
  onOpen,
  className,
  variant,
  Icon,
  accentClassName,
}: {
  category: GalleryCategory;
  onOpen: (c: GalleryCategory) => void;
  className?: string;
  variant: "hero" | "accent" | "tile";
  Icon: any;
  accentClassName?: string;
}) {
  const image = category.images[0];
  const label = variant === "hero" ? "Featured Category" : "Category";

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(category)}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.995 }}
      transition={{ type: "spring", stiffness: 420, damping: 26 }}
      className={cn(
        "relative group overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-zinc-950 text-left",
        "cursor-pointer",
        className,
      )}
      aria-label={`Open ${category.name} gallery`}
    >
      <img
        src={image}
        alt={`${category.name} cover`}
        className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

      {variant === "accent" ? (
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.65) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              backgroundPosition: "10px 10px",
            }}
          />
        </div>
      ) : null}

      <div className="relative h-full p-4 sm:p-6 md:p-8 flex flex-col">
        <div className="flex items-center justify-between">
          <div className="text-xs sm:text-sm text-zinc-300">
            <span className="inline-flex items-center gap-2">
              <span className={cn("size-1.5 rounded-full", accentClassName ?? "bg-[#DA291C]")} />
              {label}
            </span>
          </div>
          <div className="inline-flex items-center justify-center size-9 sm:size-10 rounded-xl bg-black/30 border border-white/10 backdrop-blur transition group-hover:border-white/20">
            <Icon size={18} className="text-white/90" />
          </div>
        </div>

        <div className="mt-auto pt-6">
          <h3 className={cn("tracking-tight font-semibold text-white", variant === "hero" ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl")}>
            {category.name}
          </h3>
          {category.subtitle ? (
            <p className={cn("mt-2 text-sm md:text-base text-zinc-200/90 max-w-xl font-normal leading-[1.47]")}>
              {category.subtitle}
            </p>
          ) : null}

          <div className="mt-4 sm:mt-6 flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 h-9 rounded-xl bg-white/10 border border-white/10 text-xs font-black uppercase tracking-widest text-white/80">
              Open Gallery
              <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}
