"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden text-center">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        
          <div className={cn(
            "transition-all duration-1000 transform",
            isVisible 
              ? "translate-y-0 opacity-100" 
              : "translate-y-10 opacity-0"
          )}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[rgb(0,112,100)]">
              Optimize Your Pricing Strategy
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#pricing" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[rgb(0,112,100)] hover:bg-[rgb(0,92,82)] transition-colors duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="#how-it-works" 
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                See How It Works
              </Link>
            </div>
          </div>
          <div className={cn(
            "transition-all duration-1000 delay-300 transform",
            isVisible 
              ? "translate-x-0 opacity-100" 
              : "translate-x-10 opacity-0"
          )}>
            {/* <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-600 opacity-30 blur rounded-lg"></div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/6801642/pexels-photo-6801642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Dashboard Preview" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-6 w-64">
                <div className="flex items-center justify-between mb-2">
                  <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  <p className="text-green-600 font-medium">+24%</p>
                </div>
                <h3 className="font-bold text-gray-800">Revenue Increase</h3>
                <p className="text-sm text-gray-500 mt-1">Optimized pricing model</p>
              </div>
            </div> */}
          </div>
        
      </div>
    </section>
  );
}