import React, { useEffect, useMemo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactLenis, useLenis } from 'lenis/react';
import { AboutSection } from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import { VisionSection } from './components/VisionSection';
import { HorizontalGallery } from './components/HorizontalGallery';
import { PinnedCaseStudies } from './components/PinnedCaseStudies';
import { StackedCards } from './components/StackedCards';
import { ResumeSection } from './components/ResumeSection';
import { AnimatedBackground } from './components/AnimatedBackground';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { CursorRevealImage } from './components/CursorRevealImage';
import { RevealText } from './components/RevealText';
import { ParallaxMarquee } from './components/ParallaxMarquee';
import { TextGlowHover } from './components/TextGlowHover';
import { UnblurTextReveal } from './components/UnblurTextReveal';
import { RollingText } from './components/RollingText';
import { TextVideoMask } from './components/TextVideoMask';
import { TextPressure } from './components/TextPressure';
import { SkillsFlipSection } from './components/SkillsFlipSection';
import { FAQSection } from './components/FAQSection';
import { ServicePricing } from './components/ServicePricing';
import { Dock } from './components/Dock';
import { LiquidImage } from './components/LiquidImage';
import { EyesFollowCursor } from './components/EyesFollowCursor';
import { ImageMaskedText } from './components/ImageMaskedText';
import { GlassyButton } from './components/GlassyButton';
import { MagneticButton } from './components/MagneticButton';
import { RippleButton } from './components/RippleButton';
import { CircleExpandButton } from './components/CircleExpandButton';
import { IconSlideButton } from './components/IconSlideButton';
import { ClipReveal } from './components/ClipReveal';
import { Noise, AmbientGlow } from './components/VisualEffects';
import { Home, User, Briefcase, Mail, Sparkles, Send, ArrowRight } from 'lucide-react';
import { ToolIconRow } from './components/ToolIconRow';

gsap.registerPlugin(ScrollTrigger);

const topSkills = [
  { name: "Brand Identity Design", desc: "Logo, brand colors, typography, brand guidelines" },
  { name: "Social Media Creatives", desc: "Instagram posts, reels covers, ads, banners" },
  { name: "Typography & Layout", desc: "Posters, brochures, magazines, grids" },
  { name: "Adobe Photoshop", desc: "Photo manipulation, retouching, compositing" },
  { name: "Adobe Illustrator", desc: "Logo, vector art, icons, illustrations" },
  { name: "Figma / UI Design", desc: "Landing pages, app screens, website mockups" },
  { name: "Motion Graphics", desc: "After Effects, animated posts, logo animation" },
  { name: "Print Design", desc: "Business card, flyers, packaging, hoardings" },
  { name: "Color Theory", desc: "Mood-based palettes, contrast, visual hierarchy" },
  { name: "Creative Direction", desc: "Concept, storytelling, campaign design" },
  // Soft Skills
  { name: "Soft Skills", desc: "Strong Communication, Problem Solving, Adaptability, Leadership" }
];

const tools = ["CorelDRAW", "Illustrator", "Photoshop", "Figma", "ChatGPT", "Gemini", "After Effects"];

const dockItems = [
  { icon: <Home size={22} />, label: 'Home', href: '#hero' },
  { icon: <User size={22} />, label: 'About', href: '#about' },
  { icon: <Briefcase size={22} />, label: 'Work', href: '#work' },
  { icon: <Mail size={22} />, label: 'Contact', href: '#contact' },
];

function App() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const progressScale = useTransform(scrollY, [0, 10000], [0, 1]);

  const hasTouch = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }, []);

  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const onScroll = () => ScrollTrigger.update();
    lenis.on('scroll', onScroll);

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    // Ensure all ScrollTriggers are measured after Lenis is ready
    ScrollTrigger.refresh();

    return () => {
      lenis.off('scroll', onScroll);
      gsap.ticker.remove(onTick);
    };
  }, [lenis]);
  
  useEffect(() => {
    // Custom Cursor Logic
    if (hasTouch) return;
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        cursor.classList.add('active');
      } else {
        cursor.classList.remove('active');
      }
      
      // Handle project hover for specific elements if needed
      if (target.closest('.project-hover-target')) {
        cursor.classList.add('project-hover');
      } else {
        cursor.classList.remove('project-hover');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [hasTouch]);

  return (
    <ReactLenis
      root
      options={{
        smoothWheel: true,
        lerp: 0.08,
        syncTouch: true,
        touchMultiplier: 1.1,
        wheelMultiplier: 0.9,
        autoRaf: false,
        anchors: true,
      }}
    >
      <div className="min-h-screen text-white selection:bg-[#00ff88] selection:text-black relative">
        <Noise />
        <AnimatedBackground />
        <AmbientGlow color="rgba(0,255,136,0.2)" />
        <div ref={cursorRef} className="custom-cursor hidden md:block"></div>
        
        {/* Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-[#00ff88] z-50 origin-left"
          style={{ scaleX: progressScale }}
        />

        {/* 1. Hero Section (Full width image overlay) */}
        <HeroSection />

        <section className="px-6 md:px-20 mt-8 md:mt-0">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4 md:gap-6">
            <MagneticButton className="inline-flex">
              <GlassyButton variant="neon" size="md">Book Discovery Call</GlassyButton>
            </MagneticButton>
            <RippleButton className="px-7 py-3.5 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-xs">
              Download Portfolio PDF
            </RippleButton>
            <div className="ml-auto hidden lg:flex">
              <EyesFollowCursor eyeSize={52} pupilSize={16} />
            </div>
          </div>
        </section>

        {/* 2. About Me — With CursorRevealImage (Framer Cursor Mask Reveal) */}
        <section id="about" className="py-32 px-6 md:px-20 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-4xl md:text-6xl font-black uppercase mb-10"
          >
            <ClipReveal>
              <UnblurTextReveal text="About Me" />
            </ClipReveal>
          </motion.h2>
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Cursor Reveal Image — move cursor over image to reveal color */}
            <div className="w-full lg:w-[40%] aspect-[4/5] rounded-2xl overflow-hidden flex-shrink-0">
              <CursorRevealImage
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
                alt="Portfolio work"
                className="w-full h-full"
                cursorSize={240}
              />
            </div>
            <div className="flex-1">
              <p className="text-2xl md:text-4xl leading-tight md:leading-snug text-white/70 font-medium max-w-5xl">
                I craft compelling visual narratives that elevate brands. With a deep passion for{' '}
                <TextGlowHover text="bold typography" className="text-white" />,{' '}
                <TextGlowHover text="immersive layouts" className="text-[#00ff88]" />, and conceptual storytelling, I bridge the gap between aesthetics and strategic design.
              </p>
              <p className="text-white/40 mt-8 text-base leading-relaxed max-w-2xl">
                Move your cursor over the image to reveal my work in full color.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="rounded-2xl border border-white/10 overflow-hidden min-h-[360px]">
              <LiquidImage
                src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop"
                alt="Creative Process"
                className="w-full h-full"
                intensity={18}
              />
            </div>
            <div className="rounded-2xl border border-white/10 p-8 md:p-12 bg-black/30 flex flex-col justify-between">
              <ImageMaskedText
                text="Creative DNA"
                imageSrc="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600&auto=format&fit=crop"
                fontSize="text-5xl md:text-7xl"
              />
              <p className="text-white/60 text-sm md:text-base mt-6 leading-relaxed">
                Aapke client ne jo bola tha — maximum interaction. Isliye har section me hover, parallax, reveal,
                motion typography, cursor response aur tactile buttons integrated hain.
              </p>
            </div>
          </div>
        </section>

        {/* Deep About + Vision */}
        <AboutSection />
        <VisionSection />

        {/* Parallax Marquee 1 */}
        <ParallaxMarquee text="Design • Innovation • AI Art • Brand Identity • " baseVelocity={5} direction="left" />

        {/* 3. Resume Section (Experience & Education) */}
        <ResumeSection />

        {/* Experience Timeline */}
        <ExperienceSection />

        {/* 4. Stats — Animated Counters + TiltCard + BorderBeam */}
        <StatsSection />

        {/* 4. Top Skills */}
        <section className="py-32 px-6 md:px-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-20 text-white/70">
              <UnblurTextReveal text="Top Skills" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
              {topSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group cursor-pointer"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[#00ff88] text-sm font-bold">0{index + 1}</span>
                    <h3 className="text-2xl font-bold uppercase transition-colors group-hover:text-[#00ff88]">
                      <RollingText text={skill.name} />
                    </h3>
                  </div>
                  <TextPressure 
                    text={skill.desc} 
                    className="text-white/60 pl-8 border-l border-white/10 group-hover:border-[#00ff88] transition-colors text-sm" 
                    flexibility={0.3}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Featured Work (Horizontal Scroll) */}
        <section className="py-6">
          <HorizontalGallery />
        </section>

        {/* 6. Case Studies (Pinned Section) */}
        <PinnedCaseStudies />

        {/* Cinematic Transition — Text Video Mask */}
        <section className="h-[60vh] flex items-center justify-center">
           <TextVideoMask 
             text="IMAGINATION" 
             videoSrc="https://assets.mixkit.co/videos/preview/mixkit-abstract-flowing-purple-and-blue-gradient-background-23423-large.mp4"
             className="w-full h-full"
             fontSize="text-[15vw]"
           />
        </section>

        {/* 7. Services (Stacked Cards) */}
        <StackedCards />


        {/* Skills Flip + FAQ + Pricing */}
        <SkillsFlipSection />
        <ServicePricing />
        <FAQSection />

        {/* Parallax Marquee 2 */}
        <ParallaxMarquee text="Creative Flow • Modern Brutalism • High-End Motion • " baseVelocity={5} direction="right" />

        {/* 8. Tools I Use (Marquee) */}
        <section className="py-32 bg-[#00ff88] text-black overflow-hidden flex flex-col justify-center min-h-[40vh]">
          <h2 className="text-center text-xl font-bold uppercase tracking-[0.3em] mb-16">Tools of the Trade</h2>
          <div className="max-w-7xl mx-auto px-6 md:px-20 mb-14">
            <div className="rounded-[2rem] bg-black/10 border border-black/10 p-6">
              <ToolIconRow className="justify-center" />
            </div>
          </div>
          <div className="relative w-full flex overflow-x-hidden group">
            <div className="animate-marquee flex whitespace-nowrap gap-20 px-10 items-center">
              {[...tools, ...tools, ...tools].map((tool, i) => (
                <span key={i} className="text-6xl md:text-8xl font-black uppercase text-black/70">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Contact Section */}
        <section id="contact" className="h-screen flex flex-col items-center justify-center relative px-6 text-center">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
          <h2 className="text-[12vw] font-black uppercase leading-none mb-10 z-10 hover:text-[#00ff88] transition-all duration-300">
            <RollingText text="LET'S TALK" />
          </h2>
          <div className="flex flex-col items-center gap-6 z-10">
            <a href="tel:+916267382299" className="text-3xl font-black text-[#00ff88] hover:text-white transition-colors">
              +91 6267382299
            </a>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-6">
              <IconSlideButton icon={<Send size={20} />} onClick={() => window.location.href = 'mailto:hello@lokesh.dev'}>
                Send an Email
              </IconSlideButton>
              <CircleExpandButton icon={<Sparkles size={20} />}>
                Start a Project
              </CircleExpandButton>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-16">
              {['WhatsApp', 'Email', 'Instagram', 'Behance', 'Dribbble'].map((social, i) => (
                <a key={i} href="#" className="text-xl md:text-2xl font-bold uppercase tracking-widest transition-colors relative group cursor-none">
                  <TextGlowHover text={social} />
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#00ff88] transition-all group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="dock" className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 hidden md:block">
          <Dock items={dockItems} />
        </section>

      </div>
    </ReactLenis>
  );
}

export default App;
