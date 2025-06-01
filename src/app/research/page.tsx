import ComingSoon from "@/components/ComingSoon";
import Container from "@/components/Container";

export default function Research() {
  return (
    <Container className="bg-[#FAF9F7] py-16">
      <ComingSoon
        title="Research"
        subtitle="Next-gen security is almost here"
        launchDate={new Date("2024-06-01")}
      />
    </Container>
  );
}