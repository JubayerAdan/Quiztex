"use client";
import { useRouter } from 'next/navigation';
import React, { ReactNode, useEffect } from 'react';
import useAuth from './useAuth';

export default function AuthChecker({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');
    }
  }, [loading, user, router]);

  if (loading) {
    return <div>
        
        <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
    </main>
  </div>; 
  }

  return <div className='h-full'>
    {children}
  </div>;
}
