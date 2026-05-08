import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    title: "Project Alpha Rebrand",
    problem: "The client needed a modern visual identity to appeal to a younger demographic without losing their core B2B audience.",
    solution: "A complete overhaul of the color palette, introducing vibrant accents to a professional monochrome base, paired with a dynamic logo system.",
    result: "40% increase in social media engagement and a successful launch in 3 new markets."
  },
  {
    title: "Eco-Friendly Packaging",
    problem: "Outdated plastic packaging was hurting the brand's sustainable mission.",
    solution: "Designed 100% biodegradable dielines and minimalist labels using soy-based inks.",
    result: "Reduced carbon footprint by 25% and won the National Design Award for Sustainability."
  },
  {
    title: "Global Tech Campaign",
    problem: "A fragmented ad strategy across 5 countries leading to low conversion rates.",
    solution: "Created a unified grid system for social media and animated banners ensuring consistent visual storytelling.",
    result: "3x ROI on ad spend and 1M+ impressions in the first week."
  }
];

export const PinnedCaseStudies = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !leftRef.current || !rightRef.current) return;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: leftRef.current,
      scrub: true,
    });
    
    // Animate content blocks fading in and out based on scroll position
    const blocks = gsap.utils.toArray('.case-study-block');
    blocks.forEach((block: any, i) => {
      gsap.fromTo(block, 
        { opacity: 0.2, scale: 0.95 }, 
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: block,
            start: "top center",
            end: "bottom center",
            scrub: true,
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative bg-[#050505] text-white py-20 flex flex-col md:flex-row">
      <div ref={leftRef} className="w-full md:w-1/2 h-screen sticky top-0 flex flex-col justify-center px-10 lg:px-20">
        <span className="text-[#00ff88] text-sm tracking-[0.3em] uppercase mb-6 block">In-Depth Analysis</span>
        <h2 className="text-5xl lg:text-7xl font-black uppercase leading-none mb-6">
          Case<br />Studies
        </h2>
        <p className="text-white/60 text-lg max-w-sm">
          Problem → Concept → Design Process → Final Output. A deep dive into my creative process.
        </p>
      </div>
      
      <div ref={rightRef} className="w-full md:w-1/2 py-20 px-10 lg:px-20 space-y-40">
        {caseStudies.map((study, idx) => (
          <div key={idx} className="case-study-block min-h-[60vh] flex flex-col justify-center border-l-2 border-[#00ff88]/30 pl-10">
            <h3 className="text-4xl font-bold mb-10 text-white">{study.title}</h3>
            
            <div className="mb-8">
              <span className="text-[10px] text-[#00ff88] uppercase tracking-widest font-bold">The Problem</span>
              <p className="text-xl text-white/80 mt-2 leading-relaxed">{study.problem}</p>
            </div>
            
            <div className="mb-8">
              <span className="text-[10px] text-[#00ff88] uppercase tracking-widest font-bold">The Solution</span>
              <p className="text-xl text-white/80 mt-2 leading-relaxed">{study.solution}</p>
            </div>
            
            <div>
              <span className="text-[10px] text-[#00ff88] uppercase tracking-widest font-bold">The Result</span>
              <p className="text-xl text-white mt-2 font-bold">{study.result}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
