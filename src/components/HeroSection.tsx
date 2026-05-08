import { useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import { TypewriterText } from './TypewriterText';
import { MagneticButton } from './MagneticButton';
import { EyesFollowCursor } from './EyesFollowCursor';
import { ToolIconRow } from './ToolIconRow';

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const floatingLogos = useMemo(
    () => [
      { src: '/logos/ps-3d.svg', alt: 'Photoshop' },
      { src: '/logos/ai-3d.svg', alt: 'Illustrator' },
      { src: '/logos/figma-3d.svg', alt: 'Figma' },
      { src: '/logos/corel-3d.svg', alt: 'CorelDRAW' },
      { src: '/logos/chatgpt-3d.svg', alt: 'ChatGPT' },
      { src: '/logos/gemini-3d.svg', alt: 'Gemini' },
    ],
    []
  );

  useGSAP(() => {
    gsap.set(['.h-eyebrow', '.h-name', '.h-sub', '.h-cta'], { autoAlpha: 0, y: 30 });
    gsap.set('.h-bg-image', { scale: 1.1, autoAlpha: 0 });

    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } });

    tl.to('.h-bg-image', { autoAlpha: 1, scale: 1, duration: 2, ease: 'expo.out' }, 0)
      .to('.h-eyebrow', { autoAlpha: 1, y: 0, duration: 1 }, 0.6)
      .to('.h-name', { autoAlpha: 1, y: 0, stagger: 0.1, duration: 1.2, ease: 'back.out(1.2)' }, 0.7)
      .to('.h-sub', { autoAlpha: 1, y: 0, stagger: 0.1, duration: 1 }, 0.9)
      .to('.h-cta', { autoAlpha: 1, y: 0 }, 1.2);

    // Smooth parallax effect on mouse move
    const onMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      gsap.to('.h-bg-image', { x: x * -1.5, y: y * -1.5, duration: 2, ease: 'power2.out' });
      gsap.to('.h-content-wrapper', { x: x * 1, y: y * 1, duration: 2, ease: 'power2.out' });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-end font-sans"
    >
      {/* ── BACKGROUND FULL IMAGE ── */}
      <div className="absolute inset-0 z-0 h-bg-image">
        <img
          src="https://res.cloudinary.com/dg9q99hxf/image/upload/v1778159914/Hero_page_dgxklp.png"
          alt="Designer Background"
          className="w-full h-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#050505]/40 to-[#050505]/90 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none opacity-80" />
      </div>

      {/* ── RIGHT SIDE CONTENT ── */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-16 pt-20 pb-12 flex justify-end min-h-screen">
        <div className="h-content-wrapper relative w-full md:w-[60%] lg:w-[50%] flex flex-col justify-center min-h-screen pt-20">
          {/* Floating tool logos (3D-styled) */}
          <div className="pointer-events-none absolute -top-10 -right-10 w-[560px] h-[560px] hidden lg:block">
            <div className="absolute inset-0 rounded-full bg-[#00ff88]/10 blur-[90px]" />
            {floatingLogos.map((logo, i) => (
              <motion.img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="absolute w-16 h-16"
                style={{
                  left: `${14 + (i % 3) * 28}%`,
                  top: `${12 + Math.floor(i / 3) * 32}%`,
                  filter: 'drop-shadow(0 18px 28px rgba(0,0,0,0.55))',
                }}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -10, 0],
                  rotate: [0, i % 2 === 0 ? 4 : -4, 0],
                }}
                transition={{
                  duration: 4.2 + i * 0.35,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.2 + i * 0.08,
                }}
              />
            ))}
          </div>

          {/* Eyebrow */}
          <div className="h-eyebrow flex flex-col items-start gap-4 mb-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#00ff88] shadow-[0_0_0_6px_rgba(0,255,136,0.12)]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white/70">
                Available • Visual Designer • AI-Ready
              </span>
            </div>
            <div className="text-[#00ff88] tracking-[0.25em] text-[10px] md:text-xs font-bold uppercase flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#00ff88]/50" />
              Creative Graphic Designer &amp; AI Artist
            </div>
            <EyesFollowCursor eyeSize={40} pupilSize={14} eyeColor="rgba(255,255,255,0.1)" />
          </div>

          {/* Creative Name Typography - Fixed spacing */}
          <div className="h-name mb-6 flex flex-col items-start gap-0 leading-none">
            <h1 
              className="text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] font-black uppercase tracking-[-0.04em] leading-none text-transparent"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundAttachment: 'fixed',
              }}
            >
              LOKESH
            </h1>
            <h2 
              className="text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] font-black uppercase tracking-[-0.04em] leading-none text-transparent drop-shadow-[0_18px_40px_rgba(0,0,0,0.65)]"
              style={{
                WebkitTextStroke: '2.5px rgba(255, 255, 255, 0.86)',
                textShadow:
                  '0 0 24px rgba(0,255,136,0.14), 0 0 1px rgba(255,255,255,0.4)',
              }}
            >
              DEVDA
            </h2>
          </div>

          {/* Typewriter Specialties */}
          <div className="h-sub flex flex-wrap items-center gap-2 mb-4">
            <span className="text-white/40 text-xs font-medium uppercase tracking-widest">I Specialize In</span>
            <TypewriterText
              words={['Brand Identity', 'Social Media Design', 'UI/UX Design', 'Motion Graphics', 'Creative Direction']}
              className="text-[#00ff88] text-xs font-bold uppercase tracking-widest"
              typingSpeed={70}
            />
          </div>

          {/* Description */}
          <div className="h-sub max-w-[42ch] mb-10">
            <p className="text-white/70 text-sm md:text-base font-medium leading-relaxed">
              Crafting immersive visual identities, motion-rich interfaces, and editorial-grade design systems�powered by modern AI workflows.
            </p>
          </div>

          {/* Magnetic CTAs */}
          <div className="h-cta flex items-center gap-5">
            <MagneticButton
              className="group relative flex items-center gap-3 px-8 py-4 bg-[#00ff88] text-black font-bold text-sm tracking-widest uppercase rounded-full"
              strength={0.3}
            >
              <span>Hire Me</span>
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </MagneticButton>
            <MagneticButton
              className="flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-bold text-sm tracking-widest uppercase rounded-full hover:bg-white hover:text-black transition-all duration-300"
              strength={0.25}
            >
              Explore
            </MagneticButton>
          </div>

          <div className="h-cta mt-10">
            <div className="text-[10px] font-black uppercase tracking-[0.35em] text-white/40 mb-3">
              Tool Stack
            </div>
            <ToolIconRow />
          </div>

        </div>
      </div>
    </section>
  );
};
