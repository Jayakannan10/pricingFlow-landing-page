"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { heroSectionImage } from "../../app/imageSRCs/imageSrc";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showVideo, setShowVideo] = useState(false); // State to toggle between image and video
  const { t } = useTranslation("common");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Checklist items
  // const checklistItems = t("hero.checklist", { returnObjects: true }) || [
  //   "Free and paid plans",
  //   "Set in minutes",
  //   "No credit card required",
  // ];

  return (
    <section className="w-full bg-gray-50 pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div
            className={cn(
              "transition-all duration-1000 transform",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            )}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[rgb(0,112,100)]">
              {t("hero.title")}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-md">
              {t("hero.description")}
            </p>
            {/* Checklist */}
            {/* <ul className="mt-6 space-y-3">
              {Array.isArray(checklistItems) &&
                checklistItems.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-[rgb(0,112,100)]" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
            </ul> */}
            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-[rgb(0,112,100)] transition-colors duration-200"
              >
                {t("hero.cta.getStarted")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button
                onClick={() => setShowVideo(!showVideo)}
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                {t("hero.cta.productVideo")}
              </button>
            </div>
          </div>

          {/* Image/Video Section */}
          <div
            className={cn(
              "transition-all duration-1000 delay-300 transform",
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            )}
          >
            <div className="relative flex items-center justify-center">
              {/* 3D Frame/Shadow */}
              <div className="absolute inset-0 scale-105 bg-white rounded-2xl shadow-2xl z-0" />
              {/* Main Image or Video */}
              {showVideo ? (
                <div className="w-full h-[400px] rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="YOUR_VIDEO_SRC_HERE" // Replace with your video source
                    title={t("hero.title")}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <img
                  src={heroSectionImage}
                  alt={t("hero.title")}
                  className="relative w-full h-[400px] object-cover rounded-2xl shadow-2xl border-4 border-white rotate-3 z-10"
                  style={{
                    boxShadow:
                      "0 16px 40px 0 rgba(0,0,0,0.18), 0 1.5px 6px 0 rgba(0,0,0,0.10)",
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
