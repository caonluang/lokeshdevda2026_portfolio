import { motion } from 'framer-motion';
import { 
  ArrowRight, Globe, Palette, 
  Layers, Megaphone, Layout, Box, Sparkles
} from 'lucide-react';

interface FeaturedGridProps {
  onSeeMore?: () => void;
}

export const FeaturedGrid = ({ onSeeMore }: FeaturedGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6 max-w-[1200px] mx-auto px-4 sm:px-6 mb-20">
      {/* 01. Logo & Brand Identity */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        viewport={{ once: true }}
        onClick={onSeeMore}
        className="relative group overflow-hidden rounded-[18px] bg-[#2a2a2c] col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-8 min-h-[360px] md:min-h-[480px] flex flex-col cursor-pointer transition-colors duration-300 border border-white/5 hover:border-[#2997ff]/30"
      >
        <img 
          src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop" 
          alt="Visual Identity Portfolio" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#252527]/90 via-[#252527]/40 to-transparent" />
        <div className="relative p-8 md:p-10 flex flex-col h-full flex-1">
          <div className="flex items-center justify-between">
            <div className="text-[12px] font-semibold uppercase tracking-tight text-[#cccccc]">
              <span className="inline-flex items-center gap-2">
                01. Visual Identity
              </span>
            </div>
            <div className="text-[#ffffff]">
               <Palette size={20} />
            </div>
          </div>
          <div className="mt-auto">
            <h2 className="text-[40px] font-semibold text-[#ffffff] text-tight leading-[1.1] mb-4">
              Logo & Brand<br />Identity
            </h2>
            <p className="text-[17px] text-[#cccccc] max-w-xl font-normal leading-[1.47] mb-8">
              Complete visual identity systems — logo design, color palettes, typography guidelines, and brand architecture.
            </p>
            <button className="button-dark-utility" aria-label="View Projects">
              View Project
            </button>
          </div>
        </div>
      </motion.section>

      {/* 02. Social Media Design */}
      <motion.aside 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        onClick={onSeeMore}
        className="relative overflow-hidden rounded-[18px] border border-[#2997ff]/20 col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-4 min-h-[360px] md:min-h-[480px] bg-[#2997ff] cursor-pointer group"
      >
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,0.2) 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
        <div className="relative h-full p-8 md:p-10 flex flex-col">
          <div className="flex items-center justify-between text-[#ffffff] font-semibold uppercase tracking-tight text-[12px]">
            <span>02. Social Media</span>
            <Megaphone size={22} />
          </div>
          <h2 className="mt-8 text-[34px] font-semibold text-[#ffffff] leading-[1.1] text-tight">
            Marketing<br />Campaign<br />Design
          </h2>
          <p className="mt-6 text-[17px] text-[#ffffff]/90 max-w-sm font-normal leading-[1.47]">
            Campaign grids, reel covers, carousels, and story sets designed to drive high organic engagement.
          </p>
          <div className="mt-auto">
            <span className="inline-flex items-center gap-2 px-5 h-11 rounded-[18px] bg-[#ffffff] text-[#1d1d1f] text-[14px] font-semibold tracking-tight transition-transform group-hover:scale-105">
              Digital Ads
            </span>
          </div>
        </div>
      </motion.aside>

      {/* 03. Packaging Design */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative group overflow-hidden rounded-[18px] border border-white/5 bg-[#2a2a2c] col-span-1 md:col-span-3 lg:col-span-4 min-h-[280px] flex flex-col cursor-pointer hover:border-[#2997ff]/30 transition-colors"
      >
        <img 
          src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop" 
          alt="Packaging Design" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#252527]/90 via-[#252527]/40 to-transparent" />
        <div className="relative p-8 h-full flex flex-col flex-1">
          <div className="flex items-center justify-between mb-4">
             <div className="text-[#ffffff]">
                <Box size={20} />
            </div>
            <h3 className="text-[12px] font-semibold tracking-tight text-[#cccccc]">03. Packaging</h3>
          </div>
          <div className="mt-auto">
            <h4 className="text-[21px] font-semibold text-[#ffffff] text-tight mb-1">Labels & Dielines</h4>
            <p className="text-[14px] text-[#cccccc] font-normal mb-6">Product Mockups</p>
            <button className="text-[#2997ff] text-[14px] hover:underline" aria-label="View Design">
              View Project
            </button>
          </div>
        </div>
      </motion.section>

      {/* 04. Advertising & Print */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="relative group overflow-hidden rounded-[18px] border border-white/5 bg-[#2a2a2c] col-span-1 md:col-span-3 lg:col-span-4 min-h-[280px] flex flex-col cursor-pointer hover:border-[#2997ff]/30 transition-colors"
      >
        <img 
          src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2070&auto=format&fit=crop" 
          alt="Print Advertising" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#252527]/90 via-[#252527]/40 to-transparent" />
        <div className="relative p-8 h-full flex flex-col flex-1">
          <div className="flex items-center justify-between mb-4">
            <div className="text-[#ffffff]">
                <Layers size={20} />
            </div>
            <h3 className="text-[12px] font-semibold tracking-tight text-[#cccccc]">04. Print Ads</h3>
          </div>
          <div className="mt-auto">
            <h4 className="text-[21px] font-semibold text-[#ffffff] text-tight mb-1">Banners & Posters</h4>
            <p className="text-[14px] text-[#cccccc] font-normal mb-6">Flex Printing Materials</p>
            <button className="text-[#2997ff] text-[14px] hover:underline" aria-label="View Design">
              View Project
            </button>
          </div>
        </div>
      </motion.section>

      {/* 05. WordPress Websites */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="relative group overflow-hidden rounded-[18px] border border-white/5 bg-[#2a2a2c] col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-4 min-h-[280px] flex flex-col cursor-pointer hover:border-[#2997ff]/30 transition-colors"
      >
        <div className="relative p-8 h-full flex flex-col flex-1">
          <div className="flex items-center justify-between mb-6">
            <div className="text-[#ffffff]">
                <Globe size={20} />
            </div>
            <h3 className="text-[12px] font-semibold tracking-tight text-[#cccccc]">05. Web Design</h3>
          </div>
          <div className="mt-auto">
             <h4 className="text-[28px] font-semibold text-[#ffffff] text-tight mb-1">WordPress</h4>
            <p className="text-[14px] text-[#cccccc] font-normal mb-6">Business Sites & Landing Pages</p>
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2 text-[#2997ff]">
                <Layout size={18} />
                <span className="text-[12px] font-semibold tracking-tight">Live Portfolio</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 06. Creative Lab */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="relative group overflow-hidden rounded-[18px] border border-white/5 bg-[#2a2a2c] col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-12 min-h-[300px] flex flex-col cursor-pointer hover:border-[#2997ff]/30 transition-colors"
      >
        <img 
          src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop" 
          alt="Creative Lab Projects" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#252527]/90 via-[#252527]/40 to-transparent" />
        <div className="relative p-8 md:p-10 h-full flex flex-col flex-1">
          <div className="flex items-center justify-between mb-6">
            <div className="text-[#ffffff]">
                <Sparkles size={20} />
            </div>
            <h3 className="text-[12px] font-semibold tracking-tight text-[#cccccc]">06. Creative Lab</h3>
          </div>
          <div className="mt-auto max-w-2xl">
             <h4 className="text-[34px] font-semibold text-[#ffffff] text-tight mb-2">Experimental Projects</h4>
            <p className="text-[17px] text-[#cccccc] mb-8 font-normal leading-[1.47]">Personal design explorations, digital art series, and experimental visual identities that push the boundaries of modern design language.</p>
            <button className="button-dark-utility bg-[#ffffff] text-[#1d1d1f]">
               Explore Lab
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
