import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow flex items-center justify-center py-4 mb-8">
      <div className="flex gap-8 text-lg font-semibold">
        <Link href="/" className="hover:text-indigo-700 transition">Home</Link>
        <Link href="/about" className="hover:text-indigo-700 transition">About</Link>
        {/* Add more links here as you add more pages */}
        {/* <Link href="/app" className="hover:text-indigo-700 transition">App</Link> */}
        {/* <Link href="/services" className="hover:text-indigo-700 transition">Services</Link> */}
      </div>
    </nav>
  );
}
