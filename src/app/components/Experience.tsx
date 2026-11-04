import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Trophy, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import tomisHoneyLogo from './static/tomis-honey-logo.png';

const work = [
  {
    role: 'Fractional CTO · External Technical Partner',
    company: "Tomi's Honey",
    companyNote: 'Romanian honey producer',
    companyUrl: 'https://tomishoney.ro',
    logo: tomisHoneyLogo,
    period: 'September 2026 – Present',
    summary:
      "Leading the company's digital transformation end to end, owning the entire software stack from architecture and infrastructure to day-to-day operation, and advising the owners on where technology can drive growth.",
    highlights: [
      'Building a custom Odoo 19 ERP covering the full production flow: raw honey intake, lab-result quarantine, blending, packaging recipes, finished goods and sales',
      'End-to-end lot traceability from supplier barrel to customer jar, with expiry tracking and FEFO picking to meet food-safety requirements',
      'Mobile PWA for the production floor and warehouse, so work is recorded where it happens',
      'Online store synced live with warehouse stock; n8n automations linking orders to SmartBill invoicing and courier labels, removing manual data entry',
      'Designed and deployed the on-premise server and private network: containerized deployment, secure remote access, role-based permissions, automated backups',
      'AI agents integrated with the ERP: a phone voice agent that takes orders straight into the system, a store assistant that guides customers and places orders, and B2B outreach agents that find shops, pharmacies and cafés and send personalized emails',
    ],
    tags: ['Odoo 19', 'Python', 'PostgreSQL', 'Docker', 'Linux', 'n8n', 'PWA', 'AI Agents'],
    caseStudy: '/projects/tomis-honey',
  },
];

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

        {/* Work experience — full width */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-500/20 flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-indigo-400" />
            </div>
            <h3 className="text-xl text-white">Work Experience</h3>
          </div>

          <div className="space-y-5">
            {work.map((w, index) => (
              <motion.div
                key={`${w.company}-${w.role}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l border-indigo-500/20 pb-2"
              >
                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_8px_2px_rgba(99,102,241,0.4)]" />
                <div className="bg-[#0e1527] border border-slate-800 rounded-xl p-7 hover:border-indigo-500/25 transition-all duration-300">
                  {/* Logo is dark-on-transparent; invert so it reads on the dark card */}
                  <img src={w.logo} alt={`${w.company} logo`} className="h-8 w-auto mb-5 invert opacity-80" />
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="text-white text-lg font-medium">{w.role}</div>
                    <span className="text-sm text-slate-500">{w.period}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <a
                      href={w.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/20 text-indigo-400 hover:border-indigo-500/40 hover:text-indigo-300 transition-colors"
                    >
                      {w.company}
                    </a>
                    <span className="text-sm text-slate-600">{w.companyNote}</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed mb-5">{w.summary}</p>
                  <ul className="space-y-2 mb-6">
                    {w.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {w.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs bg-slate-800/80 text-slate-400 border border-slate-700/60 hover:border-indigo-500/35 hover:text-indigo-300 transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={w.caseStudy}
                    className="inline-flex items-center text-sm text-indigo-400 hover:text-indigo-300 transition-colors group/link"
                  >
                    View case study <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
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
