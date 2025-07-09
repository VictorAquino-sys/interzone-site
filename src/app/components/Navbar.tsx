import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md border-b border-gray-200 py-4 px-4 fixed top-0 left-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Company Name as a Home Link */}
        <Link href="/" className="text-2xl font-bold text-indigo-700 tracking-tight hover:text-indigo-800 transition">
          InterZone Technologies
        </Link>
        <div className="flex gap-8 text-lg font-medium">
          <Link href="/" className="hover:text-indigo-700 transition">Home</Link>
          <Link href="/about" className="hover:text-indigo-700 transition">About</Link>
          {/* More links can go here */}
        </div>
      </div>
    </nav>
  );
}
