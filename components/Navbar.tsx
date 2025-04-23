"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Pricing", href: "#pricing" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only prevent default if it's a hash link to ensure smooth scrolling
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      
      // Close mobile menu if open
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[rgb(0,112,100)]">
              PricingFlows
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-[rgb(0,112,100)] font-medium transition-colors"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            {/* <Link 
              href="#contact" 
              className="px-4 py-2 text-[rgb(0,112,100)] font-medium"
            >
              Sign In
            </Link> */}
            <Link 
              href="#contact" 
              className="px-4 py-2 bg-[rgb(0,112,100)] text-white rounded-md font-medium hover:bg-[rgb(0,92,82)] transition-colors duration-200"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              Get Started
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-600 hover:text-[rgb(0,112,100)] font-medium"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 mt-4 px-3 pb-4">
              <Link 
                href="#contact" 
                className="px-4 py-2 text-center text-[rgb(0,112,100)] font-medium border border-[rgb(0,112,100)] rounded-md"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                Sign In
              </Link>
              <Link 
                href="#contact" 
                className="px-4 py-2 text-center bg-[rgb(0,112,100)] text-white rounded-md font-medium"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}