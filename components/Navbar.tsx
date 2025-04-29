"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, Home } from "lucide-react";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { name: "Features", href: "/#features" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "FAQ", href: "/#faq" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Blogs", href: "/blogs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isBlogsPage = pathname?.startsWith("/blogs");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled || isBlogsPage ? "bg-white shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[rgb(0,112,100)]">
              <img src='https://ik.imagekit.io/1tudtg11f/logo.webp?updatedAt=1745420385967' alt='pricingFlow image' width='200' />
            </Link>
          </div>

          {/* Navigation items */}
          {isBlogsPage ? (
            <>
              <div className="flex-1 flex justify-center items-center space-x-6">
                <Link 
                  href="/" 
                  className="flex items-center gap-2 text-gray-600 hover:text-[rgb(0,112,100)] font-medium transition-colors"
                >
                  <Home size={20} />
                  <span className="hidden md:inline">Home</span>
                </Link>
                <Link 
                  href="/blogs" 
                  className="text-gray-600 hover:text-[rgb(0,112,100)] font-medium transition-colors"
                >
                  Blogs
                </Link>
              </div>
              <Link 
                href="http://localhost:3001/auth/sign-in" 
                className="px-4 py-2 bg-[rgb(0,112,100)] text-white rounded-md font-medium hover:bg-[rgb(0,92,82)] transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </Link>
            </>
          ) : (
            <>
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                {NAV_ITEMS.map((item) => (
                  <Link 
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-[rgb(0,112,100)] font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="hidden md:flex items-center space-x-4">
                <Link 
                  href="http://localhost:3001/auth/sign-in" 
                  className="px-4 py-2 bg-[rgb(0,112,100)] text-white rounded-md font-medium hover:bg-[rgb(0,92,82)] transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
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
            </>
          )}
        </div>

        {/* Mobile Navigation */}
        {!isBlogsPage && mobileMenuOpen && (
          <nav className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-[rgb(0,112,100)] font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="http://localhost:3001/auth/sign-in" 
                className="px-4 py-2 text-center bg-[rgb(0,112,100)] text-white rounded-md font-medium"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}