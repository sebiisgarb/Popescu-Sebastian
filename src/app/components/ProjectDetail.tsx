import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Clock, Github, ExternalLink, Tag } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectDetailProps {
  title: string;
  description: string;
  fullDescription: string[];
  image: string;
  tags: string[];
  status: string;
  statusColor: 'green' | 'yellow';
  type: string;
  features: string[];
  challenges?: string[];
  github?: string;
  demo?: string;
  youtubeId?: string;
}

export function ProjectDetail({
  title,
  description,
  fullDescription,
  image,
  tags,
  status,
  statusColor,
  type,
  features,
  challenges,
  github,
  demo,
  youtubeId,
}: ProjectDetailProps) {
  return (
    <div className="min-h-screen bg-[#070b14]">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-700/10 rounded-full blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center text-slate-400 hover:text-indigo-400 mb-10 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>

            <div className="flex items-center gap-2 mb-5">
              {statusColor === 'green' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              ) : (
                <Clock className="w-4 h-4 text-yellow-500" />
              )}
              <span className={`text-xs px-3 py-1 rounded-full border ${
                statusColor === 'green'
                  ? 'bg-emerald-500/15 border-emerald-500/25 text-emerald-400'
                  : 'bg-yellow-500/15 border-yellow-500/25 text-yellow-400'
              }`}>
                {status}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">{title}</h1>

            <p className="text-slate-400 text-lg mb-10 max-w-3xl leading-relaxed">{description}</p>

            <div className="flex flex-wrap gap-4">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 hover:border-indigo-500/40 text-slate-300 hover:text-white text-sm font-medium transition-all duration-200"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>

          {/* Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden border border-slate-800 mt-12 mb-16"
          >
            {youtubeId ? (
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title={`${title} - Demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            ) : (
              <ImageWithFallback
                src={image}
                alt={title}
                className="w-full h-[480px] object-cover"
              />
            )}
          </motion.div>
        </div>
      </section>

      {/* Details */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-2xl text-white mb-6">Project Overview</h2>
                <div className="space-y-4 text-slate-400 leading-relaxed">
                  {fullDescription.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl text-white mb-6">Key Features</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 bg-[#0e1527] rounded-xl border border-slate-800 hover:border-indigo-500/30 transition-colors duration-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Challenges */}
              {challenges && challenges.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h2 className="text-2xl text-white mb-6">Challenges &amp; Solutions</h2>
                  <div className="space-y-4">
                    {challenges.map((challenge, i) => (
                      <div
                        key={i}
                        className="p-6 bg-[#0e1527] rounded-xl border border-indigo-500/20 relative overflow-hidden"
                      >
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-indigo-500/40" />
                        <p className="text-slate-400 text-sm leading-relaxed pl-4">{challenge}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="sticky top-24 space-y-5"
              >
                {/* Project info */}
                <div className="bg-[#0e1527] border border-slate-800 rounded-2xl p-6">
                  <h3 className="text-white font-medium mb-5">Project Info</h3>
                  <div className="flex items-start gap-3">
                    <Tag className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs text-slate-500 mb-1 uppercase tracking-wide">Type</div>
                      <div className="text-slate-300 text-sm">{type}</div>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="bg-[#0e1527] border border-slate-800 rounded-2xl p-6">
                  <h3 className="text-white font-medium mb-5">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg text-xs bg-slate-800/80 text-slate-400 border border-slate-700/60 hover:border-indigo-500/40 hover:text-indigo-300 transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {(github || demo) && (
                  <div className="bg-[#0e1527] border border-slate-800 rounded-2xl p-6 space-y-3">
                    <h3 className="text-white font-medium mb-4">Links</h3>
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 text-sm transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        View on GitHub
                      </a>
                    )}
                    {demo && (
                      <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 text-sm transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
