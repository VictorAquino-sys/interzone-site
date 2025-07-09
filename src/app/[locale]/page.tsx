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
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations('HomePage');

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <h1 className="text-5xl font-bold text-indigo-700 mb-4">{t('title')}</h1>
      <h2 className="text-2xl font-semibold mb-6">{t('subtitle')}</h2>

      <p className="text-lg text-gray-700 max-w-3xl text-center mb-4">{t('welcome')}</p>
      <p className="text-lg text-gray-700 max-w-3xl text-center mb-4">{t('flagship')}</p>

      <h3 className="text-xl font-semibold mt-8 mb-2">{t('comingSoon')}</h3>

      <div className="mt-6 max-w-3xl bg-white p-6 rounded shadow-md">
        <h4 className="font-semibold text-lg">{t('leadDeveloper')}</h4>
        {/* Add lead developer info here if you want */}
        <h4 className="font-semibold text-lg mt-4">{t('expertise')}</h4>
        <p className="text-gray-700">{t('expertiseList')}</p>
      </div>
    </main>
  );
}
