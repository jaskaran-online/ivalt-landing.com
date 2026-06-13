import { Metadata } from 'next';
import { Hero, ExecutiveTeam, Advisors, CTA } from '@/components/leadership';

export const metadata: Metadata = {
  title: 'Leadership | iVALT',
  description:
    "Meet iVALT's leadership team — executives and strategic advisors driving the future of human trust across cybersecurity, identity verification, and digital transformation.",
  alternates: {
    canonical: '/leadership',
  },
};

export default function LeadershipPage() {
  return (
    <>
      <Hero />
      <ExecutiveTeam />
      <Advisors />
      <CTA />
    </>
  );
}
