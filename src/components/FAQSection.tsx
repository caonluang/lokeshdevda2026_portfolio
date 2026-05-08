import React from 'react';
import { FAQAccordion } from './FAQAccordion';
import { RevealText } from './RevealText';
import { GlassyButton } from './GlassyButton';
import { RippleButton } from './RippleButton';
import { ArrowUpRight } from 'lucide-react';

const faqs: { question: string; answer: string }[] = [
  {
    question: 'What design services do you offer?',
    answer: 'I offer end-to-end creative services — from brand identity and logo design to social media creatives, packaging, UI/UX design, and motion graphics. Each project is fully customized to your brand vision.',
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'Timelines vary by scope. A logo project takes 5–7 days, brand identity packages 2–3 weeks, and full UI/UX projects 4–8 weeks. Rush delivery is available with a 30% surcharge.',
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Absolutely. I work with clients globally across India, UAE, UK, USA, and beyond. Communication happens via WhatsApp, Zoom, and email. All deliverables are provided in standard formats.',
  },
  {
    question: 'How many revisions are included?',
    answer: 'Standard packages include 3 rounds of revisions. Each revision cycle covers your feedback comprehensively. Additional rounds can be purchased if needed.',
  },
  {
    question: 'What file formats will I receive?',
    answer: 'You will receive all source files (AI, PSD, Figma), print-ready PDFs, and web-optimized exports (PNG, SVG, WebP). Brand identity packages include a full brand manual PDF.',
  },
  {
    question: 'Do you offer monthly retainer packages?',
    answer: 'Yes — my retainer packages start at ₹15,000/month for social media management (12 posts + stories) and scale up based on deliverable volume. Retainer clients get priority turnaround.',
  },
];

export const FAQSection: React.FC = () => {
  return (
    <section className="relative py-32 px-6 md:px-20 bg-[#050505]">
      <div className="max-w-5xl mx-auto">

        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-[#00ff88] tracking-[0.25em] text-xs uppercase font-bold mb-4">Got Questions?</p>
            <h2 className="text-5xl md:text-7xl font-black uppercase leading-none">
              <RevealText text="FAQ" className="block" />
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <RippleButton
              className="px-7 py-3.5 bg-[#00ff88] text-black font-bold text-sm tracking-widest uppercase rounded-full"
              rippleColor="rgba(0,0,0,0.2)"
            >
              Contact Me
            </RippleButton>
            <GlassyButton variant="default" icon={<ArrowUpRight size={16} />}>
              WhatsApp
            </GlassyButton>
          </div>
        </div>

        <FAQAccordion items={faqs} />
      </div>
    </section>
  );
};
