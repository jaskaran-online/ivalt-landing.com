import Container from "@/components/Container";
import { PlatformOverviewSection } from "@/components/home";

import { SolutionComponents, DataSecurity } from "@/components/solutions";
import { DocuIdFile } from "@/components/solutions/DocuIdFile";
import { OnDemand } from "@/components/solutions/On-Demand";

export default function Solutions() {
  return (
    <Container className="bg-[#FAF9F7] md:py-16 py-6">
      {/* DocuID Section - Moved to top with visit link */}
      <DocuIdFile />

      <PlatformOverviewSection />

      {/* Other Solutions */}
      <OnDemand />

      <DataSecurity />

      <SolutionComponents />
    </Container>
  );
}
