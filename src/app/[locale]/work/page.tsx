// src/app/[locale]/work/page.tsx
"use client";

import { useTranslations } from "next-intl";

const featureImages = [
    {
      src: "/images/work/interzone_mobile_app/interzone_loginscreen.png",
      alt: "Login Screen",
      captionKey: "captions.login",
    },
    {
      src: "/images/work/interzone_mobile_app/interzone_homepage.png",
      alt: "Home Screen",
      captionKey: "captions.home",
    },
    {
      src: "/images/work/interzone_mobile_app/interzone_profilescreen.png",
      alt: "Profile Screen",
      captionKey: "captions.profile",
    },
    {
      src: "/images/work/interzone_mobile_app/interzone_postscreen.png",
      alt: "Post Screen",
      captionKey: "captions.post",
    },
    {
      src: "/images/work/interzone_mobile_app/interzone_reportscreen.png",
      alt: "Report Screen",
      captionKey: "captions.report",
    },
    {
      src: "/images/work/interzone_mobile_app/interzone_musicscreen.png",
      alt: "Music Screen",
      captionKey: "captions.music",
    },
  ];

  const testimonials = [
    {
      name: "DriverofKyle",
      date: "05/19/2025",
      rating: 5,
      title: "Perfect social media app",
      text: "Best social media app ever! Connects you with people in a new and clever way. Highly recommend!",
    },
    {
      name: "Teresita 👑❤️",
      date: "06/03/2025",
      rating: 5,
      title: "Excelente aplicativo",
      text: "Muy buena idea para la comunidad; especialmente para los que tienen negocio 🎵🎶",
    },
  ];

    function StarRating({ count }: { count: number }) {
        const stars = Array(5).fill(false).map((_, i) => i < count);
        return (
        <div className="flex text-yellow-400">
            {stars.map((filled, i) => (
            <svg
                key={i}
                className={`w-5 h-5 ${filled ? "fill-current" : "stroke-current"}`}
                fill={filled ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
            >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            ))}
        </div>
        );
    }

export default function WorkPage() {
  const t = useTranslations("WorkPage");

  return (
    <main className="relative min-h-screen bg-gray-100 pt-20 pb-10 py-0 px-0 sm:px-12">
        {/* White container with main content */}
        <div className="mt-2 rounded-4xl bg-white p-8 shadow-lg max-w-8xl mx-auto">
            {/* Hero Intro */}
            <section className="text-center max-w-5xl mx-auto p-12 rounded-3xl bg-gradient-to-r from-indigo-100 to-indigo-200 shadow-lg shadow-indigo-300/40">
                <p className="text-indigo-900 text-2xl sm:text-3xl font-serif leading-relaxed tracking-wide drop-shadow-sm">
                    {t("intro")}
                </p>
            </section>

            {/* Feature Screenshots */}
            <section className="overflow-x-auto scrollbar-hide mt-6 mb-6 max-w-full mx-auto bg-indigo-50 rounded-3xl p-8 shadow-inner">
                <div className="flex gap-8 px-4 sm:px-8 max-w-full snap-x snap-mandatory overflow-x-scroll">
                    {featureImages.map(({ src, alt, captionKey }) => (
                        <div
                            key={alt}
                            className="min-w-[320px] snap-center flex-shrink-0 rounded-3xl border border-indigo-200 bg-white shadow-lg hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 cursor-pointer mb-8 mt-2.5"
                            >
                            <img
                                src={src}
                                alt={alt}
                                className="w-full h-[500px] object-contain rounded-t-3xl bg-white"
                                style={{ 
                                    marginTop: 20,
                                    aspectRatio: "9 / 16",
                                }}
                            />
                            <div className="p-6 border-t border-indigo-100">
                                <p className="text-center font-semibold text-gray-900">
                                {t(captionKey)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Project */}
            <section className="bg-indigo-50 rounded-3xl shadow-lg p-14 flex flex-col items-center gap-12 sm:flex-row sm:items-start sm:gap-16">
                <img
                    src="/images/work/interzone_mobile_app/interzone_logo.png"
                    alt="InterZone App Icon"
                    className="w-70 h-60 rounded-3xl shadow-2xl"
                />

                <div className="max-w-xl text-center sm:text-left mt-3">
                    <h2 className="text-4xl font-extrabold text-indigo-900 mb-6">
                        {t("project.title")}
                    </h2>
                    <p className="text-gray-800 mb-8 text-lg leading-relaxed">
                        {t("project.description")}
                    </p>
                    <div className="flex justify-center sm:justify-start gap-8">
                        <a
                            href={t("project.appStoreUrl")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:bg-indigo-800 hover:shadow-lg transition"
                        >
                            App Store
                        </a>
                        <a
                            href={t("project.playStoreUrl")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:bg-green-800 hover:shadow-lg transition"
                        >
                            Google Play
                        </a>
                    </div>
                </div>

                <div className="max-w-xl text-center sm:text-left mt-1 hidden lg:block">
                    <h3 className="text-3xl font-bold text-indigo-900 mb-4 text-center">
                        {t("testimonials.title")}
                    </h3>
                    {testimonials.map(({ name, date, rating, title, text }, i) => (
                    <div className="mt-6" key={`left-${i}`}>
                        <StarRating count={rating} />
                        <p className="mt-4 font-semibold text-gray-900">{name}</p>
                        <p className="mt-2 mb-4 text-gray-600 text-sm italic">{date}</p>
                        <p className="mt-2 font-semibold text-indigo-700">{title}</p>
                        <p className="mt-1 tracking-tight text-gray-800 whitespace-pre-line">{text}</p>
                    </div>
                    ))}
                </div>

            </section>
        </div>

        {/* Mobile: testimonials below main content */}
        <section className="lg:hidden mt-20 bg-gray-50 rounded-3xl p-12 shadow-inner max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-indigo-900 mb-8 text-center">
            {t("testimonials.title")}
            </h3>
            <div className="space-y-12">
            {testimonials.map(({ name, date, rating, title, text }, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md p-6">
                <StarRating count={rating} />
                <p className="mt-4 font-semibold text-gray-900">{name}</p>
                <p className="mt-2 mb-4 text-gray-600 text-sm italic">{date}</p>
                <p className="mt-2 font-semibold text-lg text-indigo-800">{title}</p>
                <p className="mt-1 text-gray-700 whitespace-pre-line">{text}</p>
                </div>
            ))}
            </div>
        </section>
    </main>
  );
}