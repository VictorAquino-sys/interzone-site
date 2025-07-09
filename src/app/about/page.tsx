import React from 'react';

export default function AboutPage() {
    return (
      <main className="flex flex-col items-center justify-center min-h-[60vh] p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-700">About InterZone Technologies</h1>
        <p className="text-lg text-gray-700 max-w-2xl text-center">
          InterZone Technologies LLC was founded to empower communities through innovative technology. We specialize in building modern, scalable web and mobile apps, and our flagship InterZone app connects people locally and globally.
        </p>
        <div className="mt-8 text-gray-600">
          <p><strong>Lead Developer:</strong> Victor Aquino</p>
          <p><strong>Expertise:</strong> Software Engineering, Mobile & Web Development, Cloud Infrastructure</p>
        </div>
      </main>
    );
  }
  