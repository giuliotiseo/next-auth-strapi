"use client";
import { useState, FC, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import InputEmail from "../form/InputEmail";
import { InputDrop } from "../form/InputDrop";
import InputCheckbox from "../form/InputCheckbox";
import { Anchor } from "@mantine/core";

const HEADING = {
  subtitle: 'Devi sostenere un colloquio di lavoro?',
  title: 'Prepariamoci insieme!',
  description: 'La preparazione al colloquio è il servizio voluto da Anapia per dare risposte concrete alle persone in cerca di occupazione'
}

const InterviewPreparation:FC<{}> = () => {
  const [ email, setEmail ] = useState<string>('');
  const [ terms, setTerms ] = useState<boolean>(false);

  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault;
  }

  return (
    <section>
      <div className="relative container mx-auto">
        <div className="absolute bottom-0 left-0 -z-10 w-full">
          <Image width="1200" height="1200" src="/homepage/preparazione-colloquio.svg" alt="Preparazione del colloquio" />
        </div>
        <div className="ml-auto max-w-[720px] rounded-none md:rounded-3xl primaryGradient p-6 sm:p-12 pb-16 text-left sm:text-center">
          <div className="space-y-4 text-white font-title flex flex-col items-start sm:items-center justify-center">
            <Image
              width="122"
              height="125"
              src="/homepage/preparazione-colloquio-foto-cerchio.png"
              alt="Preparati il tuo prossimo colloquio di lavoro con Anapia Orienta"
            />

            <p className="text-base sm:text-lg uppercase font-bold tracking-wide">{ HEADING.subtitle }</p>
            <h3 className="text-4xl sm:text-5xl uppercase font-bold">{ HEADING.title }</h3>
            <p className="font-sans text-lg sm:text-xl">{ HEADING.description }</p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-[400px] mx-auto mt-8 text-left">
            <div className="text-white">
              <InputEmail value={email} setValue={setEmail} withAsterisk={true} />
            </div>

            <InputDrop className="bg-transparent mt-4 text-white hover:bg-lightBlue hover:bg-opacity-5 border-4 text-center transition-all"/>

            <InputCheckbox
              checked={terms}
              onChange={setTerms}
              className="mt-4 cursor-pointer"
              label={<div className="text-white text-base">Accetto <Anchor className="text-secondary" href="/privacy-and-cookie-policy" target="_blank"> termini e condizioni</Anchor></div>}
            />

            <button className="block w-full p-2 uppercase font-title text-white text-center text-lg mt-8 border-4 tracking-wide bg-transparent outline-none font-bold rounded-full hover:text-secondary hover:border-secondary transition-all">
              Inviaci il tuo CV
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default InterviewPreparation;