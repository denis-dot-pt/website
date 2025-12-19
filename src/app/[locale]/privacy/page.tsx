import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { locales } from '@/i18n/routing';
import { Shield, Cookie, Database, Mail, Globe, Lock } from 'lucide-react';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function PrivacyContent() {
  const t = useTranslations('privacy');

  const sections = [
    { key: 'overview', icon: Shield },
    { key: 'dataCollection', icon: Database },
    { key: 'cookies', icon: Cookie },
    { key: 'thirdParty', icon: Globe },
    { key: 'contact', icon: Mail },
    { key: 'rights', icon: Lock },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/30 mb-6">
            <Shield className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-400">{t('badge')}</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            {t('title')}
          </h1>
          <p className="text-gray-400">
            {t('lastUpdated')}: December 2024
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.key} className="p-6 rounded-2xl glass border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-500" />
                  </div>
                  <h2 className="text-xl font-bold text-white">
                    {t(`${section.key}.title`)}
                  </h2>
                </div>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>{t(`${section.key}.text`)}</p>
                  {section.key === 'cookies' && (
                    <div className="mt-4 p-4 rounded-xl bg-primary-500/10 border border-primary-500/20">
                      <p className="text-sm text-primary-300">
                        <strong>{t('cookies.note')}</strong>
                      </p>
                    </div>
                  )}
                  {section.key === 'contact' && (
                    <p>
                      <a 
                        href="mailto:info@denis.pt" 
                        className="text-primary-400 hover:text-primary-300 transition-colors"
                      >
                        info@denis.pt
                      </a>
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Header />
      <PrivacyContent />
      <Footer />
    </main>
  );
}

