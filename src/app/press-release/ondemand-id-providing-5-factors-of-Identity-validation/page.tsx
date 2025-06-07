import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "iVALT® Launches OnDemand ID providing 5+ Factors of Identity Validation",
  description:
    "iVALT®, a leading innovator of Zero Trust identity solutions, today announced the official launch of OnDemand ID™, a groundbreaking universal 5+factor identity product that empowers enterprises with the highest level of identity verification available.",
  keywords:
    "iVALT, OnDemand ID, 5+ Factors of Identity Validation, biometric verification, identity management, digital security, authentication, cybersecurity, password management",
  authors: [{ name: "iVALT" }],
  robots: "index, follow",
  alternates: {
    canonical:
      "https://ivalt.com/press-release/ondemand-id-providing-5-factors-of-Identity-validation",
  },
  openGraph: {
    type: "article",
    url: "https://ivalt.com/press-release/ondemand-id-providing-5-factors-of-Identity-validation",
    title:
      "iVALT® Launches OnDemand ID providing 5+ Factors of Identity Validation",
    description:
      "iVALT®, a leading innovator of Zero Trust identity solutions, today announced the official launch of OnDemand ID™, a groundbreaking universal 5+factor identity product that empowers enterprises with the highest level of identity verification available.",
    images: [
      {
        url: "https://ivalt.com/press-release/images/ivalt-launches-ondemand-id-providing-5-factors-of-Identity-validation.png",
        width: 1200,
        height: 630,
        alt: "iVALT Launches OnDemand ID",
      },
    ],
    siteName: "iVALT",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ivaltinc",
    creator: "@ivaltinc",
    title:
      "iVALT® Launches OnDemand ID providing 5+ Factors of Identity Validation",
    description:
      "iVALT®, a leading innovator of Zero Trust identity solutions, today announced the official launch of OnDemand ID™, a groundbreaking universal 5+factor identity product that empowers enterprises with the highest level of identity verification available.",
    images: [
      "https://ivalt.com/press-release/images/ivalt-launches-ondemand-id-providing-5-factors-of-Identity-validation.png",
    ],
  },
  other: {
    "article:published_time": "2025-01-08T00:00:00+00:00",
    "article:author": "Baldev Krishan",
    "article:section": "Press Release",
    "article:tag": ["5FA", "Security", "Password Management"],
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
          iVALT® Launches OnDemand ID providing 5+ Factors of Identity
          Validation
        </h1>
        <Image
          src="/press-release/images/ivalt-launches-ondemand-id-providing-5-factors-of-Identity-validation.png"
          alt=""
          width={1200}
          height={630}
          className="w-full h-auto mx-auto"
        />
        <p className="my-6 mt-12 text-justify">
          <strong className="text-navy-primary">
            Pleasanton, CA – February 10, 2025:
          </strong>
          iVALT®, a leading innovator of Zero Trust identity solutions, today
          announced the official launch of OnDemand ID™, a{" "}
          <strong className="text-navy-primary">
            groundbreaking universal 5+factor identity
          </strong>{" "}
          product that empowers enterprises with the highest level of identity
          validation available. Using a
          <strong className="text-navy-primary">
            1-click mobile experience
          </strong>
          , OnDemand ID provides the most secure and convenient identity
          verification and works with all existing authentication systems and
          enterprise systems. It is the only solution available today to
          accurately and reliably identify both ends of a phone call, thereby
          <strong className="text-navy-primary">
            stopping social engineering and AI deepfakes.
          </strong>
        </p>
        <p className="mb-6 text-justify">
          Stolen credentials account for 80% or more of all cyber crimes. Once
          stolen, key enterprise employees can be impersonated to get access to
          key systems, databases and customer information. Worse yet, stolen
          credentials enable massive data breaches, ransomware attacks and
          identity theft. iVALT goes far beyond traditional usernames and
          passwords to capture and verify 5 or more factors of identity in a
          single click, providing the necessary information to definitively
          identify the human at the end of any connection, whether online or on
          phone calls.
        </p>
        <p className="mb-4 text-navy-primary font-semibold">
          OnDemand ID leverages a multi-layered approach to identity
          verification, combining:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>
            <strong className="text-navy-primary">
              Biometric Authentication:
            </strong>{" "}
            Securely verifies user identity through fingerprint, facial
            recognition, or voice recognition.
          </li>
          <li>
            <strong className="text-navy-primary">Device ID: </strong>
            Uniquely identifies the user&apos;s mobile device, adding another
            layer of security.
          </li>
          <li>
            <strong className="text-navy-primary">
              Contextual Attributes:{" "}
            </strong>{" "}
            Captures critical information such as GPS location, time, and
            dynamic variables defined by the enterprise or the end-user,
            enhancing identity assurance.
          </li>
        </ul>
        <p className="mb-6 text-justify">
          This powerful combination of factors is customizable to create a
          robust 5+ factor identity verification system that surpasses
          traditional credential-based methods in strength and security.
          Customers can use OnDemand ID to replace existing 2FA as a more secure
          and user-friendly alternative. In addition, identity proofing with
          government documents is an option that creates a far superior level of
          security by extending known user attributes to OnDemand ID to
          strengthen identity trust.
        </p>
        <p className="mb-6 text-justify">
          OnDemand ID seamlessly integrates with existing authentication
          platforms through a simple software redirect. This enables the use of
          iVALT&apos;s technology for any use case, ranging from online
          authentication to IOT and physical access, as well as on-site
          real-time identity verification.
        </p>
        <p className="mb-6 text-justify">
          Baldev Krishan Ph.D., CEO of iVALT summarizes the company&apos;s
          market strategy, &quot;This is the start of a disruption toward
          de-centralized identity that is so necessary to stop the pervasive
          cybersecurity threats we hear about every day. Users can own and
          control their own identities instead of delegating control to all of
          their digital relationships, any of which can be easily
          breached.&quot;
        </p>
        <h1 className="text-2xl font-bold text-navy-primary mb-4">
          About iVALT
        </h1>
        <p className="mb-6 text-justify">
          iVALT is a leading provider of patented 5+ factor identity solutions
          that empower businesses and individuals alike with secure and
          convenient identity verification. Its mobile-based OnDemand ID product
          can identify anyone, anywhere, for any application and at any time.
          New use cases include caller identity to stop social engineering,
          highly controllable document access, enhanced IOT identity, and AI
          agent lifecycle security. iVALT works with partners to deliver game
          changing solutions for a variety of markets and use cases that require
          highly secure, customizable, and granular identity verifications.
        </p>
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
        {/* <div class="mb-8 font-bold">
          <p>FOR IMMEDIATE RELEASE<br>
          01/08/2025</p>
      </div> */}
      </article>
    </main>
  );
}
