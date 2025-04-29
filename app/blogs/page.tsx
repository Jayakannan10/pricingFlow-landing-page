"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import contentData from "@/data/content.json";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    // Sort blogs by date (newest first)
    const sortedBlogs = [...contentData.blogs].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    
    setBlogs(sortedBlogs);
  }, []);

  return (
    
    <div className="container mx-auto py-20 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-[rgb(0,112,100)]">
        Our Blog
      </h1>
      
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {blogs.map((blog) => (
    <div
      key={blog.id}
      className="flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
          <span>{blog.author}</span>
          <span>{new Date(blog.date).toLocaleDateString()}</span>
          
        </div>

        <Link href={`/blogs/${blog.slug}`}>
          <h2 className="text-xl font-semibold mb-2 text-gray-800 hover:text-[rgb(0,92,82)] transition-colors">
            {blog.title}
          </h2>
        </Link>

        <p className="text-gray-600 mb-4">{blog.description}</p>

        {/* <div className="mt-auto pt-4">
          <Link
            href={`/blogs/${blog.slug}`}
            className="inline-flex items-center text-[rgb(0,112,100)] font-medium hover:text-[rgb(0,92,82)] transition-colors"
          >
            Read More <ArrowRight size={16} className="ml-1" />
          </Link>
        </div> */}
      </div>
    </div>
  ))}
</div>
</div>
  );
} 