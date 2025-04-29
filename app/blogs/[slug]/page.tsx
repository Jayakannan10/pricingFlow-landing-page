"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import contentData from "@/data/content.json";

export default function BlogDetail() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  
  const [blog, setBlog] = useState<any>(null);
  const [activeSection, setActiveSection] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundBlog = contentData.blogs.find((blog) => blog.slug === slug);
    if (foundBlog) {
      setBlog(foundBlog);
      // Set first section as active by default
      if (foundBlog.content && foundBlog.content.length > 0) {
        setActiveSection(foundBlog.content[0].id);
      }
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto py-20 px-4 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[rgb(0,112,100)]"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container mx-auto py-20 px-4 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Blog not found</h1>
        <Link 
          href="/blogs"
          className="inline-flex items-center mt-4 text-[rgb(0,112,100)] hover:text-[rgb(0,92,82)]"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Blogs
        </Link>
      </div>
    );
  }

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    
    // Smooth scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto py-20 px-4 md:px-6">
       <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[rgb(0,112,100)] h-[350px] flex flex-col justify-center my-5">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
        {blog.title}
      </h2>
      <div className="mt-auto flex justify-between text-sm text-white">
        <span>{blog.author}</span>
        <span>{new Date(blog.date).toLocaleDateString()}</span>
      </div>
    </div>
  </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Table of Contents */}
        <div className="md:w-1/4">
          <div className="sticky top-24 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Table of Contents</h3>
            <div className="space-y-2">
              {blog.content.map((section: any) => (
                <div key={section.id} className="flex items-start">
                  <input
                    type="radio"
                    id={`toc-${section.id}`}
                    name="toc"
                    value={section.id}
                    checked={activeSection === section.id}
                    onChange={() => handleSectionChange(section.id)}
                    className="mt-1 mr-2"
                  />
                  <label 
                    htmlFor={`toc-${section.id}`}
                    className={`cursor-pointer ${activeSection === section.id ? 'text-[rgb(0,112,100)] font-medium' : 'text-gray-600'}`}
                  >
                    {section.title}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="md:w-3/4">
          <div className="prose max-w-none">
            {blog.content.map((section: any) => (
              <div key={section.id} id={section.id} className="mb-8 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">{section.title}</h2>
                <p className="text-gray-700">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 