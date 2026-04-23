import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, Award, Code2 } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const stats = [
    { icon: Code2, label: 'Projects Completed', value: '15+' },
    { icon: Award, label: 'Hackathons', value: '3' },
    { icon: GraduationCap, label: 'Years Experience', value: '3+' },
  ];

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-[#070b14] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs tracking-widest uppercase mb-4">
            About Me
          </div>
          <h2 className="text-4xl sm:text-5xl text-white mb-6">
            Who <span className="text-indigo-400">Am I</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            I'm a passionate software engineer with expertise in full-stack development, DevOps and Cloud
            technologies. Currently pursuing my Master's degree while building innovative solutions that
            solve real-world problems.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl border border-slate-800 bg-[#0e1527] p-8 text-center hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-900/20"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-indigo-600/20 border border-indigo-500/20 mb-5">
                <stat.icon className="w-7 h-7 text-indigo-400" />
              </div>
              <div className="text-4xl text-white mb-2">{stat.value}</div>
              <div className="text-slate-500 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative rounded-2xl border border-slate-800 bg-[#0e1527] p-8 sm:p-12 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/8 via-transparent to-transparent pointer-events-none" />
          <h3 className="text-2xl text-white mb-8 relative">Education</h3>
          <div className="space-y-8 relative">
            {[
              { period: '2025 – Present', title: "Master's Degree in Software Engineering", institution: 'University of Bucharest' },
              { period: '2022 – 2025', title: "Bachelor's Degree in Computer Science", institution: 'Ovidius University of Constanța • Grade: 8.87' },
              { period: '2018 – 2022', title: 'Bacalaureat Diploma', institution: 'Decebal Highschool of Constanța • Grade: 8.50' },
            ].map((edu, i) => (
              <motion.div
                key={edu.period}
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="relative pl-8 border-l border-indigo-500/25"
              >
                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_8px_2px_rgba(99,102,241,0.4)]" />
                <div className="text-xs text-indigo-400 mb-1 tracking-wide">{edu.period}</div>
                <div className="text-white mb-1">{edu.title}</div>
                <div className="text-slate-500 text-sm">{edu.institution}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
