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
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8 text-center">

      {/* Logo */}
      <img
        src="/public/images/interzone_logo_1.png"
        alt="InterZone Logo"
        className="w-32 h-auto mb-6"
      />


      <h1 className="text-5xl font-extrabold text-indigo-700 mb-2">{t('title')}</h1>
      <h2 className="text-xl font-semibold text-indigo-300 mb-8">{t('subtitle')}</h2>

      <p className="text-lg text-gray-700 max-w-3xl text-center mb-4">{t('welcome')}</p>
      <p className="text-lg text-gray-700 max-w-3xl text-center mb-4">{t('flagship')}</p>

      <h3 className="text-lg font-semibold text-indigo-300 mb-1">{t('comingSoon')}</h3>

      <section className="bg-white shadow-md rounded-md p-6 max-w-md w-full">
        <h4 className="font-bold text-gray-600 mb-2">{t('leadDeveloper')}</h4>
        <h4 className="font-bold text-gray-600 mb-2">{t('expertise')}</h4>
        <p className="text-gray-700">{t('expertiseList')}</p>
      </section>
    </main>
  );
}
