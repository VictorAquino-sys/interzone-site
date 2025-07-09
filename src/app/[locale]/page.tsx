import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({
    params,
  }: {
    params: Promise<{ locale: string }>;
}) {
    // Since the whole function is async, Next.js handles the Promise wrapping
    const { locale } = await params;
  
    setRequestLocale(locale);
  
    const t = await getTranslations('HomePage');
  
    return (
      <main>
        <h1>{t('title')}</h1>
      </main>
    );
  }
