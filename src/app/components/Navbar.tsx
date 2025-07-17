import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();

  return (
    <nav className="w-full bg-black fixed top-0 left-0 z-50 flex items-center justify-between py-4 px-8 shadow-lg">
      <div className="flex items-center gap-4">
        <Link href={`/${locale}/`}>
          <Image
            src="/images/interzone_white_glow.png"
            alt="InterZone Logo"
            width={200}
            height={80}
            priority
            style={{ objectFit: "contain" }}
          />
        </Link>
      </div>
      <div className="flex gap-8 text-lg font-semibold">
        <Link href={`/${locale}/`} className="text-white hover:text-yellow-300 transition">
          {t('home')}
        </Link>
        <Link href={`/${locale}/about`} className="text-white hover:text-yellow-300 transition">
          {t('about')}
        </Link>
        {/* Add more navigation links as needed */}
      </div>
      <div>
        <LocaleSwitcher />
      </div>
    </nav>
  );
}
