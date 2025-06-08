import Container from "../Container";
import SectionTitle from "../SectionTitle";
import SectionTitleBottom from "../SectionTitleBottom";

import Image from "next/image";
import mobileCentric from "@/assets/images/home/mobile-centric-identity.png";
import { FadeInOnScroll } from "../ui/FadeInOnScroll";

export default function Universal() {
  return (
    <FadeInOnScroll className="bg-white md:py-12">
      <Container className="max-w-7xl">
        <SectionTitle
          title="Universal Biometric ID®"
          description="Anyone, Anywhere, at Any Time, for Any Application."
        />
        <div className="flex justify-center items-center my-4 mb-6">
          <Image
            src={mobileCentric}
            alt="Mobile-Centric"
            width={1500}
            height={1500}
            className="md:w-[70%] h-full object-cover mb-3"
          />
        </div>
        <SectionTitleBottom title="Definitive Mobile-Centric Identity for Everything" />
      </Container>
    </FadeInOnScroll>
  );
}
