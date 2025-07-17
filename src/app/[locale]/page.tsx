// src/app/[locale]/page.tsx
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import React from "react";

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
        {/* Accent: Services Line */}
        <div className="mb-6 flex gap-3 text-base font-medium text-indigo-200 tracking-wider uppercase drop-shadow">
          {t.raw('servicesLine').map((item: string, idx: number) => (
            <React.Fragment key={item}>
              {idx !== 0 && <span className="text-indigo-300">•</span>}
              <span>{item}</span>
            </React.Fragment>
          ))}
        </div>

        {/* Bold Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-5 text-center leading-tight">
          {t('headline1')}<br className="hidden sm:block" />
          <span className="text-yellow-300">{t('headline2')}</span><br className="hidden sm:block" />
          <span className="text-indigo-300">{t('headline3')}</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8 font-medium text-center drop-shadow">
          {t('subheadline')}
        </p>
      </div>
      
      {/* Watermark-hiding text */}
      <div className="fixed bottom-2 right-4 z-30 bg-black/90 px-4 py-4 rounded-full shadow-md text-white text-xs font-semibold backdrop-blur-md select-none pointer-events-none">
        {t('watermark')}
      </div>
      
    </main>
  );
}
