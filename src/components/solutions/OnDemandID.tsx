import Container from "../Container";
import SectionTitle from "../SectionTitle";

import Image from "next/image";
import ondemandidLogo from "@/assets/images/home/ondemandid.png";
import { FadeInOnScroll } from "../ui/FadeInOnScroll";
import { Check } from "lucide-react";

const Points = [
  "Real-Time Customer Identity",
  "Proactive Agent Identity",
  "Stops Social Engineering & Deepfakes",
  "Highly Secure Account Access",
];

export default function OnDemandID() {
  return (
    <FadeInOnScroll className="bg-[#FAF9F7] py-12">
      <Container className="max-w-7xl">
        <SectionTitle
          title="On-Demand ID™"
          description="Real-Time Identity for All Communications."
        />
        <div className="flex justify-center items-center md:my-4 mb-6">
          <Image
            src={ondemandidLogo}
            alt="On-Demand ID"
            width={1500}
            height={1500}
            className="w-full md:w-[70%] h-full object-cover mb-3"
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 mt-4 md:mt-12 max-w-4xl mx-auto">
            {Points.map((point, index) => (
              <FadeInOnScroll
                delay={index * 2}
                key={index}
                className="inline-flex items-center justify-start gap-4 mb-2 text-left"
              >
                <div className="flex items-center justify-center bg-white rounded-full p-2 shadow-sm">
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
        </div>
      </Container>
    </FadeInOnScroll>
  );
}
