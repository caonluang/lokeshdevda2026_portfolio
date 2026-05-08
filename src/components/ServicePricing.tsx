import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Globe, Shield, Cpu, Activity } from 'lucide-react';

const plans = [
  {
    name: "Visual Identity",
    price: "Custom",
    description: "Essential design infrastructure for startups needing a professional foundation.",
    features: [
      "Logo Design & Variations",
      "Core Color Palette",
      "Typography System",
      "Social Media Assets",
      "Brand Style Guide",
    ],
    icon: Shield,
    color: "#10B981"
  },
  {
    name: "Full Brand Scale",
    price: "Best Value",
    description: "Comprehensive infrastructure for businesses looking to dominate their market.",
    features: [
      "Everything in Identity",
      "Packaging & Label Design",
      "Marketing Collateral",
      "Stationery Design",
      "Premium Brand Book",
    ],
    icon: Zap,
    color: "#34D399",
    featured: true
  },
  {
    name: "Digital Suite",
    price: "Pro",
    description: "Advanced web infrastructure and interactive design for modern digital products.",
    features: [
      "WordPress Site Build",
      "Responsive UI Design",
      "SEO Optimization",
      "Hosting Setup",
      "Maintenance Support",
    ],
    icon: Globe,
    color: "#10B981"
  }
];

export const ServicePricing = () => {
  return (
    <section className="py-40 bg-[#050505] border-y border-white/5 relative overflow-hidden">
      {/* Axiom Ambient Layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Activity size={12} className="text-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary font-mono">Infrastructure as a Service</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 uppercase">
            Design Infrastructure<br />for the <span className="text-zinc-500">modern web</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg font-medium">
            Scalable design solutions and conversion-oriented visual systems built to support your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-[16px] p-8 flex flex-col border ${
                plan.featured 
                ? 'bg-zinc-900/50 border-primary/30 shadow-[0_0_40px_rgba(16,185,129,0.1)]' 
                : 'bg-zinc-950 border-white/5'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-black text-[10px] font-black uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="flex items-center justify-between mb-8">
                <div className={`p-3 rounded-[8px] bg-white/5 border border-white/10 ${plan.featured ? 'text-primary' : 'text-zinc-400'}`}>
                  <plan.icon size={24} />
                </div>
                <span className="font-mono text-[10px] font-black text-zinc-600 uppercase tracking-widest">{plan.price}</span>
              </div>

              <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">{plan.name}</h3>
              <p className="text-sm text-zinc-500 mb-8 font-medium leading-relaxed">
                {plan.description}
              </p>

              <div className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-primary/10 border border-primary/20">
                      <Check size={10} className="text-primary" />
                    </div>
                    <span className="text-xs font-bold text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-[8px] font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 group ${
                plan.featured 
                ? 'bg-primary text-black hover:bg-white' 
                : 'bg-white/5 text-white hover:bg-white hover:text-black border border-white/10'
              }`}>
                Deploy Infrastructure
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Technical Metadata Footer */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-x-12 gap-y-6">
          {[
            { label: "Live Ledger Syncing", val: "Active", icon: Cpu },
            { label: "Total Asset Impact", val: "$14.2M+", icon: Activity },
            { label: "Processing Speed", val: "Real-time", icon: Zap }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <item.icon size={14} className="text-zinc-700" />
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-zinc-600 uppercase font-mono tracking-widest leading-none">{item.label}</span>
                <span className="text-xs font-bold text-zinc-400 mt-1">{item.val}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
