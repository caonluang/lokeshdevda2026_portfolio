import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, Sparkles, Printer, Palette, 
  Globe, Award, ChevronLeft, ChevronRight, ExternalLink,
  Zap
} from 'lucide-react';
import { cn } from '../utils/cn';

interface Experience {
  company: string;
  role: string;
  period: string;
  color: string;
  accent: string;
  glow: string;
  icon: React.ElementType;
  description: string;
  longDescription: string;
  skills: string[];
  theme: 'cosmic' | 'industrial' | 'digital' | 'golden' | 'startup';
  achievements: string[];
}

const experiences: Experience[] = [
  {
    company: 'Angel Creation',
    role: 'Senior Graphic Designer',
    period: 'Feb 2024 - Nov 2025',
    color: '#7B2FFF',
    accent: '#9B59FF',
    glow: 'rgba(123,47,255,0.4)',
    icon: Sparkles,
    description: 'Leading creative design initiatives for premium brand identities and digital assets.',
    longDescription: 'At Angel Creation, I spearheaded the visual identity transformations for a wide range of clients. My focus is on creating cohesive brand systems that resonate with modern audiences while maintaining timeless aesthetic principles.',
    skills: ['Brand Identity', 'Logo Design', 'Art Direction', 'Visual Strategy'],
    theme: 'cosmic',
    achievements: [
      'Designed logos and brand identities for 15+ clients across industries',
      'Developed 20+ successful brand identity systems',
      'Curated high-impact visual assets for premium marketing campaigns'
    ]
  },
  {
    company: 'Krishna Printers',
    role: 'Graphic Designer',
    period: 'Jun 2023 - Feb 2024',
    color: '#FF6B35',
    accent: '#FF9F43',
    glow: 'rgba(255,107,53,0.4)',
    icon: Printer,
    description: 'Specialized in print-ready designs and complex pre-press workflows.',
    longDescription: 'At Krishna Printers, I mastered the technical aspects of print production. I ensured every pixel translated perfectly to the page, handling everything from brochures to large-format advertising.',
    skills: ['Print Design', 'Packaging', 'Color Theory', 'Pre-Press'],
    theme: 'industrial',
    achievements: [
      'Managed print production for large-format advertising campaigns',
      'Designed packaging for 50+ FMCG products',
      'Optimized CMYK workflow for high-volume print orders'
    ]
  },
  {
    company: 'Digital Graphics',
    role: 'Graphic Designer',
    period: 'Jan 2023 - Jun 2023',
    color: '#00D4AA',
    accent: '#00F5C4',
    glow: 'rgba(0,212,170,0.4)',
    icon: Palette,
    description: 'Created dynamic visual content for digital platforms and social media.',
    longDescription: 'Focused on creating high-conversion visual assets for social media campaigns. I specialized in eye-catching graphics that drive engagement across various digital channels.',
    skills: ['Social Media', 'Digital Marketing', 'Ad Graphics', 'Visual Design'],
    theme: 'digital',
    achievements: [
      'Crafted viral social media campaigns with significant organic reach',
      'Designed high-conversion ad creatives for digital platforms',
      'Maintained 100% client satisfaction across 50+ digital projects'
    ]
  },
  {
    company: 'World Book of Star Records',
    role: 'Graphic Designer & Web Developer',
    period: 'Oct 2022 - Jan 2023',
    color: '#FFD700',
    accent: '#FFE55C',
    glow: 'rgba(255,215,0,0.4)',
    icon: Award,
    description: 'Dual role designing prestigious awards and developing official web platforms.',
    longDescription: 'Responsible for the visual prestige of international world record certificates and the digital home that hosted them. I combined high-end print design with WordPress development.',
    skills: ['Web Dev', 'Certificate Design', 'WordPress', 'Branding'],
    theme: 'golden',
    achievements: [
      'Built WordPress websites for local and international businesses',
      'Modernized the official website with a custom WordPress theme',
      'Designed 500+ unique world record certificates'
    ]
  },
  {
    company: 'Sarvagya Online Studio',
    role: 'Graphic Designer',
    period: 'Apr 2020 - Oct 2022',
    color: '#E84393',
    accent: '#FF6B9D',
    glow: 'rgba(232,67,147,0.4)',
    icon: Globe,
    description: 'Foundation of design career building comprehensive visual solutions.',
    longDescription: 'My foundational years where I learned to adapt to any design challenge. From local business branding to complex digital marketing collateral, I built a versatile skill set in visual storytelling.',
    skills: ['Branding', 'Marketing', 'CorelDraw', 'Client Relations'],
    theme: 'startup',
    achievements: [
      'Developed 100+ distinct branding projects for startups',
      'Mastered CorelDraw and Photoshop for diverse client needs',
      'Established efficient remote design collaboration workflows'
    ]
  },
];

const ThemeBackground = ({ theme, color }: { theme: string; color: string }) => {
  switch(theme) {
    case 'cosmic':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.1, 0.8, 0.1],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{ background: `radial-gradient(circle, ${color}10, transparent 70%)` }}
          />
        </div>
      );
    case 'industrial':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `linear-gradient(45deg, ${color}20 1px, transparent 1px), linear-gradient(-45deg, ${color}20 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
          <motion.div 
            className="absolute inset-0 border-[40px] border-white/5"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      );
    case 'digital':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(${color}15 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }} />
          <motion.div 
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </div>
      );
    case 'golden':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute inset-0"
            style={{ background: `radial-gradient(circle at 50% 50%, ${color}05 0%, transparent 60%)` }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-12 h-12 border border-yellow-500/10 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      );
    case 'startup':
      return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-0 right-0 w-64 h-64 border-t-2 border-r-2 border-pink-500/10 rounded-tr-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 border-b-2 border-l-2 border-pink-500/10 rounded-bl-3xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="w-[300px] h-[300px] rounded-full border border-pink-500/5"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      );
    default:
      return null;
  }
};

const ExperienceCard = ({ exp, isActive }: { exp: Experience; isActive: boolean }) => {
  const Icon = exp.icon;

  return (
    <div className={cn(
      "relative w-full h-full glass rounded-[2.5rem] overflow-hidden p-8 md:p-12",
      "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]", // Interaction Design: ease-out
      isActive ? "opacity-100 scale-100 translate-y-0 shadow-2xl" : "opacity-0 scale-[0.98] translate-y-4 shadow-none"
    )}>
      <ThemeBackground theme={exp.theme} color={exp.color} />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 h-full">
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="flex items-center gap-4 mb-8">
            <motion.div 
              initial={{ scale: 0.8, rotate: -10 }}
              animate={isActive ? { scale: 1, rotate: 0 } : {}}
              className="w-16 h-16 rounded-2xl flex items-center justify-center relative overflow-hidden group"
              style={{ backgroundColor: `${exp.color}20` }}
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${exp.color}40, transparent)` }}
              />
              <Icon size={32} style={{ color: exp.color }} className="relative z-10" />
            </motion.div>
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={isActive ? { opacity: 1, x: 0 } : {}}
                className="flex items-center gap-2 mb-1"
              >
                <Calendar size={14} className="text-slate-400" />
                <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">{exp.period}</span>
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0, x: -10 }}
                animate={isActive ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-black text-white tracking-tight"
              >
                {exp.company}
              </motion.h3>
            </div>
          </div>

          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-3"
            style={{ color: exp.accent }}
          >
            {exp.role}
            <span className="h-px flex-1 bg-white/10" />
          </motion.h4>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl"
          >
            {exp.longDescription}
          </motion.p>

          <div className="mt-auto">
             <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {exp.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 rounded-full glass text-sm font-medium text-white/80 hover:text-white transition-colors"
                  style={{ borderColor: `${exp.color}30` }}
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right Content - Achievements */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isActive ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="glass rounded-3xl p-8 relative overflow-hidden"
            style={{ backgroundColor: `${exp.color}05`, borderColor: `${exp.color}20` }}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Icon size={120} style={{ color: exp.color }} />
            </div>
            
            <h5 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
              <Zap size={14} style={{ color: exp.color }} />
              Key Achievements
            </h5>
            
            <ul className="space-y-6">
              {exp.achievements.map((achievement, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isActive ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + (idx * 0.1) }}
                  className="flex gap-4 group"
                >
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: exp.color }} />
                  <p className="text-slate-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                    {achievement}
                  </p>
                </motion.li>
              ))}
            </ul>

            <button 
              className="mt-8 w-full py-4 rounded-2xl flex items-center justify-center gap-2 text-sm font-bold transition-all hover:brightness-110 active:scale-[0.98] cursor-pointer"
              style={{ backgroundColor: exp.color, color: '#fff' }}
            >
              View Full Case Study
              <ExternalLink size={16} />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  
  const currentExp = experiences[activeIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      if (isHovered === null) {
        // Optional: auto play
        // setActiveIndex((prev) => (prev + 1) % experiences.length);
      }
    }, 8000);
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section id="work" className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 overflow-hidden selection:bg-white selection:text-black">
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 pointer-events-none transition-all duration-1000">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-video rounded-full opacity-10 blur-[150px]"
          style={{ backgroundColor: currentExp.color }}
        />
      </div>

      <div className="max-w-7xl w-full relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">Professional Journey</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter"
            >
              The <span className="text-slate-500">Design</span> Evolution
            </motion.h2>
          </div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex gap-12 p-6 glass rounded-3xl"
          >
            {[
              { label: 'Experience', val: '5+', sub: 'Years' },
              { label: 'Clients', val: '120+', sub: 'Global' },
              { label: 'Impact', val: '99%', sub: 'CSAT' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-black text-white">{stat.val}</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Content Area */}
        <div className="relative min-h-[600px] mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full h-full"
            >
              <ExperienceCard exp={currentExp} isActive={true} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation & Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls */}
          <div className="lg:col-span-3 flex gap-3">
            <button 
              onClick={() => setActiveIndex(prev => (prev - 1 + experiences.length) % experiences.length)}
              className="group p-5 rounded-2xl glass hover:bg-white/10 transition-all cursor-pointer"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => setActiveIndex(prev => (prev + 1) % experiences.length)}
              className="group p-5 rounded-2xl glass hover:bg-white/10 transition-all flex-1 flex items-center justify-between cursor-pointer"
            >
              <span className="text-sm font-bold uppercase tracking-widest px-4">Next Journey</span>
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Detailed Timeline */}
          <div className="lg:col-span-9 glass rounded-[2rem] p-4 flex items-center gap-4 overflow-x-auto no-scrollbar">
            {experiences.map((exp, i) => (
              <button
                key={i}
                onMouseEnter={() => setIsHovered(i)}
                onMouseLeave={() => setIsHovered(null)}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  "relative flex-1 min-w-[160px] py-4 px-6 rounded-2xl transition-all duration-500 group overflow-hidden cursor-pointer",
                  i === activeIndex ? "bg-white/10 shadow-2xl" : "hover:bg-white/5"
                )}
              >
                {/* Progress Bar for Active */}
                {i === activeIndex && (
                  <motion.div 
                    layoutId="active-bg"
                    className="absolute inset-0 z-0"
                    style={{ backgroundColor: `${exp.color}15` }}
                  />
                )}
                
                <div className="relative z-10 flex flex-col items-start text-left">
                  <span className={cn(
                    "text-[10px] font-bold uppercase tracking-widest mb-1 transition-colors",
                    i === activeIndex ? "text-white" : "text-slate-500"
                  )}>
                    {exp.period.split(' ')[0]}
                  </span>
                  <span className={cn(
                    "text-sm font-bold truncate w-full transition-colors",
                    i === activeIndex ? "text-white" : "text-slate-400"
                  )}>
                    {exp.company}
                  </span>
                </div>

                {/* Hover indicator */}
                <div 
                  className={cn(
                    "absolute bottom-0 left-0 h-1 transition-all duration-500",
                    i === activeIndex ? "w-full" : "w-0 group-hover:w-1/2"
                  )}
                  style={{ backgroundColor: exp.color }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="fixed bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      <div className="fixed top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
    </section>
  );
}
