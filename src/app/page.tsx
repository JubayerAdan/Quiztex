"use client";

import { useEffect } from "react";
import useAuth from "@/hooks/useAuth";
import usePublicFetcher from "@/hooks/usePublicFetcher";
import { useRouter } from "next/navigation";

export default function Home() {
  const { loading, user } = useAuth();
  const router = useRouter();
  const email = !loading && user ? user.email : "";

  const { data: publicData } = email
    ? usePublicFetcher({
        url: `http://localhost:5000/accounts/${email}`,
        method: "get",
      })
    : { data: null };

  useEffect(() => {
    if (!loading && publicData) {
      if (publicData.admin) {
        router.push("/admin");
      } else {
        router.push("/students");
      }
    }
  }, [loading, publicData, router]);

  if (loading || !publicData) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
    </main>
    
    );
  }

  return (
    <main>
      {/* Content can go here if needed */}
    </main>
  );
}
