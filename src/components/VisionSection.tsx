import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Zap, Smile, Sparkles, Send, Layout, Palette } from 'lucide-react';

export const VisionSection = () => {
  return (
    <section className="z-10 xl:py-24 mt-24 pt-12 pb-12 relative overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 items-center">
          {/* Left copy */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 backdrop-blur border border-white/10"
            >
              <span className="text-[10px] text-white/70 font-bold uppercase tracking-widest">Collaborating with 15+ brands across India</span>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#00FF88]/20">
                <ArrowRight size={12} className="text-[#00FF88]" />
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-8 text-4xl md:text-6xl text-white font-black tracking-tighter leading-[0.9] uppercase"
            >
              We turn raw ideas into lasting <span className="text-[#00FF88]">visual momentum</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:text-xl text-white/60 max-w-xl mt-8 font-medium leading-relaxed"
            >
              Strategizing brand identities, creating premium packaging, and developing interactive web experiences that don't just look good—they perform.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a href="tel:+916267382299" className="inline-flex items-center gap-2 hover:bg-[#00FF88]/90 transition-all text-sm font-black uppercase tracking-widest text-black bg-[#00FF88] rounded-2xl px-8 py-4 shadow-[0_10px_30px_-10px_rgba(0,255,136,0.5)]">
                Contact Me
                <MessageCircle size={18} />
              </a>
              <a href="#work" className="inline-flex items-center gap-2 hover:bg-white/10 transition-all text-sm font-black uppercase tracking-widest text-white/80 bg-white/5 rounded-2xl px-8 py-4 border border-white/10">
                Our Process
                <ArrowRight size={18} className="text-white/40" />
              </a>
            </motion.div>

            {/* Metrics */}
            <div className="mt-16 grid grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex gap-4 items-start"
              >
                <div className="flex bg-[#00FF88]/10 w-10 h-10 rounded-xl items-center justify-center border border-[#00FF88]/20">
                  <Zap size={18} className="text-[#00FF88]" />
                </div>
                <div>
                  <p className="text-3xl text-white font-black tracking-tighter leading-none">500+</p>
                  <p className="text-[10px] text-white/40 font-black uppercase tracking-widest mt-1">Graphics Delivered</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="flex bg-[#00FF88]/10 w-10 h-10 rounded-xl items-center justify-center border border-[#00FF88]/20">
                  <Smile size={18} className="text-[#00FF88]" />
                </div>
                <div>
                  <p className="text-3xl text-white font-black tracking-tighter leading-none">100%</p>
                  <p className="text-[10px] text-white/40 font-black uppercase tracking-widest mt-1">Client Satisfaction</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right visual grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative h-64 md:h-80 overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900 group"
              >
                <img src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2070&auto=format&fit=crop" alt="Brand Strategy" className="opacity-50 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="rounded-2xl bg-black/40 backdrop-blur-xl px-5 py-4 border border-white/5">
                    <div className="flex items-center gap-2 mb-1">
                      <Palette size={14} className="text-[#00FF88]" />
                      <p className="text-sm font-black text-white uppercase tracking-widest">Strategy Over Style</p>
                    </div>
                    <p className="text-xs text-white/50 font-medium">We build full identity systems, not just pretty logos.</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative h-64 md:h-80 overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900 group"
              >
                <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop" alt="Visual Excellence" className="opacity-50 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute left-0 top-0 m-6 rounded-full bg-[#00FF88] px-3 py-1.5">
                  <span className="text-[10px] text-black font-black uppercase tracking-widest flex items-center gap-1">
                    <Sparkles size={12} />
                    New
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="rounded-2xl bg-black/40 backdrop-blur-xl px-5 py-4 border border-white/5">
                    <div className="flex items-center gap-2 mb-1">
                      <Layout size={14} className="text-[#00FF88]" />
                      <p className="text-sm font-black text-white uppercase tracking-widest">Pixel Perfection</p>
                    </div>
                    <p className="text-xs text-white/50 font-medium">Every anchor point and pixel is placed with precision.</p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative col-span-1 md:col-span-2 h-48 md:h-64 overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900 group"
              >
                <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop" alt="Global Reach" className="opacity-50 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex border border-white/5 bg-black/40 rounded-2xl p-5 backdrop-blur-xl items-center justify-between">
                    <div>
                      <p className="text-lg font-black text-white uppercase tracking-tighter">Multichannel Impact</p>
                      <p className="text-xs text-white/50 font-medium mt-1">Seamless visual consistency across print, digital, and mobile.</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-[#00FF88]/20 flex items-center justify-center text-[#00FF88]">
                      <Send size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
