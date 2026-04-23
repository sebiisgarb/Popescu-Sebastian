import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    id: 'finai',
    title: 'FinAI — AI-Powered Financial Companion',
    description: 'Intelligent banking robo-advisor built at NEXXT AI Hackathon 2025 in partnership with Raiffeisen Bank. One of 7 finalist teams out of 70+.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwYWklMjBiYW5raW5nfGVufDF8fHx8MTc3NTM4NzIzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'AWS Bedrock', 'Docker'],
    type: 'NEXXT AI Hackathon 2025 — Raiffeisen Bank',
  },
  {
    id: 'skypath',
    title: 'SkyPath — AI-Powered Travel Assistant',
    description: 'Multi-agent AI travel planning platform, 4th place at UiPath Future Forward Hackathon 2025. Real-time flight optimization and hotel recommendations via Amadeus API.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhaXJwb3J0JTIwZmxpZ2h0fGVufDF8fHx8MTc3NTM4NzIzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'TypeScript', 'Django', 'Tailwind CSS', 'OpenAI', 'Amadeus API'],
    type: 'UiPath Future Forward Hackathon 2025 — 4th Place',
  },
  {
    id: 'revive',
    title: 'ReVive — AI Image & Video Colorization',
    description: 'Full-stack web application for restoring and colorizing old images and videos using deep learning. Multiple AI models — Artistic, Stable, Video — in a single platform.',
    image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzUzNDI2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Python', 'Django', 'FastAPI', 'Docker', 'React', 'Deep Learning'],
    type: "Personal Bachelor's Thesis Project",
  },
  {
    id: 'voicelearn',
    title: 'VoiceLearn+ — AI Educational Platform',
    description: 'AI-powered literacy platform for early readers built at SmartHack 2025. Speech-to-text pronunciation checking, dictation exercises and automated teacher reports.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjaGlsZHJlbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc3NTM4NzIzOHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Faster Whisper', 'OpenAI'],
    type: 'SmartHack 2025 — ASMI Hackathon',
  },
  {
    id: 'fittrack',
    title: 'FitTrack — Personal Fitness Tracker',
    description: 'Web app to manage workouts, track goals and monitor your progress. Includes user authentication, workout logging and progress charts. Team project.',
    image: 'https://images.unsplash.com/photo-1580983693000-5654250f64d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhY2tpbmclMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzc1Mzg3MjM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'JavaScript', 'ChakraUI', 'TailwindCSS', 'Django', 'PostgreSQL'],
    type: 'Team Web Development Project',
  },
];

function ProjectCard({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group bg-[#0e1527] border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/25 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-900/15"
    >
      <div className="grid lg:grid-cols-2">
        {/* Image */}
        <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} relative overflow-hidden`}>
          <div className="aspect-[4/3] w-full">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1527] via-[#0e1527]/40 to-transparent opacity-70" />
          </div>
        </div>

        {/* Content */}
        <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} p-8 lg:p-10 flex flex-col justify-center`}>
          <div className="text-indigo-400 text-xs font-medium uppercase tracking-wide mb-4">{project.type}</div>
          <h2 className="text-xl sm:text-2xl text-white mb-4 leading-snug">{project.title}</h2>
          <div className="flex items-center gap-2 mb-5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">Finished</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-7">{project.description}</p>
          <div className="mb-7">
            <div className="text-xs text-slate-600 mb-3 uppercase tracking-wide">Stack</div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-lg text-xs bg-slate-800/80 text-slate-400 border border-slate-700/60 hover:border-indigo-500/35 hover:text-indigo-300 transition-all duration-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center w-fit px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors duration-200 group/btn"
          >
            View Details <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div className="min-h-screen bg-[#070b14]">
      <Navigation />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-indigo-700/10 rounded-full blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <div className="max-w-7xl mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs tracking-widest uppercase mb-6">
              Portfolio
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
              My <span className="text-indigo-400">Projects</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Full-stack development, AI/ML integration, and innovative solutions for real-world problems.
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={ref} className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
          ))}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-12 relative overflow-hidden rounded-2xl border border-slate-800 bg-[#0e1527] p-12 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/8 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
            <h3 className="text-3xl text-white mb-4 relative">Want to see more?</h3>
            <p className="text-slate-400 mb-8 relative max-w-lg mx-auto">Check out my GitHub for more projects, contributions, and open-source work.</p>
            <a
              href="https://github.com/sebiisgarb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors duration-200 relative gap-2"
            >
              <Github className="w-4 h-4" />
              Visit GitHub Profile
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
