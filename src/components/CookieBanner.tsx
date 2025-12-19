'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CookieBanner() {
  const t = useTranslations('cookies');
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const locale = pathname.split('/')[1];

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay to avoid flash on page load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookie-consent', 'necessary');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative p-6 sm:p-8 rounded-2xl glass border border-white/10 shadow-2xl">
              {/* Close button */}
              <button
                onClick={acceptNecessary}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Icon */}
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-primary-500" />
                </div>

                {/* Content */}
                <div className="flex-1 pr-8 sm:pr-0">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {t('title')}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {t('description')}{' '}
                    <Link
                      href={`/${locale}/imprint`}
                      className="text-primary-400 hover:text-primary-300 underline transition-colors"
                    >
                      {t('learnMore')}
                    </Link>
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={acceptAll}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary-500/25 hover:scale-105 transition-all"
                    >
                      {t('acceptAll')}
                    </button>
                    <button
                      onClick={acceptNecessary}
                      className="px-6 py-2.5 rounded-xl border border-white/20 text-white text-sm font-semibold hover:bg-white/5 transition-all"
                    >
                      {t('acceptNecessary')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

