import Container from "../Container";
import SectionTitle from "../SectionTitle";

import Image from "next/image";
import contextID from "@/assets/images/solutions/3.png";
import { FadeInOnScroll } from "../ui/FadeInOnScroll";
import { Check } from "lucide-react";

const Points = [
  "Mobile-Centric",
  "Mandated Biometrics",
  "5+ Factors",
  "Customizable",
  "Risk and AI-Driven",
  "Can Streamline IAM (RBAC and ABAC)",
];

export default function ContextID() {
  return (
    <FadeInOnScroll className="bg-[#FAF9F7] py-6 md:py-12">
      <Container className="max-w-7xl">
        <SectionTitle
          title="ContextID"
          description="Strongest Enterprise Identity Protection"
        />
        <div className="flex justify-center items-center my-4 mb-6 relative">
          <Image
            src={contextID}
            alt="ContextID"
            width={1500}
            height={1500}
            className="w-full h-full object-cover mb-3"
          />
          <div className="flex flex-col items-start justify-center absolute -bottom-30 left-30">
            {Points.map((point, index) => (
              <div
                key={index}
                className="flex rounded-full items-center gap-2 p-2 w-full"
              >
                <div className="flex items-center justify-center bg-[#FAF9F7] rounded-full p-2 shadow-sm">
                  <Check
                    className="text-navy-primary w-4 h-4"
                    width={24}
                    height={24}
                  />
                </div>
                <h1 className="text-base md:text-sm text-navy-primary text-left">
                  {point}
                </h1>
              </div>
            ))}
          </div>

          <div className="absolute bottom-10 right-0">
            <h1 className="text-base font-semibold text-navy-primary text-left max-w-md">
              Plus new services like DocuID™ and Others integrated with iVALT
            </h1>
          </div>

          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
            <h1 className="text-lg font-semibold text-navy-primary text-left max-w-md">
              Universal Authenticator
            </h1>
          </div>
        </div>
      </Container>
    </FadeInOnScroll>
  );
}
