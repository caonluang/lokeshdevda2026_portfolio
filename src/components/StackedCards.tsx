import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { id: "01", title: "Logo Design", desc: "Creating memorable and timeless visual identities that resonate with your target audience.", color: "bg-[#111111]" },
  { id: "02", title: "Social Media Design", desc: "Engaging grids, reels, and stories engineered to maximize organic reach and brand consistency.", color: "bg-[#151515]" },
  { id: "03", title: "Brand Identity", desc: "Comprehensive brand guidelines including typography, color palettes, and tone of voice.", color: "bg-[#1a1a1a]" },
  { id: "04", title: "Poster/Flyer Design", desc: "High-impact print and digital posters that capture attention immediately.", color: "bg-[#222222]" },
  { id: "05", title: "Packaging Design", desc: "Premium product packaging and dielines that stand out on physical and digital shelves.", color: "bg-[#2a2a2a]" }
];

export const StackedCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.stacked-card');
    
    cards.forEach((card: any, index) => {
      // Pin each card when it reaches the top
      ScrollTrigger.create({
        trigger: card,
        start: `top ${15 + (index * 2)}%`, // slightly stagger the pinning position
        endTrigger: containerRef.current,
        end: `bottom bottom`,
        pin: true,
        pinSpacing: false,
      });

      // Animate the scale of the card as the next one scrolls up
      if (index < cards.length - 1) {
        gsap.to(card, {
          scale: 0.95 - (index * 0.01),
          filter: "brightness(0.5)", // Darken instead of opacity to prevent see-through
          scrollTrigger: {
            trigger: cards[index + 1] as any,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          }
        });
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative py-32 bg-[#050505] px-4 md:px-20">
      <div className="mb-20 text-center">
        <h2 className="text-5xl md:text-8xl font-black uppercase text-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}>Services</h2>
      </div>
      
      <div className="relative max-w-5xl mx-auto flex flex-col gap-10 pb-[20vh]">
        {services.map((service, i) => (
          <div 
            key={i} 
            className={`stacked-card ${service.color} w-full min-h-[50vh] rounded-[3rem] p-10 md:p-16 flex flex-col justify-between border border-white/5 shadow-2xl origin-top`}
            style={{ zIndex: i }}
          >
            <div className="flex justify-between items-start">
              <span className="text-[#00ff88] text-2xl font-black">{service.id}</span>
              <button className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors cursor-none">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
            
            <div className="mt-auto">
              <h3 className="text-4xl md:text-6xl font-black text-white uppercase mb-6">{service.title}</h3>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
