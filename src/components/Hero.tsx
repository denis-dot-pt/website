'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Smartphone, Globe } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Animated Blobs */}
      <div className="blob w-[500px] h-[500px] bg-primary-500/20 -top-48 -left-48" />
      <div className="blob w-[400px] h-[400px] bg-accent-500/20 -bottom-32 -right-32" style={{ animationDelay: '-3s' }} />
      <div className="blob w-[300px] h-[300px] bg-primary-600/15 top-1/2 left-1/2" style={{ animationDelay: '-5s' }} />

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-[15%] hidden lg:block"
      >
        <div className="p-4 rounded-2xl glass border border-primary-500/30">
          <Code2 className="w-8 h-8 text-primary-500" />
        </div>
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-1/4 right-[15%] hidden lg:block"
      >
        <div className="p-4 rounded-2xl glass border border-accent-500/30">
          <Smartphone className="w-8 h-8 text-accent-500" />
        </div>
      </motion.div>
      
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-1/3 right-[20%] hidden lg:block"
      >
        <div className="p-4 rounded-2xl glass border border-primary-400/30">
          <Globe className="w-8 h-8 text-primary-400" />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/30 mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary-500" />
          <span className="text-sm font-medium text-primary-400">{t('badge')}</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">{t('title')}</span>
          <br />
          <span className="gradient-text">{t('titleHighlight')}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t('subtitle')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary-500/30 hover:scale-105 transition-all"
          >
            {t('cta')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="px-8 py-4 rounded-xl border border-white/20 text-white font-semibold text-lg hover:bg-white/5 hover:border-white/30 transition-all"
          >
            {t('ctaSecondary')}
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 sm:gap-16"
        >
          <div className="text-center">
            <div className="font-display text-4xl sm:text-5xl font-bold gradient-text mb-2">50+</div>
            <div className="text-sm text-gray-500">{t('stats.projects')}</div>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl sm:text-5xl font-bold gradient-text mb-2">100%</div>
            <div className="text-sm text-gray-500">{t('stats.satisfaction')}</div>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl sm:text-5xl font-bold gradient-text mb-2">15+</div>
            <div className="text-sm text-gray-500">{t('stats.technologies')}</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-primary-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

