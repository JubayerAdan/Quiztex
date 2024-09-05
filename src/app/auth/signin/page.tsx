"use client"
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

export default function SignIn() {
  const { register, handleSubmit } = useForm();
  // const [loading, setLoading] = useState(false);
  const {signIn, user, loading} = useAuth()
  const router = useRouter();
  if(!loading && user ) return router.push("/")
  const onSubmit = (data : any) => {
  
    const {email, password } = data
    signIn(email, password).then((result : any) => {
      console.log(result);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500
      });
      router.push("/")
    })
    console.log(data);

  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="email"
            {...register('email')}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="password"
            {...register('password')}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded"
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
