
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { BodyText, Heading2 } from "@/components/ui/typography";

import Image, { StaticImageData } from "next/image";
import Baldev from "@/assets/images/about/baldev.png";
import Brian from "@/assets/images/about/Brian.png";
import LinkedIn from "@/assets/linkedin.png";

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
    description: `2X Nominated for "Entrepreneur of the Year" in Silicon Valley, 20 patents`,
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
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 relative">
      <div className="p-6 min-h-[380px]">
        <div className="flex flex-col items-center sm:items-start gap-6">
          <div className="flex justify-center  w-full">
            <div className="relative  w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-100">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-1">
              {founder.name}
            </h3>
            <p className="text-emerald-600 font-medium mb-3">{founder.title}</p>
            <p className="text-gray-600 mb-4">{founder.description}</p>
            <div className="flex justify-center sm:justify-start space-x-3">
              {founder.awards.map((award) => (
                <div
                  key={award}
                  className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-800"
                >
                  {award}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-3 rounded-b-xl absolute bottom-0 left-0 right-0 flex justify-center">
          <a
            href={founder.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-full"
          >
            <Image src={LinkedIn} alt="LinkedIn" width={28} height={28} />
            <span className="text-sm">View LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <Container className="bg-[#FAF9F7] py-16">
      <SectionTitle
        title="Our Mission"
        description="To eliminate identity fraud by providing seamless, one-click authentication that dynamically verifies user and contextual variables, ensuring unparalleled security and user convenience."
      />

      <div className="flex flex-col gap-4 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 text-center">
          <Heading2 color="navy-primary" className="text-2xl">
            Founders
          </Heading2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            {founders.map((founder) => (
              <Founder key={founder.name} founder={founder} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <BodyText className="text-navy-primary">
              Founded in 2019 by Baldev Krishan and Brian Stout, iVALT®
              addresses the persistent issue of identity fraud by moving beyond
              outdated username/password authentication and ineffective 2FA.
              Recognizing that technology alone isn&apos;t the solution, they
              developed a mobile app that captures and verifies 5+ dynamic
              variables, including biometrics, location, and time, in a single
              click. This innovative approach, combining a mobile app with a
              secure SaaS engine, aims to provide technology efficiency and the
              highest level of security against evolving hacking techniques.
            </BodyText>
          </div>
        </div>
      </div>
    </Container>
  );
}