import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Trophy } from 'lucide-react';

const hackathons = [
  {
    title: 'NEXXT Hackathon',
    badge: 'Finalist',
    date: 'November 2025',
    organizer: 'Raiffeisen Bank Romania',
    description: 'Built FinAI, an AI-powered banking robo-advisor with React + TypeScript frontend and FastAPI + PostgreSQL backend with ML-based risk scoring.',
  },
  {
    title: 'Future Forward Hackathon',
    badge: '4th Place',
    date: 'November 2025',
    organizer: 'UiPath',
    description: 'Built SkyPath, an AI-driven multi-agent travel assistant with optimized flight routes and personalized itineraries using Django and React.',
  },
  {
    title: 'SmartHack Hackathon',
    badge: 'Participant',
    date: 'November 2025',
    organizer: 'ASMI',
    description: 'Developed VoiceLearn+, an AI-powered learning platform with speech-to-text pronunciation exercises and teacher dashboard for progress tracking.',
  },
];

const languages = [
  { flag: '🇷🇴', name: 'Romanian', level: 'Native' },
  { flag: '🇬🇧', name: 'English', level: 'Fluent' },
  { flag: '🇫🇷', name: 'French', level: 'Basic' },
];

const hobbies = ['🎮 Gaming', '🚗 Cars', '🎵 Music', '👔 Fashion', '🍳 Cooking', '⚽ Football'];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-[#070b14] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/15 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs tracking-widest uppercase mb-4">
            Experience
          </div>
          <h2 className="text-4xl sm:text-5xl text-white">
            Achievements &amp; <span className="text-indigo-400">Activities</span>
          </h2>
        </motion.div>

        {/* Hackathons — full width */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-500/20 flex items-center justify-center">
              <Trophy className="w-4 h-4 text-indigo-400" />
            </div>
            <h3 className="text-xl text-white">Hackathons</h3>
          </div>

          <div className="space-y-5">
            {hackathons.map((h, index) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l border-indigo-500/20 pb-2"
              >
                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_8px_2px_rgba(99,102,241,0.4)]" />
                <div className="bg-[#0e1527] border border-slate-800 rounded-xl p-7 hover:border-indigo-500/25 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="text-white text-lg font-medium">{h.title}</div>
                    <span className="text-sm text-slate-500">{h.date}</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/20 text-indigo-400">
                      {h.badge}
                    </span>
                    <span className="text-sm text-slate-600">by {h.organizer}</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{h.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages + Hobbies — full width, 2 columns */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0e1527] border border-slate-800 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/6 to-transparent pointer-events-none" />
            <h3 className="text-white font-medium mb-6 relative">Languages</h3>
            <div className="grid grid-cols-3 gap-6 relative">
              {languages.map((l) => (
                <div key={l.name} className="text-center">
                  <div className="text-4xl mb-2">{l.flag}</div>
                  <div className="text-slate-300">{l.name}</div>
                  <div className="text-slate-600 text-sm mt-0.5">{l.level}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#0e1527] border border-slate-800 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/6 to-transparent pointer-events-none" />
            <h3 className="text-white font-medium mb-6 relative">Hobbies &amp; Interests</h3>
            <div className="grid grid-cols-3 gap-3 relative">
              {hobbies.map((hobby, i) => (
                <motion.span
                  key={hobby}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                  className="px-3 py-2 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300 text-sm text-center hover:border-indigo-500/30 transition-all duration-200 cursor-default"
                >
                  {hobby}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
