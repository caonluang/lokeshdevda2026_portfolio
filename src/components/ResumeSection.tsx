import { motion } from 'framer-motion';

const experience = [
  { company: "Angel Creation", role: "Graphic Designer", duration: "Feb 2024 – Nov 2025" },
  { company: "Krishna Printers", role: "Graphic Designer", duration: "Jun 2023 – Feb 2024" },
  { company: "Digital Graphics", role: "Graphic Designer", duration: "Jan 2023 – Jun 2023" },
  { company: "World Book of Star Records", role: "Graphic Designer & Web Developer", duration: "Oct 2022 – Jan 2023" },
  { company: "Sarvagya Online Studio", role: "Graphic Designer", duration: "Apr 2020 – Oct 2022" },
];

const education = [
  { course: "ITI (COPA)", university: "NCVT", score: "90%", year: "2022–23" },
  { course: "Graduation (Mathematics)", university: "B.U. Bhopal", score: "60%", year: "2019–22" },
  { course: "12th (Mathematics)", university: "M.P. Board Bhopal", score: "60%", year: "2018–19" },
];

export const ResumeSection = () => {
  return (
    <section className="py-32 px-6 md:px-20 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        
        {/* Experience Column */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-16 text-white flex items-center gap-4">
            <span className="w-8 h-1 bg-[#00ff88]"></span> Experience
          </h2>
          <div className="flex flex-col gap-10">
            {experience.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative pl-8 border-l border-white/10 hover:border-[#00ff88] transition-colors"
              >
                <div className="absolute w-3 h-3 bg-[#00ff88] rounded-full -left-[6.5px] top-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-[#00ff88] text-sm font-bold tracking-widest uppercase mb-2 block">{exp.duration}</span>
                <h3 className="text-2xl font-bold text-white uppercase mb-1">{exp.role}</h3>
                <p className="text-white/60 text-lg">{exp.company}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-16 text-white flex items-center gap-4">
            <span className="w-8 h-1 bg-[#00ff88]"></span> Education
          </h2>
          <div className="flex flex-col gap-10">
            {education.map((edu, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative pl-8 border-l border-white/10 hover:border-[#00ff88] transition-colors"
              >
                <div className="absolute w-3 h-3 bg-[#00ff88] rounded-full -left-[6.5px] top-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-[#00ff88] text-sm font-bold tracking-widest uppercase mb-2 block">{edu.year}</span>
                <h3 className="text-2xl font-bold text-white uppercase mb-1">{edu.course}</h3>
                <p className="text-white/60 text-lg">{edu.university} &mdash; <span className="text-white font-bold">{edu.score}</span></p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
