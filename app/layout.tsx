// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google'; // For custom fonts
import I18nProvider from '../components/I18nProvider'; // Import the I18nProvider component
import Script from 'next/script';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Enhance Your Pricing Page with Tooltips & Pricing Parity",
  description: 'Improve your pricing page with interactive tooltips and pricing parity. Boost conversions with Pricing Flow. Try it now!',
  metadataBase: new URL('https://pricing-flow-landing-page.vercel.app'),
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://pricing-flow-landing-page.vercel.app/',
  },
  openGraph: {
    title: 'Enhance Your Pricing Page with Tooltips & Pricing Parity',
    description: 'Improve your pricing page with interactive tooltips and pricing parity. Boost clarity and conversions. Try Pricing Flow today!',
    url: 'https://pricing-flow-landing-page.vercel.app/',
    images: [
      {
        url: 'https://pricing-flow-landing-page.vercel.app/hero-image.png',
        width: 1200,
        height: 630,
        alt: 'Pricing Flow Hero Image',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pricingflow',
    creator: '@pricingflow',
    title: 'Enhance Your Pricing Page with Tooltips & Pricing Parity',
    description: 'Improve your pricing page with interactive tooltips and pricing parity. Boost conversions with Pricing Flow. Try it now!',
    images: ['https://pricing-flow-landing-page.vercel.app/hero-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Explicit robots meta tag */}
        <meta name="robots" content="index, follow" />
        
        {/* Explicit canonical URL */}
        <link rel="canonical" href="https://pricing-flow-landing-page.vercel.app/" />
        
        {/* JSON-LD Schema */}
        <Script
          id="schema-faq"
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
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Wrap your app with the I18nProvider */}
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
