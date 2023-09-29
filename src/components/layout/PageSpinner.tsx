import React, { FC } from 'react'
import Image from 'next/image'
import Spinner from './Spinner'
import layoutStyles from "./styles/layout.module.css"

const PageSpinner:FC<{ message?: string }> = ({ message }) => {
  return (
    <div className={`flex flex-col h-screen w-screen items-center justify-center max-w-full ${layoutStyles.pageSpinner}`}>
      <div className='w-[200px] mb-4 flex items-center justify-center'>
        <Image width={200} height={200} alt="Anapia Orienta Logo" src="/logo/anapia-orienta-dark-text-logo.svg" />
      </div>

      <div>
        <div className='text-center flex flex-col items-center justify-center'>
          <Spinner />
          { message && <p className='mt-2'>{ message }</p>}
        </div>
      </div>
    </div>
  )
}

export default PageSpinner
