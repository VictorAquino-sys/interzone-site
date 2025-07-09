"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

const locales = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // Extract current locale from pathname
  const currentLocale = pathname.split("/")[1];
  
  // Function to change locale
  function handleLocaleChange(newLocale: string) {
    // Replace only the first segment of the pathname (the locale)
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/") || "/";
    startTransition(() => {
      router.push(newPath);
    });
  }

  return (
    <div className="flex gap-2">
      {locales.map((locale) => (
        <button
          key={locale.code}
          disabled={isPending || locale.code === currentLocale}
          onClick={() => handleLocaleChange(locale.code)}
          className={`px-2 py-1 rounded ${
            locale.code === currentLocale
              ? "bg-indigo-700 text-white"
              : "bg-gray-200 hover:bg-indigo-100 text-gray-700"
          } transition`}
        >
          {locale.label}
        </button>
      ))}
    </div>
  );
}
