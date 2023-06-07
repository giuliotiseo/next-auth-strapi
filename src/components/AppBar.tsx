import React from 'react'
import LoginButton from './LoginButton'
import Link from 'next/link'

const AppBar = () => {
  return (
    <div className='flex items-center w-full justify-between'>
      <div className='flex items-center space-x-8'>
        <Link href="/" className='font-bold uppercase'>Logo</Link>
        <Link href="dashboard">Dashboard</Link>
      </div>

      <LoginButton />
    </div>
  )
}

export default AppBar
