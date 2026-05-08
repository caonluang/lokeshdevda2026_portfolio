import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Activity, Smile, Sparkles, Send } from 'lucide-react';

export const AxiomSection = () => {
  return (
    <section className="relative z-10 xl:py-24 mt-24 pt-12 pb-12 overflow-hidden border-t border-white/5 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          {/* Left copy */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur"
            >
              <span className="text-xs text-white/70 font-sans">Empowering customers in 30+ countries</span>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                <ArrowRight className="h-3.5 w-3.5 text-white/60" />
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              className="mt-5 text-4xl sm:text-5xl md:text-6xl text-white drop-shadow-xl font-sans tracking-tighter font-black uppercase leading-[0.9]"
            >
              We turn everyday banking into <span className="text-[#10B981]">effortless momentum</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              className="md:text-lg text-base text-white/70 max-w-xl mt-6 font-sans font-medium"
            >
              Automate savings, analyze spending, and move money instantly—securely and intelligently. Wallet gives you the clarity and control to grow what matters.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <a href="#" className="inline-flex items-center gap-2 hover:bg-[#0ea5e9]/90 transition text-sm font-semibold text-black bg-[#10B981] rounded-full px-5 py-2.5 shadow-lg font-sans">
                Contact Us
                <MessageCircle className="h-4 w-4" />
              </a>
              <a href="#" className="inline-flex items-center gap-2 border border-white/10 hover:bg-white/10 transition text-sm font-medium text-white/80 bg-white/5 rounded-full px-5 py-2.5 font-sans">
                Why Wallet
                <ArrowRight className="h-4 w-4 text-white/70" />
              </a>
            </motion.div>

            {/* Metrics */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
              className="mt-10 grid grid-cols-2 gap-6"
            >
              <div className="flex items-start gap-3">
                <div className="flex border border-white/10 bg-white/5 w-10 h-10 rounded-xl items-center justify-center shrink-0">
                  <Activity className="w-5 h-5 text-slate-300" />
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl text-white font-sans tracking-tighter font-black">12M+</p>
                  <p className="text-xs text-white/60 font-sans uppercase tracking-widest mt-1">Transfers processed monthly</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex border border-white/10 bg-white/5 w-10 h-10 rounded-xl items-center justify-center shrink-0">
                  <Smile className="w-5 h-5 text-slate-300" />
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl text-white font-sans tracking-tighter font-black">98%</p>
                  <p className="text-xs text-white/60 font-sans uppercase tracking-widest mt-1">Satisfaction rate</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right visual grid */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {/* Card 1 */}
              <div className="relative h-56 md:h-72 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur group">
                <img 
                  src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6d7852ab-5a08-4da9-b5b5-554b75eb2462_800w.webp" 
                  alt="Team collaborating" 
                  className="opacity-70 w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="rounded-xl bg-neutral-900/80 backdrop-blur px-4 py-3 border border-white/10">
                    <p className="text-sm font-semibold text-white font-sans">Partnership Over Projects</p>
                    <p className="mt-1 text-xs text-white/70 font-sans">We grow balances, not just complete tasks.</p>
                  </div>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="relative h-56 md:h-72 overflow-hidden rounded-2xl border border-white/10 bg-white/5 group">
                <img 
                  src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2c958486-bfef-4917-862a-7e3de9f9e62c_800w.webp" 
                  alt="Minimal desk" 
                  className="opacity-70 w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute left-0 top-0 m-4 rounded-full bg-neutral-900/80 backdrop-blur px-3 py-1.5 border border-white/10">
                  <span className="text-[10px] uppercase tracking-widest text-[#10B981] inline-flex items-center gap-1 font-sans font-bold">
                    <Sparkles className="w-3 h-3" />
                    New
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="rounded-xl bg-neutral-900/80 backdrop-blur px-4 py-3 border border-white/10">
                    <p className="text-sm font-semibold text-white font-sans">Data-Driven Decisions</p>
                    <p className="mt-1 text-xs text-white/70 font-sans">Every move is backed by insight.</p>
                  </div>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="relative col-span-2 h-48 md:h-56 overflow-hidden rounded-2xl border border-white/10 bg-white/5 group">
                <img 
                  src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/37527329-8639-4134-aa32-d84f57b80390_1600w.webp" 
                  alt="Calm mountains minimal" 
                  className="opacity-60 w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="flex border border-white/10 bg-neutral-900/80 rounded-xl px-4 py-3 backdrop-blur items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white font-sans">Instant Transfers</p>
                      <p className="mt-1 text-xs text-white/70 font-sans">Move money globally in seconds.</p>
                    </div>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white group-hover:bg-[#10B981] group-hover:text-black transition-colors duration-300">
                      <Send className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
