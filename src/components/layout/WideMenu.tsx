import Link from 'next/link';
import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react";
import { TbUserCircle } from 'react-icons/tb';
import { usePathname } from "next/navigation";


const WideMenu: React.FC = () => {
  const pathname = usePathname()
  const session = useSession();
  const textVariant = pathname === '/'  ? "text-white" : "text-dark";

  return (
    <nav className="hidden md:flex items-center gap-8">
      <ul className={`flex items-center gap-8 font-bold font-title ${textVariant} text-lg`}>
        <li>
          { session.status === "authenticated" 
            ? (
              <Link href="/dashboard" className="text-lg text-inherit opacity-60 hover:opacity-100 transition-all">
                Il mio profilo
              </Link>
            )
            : (
              <Link href="/" className="text-lg text-inherit opacity-60 hover:opacity-100 transition-all">
                Home
              </Link>
            )
          }
        </li>
      </ul>

      { session.status === "authenticated" && (
        <button onClick={() => signOut({ callbackUrl: '/' })} className={`flex font-bold font-title items-center rounded-md px-4 py-2 bg-primary text-white hover:bg-primary hover:text-white transition-all`}>
          <TbUserCircle className='inline-flex mr-2 text-2xl' />
          Logout
        </button>
      )}

      { session.status !== "authenticated" && (
        <button onClick={() => signIn()} className={`flex font-bold font-title items-center rounded-md px-4 py-2 bg-primary text-white hover:bg-primary hover:text-white transition-all`}>
          <TbUserCircle className='inline-flex mr-2 text-2xl' />
          Login
        </button>
        // <Link href="/login" className={`flex bg-primary font-bold font-title items-center rounded-md px-4 py-2 ${bgVariant} hover:bg-primary hover:text-white transition-all`}>
        //   <TbUserCircle className='inline-flex mr-2 text-2xl' />
        //   Login
        // </Link>
      )}
    </nav>
  )
}

export default WideMenu;
