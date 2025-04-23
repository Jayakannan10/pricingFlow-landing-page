"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from 'react-i18next';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation('common');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

  const faqs = [
    {
      question: t('faq.items.0.question'),
      answer: t('faq.items.0.answer')
    },
    {
      question: t('faq.items.1.question'),
      answer: t('faq.items.1.answer')
    },
    {
      question: t('faq.items.2.question'),
      answer: t('faq.items.2.answer')
    },
    {
      question: t('faq.items.3.question'),
      answer: t('faq.items.3.answer')
    },
    {
      question: t('faq.items.4.question'),
      answer: t('faq.items.4.answer')
    }
  ];

  return (
    <section id="faq" className="py-16 px-4 sm:py-20 bg-gray-50 w-full" ref={sectionRef}>
      <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[rgb(0,112,100)]">
            {t('faq.title')}
          </h2>
          <p className="mt-4 text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('faq.description')}
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={cn(
                "border border-gray-200 rounded-lg overflow-hidden transition-all duration-500 transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
                `delay-[${index * 100}ms]`
              )}
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">{faq.question}</h3>
                <ChevronDown 
                  className={cn(
                    "h-5 w-5 text-gray-500 transition-transform duration-300",
                    openIndex === index ? "transform rotate-180" : ""
                  )} 
                />
              </button>
              
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="p-6 pt-0 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions? Contact our support team.
          </p>
          <button className="mt-4 px-6 py-3 bg-[rgb(0,112,100)] text-white font-medium rounded-md hover:bg-[rgb(0,92,82)] transition-colors duration-300">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}