import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations, useLocale } from 'next-intl';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();

  return (
    <nav className="w-full bg-white shadow flex items-center justify-between py-4 px-8 mb-8">
      <div className="flex gap-8 text-lg font-semibold">
        <Link href={`/${locale}/`} className="text-gray-800 hover:text-indigo-700 transition">
          {t('home')}
        </Link>
        <Link href={`/${locale}/about`} className="text-gray-800 hover:text-indigo-700 transition">
          {t('about')}
        </Link>
      </div>
      <div>
        <LocaleSwitcher />
      </div>
    </nav>
  );
}
