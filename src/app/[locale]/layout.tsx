// src/app/[locale]/layout.tsx
import Navbar from '../components/Navbar';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params,
  }: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
  }) {
    const { locale } = await params;
  
    if (!hasLocale(routing.locales, locale)) {
      notFound();
    }
  
    setRequestLocale(locale);
  
    const messages = (await import(`@/messages/${locale}.json`)).default;
  
    return (
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Navbar />
        {children}
      </NextIntlClientProvider>
    );
}