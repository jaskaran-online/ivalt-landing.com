import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "iVALT Revolutionizes Document Security with Launch of DocuID",
  description:
    "iVALT, an innovator in identity verification and security solutions, today announced the launch of DocuID, a groundbreaking document protection service that empowers document owners with unprecedented control over access to their critical information.",
  keywords:
    "iVALT, DocuID, document security, access control, identity verification, document protection, mobile security, encryption, Zero Trust, biometric verification",
  authors: [{ name: "iVALT" }],
  robots: "index, follow",
  alternates: {
    canonical:
      "https://ivalt.com/recent-updates/ivalt-revolutionizes-document-security-with-launch-of-DocuID",
  },
  openGraph: {
    type: "article",
    url: "https://ivalt.com/recent-updates/ivalt-revolutionizes-document-security-with-launch-of-DocuID",
    title: "iVALT Revolutionizes Document Security with Launch of DocuID",
    description:
      "iVALT, an innovator in identity verification and security solutions, today announced the launch of DocuID, a groundbreaking document protection service that empowers document owners with unprecedented control over access to their critical information.",
    images: [
      {
        url: "https://ivalt.com/press-release/images/ivalt-revolutionizes-document-security-with-launch-of-DocuID-net.png",
        width: 1200,
        height: 630,
        alt: "iVALT Revolutionizes Document Security with DocuID",
      },
    ],
    siteName: "iVALT",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ivaltinc",
    creator: "@ivaltinc",
    title: "iVALT Revolutionizes Document Security with Launch of DocuID",
    description:
      "iVALT, an innovator in identity verification and security solutions, today announced the launch of DocuID, a groundbreaking document protection service that empowers document owners with unprecedented control over access to their critical information.",
    images: [
      "https://ivalt.com/press-release/images/ivalt-revolutionizes-document-security-with-launch-of-DocuID-net.png",
    ],
  },
  other: {
    "article:published_time": "2025-04-22T00:00:00+00:00",
    "article:author": "Baldev Krishan",
    "article:section": "Recent Updates",
    "article:tag": ["Document Security", "DocuID", "Identity Verification"],
    "geo.region": "US-CA",
    "geo.placename": "Pleasanton",
    "geo.position": "37.6624;-121.8747",
    ICBM: "37.6624, -121.8747",
  },
};

export default function Page() {
  return (
    <main className="max-w-7xl px-6 py-10 bg-white mx-6 shadow-sm md:mx-auto">
      <article className="leading-relaxed">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy-primary mb-12">
          iVALT Revolutionizes Document Security with Launch of DocuID(™), a
          Mobile-Centric Access Control Solution
        </h1>
        <Image
          src="/press-release/images/ivalt-revolutionizes-document-security-with-launch-of-DocuID-net.png"
          alt=""
          width={1200}
          height={630}
          className="w-full h-auto mx-auto"
        />
        <p className="my-6 mt-12 text-justify">
          <strong className="text-navy-primary">
            Pleasanton, Calif.— April 22, 2025:
          </strong>{" "}
          iVALT, an innovator in identity verification and security solutions,
          today announced the launch of{" "}
          <strong className="text-navy-primary">DocuID</strong>, a
          groundbreaking document protection service that empowers document
          owners with unprecedented control over access to their critical
          information. DocuID utilizes a unique 1-click mobile-centric approach,
          embedding authorized user credentials directly into encrypted
          documents and leveraging iVALT's advanced 5+ factor identity
          verification system to grant access, ensuring that only approved users
          can open and read the document. In addition, any document secured by
          DocuID cannot be opened if forwarded to an unapproved user.
        </p>
        <p className="mb-6 text-justify">
          In today's digital landscape, ensuring the confidentiality and
          integrity of sensitive documents is paramount. Traditional security
          measures often fall short, leaving valuable information vulnerable to
          unauthorized access. DocuID addresses this critical need by offering a
          revolutionary solution that combines robust encryption with granular
          access control, all managed seamlessly through a user's mobile
          device.
        </p>
        <p className="mb-6 text-justify">
          "We are thrilled to introduce{" "}
          <strong className="text-navy-primary">DocuID</strong>, a game-changer
          in document security," said{" "}
          <strong className="text-navy-primary">
            Baldev Krishan Ph.D., CEO and Co-Founder of iVALT
          </strong>
          . "DocuID puts the power back in the hands of document owners,{" "}
          <strong className="text-navy-primary">
            allowing them to define exactly who can access their sensitive
            information and under what conditions
          </strong>
          . Our mobile-first design and next generation multi-factor identity
          verification{" "}
          <strong className="text-navy-primary">
            (up to 25 AI-selected factors)
          </strong>
          provide a very high level of security and convenience."
        </p>
        <p className="mb-6 text-justify">
          DocuID leverages iVALT's unassailable identity verification
          including biometrics, registered device ID, GPS geo-fencing, approved
          access time windows, as well as a wide variety of customizable dynamic
          variables that are only relevant to the ID owner. iVALT can be
          integrated easily through Open APIs and standard protocols into any
          IAM platform or application requiring real-time identity verification.
          Real-time identity can also be demanded and proven via iVALT's
          mobile app to stop social engineering and AI- deepfake attacks.
        </p>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-navy-primary mb-4">
            About iVALT
          </h2>
          <p className="mb-6 text-justify">
            iVALT is a leading innovator in identity verification and security
            solutions, dedicated to developing cutting-edge technologies that
            empower individuals and organizations to protect their digital
            assets and information. With a focus on mobile-centric, multi-factor
            identity verification, iVALT is committed to providing secure,
            easily deployed, and user-friendly solutions for the quickly
            evolving digital landscape for nearly any use case.
          </p>
        </div>
        <div className="mb-8 mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-800">
            <strong className="text-navy-primary">CONTACT: </strong>
            <br />
            Baldev Krishan Ph.D.
            <br />
            <a href="mailto:baldev@ivalt.com">baldev@ivalt.com</a>
            <br />
            <a href="tel:baldev@ivalt.com">1-510-304-6830</a>
          </p>
        </div>
      </article>
    </main>
  );
}
