import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, Github, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { FloatingGeometry } from './3d/FloatingGeometry';
import poza from './static/pozasite.jpeg';

const letterVariants = {
  hidden: { opacity: 0, y: 36, filter: 'blur(8px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { delay: 0.3 + i * 0.055, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

function AnimatedName({ name }: { name: string }) {
  return (
    <span className="inline-flex flex-wrap">
      {name.split('').map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={letterVariants}
          style={{ display: 'inline-block' }}
          className="text-indigo-400"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const scrollRef = useRef(0);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (v) => { scrollRef.current = v; });

  return (
    <section className="relative min-h-screen flex items-start pt-16 overflow-hidden bg-[#070b14]">
      {/* 3D model — full-screen background layer */}
      <div className="absolute inset-0 z-0">
        <FloatingGeometry scrollRef={scrollRef} />
      </div>

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Radial vignette — darkens edges so 3D doesn't distract */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, #070b14 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <div className="pt-8">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl mb-6 leading-tight text-white font-medium">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block"
              >
                Hi, I'm
              </motion.span>
              <AnimatedName name="Sebastian" />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-slate-400 text-xl sm:text-2xl mb-10 max-w-md leading-relaxed"
            >
              Software Engineering Student &amp; Full-Stack Developer — building AI-powered solutions
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.05 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors duration-200"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>

              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-xl border border-slate-700 text-slate-300 hover:border-indigo-500 hover:text-indigo-300 hover:bg-indigo-500/10 transition-all duration-200 font-medium"
              >
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex flex-wrap gap-6 text-slate-500 text-sm"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span className="text-slate-400">Constanța / Bucharest</span>
              </div>
              <a href="mailto:contact@sebastian-popescu.com" className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
              <a href="https://github.com/sebiisgarb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </motion.div>
          </div>

          {/* Right — photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Indigo ring */}
              <div className="absolute inset-0 rounded-full border border-indigo-500/25" />
              <div className="absolute -inset-3 rounded-full border border-indigo-500/10" />

              {/* Glow under photo */}
              <div className="absolute inset-0 rounded-full bg-indigo-600/20 blur-2xl scale-90" />

              {/* Photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-indigo-500/30">
                <ImageWithFallback
                  src={poza}
                  alt="Sebastian Popescu"
                  className="w-full h-full object-cover"
                style={{ objectPosition: '50% 15%' }}
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
