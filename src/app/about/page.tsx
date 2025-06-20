import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { BodyText, Heading2 } from "@/components/ui/typography";
import IntellectualProperty from "@/components/IntellectualProperty";

import Image, { StaticImageData } from "next/image";
import Baldev from "@/assets/images/about/baldev.png";
import Brian from "@/assets/images/about/Brian.png";
import LinkedIn from "@/assets/linkedin.png";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";

type Founder = {
  name: string;
  image: StaticImageData;
  title: string;
  description: string;
  awards: string[];
  linkedin: string;
};

const founders: Founder[] = [
  {
    name: "Baldev Krishan, Ph.D.",
    image: Baldev,
    title: "Founder and CEO",
    description: `2X Nominated for "Entrepreneur of the Year" in Silicon Valley, 2 patents`,
    awards: ["Visionary", "Innovator"],
    linkedin: "https://www.linkedin.com/in/baldev-krishan-1ab14b9/",
  },
  {
    name: "Brian Stout",
    image: Brian,
    title: "Co-Founder and CPO",
    description: "25+ years CXO Mobile, Internet, SaaS – Startups through Exit",
    awards: ["Strategist", "Product Expert"],
    linkedin: "https://www.linkedin.com/in/baldev-krishan-1ab14b9/",
  },
];

const Founder = ({ founder }: { founder: Founder }) => {
  return (
    <div className="bg-white rounded-md overflow-hidden border-4 border-gray-100 relative h-full">
      <div className="p-6 pb-20">
        <div className="flex flex-col items-center gap-6">
          {/* Profile Image */}
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-teal-primary/20">
            <Image
              src={founder.image}
              alt={founder.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-navy-primary mb-2">
              {founder.name}
            </h3>
            <p className="text-teal-primary font-semibold mb-3">
              {founder.title}
            </p>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              {founder.description}
            </p>

            {/* Awards */}
            <div className="flex justify-center gap-2 mb-4">
              {founder.awards.map((award) => (
                <div
                  key={award}
                  className="px-3 py-1 bg-teal-primary/10 text-teal-primary rounded-full text-xs font-medium"
                >
                  {award}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* LinkedIn Footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-50 p-4 border-t border-gray-100">
        <a
          href={founder.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 p-2 rounded-lg transition-colors"
        >
          <Image src={LinkedIn} alt="LinkedIn" width={20} height={20} />
          <span className="text-sm text-gray-600">LinkedIn Profile</span>
        </a>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <>
      <Container className="bg-[#FAF9F7] py-16">
        <SectionTitle
          title="Our Mission"
          description="To eliminate identity fraud by providing seamless, one-click authentication that dynamically verifies user and contextual variables, ensuring unparalleled security and user convenience."
        />

        <div className="max-w-7xl mx-auto mt-16 py-16">
          {/* Founders Section Title */}
          <div className="text-center mb-12">
            <Heading2 color="dark-navy" className="text-3xl mb-4">
              Founders
            </Heading2>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            {/* Founders Cards */}
            <div className="lg:col-span-1">
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                {founders.map((founder, index) => (
                  <FadeInOnScroll key={founder.name} delay={index * 0.1}>
                    <Founder key={founder.name} founder={founder} />
                  </FadeInOnScroll>
                ))}
              </div>
            </div>

            {/* Company Description */}
            <FadeInOnScroll delay={1} className="lg:col-span-1">
              <div className="bg-white rounded-md p-8 border-4 border-gray-100 h-full">
                <Heading2 color="teal-primary" className="text-xl mb-6">
                  Our Story
                </Heading2>
                <BodyText className="text-gray-700 leading-relaxed">
                  Founded in 2019 by Baldev Krishan and Brian Stout, iVALT®
                  addresses the persistent issue of identity fraud by moving
                  beyond outdated username/password authentication and
                  ineffective 2FA.
                </BodyText>
                <BodyText className="text-gray-700 leading-relaxed mt-4">
                  Recognizing that technology alone isn&apos;t the solution,
                  they developed a mobile app that captures and verifies 5+
                  dynamic variables, including biometrics, location, and time,
                  in a single click.
                </BodyText>
                <BodyText className="text-gray-700 leading-relaxed mt-4">
                  This innovative approach, combining a mobile app with a secure
                  SaaS engine, aims to provide technology efficiency and the
                  highest level of security against evolving hacking techniques.
                </BodyText>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
        {/* Intellectual Property Section */}
        <IntellectualProperty />
      </Container>
    </>
  );
}
