import React from 'react'
import Image from 'next/image'

const SoftSkillDescription:React.FC<{}> = () => {
  return (
    <section>
      <div className="container mx-auto px-8 md:px-0">
        <div className="flex flex-col text-left sm:text-center max-w-screen-lg mx-auto space-y-4">
          <p className="text-primary uppercase font-bold">Test di orientamento delle soft skill</p>
          <h2 className='text-4xl sm:text-5xl font-bold font-title'>Sai cosa sono le competenze trasversali?</h2>
          <p className='text-lg mt-4'>Chiamate comunemente soft skill, sono capacità comunicative e manageriali, di comunicazione e pianificazione, trasversali a tutte le professioni. Con Anapia Orienta puoi verificare le tue soft skill attraverso servizi web dedicati</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 gap-4">
          <div className="col-span-1 flex flex-row text-left sm:flex-col sm:text-center md:text-left md:flex-row font-bold gap-4 text-base md:text-lg lg:text-xl bg-light text-dark items-center rounded-xl p-5 md:p-10">
            <Image width="60" height="60" src="/homepage/soft-skill-svgs/orientamento-icon.svg" alt="Orientamento" />
            <span>Strumenti di orientamento</span>
          </div>

          <div className="col-span-1 flex flex-row text-left sm:flex-col sm:text-center md:text-left md:flex-row font-bold gap-4 text-base md:text-lg lg:text-xl bg-light text-dark items-center rounded-xl p-5 md:p-10">
            <Image width="60" height="60" src="/homepage/soft-skill-svgs/test-riconoscimento-indice-occupabilita-icon.svg" alt="Test di riconoscimento indice occupabilità" />
            <span>Test di riconoscimento indice di occupabilità</span>
          </div>

          <div className="col-span-1 flex flex-row text-left sm:flex-col sm:text-center md:text-left md:flex-row font-bold gap-4 text-base md:text-lg lg:text-xl bg-light text-dark items-center rounded-xl p-5 md:p-10">
            <Image width="60" height="60" src="/homepage/soft-skill-svgs/aggiornamento-possibile-carriera-icon.svg" alt="Aggiornamenti sulla possibile carriera" />
            <span>Aggiornamenti sulla possibile carriera</span>
          </div>

          <div className="col-span-1 flex flex-row text-left sm:flex-col sm:text-center md:text-left md:flex-row font-bold gap-4 text-base md:text-lg lg:text-xl bg-light text-dark items-center rounded-xl p-5 md:p-10">
            <Image width="60" height="60" src="/homepage/soft-skill-svgs/vetrina-corsi-di-formazione-adatti-a-te-icon.svg" alt="Vetrina di corsi di formazione adatti a te" />
            <span>Vetrina di corsi di formazione adatti a te</span>
          </div>

          <div className="col-span-1 flex flex-row text-left sm:flex-col sm:text-center md:text-left md:flex-row font-bold gap-4 text-base md:text-lg lg:text-xl bg-light text-dark items-center rounded-xl p-5 md:p-10">
            <Image width="60" height="60" src="/homepage/soft-skill-svgs/strumenti-di-accompagnamento-alla-didattica-icon.svg" alt="Strumenti di accompagnamento alla didattica" />
            <span>Strumenti di accompagnamento alla didattica</span>
          </div>
          
          <div className="col-span-1 flex flex-row text-left sm:flex-col sm:text-center md:text-left md:flex-row font-bold gap-4 text-base md:text-lg lg:text-xl bg-light text-dark items-center rounded-xl p-5 md:p-10">
            <Image width="60" height="60" src="/homepage/soft-skill-svgs/pillole-formative-novita-curiosita-dal-mondo-del-lavoro.svg" alt="Pillole formative, novità e curiosità dal mondo del lavoro" />
            <span>Pillole formative, novità e curiosità dal mondo del lavoro</span>
          </div>
        </div>
      </div> 
    </section>
  )
}

export default SoftSkillDescription
