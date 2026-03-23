import ComingSoon from '@/components/ComingSoon';
import Container from '@/components/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research',
  description:
    'iVALT research on identity verification, biometric security, and Zero Trust authentication. Explore our latest findings and innovations.',
  alternates: {
    canonical: '/research',
  },
};

export default function Research() {
  return (
    <Container className="bg-[#FAF9F7] py-16">
      <ComingSoon
        title="Research"
        subtitle="Next-gen security is almost here"
        launchDate={new Date('2024-06-01')}
      />
    </Container>
  );
}
