import { Suspense } from "react";
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
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <Suspense fallback={<Skeleton className="h-[800px] w-full" />}>
  <div className="flex items-center justify-center min-h-screen">
    <HeroSection />
  </div>
</Suspense>
      <Suspense fallback={<Skeleton className="h-[600px] w-full" />}>
        <FeaturesSection />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-[600px] w-full" />}>
        <HowItWorksSection />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-[600px] w-full" />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-[600px] w-full" />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-[600px] w-full" />}>
        <PricingSection />
      </Suspense>
      <FooterSection />
    </main>
  );
}