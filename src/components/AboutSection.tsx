import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
    <section ref={containerRef} id="about-philosophy" className="relative w-full min-h-screen bg-[#111111] py-32 overflow-hidden flex items-center z-10">
      
      {/* Background Separator & Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#1A1A1A] rounded-full blur-[150px] opacity-50 pointer-events-none" />

      <div className="max-w-[1600px] mx-auto w-full px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-20">
        
        {/* Left Side: Editorial Image */}
        <div className="w-full lg:w-[40%] relative aspect-[4/5] rounded-[2rem] overflow-hidden group">
          <div className="absolute inset-0 bg-[#1A1A1A] z-0" />
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
            alt="Abstract Atmosphere" 
            className="about-image absolute inset-0 w-full h-[120%] object-cover object-center z-10 opacity-70 grayscale contrast-125 mix-blend-lighten group-hover:scale-105 transition-transform duration-1000"
            style={{ top: '-10%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent z-20" />
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] z-30 pointer-events-none" />
          <div className="absolute inset-0 border border-white/10 rounded-[2rem] z-40 pointer-events-none" />
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center">
          
          <h3 className="about-text text-[#FF8A18] tracking-[0.2em] text-sm font-bold uppercase mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#FF8A18]" />
            Creative Philosophy
          </h3>

          <h2 className="about-text text-[3rem] md:text-[4.5rem] font-black leading-[0.95] text-white tracking-tight mb-8 max-w-[18ch]">
            DESIGN IS NOT JUST VISUAL. <br />
            <span className="text-[#B8B8B8] font-medium">IT'S EMOTIONAL.</span>
          </h2>

          <p className="about-text text-[#B8B8B8] text-lg font-light leading-relaxed max-w-[50ch] mb-16">
            With over a decade of orchestrating digital experiences, I believe the best products operate at the intersection of cinematic aesthetic and ruthless utility. I don't just build websites; I architect worlds that command attention and convert curiosity into action.
          </p>

          {/* Metrics / UI Cards */}
          <div className="about-card-container grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[700px]">
            
            {/* Metric Card 1 */}
            <div className="about-card glass-panel rounded-2xl p-8 flex flex-col justify-between h-[180px] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF8A18]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="text-[#B8B8B8] text-sm uppercase tracking-widest relative z-10">Experience</span>
              <div className="relative z-10 flex items-end gap-3">
                <span className="text-5xl font-black text-white leading-none">05</span>
                <span className="text-[#FF8A18] text-xl font-bold pb-1">+ YRS</span>
              </div>
            </div>

            {/* Metric Card 2 */}
            <div className="about-card glass-panel rounded-2xl p-8 flex flex-col justify-between h-[180px] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5E9DD]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="text-[#B8B8B8] text-sm uppercase tracking-widest relative z-10">Global Clients</span>
              <div className="relative z-10 flex items-end gap-3">
                <span className="text-5xl font-black text-white leading-none">40</span>
                <span className="text-[#F5E9DD] text-xl font-bold pb-1">+</span>
              </div>
            </div>

            {/* Stack Details Card */}
            <div className="about-card sm:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden flex items-center justify-between group">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <span className="block text-white text-lg font-bold mb-1">Creative Arsenal</span>
                <span className="block text-[#B8B8B8] text-sm">Figma, Photoshop, Illustrator, GSAP, Next.js</span>
              </div>
              <div className="relative z-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
