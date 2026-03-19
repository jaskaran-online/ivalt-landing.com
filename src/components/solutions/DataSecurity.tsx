import Container from '../Container';
import SectionTitle from '../SectionTitle';

import Image from 'next/image';
import dataSecurity from '@/assets/images/solutions/4.png';
import { FadeInOnScroll } from '../ui/FadeInOnScroll';
import cloudimage from '@/assets/images/solutions/cloud.png';

export default function DataSecurity() {
  return (
    <FadeInOnScroll className="bg-white mt-4 py-6 md:py-12">
      <Container className="max-w-7xl">
        <SectionTitle
          title="Stop Data Exfiltration"
          description="Generative AI and DocuID® Data File Security"
        />
        <div className="flex justify-center items-center my-4 mb-6">
          <Image
            src={cloudimage}
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
