import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'Java', 'C#', 'JavaScript', 'TypeScript', 'PL/SQL'],
    },
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'TailwindCSS', 'Chakra UI', 'Three.js'],
    },
    {
      title: 'Backend',
      skills: ['Django', 'FastAPI', 'ASP.NET MVC', 'REST API', 'PostgreSQL'],
    },
    {
      title: 'DevOps & Cloud',
      skills: ['Linux', 'Docker', 'AWS', 'Azure', 'Git', 'Google Colab'],
    },
    {
      title: 'AI & ML',
      skills: ['Deep Learning', 'Computer Vision', 'NLP', 'Model Training'],
    },
    {
      title: 'Other Tools',
      skills: ['Godot', 'AutoCAD', 'Postman'],
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-6">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl mb-4 text-blue-600">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl sm:text-3xl mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <div className="text-blue-600 mb-2">Microsoft Azure</div>
              <div className="text-sm text-gray-600">Azure Fundamentals</div>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <div className="text-blue-600 mb-2">Microsoft Azure</div>
              <div className="text-sm text-gray-600">Security, Compliance & Identity</div>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <div className="text-blue-600 mb-2">Udemy</div>
              <div className="text-sm text-gray-600">100 Days of Code: Python Pro Bootcamp</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
