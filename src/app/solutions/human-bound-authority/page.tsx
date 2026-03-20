import { Button } from '@/components/ui/button';
import { Download, ExternalLink, Fingerprint, Globe, MousePointerClick, Lock } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import HumanBoundAuthorityImage from '@/assets/images/solutions/solutions-1.jpg';

export const metadata: Metadata = {
  title: 'Human-Bound Authority - Enterprise Security',
  description:
    "Enhance your corporate security with iVALT's Human-Bound Authority. A seamless, 1-click user experience with real-time biometric and contextual verification.",
  openGraph: {
    title: 'Human-Bound Authority - Enterprise Security',
    description:
      "Enhance your corporate security with iVALT's Human-Bound Authority. A seamless, 1-click user experience with real-time biometric and contextual verification.",
  },
  twitter: {
    title: 'Human-Bound Authority - Enterprise Security',
    description:
      "Enhance your corporate security with iVALT's Human-Bound Authority. A seamless, 1-click user experience with real-time biometric and contextual verification.",
  },
};

export default function HumanBoundAuthorityPage() {
  const features = [
    {
      icon: Fingerprint,
      text: 'When an employee logs in, iVALT "pings" their mobile',
    },
    { icon: Globe, text: 'Real-time biometric and contextual verification' },
    { icon: MousePointerClick, text: '1-Click user experience' },
  ];

  return (
    <section className="min-h-screen bg-background pb-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-primary/10 text-teal-primary text-sm font-medium mb-8">
            <Lock className="w-4 h-4" />
            <span>Human Bound Authority</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-navy-primary mb-6 tracking-tight">
            Human-Bound Authority
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-semibold text-teal-primary mb-8">
            Provable Human-Bound Authority at Execution
          </h2>
        </div>
        <div className="flex justify-center items-center my-4 mb-6">
          <Image
            src={HumanBoundAuthorityImage}
            alt="On-Demand ID"
            width={1500}
            height={1500}
            className="w-full md:w-[50%] h-full object-cover mb-3"
          />
        </div>
      </div>
    </section>
  );
}
