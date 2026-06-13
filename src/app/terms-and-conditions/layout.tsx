import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    "Read iVALT's terms and conditions for using our identity verification and biometric security products and services.",
  alternates: {
    canonical: '/terms-and-conditions',
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
