import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n/routing';
import CookieBanner from '@/components/CookieBanner';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Denis.pt | Software Development Excellence',
  description: 'Professional software development company specialized in TypeScript, React, React Native, and Next.js. Based in Madeira, Portugal.',
  keywords: ['software development', 'web development', 'mobile apps', 'React', 'Next.js', 'TypeScript', 'React Native', 'Portugal', 'Madeira'],
  authors: [{ name: 'Denis.pt' }],
  openGraph: {
    title: 'Denis.pt | Software Development Excellence',
    description: 'Professional software development company specialized in TypeScript, React, React Native, and Next.js.',
    type: 'website',
    locale: 'en_US',
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <body className="gradient-bg noise min-h-screen antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
