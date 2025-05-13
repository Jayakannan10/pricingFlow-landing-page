// "use client";

// import { useState, useEffect, useRef } from "react";
// import { Star, ChevronLeft, ChevronRight } from "lucide-react";
// import { cn } from "@/lib/utils";

// const testimonials = [
//   {
//     id: 1,
//     quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Excepteur sint occaecat cupidatat non proident.",
//     name: "Sarah Johnson",
//     title: "CEO, TechStart",
//     image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     rating: 5
//   },
//   {
//     id: 2,
//     quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Excepteur sint occaecat cupidatat non proident.",
//     name: "Michael Chen",
//     title: "CFO, GrowthCorp",
//     image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     rating: 5
//   },
//   {
//     id: 3,
//     quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Excepteur sint occaecat cupidatat non proident.",
//     name: "Emma Rodriguez",
//     title: "Marketing Director, InnovateX",
//     image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     rating: 4
//   },
//   {
//     id: 4,
//     quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Excepteur sint occaecat cupidatat non proident.",
//     name: "David Kim",
//     title: "Product Manager, Nexus",
//     image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     rating: 5
//   }
// ];

// export default function TestimonialsSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLDivElement>(null);

//   const nextTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entries[0].target);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section id="testimonials" className="py-16 px-4 sm:py-20 bg-gray-50 w-full" ref={sectionRef}>
//       <div className="w-full max-w-7xl mx-auto">
//         <div className="text-center mb-12 sm:mb-16">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[rgb(0,112,100)]">
//             What Our Customers Say
//           </h2>
//           <p className="mt-4 text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
//           </p>
//         </div>

//         <div className={cn(
//           "transition-all duration-1000 transform",
//           isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//         )}>
//           <div className="relative mx-auto max-w-4xl overflow-hidden px-2 sm:px-4 md:px-0">
//             <div className="flex overflow-hidden">
//               {testimonials.map((testimonial, index) => (
//                 <div
//                   key={testimonial.id}
//                   className={cn(
//                     "w-full shrink-0 transition-all duration-500 ease-in-out",
//                     index === currentIndex ? "opacity-100 transform-none" : "opacity-0 absolute"
//                   )}
//                   style={{
//                     transform: index === currentIndex ? 'translateX(0)' : `translateX(${(index - currentIndex) * 100}%)`
//                   }}
//                 >
//                   <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-8 md:p-12">
//                     <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
//                       <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 relative flex-shrink-0">
//                         <img
//                           src={testimonial.image}
//                           alt={testimonial.name}
//                           className="rounded-full object-cover w-full h-full"
//                         />
//                         <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-white rounded-full p-1 shadow-md">
//                           <div className="bg-[rgb(0,112,100)] text-white rounded-full p-1">
//                             <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
//                           </div>
//                         </div>
//                       </div>

//                       <div className="text-center md:text-left">
//                         <div className="flex justify-center md:justify-start mb-2 sm:mb-3">
//                           {Array.from({ length: 5 }).map((_, i) => (
//                             <Star
//                               key={i}
//                               className={cn(
//                                 "h-4 w-4 sm:h-5 sm:w-5 mr-1",
//                                 i < testimonial.rating
//                                   ? "text-yellow-400 fill-current"
//                                   : "text-gray-300"
//                               )}
//                             />
//                           ))}
//                         </div>
//                         <blockquote className="text-base sm:text-lg text-gray-700 italic mb-4 sm:mb-6">
//                           "{testimonial.quote}"
//                         </blockquote>
//                         <cite className="not-italic">
//                           <p className="font-bold text-gray-900 text-base sm:text-lg">{testimonial.name}</p>
//                           <p className="text-gray-600">{testimonial.title}</p>
//                         </cite>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   className={cn(
//                     "h-2 w-2 rounded-full transition-colors duration-300",
//                     index === currentIndex ? "bg-[rgb(0,112,100)]" : "bg-gray-300"
//                   )}
//                   onClick={() => setCurrentIndex(index)}
//                   aria-label={`Go to testimonial ${index + 1}`}
//                 />
//               ))}
//             </div>

//             <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 px-2 sm:px-5">
//               <div className="flex justify-between">
//                 <button
//                   onClick={prevTestimonial}
//                   className="bg-white rounded-full p-1 sm:p-2 shadow-md hover:bg-gray-50 transition-colors z-10"
//                   aria-label="Previous testimonial"
//                 >
//                   <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
//                 </button>
//                 <button
//                   onClick={nextTestimonial}
//                   className="bg-white rounded-full p-1 sm:p-2 shadow-md hover:bg-gray-50 transition-colors z-10"
//                   aria-label="Next testimonial"
//                 >
//                   <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Excepteur sint occaecat cupidatat non proident.",
    name: "Sarah Johnson",
    title: "CEO, TechStart",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5,
    username: "@sarahj",
  },
  {
    id: 2,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Excepteur sint occaecat cupidatat non proident.",
    name: "Michael Chen",
    title: "CFO, GrowthCorp",
    image:
      "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5,
    username: "@michaelc",
  },
  {
    id: 3,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Excepteur sint occaecat cupidatat non proident.",
    name: "Emma Rodriguez",
    title: "Marketing Director, InnovateX",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4,
    username: "@emmar",
  },
  {
    id: 4,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Excepteur sint occaecat cupidatat non proident.",
    name: "David Kim",
    title: "Product Manager, Nexus",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5,
    username: "@davidk",
  },
];

// Add more testimonials to match the reference grid layout (8 total)

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  // Generate hashtags for each testimonial
  const hashtags = [
    "#Celebration",
    "#make_it_fast",
    "#dev",
    "#tools",
    "#another",
  ];

  return (
    <section
      id="testimonials"
      className="py-10 bg-gray-100 sm:py-16 lg:py-24 w-full"
      ref={sectionRef}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-[rgb(0,112,100)] sm:text-4xl lg:text-5xl">
            What Our Customers Say
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
        </div>

        <div
          className={cn(
            "grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10",
            "transition-all duration-1000"
          )}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="overflow-hidden bg-white rounded-md"
            >
              <div className="px-5 py-6">
                <div className="flex items-center justify-between">
                  <img
                    className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="min-w-0 ml-3 mr-auto">
                    <p className="text-base font-semibold text-black truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600 truncate">
                      {testimonial.username}
                    </p>
                  </div>
                  <a href="#" title="" className="inline-block text-sky-500">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
                    </svg>
                  </a>
                </div>
                <blockquote className="mt-5">
                  <p className="text-base text-gray-800">
                    {testimonial.quote}
                    <span className="block text-sky-500">
                      {hashtags[testimonial.id % hashtags.length]}
                    </span>
                  </p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
