import { HeroSection } from '@/components/ui/hero-section';
import { AnnouncementBanner } from '@/components/ui/announcement-banner';
// import {
//   IdentityCrisisSection,
//   PlatformOverviewSection,
//   KeyApplicationsSection,
//   VisionSection,
//   MarketOpportunitySection,
// } from '@/components/home';
import { Metadata } from 'next';
// import { HumanIdentity } from '@/components/home/HumanIdentity';
// import { TrustedHuman } from '@/components/home/Trusted-human';
// import { IvaultBridge } from '@/components/home/IvaultBridge';
// import { UserExperience } from '@/components/home/User-Experience';
import { RecentUpdatesCarousel } from '@/components/home/RecentUpdatesCarousel';
import { CyberThreatsSection } from '@/components/home/CyberThreatsSection';
import { IdentityMarketsHubSection } from '@/components/home/IdentityMarketsHubSection';
import CredentialFailExcecution from '@/components/home/CredentialFailExcecution';
import HumanAuthorityEnforce from '@/components/home/HumanAuthorityEnforce';
import HumanAuthorityMustProven from '@/components/home/HumanAuthorityMustProven';
import HumanIdentityRoot from '@/components/home/HumanIdentityRoot';
import IvaltCryptographicBridge from '@/components/home/IvaltCryptographicBridge';
import EasyOverlayImplementation from '@/components/home/EasyOverlayImplementation';
import TheFutureofIdentity from '@/components/home/TheFutureofIdentity';

export const metadata: Metadata = {
  title: 'iVALT Home - Identity Validation Platform',
  description:
    'Discover iVALT’s revolutionary identity validation solutions for secure digital interactions.',
};

export default function Homepage2() {
  return (
    <>
      <AnnouncementBanner />
      <HeroSection />
      <RecentUpdatesCarousel />
      <CyberThreatsSection />
      <CredentialFailExcecution />
      <HumanAuthorityMustProven />
      <HumanAuthorityEnforce />
      <HumanIdentityRoot />
      <IvaltCryptographicBridge />
      <EasyOverlayImplementation />
      <IdentityMarketsHubSection />
      <TheFutureofIdentity />
      {/* <IdentityCrisisSection /> */}
      {/* <HumanIdentity /> */}
      {/* <TrustedHuman />
      <IvaultBridge />
      <UserExperience /> */}
      {/* <PlatformOverviewSection /> */}
      {/* <KeyApplicationsSection /> */}
      {/* <VisionSection /> */}
      {/* <MarketOpportunitySection /> */}
    </>
  );
}
