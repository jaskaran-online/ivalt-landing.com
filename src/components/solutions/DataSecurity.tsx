import SolutionComponent from "./SolutionComponent";
import dataSecurity from "@/assets/images/solutions/4.png";

const features = [
  "End-to-end encryption for all data",
  "Granular access controls",
  "Real-time threat detection",
  "Compliance with industry standards",
];

export default function DataSecurity() {
  return (
    <SolutionComponent
      title="Comprehensive Data Security"
      description="Access control + Encryption + Identity for every file"
      image={dataSecurity}
      imageAlt="Data Security"
      features={features}
      backgroundColor="bg-white"
      iconBackgroundColor="bg-[#FAF9F7]"
    />
  );
}
