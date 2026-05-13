import React from 'react';
import { FlipCard } from './FlipCard';
import { TiltCard } from './TiltCard';
import { RevealText } from './RevealText';
import { motion } from 'framer-motion';

const skills = [
  { title: 'Brand Identity', icon: '🎨', level: 95, tools: 'Illustrator · Figma · CorelDraw', color: '#FF6B6B' },
  { title: 'Social Media', icon: '📱', level: 92, tools: 'Photoshop · Canva · CapCut', color: '#4ECDC4' },
  { title: 'UI / UX Design', icon: '🖥️', level: 85, tools: 'Figma · Framer · Adobe XD', color: '#7B61FF' },
  { title: 'Motion Graphics', icon: '🎬', level: 80, tools: 'After Effects · Premiere Pro', color: '#F7DC6F' },
  { title: 'Print Design', icon: '🖨️', level: 90, tools: 'CorelDraw · Illustrator · Acrobat', color: '#00ff88' },
  { title: 'AI Art Direction', icon: '🤖', level: 88, tools: 'MidJourney · Stable Diffusion · ChatGPT', color: '#FF9FF3' },
];

export const SkillsFlipSection: React.FC = () => {
  return (
    <section className="relative py-32 px-6 md:px-20 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[#00ff88] tracking-[0.25em] text-xs uppercase font-bold mb-4">Expertise</p>
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none">
            <RevealText text="My" className="block" />
            <RevealText text="Skills" className="block text-white/30" delay={0.08} />
          </h2>
          <p className="text-white/40 mt-4 text-sm">Hover over a card to flip it</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <TiltCard key={i} tiltAmount={6} className="h-[240px]">
              <FlipCard
                className="h-[240px]"
                front={
                  // Front — skill name + icon
                  <div
                    className="w-full h-full rounded-2xl p-8 flex flex-col justify-between bg-[#111111] border border-white/5 hover:border-white/10 transition-colors"
                    style={{ boxShadow: `0 0 40px ${skill.color}10` }}
                  >
                    <span className="text-4xl">{skill.icon}</span>
                    <div>
                      <h3 className="text-2xl font-black uppercase text-white mb-1">{skill.title}</h3>
                      <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden mt-3">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: skill.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </div>
                      <span className="text-xs text-white/40 mt-1 block">{skill.level}% proficiency</span>
                    </div>
                  </div>
                }
                back={
                  // Back — tools
                  <div
                    className="w-full h-full rounded-2xl p-8 flex flex-col justify-center items-center text-center"
                    style={{ background: `linear-gradient(135deg, ${skill.color}22, ${skill.color}08)`, border: `1px solid ${skill.color}30` }}
                  >
                    <span className="text-5xl mb-4">{skill.icon}</span>
                    <h3 className="text-lg font-black uppercase mb-2" style={{ color: skill.color }}>{skill.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{skill.tools}</p>
                  </div>
                }
              />
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
