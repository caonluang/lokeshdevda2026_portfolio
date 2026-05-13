import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    title: 'Brand Identity',
    detail: 'Logo systems, color palettes, typography rules, and visual guidelines for consistent brand recall.',
  },
  {
    title: 'Campaign Design',
    detail: 'Social media creatives, launch posters, ad layouts, and marketing visuals built for attention and clarity.',
  },
  {
    title: 'Digital Visuals',
    detail: 'UI compositions, landing graphics, motion-ready assets, and AI-assisted concepts for modern screens.',
  },
];

const profileStats = [
  ['05+', 'Years'],
  ['40+', 'Clients'],
  ['120+', 'Designs'],
];

export const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal text elements
    gsap.from('.about-text', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      },
      y: 40,
      autoAlpha: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power3.out',
    });

    // Reveal UI Cards
    gsap.from('.about-card', {
      scrollTrigger: {
        trigger: '.about-card-container',
        start: 'top 85%',
      },
      y: 50,
      autoAlpha: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: 'expo.out',
    });

    // Image Parallax
    gsap.to('.about-image', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      yPercent: 15,
      ease: 'none',
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="about" className="relative w-full min-h-screen bg-[#0b0b0b] py-28 md:py-32 overflow-hidden flex items-center z-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00ff88]/10 rounded-full blur-[150px] opacity-50 pointer-events-none" />

      <div className="max-w-[1500px] mx-auto w-full px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-14 lg:gap-20 items-center">
        <div className="w-full relative aspect-[4/5] rounded-[22px] overflow-hidden group border border-white/10 bg-white/[0.03]">
          <div className="absolute inset-0 bg-[#1A1A1A] z-0" />
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
            alt="Graphic design texture and color study"
            className="about-image absolute inset-0 w-full h-[120%] object-cover object-center z-10 opacity-75 grayscale contrast-125 mix-blend-lighten group-hover:scale-105 transition-transform duration-1000"
            style={{ top: '-10%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/20 to-transparent z-20" />
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] z-30 pointer-events-none" />
          <div className="absolute left-6 top-6 z-50 rounded-full border border-[#00ff88]/25 bg-black/35 px-4 py-2 backdrop-blur-md">
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#00ff88]">Profile Snapshot</span>
          </div>
          <div className="absolute bottom-6 left-6 right-6 z-50">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00ff88]">Lokesh Devda</p>
              <p className="mt-2 max-w-[30ch] text-sm font-medium leading-relaxed text-white/80">
                Graphic designer focused on memorable brand systems, polished campaigns, and production-ready visuals.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
              {profileStats.map(([value, label]) => (
                <div key={label}>
                  <span className="block text-2xl font-black leading-none text-white">{value}</span>
                  <span className="mt-1 block text-[9px] font-black uppercase tracking-widest text-white/45">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[60%] flex flex-col justify-center">
          <h3 className="about-text text-[#00ff88] tracking-[0.2em] text-sm font-bold uppercase mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#00ff88]" />
            Professional Profile
          </h3>

          <h2 className="about-text text-[2.75rem] md:text-[4.4rem] font-black leading-[0.95] text-white tracking-tight mb-8 max-w-[19ch]">
            STRATEGIC VISUALS FOR BRANDS THAT NEED TO STAND OUT.
          </h2>

          <p className="about-text text-white/70 text-lg font-light leading-relaxed max-w-[58ch] mb-8">
            I create brand identities, social media campaigns, UI visuals, posters, and marketing collaterals with a balance of concept, typography, and clean execution. Every design is built to look premium, communicate quickly, and stay practical for real business use.
          </p>

          <p className="about-text text-white/50 text-sm md:text-base leading-relaxed max-w-[58ch] mb-12">
            My workflow combines research, layout discipline, Adobe/Corel tools, Figma, and AI-assisted exploration to move from rough ideas to final-ready creative faster without losing craft.
          </p>

          <div className="about-card-container grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-[900px]">
            {capabilities.map((item) => (
              <div key={item.title} className="about-card rounded-[16px] border border-white/10 bg-white/[0.035] p-6 transition-colors duration-300 hover:border-[#00ff88]/40 hover:bg-[#00ff88]/[0.035]">
                <span className="block text-base font-black uppercase text-white">{item.title}</span>
                <span className="mt-4 block text-sm leading-relaxed text-white/60">{item.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
