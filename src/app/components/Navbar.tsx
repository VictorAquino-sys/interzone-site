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
          className={`transition ${
            pathname === "/" ? "text-indigo-700" : "text-gray-700 hover:text-indigo-700"
          }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`transition ${
            pathname === "/about" ? "text-indigo-700" : "text-gray-700 hover:text-indigo-700"
          }`}
        >
          About
        </Link>
      </div>
    </nav>
  );
}
