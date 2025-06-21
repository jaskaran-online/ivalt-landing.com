import Container from "../Container";
import SectionTitle from "../SectionTitle";

import { FadeInOnScroll } from "../ui/FadeInOnScroll";
import Image from "next/image";

import BuildingBlocks from "@/assets/images/solutions/2.png";
export default function SolutionComponents() {
  return (
    <FadeInOnScroll className="py-12">
      <Container className="max-w-7xl">
        <SectionTitle
          title="Solution Components"
          description="Easy Deployments.  Fast User Onboarding.  User Management."
        />

        <div className="h-full w-full p-2 rounded-lg md:p-4 shadow-lg bg-white">
          <Image
            src={BuildingBlocks}
            alt="Building Blocks"
            className="w-full h-full object-contain"
          />
        </div>

        {/* 
        <div className="flex flex-col items-start justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-6xl mx-auto">
            {Points.map((point, index) => (
              <FadeInOnScroll
                delay={index * 2}
                key={index}
                className="inline-flex items-center justify-start gap-4 mb-2 text-left"
              >
                <div className="flex items-center justify-center bg-[#FAF9F7] rounded-full p-2 shadow-sm">
                  <Check
                    className="text-navy-primary w-6 h-6"
                    width={24}
                    height={24}
                  />
                </div>
                <h1 className="text-lg text-navy-primary text-left">{point}</h1>
              </FadeInOnScroll>
            ))}
          </div>
        </div> */}
      </Container>
    </FadeInOnScroll>
  );
}
