import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n';
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
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <body className="gradient-bg noise min-h-screen antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

