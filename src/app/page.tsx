import { HeroSection } from "@/components/ui/hero-section";
import { AnnouncementBanner } from "@/components/ui/announcement-banner";
import {
  IdentityCrisisSection,
  PlatformOverviewSection,
  KeyApplicationsSection,
  VisionSection,
  MarketOpportunitySection,
} from "@/components/home";
import { Metadata } from "next";
import { HumanIdentity } from "@/components/home/HumanIdentity";
import { TrustedHuman } from "@/components/home/Trusted-human";
import { IvaultBridge } from "@/components/home/IvaultBridge";
import { UserExperience } from "@/components/home/User-Experience";
import { RecentUpdatesCarousel } from "@/components/home/RecentUpdatesCarousel";

export const metadata: Metadata = {
  title: "iVALT Home - Identity Validation Platform",
  description:
    "Discover iVALT’s revolutionary identity validation solutions for secure digital interactions.",
};

export default function Homepage2() {
  return (
    <>
      <AnnouncementBanner />
      <HeroSection />
      <RecentUpdatesCarousel />
      <IdentityCrisisSection />
      <HumanIdentity/>
      <TrustedHuman/>
      <IvaultBridge/>
      <UserExperience/>
      {/* <PlatformOverviewSection /> */}
      {/* <KeyApplicationsSection /> */}
      {/* <VisionSection /> */}
      {/* <MarketOpportunitySection /> */}
    </>
  );
}
