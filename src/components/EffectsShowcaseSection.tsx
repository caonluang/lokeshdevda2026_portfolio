import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Eye, Type, Layers, Grid3X3, MousePointer2 } from 'lucide-react';
import { BorderBeam } from './BorderBeam';
import { GlowCard } from './GlowCard';
import { TiltCard } from './TiltCard';
import { FlipCard } from './FlipCard';
import { ScrollReveal } from './ScrollReveal';
import { RevealText } from './RevealText';
import { RollingText } from './RollingText';
import { TextScramble } from './TextScramble';
import { TypewriterText } from './TypewriterText';
import { TextPressure } from './TextPressure';
import { ClipReveal } from './ClipReveal';
import { GlassyButton } from './GlassyButton';
import { RippleButton } from './RippleButton';
import { CircleExpandButton } from './CircleExpandButton';
import { IconSlideButton } from './IconSlideButton';
import { MagneticButton } from './MagneticButton';

type EffectCategory = 'All' | 'Text' | 'Cards' | 'Buttons';

const categories: { id: EffectCategory; icon: React.ReactNode }[] = [
  { id: 'All', icon: <Layers size={16} /> },
  { id: 'Text', icon: <Type size={16} /> },
  { id: 'Cards', icon: <Grid3X3 size={16} /> },
  { id: 'Buttons', icon: <MousePointer2 size={16} /> },
];

export const EffectsShowcaseSection = () => {
  const [category, setCategory] = useState<EffectCategory>('All');

  const items = useMemo(() => {
    const all = [
      { id: 'txt-reveal', cat: 'Text' as const, title: 'Reveal Text', icon: <Sparkles size={18} />, node: <RevealText text="Reveal on scroll" className="text-3xl md:text-4xl font-black" /> },
      { id: 'txt-roll', cat: 'Text' as const, title: 'Rolling Text', icon: <Zap size={18} />, node: <div className="text-3xl md:text-4xl font-black"><RollingText text="Rolling headline" /></div> },
      { id: 'txt-scramble', cat: 'Text' as const, title: 'Text Scramble', icon: <Eye size={18} />, node: <TextScramble text="Hover me to scramble" className="text-xl font-bold text-white/80" /> },
      {
        id: 'txt-type',
        cat: 'Text' as const,
        title: 'Typewriter',
        icon: <Type size={18} />,
        node: (
          <TypewriterText
            words={['Typewriter effect in React.']}
            className="text-lg text-white/70"
            typingSpeed={22}
            deleteSpeed={14}
            pauseMs={1200}
          />
        ),
      },
      { id: 'txt-pressure', cat: 'Text' as const, title: 'Text Pressure', icon: <Sparkles size={18} />, node: <TextPressure text="Elastic copy with pressure." className="text-white/60 text-sm leading-relaxed" flexibility={0.35} /> },

      {
        id: 'card-borderbeam',
        cat: 'Cards' as const,
        title: 'Border Beam',
        icon: <Zap size={18} />,
        node: (
          <BorderBeam className="rounded-3xl bg-white/5 p-6" duration={3} borderRadius="1.5rem">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="text-xs uppercase tracking-[0.35em] text-white/40 font-black">Hover + glow</div>
                <div className="mt-2 text-2xl font-black uppercase">Border Beam</div>
                <div className="mt-3 text-sm text-white/60 leading-relaxed max-w-[42ch]">
                  A light beam orbits the perimeter — perfect for featured cards.
                </div>
              </div>
              <div className="h-11 w-11 rounded-2xl bg-[#00ff88]/15 border border-[#00ff88]/25 flex items-center justify-center text-[#00ff88]">
                <Sparkles size={18} />
              </div>
            </div>
          </BorderBeam>
        ),
      },
      {
        id: 'card-tilt',
        cat: 'Cards' as const,
        title: '3D Tilt',
        icon: <Eye size={18} />,
        node: (
          <TiltCard className="rounded-3xl bg-white/5 border border-white/10 p-8 min-h-[180px]">
            <div className="text-xs uppercase tracking-[0.35em] text-white/40 font-black">Pointer tilt</div>
            <div className="mt-2 text-2xl font-black uppercase">Tilt Card</div>
            <div className="mt-3 text-sm text-white/60 leading-relaxed max-w-[48ch]">
              Smooth spring-driven tilt on hover for depth.
            </div>
          </TiltCard>
        ),
      },
      {
        id: 'card-flip',
        cat: 'Cards' as const,
        title: 'Flip Card',
        icon: <Layers size={18} />,
        node: (
          <div className="h-[220px]">
            <FlipCard
              className="h-full"
              front={
                <div className="h-full w-full bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between">
                  <div className="text-xs uppercase tracking-[0.35em] text-white/40 font-black">Hover flip</div>
                  <div className="text-3xl font-black uppercase">Front</div>
                  <div className="text-sm text-white/50">Move cursor to flip.</div>
                </div>
              }
              back={
                <div className="h-full w-full bg-[#00ff88]/10 border border-[#00ff88]/25 rounded-3xl p-8 flex flex-col justify-between">
                  <div className="text-xs uppercase tracking-[0.35em] text-[#00ff88] font-black">Back side</div>
                  <div className="text-3xl font-black uppercase">Details</div>
                  <div className="text-sm text-white/60">Great for quick project meta.</div>
                </div>
              }
            />
          </div>
        ),
      },
      {
        id: 'card-glow',
        cat: 'Cards' as const,
        title: 'Glow Card',
        icon: <Sparkles size={18} />,
        node: (
          <GlowCard className="rounded-3xl p-8 min-h-[180px]">
            <div className="text-xs uppercase tracking-[0.35em] text-white/40 font-black">Radial glow</div>
            <div className="mt-2 text-2xl font-black uppercase">Glow Card</div>
            <div className="mt-3 text-sm text-white/60 leading-relaxed max-w-[48ch]">
              Subtle hover glow based on mouse position.
            </div>
          </GlowCard>
        ),
      },

      {
        id: 'btn-magnetic',
        cat: 'Buttons' as const,
        title: 'Magnetic',
        icon: <MousePointer2 size={18} />,
        node: (
          <div className="flex flex-wrap items-center gap-3">
            <MagneticButton className="rounded-2xl">
              <GlassyButton variant="neon" size="md">Magnetic Glass</GlassyButton>
            </MagneticButton>
            <RippleButton className="px-6 py-3 rounded-2xl border border-white/15 text-white/90 font-black uppercase tracking-widest text-[11px]">
              Ripple
            </RippleButton>
          </div>
        ),
      },
      {
        id: 'btn-cta',
        cat: 'Buttons' as const,
        title: 'CTA Set',
        icon: <Zap size={18} />,
        node: (
          <div className="flex flex-wrap items-center gap-3">
            <CircleExpandButton icon={<Sparkles size={18} />}>Circle Expand</CircleExpandButton>
            <IconSlideButton icon={<Zap size={18} />}>Icon Slide</IconSlideButton>
          </div>
        ),
      },
    ];

    if (category === 'All') return all;
    return all.filter((x) => x.cat === category);
  }, [category]);

  return (
    <section id="effects" className="relative py-28 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-14">
            <div>
              <div className="text-[11px] uppercase tracking-[0.35em] text-white/40 font-black">(04) Interactions</div>
              <h2 className="mt-4 text-4xl md:text-6xl font-black uppercase">
                <ClipReveal>
                  <span className="block">
                    <RollingText text="Effects" />
                  </span>
                </ClipReveal>
              </h2>
              <p className="mt-4 text-white/55 max-w-2xl">
                A curated set of micro-interactions and motion experiments — designed to feel smooth, intentional, and premium.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCategory(c.id)}
                  className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-[11px] font-black uppercase tracking-widest border transition-colors ${
                    category === c.id
                      ? 'bg-[#00ff88] text-black border-[#00ff88]'
                      : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10'
                  }`}
                >
                  {c.icon}
                  {c.id}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.03, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="rounded-[2rem] bg-black/30 border border-white/10 overflow-hidden p-6"
            >
              <div className="flex items-center gap-3 text-white/70">
                <div className="h-9 w-9 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {it.icon}
                </div>
                <div className="text-xs font-black uppercase tracking-[0.35em]">{it.title}</div>
              </div>
              <div className="mt-6">{it.node}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
