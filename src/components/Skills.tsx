'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const technologies = {
  frontend: [
    { name: 'TypeScript', level: 95, color: '#3178c6' },
    { name: 'React', level: 95, color: '#61dafb' },
    { name: 'Next.js', level: 90, color: '#ffffff' },
    { name: 'Tailwind CSS', level: 90, color: '#38bdf8' },
    { name: 'Vue.js', level: 75, color: '#42b883' },
  ],
  backend: [
    { name: 'Node.js', level: 90, color: '#339933' },
    { name: 'Express', level: 85, color: '#ffffff' },
    { name: 'PostgreSQL', level: 80, color: '#4169e1' },
    { name: 'MongoDB', level: 80, color: '#47a248' },
    { name: 'GraphQL', level: 75, color: '#e10098' },
  ],
  mobile: [
    { name: 'React Native', level: 90, color: '#61dafb' },
    { name: 'Expo', level: 88, color: '#000020' },
    { name: 'iOS/Swift', level: 65, color: '#f05138' },
    { name: 'Android/Kotlin', level: 60, color: '#7f52ff' },
  ],
  tools: [
    { name: 'Git', level: 90, color: '#f05032' },
    { name: 'Docker', level: 75, color: '#2496ed' },
    { name: 'AWS', level: 70, color: '#ff9900' },
    { name: 'Vercel', level: 85, color: '#ffffff' },
    { name: 'Figma', level: 80, color: '#f24e1e' },
  ],
};

export default function Skills() {
  const t = useTranslations('skills');

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-800/50 to-transparent" />
      <div className="blob w-[500px] h-[500px] bg-accent-500/10 -bottom-32 -left-32" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass border border-accent-500/30 text-sm font-medium text-accent-400 mb-4">
            {t('badge')}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(technologies).map(([category, techs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="p-6 rounded-2xl glass border border-white/10"
            >
              <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary-500" />
                {t(`categories.${category}`)}
              </h3>
              
              <div className="space-y-4">
                {techs.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + index * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                      <span className="text-xs text-gray-500">{tech.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.05, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${tech.color}80, ${tech.color})`,
                          boxShadow: `0 0 20px ${tech.color}40`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 pt-16 border-t border-white/10"
        >
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60 hover:opacity-100 transition-opacity">
            {['TypeScript', 'React', 'Next.js', 'React Native', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'].map((tech) => (
              <div key={tech} className="text-gray-400 font-mono text-sm px-4 py-2 rounded-lg bg-white/5 border border-white/5">
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

