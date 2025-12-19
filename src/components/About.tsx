'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Target, Heart, Calendar, MapPin, Building } from 'lucide-react';

export default function About() {
  const t = useTranslations('about');

  const values = [
    { key: 'quality', icon: '🎯' },
    { key: 'innovation', icon: '💡' },
    { key: 'transparency', icon: '🤝' },
    { key: 'commitment', icon: '⚡' },
  ];

  const info = [
    { key: 'founded', icon: Calendar, value: t('info.foundedValue') },
    { key: 'location', icon: MapPin, value: t('info.locationValue') },
    { key: 'legal', icon: Building, value: t('info.legalValue') },
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="blob w-[600px] h-[600px] bg-primary-500/10 top-0 right-0" />
      <div className="blob w-[400px] h-[400px] bg-accent-500/10 bottom-0 left-0" style={{ animationDelay: '-4s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full glass border border-primary-500/30 text-sm font-medium text-primary-400 mb-6">
              {t('badge')}
            </span>
            
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              {t('title')}
            </h2>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              {t('description')}
            </p>

            {/* Mission */}
            <div className="p-6 rounded-2xl glass border border-white/10 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary-500" />
                </div>
                <h3 className="text-lg font-bold text-white">{t('mission.title')}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{t('mission.text')}</p>
            </div>

            {/* Values */}
            <div className="p-6 rounded-2xl glass border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent-500/20 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-accent-500" />
                </div>
                <h3 className="text-lg font-bold text-white">{t('values.title')}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value) => (
                  <div
                    key={value.key}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5"
                  >
                    <span className="text-2xl">{value.icon}</span>
                    <span className="text-sm font-medium text-gray-300">
                      {t(`values.items.${value.key}`)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Company Card */}
            <div className="relative">
              <div className="animated-border p-8">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center font-display text-4xl font-bold text-white mb-4 shadow-2xl shadow-primary-500/30">
                    D
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">Denis.pt</h3>
                  <p className="text-gray-500 text-sm mt-1">Sociedade Unipessoal, Lda</p>
                </div>

                <div className="space-y-4">
                  {info.map((item) => (
                    <div
                      key={item.key}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-primary-500" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">
                          {t(`info.${item.key}`)}
                        </div>
                        <div className="text-white font-medium">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Madeira Image Placeholder */}
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">🏝️</div>
                  <p className="text-white font-medium">Madeira Island</p>
                  <p className="text-gray-400 text-sm">Portugal</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

