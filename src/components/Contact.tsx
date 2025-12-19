'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin, Mail, Code, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const t = useTranslations('contact');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const mailtoLink = `mailto:info@denis.pt?subject=Contact from ${formState.name}&body=${formState.message}%0A%0AFrom: ${formState.email}`;
    window.location.href = mailtoLink;
  };

  const activities = [
    { code: '62010', name: 'Software Programming' },
    { code: '62020', name: 'IT Consulting' },
    { code: '82300', name: 'Event Organization' },
    { code: '55201', name: 'Furnished Accommodation' },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
      <div className="blob w-[500px] h-[500px] bg-primary-500/10 -top-32 left-1/2 -translate-x-1/2" />

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl glass border border-white/10">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('form.name')}
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('form.email')}
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t('form.message')}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors outline-none resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold hover:shadow-2xl hover:shadow-primary-500/30 hover:scale-[1.02] transition-all"
                >
                  <Send className="w-5 h-5" />
                  {t('form.send')}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Address Card */}
            <div className="p-6 rounded-2xl glass border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-500" />
                </div>
                <h3 className="text-lg font-bold text-white">{t('info.address')}</h3>
              </div>
              <p className="text-gray-400 whitespace-pre-line leading-relaxed">
                {t('info.addressValue')}
              </p>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl glass border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent-500/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent-500" />
                </div>
                <h3 className="text-lg font-bold text-white">{t('info.email')}</h3>
              </div>
              <a
                href="mailto:info@denis.pt"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                info@denis.pt
              </a>
            </div>

            {/* Activities Card */}
            <div className="p-6 rounded-2xl glass border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center">
                  <Code className="w-5 h-5 text-primary-500" />
                </div>
                <h3 className="text-lg font-bold text-white">{t('info.activities')}</h3>
              </div>
              <div className="space-y-3">
                {activities.map((activity) => (
                  <div
                    key={activity.code}
                    className="flex items-center gap-3 text-sm"
                  >
                    <span className="px-2 py-1 rounded-md bg-primary-500/10 text-primary-400 font-mono text-xs">
                      {activity.code}
                    </span>
                    <span className="text-gray-400">{activity.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

