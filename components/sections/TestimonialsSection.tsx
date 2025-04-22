"use client";

import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Excepteur sint occaecat cupidatat non proident.",
    name: "Sarah Johnson",
    title: "CEO, TechStart",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  },
  {
    id: 2,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Excepteur sint occaecat cupidatat non proident.",
    name: "Michael Chen",
    title: "CFO, GrowthCorp",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  },
  {
    id: 3,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Excepteur sint occaecat cupidatat non proident.",
    name: "Emma Rodriguez",
    title: "Marketing Director, InnovateX",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4
  },
  {
    id: 4,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Excepteur sint occaecat cupidatat non proident.",
    name: "David Kim",
    title: "Product Manager, Nexus",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
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

  return (
    <section id="testimonials" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(0,112,100)]">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
        </div>
        
        <div className={cn(
          "transition-all duration-1000 transform",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          <div className="relative mx-auto max-w-4xl overflow-hidden px-4 md:px-0">
            <div className="flex overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={cn(
                    "w-full shrink-0 transition-all duration-500 ease-in-out",
                    index === currentIndex ? "opacity-100 transform-none" : "opacity-0 absolute"
                  )}
                  style={{ 
                    transform: index === currentIndex ? 'translateX(0)' : `translateX(${(index - currentIndex) * 100}%)` 
                  }}
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="w-24 h-24 md:w-32 md:h-32 relative flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="rounded-full object-cover w-full h-full"
                        />
                        <div className="absolute -bottom-3 -right-3 bg-white rounded-full p-1 shadow-md">
                          <div className="bg-[rgb(0,112,100)] text-white rounded-full p-1">
                            <Star className="h-4 w-4 fill-current" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-3">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              className={cn(
                                "h-5 w-5 mr-1", 
                                i < testimonial.rating 
                                  ? "text-yellow-400 fill-current" 
                                  : "text-gray-300"
                              )} 
                            />
                          ))}
                        </div>
                        <blockquote className="text-lg text-gray-700 italic mb-6">
                          "{testimonial.quote}"
                        </blockquote>
                        <cite className="not-italic">
                          <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                          <p className="text-gray-600">{testimonial.title}</p>
                        </cite>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "h-2 w-2 rounded-full transition-colors duration-300",
                    index === currentIndex ? "bg-[rgb(0,112,100)]" : "bg-gray-300"
                  )}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 left-[5px] right-[5px]">
  <div className="flex justify-between">
    <button
      onClick={prevTestimonial}
      className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors -translate-x-1/2 md:block z-10" // Added z-10
      aria-label="Previous testimonial"
    >
      <ChevronLeft className="h-6 w-6 text-gray-600" />
    </button>
    <button
      onClick={nextTestimonial}
      className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors translate-x-1/2 md:block z-10" // Added z-10
      aria-label="Next testimonial"
    >
      <ChevronRight className="h-6 w-6 text-gray-600" />
    </button>
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}