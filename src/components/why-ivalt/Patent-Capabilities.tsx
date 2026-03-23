import React from 'react';
const Points = [
  {
    title: 'Human-Bound Identity',
    desc: 'Extends IAM Security via PKI to AI & IOT Ecosystems and Document Control (No Boundaries)',
  },
  {
    title: 'Loop Backs',
    desc: 'Software Redirects (Loop-Backs) to Stop Potentially Damaging ACTIONS in IAM and for Continuous TRUST Verifications for AI Compute',
  },
  {
    title: 'AI Ecosystem Control and Compliance',
    desc: 'End-to-End PKI Chains for Proof of Human & Non-Human Identities, Full Audit Accountability',
  },
  {
    title: 'Protection from Social Engineering and AI Deepfakes',
    desc: 'Force On-Demand ID Verifications to Stop Fake Call Impersonations, & Phishing',
  },
];

export const PatentCapabilities = () => {
  return (
    <div className="p-4 sm:p-6 md:py-11 mt-8 sm:mt-12 md:mt-16  max-w-6xl mx-auto mb-4 md:mb-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6 text-center md:mb-12">
        iVALT&apos;s Patented Capabilities
      </h1>
      <ul className="list-disc pl-3 sm:pl-4 md:pl-5 space-y-4 sm:space-y-5 md:space-y-7 text-gray-800">
        {Points.map((point, index) => (
          <li
            key={index}
            className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-x-2 leading-relaxed"
          >
            <span className="font-bold text-primary text-lg sm:text-xl whitespace-normal sm:whitespace-nowrap">
              {point.title}
            </span>
            <span className="hidden sm:inline text-primary font-semibold">→</span>
            <span className="italic text-gray-800 text-base sm:text-lg md:text-xl flex-1">
              {point.desc}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
