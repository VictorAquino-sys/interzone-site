// src/app/projects/page.tsx
// 'use client';
import React from "react";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] p-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-700">
        Projects
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center">
        Our upcoming projects will be listed here!
      </p>
    </main>
  );
}
