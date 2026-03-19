import { Fingerprint, Globe, MousePointerClick } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Universal Biometric ID® - Enterprise Security',
  description:
    "Enhance your corporate security with iVALT's Universal Biometric ID. A seamless, 1-click user experience with real-time biometric and contextual verification.",
  openGraph: {
    title: 'Universal Biometric ID® - Enterprise Security',
    description:
      "Strengthen your Identity and Access Management (IAM) with iVALT's Universal Biometric ID. Secure, simple, and powerful.",
  },
  twitter: {
    title: 'Universal Biometric ID® - Enterprise Security',
    description:
      "Protect your enterprise with iVALT's Universal Biometric ID. The future of corporate security is here.",
  },
};

export default function UniversalIdPage() {
  const features = [
    {
      icon: Fingerprint,
      text: 'When an employee logs in, iVALT "pings" their mobile',
    },
    { icon: Globe, text: 'Real-time biometric and contextual verification' },
    { icon: MousePointerClick, text: '1-Click user experience' },
  ];

  return (
    <section className="min-h-screen bg-background py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-extrabold text-navy-primary mb-4">Universal Biometric ID®</h1>
        <h2 className="text-2xl font-semibold text-teal-primary mb-12">Enterprise Security</h2>

        <p className="text-xl text-gray-700 mb-16 leading-relaxed">
          Enhances corporate Identity and Access Management (IAM).
        </p>

        <div className="space-y-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <feature.icon className="w-12 h-12 text-teal-primary mb-4" />
              <p className="text-xl text-gray-800 font-medium max-w-md">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
