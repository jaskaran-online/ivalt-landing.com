import { ReactNode } from 'react';

type JsonLdProps = {
  data: Record<string, unknown>;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'iVALT',
    url: 'https://www.ivalt.com',
    logo: 'https://www.ivalt.com/images/logo.png',
    description:
      'iVALT offers cutting-edge identity verification solutions, including biometric authentication, secure document access (DocuID), and real-time identity confirmation (On-Demand ID) to combat fraud and deepfakes.',
    foundingDate: '2019',
    founders: [
      {
        '@type': 'Person',
        name: 'Baldev Krishan',
        jobTitle: 'Founder and CEO',
      },
      {
        '@type': 'Person',
        name: 'Brian Stout',
        jobTitle: 'Co-Founder and CPO',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pleasanton',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    sameAs: ['https://www.linkedin.com/company/ivalt'],
  };
}

export function webSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'iVALT',
    url: 'https://www.ivalt.com',
    description: 'Advanced Identity Verification & Biometric Security Solutions',
  };
}

export function webPageJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: `https://www.ivalt.com${path}`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'iVALT',
      url: 'https://www.ivalt.com',
    },
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  datePublished,
  author,
  image,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  author: string;
  image: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `https://www.ivalt.com${path}`,
    datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'iVALT',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.ivalt.com/images/logo.png',
      },
    },
    image: {
      '@type': 'ImageObject',
      url: `https://www.ivalt.com${image}`,
    },
  };
}

export function softwareApplicationJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    applicationCategory: 'SecurityApplication',
    operatingSystem: 'iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    provider: {
      '@type': 'Organization',
      name: 'iVALT',
      url: 'https://www.ivalt.com',
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://www.ivalt.com${item.url}`,
    })),
  };
}
