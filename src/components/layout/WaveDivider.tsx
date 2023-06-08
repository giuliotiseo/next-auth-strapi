import Image from 'next/image'
import React from 'react'

const WaveDivider:React.FC<{}> = () => {
  return (
    <Image
      className="w-full"
      width={1920}
      height={170}
      src="/homepage/hero-wave-divider.png"
      alt="Light gray divider"
    />
  )
}

export default WaveDivider
