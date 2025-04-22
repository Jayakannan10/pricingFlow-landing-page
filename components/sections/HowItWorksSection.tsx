"use client";

import { useState, useEffect, useRef } from "react";
import { CheckCircle, Play } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Upload Your Data",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    number: "02",
    title: "Analyze Market Trends",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    number: "03",
    title: "Generate Pricing Models",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    number: "04",
    title: "Implement & Monitor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  }
];

export default function HowItWorksSection() {
  const [videoPlaying, setVideoPlaying] = useState(false);
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
    <section id="how-it-works" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(0,112,100)]">
            How PricingFlows Works
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={cn(
            "transition-all duration-1000 transform",
            isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          )}>
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className={cn(
                  "flex mb-8 transition-all duration-500",
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
                  `delay-[${index * 200}ms]`
                )}
              >
                <div className="mr-6">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-50 text-[rgb(0,112,100)] font-bold">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className={cn(
            "transition-all duration-1000 delay-300 transform",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              {!videoPlaying ? (
                <>
                  <img 
                    src="https://images.pexels.com/photos/7947961/pexels-photo-7947961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Video thumbnail" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <button 
                      onClick={() => setVideoPlaying(true)}
                      className="h-20 w-20 rounded-full bg-white bg-opacity-90 flex items-center justify-center transition-transform duration-300 hover:scale-110 focus:outline-none"
                    >
                      <Play size={36} className="text-[rgb(0,112,100)] ml-2" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    width="560" 
                    height="400" 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                    title="PricingFlows Demo Video"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              )}
            </div>
            
            <div className="mt-6 flex items-center justify-center space-x-4">
              <CheckCircle className="h-5 w-5 text-[rgb(0,112,100)]" />
              <span className="text-gray-600">See how PricingFlows works in just 2 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}