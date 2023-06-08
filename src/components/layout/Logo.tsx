import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface LogoProps {
  textColor?: string;
};

const Logo:React.FC<LogoProps> = ({
  textColor = "white"
}) => {
  return (
    <Link className="logo-link block text-dark" href="/">
      <div className='w-[180px]'>
        { textColor === 'white' && (
          <Image
            src="/logo/anapia-orienta-white-text-logo.svg"
            width={500}
            height={500}
            alt="Anapia Orienta Logo"
          />
        )}
        
        { textColor === 'dark' && (
          <Image
            src="/logo/anapia-orienta-dark-text-logo.svg"
            width={500}
            height={500}
            alt="Anapia Orienta Logo"
          />
        )}
      </div>
    </Link>
  )
}

export default Logo;
