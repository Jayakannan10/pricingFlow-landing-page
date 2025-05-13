"use client";

import { useState, useEffect, useRef } from "react";
import { CheckCircle, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import {
  howItWorksImage,
  howItWorksVideoSrc,
} from "../../app/imageSRCs/imageSrc";

interface Step {
  number: string;
  title: string;
  description: string;
  videoUrl: string;
}

export default function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation("common");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Placeholder video URLs for demonstration
  const placeholderVideos = [
    howItWorksVideoSrc,
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/ysz5S6PUM-U",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
  ];

  // Fix steps mapping to handle non-array values
  const stepsData = t("howItWorks.steps", { returnObjects: true });
  const steps: Step[] = Array.isArray(stepsData)
    ? stepsData.map((step: any, idx: number) => ({
        number: step.number || "",
        title: step.title || "",
        description: step.description || "",
        videoUrl: placeholderVideos[idx] || placeholderVideos[0],
      }))
    : [];

  // The video to show in the iframe
  const currentVideoUrl =
    activeStep !== null && steps[activeStep]
      ? steps[activeStep].videoUrl
      : null;

  return (
    <section
      id="how-it-works"
      className="py-16 px-4 sm:py-20 bg-gray-50 w-full"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[rgb(0,112,100)]">
            {t("howItWorks.title")}
          </h2>
          <p className="mt-4 text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t("howItWorks.description")}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={cn(
              "transition-all duration-1000 transform",
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            )}
          >
            {steps.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "flex mb-8 transition-all duration-500 cursor-pointer",
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0",
                  `delay-[${index * 200}ms]`,
                  activeStep === index
                    ? "bg-teal-50 border-l-4 border-[rgb(0,112,100)]"
                    : ""
                )}
                onClick={() => setActiveStep(index)}
                tabIndex={0}
                role="button"
                aria-pressed={activeStep === index}
              >
                <div className="mr-6">
                  <div
                    className={cn(
                      "flex items-center justify-center h-12 w-12 rounded-full font-bold",
                      activeStep === index
                        ? "bg-[rgb(0,112,100)] text-white"
                        : "bg-teal-50 text-[rgb(0,112,100)]"
                    )}
                  >
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3
                    className={cn(
                      "text-lg sm:text-xl font-semibold mb-2",
                      activeStep === index
                        ? "text-[rgb(0,112,100)] underline"
                        : "text-gray-900"
                    )}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={cn(
                      activeStep === index
                        ? "text-[rgb(0,112,100)]"
                        : "text-gray-600"
                    )}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            className={cn(
              "transition-all duration-1000 delay-300 transform",
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            )}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              {currentVideoUrl ? (
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    width="560"
                    height="400"
                    src={currentVideoUrl}
                    title={t("howItWorks.title")}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <>
                  <img
                    src={howItWorksImage}
                    alt={t("howItWorks.title")}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <button
                      onClick={() => setActiveStep(0)}
                      className="h-20 w-20 rounded-full bg-white bg-opacity-90 flex items-center justify-center transition-transform duration-300 hover:scale-110 focus:outline-none"
                    >
                      <Play size={36} className="text-[rgb(0,112,100)] ml-2" />
                    </button>
                  </div>
                </>
              )}
            </div>
            <div className="mt-6 flex items-center justify-center space-x-4">
              <CheckCircle className="h-5 w-5 text-[rgb(0,112,100)]" />
              <span className="text-gray-600">
                {t("howItWorks.videoCaption")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
