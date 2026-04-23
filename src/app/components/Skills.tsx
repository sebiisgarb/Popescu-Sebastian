import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const skillCategories = [
  { title: 'Languages', skills: ['Python', 'Java', 'C#', 'JavaScript', 'TypeScript', 'PL/SQL'] },
  { title: 'Frontend', skills: ['React', 'TypeScript', 'TailwindCSS', 'Chakra UI', 'Three.js'] },
  { title: 'Backend', skills: ['Django', 'FastAPI', 'ASP.NET MVC', 'REST API', 'PostgreSQL'] },
  { title: 'DevOps & Cloud', skills: ['Linux', 'Docker', 'AWS', 'Azure', 'Git', 'Google Colab'] },
  { title: 'AI & ML', skills: ['Deep Learning', 'Computer Vision', 'NLP', 'Model Training'] },
  { title: 'Other Tools', skills: ['Godot', 'AutoCAD', 'Postman'] },
];

const certifications = [
  { issuer: 'Microsoft Azure', name: 'Azure Fundamentals (AZ-900)' },
  { issuer: 'Microsoft Azure', name: 'Security, Compliance & Identity (SC-900)' },
  { issuer: 'Udemy', name: '100 Days of Code: Python Pro Bootcamp' },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0f1e] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/15 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs tracking-widest uppercase mb-4">
            Skills
          </div>
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Tech <span className="text-indigo-400">Stack</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="group bg-[#0e1527] border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-900/20"
            >
              <h3 className="text-indigo-400 text-sm font-medium mb-4 uppercase tracking-wide">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.07 + si * 0.035 }}
                    className="px-3 py-1.5 rounded-lg text-sm bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:border-indigo-500/40 hover:text-indigo-300 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <h3 className="text-xl text-white text-center mb-8">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.55 + i * 0.08 }}
                className="bg-[#0e1527] border border-slate-800 hover:border-indigo-500/30 rounded-xl p-5 transition-all duration-300"
              >
                <div className="text-indigo-400 text-xs font-medium mb-2 uppercase tracking-wide">{cert.issuer}</div>
                <div className="text-slate-300 text-sm leading-relaxed">{cert.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
