import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, Award, Code2 } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Code2, label: 'Projects Completed', value: '15+' },
    { icon: Award, label: 'Hackathons', value: '3' },
    { icon: GraduationCap, label: 'Years Experience', value: '3+' },
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
          <h2 className="text-4xl sm:text-5xl mb-6">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a passionate software engineer with expertise in full-stack development, 
            AI/ML integration, and cloud technologies. Currently pursuing my Master's degree 
            while building innovative solutions that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 sm:p-12 text-white"
        >
          <h3 className="text-2xl sm:text-3xl mb-6">Education</h3>
          <div className="space-y-6">
            <div className="border-l-4 border-white/50 pl-6">
              <div className="text-sm text-blue-200 mb-1">2025 - Present</div>
              <div className="text-xl mb-2">Master's Degree in Software Engineering</div>
              <div className="text-blue-200">University of Bucharest</div>
            </div>
            <div className="border-l-4 border-white/50 pl-6">
              <div className="text-sm text-blue-200 mb-1">2022 - 2025</div>
              <div className="text-xl mb-2">Bachelor's Degree in Computer Science</div>
              <div className="text-blue-200">Ovidius University of Constanța • Grade: 8.87</div>
            </div>
            <div className="border-l-4 border-white/50 pl-6">
              <div className="text-sm text-blue-200 mb-1">2018 - 2022</div>
              <div className="text-xl mb-2">Bacalaureat Diploma</div>
              <div className="text-blue-200">Decebal Highschool of Constanța • Grade: 8.50</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
