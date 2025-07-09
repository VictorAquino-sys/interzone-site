'use client';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center text-indigo-700">
        {t('title')}
      </h1>
      <h2 className="text-xl md:text-2xl mb-6 text-center text-gray-700">
        {t('subtitle')}
      </h2>
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg text-center">
        <p className="text-lg mb-4">{t('welcome')}</p>
        <p className="text-md mb-6 text-gray-500">{t('flagship')}</p>
        <div className="flex gap-4 justify-center mb-4">
          <a className="px-4 py-2 rounded bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
            iOS App ({t('comingSoon')})
          </a>
          <a className="px-4 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition">
            Android App ({t('comingSoon')})
          </a>
        </div>
        <p className="text-sm text-gray-400">
          Stay tuned! Full website experience launching soon.
        </p>
      </div>
    </main>
  );
}
