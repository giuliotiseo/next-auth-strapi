"use client";
import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react";

const LoginButton = () => {
  const { data: session } = useSession();

  console.log('Session', session);

  if(session && session.user) {
    return (
      <div className='flex gap-4 ml-auto'>
        <p>{session.user.username}</p>
        <button onClick={() => signOut()} className='text-red-600'>
          Sign out
        </button>
      </div>
    )
  }

  return (
    <div className='flex gap-4 ml-auto'>
      <button onClick={() => signIn()} className='text-green-600 ml-auto'>
        Sign in
      </button>
    </div>
  )
}

export default LoginButton
