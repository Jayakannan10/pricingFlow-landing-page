"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ArticlesRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.push("/blogs");
  }, [router]);
  
  return (
    <div className="container mx-auto py-20 px-4 flex justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[rgb(0,112,100)]"></div>
    </div>
  );
} 