import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import TargetingContent from "@/components/solutions/TargetingContent";
import Universal from "@/components/solutions/Universal";

export default function Solutions() {
  return (
    <Container className="bg-[#FAF9F7] py-16">
      <SectionTitle title="Solutions" description="" />
      <TargetingContent />

      <Universal />
    </Container>
  );
}
