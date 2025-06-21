import SolutionComponent from "./SolutionComponent";
import docuid from "@/assets/images/solutions/docuid.png";

const features = [
  "No Enterprise Infrastructure Integration Required",
  "Granular Access Control to a Single Person",
  "Stops Exfiltration Risks (Stolen Docs remain Safe)",
  "Digital Rights Protection (sharing, printing, downloads, screen shots)",
];

export default function DocuID() {
  return (
    <SolutionComponent
      title="DocuID™"
      description="Highly Restrictive Access Control for Documents & Media."
      image={docuid}
      imageAlt="DocuID"
      features={features}
      backgroundColor="bg-white"
      iconBackgroundColor="bg-[#FAF9F7]"
    />
  );
}
