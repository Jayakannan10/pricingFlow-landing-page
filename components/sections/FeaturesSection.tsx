"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import {
  BarChart3,
  LineChart,
  Settings,
  Zap,
  Shield,
  GitMerge,
} from "lucide-react";

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation("common");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-features");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const featureCards = sectionRef.current.querySelectorAll(".feature-card");
      featureCards.forEach((card: Element) => observer.observe(card));
    }

    return () => {
      if (sectionRef.current) {
        const featureCards =
          sectionRef.current.querySelectorAll(".feature-card");
        featureCards.forEach((card: Element) => observer.unobserve(card));
      }
    };
  }, []);

  // Feature icons mapping
  const featureIcons = {
    BarChart3: BarChart3,
    LineChart: LineChart,
    Settings: Settings,
    Zap: Zap,
    Shield: Shield,
    GitMerge: GitMerge,
  };

  // Get features from i18n
  const featuresData = t("features.items", { returnObjects: true }) || [];

  // Map icons to features data
  const features = Array.isArray(featuresData)
    ? featuresData.map((feature, index) => {
        const iconKey =
          Object.keys(featureIcons)[index % Object.keys(featureIcons).length];
        return {
          icon: featureIcons[iconKey as keyof typeof featureIcons],
          color: [
            "text-blue-600",
            "text-orange-600",
            "text-green-600",
            "text-purple-600",
            "text-gray-600",
            "text-yellow-500",
          ][index % 6],
          bgColor: [
            "text-blue-100",
            "text-orange-100",
            "text-green-100",
            "text-purple-100",
            "text-gray-100",
            "text-yellow-100",
          ][index % 6],
          title: feature.title,
          description: feature.description,
        };
      })
    : [];

  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24" ref={sectionRef}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[rgb(0,112,100)]">
            {t("features.title")}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            {t("features.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card opacity-0 transform translate-y-8 transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative flex items-center justify-center mx-auto">
                <svg
                  className={feature.bgColor}
                  width="72"
                  height="75"
                  viewBox="0 0 72 75"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
                </svg>
                <feature.icon className={`absolute ${feature.color} w-9 h-9`} />
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">
                {feature.title}
              </h3>
              <p className="mt-4 text-base text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .animate-features {
          transform: translateY(0) !important;
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
