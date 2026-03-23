import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    "Read iVALT's privacy policy and end user license agreement. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
