'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const currentYear = new Date().getFullYear();

  const caeItems = [
    { key: 'programming', code: '62010' },
    { key: 'consulting', code: '62020' },
    { key: 'events', code: '82300' },
    { key: 'accommodation', code: '55201' },
  ];

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'skills', href: '#skills' },
    { key: 'about', href: '#about' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center font-display font-bold text-lg text-white">
                D
              </div>
              <span className="font-display font-bold text-xl text-white">
                Denis<span className="text-primary-500">.pt</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-sm">
              {t('description')}
            </p>
          </div>

          {/* CAE Codes */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">{t('cae.title')}</h4>
            <ul className="space-y-3">
              {caeItems.map((item) => (
                <li key={item.key} className="flex items-center gap-2">
                  <span className="text-xs font-mono text-primary-500">{item.code}</span>
                  <span className="text-sm text-gray-400">{t(`cae.${item.key}`)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.key}>
                  <a href={item.href} className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                    {tNav(item.key)}
                  </a>
                </li>
              ))}
              <li>
                <Link 
                  href={`/${locale}/imprint`} 
                  className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                >
                  {t('imprint')}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/privacy`} 
                  className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                >
                  {t('privacy')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            {t('copyright', { year: currentYear })}
          </p>
          <div className="flex items-center gap-4">
            <Link 
              href={`/${locale}/imprint`} 
              className="text-sm text-gray-500 hover:text-primary-400 transition-colors"
            >
              {t('imprint')}
            </Link>
            <span className="text-gray-600">•</span>
            <Link 
              href={`/${locale}/privacy`} 
              className="text-sm text-gray-500 hover:text-primary-400 transition-colors"
            >
              {t('privacy')}
            </Link>
            <span className="text-gray-600">•</span>
            <p className="text-sm text-gray-500">
              Made with ❤️ in Madeira, Portugal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
