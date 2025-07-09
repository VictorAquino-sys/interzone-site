import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('AboutPage');

  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] p-8 bg-gray-50 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-700">{t('title')}</h1>

      <section className="max-w-3xl text-gray-700 mb-10">
        <p className="text-lg leading-relaxed">{t('description')}</p>
      </section>

      <address className="not-italic text-gray-600 space-y-2 mb-8">
        <p><strong>{t('leadDeveloper')}:</strong> Victor Aquino</p>
        <p><strong>{t('expertise')}:</strong> Software Engineering, Mobile & Web Development, Cloud Infrastructure</p>
        <p><strong>{t('technologies')}:</strong> React, Next.js, TypeScript, Firebase, Google Cloud, React Native, Node.js, Tailwind CSS</p>
      </address>

      <div className="flex gap-4 justify-center mb-8">
        <a
          href="mailto:aquinovictor.sys@gmail.com"
          className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        >
          {t('contact')}
        </a>
        <a
          href="https://www.linkedin.com/in/aquinosys/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          LinkedIn
        </a>
      </div>

      <p className="max-w-2xl text-gray-500 italic">{t('closing')}</p>
    </main>
  );
}
