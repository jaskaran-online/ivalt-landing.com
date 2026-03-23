import type { Metadata } from 'next';
import Container from '@/components/Container';
import { PlatformOverviewSection } from '@/components/home';
import { SolutionComponents, DataSecurity } from '@/components/solutions';
import { DocuIdFile } from '@/components/solutions/DocuIdFile';
import { HumanBoundAuthoritySection } from '@/components/solutions/HumanBoundAuthoritySection';
import { OnDemand } from '@/components/solutions/On-Demand';
import {
  solutionsDocuId,
  solutionsHumanBoundAuthority,
  solutionsOnDemandId,
} from '@/content/solutions-hub';

export const metadata: Metadata = {
  title: 'Solutions',
  description: `${solutionsHumanBoundAuthority.title}: ${solutionsHumanBoundAuthority.subtitle}. ${solutionsDocuId.title} — ${solutionsDocuId.subtitle}. ${solutionsOnDemandId.title} — ${solutionsOnDemandId.subtitle}.`,
  openGraph: {
    title: 'iVALT Solutions',
    description: `Human-bound authority, ${solutionsDocuId.title}, and ${solutionsOnDemandId.title} on one platform.`,
  },
  alternates: {
    canonical: '/solutions',
  },
};

export default function Solutions() {
  return (
    <Container className="bg-[#FAF9F7] md:py-16 py-6">
      <HumanBoundAuthoritySection />
      <OnDemand />
      <DocuIdFile />

      {/* <PlatformOverviewSection />
      <DataSecurity />
      <SolutionComponents /> */}
    </Container>
  );
}
