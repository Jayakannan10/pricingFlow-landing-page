"use client";

import { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export default function PricingSection() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [apiResult, setApiResult] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const plans = t("pricing.plans", { returnObjects: true }) as Array<any>;

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

  return (
    <section id="pricing" className="w-full py-16 px-4 sm:py-20 bg-gray-50 flex justify-center" ref={sectionRef}>
      <div className="w-full max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[rgb(0,112,100)]">
            {t("pricing.title")}
          </h2>
          <p className="mt-4 text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t("pricing.description")}
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8">
          {plans.map((plan: any, index: number) => (
            <div
              key={index}
              className={cn(
                "relative rounded-2xl shadow-lg overflow-hidden transition-all duration-700 transform w-full sm:w-auto sm:min-w-[320px] sm:max-w-[380px]",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
                `delay-[${index * 200}ms]`,
                plan.badge ? "border-2 border-[rgb(0,112,100)] scale-105 z-10 bg-white" : "bg-white"
              )}
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center space-x-3 mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{plan.name}</h3>
                  {plan.badge && (
                    <span className={cn(
                      "px-2.5 py-0.5 rounded-full text-xs font-medium",
                      plan.name === "Starter" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    )}>
                      {plan.badge}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-gray-600 min-h-[48px]">{plan.description}</p>

                <div className="mt-6">
                  <div className="flex items-end">
                    <span className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                      {plan.price.monthly}
                    </span>
                    <span className="text-gray-600 ml-2">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="mt-6 sm:mt-8 space-y-4">
                  {plan.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 sm:mt-8">
                  <button
                    className={cn(
                      "w-full py-3 px-4 rounded-md text-center font-medium transition-colors",
                      plan.badge
                        ? "bg-[rgb(0,112,100)] hover:bg-[rgb(0,92,82)] text-white shadow-md"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                    )}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Test success/failure flows
          </h3>
          <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Use these CTAs to hit the two endpoints and confirm integration.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              className="inline-flex justify-center rounded-md bg-[rgb(0,112,100)] px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-[rgb(0,92,82)] transition-colors"
              onClick={async () => {
                setApiResult(null);
                const res = await fetch("/api/success");
                const body = await res.json().catch(() => ({}));
                setApiResult(`Success: ${res.status} ${JSON.stringify(body)}`);
              }}
            >
              Trigger success API
            </button>

            <button
              type="button"
              className="inline-flex justify-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-black transition-colors"
              onClick={async () => {
                setApiResult(null);
                const res = await fetch("/api/failure");
                const body = await res.json().catch(() => ({}));
                setApiResult(`Failure: ${res.status} ${JSON.stringify(body)}`);
              }}
            >
              Trigger failure API
            </button>

            <button
              type="button"
              className="inline-flex justify-center rounded-md bg-orange-500 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-orange-600 transition-colors"
              onClick={async () => {
                setApiResult(null);
                const res = await fetch("/api/random");
                const body = await res.json().catch(() => ({}));
                setApiResult(`Random: ${res.status} ${JSON.stringify(body)}`);
              }}
            >
              Trigger random API
            </button>
          </div>

          {apiResult && (
            <div className="mt-4 text-xs sm:text-sm text-gray-700">
              <span className="font-mono break-words">{apiResult}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}