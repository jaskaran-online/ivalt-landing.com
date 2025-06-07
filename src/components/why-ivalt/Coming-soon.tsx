import { FadeInOnScroll } from "../ui/FadeInOnScroll";
import Container from "../Container";
import { Check } from "lucide-react";
import SectionTitle from "../SectionTitle";

const Points = [
  "AI Agent Customizable and Dynamic Identities",
  "Embedded IOT Identities Securing Advanced Devices",
  "Electronic Locks Managed Centrally and Opened by   1-Click to Verify 5+ Factors of Identity",
  "Streaming Services and TV Applications Accessed through 1-Click Identity Verification",
  "Many Others Through Our Partnerships",
];

export default function ComingSoon() {
  return (
    <FadeInOnScroll className="py-4">
      <Container className="max-w-7xl">
        <SectionTitle
          title="Coming Soon"
          description="Solutions that Leverage Mobile-Centric Identity and iVALT’s IP."
        />
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-12">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col gap-5">
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
                  <h1 className="text-lg text-navy-primary text-left">
                    {point}
                  </h1>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </FadeInOnScroll>
  );
}
