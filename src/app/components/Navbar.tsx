// src/app/components/Navbar.tsx
"use client";

import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import {
  Smartphone,
  Monitor,
  ShieldCheck,
  Cloud,
  Layout,
  MessageCircle,
  Cpu,
  BarChart2,
  LifeBuoy,
  BookOpen,
} from "lucide-react";

export default function Navbar() {
  const tNav = useTranslations("nav");
  const tHome = useTranslations("HomePage");
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);

  // Main nav links excluding Services (since it's special)
  const navLinks = [
    { href: `/${locale}/work`, label: tNav("work") },
    { href: `/${locale}/about`, label: tNav("about") },
    { href: `/${locale}/blog`, label: tNav("blog") },
    { href: `/${locale}/contact`, label: tNav("contact") },
  ];

  // Services submenu items
  const services = [
    { href: `/${locale}/services/mobile`, label: tHome("servicesMobile"), Icon: Smartphone },
    { href: `/${locale}/services/web`, label: tHome("servicesWeb"), Icon: Monitor },
    { href: `/${locale}/services/cybersecurity`, label: tHome("servicesCybersecurity"), Icon: ShieldCheck },
    { href: `/${locale}/services/cloud`, label: tHome("servicesCloud"), Icon: Cloud },
    { href: `/${locale}/services/uiux`, label: tHome("servicesUIUX"), Icon: Layout },
    { href: `/${locale}/services/consulting`, label: tHome("servicesConsulting"), Icon: MessageCircle },
    { href: `/${locale}/services/devops`, label: tHome("servicesDevOps"), Icon: Cpu },
    { href: `/${locale}/services/data-ai`, label: tHome("servicesDataAI"), Icon: BarChart2 },
    { href: `/${locale}/services/support`, label: tHome("servicesSupport"), Icon: LifeBuoy },
    { href: `/${locale}/services/training`, label: tHome("servicesTraining"), Icon: BookOpen },
  ];

  return (
    <nav className="w-full bg-black fixed top-0 left-0 z-50 flex items-center justify-between py-1 px-8 sm:px-8 shadow-lg">
      {/* Logo */}
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
              marginTop: "-16px",
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

      {/* Desktop Navigation Links */}
      <div className="hidden sm:flex items-center gap-24 px-8 relative">
      {/* Services dropdown */}
      <div className="relative group">
        <button
          className="text-white hover:text-yellow-300 text-base font-semibold flex items-center gap-1"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {tNav("services")} <ChevronDown size={16} />
        </button>

        {/* Dropdown menu - visible on hover of button or menu */}
        <div
          className="
            absolute left-0 mt-2
            w-auto min-w-[160px] max-w-[240px]
            bg-white rounded-lg
            shadow-lg shadow-black/20
            opacity-0 invisible
            group-hover:opacity-100 group-hover:visible
            transition-all duration-300 ease-in-out
            z-50
          "
        >
          <ul className="text-black py-2">
            {services.map(({ href, label, Icon }) => (
              <li
                key={href}
                className="
                  hover:bg-yellow-100
                  cursor-pointer
                  px-6 py-3
                  text-sm font-medium
                  transition-colors duration-200
                  border-b last:border-b-0 border-gray-200
                "
              >
                <Link 
                  href={href} 
                  className="flex items-center gap-3 underline-animate"
                >
                  <Icon className="w-5 h-5 text-yellow-500" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Navigation Links (Desktop) */}
        <div className="flex gap-24 text-base font-semibold">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname?.startsWith(link.href + '/');
            return (
            <Link
              key={link.href}
              href={link.href}
              className={`transition text-base font-semibold ${
                isActive
                  ? 'text-yellow-400 border-b-2 border-yellow-400'
                  : 'text-white hover:text-yellow-300'
              }`}
            >
              {link.label}
            </Link>
          );
          })}
        </div>

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

          <nav className="flex flex-col gap-6 items-center mt-8 text-white text-lg font-semibold px-4">
            {/* Services menu with toggle */}
            {/* <div className="w-full"> */}
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex justify-center items-center gap-2 hover:text-yellow-300 px-4"
              >
                {tNav("services")}
                {servicesOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {servicesOpen && (
              <ul className="mt-2 flex flex-col gap-2 items-center">
                {services.map(({ href, label, Icon }) => (
                  <li key={href} className="items-center">
                    <Link
                      href={href}
                      className="flex items-center gap-3 px-6 py-3 hover:text-yellow-300 underline-animate"
                      onClick={() => setOpen(false)}
                    >
                      <Icon className="w-5 h-5 text-yellow-500" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

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
          </nav>
          {/* </div> */}
        </div>
      )}
    </nav>
  );
}
