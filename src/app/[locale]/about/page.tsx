import React from 'react';

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] p-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-700">About InterZone Technologies</h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center">
        InterZone Technologies LLC was founded to empower communities through innovative technology. We specialize in building modern, scalable web and mobile apps, and our flagship InterZone app connects people locally and globally.
      </p>
      <div className="mt-8 text-gray-600 text-center">
        <p><strong>Lead Developer:</strong> Victor Aquino</p>
        <p><strong>Expertise:</strong> Software Engineering, Mobile & Web Development, Cloud Infrastructure</p>
        <p><strong>Technologies:</strong> React, Next.js, TypeScript, Firebase, Google Cloud, React Native, Node.js, Tailwind CSS</p>
        <div className="mt-4 flex gap-4 justify-center">
          <a
            href="mailto:aquinovictor.sys@gmail.com"
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Contact
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <p className="mt-6 text-base italic text-gray-500">
        We believe technology can bring people together. Let’s build the future of community—together!
      </p>
    </main>
  );
}
