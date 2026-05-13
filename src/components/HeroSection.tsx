import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import { TypewriterText } from './TypewriterText';
import { MagneticButton } from './MagneticButton';
import { EyesFollowCursor } from './EyesFollowCursor';

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(['.h-eyebrow', '.h-name', '.h-sub', '.h-cta'], { autoAlpha: 0, y: 30 });
    gsap.set('.h-bg-image', { scale: 1.08, autoAlpha: 0 });

    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.25 } });

    tl.to('.h-bg-image', { autoAlpha: 1, scale: 1, duration: 1.8, ease: 'expo.out' }, 0)
      .to('.h-eyebrow', { autoAlpha: 1, y: 0, duration: 0.9 }, 0.45)
      .to('.h-name', { autoAlpha: 1, y: 0, stagger: 0.08, duration: 1, ease: 'power3.out' }, 0.6)
      .to('.h-sub', { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.85 }, 0.82)
      .to('.h-cta', { autoAlpha: 1, y: 0 }, 1.05);

    const onMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 14;
      const y = (event.clientY / window.innerHeight - 0.5) * 14;
      gsap.to('.h-bg-image', { x: x * -1, y: y * -1, duration: 1.6, ease: 'power2.out' });
      gsap.to('.h-content-wrapper', { x: x * 0.55, y: y * 0.55, duration: 1.6, ease: 'power2.out' });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-end font-sans bg-[#050505]"
    >
      <div className="absolute inset-0 z-0 h-bg-image">
        <img
          src="https://res.cloudinary.com/dg9q99hxf/image/upload/v1778159914/Hero_page_dgxklp.png"
          alt="Designer Background"
          className="w-full h-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#050505]/45 to-[#050505]/90 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none opacity-85" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-16 pt-20 pb-12 flex justify-end min-h-screen">
        <div className="h-content-wrapper relative w-full md:w-[60%] lg:w-[50%] flex flex-col justify-center min-h-screen pt-20">
          <div className="h-eyebrow flex flex-col items-start gap-4 mb-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-white/80 shadow-[0_0_0_6px_rgba(255,255,255,0.08)]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white/70">
                Available | Graphic Designer | AI Artist
              </span>
            </div>
            <div className="text-white/75 tracking-[0.25em] text-[10px] md:text-xs font-bold uppercase flex items-center gap-3">
              <span className="w-8 h-[1px] bg-white/35" />
              Brand Identity, Social Media &amp; Motion Design
            </div>
            <EyesFollowCursor eyeSize={40} pupilSize={14} eyeColor="rgba(255,255,255,0.1)" />
          </div>

          <div className="h-name mb-8 flex flex-col items-start gap-1 leading-none">
            <h1 className="text-[4.5rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[9rem] font-black uppercase leading-none text-white drop-shadow-[0_18px_40px_rgba(0,0,0,0.7)]">
              LOKESH
            </h1>
            <h2
              className="text-[4.5rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[9rem] font-serif italic uppercase leading-none text-transparent drop-shadow-[0_18px_40px_rgba(0,0,0,0.65)]"
              style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.9)' }}
            >
              DEVDA
            </h2>
          </div>

          <div className="h-sub flex flex-wrap items-center gap-2 mb-4">
            <span className="text-white/40 text-xs font-medium uppercase tracking-widest">I Specialize In</span>
            <TypewriterText
              words={['Brand Identity', 'Social Media Design', 'UI/UX Design', 'Motion Graphics', 'Creative Direction']}
              className="text-white text-xs font-bold uppercase tracking-widest"
              typingSpeed={70}
            />
          </div>

          <div className="h-sub max-w-[42ch] mb-10">
            <p className="text-white/70 text-sm md:text-base font-medium leading-relaxed">
              I design premium brand identities, social media creatives, UI layouts, and campaign visuals with a clean mix of strategy, typography, and AI-assisted production.
            </p>
          </div>

          <div className="h-cta flex flex-wrap items-center gap-5">
            <MagneticButton
              className="group relative flex items-center gap-3 px-8 py-4 bg-white text-black font-bold text-sm tracking-widest uppercase rounded-full"
              strength={0.3}
            >
              <span>Hire Lokesh</span>
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </MagneticButton>
            <MagneticButton
              className="flex items-center gap-3 px-8 py-4 border border-white/25 text-white font-bold text-sm tracking-widest uppercase rounded-full hover:bg-white hover:text-black transition-all duration-300"
              strength={0.25}
            >
              View Work
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};
