"use client"
import useAuth from '@/hooks/useAuth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Auth() {
  const router = useRouter();

  const { user, loading} = useAuth()
  if(!loading && user ) return router.push("/")
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
          Welcome to Quiztex
        </h2>
        <div className="flex flex-col space-y-6">
          <Link className="py-3 px-6 bg-blue-600 text-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700" href="/auth/signin">
           
              Sign In
           
          </Link>
          <Link className="py-3 px-6 bg-green-600 text-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-green-700" href="/auth/signup">
           
              Sign Up
           
          </Link>
        </div>
      </div>
    </div>
  );
}
