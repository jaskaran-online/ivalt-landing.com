import SolutionComponent from "./SolutionComponent";
import ondemandidLogo from "@/assets/images/home/ondemandid.png";

const features = [
  "Real-Time Customer Identity",
  "Proactive Agent Identity",
  "Stops Social Engineering & Deepfakes",
  "Highly Secure Account Access",
];

export default function OnDemandID() {
  return (
    <SolutionComponent
      title="On-Demand ID™"
      description="Real-Time Identity for All Communications."
      image={ondemandidLogo}
      imageAlt="On-Demand ID"
      features={features}
      backgroundColor="bg-[#FAF9F7]"
      iconBackgroundColor="bg-white"
      maxWidth="max-w-4xl"
    />
  );
}
