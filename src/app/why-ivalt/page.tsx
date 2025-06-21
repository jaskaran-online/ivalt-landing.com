import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import {
  ComingSoon,
  FactorsOfIdentity,
  PartnershipBenefits,
  PioneeringContent,
} from "@/components/why-ivalt";

export default function WhyIvalt() {
  return (
    <Container className="bg-[#FAF9F7] md:py-12 py-6">
      <SectionTitle title="Why iVALT ?" description="" />
      <PioneeringContent />
      <FactorsOfIdentity />
      <PartnershipBenefits />
      <ComingSoon />
    </Container>
  );
}
