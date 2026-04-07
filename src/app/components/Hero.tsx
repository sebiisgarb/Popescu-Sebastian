import { motion } from 'motion/react';
import { ArrowRight, Github, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm mb-6">
              Available for opportunities
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6">
              Hi, I'm <span className="text-blue-600">Sebastian</span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl text-gray-700 mb-6">
              Software Engineering Student
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Full-stack developer passionate about building intelligent applications 
              with AI/ML integration. Currently pursuing my Master's degree in Software 
              Engineering at University of Bucharest.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                Get in Touch
              </a>
            </div>
            
            <div className="flex flex-wrap gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Constanța / Bucharest</span>
              </div>
              <a
                href="mailto:contact@sebastian-popescu.com"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
              <a
                href="https://github.com/sebiisgarb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
          
          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="../../imports/pozasite.jpg"
                alt="Coding workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg"
            >
              <div className="text-3xl">🚀</div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg"
            >
              <div className="text-3xl">💻</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
