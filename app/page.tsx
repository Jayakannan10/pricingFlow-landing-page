'use client';

import Head from 'next/head';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  return (
    <>
      <Head>
        {/* Open Graph Tags */}
        <meta property="og:title" content="Enhance Your Pricing Page with Tooltips & Pricing Parity" />
        <meta property="og:description" content="Improve your pricing page with interactive tooltips and pricing parity. Boost clarity and conversions. Try Pricing Flow today!" />
        <meta property="og:image" content="https://pricingflow.com/hero-image.png" />
        <meta property="og:url" content="https://pricingflow.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Enhance Your Pricing Page with Tooltips & Pricing Parity" />
        <meta name="twitter:description" content="Improve your pricing page with interactive tooltips and pricing parity. Boost conversions with Pricing Flow. Try it now!" />
        <meta name="twitter:image" content="https://pricingflow.com/hero-image.png" />

        {/* Indexing and Canonical */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pricingflow.com/" />

        {/* Schema Markup (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Pricing Flow?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pricing Flow helps you enhance your pricing page with interactive tooltips and pricing parity. Optimize your pricing strategy to boost conversions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need a developer to set this up?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No! Pricing Flow is no-code, designed for marketers and business owners to easily add tooltips and manage pricing parity without technical expertise."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does pricing parity work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pricing parity allows you to set location-based pricing rules so your prices match local purchasing power, increasing global sales."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I make changes to tooltips after publishing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! You can update and modify tooltips at any time, and changes will be reflected instantly on your pricing page."
                  }
                }
              ]
            }),
          }}
        />
      </Head>

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
