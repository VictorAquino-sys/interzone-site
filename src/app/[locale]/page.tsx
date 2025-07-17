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
    <main className="relative min-h-screen h-screen w-screen flex flex-col items-center justify-center text-center overflow-hidden">
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
        {/* <source src="/videos/InterZone-website.webm" type="video/webm" /> */}
        <source src="/videos/interzone_website.mp4" type="video/mp4" />
        Sorry, your browser does not support the video tag.
      </video>
      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50 z-10" /> */}

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center w-full pt-36 pb-16">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-2">{t('title')}</h1>
        {/* Modern subtitle */}
        <h2 className="text-lg md:text-2xl font-medium text-indigo-200 tracking-wide flex gap-2 items-center justify-center mt-2 mb-6 drop-shadow">
          {t('modernSubtitle')}
        </h2>
        <p className="text-lg text-white/90 max-w-3xl mb-4">{t('welcome')}</p>
        <p className="text-lg text-white/90 max-w-3xl mb-4">{t('flagship')}</p>
      </div>
      
      {/* Watermark-hiding text */}
      <div className="fixed bottom-2 right-4 z-30 bg-black/90 px-4 py-4 rounded-full shadow-md text-white text-xs font-semibold backdrop-blur-md select-none pointer-events-none">
        {t('watermark')}
      </div>
    </main>
  );
}
