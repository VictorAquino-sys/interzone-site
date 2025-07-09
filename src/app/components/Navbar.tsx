'use client';
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white shadow flex items-center justify-center py-4 mb-8">
      <div className="flex gap-8 text-lg font-semibold">
        <Link
          href="/"
          className="text-black hover:text-indigo-700 transition"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-black hover:text-indigo-700 transition"
        >
          About
        </Link>
      </div>
    </nav>
  );
}
