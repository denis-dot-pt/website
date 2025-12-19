import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { locales } from '@/i18n/routing';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function ImprintContent() {
  const t = useTranslations('imprint');

  return (
    <section className="relative min-h-screen pt-32 pb-20">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-8">
          {t('title')}
        </h1>

        <div className="space-y-8 text-gray-300">
          {/* Company Info */}
          <div className="p-6 rounded-2xl glass border border-white/10">
            <h2 className="text-xl font-bold text-white mb-4">{t('company.title')}</h2>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-primary-400">Denis.pt, Sociedade Unipessoal, Lda</p>
              <p>{t('company.address')}:</p>
              <p className="whitespace-pre-line pl-4 border-l-2 border-primary-500/30">
                Estrada Monumental, Nº 277, Bloco 5, 1º E{'\n'}
                9000-250 São Martinho{'\n'}
                Funchal, Madeira{'\n'}
                Portugal
              </p>
            </div>
          </div>

          {/* Legal Details */}
          <div className="p-6 rounded-2xl glass border border-white/10">
            <h2 className="text-xl font-bold text-white mb-4">{t('legal.title')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">{t('legal.form')}</p>
                <p className="text-white">Sociedade Unipessoal, Lda</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">{t('legal.capital')}</p>
                <p className="text-white">€ 500,00</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">{t('legal.founded')}</p>
                <p className="text-white">09/10/2024</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">{t('legal.location')}</p>
                <p className="text-white">Funchal, Madeira</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="p-6 rounded-2xl glass border border-white/10">
            <h2 className="text-xl font-bold text-white mb-4">{t('contact.title')}</h2>
            <div className="space-y-2">
              <p>
                <span className="text-gray-500">{t('contact.email')}:</span>{' '}
                <a href="mailto:info@denis.pt" className="text-primary-400 hover:text-primary-300 transition-colors">
                  info@denis.pt
                </a>
              </p>
            </div>
          </div>

          {/* Activities */}
          <div className="p-6 rounded-2xl glass border border-white/10">
            <h2 className="text-xl font-bold text-white mb-4">{t('activities.title')}</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="px-2 py-1 rounded-md bg-primary-500/10 text-primary-400 font-mono text-xs shrink-0">62010</span>
                <span>{t('activities.programming')}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="px-2 py-1 rounded-md bg-primary-500/10 text-primary-400 font-mono text-xs shrink-0">62020</span>
                <span>{t('activities.consulting')}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="px-2 py-1 rounded-md bg-primary-500/10 text-primary-400 font-mono text-xs shrink-0">82300</span>
                <span>{t('activities.events')}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="px-2 py-1 rounded-md bg-primary-500/10 text-primary-400 font-mono text-xs shrink-0">55201</span>
                <span>{t('activities.accommodation')}</span>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="p-6 rounded-2xl glass border border-white/10">
            <h2 className="text-xl font-bold text-white mb-4">{t('disclaimer.title')}</h2>
            <p className="leading-relaxed">{t('disclaimer.text')}</p>
          </div>

          {/* Copyright */}
          <div className="p-6 rounded-2xl glass border border-white/10">
            <h2 className="text-xl font-bold text-white mb-4">{t('copyright.title')}</h2>
            <p className="leading-relaxed">{t('copyright.text')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function ImprintPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Header />
      <ImprintContent />
      <Footer />
    </main>
  );
}

