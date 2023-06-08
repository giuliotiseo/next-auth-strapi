import GridMenu from "@/components/homepage/GridMenu"
import Hero from "@/components/homepage/Hero"
import IndividualAssessment from "@/components/homepage/IndividualAssessment"
import InterviewPreparation from "@/components/homepage/InterviewPreparation"
import SoftSkillDescription from "@/components/homepage/SoftSkillDescription"
import SoftSkillSteps from "@/components/homepage/SoftSkillSteps"
import MainContent from "@/components/layout/MainContent"
import WaveDivider from "@/components/layout/WaveDivider"
import { Metadata } from "next"

// Meta ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
export const metadata:Metadata = {
  title: "Anapia Orienta - Homepage",
  description: "Anapia Orienta web app with Next.js Strapi Tailwind"
}

export default function Home() {
  return (
    <MainContent>
      <div className="relative z-0 w-full top-0 -translate-y-[100px]">
        <Hero />
        <div className='absolute w-full bottom-0'>
          <WaveDivider />
        </div>
      </div>

      <div className="mb-8">
        <GridMenu />
      </div>

      <div className="my-8">
        <SoftSkillDescription />
      </div>
      
      <div className="mt-12 md:mt-24 mb-8">
        <SoftSkillSteps />
      </div>
      
      <div className="mt-32">
        <IndividualAssessment />
      </div>

      <div className="my-16 xl:mt-24 2xl:mt-48">
        <InterviewPreparation />
      </div>
    </MainContent>
  )
}
