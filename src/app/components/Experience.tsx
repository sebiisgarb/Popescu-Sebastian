import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Trophy, Briefcase } from 'lucide-react';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const hackathons = [
    {
      title: 'NEXXT Hackathon',
      place: 'Finalist Team',
      date: 'November 2025',
      organizer: 'Raiffeisen Bank Romania',
      description: 'Built FinAI, an AI-powered banking robo-advisor with React + TypeScript frontend and FastAPI + PostgreSQL backend with ML-based risk scoring.',
    },
    {
      title: 'Future Forward Hackathon',
      place: '4th Place',
      date: 'November 2025',
      organizer: 'UiPath',
      description: 'Built SkyPath, an AI-driven multi-agent travel assistant with optimized flight routes and personalized itineraries using Django and React.',
    },
    {
      title: 'SmartHack Hackathon',
      place: 'Participant',
      date: 'November 2025',
      organizer: 'ASMI',
      description: 'Developed VoiceLearn+, an AI-powered learning platform with speech-to-text pronunciation exercises and teacher dashboard for progress tracking.',
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-6">Experience & Achievements</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="space-y-12">
          {/* Hackathons Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl">Hackathons</h3>
            </div>

            <div className="space-y-6">
              {hackathons.map((hackathon, index) => (
                <motion.div
                  key={hackathon.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8 pb-8 border-l-2 border-gray-200 last:pb-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <h4 className="text-xl mb-1">{hackathon.title}</h4>
                        <div className="text-blue-600">{hackathon.place}</div>
                      </div>
                      <div className="text-sm text-gray-600">{hackathon.date}</div>
                    </div>
                    
                    <div className="text-sm text-gray-600 mb-3">
                      Organized by {hackathon.organizer}
                    </div>
                    
                    <p className="text-gray-700">{hackathon.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl sm:text-3xl mb-6">Languages</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">🇷🇴</div>
                <div className="text-lg mb-1">Romanian</div>
                <div className="text-sm text-gray-600">Native</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🇬🇧</div>
                <div className="text-lg mb-1">English</div>
                <div className="text-sm text-gray-600">Fluent</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🇫🇷</div>
                <div className="text-lg mb-1">French</div>
                <div className="text-sm text-gray-600">Basic</div>
              </div>
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-2xl mb-6">Hobbies & Interests</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['🎮 Gaming', '🚗 Cars', '🎵 Music', '👔 Fashion', '🍳 Cooking', '⚽ Football'].map((hobby) => (
                <span
                  key={hobby}
                  className="px-4 py-2 bg-white rounded-full shadow-sm text-gray-700 hover:shadow-md transition-shadow"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
