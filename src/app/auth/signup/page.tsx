"use client"
import useAuth from '@/hooks/useAuth';
import useAxiosPublic from '@/hooks/useAxios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function SignUp() {
  const { register, handleSubmit } = useForm();
 
   const router = useRouter();

  const {createUser, user, loading} = useAuth()
  if(!loading && user ) return router.push("/")
  const onSubmit = (data : any) => {
   
    const {email, name, password} = data
    createUser(email, password).then((response : any) => {
        console.log(response);
        
      const result = useAxiosPublic().post("/accounts", {email, password, name}).then(res => {
      router.push("/")
      })
      console.log(result);
      
      
    })
    console.log(data);
  
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            {...register('name')}
            placeholder="Name"
            className="w-full px-4 py-2 border rounded"
          />
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
            className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
}
