// src/app/[locale]/work/page.tsx
import { getTranslations } from 'next-intl/server';

export default async function ServicesPage() {
  const t = await getTranslations('nav');
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">{t('work')}</h1>
    </div>
  );
}
