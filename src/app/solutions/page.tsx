import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import {
  TargetingContent,
  Universal,
  OnDemandID,
  DocuID,
  SolutionComponents,
  DataSecurity,
  ContextID,
} from "@/components/solutions";

export default function Solutions() {
  return (
    <Container className="bg-[#FAF9F7] md:py-16 py-6">
      <SectionTitle title="Solutions" description="" />
      <TargetingContent />
      <Universal />
      <OnDemandID />
      <DocuID />
      <ContextID />
      <DataSecurity />
      <SolutionComponents />
    </Container>
  );
}
