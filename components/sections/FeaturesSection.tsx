"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from 'react-i18next';
import { 
  BarChart3, 
  LineChart, 
  Settings, 
  Zap, 
  Shield, 
  GitMerge 
} from "lucide-react";

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation('common');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-features');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const featureCards = sectionRef.current.querySelectorAll('.feature-card');
      featureCards.forEach((card) => observer.observe(card));
    }

    return () => {
      if (sectionRef.current) {
        const featureCards = sectionRef.current.querySelectorAll('.feature-card');
        featureCards.forEach((card) => observer.unobserve(card));
      }
    };
  }, []);

  const featureItems = [
    { icon: BarChart3 },
    { icon: LineChart },
    { icon: Settings },
    { icon: Zap },
    { icon: Shield },
  ];
  

  const features = featureItems.map((item, index) => ({
    ...item,
    title: t(`features.items.${index}.title`),
    description: t(`features.items.${index}.description`)
  }));

  return (
    <section id="features" className="w-full py-16 px-4 sm:py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[rgb(0,112,100)]">
            {t('features.title')}
          </h2>
          <p className="mt-4 text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={cn(
                "feature-card bg-white rounded-xl shadow-sm p-6 sm:p-8 transition-all duration-500 hover:shadow-md opacity-0 transform translate-y-8",
                index % 3 === 0 ? "delay-[0ms]" : 
                index % 3 === 1 ? "delay-[200ms]" : "delay-[400ms]"
              )}
            >
              <div className="inline-flex items-center justify-center p-3 bg-teal-50 rounded-xl mb-5">
                <feature.icon className="h-6 w-6 text-[rgb(0,112,100)]" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        .animate-features {
          transform: translateY(0);
          opacity: 1;
        }
      `}</style>
    </section>
  );
}