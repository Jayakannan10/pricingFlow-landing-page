"use client";

import { useEffect, useRef } from "react";
import { AreaChart, BarChart, Layout, Zap, ShieldCheck, PieChart } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: AreaChart,
    title: "Dynamic Pricing Analysis",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    icon: PieChart,
    title: "Market Segmentation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    icon: Zap,
    title: "Real-time Optimization",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    icon: Layout,
    title: "Customizable Dashboards",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    icon: BarChart,
    title: "Competitor Analysis",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    icon: ShieldCheck,
    title: "Revenue Protection",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  }
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-features");
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px" 
      }
    );
    
    const featureElements = document.querySelectorAll(".feature-card");
    featureElements.forEach((element) => {
      observer.observe(element);
    });
    
    return () => {
      featureElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section id="features" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(0,112,100)]">
            Powerful Features to Optimize Your Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={cn(
                "feature-card bg-white rounded-xl shadow-sm p-8 transition-all duration-500 hover:shadow-md opacity-0 transform translate-y-8",
                index % 3 === 0 ? "delay-[0ms]" : 
                index % 3 === 1 ? "delay-[200ms]" : "delay-[400ms]"
              )}
            >
              <div className="inline-flex items-center justify-center p-3 bg-teal-50 rounded-xl mb-5">
                <feature.icon className="h-6 w-6 text-[rgb(0,112,100)]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
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