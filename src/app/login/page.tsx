import Logo from '@/components/Logo'
import LoginContainer from '@/components/auth/LoginContainer'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

// Metadata ------------------------------------------------------------------------------------------------------------------------------------
export const metadata:Metadata = {
  title: "Accedi - Fisigo",
  description: "Accedi a Fisigo per controllare gli apputamenti del tuo studio"
}

export default function Login() {
  return (
    <div className="flex flex-col items-center h-screen justify-center bg-white">
      <div className='w-full container mx-auto max-w-[640px] px-8'>
        <div className="text-center flex flex-col items-center">
          <Logo />
          <p className='mt-4'>
            Facendo tap su “Accedi” o “Registrati”, decidi di accettare i nostri <Link href="/termini-e-condizioni">Termini e Condizioni</Link>. Se vuoi saperne di più, scopri come utilizziamo i tuoi dati nella nostra
            <Link href="/privacy-policy" className='mx-1'>Privacy  Policy</Link> e <Link href="/cookie-policy" className='mx-1'>Cookie Policy</Link>
          </p>
        </div>

        <h1 className='font-title font-bold mt-8'>Login</h1>

        <div className='mt-4'>
          <LoginContainer />
        </div>
      </div>
    </div>
  )
}
