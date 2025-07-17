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
        poster="/images/interzone_sunset_landscape.png"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        {/* <source src="/videos/InterZone-website.webm" type="video/webm" /> */}
        <source src="/videos/interzone_website.mp4" type="video/mp4" />
        Sorry, your browser does not support the video tag.
      </video>

      {/* Improved Overlay: More opacity on mobile */}
      <div className="absolute inset-0 bg-black/70 sm:bg-black/40 sm:blur-[2px] blur-[1px] z-10" />
      
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center w-full pt-20 sm:pt-36 pb-8 sm:pb-16 px-2 sm:px-0">
        {/* Accent: Services Line */}
        <div
          className="relative flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-base font-medium text-indigo-100 tracking-wider uppercase px-3 sm:px-6 py-1"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.95)" }}
        >
          {t.raw('servicesLine').map((item: string, idx: number) => (
            <React.Fragment key={item}>
              {idx !== 0 && <span className="text-indigo-300">•</span>}
              <span>{item}</span>
            </React.Fragment>
          ))}
        </div>

        {/* Bold Headline */}
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4 sm:mb-5 text-center leading-tight">
          {t('headline1')}<br className="hidden sm:block" />
          <span className="text-yellow-300">{t('headline2')}</span><br className="hidden sm:block" />
          <span className="text-indigo-300">{t('headline3')}</span>
        </h1>

        {/* Subheadline */}
        <p 
          className="relative text-sm xs:text-base sm:text-lg md:text-xl text-white max-w-xs xs:max-w-md sm:max-w-2xl mx-auto mb-6 sm:mb-8 font-medium text-center px-3 py-2"
          style={{ textShadow: '0 2px 10px rgba(0,0,0,1)' }}
        >
          {t('subheadline')}
        </p>
      </div>
      
      {/* Watermark-hiding text */}
      <div className="fixed bottom-1 right-1 sm:bottom-2 sm:right-4 z-30 bg-black/90 px-3 sm:px-4 py-2 sm:py-4 rounded-full shadow-md text-white text-[10px] xs:text-xs sm:text-xs font-semibold backdrop-blur-md select-none pointer-events-none">
        {t('watermark')}
      </div>
      
    </main>
  );
}
