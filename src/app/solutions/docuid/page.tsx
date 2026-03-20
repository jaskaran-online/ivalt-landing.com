import { FileLock, ShieldCheck, UserCheck, ExternalLink, Lock, Download } from 'lucide-react';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import docuid from '@/assets/images/solutions/solutions-2.jpg';
import docuid3 from '@/assets/images/solutions/solutions-3.jpg';

export const metadata: Metadata = {
  title: 'DocuID® - Secure Document Access Control',
  description:
    "Learn how iVALT's DocuID empowers you to control who can access your sensitive documents with multi-factor authentication and full DRM protection.",
  openGraph: {
    title: 'DocuID® - Secure Document Access Control',
    description:
      "Protect your documents from unauthorized access, forwarding, and screenshots with iVALT's DocuID.",
  },
  twitter: {
    title: 'DocuID® - Secure Document Access Control',
    description:
      "Take control of your document security with iVALT's DocuID. Multi-factor authentication and DRM to prevent unauthorized access.",
  },
};

export default function DocuIdPage() {
  const features = [
    {
      icon: UserCheck,
      title: 'Identity Verification',
      text: 'Recipients verify identity via multi-factor authentication',
    },
    {
      icon: FileLock,
      title: 'Digital Rights Management',
      text: 'Full Digital Rights Management (DRM) protection',
    },
    {
      icon: ShieldCheck,
      title: 'Leak Prevention',
      text: 'Prevents forwarding, printing, and screenshots',
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-background to-gray-50/50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-primary/10 text-teal-primary text-sm font-medium mb-8">
            <Lock className="w-4 h-4" />
            <span>Document Security Solution</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-navy-primary mb-6 tracking-tight">
            DocuID®
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-semibold text-teal-primary mb-8">
            Documents Secured by iVALT
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://www.docuid.net" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-teal-primary hover:bg-teal-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-teal-primary/25 transition-all hover:shadow-xl hover:shadow-teal-primary/30 hover:-translate-y-0.5"
              >
                Visit DocuID.net
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="/brochures/DocuID-Brochure.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-white border border-teal-primary text-teal-primary hover:bg-teal-primary hover:text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                Download DocuID Brochure
                <Download className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center my-4 mb-6">
          <Image
            src={docuid}
            alt="DocuID"
            width={1500}
            height={1500}
            className="w-full md:w-[70%] h-full object-cover mb-3"
          />
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-navy-primary mb-6 tracking-tight">
            The Future of DocuID®
          </h1>
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-semibold text-teal-primary">
            Every Enterprise Application Produces Portable Risk
          </h2>
        </div>
        <div className="flex justify-center items-center mb-6">
          <Image
            src={docuid3}
            alt="DocuID"
            width={1500}
            height={1500}
            className="w-full md:w-[48%] h-full object-cover mb-3"
          />
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 mt-24">
        <div className="bg-gradient-to-r from-navy-primary to-dark-navy rounded-tr-[80px] rounded-bl-[80px] p-8 md:p-12 text-center text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Secure Your Documents?</h3>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Experience the future of document security with DocuID®.
          </p>
          <a href="https://www.docuid.net" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-white text-navy-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Get Started
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
