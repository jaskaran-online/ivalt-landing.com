import { Smartphone, ShieldAlert, Bot, Download, ExternalLink, Lock } from 'lucide-react';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import onDemandId from '@/assets/images/solutions/solutions-4.jpg';

export const metadata: Metadata = {
  title: 'On-Demand ID™ - Combat Deepfakes & Social Engineering',
  description:
    "Discover how iVALT's On-Demand ID provides real-time identity verification to protect you from deepfakes, scams, and social engineering attacks.",
  openGraph: {
    title: 'On-Demand ID™ - Combat Deepfakes & Social Engineering',
    description:
      "Verify the identity of anyone, anytime, with iVALT's On-Demand ID. The ultimate tool against modern digital threats.",
  },
  twitter: {
    title: 'On-Demand ID™ - Combat Deepfakes & Social Engineering',
    description:
      "Don't fall for deepfakes or scams. Use iVALT's On-Demand ID for instant, reliable identity verification.",
  },
};

export default function OnDemandIdPage() {
  return (
    <section className="min-h-screen bg-background pb-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-primary/10 text-teal-primary text-sm font-medium mb-8">
            <Lock className="w-4 h-4" />
            <span>On-Demand ID®</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-navy-primary mb-6 tracking-tight">
            On-Demand ID®
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-semibold text-teal-primary mb-8">
            Exposing False Trust – At AI Speed
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://www.ondemandid.com" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-teal-primary hover:bg-teal-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-teal-primary/25 transition-all hover:shadow-xl hover:shadow-teal-primary/30 hover:-translate-y-0.5"
              >
                Visit OnDemandId.com
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="/brochures/On-DemandID-Brochure.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-white border border-teal-primary text-teal-primary hover:bg-teal-primary hover:text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                Download OnDemandID Brochure
                <Download className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center my-4 mb-6">
          <Image
            src={onDemandId}
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
