import React from 'react'
import heroStyles from "./styles/hero.module.css";
import Link from 'next/link';
import Image from 'next/image';

// Sub components ------------------------------------------------------------------------------------------------------------------------------------------------
const HeroCopy:React.FC = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-8 -translate-y-[50px] sm:-translate-y-[100px]">
      <h1 className='font-title text-3xl sm:text-5xl xl:text-6xl font-bold'>
        Pronto a entrare nel mondo del lavoro?
      </h1>

      <p className='text-xl sm:text-2xl max-w-[550px]'>
        Ti orientiamo a scoprire il tuo potenziale e a riconoscere il tuo talento professionale.
      </p>

      <div className="buttons-group flex flex-col items-start sm:flex-row sm:items-center gap-2">
        <Link
          className='btn-fill--white text-lg sm:text-xl'
          href="/register"
        >
          Iscriviti ora
        </Link>
        <Link
          className='btn-outline--white text-lg sm:text-xl'
          href="/login"
        >
          Accedi al profilo
        </Link>
      </div>
    </div>
  )
}

const HeroThumb:React.FC = () => {
  return (
    <div className="absolute -bottom-4 sm:-bottom-8 md:-bottom-2 max-w-lg xl:max-w-none xl:bottom-8 2xl:bottom-16">
      <Image
        width="1000"
        height="515"
        src="/homepage/hero-thumbnail.png"
        alt="Anapia Orienta Thumbnail"
        // className='w-full'
      />
    </div>
  )
}


// Main components ------------------------------------------------------------------------------------------------------------------------------------------------
const Hero:React.FC = () => {
  return (
    <section className={`${heroStyles.hero} p-4 h-[750px] sm:h-[850px] text-white flex`}>
      <div style={{ paddingTop: 100 }} className='container mx-auto p-0 sm:p-4'>
        <div className="relative grid grid-cols-1 xl:grid-cols-2 h-full">
          <div className="col-span-1 flex items-center justify-center h-full">
            <HeroCopy />
          </div>

          <div className="col-span-1 flex flex-col items-center">
            <HeroThumb />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
