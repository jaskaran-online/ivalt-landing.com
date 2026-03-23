import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RecaptchaProvider from '@/components/providers/RecaptchaProvider';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ivalt.com'),
  title: {
    default: 'iVALT | Advanced Identity Verification & Biometric Security',
    template: '%s | iVALT',
  },
  description:
    'iVALT offers cutting-edge identity verification solutions, including biometric authentication, secure document access (DocuID), and real-time identity confirmation (On-Demand ID) to combat fraud and deepfakes.',
  keywords: [
    'iVALT',
    'identity verification',
    'biometric security',
    'authentication',
    'DocuID',
    'On-Demand ID',
    'Universal Biometric ID',
    'deepfake protection',
    'fraud prevention',
    'cybersecurity',
  ],
  openGraph: {
    title: 'iVALT | Advanced Identity Verification & Biometric Security',
    description:
      "Discover iVALT's suite of identity solutions designed to protect your digital life from modern threats like deepfakes and social engineering.",
    url: 'https://www.ivalt.com',
    siteName: 'iVALT',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iVALT | Advanced Identity Verification & Biometric Security',
    description:
      "Secure your digital identity with iVALT's advanced biometric solutions. Protect against fraud, deepfakes, and unauthorized access.",
    images: ['/images/logo.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    viewport: 'width=device-width, initial-scale=1',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <RecaptchaProvider>
          <Header />
          {children}
          <Footer />
        </RecaptchaProvider>
      </body>
    </html>
  );
}
