import Container from '@/components/Container';
import ComingSoon from '@/components/ComingSoon';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products',
  description:
    "Explore iVALT's identity verification products including DocuID, On-Demand ID, and Human-Bound Authority solutions for enterprise security.",
  alternates: {
    canonical: '/products',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Products() {
  return (
    <Container className="bg-[#FAF9F7] py-16">
      <ComingSoon
        title="Products"
        subtitle="Next-gen security is almost here"
        launchDate={new Date('2024-06-01')}
      />
    </Container>
  );
}
