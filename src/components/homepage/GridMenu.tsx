import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function GridMenu() {
  return (
    <section className='relative z-10 text-center -translate-y-[50px]'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-2 sm:gap-4 justify-center items-center mb-16 p-2'>
          <h2 className={`font-title text-3xl sm:text-5xl xl:text-6xl font-bold`}>
            Cosa possiamo fare per te?
          </h2>
          <p className='text-lg sm:text-xl'>Anapia Orienta mette a disposizione 3 strumenti per orientarti nel mondo del lavoro</p>
          <Link href="/register" className='btn-fill mt-4 text-white px-4 py-2 text-xl'>
            Inizia ora il tuo orientamento
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-8 max-w-screen-lg mx-auto text-dark">
          <div className='col-span-1 row-span-2 flex flex-col items-center content-star'>

            <Link href="/test-di-orientamento-delle-soft-skill" className='flex flex-col-reverse items-center md:flex-row-reverse lg:flex-col bg-light rounded-3xl py-6 px-12 lg:p-12'>
              <div className='text-center mt-4 md:mt-0 md:text-left lg:text-center ml-0 md:ml-8 lg:ml-0 items-center'>
                <h3 className='mb-0 mt-4 md:mt-0 lg:mb-12 font-title text-3xl font-bold '>
                  Test di orientamento delle Soft Skill
                </h3>
                <span className='text-primary mt-2 inline-block lg:hidden'>Scopri di più</span>
              </div>
              
              <div className="max-w-[286px] mx-auto lg:max-w-none">
                <Image
                  width="385"
                  height="395"
                  src="/homepage/orientamento-soft-skill.svg"
                  alt="Vai a Orientamento Soft Skill"
                />
              </div>
            </Link>

          </div>

          <Link href="/assessment-individuale" className="col-span-1 row-span-1 rounded-3xl text-center md:text-left justify-center bg-light py-6 px-12">
            <div className="flex flex-col items-center md:flex-row lg:flex-col lg:items-start">
              <Image
                width="286"
                height="210"
                src="/homepage/assessment-individuale.svg"
                alt="Vai a Assessment individuale"
              />
              <div className='flex flex-col justify-center ml-0 md:ml-8 lg:ml-0 w-full text-left'>
                <h3 className="font-title text-3xl font-bold  mt-8 md:mt-0 lg:mt-8 md:text-left">
                  Assessment individuale
                </h3>
                <span className='text-primary mt-2 inline-block'>Scopri di più</span>
              </div>
            </div>
          </Link>

          <Link href="/preparazione-al-colloquio-di-selezione" className="relative h-full col-span-1 row-span-1 rounded-3xl text-left justify-center bg-light py-6 px-12">
            <div className="flex flex-col items-center md:flex-row lg:flex-col lg:items-start">
              <Image
                width="286"
                height="210"
                src="/homepage/preparazione-colloquio-di-selezione.svg"
                alt="Vai a Preparazione colloquio di selezione"
              />
              <div className='flex flex-col justify-center  ml-0 md:ml-8 lg:ml-0'>
                <h3 className='mt-8 font-title text-3xl font-bold '>Preparazione al colloquio di selezione</h3>
                <span className='text-primary mt-2 inline-block'>Scopri di più</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default GridMenu
