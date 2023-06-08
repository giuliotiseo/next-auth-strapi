import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const dataGrid = [
  "Competenze comunicative e relazionali",
  "Capacità di gestire lo stress",
  "Capacità di lavorare in team",
  "Gestione degli imprevisti",
  "Propensione alla leadership",
  "Competenze di decision making",
  "Capacità di analisi e problem solving",
  "Potenzialità di apprendimento e sviluppo delle competenze"
]

const IndividualAssessment:FC<{}> = () => {
  return (
    <section className="px-4 md:px-0">
      <div className="container mx-auto text-center max-w-screen-lg">
        <div className="space-y-4">
          <h4 className="text-primary uppercase text-sm font-bold font-title">Assessment individuale</h4>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-title">Valutiamo il tuo potenziale e progettiamo un percorso formativo adeguato</h3>
          <p className="text-base sm:text-xl font-sans">Personalizza i tuoi obiettivi formativi in base alle tue esigenze</p>
        </div>

        <div className="max-w-[960px] mx-auto translate-y-0 sm:-translate-y-4 mb-8">
          <Image width="960" height="960" src="/homepage/assessment-illustration.svg" alt="Assessment individuale" />
        </div>

        <p className="text-lg font-bold uppercase text-center">Cosa valutiamo?</p>
        <div className="grid grid-cols-2 md:grid-cols-4 text-left my-10">
          { dataGrid.map((element, index) => (
            <div key={element} className={`col-span-1 ${index < 4 && 'border-b border-b-[#E6E6E6]'} ${(index + 1) % 4 !== 0 && 'border-r border-r-[#E6E6E6]'} p-8`}>
              { element }
            </div>
          ))}
        </div>

        <Link href="/login" className="btn-outline--primary inline-block text-lg hover:bg-lightBlue transition-all">
          Accedi al tuo account e richiedi un appuntamento
        </Link>

      </div>
    </section>
  )
}

export default IndividualAssessment;