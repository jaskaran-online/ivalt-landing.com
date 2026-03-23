import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.ivalt.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.ivalt.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.ivalt.com/solutions',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.ivalt.com/solutions/docuid',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.ivalt.com/solutions/ondemandid',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.ivalt.com/solutions/human-bound-authority',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.ivalt.com/products',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.ivalt.com/why-ivalt',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.ivalt.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.ivalt.com/api-request',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.ivalt.com/openvpn',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://www.ivalt.com/recent-updates',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: 'https://www.ivalt.com/recent-updates/zero-trust-security-human-verified-identity-beyond-passwords',
      lastModified: new Date('2026-02-11'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://www.ivalt.com/recent-updates/ivalt-revolutionizes-document-security-with-launch-of-DocuID',
      lastModified: new Date('2025-04-22'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://www.ivalt.com/recent-updates/ondemand-id-providing-5-factors-of-Identity-validation',
      lastModified: new Date('2025-01-08'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://www.ivalt.com/recent-updates/psono-selects-ivalt-5fa',
      lastModified: new Date('2025-01-10'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://www.ivalt.com/research',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://www.ivalt.com/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://www.ivalt.com/terms-and-conditions',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
