'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Code, Smartphone, Users, Cpu, Calendar, Wrench } from 'lucide-react';

const services = [
  { key: 'webDev', icon: Code, color: 'primary' },
  { key: 'mobileDev', icon: Smartphone, color: 'accent' },
  { key: 'consulting', icon: Users, color: 'primary' },
  { key: 'customSoftware', icon: Cpu, color: 'accent' },
  { key: 'eventOrg', icon: Calendar, color: 'primary' },
  { key: 'maintenance', icon: Wrench, color: 'accent' },
];

export default function Services() {
  const t = useTranslations('services');

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="blob w-[600px] h-[600px] bg-primary-500/10 -top-64 -right-64" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass border border-primary-500/30 text-sm font-medium text-primary-400 mb-4">
            {t('badge')}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="tech-card relative p-8 rounded-2xl glass border border-white/10 hover:border-primary-500/30 overflow-hidden h-full">
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  service.color === 'primary' 
                    ? 'bg-gradient-to-br from-primary-500/10 to-transparent' 
                    : 'bg-gradient-to-br from-accent-500/10 to-transparent'
                }`} />
                
                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  service.color === 'primary'
                    ? 'bg-primary-500/20 text-primary-500'
                    : 'bg-accent-500/20 text-accent-500'
                }`}>
                  <service.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {t(`items.${service.key}.title`)}
                </h3>
                <p className="relative text-gray-400 leading-relaxed">
                  {t(`items.${service.key}.description`)}
                </p>

                {/* Corner Accent */}
                <div className={`absolute -bottom-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 transition-opacity ${
                  service.color === 'primary' ? 'bg-primary-500' : 'bg-accent-500'
                }`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

