"use client";
import { FC } from "react";
import Scrollbar from "../layout/Scrollbar";
import { TbChevronRight } from "react-icons/tb";
import { MdSkipNext, MdOutlineQuestionAnswer, MdAccessTime } from "react-icons/md";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from 'react-chartjs-2';
import Image from "next/image";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: 'Numero Voti',
      data: [ 10, 8, 9 ],
      backgroundColor: [ '#00317F', '#0D66C4', '#459AFF' ],
      borderColor: [ '#002766', '#0A5099', '#3372BD' ],
      borderWidth: 1,
    },
  ],
  labels: ['Spesso', 'Qualche volta', 'Raramente' ],
  legend: {
    display: false,
    position: "bottom"
  }
};


// Sub component ------------------------------------------------------------------------------------------------------------------------------------------------------------
const SoftSkillSamples: FC<{}> = () => {
  return (
    <div className="flex flex-col-reverse px-4 md:px-0 gap-8 sm:gap-16 lg:gap-0 lg:flex-row gap-x-8 items-center">
      <div className="relative flex-1 max-w-none w-full lg:max-w-[420px] primaryGradient text-white rounded-2xl pt-8 pb-8 pl-4 pr-2 shadow-2xl">
        <h4 className="text-3xl font-bold font-title mb-6">Il tuo test</h4>
        <div className="hidden lg:block absolute right-0 top-0 translate-x-1/2 -translate-y-1/2">
          <Image width="80" height="80" src="/homepage/soft-skill-steps-icons/question-circle.svg" alt="Test di riconoscimento indice occupabilità" />
        </div>

        <div className="relative h-[345px]">
          <div className="absolute h-full w-full">
            <Scrollbar>
              <ul>
                <li className="p-6 bg-white bg-opacity-10 rounded-2xl flex mb-4 mr-4">
                  <span className="text-lg font-bold inline-block mr-2">1.</span>
                  <p>Non mi crea alcun problema il fatto che i compiti o le priorità possano cambiare con rapidità.</p>
                  <TbChevronRight className="text-2xl w-20 self-center" /> 
                </li>
                <li className="p-6 bg-white bg-opacity-10 rounded-2xl flex mb-4 mr-4">
                  <span className="text-lg font-bold inline-block mr-2">2.</span>
                  <p>Mi assumo la responsabilità delle decisioni prese, anche quando hanno un risultato negativo.</p>
                  <TbChevronRight className="text-2xl w-20 self-center" />
                </li>
                <li className="p-6 bg-white bg-opacity-10 rounded-2xl flex mb-4 mr-4">
                  <span className="text-lg font-bold inline-block mr-2">3.</span>
                  <p>Quando esprimo le mie idee, lo faccio in modo chiaro e preciso, trasmettendo sicurezza..</p>
                  <TbChevronRight className="text-2xl w-20 self-center" />
                </li>
                <li className="font-bold p-6 bg-white bg-opacity-10 text-secondary rounded-2xl flex mb-4 mr-4">
                  + di 20 domande
                </li>
              </ul>
            </Scrollbar>
          </div>
        </div>
      </div>

      <div className="relative flex flex-1 flex-col gap-2 px-0 lg:px-8">
        <p className="text-primary font-bold text-sm uppercase">Step 1</p>
        <h3 className="font-title text-3xl font-bold">Test di autovalutazione delle soft skill</h3>
        <p className="text-base sm:text-lg">
          All’interno del test leggerai affermazioni riguardanti alcuni comportamenti e ti verrà richiesto di indicare con quale frequenza li adotti. Potrai ripetere il test dopo 30 giorni per valutare quanto sono migliorate le tue competenze trasversali
        </p>

        <div className="flex items-center font-bold space-x-4 uppercase text-gray-400 mt-4">
          <div className="flex items-center gap-2 text-xs md:text-sm">
            <MdSkipNext />
            <span>3 parti</span>
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm">
            <MdOutlineQuestionAnswer />
            <span>
              30 domande
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm">
            <MdAccessTime />
            <span>10 minuti</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const SoftSkillReport: FC<{}> = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-x-8 items-center">
      <div className="relative flex flex-1 flex-col gap-2 pl-0 md:pl-8">
        <h3 className="font-title text-3xl font-bold mt-8 lg:mt-0">Report autovalutazione soft-skill</h3>
        <p className="text-lg mt-2">
          Terminato il test ti verrà rilasciata la scheda di sintesi con i dettagli delle risposte fornite. Potrai ripetere il test dopo 30 giorni per valutare quanto sono migliorate le tue competenze trasversali.
        </p>
      </div>


      <div className="relative flex-1 w-full max-w-none lg:max-w-[420px] bg-light text-dark rounded-2xl pt-8 pb-8 pl-4 pr-2 shadow-2xl" style={{ border: '1px solid #ebebeb' }}>
        <h4 className="text-base text-center mx-auto inline-blocl text-primary uppercase font-bold font-title mb-6">Report</h4>
        <h5 className="text-2xl font-bold text-center font-title">
          Riepilogo autovalutazione
        </h5>

        <div className="absolute hidden sm:block right-0 top-0 translate-x-1/2 -translate-y-1/2">
         <Image width="80" height="80" src="/homepage/soft-skill-steps-icons/chart-circle.svg" alt="Test di riconoscimento indice occupabilità" />
        </div>
        
        <div className="relative mt-4">
          <div className="relative max-w-[320px] mx-auto">
            <Pie data={data} />
          </div>

          <p className="text-center font-bold mt-8 text-gray-500">27 risposte</p>
        </div>

        <div className="absolute -z-10 top-12 -left-20 hidden md:block">
          <Image width="500" height="500" src="/homepage/soft-skill-steps-icons/white-linear-ellipse.svg" alt="Test di riconoscimento indice occupabilità" />
        </div>

      </div>
    </div>
  )
}

const SecondTestDescription: FC<{}> = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1 flex flex-col gap-4 items-start px-5 md:px-10 lg:pr-20">
          <div>
            <p className='uppercase text-sm font-bold text-primary'>Step 2</p>
            <h3 className='text-4xl font-bold'>Test sul tuo indice di occupabilità</h3>
          </div>

          <p className='text-lg lg:text-xl'>Compilando il questionario sarai in grado di definire il tuo livello di occupabilità ed avrai una indicazione generale sulla tua collocazione nel contesto lavorativo più vicino a te</p>
          {/* <Link href="/login" className="btn-outline--primary inline-block text-lg">Scopri di più</Link> */}
        </div>
        
        <div className="col-span-1 flex justify-center">
          <div className="w-full hidden md:block max-w-[600px] mx-auto">
            <Image width="600" height="600" src="/homepage/soft-skill-steps-icons/processo-test-occupabilita.svg" alt="Processo test indice di occupabilità" />
          </div>

          <div className="w-full block md:hidden text-center mx-8 mt-12">
            <Image width="300" height="300" src="/homepage/soft-skill-steps-icons/processo-test-occupabilita-mobile.svg" alt="Processo test indice di occupabilità" />
          </div>
        </div>
      </div>
    </div>
  )
}

// Main component ------------------------------------------------------------------------------------------------------------------------------------------------------------
const SoftSkillSteps: FC<{}> = () => {
  return (
    <section className="px-4 md:px-0">
      <div className="relative container mx-auto mb-12 sm:mb-24 lg:mb-44">
        <div className="bg-light absolute w-full h-3/4 my-20 rounded-3xl z-0 hidden md:block"></div>
        
        <div className="relative container mx-auto max-w-screen-lg z-20">
          <SoftSkillSamples />
        </div>

        <div className="absolute top-3/4 right-1/2 translate-x-1/2 -z-10 hidden md:block">
          {/* <ArrowStep1Desktop /> */}
        </div>
      </div>
      
      <div className="relative container mx-auto text-light w-full">
        <div className="-bottom-8 lg:bottom-auto primaryGradient absolute w-full max-w-none lg:max-w-[95%] mx-auto h-3/4 mt-20 rounded-3xl z-0"></div>
        
        <div className="relative container mx-auto max-w-screen-lg z-20 text-light px-8">
          <SoftSkillReport />
        </div>

        <div className="absolute top-3/4 left-12 -z-10 -scale-x-100 hidden md:block">
          {/* <ArrowStep1Desktop /> */}
        </div>
      </div>


      <div className="mx-auto container mt-24 sm:mt-32">
        <SecondTestDescription />
      </div>
    </section>
  )
}

export default SoftSkillSteps;