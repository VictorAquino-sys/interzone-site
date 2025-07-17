// src/app/components/Navbar.tsx
"use client";

import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  // Responsive navigation links
  const navLinks = [
    { href: `/${locale}/services`, label: t("services") },
    { href: `/${locale}/work`, label: t("work") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/blog`, label: t("blog") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  return (
    <nav className="w-full bg-black fixed top-0 left-0 z-50 flex items-center justify-between py-1 px-3 sm:px-8 shadow-lg">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link href={`/${locale}/`}>
          <Image
            src="/images/interzone_white_glow.png"
            alt="InterZone Logo"
            width={120}
            height={48}
            priority
            className="transition-all duration-300 drop-shadow-[0_2px_18px_rgba(66,170,255,0.55)] hover:scale-105"
            style={{
              objectFit: "contain",
              marginTop: "-8px",
              maxWidth: "120px"
            }}
          />
        </Link>
      </div>

      {/* Hamburger menu (mobile only) */}
      <button
        className="sm:hidden flex items-center text-white ml-auto"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <Menu className="w-8 h-8" />
      </button>

      {/* Navigation Links (Desktop) */}
      <div className="hidden sm:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-white hover:text-yellow-300 transition text-base font-semibold"
          >
            {link.label}
          </Link>
        ))}
        <LocaleSwitcher />
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="sm:hidden fixed inset-0 z-50 bg-black/80 flex flex-col">
          <div className="flex items-center justify-between px-4 py-4">
            <Link href={`/${locale}/`}>
              <Image
                src="/images/interzone_white_glow.png"
                alt="InterZone Logo"
                width={100}
                height={40}
                priority
                style={{
                  objectFit: "contain",
                  marginTop: "-6px",
                  maxWidth: "100px"
                }}
              />
            </Link>
            <button
              className="text-white"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
          </div>
          <div className="flex flex-col gap-6 items-center mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-lg font-semibold hover:text-yellow-300"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <LocaleSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
}
