import { Bot, Monitor, Shield, User } from "lucide-react";
import Container from "../Container";
import SectionTitle from "../SectionTitle";
import { FadeInOnScroll } from "../ui/FadeInOnScroll";
import Image from "next/image";
import factorsOfIdentity from "@/assets/images/why-ivalt/Factors-of-Identity.png";
const Factors = [
  { content: "Humans", icon: <User className="w-6 h-6" /> },
  { content: "AI Agents", icon: <Bot className="w-6 h-6" /> },
  { content: "IOT Devices", icon: <Monitor className="w-6 h-6" /> },
  {
    content: "The Game Changing Approach to Security",
    icon: <Shield className="w-6 h-6" />,
  },
];

export default function FactorsOfIdentity() {
  return (
    <FadeInOnScroll className="md:py-12 py-6 bg-white">
      <Container className="max-w-7xl">
        <SectionTitle
          title="5+ Factors of Identity for Everything"
          description=""
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:mt-12 mt-6  mx-auto">
          {Factors.map((factor, index) => (
            <FadeInOnScroll
              delay={index * 2}
              key={index}
              className="inline-flex items-center justify-start gap-4 mb-2 text-left"
            >
              <div className="flex items-center justify-center bg-[#F5F5F5] rounded-full p-2 w-12 h-12 md:w-14 md:h-14 text-navy-primary text-2xl">
                {factor.icon}
              </div>
              <h1 className="md:text-lg text-base text-navy-primary text-left">
                {factor.content}
              </h1>
            </FadeInOnScroll>
          ))}
        </div>

        <div className="mt-12 flex justify-center items-center">
          <Image
            src={factorsOfIdentity}
            alt="Factors of Identity"
            width={1000}
            height={1000}
            className="w-full md:w-[80%] h-full object-cover md:ml-10 ml-0"
          />
        </div>
      </Container>
    </FadeInOnScroll>
  );
}
