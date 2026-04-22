import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github, CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 'finai',
      title: 'FinAI — AI-Powered Financial Companion',
      description: 'Intelligent banking robo-advisor built at NEXXT AI Hackathon 2025 in partnership with Raiffeisen Bank. Analyzes user spending, savings and risk tolerance to recommend personalized investment products via an AI conversational assistant. One of 7 finalist teams out of 70+.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwYWklMjBiYW5raW5nfGVufDF8fHx8MTc3NTM4NzIzOHww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'AWS Bedrock', 'Docker'],
      status: 'Finished',
      statusColor: 'green' as const,
      type: 'NEXXT AI Hackathon 2025 — Raiffeisen Bank',
    },
    {
      id: 'skypath',
      title: 'SkyPath — AI-Powered Travel Assistant',
      description: 'Multi-agent AI travel planning platform that earned 4th place at UiPath Future Forward Hackathon 2025. Uses specialized AI agents to coordinate real-time flight optimization, hotel recommendations, and custom itinerary generation via Amadeus API.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhaXJwb3J0JTIwZmxpZ2h0fGVufDF8fHx8MTc3NTM4NzIzOHww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'TypeScript', 'Django', 'Tailwind CSS', 'OpenAI', 'Amadeus API'],
      status: 'Finished',
      statusColor: 'green' as const,
      type: 'UiPath Future Forward Hackathon 2025 — 4th Place',
    },
    {
      id: 'revive',
      title: 'ReVive — AI Image & Video Colorization',
      description: 'Full-stack web application for restoring and colorizing old images and videos using deep learning. Multiple AI colorization models (Artistic, Stable, Video) in a single platform. Users can upload media, pick the colorization method, apply filters and preview results in real time.',
      image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzUzNDI2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'Django', 'FastAPI', 'Docker', 'React', 'Deep Learning'],
      status: 'Finished',
      statusColor: 'green' as const,
      type: "Personal Bachelor's Thesis Project",
    },
    {
      id: 'voicelearn',
      title: 'VoiceLearn+ — AI Educational Platform',
      description: 'AI-powered literacy platform for early readers built at SmartHack 2025 (ASMI). Combines speech-to-text pronunciation checking, dictation exercises and a teacher dashboard with automated reports — reducing learning inequalities between urban and rural schools.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjaGlsZHJlbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc3NTM4NzIzOHww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Faster Whisper', 'OpenAI'],
      status: 'Finished',
      statusColor: 'green' as const,
      type: 'SmartHack 2025 — ASMI Hackathon',
    },
    {
      id: 'fittrack',
      title: 'FitTrack — Personal Fitness Tracker',
      description: 'Web app to manage workouts, track goals and monitor your progress. Includes user authentication, workout logging and progress charts. Developed in a team — contributed to backend, frontend design and business logic.',
      image: 'https://images.unsplash.com/photo-1580983693000-5654250f64d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhY2tpbmclMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzc1Mzg3MjM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'JavaScript', 'ChakraUI', 'TailwindCSS', 'Django', 'PostgreSQL'],
      status: 'Finished',
      statusColor: 'green' as const,
      type: 'Team Web Development Project',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6">
              My <span className="text-blue-600">Projects</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A collection of my work showcasing full-stack development, AI/ML integration, 
              and innovative solutions for real-world problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={ref} className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? '' : ''}`}>
                  {/* Image - Always on left for even index, right for odd */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'} relative group overflow-hidden`}>
                    <div className="aspect-[4/3] w-full">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'} p-8 flex flex-col justify-center`}>
                    <div className="text-sm text-blue-600 mb-3">{project.type}</div>
                    
                    <h2 className="text-2xl sm:text-3xl mb-4">{project.title}</h2>
                    
                    <div className="flex items-center gap-2 mb-4">
                      {project.statusColor === 'green' ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      ) : (
                        <Clock className="w-5 h-5 text-yellow-600" />
                      )}
                      <span
                        className={`text-sm px-3 py-1 rounded-full ${
                          project.statusColor === 'green'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="text-sm text-gray-500 mb-2">Technologies:</div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Link
                        to={`/projects/${project.id}`}
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white"
          >
            <h3 className="text-3xl sm:text-4xl mb-4">Want to see more?</h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Check out my GitHub profile for more projects, contributions, and open-source work.
            </p>
            <a
              href="https://github.com/sebiisgarb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              Visit GitHub Profile
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
