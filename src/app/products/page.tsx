import Container from "@/components/Container";
import ComingSoon from "@/components/ComingSoon";

export default function Products() {
  return (
    <Container className="bg-[#FAF9F7] py-16">
      <ComingSoon
        title="Products"
        subtitle="Next-gen security is almost here"
        launchDate={new Date("2024-06-01")}
      />
    </Container>
  );
}