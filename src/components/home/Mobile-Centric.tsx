import Container from "../Container";
import SectionTitle from "../SectionTitle";
import SectionTitleBottom from "../SectionTitleBottom";

import Image from "next/image";
import mobileCentric from "@/assets/images/home/mobile-centric-identity.png";

export default function MobileCentric() {
  return (
    <div className="bg-white py-12">
      <Container>
        <SectionTitle
          title="Mobile-Centric Approach"
          description="Taking advantage of everyone’s mobile phone for real-time identity verification."
        />
        <div className="flex justify-center items-center">
            <Image src={mobileCentric} alt="Mobile-Centric" width={1500} height={1500} className="w-[80%] h-full object-cover" />
        </div>
            <SectionTitleBottom
              title="Disrupting the Broken Status Quo of Usernames and Passwords"
            />
      </Container>
    </div>
  );
}