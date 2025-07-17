import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();

  return (
    <nav className="w-full bg-black fixed top-0 left-0 z-50 flex items-center justify-between py-1 px-8 shadow-lg">
      <div className="flex items-center gap-2">
        <Link href={`/${locale}/`}>
          <Image
            src="/images/interzone_white_glow.png"
            alt="InterZone Logo"
            width={300}
            height={120}
            priority
            className="transition-all duration-300 drop-shadow-[0_2px_18px_rgba(66,170,255,0.55)] hover:scale-105 hover:drop-shadow-[0_4px_32px_rgba(255,255,255,0.7)]"
            style={{ 
              objectFit: "contain", 
              marginTop: "-16px"
            }}
          />
        </Link>
      </div>

      <div className="flex items-center gap-24 px-8">
        <div className="flex gap-24 text-base font-semibold">
          <Link href={`/${locale}/services`} className="text-white hover:text-yellow-300 transition">
            {t('services')}
          </Link>
          <Link href={`/${locale}/work`} className="text-white hover:text-yellow-300 transition">
            {t('work')}
          </Link>
          <Link href={`/${locale}/about`} className="text-white hover:text-yellow-300 transition">
            {t('about')}
          </Link>
          <Link href={`/${locale}/blog`} className="text-white hover:text-yellow-300 transition">
            {t('blog')}
          </Link>
          <Link href={`/${locale}/contact`} className="text-white hover:text-yellow-300 transition">
            {t('contact')}
          </Link>
        </div>
      {/* <div> */}
        <LocaleSwitcher />
      </div>
    </nav>
  );
}
