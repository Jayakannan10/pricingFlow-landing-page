"use client";

import { useState, useEffect, useRef } from "react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

type PricingPeriod = "monthly" | "annual";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses just getting started.",
    monthlyPrice: 49,
    annualPrice: 470,
    features: [
      { name: "Basic pricing analysis", included: true },
      { name: "Up to 10,000 transactions", included: true },
      { name: "1 pricing model", included: true },
      { name: "Email support", included: true },
      { name: "Advanced analytics", included: false },
      { name: "API access", included: false },
      { name: "Dedicated account manager", included: false },
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    description: "For growing businesses with advanced needs.",
    monthlyPrice: 99,
    annualPrice: 950,
    features: [
      { name: "Advanced pricing analysis", included: true },
      { name: "Up to 100,000 transactions", included: true },
      { name: "5 pricing models", included: true },
      { name: "Priority support", included: true },
      { name: "Advanced analytics", included: true },
      { name: "API access", included: true },
      { name: "Dedicated account manager", included: false },
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large organizations.",
    monthlyPrice: 249,
    annualPrice: 2390,
    features: [
      { name: "Full-suite pricing analysis", included: true },
      { name: "Unlimited transactions", included: true },
      { name: "Unlimited pricing models", included: true },
      { name: "24/7 priority support", included: true },
      { name: "Advanced analytics", included: true },
      { name: "API access", included: true },
      { name: "Dedicated account manager", included: true },
    ],
    cta: "Contact Sales",
    popular: false
  },
];

export default function PricingSection() {
  const [period, setPeriod] = useState<PricingPeriod>("monthly");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    <section id="pricing" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(0,112,100)]">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          
          <div className="mt-8 inline-flex items-center p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => setPeriod("monthly")}
              className={cn(
                "py-2 px-6 text-sm font-medium rounded-md transition-colors",
                period === "monthly" 
                  ? "bg-white shadow-sm text-gray-900" 
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setPeriod("annual")}
              className={cn(
                "py-2 px-6 text-sm font-medium rounded-md transition-colors",
                period === "annual" 
                  ? "bg-white shadow-sm text-gray-900" 
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              Annual <span className="text-[rgb(0,112,100)]">Save 20%</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={cn(
                "relative rounded-2xl shadow-lg overflow-hidden transition-all duration-700 transform",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
                `delay-[${index * 200}ms]`,
                plan.popular ? "border-2 border-[rgb(0,112,100)] scale-105 z-10 bg-white" : "bg-white"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[rgb(0,112,100)] text-white py-1 px-4 text-sm font-medium transform translate-x-2 -translate-y-0 rotate-45 origin-bottom-left">
                  Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-gray-600 h-12">{plan.description}</p>
                
                <div className="mt-6">
                  <div className="flex items-end">
                    <span className="text-4xl font-extrabold text-gray-900">
                      ${period === "monthly" ? plan.monthlyPrice : plan.annualPrice}
                    </span>
                    <span className="text-gray-600 ml-2">
                      /{period === "monthly" ? "month" : "year"}
                    </span>
                  </div>
                  
                  {period === "annual" && (
                    <p className="mt-1 text-sm text-[rgb(0,112,100)]">
                      Save ${plan.monthlyPrice * 12 - plan.annualPrice} with annual billing
                    </p>
                  )}
                </div>
                
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 shrink-0 mt-0.5" />
                      )}
                      <span className={cn(
                        "ml-3",
                        feature.included ? "text-gray-700" : "text-gray-400"
                      )}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <button
                    className={cn(
                      "w-full py-3 px-4 rounded-md text-center font-medium transition-colors",
                      plan.popular
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
        
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-gray-900">
            Enterprise Solutions
          </h3>
          <p className="mt-2 text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="mt-6 inline-flex items-center text-[rgb(0,112,100)] font-medium hover:text-[rgb(0,92,82)]">
            Contact our sales team
          </button>
        </div>
      </div>
    </section>
  );
}