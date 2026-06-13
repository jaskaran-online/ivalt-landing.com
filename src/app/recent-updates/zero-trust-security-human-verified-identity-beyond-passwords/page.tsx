import Image from 'next/image';
import { Metadata } from 'next';
import { JsonLd, articleJsonLd, breadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Zero Trust Security: Human-Verified Identity Beyond Passwords',
  description:
    'Join iVALT and OpenVPN for an exclusive webinar on delivering human-verified Zero Trust for your organization. Learn how to move beyond passwords and tokens to ensure verified humans can access networks, even in the age of AI deepfakes.',
  keywords:
    'iVALT, OpenVPN, Zero Trust, human-verified identity, passwordless, cybersecurity, webinar, AI deepfakes, identity security, ZTNA',
  authors: [{ name: 'iVALT' }],
  robots: 'index, follow',
  alternates: {
    canonical:
      'https://www.ivalt.com/recent-updates/zero-trust-security-human-verified-identity-beyond-passwords',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.ivalt.com/recent-updates/zero-trust-security-human-verified-identity-beyond-passwords',
    title: 'Zero Trust Security: Human-Verified Identity Beyond Passwords',
    description:
      'Join iVALT and OpenVPN for an exclusive webinar on delivering human-verified Zero Trust for your organization. Learn how to move beyond passwords and tokens to ensure verified humans can access networks.',
    images: [
      {
        url: 'https://www.ivalt.com/press-release/images/ivalt-openvpn-webinar.png',
        width: 1200,
        height: 630,
        alt: 'iVALT OpenVPN Zero Trust Webinar',
      },
    ],
    siteName: 'iVALT',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ivaltinc',
    creator: '@ivaltinc',
    title: 'Zero Trust Security: Human-Verified Identity Beyond Passwords',
    description:
      'Join iVALT and OpenVPN for an exclusive webinar on delivering human-verified Zero Trust for your organization.',
    images: ['https://www.ivalt.com/press-release/images/ivalt-openvpn-webinar.png'],
  },
  other: {
    'article:published_time': '2026-02-11T00:00:00+00:00',
    'article:author': 'iVALT',
    'article:section': 'Recent Updates',
    'article:tag': ['Zero Trust', 'Webinar', 'Passwordless', 'AI Security'],
    'geo.region': 'US-CA',
    'geo.placename': 'Pleasanton',
    'geo.position': '37.6624;-121.8747',
    ICBM: '37.6624, -121.8747',
  },
};

export default function Page() {
  return (
    <main className="max-w-7xl px-6 py-10 bg-white mx-6 shadow-sm md:mx-auto">
      <JsonLd
        data={articleJsonLd({
          title: 'Zero Trust Security: Human-Verified Identity Beyond Passwords',
          description:
            'Join iVALT and OpenVPN for an exclusive webinar on delivering human-verified Zero Trust for your organization.',
          path: '/recent-updates/zero-trust-security-human-verified-identity-beyond-passwords',
          datePublished: '2026-02-11',
          author: 'iVALT',
          image: '/press-release/images/ivalt-openvpn-webinar.png',
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', url: '/' },
          { name: 'Recent Updates', url: '/recent-updates' },
          {
            name: 'Zero Trust Security: Human-Verified Identity Beyond Passwords',
            url: '/recent-updates/zero-trust-security-human-verified-identity-beyond-passwords',
          },
        ])}
      />
      <article className="leading-relaxed">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy-primary mb-12">
          Zero Trust Security: Human-Verified Identity Beyond Passwords
        </h1>
        <Image
          src="/press-release/images/ivalt-openvpn-webinar.png"
          alt="iVALT OpenVPN Zero Trust Webinar"
          width={1200}
          height={630}
          className="w-full h-auto mx-auto"
        />
        <p className="my-6 mt-12 text-justify">
          Deepfakes and AI-driven impersonation are breaking traditional trust models—and
          credentials alone are no longer enough. iVALT is excited to join{' '}
          <a
            href="https://www.linkedin.com/company/openvpn?trk=public_post-text"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy-primary font-bold hover:underline"
          >
            OpenVPN Inc.
          </a>{' '}
          for an upcoming webinar:{' '}
        </p>
        <p className="mb-6 text-justify">
          <em>
            <span className="text-navy-primary font-bold">→</span> Real Humans Only: How to Deliver
            Human-Verified Zero Trust for Your Organization
          </em>
        </p>
        <p className="mb-6 text-justify">
          In this session,{' '}
          <a
            href="https://www.linkedin.com/company/openvpn?trk=public_post-text"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy-primary font-bold hover:underline"
          >
            OpenVPN Inc.
          </a>{' '}
          and{' '}
          <a
            href="https://www.linkedin.com/company/ivalt-inc?trk=public_post-text"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy-primary font-bold hover:underline"
          >
            iVALT®, Inc
          </a>{' '}
          will discuss how organizations can move beyond passwords and tokens to ensure that only
          verified humans can access networks and trigger sensitive actions, even in the age of AI
          deepfakes.
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-3">
          <li className="text-justify text-gray-800">
            Learn how human-bound, passwordless identity strengthens Zero Trust
          </li>
          <li className="text-justify text-gray-800">
            Understand the risks AI impersonation introduces to remote access
          </li>
          <li className="text-justify text-gray-800">
            See how real-time human verification works in practice
          </li>
        </ul>

        <div className="mb-8 p-6 bg-gradient-to-r from-teal-primary/10 to-navy-primary/10 rounded-xl border border-teal-primary/20">
          <h3 className="text-lg font-bold text-navy-primary mb-3">Register Now</h3>
          <p className="text-gray-700 mb-4">
            Join us for this exclusive webinar and learn how to protect your organization from
            AI-driven impersonation threats.
          </p>
          <a
            href="https://openvpn.zoom.us/webinar/register/WN_uoald-RaT7q2glNKnHoDlg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-teal-primary hover:bg-teal-primary/90 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Register for Webinar
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </article>
    </main>
  );
}
