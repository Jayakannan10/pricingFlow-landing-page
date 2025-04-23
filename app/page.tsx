'use client';

import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { useEffect, useState, Suspense } from 'react';
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import PricingSection from "@/components/sections/PricingSection";
import FooterSection from "@/components/sections/FooterSection";
import Navbar from "@/components/Navbar";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  const { t } = useTranslation();
  

  return (
    <>
      

      <main className="flex flex-col items-center justify-between">
        <Navbar />
        <Suspense fallback={<Skeleton className="h-[800px] w-full" />}>
          <HeroSection />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-[600px] w-full" />}>
          <HowItWorksSection />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-[600px] w-full" />}>
          <FeaturesSection />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-[600px] w-full" />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-[600px] w-full" />}>
          <FAQSection />
        </Suspense>
        <PricingSection />
        <FooterSection />
      </main>
    </>
  );
}
