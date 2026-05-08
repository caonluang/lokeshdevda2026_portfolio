import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimatedCounter } from './AnimatedCounter';
import { RevealText } from './RevealText';
import { TiltCard } from './TiltCard';
import { MagneticButton } from './MagneticButton';
import { BorderBeam } from './BorderBeam';

const stats = [
  { value: 5, suffix: '+', label: 'Years Experience', desc: 'Crafting premium visual identities' },
  { value: 40, suffix: '+', label: 'Global Clients', desc: 'Across India, UAE, UK, and USA' },
  { value: 300, suffix: '+', label: 'Projects Done', desc: 'From startups to enterprise brands' },
  { value: 100, suffix: '%', label: 'Client Satisfaction', desc: 'Repeat clients & referral-driven growth' },
];

export const StatsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 px-6 md:px-20 overflow-hidden bg-[#050505]">
      
      {/* Section heading with RevealText */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-[#00ff88] tracking-[0.25em] text-xs uppercase mb-4 font-bold">
            By the Numbers
          </p>
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none">
            <RevealText text="Results" className="block" />
            <RevealText text="That Speak" className="block text-white/30" delay={0.1} />
          </h2>
        </div>

        {/* Stats grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <TiltCard key={i} intensity={8} className="h-full">
              <BorderBeam
                className="p-8 h-full bg-[#111111] min-h-[220px] flex flex-col justify-between"
                colorFrom="#00ff88"
                colorTo="#ffffff"
                duration={4 + i}
                borderRadius="1.5rem"
              >
                <div>
                  <div className="text-6xl md:text-7xl font-black text-white leading-none mb-2">
                    {isInView ? (
                      <AnimatedCounter
                        end={stat.value}
                        suffix={stat.suffix}
                        duration={1800 + i * 200}
                      />
                    ) : (
                      <span>0{stat.suffix}</span>
                    )}
                  </div>
                  <div className="text-[#00ff88] text-sm uppercase tracking-widest font-bold mt-2">
                    {stat.label}
                  </div>
                </div>
                <p className="text-white/40 text-sm leading-relaxed mt-4">
                  {stat.desc}
                </p>
              </BorderBeam>
            </TiltCard>
          ))}
        </div>

        {/* CTA Row with Magnetic buttons */}
        <div className="mt-20 flex flex-col sm:flex-row items-center gap-6 justify-center">
          <MagneticButton
            className="px-10 py-5 bg-[#00ff88] text-black font-bold text-sm tracking-widest uppercase rounded-full hover:scale-105 transition-transform"
          >
            Download Resume
          </MagneticButton>
          <MagneticButton
            className="px-10 py-5 border border-white/20 text-white font-bold text-sm tracking-widest uppercase rounded-full hover:bg-white hover:text-black transition-all"
          >
            View All Projects
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};
