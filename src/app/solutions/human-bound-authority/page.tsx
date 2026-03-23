import { Fingerprint, Globe, Lock, MousePointerClick } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import HumanBoundAuthorityImage from '@/assets/images/solutions/solutions-1.jpg';
import { solutionsHumanBoundAuthority } from '@/content/solutions-hub';

const featureIcons = [Fingerprint, Globe, MousePointerClick] as const;

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
  const c = solutionsHumanBoundAuthority;

  return (
    <section className="min-h-screen bg-background pb-24">
      <div className="relative overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-primary/10 text-teal-primary text-sm font-medium mb-8">
            <Lock className="w-4 h-4" />
            <span>{c.badgeLabel}</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-navy-primary mb-6 tracking-tight">
            {c.title}
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-teal-primary mb-10">{c.subtitle}</h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left mb-12">
            {c.features.map((text, index) => {
              const Icon = featureIcons[index];
              return (
                <div
                  key={text}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-lg bg-teal-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-teal-primary" />
                  </div>
                  <p className="text-gray-700 font-medium">{text}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center items-center my-4 mb-6">
          <Image
            src={HumanBoundAuthorityImage}
            alt={c.title}
            width={1500}
            height={1500}
            className="w-full md:w-[50%] h-full object-cover mb-3"
          />
        </div>
      </div>
    </section>
  );
}
