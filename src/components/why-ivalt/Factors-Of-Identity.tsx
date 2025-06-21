import { Check, CompassIcon, HandIcon, Shield } from "lucide-react";
import Container from "../Container";
import SectionTitle from "../SectionTitle";
import { FadeInOnScroll } from "../ui/FadeInOnScroll";
import Image from "next/image";
import mobileCentric from "@/assets/images/home/mobile-centric-identity.png";
const Factors = [
  {
    content: "Up to 25+ Factors",
    icon: (
      <span className="text-primary font-regular border rounded-full p-2 w-10 h-10 text-[14px] flex items-center justify-center">
        25+
      </span>
    ),
  },
  { content: "1-Click UX", icon: <HandIcon className="w-6 h-6" /> },
  { content: "Backward Compatible", icon: <CompassIcon className="w-6 h-6" /> },
  {
    content: "The Game Changing Approach to Security",
    icon: <Shield className="w-6 h-6" />,
  },
];

const Points = [
  "Stolen Credentials become worthless",
  "Fake communication are stopped",
  "User Can Control their Context to Set Geofencing and Time Factors",
];

const SidePoints = [
  "Enterprise Apps",
  "IAM (CIBA)",
  "Physical Access",
  "In-Person ID",
  "Communications",
  "Documents Control",
  "Many Others",
];

export default function FactorsOfIdentity() {
  return (
    <FadeInOnScroll className="md:py-12 py-6 bg-white">
      <Container className="max-w-7xl">
        <SectionTitle
          title="Our Approach is “Next Generation MFA” without Credentials"
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

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <Image
              src={mobileCentric}
              alt="Mobile-Centric"
              width={1500}
              height={1500}
              className="md:w-full h-full object-cover mb-3"
            />
            <div>
              <div className="flex flex-col gap-2 md:gap-4">
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
                    <h1 className="md:text-lg text-base text-primary text-left">
                      {point}
                    </h1>
                  </FadeInOnScroll>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 px-24">
            <h1 className="md:text-4xl text-2xl font-bold text-primary mb-2 leading-tight text-shadow-sm text-center">
              Definitive Identity Verification
            </h1>
            <div className="flex flex-col gap-2 md:gap-4 ">
              {SidePoints.map((point, index) => (
                <FadeInOnScroll
                  delay={index * 2}
                  key={index}
                  className="inline-flex items-center justify-start gap-4 mb-2 text-left"
                >
                  <div className="flex items-center justify-center bg-white rounded-full p-1 shadow-sm">
                    <Check
                      className="text-navy-primary w-6 h-6"
                      width={20}
                      height={20}
                    />
                  </div>
                  <h1 className="md:text-lg text-base text-primary text-left">
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
