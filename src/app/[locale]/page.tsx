// src/app/[locale]/page.tsx
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
    <main className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/interzone_logo_1.png"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/InterZone-website.webm" type="video/webm" />
        <source src="/videos/interzone_website.mp4" type="video/mp4" />
        Sorry, your browser does not support the video tag.
      </video>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center w-full pt-36 pb-16">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-2">{t('title')}</h1>
        <h2 className="text-xl font-semibold text-indigo-200 mb-8">{t('subtitle')}</h2>

        <p className="text-lg text-white/90 max-w-3xl mb-4">{t('welcome')}</p>
        <p className="text-lg text-white/90 max-w-3xl mb-4">{t('flagship')}</p>

        <h3 className="text-lg font-semibold text-indigo-200 mb-1">{t('comingSoon')}</h3>

        <section className="bg-white/90 shadow-md rounded-md p-6 max-w-md w-full mt-6">
          <h4 className="font-bold text-gray-700 mb-2">{t('leadDeveloper')}</h4>
          <h4 className="font-bold text-gray-700 mb-2">{t('expertise')}</h4>
          <p className="text-gray-700">{t('expertiseList')}</p>
        </section>
      </div>
    </main>
  );
}
