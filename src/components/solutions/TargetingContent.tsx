import { FadeInOnScroll } from "../ui/FadeInOnScroll";
import Container from "../Container";
import { Check } from "lucide-react";

const Points = [
  "Stopping Stolen Credentials",
  "Stopping Social Engineering and AI Deepfakes",
  "Protecting Documents with Highly Restrictive Access Controls",
];

export default function PioneeringContent() {
  return (
    <FadeInOnScroll className="md:pb-12 pb-6">
      <Container className="max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl md:text-5xl font-bold text-navy-primary mb-2 leading-tight text-shadow-sm">
              Targeting the Highest Priority Identity Challenges
            </h1>
          </div>
          <div className="flex flex-col items-start justify-center">
            <div className="flex flex-col gap-4 md:gap-5">
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
                  <h1 className="text-md md:text-lg text-navy-primary text-left">
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
