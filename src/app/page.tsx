import React from "react";

export default function HomePage() {
  return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center text-indigo-700">
          InterZone Technologies LLC
        </h1>
        <h2 className="text-xl md:text-2xl mb-6 text-center text-gray-700">
          Empowering Communities Through Technology
        </h2>
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg text-center">
          <p className="text-lg mb-4">
            Welcome! We build innovative mobile and web applications designed to connect, inspire, and support our local communities.
          </p>
          <p className="text-md mb-6 text-gray-500">
            Our flagship product, the InterZone app, is available for iOS and Android.
          </p>
          {/* Update these links when your apps are live */}
          <div className="flex gap-4 justify-center mb-4">
            <a
              href="#"
              className="px-4 py-2 rounded bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
            >
              iOS App (Coming Soon)
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition"
            >
              Android App (Coming Soon)
            </a>
          </div>
          <p className="text-sm text-gray-400">
            Stay tuned! Full website experience launching soon.
          </p>
        </div>
      </main>
  );
}
