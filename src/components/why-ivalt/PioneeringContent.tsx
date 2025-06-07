import { FadeInOnScroll } from "../ui/FadeInOnScroll";
import Container from "../Container";
import { Check } from "lucide-react";

const Points = [
  "Best Available Technologies Widely available at Any Point in Time",
  "A Platform Approach to Enable Customization for the Unique Needs of Customers",
  "Biometrics and Device ID PLUS Contextual Factors and Dynamic Variables to Enable Definitive Identity Anywhere and for Any Application",
  "Control of their Identity goes back into the Hands of Individuals",
  "A 1-Click User Experience for All Use Cases",
];

export default function PioneeringContent() {
  return (
    <FadeInOnScroll className="py-4">
      <Container className="max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold text-navy-primary mb-2 leading-tight text-shadow-sm">
              Pioneering the Future of Identity
            </h1>
            <p className="text-lg text-navy-primary">
              Understanding the needs of the market and creating solutions that
              are future-proof.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center">
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
