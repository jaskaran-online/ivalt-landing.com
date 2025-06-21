import Container from "../Container";
import SectionTitle from "../SectionTitle";

import Image from "next/image";
import dataSecurity from "@/assets/images/solutions/4.png";
import { FadeInOnScroll } from "../ui/FadeInOnScroll";

export default function DataSecurity() {
  return (
    <FadeInOnScroll className="bg-white py-6 md:py-12">
      <Container className="max-w-7xl">
        <SectionTitle
          title="Comprehensive Data Security"
          description="Access control + Encryption + Identity for every file"
        />
        <div className="flex justify-center items-center my-4 mb-6">
          <Image
            src={dataSecurity}
            alt="Data Security"
            width={1500}
            height={1500}
            className="w-full h-full object-cover mb-3"
          />
        </div>
      </Container>
    </FadeInOnScroll>
  );
}
