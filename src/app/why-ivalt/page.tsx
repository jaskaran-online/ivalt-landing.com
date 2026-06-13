import Container from '@/components/Container';
import EasyOverlayImplementation from '@/components/home/EasyOverlayImplementation';
import SectionTitle from '@/components/SectionTitle';
import { Metadata } from 'next';
import SimpleUserExperience from '@/components/why-ivalt/SimpleUserExperience';
import TheConvergenceofAI from '@/components/why-ivalt/TheConvergenceofAI';
import {
  // ComingSoon,
  // FactorsOfIdentity,
  PartnershipBenefits,
  PioneeringContent,
} from '@/components/why-ivalt';
import GovernanceIdentity from '@/components/why-ivalt/GovernanceIdentity';
import HumanAutSecurity from '@/components/why-ivalt/HumanAutSecurity';
import { PatentCapabilities } from '@/components/why-ivalt/Patent-Capabilities';
import { UniqeBenifits } from '@/components/why-ivalt/Uniqe-Benifits';
import WhyNow from '@/components/why-ivalt/WhyNow';

export const metadata: Metadata = {
  title: 'Why iVALT',
  description:
    'Discover why iVALT is the future of identity security. Learn about our patented technology, 5-Factor Authentication, and proven approach to stopping credential theft.',
  alternates: {
    canonical: '/why-ivalt',
  },
};

export default function WhyIvalt() {
  return (
    <Container className="bg-[#FAF9F7] md:py-12 py-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-navy-primary">Why iVALT</h1>
      </div>
      <SectionTitle title="Why iVALT ?" description="" />
      {/* <PioneeringContent /> */}
      {/* <FactorsOfIdentity /> */}
      <GovernanceIdentity />
      <TheConvergenceofAI />
      <WhyNow />
      <HumanAutSecurity />
      <EasyOverlayImplementation bgColor="bg-white" />
      <SimpleUserExperience />
      <PatentCapabilities />
      <PartnershipBenefits />
      {/* <UniqeBenifits /> */}
      {/* <ComingSoon /> */}
    </Container>
  );
}
