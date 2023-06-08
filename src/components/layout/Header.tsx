import React from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation';
import WideMenu from './WideMenu';
import MenuButton from './MenuButton';

const Header = () => {
  const pathname = usePathname();
  const color = pathname === '/' ? 'white' : 'dark' 

  return (
    <header className={`${color ? 'bg-transparent' : 'bg-white'} relative z-10`}>
      <div className="container flex items-center justify-between mx-auto px-0 sm:px-4 py-4">
        <div className="flex items-center">
          <MenuButton color={color} />
          <Logo textColor={color} />
        </div>

        <WideMenu />
      </div>
    </header>
  )
}

export default Header
