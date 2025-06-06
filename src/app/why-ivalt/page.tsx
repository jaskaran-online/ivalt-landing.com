import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import {
  ComingSoon,
  FactorsOfIdentity,
  PioneeringContent,
} from "@/components/why-ivalt";

export default function WhyIvalt() {
  return (
    <Container className="bg-[#FAF9F7]">
      <SectionTitle title="Why iVALT ?" description="" />
      <PioneeringContent />
      <FactorsOfIdentity />
      <ComingSoon />
    </Container>
  );
}
